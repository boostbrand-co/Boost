import { PageHero, CTABlock, Section, Container, SectionHeader } from "@/components/ui/primitives";
import { HeldBackList } from "@/components/system/proof";
import { proofArtifacts, heldBack } from "@/data/proof";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";
import { WorkIndex } from "./work-index";

export const metadata = meta({
  title: "Work",
  description:
    "Thirteen client case studies across the US, Mexico and Latin America. Each one shows what we saw, what we decided, why we decided it, and where every number came from.",
  path: "/work",
});

export default function WorkPage() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Selected work"
        title="Thirteen projects, with the reasoning left in."
        lead="This is a library, not a gallery. Every case study shows what we saw in the account, what we decided to do about it, why we decided it, and what it taught us. Every number names the source it came from, so you can judge the evidence rather than the adjective attached to it."
        trail={[{ label: "Work" }]}
        meta={[
          { label: "Case studies", value: "13" },
          { label: "Markets", value: "US, Mexico, LATAM" },
          { label: "Filter by", value: "Goal, market, industry, service" },
          { label: "Metric sources", value: "Named on every case" },
        ]}
      />

      <WorkIndex />

      {/* EVIDENCE THAT DID NOT MAKE IT */}
      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="Evidence review"
            number="03"
            title="What we looked at and did not publish."
            lead={`Thirty six platform screenshots were reviewed against these case studies. ${proofArtifacts.length} of them are published on the case pages, transcribed from the platform. The rest are listed here with the reason, because an agency that shows only the evidence that worked is doing the thing this site argues against.`}
          />
          <div className="mt-14">
            <HeldBackList items={heldBack} />
          </div>
        </Container>
      </Section>

      <CTABlock
        title="Your situation is not on this page."
        body="These are thirteen specific businesses with thirteen specific constraints. Tell us what feels stuck in yours and we will tell you which of these is closest, including when the honest answer is that none of them are."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "Read the fit page first", href: "/fit" }}
      />
    </>
  );
}
