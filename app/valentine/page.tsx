import { PageShell } from "@/components/layout/PageShell";
import { ValentineQuestion } from "@/components/valentine/ValentineQuestion";
import { siteContent } from "@/content/site";

export default function ValentinePage() {
  return (
    <PageShell title={siteContent.valentine.title} subtitle={siteContent.valentine.subtitle}>
      <ValentineQuestion content={siteContent.valentine} />
    </PageShell>
  );
}
