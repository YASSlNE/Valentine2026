import { BoutiqueCards } from "@/components/boutique/BoutiqueCards";
import { PageShell } from "@/components/layout/PageShell";
import { siteContent } from "@/content/site";

export default function BoutiquePage() {
  return (
    <PageShell title={siteContent.boutique.title} subtitle={siteContent.boutique.subtitle}>
      <BoutiqueCards content={siteContent.boutique} />
    </PageShell>
  );
}
