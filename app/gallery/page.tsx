import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageShell } from "@/components/layout/PageShell";
import { photos } from "@/content/photos";
import { siteContent } from "@/content/site";

export default function GalleryPage() {
  return (
    <PageShell title={siteContent.gallery.title} subtitle={siteContent.gallery.subtitle}>
      <GalleryGrid photos={photos} content={siteContent.gallery} />
    </PageShell>
  );
}
