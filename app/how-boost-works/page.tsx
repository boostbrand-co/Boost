import Link from "next/link";
import {
  Container,
  Section,
  SectionHeader,
  PageHero,
  Button,
  CTABlock,
  RelatedGrid,
} from "@/components/ui/primitives";
import { LoopDiagram } from "@/components/system/loop";
import { ScenarioDemo } from "@/components/system/scenario-demo";
import { OwnershipTable } from "@/components/system/artifacts";
import { interventionProtocol } from "@/data/system";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
  title: "How BOOST works",
  description:
    "The BOOST operating system: six phases, the artifact each one produces, the first 30 days, the ongoing cadence, and the written protocol for what happens when performance misses.",
  path: "/how-boost-works",
});

const onboarding = [
  {
    days: "Days 1 to 5",
    title: "Access and ownership transfer",
    body:
      "Ad accounts are created inside your Business Manager, or moved into it if a previous agency held them. We are added as a user on your assets. We never become the owner of one.",
    points: [
      "Full inventory of ad accounts, pixels, tags, analytics properties, domains and CRM, with the current owner named for each",
      "Anything held by a previous partner is listed with a transfer date next to it",
      "Named people on our side get named access, so every action in your accounts is attributable to a person",
      "You keep admin on everything. If you removed us tomorrow, nothing would stop running",
    ],
  },
  {
    days: "Days 6 to 12",
    title: "Measurement integrity before anything else",
    body:
      "Platform-reported numbers get reconciled against your revenue data. If the two disagree, that gap is the first thing we fix, because every decision after this one inherits it.",
    points: [
      "Duplicate and missing conversion events documented, with the fix and who has to make it",
      "Channel attribution compared against what your finance or CRM data actually shows",
      "A stated confidence level for each number we intend to act on",
      "Where a number cannot be trusted yet, we say so in writing rather than reporting it anyway",
    ],
  },
  {
    days: "Days 13 to 20",
    title: "A written diagnosis, not a deck",
    body:
      "We name what we believe the constraint is, the evidence behind it, and the result that would tell us we were wrong. It goes to you as a document you can forward and argue with.",
    points: [
      "The constraint named specifically, whether it sits in traffic, message, conversion path, offer or follow-up",
      "The evidence for it and the evidence against it, both written down",
      "Constraints outside marketing get named too: pricing, sales response time, delivery capacity, product",
      "If the honest answer is that media spend is not your problem, that is what the document says",
    ],
  },
  {
    days: "Days 21 to 30",
    title: "Plan and thresholds agreed before money moves",
    body:
      "A 90-day sequence with the numbers that govern it agreed in advance. Kill thresholds, scale thresholds, and what counts as a good outcome, settled while nobody is emotionally attached to a running ad.",
    points: [
      "Kill threshold per concept, with the day it gets checked",
      "Scale threshold, so a winner does not sit at a test budget for three weeks",
      "The one business number the engagement is judged on, agreed by you, not proposed by us",
      "First decision log entries written, dated and shared",
    ],
  },
];

const cadence = [
  {
    label: "Weekly",
    title: "Written note, no meeting",
    body:
      "What is live, what changed, what we are watching and anything blocked on your side. Short enough to read on a phone. It exists so you are never surprised at the monthly review.",
  },
  {
    label: "Bi-weekly",
    title: "Working call on live decisions",
    body:
      "Thirty minutes on decisions in flight: creative in production, thresholds hit or missed, and anything that needs your input this week rather than next month.",
  },
  {
    label: "Monthly",
    title: "The decision report",
    body:
      "Six questions: what happened, why, what we learned, what we changed, what we are testing next, and what needs a decision from you. Plus what we got wrong, before you have to ask.",
  },
  {
    label: "Quarterly",
    title: "The thesis gets re-argued",
    body:
      "Not reconfirmed. We take the growth thesis apart against the quarter's evidence, review what Creative Memory now treats as settled, and name what deserves a retest because the market moved.",
  },
];

const whenItWorks = [
  {
    t: "The idea gets named, not the ad",
    b: "A result belongs to a belief about the buyer, not to a file. We write down which belief won so it can travel.",
  },
  {
    t: "It gets isolated",
    b: "Variants are built on the same axis to find out which part actually carried the result. Otherwise you scale a coincidence.",
  },
  {
    t: "It scales against a threshold set earlier",
    b: "The scale trigger was agreed before the result existed, so nobody is arguing about it while the number is still moving.",
  },
  {
    t: "It leaves the channel it won in",
    b: "A winning message becomes landing page copy, email subject lines and sales talking points. Most of the value of a creative win is spent outside the ad account.",
  },
  {
    t: "It becomes a ruling in Creative Memory",
    b: "Written as something the next brief inherits, in language that still makes sense in twelve months.",
  },
];

export default function HowBoostWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "How BOOST works", url: "/how-boost-works" },
          ]),
        )}
      />

      <PageHero
        eyebrow="The operating system"
        title={
          <>
            Six phases,
            <br />
            all of them visible.
          </>
        }
        lead="Most agencies show you the output and keep the reasoning. BOOST runs on one loop, and every phase of it produces something you receive while it is happening. See, decide, create, run, measure, learn. Then phase 06 changes what phase 01 goes looking for."
        trail={[{ label: "How BOOST works" }]}
        meta={[
          { label: "Phases", value: "6, continuous" },
          { label: "Artifacts you receive", value: "One per phase" },
          { label: "Cadence", value: "Weekly, monthly, quarterly" },
          { label: "What you own", value: "Accounts, data, the record" },
        ]}
      />

      {/* 01 THE LOOP */}
      <Section tone="dark" id="loop">
        <Container>
          <SectionHeader
            eyebrow="The loop"
            number="01"
            title="The system is a circle, and the circle is the point."
            lead="Each phase answers one question and hands a specific artifact to the next. Open any phase below to see what it produces, who owns it, and what you see of it."
          />
          <div className="mt-16">
            <LoopDiagram />
          </div>
          <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-12">
            <p className="u-meta text-orange-500 lg:col-span-3">Why it does not end</p>
            <div className="lg:col-span-9">
              <p className="max-w-3xl text-lg leading-relaxed opacity-75">
                Phase 06 is the one nearly every agency skips, and skipping it is why so many engagements feel busy and
                flat at the same time. When a result gets written into your Creative Memory, phase 01 stops looking at
                raw platform noise and starts looking for the specific things that have already proved they matter in
                your category.
              </p>
              <p className="mt-5 max-w-3xl leading-relaxed opacity-60">
                A concrete version: once discount framing has lost twice on a given account, we stop treating a discount
                test as a neutral option. It has to earn its way back in with a reason. That is the difference between a
                team that has been running your account for a year and a team that has run twelve first months.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 WORKED EXAMPLE */}
      <Section tone="deep" id="worked-example">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="A month, end to end"
                number="02"
                title="What the loop looks like when a month goes wrong."
                lead="Three situations, each running the full sequence from the first signal to what the next cycle inherits. Pick one and watch it resolve."
              />
              <p className="mt-8 max-w-md leading-relaxed opacity-60">
                Read the Decision row in each. That is where most agency months quietly fail, because the reflex is to
                spend more into a problem that spending cannot reach. The value of a written diagnosis is that it makes
                the wrong reflex visible before the money moves.
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed opacity-45">
                These numbers are illustrative and built to show the shape of the work. Real client results, with sources
                named, are in{" "}
                <Link href="/work" className="underline underline-offset-4 hover:text-orange-500">
                  the case studies
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-7">
              <ScenarioDemo />
            </div>
          </div>
        </Container>
      </Section>

      {/* 03 FIRST 30 DAYS */}
      <Section tone="cream" id="first-30-days">
        <Container>
          <SectionHeader
            eyebrow="Onboarding"
            number="03"
            title="The first 30 days."
            lead="No campaign goes live in week one. The first month buys something more valuable than a fast start: numbers you can trust and a decision you can defend."
          />
          <ol className="mt-16 border-t border-ink-900/15">
            {onboarding.map((step) => (
              <li key={step.days} className="grid gap-6 border-b border-ink-900/15 py-10 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-3">
                  <p className="u-meta tabular-nums text-orange-600">{step.days}</p>
                  <h3 className="u-display mt-4 text-2xl sm:text-[1.75rem]">{step.title}</h3>
                </div>
                <div className="lg:col-span-9">
                  <p className="max-w-2xl text-lg leading-relaxed opacity-75">{step.body}</p>
                  <ul className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                    {step.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed opacity-70">
                        <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-orange-600" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed opacity-60">
            If the diagnosis in days 13 to 20 says your constraint is not something marketing can move, you get that in
            writing and you are free to act on it. We would rather lose the retainer than bill against a problem we
            cannot reach.
          </p>
        </Container>
      </Section>

      {/* 04 ONGOING */}
      <Section tone="dark" id="cadence">
        <Container>
          <SectionHeader
            eyebrow="Steady state"
            number="04"
            title="What ongoing months look like."
            lead="Four rhythms, each with a different job. The point of the weekly note is that the monthly report contains no surprises, and the point of the quarterly is that the plan is allowed to be wrong."
          />
          <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {cadence.map((c) => (
              <div key={c.label} className="border-b border-r border-white/10 p-7 sm:p-8">
                <p className="u-meta text-orange-500">{c.label}</p>
                <h3 className="u-display mt-6 text-2xl">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-65">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed opacity-50">
            This is the standard rhythm. It is set at kickoff and written into your engagement, because a cadence you did
            not agree to is just a calendar invite.
          </p>
        </Container>
      </Section>

      {/* 05 WORKS / MISSES */}
      <Section tone="cream" id="hits-and-misses">
        <Container>
          <SectionHeader
            eyebrow="Both directions"
            number="05"
            title="What happens when something works, and when something misses."
            lead="Every agency has an answer to the first one. Very few have a written answer to the second. Ours is on this page rather than buried in a contract."
          />
          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h3 className="u-display text-3xl">When something works</h3>
              <p className="mt-4 max-w-md leading-relaxed opacity-70">
                A win is only worth what you can repeat. Five things happen to it, in order.
              </p>
              <ol className="mt-8 border-t border-ink-900/15">
                {whenItWorks.map((w, i) => (
                  <li key={w.t} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink-900/15 py-5">
                    <span className="u-meta pt-1 tabular-nums text-orange-600">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-base font-medium">{w.t}</p>
                      <p className="mt-2 text-sm leading-relaxed opacity-65">{w.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-7">
              <h3 className="u-display text-3xl">When something misses</h3>
              <p className="mt-4 max-w-xl leading-relaxed opacity-70">
                This is the intervention protocol. It is agreed at kickoff, it runs whether or not you chase us, and the
                last row is the one that matters most.
              </p>
              <div className="u-scrollbar mt-8 overflow-x-auto">
                <table className="w-full min-w-[34rem] border-collapse text-left">
                  <caption className="sr-only">
                    BOOST intervention protocol: trigger, window and action for each level of performance miss
                  </caption>
                  <thead>
                    <tr className="u-meta opacity-55">
                      <th scope="col" className="border-b border-ink-900/25 pb-3 pr-5 font-normal">
                        Trigger
                      </th>
                      <th scope="col" className="border-b border-ink-900/25 pb-3 pr-5 font-normal">
                        Window
                      </th>
                      <th scope="col" className="border-b border-ink-900/25 pb-3 font-normal">
                        What happens
                      </th>
                    </tr>
                  </thead>
                  <tbody className="align-top">
                    {interventionProtocol.map((row) => (
                      <tr key={row.trigger} className="border-b border-ink-900/15">
                        <td className="py-5 pr-5 text-sm font-medium">{row.trigger}</td>
                        <td className="py-5 pr-5 text-sm tabular-nums opacity-60">{row.window}</td>
                        <td className="py-5 text-sm leading-relaxed opacity-75">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 border-l-2 border-orange-600 bg-orange-500/[0.07] px-6 py-5">
                <p className="u-meta text-orange-600">Why this is written down</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-80">
                  An agency that has no pre-agreed exit point has a commercial incentive to keep a failing engagement
                  alive. Writing the exit down before we start removes that incentive from the room. The operating
                  standards behind this sit on the{" "}
                  <Link href="/how-boost-works/client-control" className="underline underline-offset-4 hover:text-orange-600">
                    client control page
                  </Link>
                  , with the binding terms in your signed agreement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 06 SEE AND OWN */}
      <Section tone="dark" id="ownership">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Visibility and ownership"
                number="06"
                title="What you can see, and what you own."
                lead="Visibility is live account access rather than a screenshot in a report. Ownership is your name on the asset, from day one, without asking."
              />
              <p className="mt-8 max-w-md leading-relaxed opacity-65">
                The test is simple. If you ended this engagement on a Friday, could you keep running on Monday without
                us? For everything in this table, the answer has to be yes.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/how-boost-works/client-control" variant="outline">
                  Full governance detail
                </Button>
                <Button href="/how-boost-works/reporting" variant="ghost">
                  See a sample report →
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <OwnershipTable />
              <p className="mt-4 text-xs leading-relaxed opacity-45">
                Ownership is set up during days 1 to 5, not at the end of the engagement. Offboarding, access transfer
                and how the decision log moves with you are covered on{" "}
                <Link href="/how-boost-works/client-control" className="underline underline-offset-4 hover:text-orange-500">
                  client control
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 07 RELATED */}
      <Section tone="deep">
        <Container>
          <RelatedGrid
            title="Go deeper into the system"
            items={[
              {
                label: "Creative Memory",
                href: "/how-boost-works/creative-memory",
                note: "How a result from cycle three still shapes a brief in cycle twenty, and why the record stays yours.",
              },
              {
                label: "Reporting and the decision log",
                href: "/how-boost-works/reporting",
                note: "A sample monthly report, the six questions it answers, and the misses section.",
              },
              {
                label: "Client control",
                href: "/how-boost-works/client-control",
                note: "Ownership, AI usage, response standards, scope changes, offboarding and confidentiality.",
              },
            ]}
          />
        </Container>
      </Section>

      <CTABlock
        title="See the loop run on your numbers."
        body="Four questions about what feels stuck, then a conversation with the people who would actually be on the account. If the constraint is not something we can move, we will say that instead."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "Ways to work together", href: "/engagements" }}
      />
    </>
  );
}
