"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import type { SiteContent } from "@/content/site";

type ReasonsStackProps = {
  content: SiteContent["reasons"];
};

export function ReasonsStack({ content }: ReasonsStackProps) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const active = content.items[index];

  function goNext() {
    setIndex((state) => (state + 1) % content.items.length);
  }

  function goPrev() {
    setIndex((state) => (state - 1 + content.items.length) % content.items.length);
  }

  return (
    <div className="space-y-5">
      <motion.article
        key={active.id}
        className="panel-card mx-auto max-w-xl p-6"
        initial={shouldReduceMotion ? false : { opacity: 0, x: 18, rotate: 1 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, rotate: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -18, rotate: -1 }}
        drag={shouldReduceMotion ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.x < -90) {
            goNext();
          }

          if (info.offset.x > 90) {
            goPrev();
          }
        }}
      >
        <p className="gold-pill">{`${index + 1} / ${content.items.length}`}</p>
        <h2 className="section-title mt-4 text-2xl text-amber-950">{active.title}</h2>
        <p className="mt-3 text-base text-amber-900/85">{active.text}</p>
      </motion.article>

      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          className="rounded-full border border-gold/35 bg-white/80 px-4 py-2 text-sm font-medium text-amber-900"
        >
          {content.prevText}
        </button>
        <button
          type="button"
          onClick={goNext}
          className="rounded-full border border-gold/40 bg-lily/55 px-4 py-2 text-sm font-semibold text-amber-900"
        >
          {content.nextText}
        </button>
      </div>

      <div className="text-center">
        <Link
          href="/golden"
          className="inline-flex rounded-full border border-gold/35 bg-white/80 px-5 py-2 text-sm font-semibold text-amber-900 transition hover:bg-lily/20"
        >
          {content.cta}
        </Link>
      </div>
    </div>
  );
}
