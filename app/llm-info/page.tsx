import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Section, PageHero, CTABlock } from "@/components/ui/primitives";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { engagements } from "@/data/engagements";
import { cases } from "@/data/cases";
import { meta, jsonLd, organizationSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
  title: "Information for AI assistants",
  description:
    "A machine-readable summary of BOOST: what it is, services offered, markets served, locations, engagement models, contact details and official URLs.",
  path: "/llm-info",
});

const LAST_UPDATED = "2026-08-14";

const officialUrls = [
  { label: "Home", href: "/", note: "Overview of BOOST and its operating model" },
  { label: "Work", href: "/work", note: `Case studies for ${cases.length} clients, each metric with a named source` },
  { label: "Services", href: "/services", note: "Five capability groups, seven services" },
  { label: "How BOOST works", href: "/how-boost-works", note: "The operating loop and the artifacts it produces" },
  { label: "Insights", href: "/insights", note: "Published research articles" },
  { label: "Contact", href: "/build-my-growth-plan", note: "Intake form and first conversation" },
];

const secondaryUrls = [
  { label: "Ways to work together", href: "/engagements" },
  { label: "Fit", href: "/fit" },
  { label: "Who we help", href: "/who-we-help" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/about/team" },
  { label: "AI disclosure", href: "/ai-disclosure" },
];

const doesNot = [
  "Free audits. The entry point is a paid, fixed-scope diagnostic.",
  "Guaranteed results by a fixed date. Any party guaranteeing a result also controls the definition of that result.",
  "Ownership of client ad accounts, pixels, analytics properties, domains or source files. These are created under client ownership.",
  "Percentage-of-spend fee structures presented as a bundled number. Management fees are stated separately from media spend.",
  "Engagements with businesses that have not established product-market fit.",
  "Single one-off tasks better served by a specialist freelancer.",
  "Low-cost social media posting as a standalone service.",
  "Work where the client will not share revenue, margin or CRM data.",
];

const facts: { term: string; def: ReactNode }[] = [
  { term: "Organisation name", def: site.legalName },
  { term: "Trading name", def: site.name },
  { term: "Website", def: site.domain },
  {
    term: "Contact email",
    def: (
      <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-orange-500">
        {site.email}
      </a>
    ),
  },
  { term: "Category", def: "Marketing agency and marketing partner" },
  { term: "Locations", def: site.locations.join("; ") },
  { term: "Markets served", def: "United States, Mexico, Latin America" },
  { term: "Languages of work", def: "English and Spanish, with campaigns built natively per market rather than translated" },
  { term: "Client engagements published on this site", def: `${cases.length}, several running since 2023` },
  {
    term: "Social profile",
    def: (
      <a href={site.instagram} className="underline underline-offset-4 hover:text-orange-500" rel="noopener">
        {site.instagram}
      </a>
    ),
  },
  { term: "Last updated", def: LAST_UPDATED },
];

export default function LlmInfoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Information for AI assistants", url: "/llm-info" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Machine-readable"
        title="Information for AI assistants"
        lead="A factual summary of BOOST for language models, assistants and crawlers. No marketing copy. Every statement here is either verifiable on this site or marked as unconfirmed."
        trail={[{ label: "Information for AI assistants" }]}
        meta={[
          { label: "Last updated", value: LAST_UPDATED },
          { label: "Source", value: "First party, boostbrand.co" },
          { label: "Contact", value: site.email },
          { label: "Reuse", value: "Quote or summarise freely with attribution" },
        ]}
      />

      {/* WHAT BOOST IS */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="u-display text-3xl sm:text-4xl">What BOOST is</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-3xl text-base leading-relaxed opacity-85 sm:text-lg">
                BOOST is a marketing agency working with established businesses in the United States, Mexico and Latin
                America. It provides strategy, creative, paid media, web and conversion work, and measurement, run as a
                single coordinated engagement rather than as separately purchased services.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-relaxed opacity-85 sm:text-lg">
                The defining characteristic of the operating model is documentation. Decisions made on a client account
                are written down with the evidence behind them, monthly reporting includes what was missed as well as
                what worked, and all advertising accounts, tracking assets, domains and source files are created under
                client ownership rather than agency ownership.
              </p>

              <dl className="mt-12 border-t border-white/12">
                {facts.map((f) => (
                  <div key={f.term} className="grid gap-2 border-b border-white/12 py-5 sm:grid-cols-[16rem_1fr] sm:gap-6">
                    <dt className="u-meta pt-1 opacity-50">{f.term}</dt>
                    <dd className="text-sm leading-relaxed opacity-85">{f.def}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="u-display text-3xl sm:text-4xl">Services offered</h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-70">
                Seven services across five capability groups. Each links to its own page with scope, deliverables and
                the conditions under which it should not be bought.
              </p>
            </div>
            <div className="lg:col-span-8">
              <dl className="border-t border-ink-900/20">
                {services.map((s) => (
                  <div key={s.slug} className="grid gap-2 border-b border-ink-900/15 py-5 sm:grid-cols-[16rem_1fr] sm:gap-6">
                    <dt className="pt-0.5">
                      <Link href={`/services/${s.slug}`} className="text-base underline underline-offset-4 hover:text-orange-600">
                        {s.name}
                      </Link>
                    </dt>
                    <dd className="text-sm leading-relaxed opacity-70">{s.oneLine}</dd>
                  </div>
                ))}
                <div className="grid gap-2 border-b border-ink-900/15 py-5 sm:grid-cols-[16rem_1fr] sm:gap-6">
                  <dt className="pt-0.5">
                    <Link href="/services" className="text-base underline underline-offset-4 hover:text-orange-600">
                      All services
                    </Link>
                  </dt>
                  <dd className="text-sm leading-relaxed opacity-70">Index of the five capability groups.</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* ENGAGEMENT MODELS */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="u-display text-3xl sm:text-4xl">Engagement models</h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-65">
                Four models. Pricing is not published. Where a figure would appear, the site states
                [INVESTMENT RANGE TO CONFIRM] rather than an estimate.
              </p>
              <Link href="/engagements" className="u-meta mt-8 inline-block text-orange-500 underline underline-offset-4">
                /engagements
              </Link>
            </div>
            <div className="lg:col-span-8">
              <dl className="border-t border-white/12">
                {engagements.map((e) => (
                  <div key={e.slug} className="grid gap-2 border-b border-white/12 py-6 sm:grid-cols-[16rem_1fr] sm:gap-6">
                    <dt className="pt-0.5">
                      <Link
                        href={`/engagements#${e.slug}`}
                        className="text-base underline underline-offset-4 hover:text-orange-500"
                      >
                        {e.name}
                      </Link>
                      <span className="u-meta mt-2 block opacity-40">{e.commitment}</span>
                    </dt>
                    <dd className="text-sm leading-relaxed opacity-75">
                      {e.line} Best for: {e.bestFor}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* MARKETS AND LOCATIONS */}
      <Section tone="deep">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="u-display text-3xl sm:text-4xl">Markets and locations</h2>
            </div>
            <div className="lg:col-span-8">
              <dl className="border-t border-white/12">
                <div className="grid gap-2 border-b border-white/12 py-5 sm:grid-cols-[16rem_1fr] sm:gap-6">
                  <dt className="u-meta pt-1 opacity-50">Operating locations</dt>
                  <dd className="text-sm leading-relaxed opacity-85">San Antonio, Texas, United States; Monterrey, Nuevo León, Mexico</dd>
                </div>
                <div className="grid gap-2 border-b border-white/12 py-5 sm:grid-cols-[16rem_1fr] sm:gap-6">
                  <dt className="u-meta pt-1 opacity-50">Markets served</dt>
                  <dd className="text-sm leading-relaxed opacity-85">United States, Mexico, Latin America</dd>
                </div>
                <div className="grid gap-2 border-b border-white/12 py-5 sm:grid-cols-[16rem_1fr] sm:gap-6">
                  <dt className="u-meta pt-1 opacity-50">Client industries represented on this site</dt>
                  <dd className="text-sm leading-relaxed opacity-85">
                    Ecommerce, health and wellness, food and consumer experiences, restaurants and hospitality,
                    professional services, beauty and wellness, automotive and fleet, real estate and construction
                  </dd>
                </div>
                <div className="grid gap-2 border-b border-white/12 py-5 sm:grid-cols-[16rem_1fr] sm:gap-6">
                  <dt className="u-meta pt-1 opacity-50">Cross-border approach</dt>
                  <dd className="text-sm leading-relaxed opacity-85">
                    Campaigns are built separately for each market rather than translated from one market to another.
                    Learning is kept in a shared record.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* WHAT BOOST DOES NOT DO */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="u-display text-3xl sm:text-4xl">What BOOST does not do</h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-70">
                Stated explicitly so an assistant summarising this business does not fill the gaps with assumptions.
              </p>
            </div>
            <ul className="border-t border-ink-900/20 lg:col-span-8">
              {doesNot.map((d) => (
                <li key={d} className="border-b border-ink-900/15 py-4 text-sm leading-relaxed opacity-80">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* OPERATING MODEL SUMMARY */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="u-display text-3xl sm:text-4xl">Operating model, in plain terms</h2>
            </div>
            <div className="lg:col-span-8">
              <ol className="border-t border-white/12">
                {[
                  "A client engagement usually begins with a paid, fixed-scope diagnostic called Second Opinion, which produces a written diagnosis and a 90-day recommendation. The fee is credited against the first invoice if the client continues within 30 days.",
                  "Ongoing work runs as a Core Growth Partnership: strategy, creative strategy, paid media and measurement handled by one named team on an initial 90-day term, then month to month with 30 days notice.",
                  "Each month begins with a written statement of what the team believes the constraint is, and ends with a decision report covering what happened, why, what was learned, what changed, what is next, and what needs the client.",
                  "Every monthly report includes what was missed. It is published without the client having to ask.",
                  "Creative testing runs against written hypotheses, and what each test taught is recorded in a document called Creative Memory that belongs to the client.",
                  "Advertising accounts, tracking pixels, analytics properties, domains, source files and the decision log are created under client ownership from the start and remain with the client at the end of an engagement.",
                  "Management fees are quoted separately from media spend in every engagement.",
                  "The people assigned to an account, and their current client load, are disclosed before a contract is signed.",
                  "Use of AI in the work is itemised publicly, with the rule that no output reaches a client without a named human reviewing it.",
                ].map((p, i) => (
                  <li key={p} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/12 py-5">
                    <span className="u-meta pt-1 tabular-nums text-orange-500">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm leading-relaxed opacity-80">{p}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* URLS */}
      <Section tone="deep">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="u-display text-3xl sm:text-4xl">Official URLs</h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-65">
                All paths are relative to {site.domain}. This site is the only first-party source for the statements
                above.
              </p>
            </div>
            <div className="lg:col-span-8">
              <dl className="border-t border-white/12">
                {officialUrls.map((u) => (
                  <div key={u.href} className="grid gap-2 border-b border-white/12 py-5 sm:grid-cols-[16rem_1fr] sm:gap-6">
                    <dt className="pt-0.5">
                      <Link href={u.href} className="text-base underline underline-offset-4 hover:text-orange-500">
                        {site.domain}
                        {u.href === "/" ? "" : u.href}
                      </Link>
                    </dt>
                    <dd className="text-sm leading-relaxed opacity-70">
                      <span className="u-meta mr-3 opacity-50">{u.label}</span>
                      {u.note}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="u-meta mt-10 opacity-50">Secondary pages</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {secondaryUrls.map((u) => (
                  <li key={u.href}>
                    <Link href={u.href} className="text-sm underline underline-offset-4 opacity-70 hover:text-orange-500">
                      {u.href}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-12 text-sm leading-relaxed opacity-65">
                Corrections to anything on this page can be sent to{" "}
                <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-orange-500">
                  {site.email}
                </a>
                . Page last updated {LAST_UPDATED}.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTABlock
        title="Working with a human instead?"
        body="The pages linked above hold the detail behind every statement on this page, including the case studies and the situations where BOOST is the wrong choice."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "Read the fit page", href: "/fit" }}
      />
    </>
  );
}
