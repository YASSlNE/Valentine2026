import { SESSION_MAX_AGE_SECONDS } from "@/lib/auth/constants";

export type SessionPayload = {
  authenticated: true;
  exp: number;
};

function toBase64Url(bytes: Uint8Array): string {
  let binary = "";
  bytes.forEach((value) => {
    binary += String.fromCharCode(value);
  });

  if (typeof btoa !== "undefined") {
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }

  return Buffer.from(bytes)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromBase64Url(value: string): Uint8Array {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "===".slice((base64.length + 3) % 4);

  if (typeof atob !== "undefined") {
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return Uint8Array.from(bytes);
  }

  return Uint8Array.from(Buffer.from(padded, "base64"));
}

function toOwnedUint8Array(bytes: Uint8Array): Uint8Array {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  return copy;
}

function toArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  const buffer = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(buffer).set(bytes);
  return buffer;
}

async function getAesKey(secret: string): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const secretBytes = encoder.encode(secret);
  const digest = await crypto.subtle.digest("SHA-256", secretBytes);

  return crypto.subtle.importKey("raw", digest, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
}

export async function createSessionToken(secret: string, expiresAt?: number): Promise<string> {
  const payload: SessionPayload = {
    authenticated: true,
    exp: expiresAt ?? Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS
  };

  const key = await getAesKey(secret);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoder = new TextEncoder();
  const plaintext = encoder.encode(JSON.stringify(payload));

  const ciphertext = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: toArrayBuffer(iv)
    },
    key,
    toArrayBuffer(plaintext)
  );

  return `${toBase64Url(iv)}.${toBase64Url(new Uint8Array(ciphertext))}`;
}

export async function readSessionToken(token: string, secret: string): Promise<SessionPayload | null> {
  const parts = token.split(".");
  if (parts.length !== 2) {
    return null;
  }

  try {
    const key = await getAesKey(secret);
    const iv = toOwnedUint8Array(fromBase64Url(parts[0]));
    const ciphertext = toOwnedUint8Array(fromBase64Url(parts[1]));

    const plaintext = await crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: toArrayBuffer(iv)
      },
      key,
      toArrayBuffer(ciphertext)
    );

    const decoder = new TextDecoder();
    const parsed = JSON.parse(decoder.decode(plaintext)) as SessionPayload;

    if (!parsed?.authenticated || typeof parsed.exp !== "number") {
      return null;
    }

    const now = Math.floor(Date.now() / 1000);
    if (parsed.exp <= now) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export async function hasValidSession(token: string | undefined, secret: string): Promise<boolean> {
  if (!token) {
    return false;
  }

  const payload = await readSessionToken(token, secret);
  return Boolean(payload);
}
