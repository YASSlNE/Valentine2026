import type { ReactNode } from "react";

import { siteContent } from "@/content/site";

import { StoryNav } from "@/components/layout/StoryNav";

type PageShellProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
  showNav?: boolean;
};

export function PageShell({ children, title, subtitle, showNav = true }: PageShellProps) {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 pb-10 pt-5 sm:px-6">
      {showNav ? <StoryNav navItems={siteContent.nav} ariaLabel={siteContent.common.storyNavAriaLabel} /> : null}
      <header className="mb-6 space-y-3">
        <span className="gold-pill">{siteContent.meta.brand}</span>
        <h1 className="section-title text-3xl font-semibold leading-tight text-amber-950 sm:text-4xl">{title}</h1>
        <p className="max-w-2xl text-sm text-amber-900/80 sm:text-base">{subtitle}</p>
      </header>
      <section>{children}</section>
    </div>
  );
}
