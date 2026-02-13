import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { PageShell } from "@/components/layout/PageShell";
import { siteContent } from "@/content/site";
import { SESSION_COOKIE_NAME, getSessionSecret } from "@/lib/auth/constants";
import { hasValidSession } from "@/lib/auth/session";

type UnlockPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function UnlockPage({ searchParams }: UnlockPageProps) {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  try {
    if (await hasValidSession(token, getSessionSecret())) {
      redirect("/home");
    }
  } catch {
    // Keep the user on unlock if environment vars are missing.
  }

  const params = await searchParams;
  const shouldShowError = params.error === "1";

  return (
    <PageShell title={siteContent.unlock.title} subtitle={siteContent.unlock.subtitle} showNav={false}>
      <div className="panel-card mx-auto max-w-md space-y-4 p-6 sm:p-8">
        <p className="gold-pill">{siteContent.unlock.eyebrow}</p>
        <form action="/api/unlock" method="POST" className="space-y-3">
          <label htmlFor="passcode" className="block text-sm font-semibold text-amber-900">
            {siteContent.unlock.inputLabel}
          </label>
          <input
            id="passcode"
            name="passcode"
            type="password"
            required
            autoComplete="off"
            placeholder={siteContent.unlock.inputPlaceholder}
            className="w-full rounded-xl border border-gold/35 bg-white/80 px-4 py-2.5 text-sm text-amber-950 outline-none ring-amber-300 transition focus:ring-2"
          />
          <button
            type="submit"
            className="w-full rounded-full border border-gold/40 bg-lily/65 px-5 py-2.5 text-sm font-semibold text-amber-900 transition hover:bg-lily/80"
          >
            {siteContent.unlock.submitText}
          </button>
        </form>
        {shouldShowError ? <p className="text-sm text-red-700">{siteContent.unlock.errorText}</p> : null}
        <p className="text-xs text-amber-900/70">{siteContent.unlock.hintText}</p>
      </div>
    </PageShell>
  );
}
