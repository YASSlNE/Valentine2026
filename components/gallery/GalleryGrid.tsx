"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import type { PhotoItem } from "@/content/photos";
import type { SiteContent } from "@/content/site";

type GalleryGridProps = {
  photos: PhotoItem[];
  content: SiteContent["gallery"];
};

const POLAROID_ROTATIONS = [-2, 1, -1, 2, -1, 1];

export function GalleryGrid({ photos, content }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activePhoto = useMemo(() => {
    if (activeIndex === null) {
      return null;
    }

    return photos[activeIndex] ?? null;
  }, [activeIndex, photos]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {photos.map((photo, index) => {
          const rotation = POLAROID_ROTATIONS[index % POLAROID_ROTATIONS.length];
          return (
            <motion.button
              key={photo.id}
              type="button"
              className="polaroid text-left"
              onClick={() => setActiveIndex(index)}
              whileHover={shouldReduceMotion ? undefined : { y: -4, rotate: rotation + 0.5 }}
              style={{ rotate: `${rotation}deg` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-amber-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
              <p className="mt-2 text-xs text-amber-900/75">{photo.caption}</p>
            </motion.button>
          );
        })}
      </div>

      <Link
        href="/valentine"
        className="inline-flex rounded-full border border-gold/40 bg-lily/50 px-5 py-2 text-sm font-semibold text-amber-900 transition hover:bg-lily/65"
      >
        {content.cta}
      </Link>

      <AnimatePresence>
        {activePhoto ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-amber-950/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="w-full max-w-lg rounded-2xl border border-gold/30 bg-white p-4 shadow-soft"
              initial={shouldReduceMotion ? false : { scale: 0.95, opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[52vh] max-h-[560px] overflow-hidden rounded-xl bg-amber-100 sm:h-[58vh]">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  sizes="(max-width: 768px) 88vw, 540px"
                  className="object-contain"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-4">
                <p className="text-sm text-amber-900/80">{activePhoto.caption}</p>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="rounded-full border border-gold/35 px-3 py-1 text-xs font-semibold text-amber-900"
                >
                  {content.closeModalText}
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
