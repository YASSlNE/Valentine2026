"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/content/site";

type StoryNavProps = {
  navItems: NavItem[];
  ariaLabel: string;
};

export function StoryNav({ navItems, ariaLabel }: StoryNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={ariaLabel} className="sticky top-0 z-40 -mx-4 mb-6 overflow-x-auto border-b border-gold/25 bg-cream/85 px-4 py-3 backdrop-blur md:mx-0 md:rounded-xl md:border md:px-5">
      <div className="flex min-w-max items-center gap-2">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                active
                  ? "border-gold bg-lily/45 text-amber-900"
                  : "border-gold/30 bg-white/70 text-amber-950 hover:border-gold/60 hover:bg-lily/20"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
