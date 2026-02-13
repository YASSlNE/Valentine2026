import Link from "next/link";

import type { SiteContent } from "@/content/site";

type DreamHomeGridProps = {
  content: SiteContent["dreamHome"];
};

const toneClasses: Record<SiteContent["dreamHome"]["tiles"][number]["tone"], string> = {
  warm: "from-amber-100 to-orange-50",
  gold: "from-yellow-100 to-amber-50",
  neutral: "from-stone-100 to-zinc-50"
};

export function DreamHomeGrid({ content }: DreamHomeGridProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {content.tiles.map((tile) => (
          <article
            key={tile.id}
            className={`panel-card bg-gradient-to-br ${toneClasses[tile.tone]} p-5`}
          >
            <h2 className="section-title text-2xl text-amber-950">{tile.title}</h2>
            <p className="mt-2 text-sm text-amber-900/80">{tile.caption}</p>
          </article>
        ))}
      </div>
      <Link
        href="/boutique"
        className="inline-flex rounded-full border border-gold/35 bg-lily/50 px-5 py-2 text-sm font-semibold text-amber-900 transition hover:bg-lily/60"
      >
        {content.cta}
      </Link>
    </div>
  );
}
