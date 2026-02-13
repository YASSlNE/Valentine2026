"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import type { SiteContent } from "@/content/site";

type GoldenCornerProps = {
  content: SiteContent["golden"];
};

export function GoldenCorner({ content }: GoldenCornerProps) {
  const shouldReduceMotion = useReducedMotion();
  const [paws, setPaws] = useState<number[]>([]);

  function addPaw() {
    const next = Date.now();
    setPaws((state) => [...state.slice(-6), next]);
  }

  return (
    <div className="panel-card mx-auto max-w-2xl p-6 sm:p-8">
      <div className="space-y-4 text-center">
        <p className="gold-pill">{content.dogLabel}</p>
        <p className="text-sm text-amber-900/80">{content.caption}</p>

        <motion.div
          className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-gold/35 bg-gradient-to-br from-lily/45 to-amber-100 text-7xl"
          animate={shouldReduceMotion ? undefined : { rotate: [0, -4, 4, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          🐶
        </motion.div>

        <button
          type="button"
          onClick={addPaw}
          className="rounded-full border border-gold/40 bg-lily/60 px-5 py-2 text-sm font-semibold text-amber-900"
        >
          {content.actionText}
        </button>

        <div className="flex min-h-8 items-center justify-center gap-2">
          {paws.map((paw) => (
            <motion.span
              key={paw}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 4, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="text-xl"
            >
              🐾
            </motion.span>
          ))}
        </div>

        <Link
          href="/dream-home"
          className="inline-flex rounded-full border border-gold/35 bg-white/80 px-5 py-2 text-sm font-semibold text-amber-900 transition hover:bg-lily/20"
        >
          {content.cta}
        </Link>
      </div>
    </div>
  );
}
