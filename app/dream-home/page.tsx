import { DreamHomeGrid } from "@/components/dream-home/DreamHomeGrid";
import { PageShell } from "@/components/layout/PageShell";
import { siteContent } from "@/content/site";

export default function DreamHomePage() {
  return (
    <PageShell title={siteContent.dreamHome.title} subtitle={siteContent.dreamHome.subtitle}>
      <DreamHomeGrid content={siteContent.dreamHome} />
    </PageShell>
  );
}
