import { PageShell } from "@/components/layout/PageShell";
import { ReasonsStack } from "@/components/reasons/ReasonsStack";
import { siteContent } from "@/content/site";

export default function ReasonsPage() {
  return (
    <PageShell title={siteContent.reasons.title} subtitle={siteContent.reasons.subtitle}>
      <ReasonsStack content={siteContent.reasons} />
    </PageShell>
  );
}
