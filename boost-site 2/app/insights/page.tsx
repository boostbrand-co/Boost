import { Container, Section, SectionHeader, PageHero, CTABlock } from "@/components/ui/primitives";
import { InsightsIndex } from "./insights-index";
import { insights, insightCategories } from "@/data/insights";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
 title: "Insights",
 description:
 "Original research from BOOST on how marketing services are bought, what buyers distrust, where AI is changing agency value, and how the US and Mexico markets differ. Published in full, with methodology.",
 path: "/insights",
});

const researchNotes = [
 {
 number: "01",
 title: "We run it ourselves",
 body: "These are studies BOOST commissioned and conducted: buyer conversations mined from public forums, review platforms and industry surveys, plus structural audits of agency websites and service pricing. Nothing here is a roundup of somebody else's blog posts.",
 },
 {
 number: "02",
 title: "The method is on the page",
 body: "Where a study has a sample, we name it. Where a claim comes from an outside source, we say which kind of source. Where the finding is directional rather than measured, the article says that instead of dressing it up as a statistic.",
 },
 {
 number: "03",
 title: "It changed what we do",
 body: "Each study ends with what we altered about BOOST because of it. Research that does not change the operator's behaviour is content marketing, and we would rather not pretend otherwise.",
 },
];

export default function InsightsPage() {
 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={jsonLd(
 breadcrumbSchema([
 { name: "Home", url: "/" },
 { name: "Insights", url: "/insights" },
 ]),
 )}
 />

 <PageHero
 eyebrow="Insights"
 title="Research we run, published in full."
 lead="How businesses actually buy marketing services, what makes them leave, where AI is compressing the value of the work and where it is raising it. Every study here was run by BOOST and every one of them changed something about how we operate."
 trail={[{ label: "Insights" }]}
 meta={[
 { label: "Articles", value: String(insights.length) },
 { label: "Subjects", value: String(insightCategories.length) },
 { label: "Author", value: "BOOST research" },
 { label: "Latest", value: insights[0]?.date ?? "" },
 ]}
 />

 <InsightsIndex />

 {/* ORIGINAL RESEARCH BLOCK */}
 <Section tone="cream">
 <Container>
 <SectionHeader
 eyebrow="About this research"
 number=" "
 title="Original studies, not aggregated content."
 lead="Most agency blogs exist to catch search traffic. This section exists because we needed the answers to run the business, and publishing them is cheaper than being asked the same questions in every sales conversation."
 />
 <ol className="mt-16 grid border-t border-ink-900/15 md:grid-cols-3">
 {researchNotes.map((n) => (
 <li key={n.number} className="border-b border-ink-900/15 py-8 md:border-r md:px-8 md:first:pl-0">
 <span className="u-meta tabular-nums text-orange-600">{n.number}</span>
 <h3 className="u-display mt-5 text-2xl">{n.title}</h3>
 <p className="mt-4 text-sm leading-relaxed opacity-70">{n.body}</p>
 </li>
 ))}
 </ol>
 <p className="mt-10 max-w-2xl text-sm leading-relaxed opacity-60">
 Full methodology and source lists are available on request for any study on this page.
 </p>
 </Container>
 </Section>

 <CTABlock
 title="The research says buyers want to know who does the work."
 body="So the first call names them. Thirty minutes, a diagnosis of what is actually constraining growth, and an honest read on whether BOOST is the right answer."
 primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
 secondary={{ label: "See how BOOST works", href: "/how-boost-works" }}
 />
 </>
 );
}
