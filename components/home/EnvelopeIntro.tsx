"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";

import type { SiteContent } from "@/content/site";

type EnvelopeIntroProps = {
  content: SiteContent["home"];
};

export function EnvelopeIntro({ content }: EnvelopeIntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const flapTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" as const };
  const [phase, setPhase] = useState<"idle" | "waiting" | "opened">("idle");

  const handleClick = useCallback(() => {
    if (phase === "opened") {
      setPhase("idle");
      return;
    }
    if (phase === "waiting") return;

    setPhase("waiting");
    // Fake "smile detection" — wait 2.5s then open
    setTimeout(() => {
      setPhase("opened");
    }, 2500);
  }, [phase]);

  const opened = phase === "opened";
  const waiting = phase === "waiting";

  return (
    <div className="panel-card mx-auto flex max-w-2xl flex-col items-center gap-6 p-6 text-center sm:p-8">
      <span className="gold-pill">{content.badge}</span>

      <AnimatePresence mode="wait">
        {waiting ? (
          <motion.p
            key="smile"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-sm font-medium text-amber-900/90"
          >
            {content.smileLine}
          </motion.p>
        ) : (
          <motion.p
            key="main"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-sm text-amber-900/70"
          >
            {opened ? content.postOpenLine : content.preOpenLine}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={handleClick}
        className="relative h-48 w-full max-w-sm overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-b from-amber-50 to-yellow-100 p-0 shadow-soft"
        whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
      >
        <span className="sr-only">{content.openButton}</span>

        {/* Letter card that slides up when opened */}
        <motion.div
          className="absolute inset-x-6 top-8 rounded-xl border border-gold/25 bg-white px-4 py-4 text-center shadow-sm"
          initial={false}
          animate={opened ? { y: -16, opacity: 1 } : { y: 24, opacity: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          <p className="font-serif text-lg leading-snug text-amber-950">
            {content.postOpenLine}
          </p>
        </motion.div>

        {/* Envelope flap */}
        <motion.div
          className="absolute inset-x-0 top-0 z-10 h-24 origin-top rounded-t-2xl bg-gradient-to-b from-lily/80 to-lily/50"
          animate={opened ? { rotateX: 165 } : { rotateX: 0 }}
          transition={flapTransition}
          style={{ transformPerspective: 600 }}
        />

        {/* Bottom label — visible when idle or waiting */}
        <motion.div
          className="absolute inset-x-6 bottom-6 rounded-xl border border-gold/30 bg-white/90 px-4 py-3"
          animate={opened ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
        >
          <p className="font-serif text-xl text-amber-950">
            {waiting ? "😊 ..." : content.openButton}
          </p>
        </motion.div>
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
