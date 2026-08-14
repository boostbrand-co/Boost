import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Container,
  Section,
  SectionHeader,
  Eyebrow,
  Button,
  PageHero,
  CTABlock,
  RelatedGrid,
  DemoBadge,
} from "@/components/ui/primitives";
import { CaseCard } from "@/components/cards/cards";
import { CapabilityMap } from "@/components/system/artifacts";
import { Checklist } from "@/components/system/checklist";
import { situations, getSituation, situationSlugs } from "@/data/situations";
import { getService } from "@/data/services";
import { getCase } from "@/data/cases";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return situationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSituation(slug);
  if (!s) return meta({ title: "Situation not found", description: "This situation does not exist.", path: "/who-we-help", noIndex: true });
  return meta({
    title: s.title,
    description: `${s.line} ${s.intro.split(". ")[0]}.`,
    path: `/who-we-help/${s.slug}`,
  });
}

/* ---------------------------------------------------------------- helpers */

function Tick({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 14 14" className={`h-3.5 w-3.5 shrink-0 ${className}`}>
      <path d="M2 7.4 L5.6 11 L12 3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/* ------------------------------------------------- per-situation sections */

function ReplacingAnAgencyExtras() {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeader
          eyebrow="Before you give notice"
          number="05"
          title="What to secure before you leave."
          lead="Almost all of this is easier to move while the current relationship is still active and everyone is still being helpful. After notice, requests get slower and some of them stop being answered. Work down the list first."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Checklist
              label="Ownership checklist"
              unit="secured"
              items={[
                "Meta Business Manager ownership",
                "Meta ad account ownership",
                "Meta pixel and datasets",
                "Google Ads account ownership",
                "Google Analytics 4 property ownership",
                "Google Tag Manager container",
                "Domain registrar access",
                "DNS control",
                "Website admin and hosting",
                "Creative source files, not just exports",
                "Historical campaign exports",
                "CRM and customer data",
                "Email platform account",
                "Ad account billing details",
              ]}
              note="Nothing here is stored or sent anywhere. It is local to this page, so print it or screenshot it if you want to take it into a conversation."
            />
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/12 p-6 sm:p-7">
              <p className="u-meta text-orange-500">How to read this list</p>
              <ul className="mt-6 space-y-5 text-sm leading-relaxed opacity-75">
                <li>
                  <span className="block text-cream-100 opacity-100">Ownership is not the same as access.</span>
                  Being an admin on someone else&apos;s Business Manager is access. If your name is not on the asset,
                  you can be removed from it.
                </li>
                <li>
                  <span className="block text-cream-100 opacity-100">Source files matter more than exports.</span>
                  A folder of finished MP4s is not the same as the project files. One can be edited next quarter, the
                  other cannot.
                </li>
                <li>
                  <span className="block text-cream-100 opacity-100">History is the expensive part.</span>
                  Two years of campaign data tells the next team what has already been tried. Without it, the first
                  quarter gets spent rediscovering it.
                </li>
              </ul>
              <p className="mt-7 border-t border-white/12 pt-5 text-sm leading-relaxed opacity-60">
                If an item on this list is currently held by someone else, that is common and it is usually
                recoverable. We do this transfer with clients and we can tell you which items are worth pushing on and
                which are faster to rebuild.
              </p>
              <Link href="/how-boost-works/client-control" className="u-meta mt-6 inline-block text-orange-500">
                How ownership works here →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 border border-white/12 bg-ink-800">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/12 px-6 py-4">
            <span className="u-meta text-orange-500">Entry offer · Second Opinion</span>
            <span className="u-meta opacity-45">Fixed scope · [INVESTMENT RANGE TO CONFIRM]</span>
          </div>
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="u-display text-3xl sm:text-4xl">A paid diagnostic, not a free audit.</h3>
              <p className="mt-6 text-base leading-relaxed opacity-75">
                Free audits are sales instruments. They are built to find something alarming quickly, because the alarm
                is what closes the retainer. Second Opinion is the opposite purchase: fixed scope, fixed fee, fixed
                timeline, and built to be correct even when the correct answer is that your current agency is doing
                reasonable work and the constraint sits somewhere we do not bill for.
              </p>
              <p className="mt-5 text-base leading-relaxed opacity-75">
                You keep the diagnosis whether or not you continue, and it is written to be readable by someone who was
                not on the call. It works as evidence for a conversation with your current agency just as well as it
                works as a reason to end one.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/engagements#second-opinion">See what Second Opinion covers</Button>
                <Button href="/build-my-growth-plan" variant="outline">
                  Start the conversation
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="u-meta opacity-50">What you end up holding</p>
              <ul className="mt-6 space-y-4">
                {[
                  "A measurement integrity read across platforms, analytics and CRM",
                  "A written diagnosis naming the constraint, with the evidence attached",
                  "A 90-day recommendation in sequence, with what to do first",
                  "A recorded walkthrough your team can rewatch without you",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed opacity-75">
                    <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-orange-500" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function InHouseTeamExtras() {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeader
          eyebrow="The split"
          number="05"
          title="Your marketer keeps the wheel."
          lead="BOOST is not here to replace the internal owner. That person holds the context nobody outside the business can rebuild: what the CEO actually wants, which promise sales can keep, why the last idea died. External work only lands because someone inside is holding those things. The job is to add depth around that person, in writing, so nobody has to guess where the line is."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <p className="u-meta opacity-50">Capability split · starting template</p>
              <DemoBadge />
            </div>
            <CapabilityMap />
            <p className="mt-4 text-xs leading-relaxed opacity-50">
              This is the template we open with, not your split. Yours gets written with your team in week one and
              revisited every quarter, because capacity and priorities move.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/12 p-6 sm:p-7">
              <p className="u-meta text-orange-500">What we will not do</p>
              <ul className="mt-6 divide-y divide-white/10">
                {[
                  {
                    t: "We do not go around your marketing lead",
                    b: "If we disagree with a decision, we say it to them, not past them. Escalation happens with your lead in the room or not at all.",
                  },
                  {
                    t: "We do not hold your accounts",
                    b: "Everything is created and kept under your ownership. There is no version of leaving us that costs you an asset.",
                  },
                  {
                    t: "We do not present to your CEO without you",
                    b: "Your lead presents, or you both do. Reporting is built so it can be defended internally without translation first.",
                  },
                ].map((x) => (
                  <li key={x.t} className="py-5 first:pt-0 last:pb-0">
                    <p className="text-base leading-snug">{x.t}</p>
                    <p className="mt-2.5 text-sm leading-relaxed opacity-65">{x.b}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-sm leading-relaxed opacity-60">
              These are operating commitments, not preferences. If we break one, that is a reason to end the
              engagement and it is written into how the relationship is run.
            </p>
            <Link href="/how-boost-works/client-control" className="u-meta mt-5 inline-block text-orange-500">
              The rest of the client controls →
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

const CONSTRAINTS = [
  {
    name: "Offer",
    symptom: "People engage, ask questions, and stall before they pay.",
    test: "Change the terms for one segment and read close rate, not click rate.",
  },
  {
    name: "Positioning",
    symptom: "Every angle you test lands in the same narrow band of performance.",
    test: "Ask ten recent buyers why they chose you and count the distinct answers.",
  },
  {
    name: "Creative",
    symptom: "Output has gone up and cost per acquisition has not moved.",
    test: "Run one concept-level test with a written hypothesis instead of five variants of one idea.",
  },
  {
    name: "Channel",
    symptom: "One channel carries everything and gets more expensive each quarter.",
    test: "Hold the main budget flat and run incremental spend elsewhere for a full buying cycle.",
  },
  {
    name: "Conversion path",
    symptom: "Traffic is up, qualified enquiries are flat.",
    test: "Instrument every step from impression to sale and find where the steepest drop sits.",
  },
  {
    name: "Measurement integrity",
    symptom: "Platform-reported revenue and accounting revenue disagree, and nobody reconciles them.",
    test: "Reconcile one month of platform conversions against booked revenue, line by line.",
  },
  {
    name: "Team capacity",
    symptom: "Decisions wait days for an approver and tests expire before they conclude.",
    test: "Time-stamp the last ten decisions from request to approval and read the median.",
  },
];

function GrowthPlateauExtras() {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeader
          eyebrow="Diagnostic"
          number="05"
          title="Seven possible constraints."
          lead="A plateau has seven plausible causes and only one of them is media budget. Adding spend to a plateau caused by the conversion path buys a more expensive version of the same result. Here is each one, the symptom that points at it, and the cheapest test that confirms or clears it."
        />

        <div className="u-scrollbar mt-16 overflow-x-auto border border-white/12">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <thead>
              <tr className="u-meta border-b border-white/12 opacity-55">
                <th scope="col" className="w-[3rem] px-5 py-4 font-normal">
                  #
                </th>
                <th scope="col" className="w-[13rem] px-5 py-4 font-normal">
                  Constraint
                </th>
                <th scope="col" className="px-5 py-4 font-normal">
                  Symptom
                </th>
                <th scope="col" className="px-5 py-4 font-normal">
                  The test
                </th>
              </tr>
            </thead>
            <tbody className="align-top">
              {CONSTRAINTS.map((c, i) => (
                <tr key={c.name} className="border-b border-white/10 last:border-b-0">
                  <td className="px-5 py-5 font-mono text-xs tabular-nums opacity-40">{String(i + 1).padStart(2, "0")}</td>
                  <td className="px-5 py-5 text-base">{c.name}</td>
                  <td className="px-5 py-5 text-sm leading-relaxed opacity-70">{c.symptom}</td>
                  <td className="px-5 py-5 text-sm leading-relaxed opacity-70">{c.test}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-10 border-t border-white/12 pt-10 lg:grid-cols-12">
          <p className="u-meta opacity-50 lg:col-span-3">The uncomfortable part</p>
          <div className="space-y-5 text-base leading-relaxed opacity-75 lg:col-span-9">
            <p>
              More spend is the answer roughly as often as chance would suggest. It is chosen far more often than that
              because it is the only lever that can be pulled the same afternoon, and because it is the one an agency
              gets paid for pulling.
            </p>
            <p>
              We work the list in order of cost to fix rather than order of what we sell. If the evidence says the
              constraint is your pricing, your sales follow-up or the fact that measurement has been wrong since
              February, that is what the diagnosis says, and none of those three are things we would invoice for.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

const LAUNCH_TIMELINE = [
  { t: "T minus 8 weeks", a: "Positioning locked and the proof behind each claim agreed. Everything downstream inherits this, so it is not a week-two decision." },
  { t: "T minus 6 weeks", a: "Concept testing starts at low spend. Angles meet a real audience while there is still time to be wrong." },
  { t: "T minus 4 weeks", a: "Conversion path built and instrumented. The page exists before the campaign does, not the other way round." },
  { t: "T minus 2 weeks", a: "Pacing, thresholds and the week-one decision rules written down, including what we do if the first read is bad." },
  { t: "T minus 1 week", a: "Tracking verified end to end with test transactions. We do not launch on measurement nobody has checked." },
  { t: "Launch week", a: "Daily reads against the agreed thresholds. Decisions get executed, not invented under pressure." },
  { t: "T plus 2 weeks", a: "Scale what cleared its threshold, stop what did not, and write down why in both directions." },
  { t: "T plus 4 weeks", a: "First full read. What the launch taught, and what the next 90 days inherit from it." },
];

function LaunchingExtras() {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeader
          eyebrow="Sequence"
          number="05"
          title="Counted backwards from the date."
          lead="A launch plan built forwards from today always runs out of time in the same place: the message. Built backwards from the date, the expensive decisions land while they are still cheap to change. Dates shift by category and budget, and the order does not."
        />

        <ol className="mt-16 border-t border-white/12">
          {LAUNCH_TIMELINE.map((row, i) => {
            const isLaunch = row.t === "Launch week";
            return (
              <li
                key={row.t}
                className={`grid gap-4 border-b border-white/12 py-6 sm:grid-cols-12 sm:gap-8 sm:py-7 ${
                  isLaunch ? "bg-orange-500/[0.06]" : ""
                }`}
              >
                <div className="flex items-baseline gap-4 sm:col-span-4 sm:px-6">
                  <span className="u-meta tabular-nums opacity-35">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`u-meta ${isLaunch ? "text-orange-500" : "opacity-70"}`}>{row.t}</span>
                </div>
                <p className="text-base leading-relaxed opacity-75 sm:col-span-8 sm:px-6">{row.a}</p>
              </li>
            );
          })}
        </ol>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed opacity-60">
          If your date is closer than eight weeks, the sequence compresses rather than changes. The first conversation
          is about which steps get shortened and what that costs in certainty, which is a decision you should make
          knowingly rather than discover in launch week.
        </p>
      </Container>
    </Section>
  );
}

const SCENARIOS = [
  {
    name: "A US brand reaching US Hispanic buyers",
    changes:
      "Casting, references, the objection you have to answer first, and which proof carries weight. Media behaviour shifts too, because attention sits on different placements and different creators than your general-market plan assumes.",
    same:
      "The product, the price, the fulfilment and the compliance environment. This is one market with two audiences, so the offer does not need rebuilding, only the argument for it.",
  },
  {
    name: "A US company entering Mexico",
    changes:
      "Price expectation, payment methods, delivery expectations and where buying conversations actually happen. WhatsApp is a conversion path here, not a support channel, and the proof a buyer wants before a first purchase is different.",
    same:
      "The product truth and your standard of work. What you are genuinely good at travels. The way you currently say it usually does not.",
  },
  {
    name: "A Mexican company entering the United States",
    changes:
      "Competitive density, cost per click, claim and compliance requirements, and how much proof a US buyer needs before a first purchase. Support hours and response language stop being operations questions and start being conversion factors.",
    same:
      "Your cost structure and production capacity, which is usually the reason entering is worth doing at all. That advantage survives the border if the margin maths is done before the media plan.",
  },
];

function CrossBorderExtras() {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeader
          eyebrow="Three scenarios"
          number="05"
          title="Which crossing you are making."
          lead="Cross-border is three different jobs and they are regularly treated as one. The work below changes with the direction of travel. Language is the table stakes part of it, and it is not the part that decides the outcome."
        />

        <div className="mt-16 grid border-l border-t border-white/12 lg:grid-cols-3">
          {SCENARIOS.map((s, i) => (
            <article key={s.name} className="flex flex-col border-b border-r border-white/12 p-6 sm:p-8">
              <span className="u-meta tabular-nums text-orange-500">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="u-display mt-5 text-2xl">{s.name}</h3>
              <div className="mt-8 border-t border-white/12 pt-5">
                <p className="u-meta text-signal-amber">What changes</p>
                <p className="mt-3 text-sm leading-relaxed opacity-75">{s.changes}</p>
              </div>
              <div className="mt-6 border-t border-white/12 pt-5">
                <p className="u-meta text-signal-green">What stays the same</p>
                <p className="mt-3 text-sm leading-relaxed opacity-75">{s.same}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="u-display text-3xl sm:text-4xl">Native execution against translated execution.</h3>
            <p className="mt-6 text-base leading-relaxed opacity-70">
              The difference is not quality of language. It is whether the argument was built for the buyer who reads
              it, or built for a different buyer and then moved across.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2">
              <div className="bg-ink-800 p-6 sm:p-7">
                <p className="u-meta text-signal-red">Translated</p>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed opacity-75">
                  {[
                    "One creative set, moved through a language pass",
                    "Proof points chosen for the original market",
                    "One audience structure copied across accounts",
                    "Results in the second market read as underperformance and get more budget",
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-signal-red/70" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-ink-800 p-6 sm:p-7">
                <p className="u-meta text-signal-green">Native</p>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed opacity-75">
                  {[
                    "A separate creative hypothesis written for each market",
                    "Proof selected for what that buyer already believes",
                    "Separate audience structures and separate thresholds",
                    "One shared learning record, so a win in one market becomes a hypothesis in the other",
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-signal-green/70" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-ink-700 p-6 sm:col-span-2 sm:p-7">
                <p className="u-meta text-orange-500">The operating leverage</p>
                <p className="mt-4 text-base leading-relaxed opacity-80">
                  The commercial argument is structural. Production capacity in Monterrey, market presence in San
                  Antonio, one team running both accounts and one record of what each market taught. That produces
                  volume at a cost structure a US-only team finds hard to match, and it means the second market starts
                  from what the first one already learned instead of starting over.
                </p>
                <Link href="/insights/translation-is-not-a-market-strategy" className="u-meta mt-6 inline-block text-orange-500">
                  Our research on why translated campaigns underperform →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function SituationExtras({ slug }: { slug: string }) {
  switch (slug) {
    case "replacing-an-agency":
      return <ReplacingAnAgencyExtras />;
    case "in-house-team":
      return <InHouseTeamExtras />;
    case "growth-plateau":
      return <GrowthPlateauExtras />;
    case "launching":
      return <LaunchingExtras />;
    case "cross-border-growth":
      return <CrossBorderExtras />;
    default:
      return null;
  }
}

/* -------------------------------------------------------------- the page */

export default async function SituationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSituation(slug);
  if (!s) notFound();

  const index = situations.findIndex((x) => x.slug === s.slug);
  const next = situations[(index + 1) % situations.length];

  const relatedServiceItems = s.relatedServices
    .map((slugId) => getService(slugId))
    .filter((x): x is NonNullable<typeof x> => Boolean(x))
    .map((svc) => ({ label: svc.name, href: `/services/${svc.slug}`, note: svc.oneLine }));

  const relatedCaseItems = s.relatedCases
    .map((slugId) => getCase(slugId))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Who we help", url: "/who-we-help" },
            { name: s.title, url: `/who-we-help/${s.slug}` },
          ]),
        )}
      />

      <PageHero
        eyebrow={`Situation ${s.number}`}
        title={s.title}
        lead={s.line}
        trail={[{ label: "Who we help", href: "/who-we-help" }, { label: s.navLabel }]}
      />

      {/* 1 · INTRO */}
      <Section tone="deep">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Eyebrow number="01">The situation</Eyebrow>
            </div>
            <div className="lg:col-span-9">
              <p className="max-w-4xl text-xl leading-relaxed opacity-85 sm:text-2xl sm:leading-relaxed">{s.intro}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2 · SIGNALS */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeader
                eyebrow="Signals"
                number="02"
                title="Signals this is you."
              />
              <p className="mt-8 max-w-md text-base leading-relaxed opacity-70">
                If three or more of these are true, this page is written for you. If one is true, it may still be a
                different situation on the{" "}
                <Link href="/who-we-help" className="underline underline-offset-4 hover:text-orange-600">
                  who we help
                </Link>{" "}
                page.
              </p>
            </div>

            <ul className="border-t border-ink-900/15 lg:col-span-8">
              {s.signals.map((sig, i) => (
                <li key={sig} className="flex items-start gap-5 border-b border-ink-900/15 py-6">
                  <span className="u-meta pt-1.5 tabular-nums opacity-35">{String(i + 1).padStart(2, "0")}</span>
                  <Tick className="mt-1 text-orange-600" />
                  <span className="text-lg leading-snug">{sig}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 3 · WHAT USUALLY GOES WRONG */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="The pattern"
                number="03"
                title="What usually goes wrong."
              />
              <p className="mt-8 max-w-md text-sm leading-relaxed opacity-55">
                This is the failure pattern we see most often in this situation. It is a description of how these
                things tend to go, not a prediction about you and not a claim about anyone you currently work with.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="border-l-2 border-signal-amber bg-white/[0.03] px-6 py-7 sm:px-8 sm:py-9">
                <p className="text-xl leading-relaxed opacity-90 sm:text-2xl sm:leading-relaxed">
                  {s.whatUsuallyGoesWrong}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4 · WHAT WE DO ABOUT IT */}
      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="The response"
            number="04"
            title="What we do about it."
            lead="None of this is exotic work. The difference is that it happens in a stated order, and the order is what decides whether month seven looks different from month one."
          />

          <ol className="mt-16 border-t border-ink-900/15">
            {s.whatWeDo.map((w, i) => (
              <li key={w.heading} className="grid gap-6 border-b border-ink-900/15 py-10 lg:grid-cols-12 lg:gap-10">
                <span className="u-meta tabular-nums text-orange-600 lg:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="u-display text-3xl lg:col-span-4 lg:text-[2rem]">{w.heading}</h3>
                <p className="text-base leading-relaxed opacity-75 lg:col-span-6 lg:text-lg">{w.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 5 · SITUATION-SPECIFIC */}
      <SituationExtras slug={s.slug} />

      {/* 6 · FIRST 30 DAYS + WHAT WE NEED */}
      <Section tone="deep">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Onboarding"
                number="06"
                title="The first 30 days."
                lead="Written down before you sign, so that week three is checkable against something."
              />

              <ol className="mt-12 border-t border-white/12">
                {s.firstThirtyDays.map((d) => (
                  <li key={d.day} className="grid gap-3 border-b border-white/12 py-6 sm:grid-cols-12 sm:gap-6">
                    <span className="u-meta pt-1 text-orange-500 sm:col-span-4">{d.day}</span>
                    <p className="text-base leading-relaxed opacity-80 sm:col-span-8">{d.action}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5">
              <p className="u-meta text-orange-500">What we will need from you</p>
              <p className="mt-6 text-base leading-relaxed opacity-70">
                Not paperwork. These are the inputs that decide whether the first thirty days produce a real diagnosis
                or an educated guess.
              </p>

              <ul className="mt-8 border-t border-white/12">
                {s.proofNeeded.map((p) => (
                  <li key={p} className="flex items-start gap-4 border-b border-white/12 py-5">
                    <Tick className="mt-1.5 text-orange-500" />
                    <span className="text-base leading-relaxed opacity-80">{p}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm leading-relaxed opacity-55">
                If some of this does not exist yet, say so. Missing history is a finding, not a disqualification, and
                it changes what the first month is for.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7 · RELATED */}
      <Section tone="dark">
        <Container>
          <SectionHeader
            eyebrow="Related"
            number="07"
            title="The work behind this situation."
            lead="The services this usually draws on, and clients who arrived in roughly this position. Every metric on a case study names its source."
          />

          <div className="mt-16">
            <RelatedGrid title="Services this situation usually needs" items={relatedServiceItems} />
          </div>

          {relatedCaseItems.length > 0 && (
            <div className="mt-20">
              <p className="u-meta opacity-50">Related case studies</p>
              <div className="mt-6 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {relatedCaseItems.map((c, i) => (
                  <CaseCard key={c.slug} c={c} index={i} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/work" variant="outline">
              All case studies
            </Button>
            <Link href={`/who-we-help/${next.slug}`} className="u-meta text-orange-500 hover:text-orange-600">
              Next situation · {next.navLabel} →
            </Link>
          </div>
        </Container>
      </Section>

      <CTABlock
        title={s.ctaLabel + "."}
        body="Four questions about where you are, then a calendar that tells you who you would be meeting and what the conversation covers. No forty-minute pitch deck."
        primary={{ label: s.ctaLabel, href: "/build-my-growth-plan" }}
        secondary={{ label: "Read the fit page first", href: "/fit" }}
      />
    </>
  );
}
