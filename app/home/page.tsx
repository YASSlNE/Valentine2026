import { EnvelopeIntro } from "@/components/home/EnvelopeIntro";
import { PageShell } from "@/components/layout/PageShell";
import { siteContent } from "@/content/site";

export default function HomePage() {
  return (
    <PageShell title={siteContent.home.title} subtitle={siteContent.home.subtitle}>
      <EnvelopeIntro content={siteContent.home} />
    </PageShell>
  );
}
