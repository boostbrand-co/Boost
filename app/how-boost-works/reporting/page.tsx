import Link from "next/link";
import {
  Container,
  Section,
  SectionHeader,
  PageHero,
  Button,
  CTABlock,
  FAQ,
  RelatedGrid,
} from "@/components/ui/primitives";
import { ReportArtifact } from "@/components/system/artifacts";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
  title: "Reporting and the decision log",
  description:
    "A sample BOOST monthly report. Six questions instead of a hundred metrics, a written misses section, and a clear statement of which decisions belong to your business rather than to marketing.",
  path: "/how-boost-works/reporting",
});

const usual = [
  { t: "Impressions and reach", b: "Numbers that go up with spend by definition. They tell you the ad was served, not that anything happened." },
  { t: "Click-through rate", b: "A platform diagnostic promoted to a headline. Useful inside an account, meaningless as a measure of the month." },
  { t: "A chart with a line on it", b: "Usually week over week, usually without a stated confidence level, usually cropped to the flattering window." },
  { t: "Platform-reported conversions", b: "Rarely reconciled against revenue, so the number in the report and the number in your bank do not match and nobody mentions it." },
  { t: "A summary slide of activity", b: "What was made and posted. Effort described as outcome." },
  { t: "No misses", b: "The tests that failed either do not appear or appear as learnings with no cost attached." },
];

const ours = [
  { t: "What happened?", b: "The business number first, reconciled against your revenue data, with the confidence level stated." },
  { t: "Why?", b: "A causal read, written as an argument that can be wrong, not a description of what the chart shows." },
  { t: "What did we learn?", b: "The finding that changes something, written so it is still usable in twelve months. This is what enters Creative Memory." },
  { t: "What did we change?", b: "Actions already taken, with dates and thresholds. Not recommendations we are waiting on you to approve." },
  { t: "What are we testing next?", b: "The next hypotheses, including a deliberate counter-test so we do not over-fit to one winning idea." },
  { t: "What needs a decision from you?", b: "The short list of things that are genuinely yours to decide. Usually one item, sometimes none." },
];

const businessDecisions = [
  {
    t: "Price, margin and discount policy",
    b: "We can show you what price framing does to conversion and to lead quality. What margin you are willing to trade for volume is a business call with consequences we do not carry.",
  },
  {
    t: "Guarantees, warranties and returns",
    b: "A guarantee is often the single strongest thing in an ad. It is also a liability on your balance sheet, so the decision to extend one belongs to you.",
  },
  {
    t: "Which product or service to push",
    b: "We can tell you which one the market responds to fastest. Whether that is the one you want to grow depends on capacity, margin and where you want the business to be in three years.",
  },
  {
    t: "Sales capacity and response time",
    b: "When lead volume outruns the ability to follow up, the fix is operational. Spending more would make the problem worse, so we stop and hand it to you.",
  },
  {
    t: "Inventory, delivery and fulfilment limits",
    b: "Demand we can create beyond what you can deliver damages the brand. We need the ceiling from you, in writing, before we scale into it.",
  },
  {
    t: "What a good outcome means",
    b: "Set at kickoff and revisited quarterly. An agency that defines its own success criteria will always meet them.",
  },
];

const faqs = [
  {
    q: "Is the report shown here real?",
    a: "No. Every number in it is demonstration data, built to show the structure and the tone of a real report. It is labelled as such wherever it appears. Real client results, with sources named, are in the case studies.",
  },
  {
    q: "Can we see an actual client report?",
    a: "Yes, redacted, and only with that client's written permission. Ask during the first conversation and we will bring one. What gets removed is the client's identity and their commercial numbers. The structure, the reasoning and the misses section stay intact, because those are the parts worth looking at.",
  },
  {
    q: "Do we get a dashboard as well?",
    a: "You have live access to every account and analytics property from day one, so the raw data is always in front of you. What we will not do is send a dashboard link instead of a decision. A dashboard tells you what happened. It does not tell you what we think caused it or what we did about it.",
  },
  {
    q: "How long does it take to read?",
    a: "Under ten minutes. That is a design constraint, not a coincidence. A report nobody finishes is a report that fails at its only job, which is getting a decision made.",
  },
  {
    q: "What if we disagree with the read?",
    a: "Good. The report is written as an argument with the evidence attached, precisely so it can be argued with. Disagreements go into the decision log alongside the original reasoning, and the next cycle settles it with data rather than with seniority.",
  },
  {
    q: "What is the decision log, exactly?",
    a: "A running record of every decision that moved money or direction: the diagnosis, the decision, the rationale, and the threshold that would reverse it. It is written when the decision is made rather than reconstructed afterwards, and you can read it at any time.",
  },
];

export default function ReportingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "How BOOST works", url: "/how-boost-works" },
            { name: "Reporting and the decision log", url: "/how-boost-works/reporting" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Reporting and the decision log"
        title={
          <>
            Reporting that ends
            <br />
            in a decision.
          </>
        }
        lead="A dashboard is a place where numbers wait for someone to interpret them. A report should arrive already interpreted, with the reasoning attached, including the parts that did not go well. Ours answers six questions and takes under ten minutes to read."
        trail={[{ label: "How BOOST works", href: "/how-boost-works" }, { label: "Reporting" }]}
        meta={[
          { label: "Questions answered", value: "6, every month" },
          { label: "Misses section", value: "Always, unprompted" },
          { label: "Read time", value: "Under 10 minutes" },
          { label: "Decision log", value: "Written live, yours to read" },
        ]}
      />

      {/* 01 THE ARTIFACT */}
      <Section tone="dark" id="sample">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="The artifact"
                number="01"
                title="Open it and read the sixth question first."
                lead="That is the one most reports never ask, because asking it means admitting that some of what limits growth is not marketing's to fix."
              />
              <p className="mt-8 max-w-md leading-relaxed opacity-65">
                Below the six questions is the misses section. It is not an appendix and it is not optional. It appears
                in every report, whether or not the month went well, and whether or not you would have noticed.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/how-boost-works" variant="outline">
                  The full operating loop
                </Button>
                <Button href="/how-boost-works/creative-memory" variant="ghost">
                  Where learnings go →
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ReportArtifact />
              <div className="mt-6 border-l-2 border-orange-500 bg-orange-500/[0.06] px-5 py-4">
                <p className="u-meta text-orange-500">About this sample</p>
                <p className="mt-2.5 text-sm leading-relaxed opacity-75">
                  Every figure above is demonstration data. It was written to show the structure, the tone and the level
                  of candour of a real monthly report, not to represent a client outcome. A redacted real report is
                  available on request, with the relevant client&apos;s written permission. Real client results, each with
                  its source named, are in{" "}
                  <Link href="/work" className="underline underline-offset-4 hover:text-orange-500">
                    the case studies
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 COMPARE */}
      <Section tone="cream" id="compare">
        <Container>
          <SectionHeader
            eyebrow="The comparison"
            number="02"
            title="The usual monthly report, and this one."
            lead="The left column is not a straw man. It is the standard format, and it survives because it is easy to produce and almost impossible to be held to."
          />
          <div className="mt-16 grid gap-px border border-ink-900/15 bg-ink-900/15 lg:grid-cols-2">
            <div className="bg-cream-100 p-7 sm:p-10">
              <p className="u-meta opacity-55">The usual monthly report</p>
              <h3 className="u-display mt-5 text-3xl">Six things that went up.</h3>
              <ul className="mt-8 border-t border-ink-900/15">
                {usual.map((i) => (
                  <li key={i.t} className="border-b border-ink-900/15 py-5">
                    <p className="text-base font-medium opacity-80">{i.t}</p>
                    <p className="mt-2 text-sm leading-relaxed opacity-60">{i.b}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm leading-relaxed opacity-60">
                Read it twice and you still cannot answer the only question that matters: what should we do differently
                next month, and who has to do it?
              </p>
            </div>
            <div className="bg-cream-100 p-7 sm:p-10">
              <p className="u-meta text-orange-600">What we send</p>
              <h3 className="u-display mt-5 text-3xl">Six questions that end in an action.</h3>
              <ul className="mt-8 border-t border-ink-900/15">
                {ours.map((i, n) => (
                  <li key={i.t} className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-ink-900/15 py-5">
                    <span className="u-meta pt-1 tabular-nums text-orange-600">{String(n + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-base font-medium">{i.t}</p>
                      <p className="mt-2 text-sm leading-relaxed opacity-65">{i.b}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm leading-relaxed opacity-70">
                Platform metrics still exist and you still have live access to all of them. They sit underneath the
                argument rather than standing in for one.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 03 MISSES */}
      <Section tone="dark" id="misses">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="The misses discipline"
                number="03"
                title="We publish what we got wrong."
                lead="Every report has a section listing what we misjudged that month, what it cost, and what we changed so it does not repeat."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-px border border-white/12 bg-white/12">
                {[
                  {
                    t: "It removes the incentive to hide",
                    b: "If the misses section is expected, nobody on our side has to decide whether to mention a bad call. The decision was made once, at kickoff, and it applies to every month after that.",
                  },
                  {
                    t: "It makes the good news credible",
                    b: "A report where everything worked is not a report, it is a sales document. When you have read us admitting to a four-day delay that cost real spend, you can believe the paragraph above it.",
                  },
                  {
                    t: "It shortens the feedback loop",
                    b: "A mistake named in month three gets fixed in month four. A mistake managed quietly gets repeated until it becomes a pattern nobody can trace back to a cause.",
                  },
                  {
                    t: "It states the cost",
                    b: "The miss carries a price next to it: spend wasted, time lost, or a decision delayed. A learning with no number attached is a way of avoiding the sentence.",
                  },
                  {
                    t: "It covers our own process, not only the market",
                    b: "Broken tracking, a threshold we did not enforce, a report day we missed. Failures of execution are the ones most worth publishing, because they are the ones we control.",
                  },
                ].map((x) => (
                  <div key={x.t} className="bg-ink-800 p-6 sm:p-7">
                    <p className="text-lg">{x.t}</p>
                    <p className="mt-3 text-sm leading-relaxed opacity-65">{x.b}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed opacity-55">
                When a miss becomes a pattern rather than an incident, it stops being a paragraph and triggers the
                intervention protocol on the{" "}
                <Link href="/how-boost-works#hits-and-misses" className="underline underline-offset-4 hover:text-orange-500">
                  operating loop page
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 04 DECISIONS THAT ARE YOURS */}
      <Section tone="cream" id="your-decisions">
        <Container>
          <SectionHeader
            eyebrow="Question six"
            number="04"
            title="What needs a decision from you."
            lead="Some of what limits growth is not a marketing problem and cannot be solved by better ads. When we hit one of those, the report says so and hands it back rather than spending around it."
          />
          <div className="mt-16 grid border-l border-t border-ink-900/15 md:grid-cols-2 lg:grid-cols-3">
            {businessDecisions.map((d) => (
              <div key={d.t} className="border-b border-r border-ink-900/15 p-7 sm:p-8">
                <h3 className="text-xl leading-snug">{d.t}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-65">{d.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <p className="u-meta text-orange-600 lg:col-span-3">Why we draw the line here</p>
            <p className="max-w-3xl leading-relaxed opacity-75 lg:col-span-9">
              An agency that quietly takes these decisions is buying itself an excuse. If we set the definition of a good
              outcome, we will always have met it. If we choose which product to push, we can always explain the result.
              Keeping these with you costs us the excuse, which is the point. The full split of who owns what sits on the{" "}
              <Link href="/how-boost-works/client-control" className="underline underline-offset-4 hover:text-orange-600">
                client control page
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* 05 FAQ */}
      <Section tone="dark" id="faq">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeader eyebrow="Questions" number="05" title="About the reporting." />
            </div>
            <div className="lg:col-span-8">
              <FAQ items={faqs} />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="deep">
        <Container>
          <RelatedGrid
            title="Related"
            items={[
              {
                label: "The operating loop",
                href: "/how-boost-works",
                note: "Where the report sits in the cycle, and what phase 05 hands to phase 06.",
              },
              {
                label: "Creative Memory",
                href: "/how-boost-works/creative-memory",
                note: "What happens to a learning after the report is read.",
              },
              {
                label: "Client control",
                href: "/how-boost-works/client-control",
                note: "Account access, response standards and what you own.",
              },
            ]}
          />
        </Container>
      </Section>

      <CTABlock
        title="Ask us for the redacted one."
        body="Bring your last agency report to the first conversation. We will tell you what it is not answering, and show you a real one next to it."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "How the loop runs", href: "/how-boost-works" }}
      />
    </>
  );
}
