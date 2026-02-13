import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { SESSION_COOKIE_NAME, getSessionSecret } from "@/lib/auth/constants";
import { hasValidSession } from "@/lib/auth/session";

export default async function IndexPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  let valid = false;
  try {
    valid = await hasValidSession(token, getSessionSecret());
  } catch {
    valid = false;
  }

  redirect(valid ? "/home" : "/unlock");
}
