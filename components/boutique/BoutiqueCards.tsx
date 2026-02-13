"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { SiteContent } from "@/content/site";

type BoutiqueCardsProps = {
  content: SiteContent["boutique"];
};

export function BoutiqueCards({ content }: BoutiqueCardsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {content.cards.map((card) => (
        <motion.article
          key={card.id}
          className="panel-card group relative overflow-hidden p-5"
          whileHover={shouldReduceMotion ? undefined : { y: -5 }}
          transition={{ duration: 0.22 }}
        >
          {!shouldReduceMotion ? (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              style={{
                background:
                  "radial-gradient(circle at 25% 10%, rgba(255,255,255,0.9), transparent 20%), radial-gradient(circle at 80% 70%, rgba(248,216,96,0.4), transparent 30%)"
              }}
            />
          ) : null}
          <p className="gold-pill">{card.tag}</p>
          <h2 className="section-title mt-3 text-2xl text-amber-950">{card.title}</h2>
          <p className="mt-2 text-sm text-amber-900/80">{card.caption}</p>
        </motion.article>
      ))}
    </div>
  );
}
