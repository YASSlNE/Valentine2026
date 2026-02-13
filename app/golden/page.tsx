import { GoldenCorner } from "@/components/golden/GoldenCorner";
import { PageShell } from "@/components/layout/PageShell";
import { siteContent } from "@/content/site";

export default function GoldenPage() {
  return (
    <PageShell title={siteContent.golden.title} subtitle={siteContent.golden.subtitle}>
      <GoldenCorner content={siteContent.golden} />
    </PageShell>
  );
}
