"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import type { SiteContent } from "@/content/site";

type EnvelopeIntroProps = {
  content: SiteContent["home"];
};

export function EnvelopeIntro({ content }: EnvelopeIntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<"idle" | "waiting" | "opened">("idle");
  const [countdown, setCountdown] = useState(3);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleClick = useCallback(() => {
    if (phase === "opened") {
      setPhase("idle");
      setCountdown(3);
      return;
    }
    if (phase === "waiting") return;

    setPhase("waiting");
    setCountdown(3);
  }, [phase]);

  useEffect(() => {
    if (phase !== "waiting") return;

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setPhase("opened");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  const opened = phase === "opened";
  const waiting = phase === "waiting";

  const flapDuration = shouldReduceMotion ? 0 : 0.7;

  return (
    <div className="panel-card mx-auto flex max-w-2xl flex-col items-center gap-6 p-6 text-center sm:p-8">
      <span className="gold-pill">{content.badge}</span>

      {/* Status text — single line, no duplicate countdown */}
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
            {opened ? "" : content.preOpenLine}
          </motion.p>
        )}
      </AnimatePresence>

      {/* ── Envelope ─────────────────────────────── */}
      <div className="relative mx-auto w-full max-w-[22rem]">
        <button
          type="button"
          onClick={handleClick}
          className="relative mx-auto h-48 w-full focus:outline-none sm:h-52"
          aria-label={content.openButton}
        >
          {/* Envelope body */}
          <div className="absolute inset-0 overflow-hidden rounded-lg border border-amber-300/50 bg-gradient-to-b from-[#faf0d8] to-[#f1dfb4] shadow-[0_6px_24px_rgba(160,120,40,0.16)]">
            {/* V-fold lines on body */}
            <svg
              viewBox="0 0 352 200"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <path
                d="M0,0 L176,120 L352,0"
                fill="none"
                stroke="rgba(190,160,90,0.15)"
                strokeWidth="1.5"
              />
            </svg>
            {/* Bottom shadow stripe */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#e8d19a]/20 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-px bg-amber-300/50" />
          </div>

          {/* Folded flap (visible only when open) */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 z-[7] h-14"
            initial={false}
            animate={opened ? { opacity: 1, y: -2 } : { opacity: 0, y: 4 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.28, delay: opened ? 0.22 : 0 }}
          >
            <svg viewBox="0 0 352 72" preserveAspectRatio="none" className="h-full w-full">
              <defs>
                <linearGradient id="flapOpenFold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f3e1b8" />
                  <stop offset="100%" stopColor="#e8d19a" />
                </linearGradient>
              </defs>
              <path d="M0,72 L176,10 L352,72 Z" fill="url(#flapOpenFold)" stroke="rgba(196, 165, 92, 0.35)" />
            </svg>
          </motion.div>

          {/* Letter card — rises smoothly from inside the envelope */}
          <div className="pointer-events-none absolute left-1/2 top-5 z-[8] w-[78%] -translate-x-1/2 sm:w-[74%]">
            <motion.div
              className="rounded-lg border border-amber-200/60 bg-white px-4 py-4 text-center shadow-lg sm:px-5 sm:py-5"
              initial={false}
              animate={
                opened
                  ? { y: -30, opacity: 1, scale: 1 }
                  : { y: 34, opacity: 0, scale: 0.96 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: opened ? 0.16 : 0 }
              }
            >
              <p className="font-serif text-base leading-snug text-amber-950 sm:text-lg">
                {content.postOpenLine}
              </p>
            </motion.div>
          </div>

          {/* ── Triangular flap ──────────────────── */}
          <motion.div
            className="absolute inset-x-0 top-0 z-10 h-[6.5rem] origin-top"
            animate={opened ? { y: -18, scaleY: -0.18, opacity: 0.95 } : { y: 0, scaleY: 1, opacity: 1 }}
            transition={{ duration: flapDuration, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Front face */}
            <svg
              viewBox="0 0 352 104"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full drop-shadow-[0_3px_6px_rgba(140,100,30,0.12)]"
            >
              <defs>
                <linearGradient id="flapF" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f5e5c0" />
                  <stop offset="100%" stopColor="#ead5a0" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 L352,0 L176,100 Z"
                fill="url(#flapF)"
                stroke="rgba(200,170,100,0.3)"
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          {/* Heart seal */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={
                opened
                  ? { scale: 0, opacity: 0 }
                  : waiting
                    ? { scale: [1, 1.15, 1], opacity: 1 }
                    : { scale: 1, opacity: 1 }
              }
              transition={
                waiting
                  ? { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                  : shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.25 }
              }
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-red-500 text-xl shadow-md">
                💛
              </div>
            </motion.div>
          </div>

          {/* Bottom label */}
          <motion.div
            className="absolute inset-x-5 bottom-4 z-[6] rounded-md bg-white/85 px-4 py-2 shadow-sm backdrop-blur-sm sm:inset-x-8"
            animate={opened ? { opacity: 0, y: 6 } : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
          >
            <p className="font-serif text-lg text-amber-950">
              {waiting ? `Smile... ${countdown}` : content.openButton}
            </p>
          </motion.div>
        </button>
      </div>

      {/* Continue link */}
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
