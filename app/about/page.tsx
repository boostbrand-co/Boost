import Link from "next/link";
import {
  Container,
  Section,
  SectionHeader,
  Button,
  PageHero,
  CTABlock,
  PlaceholderNote,
  RelatedGrid,
} from "@/components/ui/primitives";
import { TeamCard } from "@/components/cards/cards";
import { cases } from "@/data/cases";
import { team, teamPreview, teamNote, teamExperienceNote } from "@/data/team";
import { site } from "@/data/site";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
  title: "About BOOST",
  description:
    "BOOST is a marketing partner working from San Antonio, Texas and Monterrey, Mexico, across the US, Mexico and Latin America. Why it exists, how the work runs day to day, and the operating principles behind it.",
  path: "/about",
});

const marketCounts = cases.reduce<Record<string, number>>((acc, c) => {
  acc[c.market] = (acc[c.market] ?? 0) + 1;
  return acc;
}, {});

const principles = [
  {
    n: "01",
    t: "Write down the decision",
    b: "Every meaningful change to an account gets a line: what we saw, what we chose, and what we expected it to do. Twelve months in, that log is the difference between a team that knows your business and a team that is guessing confidently.",
    href: "/how-boost-works/reporting",
  },
  {
    n: "02",
    t: "Publish the miss",
    b: "The monthly report has a misses section and it appears before you ask. An agency that only reports wins is teaching you nothing, and it is training itself to hide the parts that matter most.",
    href: "/how-boost-works/reporting",
  },
  {
    n: "03",
    t: "Hand over the asset",
    b: "Ad accounts, pixels, analytics, domains, source files and the decision log are created under your ownership from day one. Leaving should cost you a transition, not your history.",
    href: "/how-boost-works/client-control",
  },
  {
    n: "04",
    t: "Name the people",
    b: "You are told who runs your account and what they own before you sign, not after. The person on the call is the person in the account.",
    href: "/about/team",
  },
  {
    n: "05",
    t: "Judgment before output",
    b: "Volume is cheap now. Deciding what is worth making, and reading the result correctly, is the part that still costs something. We itemise where machines help and where a named human decides.",
    href: "/ai-disclosure",
  },
];

const dayToDay = [
  {
    t: "The month opens with a thesis",
    b: "Not a task list. A statement of what we believe the constraint is right now and what we intend to do about it, written where you can disagree with it.",
  },
  {
    t: "Creative is made against a hypothesis",
    b: "Every concept exists to answer a question. If nobody can say what a result would teach us, the concept is not ready to be produced.",
  },
  {
    t: "Media decisions get logged",
    b: "Budget moves, structural changes and kills are recorded with the reason at the time, not reconstructed at the end of the quarter.",
  },
  {
    t: "Measurement is reconciled, not reported",
    b: "Platform numbers are checked against analytics and CRM before they inform a decision. Where they disagree, the disagreement is what gets reported.",
  },
  {
    t: "The month closes with a decision report",
    b: "What happened, why, what we learned, what changed, what is next, and what needs you. Six questions rather than a hundred metrics.",
  },
  {
    t: "The learning stays with the account",
    b: "What each test taught is written into Creative Memory, which belongs to you. It is what makes month twelve better informed than month one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
        )}
      />

      <PageHero
        eyebrow="About"
        title={
          <>
            An agency built to be
            <br />
            checked, not believed.
          </>
        }
        lead="BOOST is a marketing partner working from San Antonio and Monterrey across the US, Mexico and Latin America. Strategy, creative, paid media, web and measurement run as one system, with the reasoning written down."
        trail={[{ label: "About" }]}
        meta={[
          { label: "Locations", value: site.locations.join(" · ") },
          { label: "Markets", value: "United States · Mexico · Latin America" },
          { label: "Clients in this site", value: `${cases.length}, with sources named` },
          { label: "Disciplines", value: "Strategy, creative, paid media, web, measurement" },
        ]}
      />

      {/* WHY BOOST EXISTS */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Why BOOST exists"
                number="01"
                title="The gap between claimed and checkable."
                lead="Every agency says the same six things. Transparent. Data-driven. Partners, not vendors. None of it can be verified before you sign, and most of it cannot be verified after."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-8 text-base leading-relaxed opacity-80 sm:text-lg">
                <p>
                  The buyers we meet are rarely burned by bad marketing. They are burned by not being able to tell
                  whether the marketing was bad. A report arrives, the numbers are up or down, and nothing in it
                  explains which decision produced that and whether it was the right call at the time.
                </p>
                <p>
                  So the whole business gets built on trust in people rather than evidence about work. That works until
                  the account lead leaves, or the results dip, or the person who understood the account is quietly
                  replaced by someone holding fifteen others.
                </p>
                <p>
                  BOOST exists to close that gap in the only way it can be closed: by producing artifacts. A written
                  diagnosis. A decision log. A misses section. A named owner per discipline. An ownership record you
                  can check. None of that makes us right more often. It makes it possible for you to tell.
                </p>
              </div>

              <div className="mt-12 border-l-2 border-orange-500 bg-orange-500/[0.06] px-5 py-5 sm:px-7 sm:py-6">
                <p className="u-meta text-orange-500">The test we hold ourselves to</p>
                <p className="mt-3 text-base leading-relaxed sm:text-lg">
                  If you cannot verify a claim on this site without taking our word for it, the claim should not be on
                  this site. That rule is why the case studies name their source and why the pricing on the engagements
                  page is marked unconfirmed rather than invented.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS DAY TO DAY */}
      <Section tone="cream">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Day to day"
              number="02"
              title="What a month actually contains."
              lead="Process diagrams are usually decoration. This is the sequence a retained account runs on, and each step leaves something behind that you can read."
            />
            <Button href="/how-boost-works" variant="outline">
              Open the operating loop
            </Button>
          </div>

          <ol className="mt-16 grid gap-px border border-ink-900/20 bg-ink-900/20 md:grid-cols-2 lg:grid-cols-3">
            {dayToDay.map((x, i) => (
              <li key={x.t} className="bg-cream-100 p-7 sm:p-8">
                <span className="u-meta tabular-nums text-orange-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl leading-snug">{x.t}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-70">{x.b}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* OPERATING PRINCIPLES */}
      <Section tone="dark">
        <Container>
          <SectionHeader
            eyebrow="Operating principles"
            number="03"
            title="Five rules, each with a mechanism."
            lead="A principle nobody can hold you to is a slogan. Each of these points at something concrete on this site that you can go and check."
          />

          <ol className="mt-16 border-t border-white/12">
            {principles.map((p) => (
              <li key={p.n} className="border-b border-white/12">
                <Link
                  href={p.href}
                  className="group grid gap-6 py-8 transition-colors hover:bg-white/[0.03] lg:grid-cols-12"
                >
                  <div className="flex items-start gap-5 lg:col-span-5">
                    <span className="u-meta pt-2 tabular-nums text-orange-500">{p.n}</span>
                    <h3 className="u-display text-2xl group-hover:text-orange-500 sm:text-3xl">{p.t}</h3>
                  </div>
                  <p className="text-base leading-relaxed opacity-70 lg:col-span-6">{p.b}</p>
                  <span className="u-meta self-start pt-2 text-orange-500 lg:col-span-1 lg:text-right">See it →</span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* MARKETS AND LOCATIONS */}
      <Section tone="deep">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Markets"
                number="04"
                title="Two locations, three markets."
                lead="BOOST operates from San Antonio, Texas and Monterrey, Mexico. The work runs across the United States, Mexico and Latin America, and the split matters more as an operating capability than as a line on a website."
              />
              <p className="mt-8 max-w-md text-base leading-relaxed opacity-70">
                Production capacity sits in Monterrey. Market presence sits in San Antonio. One team runs both, which is
                why campaigns for each market are built natively rather than translated from whichever one was made
                first.
              </p>
              <Button href="/who-we-help/cross-border-growth" variant="outline" className="mt-10">
                How cross-border work runs
              </Button>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2">
                {site.locations.map((loc) => (
                  <div key={loc} className="bg-ink-800 p-7 sm:p-8">
                    <p className="u-meta text-orange-500">Location</p>
                    <h3 className="u-display mt-5 text-2xl sm:text-[1.75rem]">{loc}</h3>
                    <p className="mt-4 text-sm leading-relaxed opacity-65">
                      {loc.includes("San Antonio")
                        ? "US market presence, client-side conversations and the work aimed at buyers in the United States."
                        : "Production and delivery capacity, and the base for work in Mexico and Latin America."}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border border-white/12 p-7 sm:p-8">
                <p className="u-meta opacity-45">Where the client work sits</p>
                <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-3">
                  {Object.entries(marketCounts).map(([market, count]) => (
                    <div key={market} className="border-t border-white/12 pt-4">
                      <dt className="text-sm opacity-70">{market}</dt>
                      <dd className="u-display mt-2 text-3xl tabular-nums">{count}</dd>
                    </div>
                  ))}
                </dl>
                <p className="u-meta mt-8 opacity-40">
                  Counted from the {cases.length} client engagements published on this site. Several have been running
                  since 2023. Each case names its own source.
                </p>
                <Button href="/work" variant="ghost" className="mt-4 px-0">
                  Read the case studies →
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-14 max-w-3xl">
            <PlaceholderNote>
              Founding date, legal entity name, registered addresses, headcount and any awards or platform partner
              credentials are not published here because they were not confirmed at build time. Ana to supply: year
              founded, registered entity and address for each location, current headcount, and written confirmation of
              any partner status before these can appear anywhere on the site.
            </PlaceholderNote>
          </div>
        </Container>
      </Section>

      {/* TEAM PREVIEW */}
      <Section tone="dark">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="The team"
              number="05"
              title="The people who would run it."
              lead={teamNote}
            />
            <Button href="/about/team" variant="outline">
              Full team and staffing
            </Button>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamPreview.slice(0, 3).map((m) => (
              <TeamCard key={m.slug} m={m} />
            ))}
          </div>

          <div className="mt-14 max-w-3xl">
            <PlaceholderNote>
              {`All ${team.length} people are named on the team page, with the seat each one owns. `}{teamExperienceNote}
            </PlaceholderNote>
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Next"
                number="06"
                title="The claims on this page are all checkable."
                lead="Every principle above points at a page that shows the mechanism behind it. Start with the operating loop, which is where most of them live."
              />
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <Button href="/how-boost-works" variant="primary">
                See how BOOST works
              </Button>
              <Button href="/fit" variant="outline">
                Read the fit page
              </Button>
            </div>
          </div>

          <div className="mt-16">
            <RelatedGrid
              title="Related"
              items={[
                { label: "Team", href: "/about/team", note: "Roles, ownership and staffing" },
                { label: "Ways to work together", href: "/engagements", note: "Four engagement shapes" },
                { label: "Fit", href: "/fit", note: "Including when we are wrong for you" },
                { label: "Case studies", href: "/work", note: `${cases.length} clients, sources named` },
                { label: "AI disclosure", href: "/ai-disclosure", note: "What the machine does, what we decide" },
                { label: "Information for AI", href: "/llm-info", note: "Machine-readable facts" },
              ]}
            />
          </div>
        </Container>
      </Section>

      <CTABlock
        title="Tell us what feels stuck."
        body="Four questions, then a calendar that tells you who you are meeting and what the conversation covers. No forty-minute pitch deck."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "Meet the team", href: "/about/team" }}
        tone="dark"
      />
    </>
  );
}
