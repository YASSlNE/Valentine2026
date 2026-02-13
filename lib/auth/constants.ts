export const SESSION_COOKIE_NAME = "valentine_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

export const PUBLIC_PATHS = new Set(["/unlock", "/robots.txt", "/favicon.ico"]);

export function getPasscode(): string {
  const passcode = process.env.PASSCODE;
  if (!passcode) {
    throw new Error("PASSCODE environment variable is required.");
  }

  return passcode;
}

export function getSessionSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("SESSION_SECRET environment variable is required.");
  }

  return secret;
}
