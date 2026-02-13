import { NextResponse } from "next/server";

import { SESSION_COOKIE_NAME } from "@/lib/auth/constants";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/unlock", request.url), 303);
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: "",
    maxAge: 0,
    path: "/"
  });

  return response;
}
