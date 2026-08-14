import Link from "next/link";
import {
 Container,
 Section,
 SectionHeader,
 Eyebrow,
 Button,
 Rule,
 PageHero,
 CTABlock,
 RelatedGrid,
} from "@/components/ui/primitives";
import { engagements } from "@/data/engagements";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
 title: "Ways to work with BOOST",
 description:
 "Four ways to work with BOOST: a paid diagnostic as the front door, a core growth partnership, variable capacity for in-house teams, and a launch sprint. Commitment, scope and pricing basis stated for each.",
 path: "/engagements",
});

/** Pull the pricing basis that follows the confirmed-range marker in the data string. */
function pricingBasis(investment: string) {
  const marker = "[INVESTMENT RANGE TO CONFIRM]";
  const i = investment.indexOf(marker);
  if (i === -1) return investment;
  const rest = investment.slice(i + marker.length).replace(/^[,\s]+/, "").trim();
  if (!rest) return "Confirmed in the first conversation";
  return rest.charAt(0).toUpperCase() + rest.slice(1);
}

const shape = [
 {
 n: "01",
 t: "A paid diagnostic as the front door",
 b: "Most engagements start here. Fixed scope, fixed timeline, a written diagnosis at the end. You can take it and act on it without us.",
 href: "#second-opinion",
 },
 {
 n: "02",
 t: "A core partnership as the ongoing engagement",
 b: "Strategy, creative, paid media and measurement run as one loop by named people. This is where most clients end up.",
 href: "#core-partnership",
 },
 {
 n: "03",
 t: "Variable capacity for teams that own their strategy",
 b: "You already know what you want. We add depth in one discipline and write down who owns what.",
 href: "#variable-capacity",
 },
 {
 n: "04",
 t: "A sprint for launches",
 b: "A date exists and it does not move. Work is sequenced backwards from it so the testing happens while it can still change something.",
 href: "#launch-sprint",
 },
];

export default function EngagementsPage() {
 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={jsonLd(
 breadcrumbSchema([
 { name: "Home", url: "/" },
 { name: "Ways to work together", url: "/engagements" },
 ]),
 )}
 />

 <PageHero
 eyebrow="Engagements"
 title={
 <>
 Ways to work
 <br />
 with BOOST.
 </>
 }
 lead="Four shapes, not four price tiers. The right one depends on who owns the strategy, whether a date is fixed, and how much of the work you want run rather than supported."
 trail={[{ label: "Ways to work together" }]}
 meta={[
 { label: "Engagement types", value: "Four" },
 { label: "Front door", value: "A paid diagnostic, not a free audit" },
 { label: "Fees", value: "Stated separately from media spend" },
 { label: "Ongoing term", value: "90 days, then 30 days notice" },
 ]}
 />

 {/* THE SHAPE */}
 <Section tone="dark">
 <Container>
 <div className="grid gap-14 lg:grid-cols-12">
 <div className="lg:col-span-5">
 <SectionHeader
 eyebrow="The shape of it"
 number="01"
 title="Four doors, one system behind them."
 lead="The work behind each engagement is the same operating loop. What changes is how much of it we run, who holds the strategy, and whether the end date is already on a calendar."
 />
 </div>
 <ol className="lg:col-span-7">
 {shape.map((s) => (
 <li key={s.n} className="border-t border-white/12">
 <Link
 href={s.href}
 className="group grid grid-cols-[3rem_1fr] gap-5 py-7 transition-colors hover:bg-white/[0.03]"
 >
 <span className="u-meta pt-1.5 tabular-nums text-orange-500">{s.n}</span>
 <div>
 <h3 className="text-xl leading-snug group-hover:text-orange-500 sm:text-2xl">{s.t}</h3>
 <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-65">{s.b}</p>
 </div>
 </Link>
 </li>
 ))}
 </ol>
 </div>
 </Container>
 </Section>

 {/* WHY NO FREE AUDIT */}
 <Section tone="cream">
 <Container>
 <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
 <div className="lg:col-span-5">
 <SectionHeader
 eyebrow="Why the entry point is paid"
 number="02"
 title="We do not offer a free audit."
 lead="A free audit is a sales asset. It has to find something alarming, because finding nothing would end the conversation. That incentive is built into it before anyone opens your account."
 />
 </div>
 <div className="lg:col-span-7">
 <div className="grid gap-px border border-ink-900/15 bg-ink-900/15 sm:grid-cols-2">
 <div className="bg-cream-100 p-6 sm:p-8">
 <p className="u-meta text-signal-red">A free audit</p>
 <p className="mt-4 text-sm leading-relaxed opacity-70">
 Produced quickly, by someone who is paid to open a pipeline. The finding is decided before the
 review starts. Nobody delivers a free audit that concludes you are fine.
 </p>
 </div>
 <div className="bg-cream-100 p-6 sm:p-8">
 <p className="u-meta text-signal-green">A paid diagnostic</p>
 <p className="mt-4 text-sm leading-relaxed opacity-70">
 Scoped, timeboxed and paid for, which means the only thing it has to be is correct. Including when
 correct means you do not need us, or that the problem sits somewhere marketing cannot reach.
 </p>
 </div>
 <div className="bg-cream-50 p-6 sm:col-span-2 sm:p-8">
 <p className="text-base leading-relaxed">
 The diagnostic is credited against your first invoice if you continue within 30 days. If you do not
 continue, the written diagnosis and the 90-day recommendation are still yours to act on, with anyone
 you like.
 </p>
 <Button href="#second-opinion" variant="outline" className="mt-8">
 Read what the diagnostic includes
 </Button>
 </div>
 </div>
 </div>
 </div>
 </Container>
 </Section>

 {/* THE FOUR ENGAGEMENTS */}
 <Section tone="dark">
 <Container>
 <SectionHeader
 eyebrow="The engagements"
 number="03"
 title="What each one is, in full."
 lead="Scope, commitment, what is included and what you are left holding at the end. Pricing is confirmed in conversation, so the ranges below are marked rather than guessed at."
 />

 <div className="mt-16 space-y-6">
 {engagements.map((e) => (
 <article
 key={e.slug}
 id={e.slug}
 className="scroll-mt-28 border border-white/12 bg-ink-800 p-6 sm:p-9 lg:p-12"
 >
 <div className="grid gap-10 lg:grid-cols-12">
 {/* Left: identity */}
 <div className="lg:col-span-5">
 <div className="flex flex-wrap items-center gap-3">
 <Eyebrow number={e.number}>{e.isEntry ? "Entry point" : "Engagement"}</Eyebrow>
 </div>
 <h3 className="u-display mt-6 text-3xl sm:text-4xl lg:text-[2.75rem]">{e.name}</h3>
 <p className="mt-5 text-lg leading-relaxed opacity-75">{e.line}</p>

 <dl className="mt-10 space-y-6">
 <div className="border-t border-white/12 pt-4">
 <dt className="u-meta opacity-45">Best for</dt>
 <dd className="mt-2.5 text-sm leading-relaxed opacity-80">{e.bestFor}</dd>
 </div>
 <div className="border-t border-white/12 pt-4">
 <dt className="u-meta opacity-45">Commitment</dt>
 <dd className="mt-2.5 text-sm leading-relaxed opacity-80">{e.commitment}</dd>
 </div>
 <div className="border-t border-white/12 pt-4">
 <dt className="u-meta opacity-45">Outcome</dt>
 <dd className="mt-2.5 text-sm leading-relaxed opacity-80">{e.outcome}</dd>
 </div>
 </dl>
 </div>

 {/* Right: detail */}
 <div className="lg:col-span-7">
 <p className="max-w-2xl text-base leading-relaxed opacity-75 sm:text-lg">{e.description}</p>

 <div className="mt-10">
 <p className="u-meta opacity-45">What is included</p>
 <ul className="mt-5 border-t border-white/12">
 {e.includes.map((item) => (
 <li key={item} className="flex gap-4 border-b border-white/12 py-4 text-sm leading-relaxed">
 <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-orange-500" />
 <span className="opacity-80">{item}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Investment */}
 <div className="mt-10 border-l-2 border-orange-500 bg-orange-500/[0.06] px-5 py-5 sm:px-7 sm:py-6">
 <p className="u-meta text-orange-500">Investment</p>
 <p className="mt-3 text-base leading-relaxed sm:text-lg">{e.investment}</p>
 <Rule className="my-5 border-orange-500/20" />
 <p className="text-sm leading-relaxed opacity-70">
 The range is confirmed in the first conversation, once scope, market count and media level are
 known. Management fees are always stated separately from media spend, so you can see what you
 pay us and what goes to the platforms. We do not take a percentage of spend that rises when we
 recommend spending more.
 </p>
 </div>
 </div>
 </div>
 </article>
 ))}
 </div>
 </Container>
 </Section>

 {/* COMPARISON TABLE */}
 <Section tone="cream">
 <Container>
 <SectionHeader
 eyebrow="Side by side"
 number="04"
 title="The four, compared."
 lead="Same four engagements, read across instead of down. If two look close, the deciding question is usually who owns the strategy."
 />

 <div className="u-scrollbar mt-14 overflow-x-auto">
 <table className="w-full min-w-[62rem] border-collapse text-left">
 <caption className="sr-only">
 Comparison of the four BOOST engagements across best for, commitment, what you get and how it is priced.
 </caption>
 <thead>
 <tr className="border-y border-ink-900/20">
 <th scope="col" className="u-meta w-[16%] py-4 pr-6 align-bottom opacity-55">
 Engagement
 </th>
 <th scope="col" className="u-meta w-[24%] py-4 pr-6 align-bottom opacity-55">
 Best for
 </th>
 <th scope="col" className="u-meta w-[18%] py-4 pr-6 align-bottom opacity-55">
 Commitment
 </th>
 <th scope="col" className="u-meta w-[24%] py-4 pr-6 align-bottom opacity-55">
 What you get
 </th>
 <th scope="col" className="u-meta w-[18%] py-4 align-bottom opacity-55">
 How it is priced
 </th>
 </tr>
 </thead>
 <tbody>
 {engagements.map((e) => (
 <tr key={e.slug} className="border-b border-ink-900/15 align-top">
 <th scope="row" className="py-7 pr-6 font-normal">
 <span className="u-meta tabular-nums text-orange-600">{e.number}</span>
 <Link href={`#${e.slug}`} className="mt-2 block text-lg leading-snug hover:text-orange-600">
 {e.name}
 </Link>
 </th>
 <td className="py-7 pr-6 text-sm leading-relaxed opacity-70">{e.bestFor}</td>
 <td className="py-7 pr-6 text-sm leading-relaxed opacity-70">{e.commitment}</td>
 <td className="py-7 pr-6 text-sm leading-relaxed opacity-70">
 <ul className="space-y-2">
 {e.includes.slice(0, 3).map((item) => (
 <li key={item} className="flex gap-3">
 <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-orange-600" />
 <span>{item}</span>
 </li>
 ))}
 </ul>
 {e.includes.length > 3 && (
 <p className="u-meta mt-3 opacity-45">Plus {e.includes.length - 3} more</p>
 )}
 </td>
 <td className="py-7 text-sm leading-relaxed">
 <span className="u-meta block text-orange-600">[INVESTMENT RANGE TO CONFIRM]</span>
 <span className="mt-2.5 block opacity-70">{pricingBasis(e.investment)}</span>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <p className="mt-8 max-w-3xl text-sm leading-relaxed opacity-60">
 Every figure on this page is marked as unconfirmed on purpose. Pricing is set against your scope in the
 first conversation and written down before anything starts. Management fees are stated separately from
 media spend in every engagement above.
 </p>
 </Container>
 </Section>

 {/* HOW ENGAGEMENTS PROGRESS */}
 <Section tone="deep">
 <Container>
 <SectionHeader
 eyebrow="Sequence"
 number="05"
 title="How engagements usually progress."
 lead="There are two common paths. Neither is a ladder we push people up, and both have an exit that does not cost you your accounts or your data."
 />

 <div className="mt-16 grid gap-6 lg:grid-cols-2">
 <div className="border border-white/12 p-7 sm:p-9">
 <p className="u-meta text-orange-500">Path A</p>
 <h3 className="u-display mt-5 text-2xl sm:text-3xl">Second Opinion into Core Partnership</h3>
 <ol className="mt-8 border-t border-white/12">
 {[
 {
 t: "Second Opinion",
 b: "Fixed scope. We name the constraint and write the 90-day recommendation, with the evidence attached.",
 },
 {
 t: "You decide",
 b: "Take the diagnosis in house, give it to another agency, or continue with us. All three are real options and the document reads the same way in each case.",
 },
 {
 t: "Core Growth Partnership",
 b: "If you continue, the recommendation becomes the first quarter's plan rather than a fresh discovery phase.",
 },
 ].map((s, i) => (
 <li key={s.t} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/12 py-5">
 <span className="u-meta pt-1 tabular-nums opacity-40">{String(i + 1).padStart(2, "0")}</span>
 <div>
 <p className="text-base">{s.t}</p>
 <p className="mt-2 text-sm leading-relaxed opacity-65">{s.b}</p>
 </div>
 </li>
 ))}
 </ol>
 </div>

 <div className="border border-white/12 p-7 sm:p-9">
 <p className="u-meta text-orange-500">Path B</p>
 <h3 className="u-display mt-5 text-2xl sm:text-3xl">Core Partnership plus Variable Capacity</h3>
 <ol className="mt-8 border-t border-white/12">
 {[
 {
 t: "Core Growth Partnership",
 b: "The loop runs. Strategy, creative, media and measurement are coordinated by the same named team.",
 },
 {
 t: "A specific discipline runs short",
 b: "Usually production volume or web work, once testing starts asking for more than the retained scope covers.",
 },
 {
 t: "Variable Capacity added",
 b: "Agreed capacity in that discipline, scoped by output, scaled up or down between cycles rather than renegotiated each time.",
 },
 ].map((s, i) => (
 <li key={s.t} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/12 py-5">
 <span className="u-meta pt-1 tabular-nums opacity-40">{String(i + 1).padStart(2, "0")}</span>
 <div>
 <p className="text-base">{s.t}</p>
 <p className="mt-2 text-sm leading-relaxed opacity-65">{s.b}</p>
 </div>
 </li>
 ))}
 </ol>
 </div>
 </div>

 <div className="mt-6 border-l-2 border-orange-500 bg-orange-500/[0.06] px-5 py-5 sm:px-7 sm:py-6">
 <p className="u-meta text-orange-500">The credit</p>
 <p className="mt-3 max-w-3xl text-base leading-relaxed">
 The Second Opinion fee is credited against your first invoice if you continue within 30 days. It is
 written into the diagnostic scope, not offered as a closing incentive at the end of the call.
 </p>
 </div>

 <div className="mt-16 grid gap-10 border-t border-white/12 pt-12 lg:grid-cols-12">
 <div className="lg:col-span-6">
 <h3 className="u-display text-2xl sm:text-3xl">Not sure any of these apply?</h3>
 <p className="mt-5 max-w-xl text-base leading-relaxed opacity-70">
 The fit page lists the situations where BOOST is the wrong answer, and what we would suggest instead.
 It is worth reading before you book anything, including with us.
 </p>
 </div>
 <div className="flex flex-wrap items-start gap-3 lg:col-span-6 lg:justify-end">
 <Button href="/fit" variant="primary">
 Read the fit page
 </Button>
 <Button href="/how-boost-works" variant="outline">
 See how the work runs
 </Button>
 </div>
 </div>
 </Container>
 </Section>

 <Section tone="dark">
 <Container>
 <RelatedGrid
 title="Related"
 items={[
 { label: "Fit", href: "/fit", note: "Including when we are the wrong answer" },
 { label: "How BOOST works", href: "/how-boost-works", note: "The operating loop and its artifacts" },
 { label: "Client control", href: "/how-boost-works/client-control", note: "Ownership, misses, offboarding" },
 { label: "Reporting", href: "/how-boost-works/reporting", note: "What arrives every month" },
 { label: "Team", href: "/about/team", note: "Who is on an account" },
 { label: "Case studies", href: "/work", note: "Results with the decisions attached" },
 ]}
 />
 </Container>
 </Section>

 <CTABlock
 title="Start with the diagnosis."
 body="Four questions about what feels stuck, then a conversation about which of these four shapes actually fits. If none of them do, we will say so."
 primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
 secondary={{ label: "Read the fit page first", href: "/fit" }}
 />
 </>
 );
}
