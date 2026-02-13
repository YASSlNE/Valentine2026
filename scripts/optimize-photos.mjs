import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const SOURCE_DIR = path.join(process.cwd(), "Photos");
const OUTPUT_DIR = path.join(process.cwd(), "public", "photos");
const CONTENT_PATH = path.join(process.cwd(), "content", "photos.ts");

const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic"]);

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function toLabel(input) {
  const cleaned = input
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) {
    return "Memory";
  }

  return cleaned
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function detectOrientation(width, height) {
  if (!width || !height) {
    return "portrait";
  }

  const ratio = width / height;
  if (ratio > 1.08) {
    return "landscape";
  }
  if (ratio < 0.92) {
    return "portrait";
  }
  return "square";
}

async function ensureDirectories() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(path.dirname(CONTENT_PATH), { recursive: true });
}

async function cleanOutputDirectory() {
  const existingFiles = await fs.readdir(OUTPUT_DIR);
  await Promise.all(
    existingFiles
      .filter((file) => file.endsWith(".webp"))
      .map((file) => fs.unlink(path.join(OUTPUT_DIR, file)))
  );
}

async function collectSourcePhotos() {
  const files = await fs.readdir(SOURCE_DIR);
  return files
    .filter((fileName) => {
      const extension = path.extname(fileName).toLowerCase();
      return allowedExtensions.has(extension);
    })
    .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base", numeric: true }));
}

async function optimizePhoto(fileName, index) {
  const inputPath = path.join(SOURCE_DIR, fileName);
  const originalName = path.basename(fileName, path.extname(fileName));
  const slug = slugify(originalName) || `photo-${index + 1}`;
  const outputName = `${String(index + 1).padStart(2, "0")}-${slug}.webp`;
  const outputPath = path.join(OUTPUT_DIR, outputName);

  const image = sharp(inputPath).rotate();
  const metadata = await image.metadata();

  const width = metadata.width ?? 1200;
  const height = metadata.height ?? 1600;

  const maxEdge = Math.max(width, height);
  const resizeOptions =
    maxEdge > 1800
      ? {
          width: 1800,
          height: 1800,
          fit: "inside",
          withoutEnlargement: true
        }
      : undefined;

  await image
    .resize(resizeOptions)
    .webp({ quality: 84 })
    .toFile(outputPath);

  return {
    id: `photo-${String(index + 1).padStart(2, "0")}`,
    src: `/photos/${outputName}`,
    caption: `Add caption for photo ${index + 1}`,
    alt: toLabel(originalName),
    orientation: detectOrientation(width, height)
  };
}

async function writeContent(entries) {
  const body = `export type PhotoOrientation = "portrait" | "landscape" | "square";\n\nexport type PhotoItem = {\n  id: string;\n  src: string;\n  caption: string;\n  alt: string;\n  orientation: PhotoOrientation;\n};\n\nexport const photos: PhotoItem[] = ${JSON.stringify(entries, null, 2)};\n`;

  await fs.writeFile(CONTENT_PATH, body, "utf8");
}

async function run() {
  await ensureDirectories();
  await cleanOutputDirectory();

  const sourcePhotos = await collectSourcePhotos();
  if (!sourcePhotos.length) {
    await writeContent([]);
    console.log("No source photos found in Photos directory.");
    return;
  }

  const entries = [];

  for (const [index, fileName] of sourcePhotos.entries()) {
    const entry = await optimizePhoto(fileName, index);
    entries.push(entry);
  }

  await writeContent(entries);
  console.log(`Optimized ${entries.length} photos into public/photos and updated content/photos.ts`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
