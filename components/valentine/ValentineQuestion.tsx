"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import type { SiteContent } from "@/content/site";

type ValentineQuestionProps = {
  content: SiteContent["valentine"];
};

const petals = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${(index * 13) % 100}%`,
  delay: index * 0.28,
  duration: 3 + (index % 4)
}));

export function ValentineQuestion({ content }: ValentineQuestionProps) {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const responseText = useMemo(() => {
    if (answer === "yes") {
      return content.yesResponse;
    }

    if (answer === "no") {
      return content.noResponse;
    }

    return null;
  }, [answer, content.noResponse, content.yesResponse]);

  return (
    <div className="panel-card relative mx-auto max-w-2xl overflow-hidden p-6 text-center sm:p-8">
      {!shouldReduceMotion ? (
        <div className="pointer-events-none absolute inset-0">
          {petals.map((petal) => (
            <motion.span
              key={petal.id}
              className="absolute top-[-10%] h-3 w-2 rounded-full bg-lily/70"
              style={{ left: petal.left }}
              initial={{ y: "-15%", opacity: 0 }}
              animate={{ y: "115%", opacity: [0, 0.85, 0] }}
              transition={{
                duration: petal.duration,
                delay: petal.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              }}
            />
          ))}
        </div>
      ) : null}

      <div className="relative z-10 space-y-6">
        <h2 className="section-title text-3xl text-amber-950">{content.question}</h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setAnswer("yes")}
            className="rounded-full border border-gold/40 bg-lily/60 px-5 py-2 text-sm font-semibold text-amber-900 transition hover:bg-lily/75"
          >
            {content.yesText}
          </button>
          <button
            type="button"
            onClick={() => setAnswer("no")}
            className="rounded-full border border-gold/35 bg-white/80 px-5 py-2 text-sm font-semibold text-amber-900 transition hover:bg-white"
          >
            {content.noText}
          </button>
        </div>
        {responseText ? (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-amber-900/80"
          >
            {responseText}
          </motion.p>
        ) : null}

        <Link
          href="/reasons"
          className="inline-flex rounded-full border border-gold/40 bg-white/80 px-5 py-2 text-sm font-semibold text-amber-900 transition hover:bg-lily/20"
        >
          {content.nextButton}
        </Link>
      </div>
    </div>
  );
}
