import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { PUBLIC_PATHS, SESSION_COOKIE_NAME } from "@/lib/auth/constants";
import { hasValidSession } from "@/lib/auth/session";

function isPublicPath(pathname: string): boolean {
  if (PUBLIC_PATHS.has(pathname)) {
    return true;
  }

  if (pathname.startsWith("/_next") || pathname.startsWith("/photos") || pathname.startsWith("/api/")) {
    return true;
  }

  return false;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicPath(pathname)) {
    if (pathname !== "/unlock") {
      return NextResponse.next();
    }

    const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    const secret = process.env.SESSION_SECRET;

    if (!secret) {
      return NextResponse.next();
    }

    if (await hasValidSession(token, secret)) {
      return NextResponse.redirect(new URL("/home", request.url));
    }

    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const secret = process.env.SESSION_SECRET;

  if (!secret || !(await hasValidSession(token, secret))) {
    return NextResponse.redirect(new URL("/unlock", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!favicon.ico).*)"]
};
