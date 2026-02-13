"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import type { SiteContent } from "@/content/site";

type EnvelopeIntroProps = {
  content: SiteContent["home"];
};

export function EnvelopeIntro({ content }: EnvelopeIntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const flapTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" as const };
  const [opened, setOpened] = useState(false);

  return (
    <div className="panel-card mx-auto flex max-w-2xl flex-col items-center gap-6 p-6 text-center sm:p-8">
      <span className="gold-pill">{content.badge}</span>
      <p className="text-sm text-amber-900/70">{opened ? content.postOpenLine : content.preOpenLine}</p>

      <motion.button
        type="button"
        onClick={() => setOpened((state) => !state)}
        className="relative h-48 w-full max-w-sm overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-b from-amber-50 to-yellow-100 p-0 shadow-soft"
        whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
      >
        <span className="sr-only">{content.openButton}</span>
        <motion.div
          className="absolute inset-x-0 top-0 h-24 origin-top rounded-t-2xl bg-gradient-to-b from-lily/80 to-lily/50"
          animate={opened ? { rotateX: 165 } : { rotateX: 0 }}
          transition={flapTransition}
          style={{ transformPerspective: 600 }}
        />
        <div className="absolute inset-x-6 bottom-6 rounded-xl border border-gold/30 bg-white/90 px-4 py-3">
          <p className="font-serif text-xl text-amber-950">{content.openButton}</p>
        </div>
      </motion.button>

      <Link
        href="/letter"
        className={`rounded-full border border-gold/40 px-5 py-2 text-sm font-semibold text-amber-900 transition ${
          opened ? "bg-lily/60 hover:bg-lily/70" : "pointer-events-none bg-white/50 opacity-60"
        }`}
      >
        {content.continueButton}
      </Link>
    </div>
  );
}
