import { NextResponse } from "next/server";

import {
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE_SECONDS,
  getPasscode,
  getSessionSecret
} from "@/lib/auth/constants";
import { createSessionToken } from "@/lib/auth/session";

export async function POST(request: Request) {
  const formData = await request.formData();
  const passcodeInput = String(formData.get("passcode") ?? "").trim();

  let passcode = "";
  let secret = "";

  try {
    passcode = getPasscode();
    secret = getSessionSecret();
  } catch {
    return NextResponse.redirect(new URL("/unlock?error=1", request.url));
  }

  if (passcodeInput !== passcode) {
    return NextResponse.redirect(new URL("/unlock?error=1", request.url));
  }

  const token = await createSessionToken(secret);
  const response = NextResponse.redirect(new URL("/home", request.url));

  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS
  });

  return response;
}
