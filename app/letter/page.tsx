import Link from "next/link";

import { PageShell } from "@/components/layout/PageShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteContent } from "@/content/site";

export default function LetterPage() {
  return (
    <PageShell title={siteContent.letter.title} subtitle={siteContent.letter.subtitle}>
      <FadeIn className="panel-card mx-auto max-w-3xl p-6 sm:p-8">
        <p className="section-title text-2xl text-amber-950">{siteContent.letter.greeting}</p>
        <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-amber-900/85">
          {siteContent.letter.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-6 text-sm font-medium text-amber-900">{siteContent.letter.signOff}</p>
      </FadeIn>
      <div className="mt-5 text-center">
        <Link
          href="/gallery"
          className="inline-flex rounded-full border border-gold/35 bg-lily/55 px-5 py-2 text-sm font-semibold text-amber-900 transition hover:bg-lily/70"
        >
          {siteContent.letter.nextButton}
        </Link>
      </div>
    </PageShell>
  );
}
