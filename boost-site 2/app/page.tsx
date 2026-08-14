import Link from "next/link";
import { Container, Section, SectionHeader, Eyebrow, Button, CTABlock } from "@/components/ui/primitives";
import { ScenarioDemo } from "@/components/system/scenario-demo";
import { CreativeTestTable } from "@/components/system/artifacts";
import { CaseCard, SituationCard, TeamCard } from "@/components/cards/cards";
import { cases } from "@/data/cases";
import { situations } from "@/data/situations";
import { serviceGroups } from "@/data/services";
import { loop } from "@/data/system";
import { team, teamPreview, teamNote } from "@/data/team";
import { insights } from "@/data/insights";
import { meta } from "@/lib/seo";

export const metadata = meta({
 title: "BOOST® · Marketing you can actually watch work",
 description:
 "BOOST is a marketing partner for established businesses across the US and Mexico. Strategy, creative and paid media run as one system, with every decision written down and every account owned by you.",
 path: "/",
});

// Featured cases are the four whose numbers are now backed by a platform
// screenshot transcribed on the case page. The 45x to 67x return figure was
// removed from this position on 2026-08-14: no evidence in the asset review
// supports its attribution method or spend context, so it does not lead.
const featured = ["neurovita", "kto-partes", "encanto-colombiano", "caviar-de-monte"]
 .map((s) => cases.find((c) => c.slug === s)!)
 .filter(Boolean);

export default function HomePage() {
 return (
 <>
 {/* HERO */}
 <section className="relative overflow-hidden bg-ink-900 pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
 <Container>
 <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
 <div className="lg:col-span-6 lg:pt-6">
 <Eyebrow>Marketing partner · United States and Mexico</Eyebrow>
 <h1 className="u-display mt-7 text-[2.9rem] sm:text-6xl lg:text-[4.5rem]">
 Marketing you can
 <br />
 actually watch work.
 </h1>
 <p className="mt-8 max-w-xl text-lg leading-relaxed opacity-75 sm:text-xl">
 Most agencies show you results and hide the reasoning. We show you the decision behind every result, the
 evidence behind every decision, and what the next one inherits from it.
 </p>
 <div className="mt-10 flex flex-wrap gap-3">
 <Button href="/build-my-growth-plan">Build my growth plan</Button>
 <Button href="/how-boost-works" variant="outline">
 See how BOOST works
 </Button>
 </div>
 <dl className="mt-14 grid max-w-lg grid-cols-3 gap-5">
 <div className="border-t border-white/12 pt-4">
 <dt className="u-meta opacity-45">Markets</dt>
 <dd className="mt-2 text-sm">US · Mexico · LATAM</dd>
 </div>
 <div className="border-t border-white/12 pt-4">
 <dt className="u-meta opacity-45">Working since</dt>
 <dd className="mt-2 text-sm">2023 with current clients</dd>
 </div>
 <div className="border-t border-white/12 pt-4">
 <dt className="u-meta opacity-45">You own</dt>
 <dd className="mt-2 text-sm">Every account, day one</dd>
 </div>
 </dl>
 </div>

 <div className="lg:col-span-6">
 <ScenarioDemo />
 <p className="mt-4 text-xs leading-relaxed opacity-45">
 A worked example of how a month actually runs. The numbers are illustrative, built to show the shape of
 the work. Real client results are in{" "}
 <Link href="/work" className="underline underline-offset-4 hover:text-orange-500">
 the case studies
 </Link>
, with sources named.
 </p>
 </div>
 </div>
 </Container>
 </section>

 {/* EXPERIENCE STRIP */}
 <section className="border-y border-white/10 bg-ink-800 py-10">
 <Container>
 <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
 <p className="u-meta shrink-0 opacity-45">Selected experience</p>
 <div className="u-scrollbar flex gap-x-8 gap-y-3 overflow-x-auto sm:flex-wrap sm:justify-end">
 {cases.slice(0, 8).map((c) => (
 <span key={c.slug} className="shrink-0 text-sm opacity-55">
 {c.client}
 </span>
 ))}
 </div>
 </div>
 <p className="mt-6 text-xs opacity-35">
 Clients shown are businesses BOOST has run paid media, creative or measurement work for. Logo usage pending
 written approval from each client.
 </p>
 </Container>
 </section>

 {/* SELECTED RESULTS */}
 <Section tone="dark">
 <Container>
 <div className="flex flex-wrap items-end justify-between gap-6">
 <SectionHeader
 eyebrow="Selected work"
 number="01"
 title="Results, with the decisions attached."
 lead="Every case below links to what we saw, what we decided, why, and what it taught us. The numbers came from BOOST's own portfolio and each one names its source."
 />
 <Button href="/work" variant="outline">
 All case studies
 </Button>
 </div>

 <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
 {featured.map((c, i) => (
 <CaseCard key={c.slug} c={c} index={i} />
 ))}
 </div>
 </Container>
 </Section>

 {/* HOW BOOST WORKS */}
 <Section tone="cream">
 <Container>
 <div className="grid gap-14 lg:grid-cols-12">
 <div className="lg:col-span-5">
 <SectionHeader
 eyebrow="The operating loop"
 number="02"
 title="Six steps that keep going."
 lead="Most agency process diagrams are decoration. This one is the actual sequence, and each phase produces an artifact you can read."
 />
 <Button href="/how-boost-works" className="mt-10" variant="outline">
 Open the operating system
 </Button>
 </div>
 <ol className="lg:col-span-7">
 {loop.map((p) => (
 <li key={p.key} className="grid grid-cols-[3.5rem_1fr] gap-5 border-t border-ink-900/15 py-6">
 <span className="u-meta pt-1.5 tabular-nums text-orange-600">{p.number}</span>
 <div>
 <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
 <h3 className="text-2xl">{p.name}</h3>
 <span className="text-sm opacity-55">{p.question}</span>
 </div>
 <p className="mt-2.5 text-sm leading-relaxed opacity-65">{p.artifactCaption}</p>
 </div>
 </li>
 ))}
 </ol>
 </div>
 </Container>
 </Section>

 {/* CAPABILITIES */}
 <Section tone="dark">
 <Container>
 <SectionHeader
 eyebrow="Capabilities"
 number="03"
 title="Five groups, one system."
 lead="We are deliberately not listing twenty services. What matters is how these connect, because that is where most agency engagements quietly fall apart."
 />
 <div className="mt-16 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
 {serviceGroups.map((g) => (
 <Link
 key={g.slug}
 href="/services"
 className="group border-b border-r border-white/10 p-7 transition-colors hover:bg-white/[0.03] sm:p-8"
 >
 <span className="u-meta tabular-nums text-orange-500">{g.number}</span>
 <h3 className="u-display mt-5 text-2xl group-hover:text-orange-500">{g.name}</h3>
 <p className="mt-3 text-sm opacity-60">{g.line}</p>
 <p className="mt-5 text-sm leading-relaxed opacity-45">{g.blurb}</p>
 </Link>
 ))}
 <Link
 href="/services"
 className="flex flex-col justify-between border-b border-r border-white/10 bg-orange-500/[0.06] p-7 transition-colors hover:bg-orange-500/10 sm:p-8"
 >
 <span className="u-meta text-orange-500">All capabilities</span>
 <span className="u-display mt-8 text-2xl">
 How the five
 <br />
 fit together →
 </span>
 </Link>
 </div>
 </Container>
 </Section>

 {/* CHOOSE YOUR SITUATION */}
 <Section tone="deep">
 <Container>
 <SectionHeader
 eyebrow="Start where you are"
 number="04"
 title="Which of these is you?"
 lead="Most people arrive here in one of five situations. Each has its own page, because the honest answer to your question depends on which one you are in."
 />
 <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
 {situations.map((s) => (
 <SituationCard
 key={s.slug}
 href={`/who-we-help/${s.slug}`}
 number={s.number}
 title={s.title}
 line={s.line}
 signals={s.signals}
 />
 ))}
 <Link
 href="/fit"
 className="flex flex-col justify-between border-b border-r border-white/10 p-6 transition-colors hover:bg-white/[0.03] sm:p-8"
 >
 <span className="u-meta text-orange-500">06</span>
 <div>
 <h3 className="u-display mt-5 text-2xl">None of these, or not sure?</h3>
 <p className="mt-4 text-sm leading-relaxed opacity-60">
 The fit page includes the situations where we are the wrong answer, which is more useful than another
 sales page.
 </p>
 <span className="u-meta mt-7 block text-orange-500">Read the fit page →</span>
 </div>
 </Link>
 </div>
 </Container>
 </Section>

 {/* INTELLIGENCE */}
 <Section tone="dark">
 <Container>
 <div className="grid gap-14 lg:grid-cols-12">
 <div className="lg:col-span-5">
 <SectionHeader
 eyebrow="Creative Memory"
 number="05"
 title="Month twelve should be smarter than month one."
 lead="Most engagements reset every quarter. Someone leaves, a report gets buried, and the same test runs again eighteen months later. We keep a written record of what each test taught, and it stays yours."
 />
 <div className="mt-10 flex flex-wrap gap-3">
 <Button href="/how-boost-works/creative-memory" variant="outline">
 How the memory works
 </Button>
 <Button href="/how-boost-works/reporting" variant="ghost">
 See a real report →
 </Button>
 </div>
 </div>
 <div className="lg:col-span-7">
 <CreativeTestTable />
 </div>
 </div>
 </Container>
 </Section>

 {/* WHY BOOST, MECHANISMS */}
 <Section tone="cream">
 <Container>
 <SectionHeader
 eyebrow="Why BOOST"
 number="06"
 title="Mechanisms, not adjectives."
 lead="Every agency says it is transparent and accountable. These are the specific things we do that make those words checkable."
 />
 <div className="mt-16 grid gap-px border border-ink-900/15 bg-ink-900/15 md:grid-cols-2 lg:grid-cols-3">
 {[
 {
 t: "You meet the people who do the work",
 b: "Named operators with defined ownership, disclosed before you sign rather than after. The person on the call is the person on the account.",
 href: "/about/team",
 },
 {
 t: "You own everything from day one",
 b: "Ad accounts, pixels, analytics, domain, source files, historical data and the decision log. All created under your ownership, not ours.",
 href: "/how-boost-works/client-control",
 },
 {
 t: "Reporting ends in a decision",
 b: "Six questions, not a hundred metrics. What happened, why, what we learned, what changed, what is next, and what needs you.",
 href: "/how-boost-works/reporting",
 },
 {
 t: "We publish what we got wrong",
 b: "Every monthly report has a misses section. It appears before you have to ask about it.",
 href: "/how-boost-works/reporting",
 },
 {
 t: "There is a written protocol for missing",
 b: "Including the point at which we recommend ending the engagement ourselves. It is on the client control page, not buried in a contract.",
 href: "/how-boost-works/client-control",
 },
 {
 t: "AI usage is itemised",
 b: "What the machine does, what humans decide, and the rule that nothing reaches you without a named human reviewing it.",
 href: "/ai-disclosure",
 },
 ].map((item) => (
 <Link key={item.t} href={item.href} className="group bg-cream-100 p-7 transition-colors hover:bg-cream-50 sm:p-8">
 <h3 className="text-xl leading-snug group-hover:text-orange-600">{item.t}</h3>
 <p className="mt-4 text-sm leading-relaxed opacity-65">{item.b}</p>
 </Link>
 ))}
 </div>
 </Container>
 </Section>

 {/* CROSS-BORDER */}
 <Section tone="dark">
 <Container>
 <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
 <div className="lg:col-span-6">
 <SectionHeader
 eyebrow="Cross-border"
 number="07"
 title="Two markets, built natively in both."
 lead="Translation moves words. It does not move the reasons someone decides to buy. We build separately for each market and keep the learning in one place, with people in San Antonio and Monterrey."
 />
 <Button href="/who-we-help/cross-border-growth" className="mt-10" variant="outline">
 How cross-border work runs
 </Button>
 </div>
 <div className="lg:col-span-6">
 <div className="grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2">
 {[
 { t: "Translated campaign", b: "One creative set, one set of references, one proof structure, pushed into a second language.", tone: "bad" },
 { t: "Native campaign", b: "Separate hypotheses, separate proof, separate audience structures, one shared learning record.", tone: "good" },
 ].map((x) => (
 <div key={x.t} className="bg-ink-800 p-6">
 <p className={`u-meta ${x.tone === "good" ? "text-signal-green" : "text-signal-red"}`}>{x.t}</p>
 <p className="mt-4 text-sm leading-relaxed opacity-70">{x.b}</p>
 </div>
 ))}
 <div className="bg-ink-700 p-6 sm:col-span-2">
 <p className="text-sm leading-relaxed opacity-75">
 The commercial advantage is the operating structure: production capacity in Mexico, market presence in
 the US, one team running both. We say that plainly rather than calling ourselves bilingual and leaving
 it there.
 </p>
 </div>
 </div>
 </div>
 </div>
 </Container>
 </Section>

 {/* TEAM PREVIEW */}
 <Section tone="deep">
 <Container>
 <div className="flex flex-wrap items-end justify-between gap-6">
 <SectionHeader
 eyebrow="The team"
 number="08"
 title={`${team.length} named people, not a stock photo.`}
 lead={teamNote}
 />
 <Button href="/about/team" variant="outline">
 Full team
 </Button>
 </div>
 <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
 {teamPreview.slice(0, 4).map((m) => (
 <TeamCard key={m.slug} m={m} />
 ))}
 </div>
 </Container>
 </Section>

 {/* INSIGHTS */}
 <Section tone="dark">
 <Container>
 <div className="flex flex-wrap items-end justify-between gap-6">
 <SectionHeader
 eyebrow="Insights"
 number="09"
 title="Research we run, published in full."
 lead="Original research on how agencies are bought, what buyers actually distrust, and where AI is changing the value of marketing work."
 />
 <Button href="/insights" variant="outline">
 All insights
 </Button>
 </div>
 <div className="mt-14 grid border-l border-t border-white/10 md:grid-cols-3">
 {insights.slice(0, 3).map((a) => (
 <Link key={a.slug} href={`/insights/${a.slug}`} className="group border-b border-r border-white/10 p-7 transition-colors hover:bg-white/[0.03]">
 <p className="u-meta text-orange-500">{a.category}</p>
 <h3 className="mt-5 text-xl leading-snug group-hover:text-orange-500">{a.title}</h3>
 <p className="mt-4 text-sm leading-relaxed opacity-60">{a.excerpt}</p>
 <p className="u-meta mt-7 opacity-40">{a.readTime} read</p>
 </Link>
 ))}
 </div>
 </Container>
 </Section>

 <CTABlock
 title="Tell us what feels stuck."
 body="Four questions, then a calendar that tells you who you are meeting and what the conversation covers. No forty-minute pitch deck."
 primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
 secondary={{ label: "Read the fit page first", href: "/fit" }}
 />
 </>
 );
}
