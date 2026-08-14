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
import { ArtifactFrame, MemoryTable } from "@/components/system/artifacts";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
  title: "Creative Memory",
  description:
    "Most marketing engagements reset every few months. Creative Memory is the written record of what every test taught, held per client, and it stays yours if you leave.",
  path: "/how-boost-works/creative-memory",
});

const resetModes = [
  {
    n: "01",
    t: "The person leaves",
    b: "The strategist who knew why the January test failed moves to another account, or another agency. Nothing they knew was ever written down in a form anyone else could use, so it leaves with them.",
  },
  {
    n: "02",
    t: "The report gets buried",
    b: "The finding existed. It sat in slide 34 of a deck in a shared drive nobody opens. A report that is never read again is a cost, not an asset.",
  },
  {
    n: "03",
    t: "The same test runs again",
    b: "Eighteen months later, a new team proposes the discount test that already failed twice. It gets approved, because there is no record to argue with. You pay for the same lesson three times.",
  },
];

const recordFields = [
  {
    group: "What we believed",
    fields: [
      {
        label: "Customer insight",
        value: "Buyers compare against doing nothing, not against competitors",
        note: "Where the belief came from: sales calls, reviews, search behaviour, prior tests",
      },
      {
        label: "Hypothesis",
        value: "Cost-of-inaction framing will outperform feature comparison",
        note: "Written before production, with the threshold that would disprove it",
      },
    ],
  },
  {
    group: "What we made",
    fields: [
      {
        label: "Concept",
        value: "The cost of waiting, told through one customer's timeline",
        note: "The idea, separated from the asset, so the idea can be reused",
      },
      {
        label: "Format",
        value: "Vertical video, 24 seconds, founder voiceover",
        note: "Recorded so format can be ruled in or out independently of the idea",
      },
      {
        label: "Channel",
        value: "Paid social, cold audiences",
        note: "The same idea can win in one channel and fail in another. Both get logged",
      },
    ],
  },
  {
    group: "What happened",
    fields: [
      {
        label: "Result",
        value: "Confirmed. 1.4x on qualified conversion over 21 days",
        note: "With the confidence level stated, including when the honest answer is not conclusive",
      },
      {
        label: "Learning",
        value: "The comparison this audience runs is against inaction, not against a rival",
        note: "Written in language that still makes sense to someone new twelve months from now",
      },
      {
        label: "Next test",
        value: "Apply inaction framing to the landing page headline and the sales follow-up email",
        note: "The record ends in an instruction, otherwise it is trivia",
      },
    ],
  },
];

const monthOne = [
  "Category assumptions borrowed from other accounts, held loosely",
  "A hypothesis with no local evidence behind it yet",
  "Every axis open, so testing is broad and slow to resolve",
  "Kill thresholds set from judgment rather than from your data",
  "A brief that has to explain the buyer from scratch",
];

const monthTwelve = [
  "Four rulings on this audience that have already survived a retest",
  "Two message axes ruled out in writing, with the numbers attached",
  "A measured decay window per channel, so production is scheduled against it",
  "Kill thresholds calibrated on eleven cycles of your own results",
  "A brief that starts at the edge of what is already known",
];

const faqs = [
  {
    q: "Is Creative Memory a piece of software?",
    a: "No. It is an operating methodology and a written client intelligence record. It lives in structured documentation inside the shared workspace for your account, in a format you can read, export and keep. We are not selling you a platform, and we do not claim to own a product you would lose access to.",
  },
  {
    q: "Who can see it?",
    a: "You and the named people on your account. It is your record. You can read every entry as it is written rather than seeing a summary of it later, and you can export the whole thing at any point without asking for a reason.",
  },
  {
    q: "What happens to it if we stop working together?",
    a: "It goes with you. The full record is exported and handed over as part of offboarding, alongside the decision log, creative source files and historical campaign data. We do not keep it as leverage and we do not use one client's record to run another client's account.",
  },
  {
    q: "Do losing tests go in?",
    a: "Especially losing tests. A ruling that closes off an expensive direction saves more money than most winners make. The Creative Memory table on this page shows one entry where the hypothesis was not supported, and that entry removed a variable from all future testing.",
  },
  {
    q: "How is this different from a shared drive of old reports?",
    a: "A drive stores documents. This stores rulings. Every entry ends in something the next decision inherits: a direction ruled out, a threshold recalibrated, a standard applied everywhere. It is reviewed every quarter, which is when things that were true a year ago get challenged rather than quietly assumed.",
  },
  {
    q: "Does it slow the work down?",
    a: "Writing an entry takes minutes because the thinking already happened when the hypothesis was written. What it removes is the far more expensive habit of rediscovering something you already paid to learn.",
  },
];

export default function CreativeMemoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "How BOOST works", url: "/how-boost-works" },
            { name: "Creative Memory", url: "/how-boost-works/creative-memory" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Creative Memory"
        title={
          <>
            Month twelve should be
            <br />
            smarter than month one.
          </>
        }
        lead="It usually is not. Most marketing engagements quietly reset every few months, and the client pays for the same lesson more than once. Creative Memory is the written record that stops that happening, held per account and handed to you if you leave."
        trail={[{ label: "How BOOST works", href: "/how-boost-works" }, { label: "Creative Memory" }]}
        meta={[
          { label: "What it is", value: "Methodology and written record" },
          { label: "What it is not", value: "Proprietary software" },
          { label: "Updated", value: "Every cycle, win or lose" },
          { label: "Who owns it", value: "You" },
        ]}
      />

      {/* 01 THE PROBLEM */}
      <Section tone="cream" id="the-reset">
        <Container>
          <SectionHeader
            eyebrow="The problem"
            number="01"
            title="Three ways an engagement forgets what it learned."
            lead="This is not an accusation about bad agencies. It happens to good ones, and it happens to in-house teams too, because nobody is paid to maintain the record."
          />
          <div className="mt-16 grid border-l border-t border-ink-900/15 md:grid-cols-3">
            {resetModes.map((m) => (
              <div key={m.n} className="border-b border-r border-ink-900/15 p-7 sm:p-8">
                <p className="u-meta tabular-nums text-orange-600">{m.n}</p>
                <h3 className="u-display mt-6 text-2xl">{m.t}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-70">{m.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-lg leading-relaxed opacity-75">
            The cost is not the wasted test budget. It is that your marketing never compounds. Twelve months of spend
            buys twelve first months, and the account is exactly as smart in December as it was in January.
          </p>
        </Container>
      </Section>

      {/* 02 THE RECORD */}
      <Section tone="dark" id="record">
        <Container>
          <SectionHeader
            eyebrow="The record"
            number="02"
            title="Every cycle adds a row."
            lead="This is the shape of it. The column that does the work is the last one, because a finding with no ruling attached is just a fact nobody acts on."
          />
          <div className="mt-16">
            <MemoryTable />
          </div>
          <div className="mt-10 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-3">
            <p className="u-meta text-orange-500">Read the third row</p>
            <p className="leading-relaxed opacity-70 lg:col-span-2">
              The cycle 06 entry is a hypothesis that was not supported. Video length correlated with nothing, so length
              was removed as a testing variable and the opening three seconds were tested instead. That single ruling
              redirected months of production effort. It is the kind of entry that never survives in a deck, because
              nobody wants to present a test that did not win.
            </p>
          </div>
        </Container>
      </Section>

      {/* 03 STRUCTURE OF A RECORD */}
      <Section tone="deep" id="structure">
        <Container>
          <SectionHeader
            eyebrow="Anatomy"
            number="03"
            title="What one record actually contains."
            lead="Eight fields, written in three stages: what we believed, what we made, what happened. The fields are deliberately separate so a format can fail without taking a good idea down with it."
          />
          <div className="mt-16">
            <ArtifactFrame
              label="Creative Memory record · single entry"
              caption="Fields are filled in sequence. The first two are written before anything is produced, which is what makes the result readable afterwards."
            >
              <div className="space-y-8">
                {recordFields.map((stage, si) => (
                  <div key={stage.group}>
                    <div className="flex items-center gap-4">
                      <span className="u-meta tabular-nums text-orange-500">{`0${si + 1}`}</span>
                      <span className="u-meta opacity-60">{stage.group}</span>
                      <span aria-hidden className="h-px flex-1 bg-white/10" />
                    </div>
                    <div className="mt-4 grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-3">
                      {stage.fields.map((f) => (
                        <div key={f.label} className="bg-ink-800 p-5">
                          <p className="u-meta text-orange-500">{f.label}</p>
                          <p className="mt-3 text-sm leading-snug">{f.value}</p>
                          <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-relaxed opacity-50">
                            {f.note}
                          </p>
                        </div>
                      ))}
                    </div>
                    {si < recordFields.length - 1 && (
                      <p aria-hidden className="mt-4 text-center text-sm opacity-25">
                        ↓
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </ArtifactFrame>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed opacity-55">
            Splitting concept from format from channel is the part most teams skip. Without it, a strong idea shot badly
            in the wrong placement gets recorded as a bad idea, and you never test it again.
          </p>
        </Container>
      </Section>

      {/* 04 MONTH 1 VS MONTH 12 */}
      <Section tone="cream" id="compounding">
        <Container>
          <SectionHeader
            eyebrow="Compounding"
            number="04"
            title="What a decision inherits."
            lead="Same account, same team, same budget. The only difference is what the brief starts from. This is the entire argument for keeping the record."
          />
          <div className="mt-16 grid gap-px border border-ink-900/15 bg-ink-900/15 lg:grid-cols-2">
            <div className="bg-cream-100 p-7 sm:p-10">
              <p className="u-meta opacity-55">Month 01</p>
              <h3 className="u-display mt-5 text-3xl">A decision inherits assumptions.</h3>
              <ul className="mt-8 border-t border-ink-900/15">
                {monthOne.map((i) => (
                  <li key={i} className="border-b border-ink-900/15 py-4 text-sm leading-relaxed opacity-70">
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm leading-relaxed opacity-60">
                Nothing here is wrong. It is just expensive, because the account has to buy its own evidence before it
                can act on any of it.
              </p>
            </div>
            <div className="bg-cream-100 p-7 sm:p-10">
              <p className="u-meta text-orange-600">Month 12</p>
              <h3 className="u-display mt-5 text-3xl">A decision inherits rulings.</h3>
              <ul className="mt-8 border-t border-ink-900/15">
                {monthTwelve.map((i) => (
                  <li key={i} className="border-b border-ink-900/15 py-4 text-sm leading-relaxed opacity-80">
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm leading-relaxed opacity-60">
                The budget did not change. The search space did. Fewer directions are open, the ones still open are
                better argued, and a test that resolves in ten days is not repeating one that resolved in cycle three.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 05 WHAT IT IS AND IS NOT */}
      <Section tone="dark" id="what-it-is">
        <Container>
          <SectionHeader
            eyebrow="Being precise"
            number="05"
            title="What this is, stated plainly."
            lead="Plenty of agencies name a methodology and imply a product behind it. We would rather be accurate about what you are getting, because you are going to find out either way."
          />
          <div className="mt-16 grid gap-px border border-white/12 bg-white/12 lg:grid-cols-2">
            <div className="bg-ink-800 p-7 sm:p-10">
              <p className="u-meta text-orange-500">It is</p>
              <ul className="mt-7 space-y-5">
                {[
                  "An operating methodology: a defined way of recording what each test taught, applied in every cycle rather than when someone remembers.",
                  "A client intelligence record: structured written documentation held per account, in your shared workspace, in a format you can read and export.",
                  "A standing input into briefs, thresholds and planning, reviewed every quarter so old rulings can be challenged.",
                  "Yours. The record belongs to your business and is handed over in full if the engagement ends.",
                ].map((i) => (
                  <li key={i} className="flex gap-4 text-sm leading-relaxed opacity-80">
                    <span aria-hidden className="mt-2.5 h-px w-5 shrink-0 bg-orange-500" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink-800 p-7 sm:p-10">
              <p className="u-meta opacity-55">It is not</p>
              <ul className="mt-7 space-y-5">
                {[
                  "Proprietary software. There is no platform, no login and no dashboard being sold to you under this name.",
                  "A machine learning model trained on your data, or on anyone else's.",
                  "A pooled database. One client's record is never used to run another client's account.",
                  "A deliverable that appears at the end. It is written during the work, and you see entries as they are added.",
                ].map((i) => (
                  <li key={i} className="flex gap-4 text-sm leading-relaxed opacity-65">
                    <span aria-hidden className="mt-2.5 h-px w-5 shrink-0 bg-white/30" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-l-2 border-orange-500 bg-orange-500/[0.06] px-6 py-6">
            <p className="u-meta text-orange-500">If you leave</p>
            <p className="mt-3 max-w-3xl leading-relaxed opacity-80">
              The record is exported and transferred to you, with the decision log, creative source files and historical
              campaign data. It is the accumulated learning your budget paid for, so holding it hostage would be a strange
              way to describe a partnership. The full offboarding standard is on the{" "}
              <Link href="/how-boost-works/client-control" className="underline underline-offset-4 hover:text-orange-500">
                client control page
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* 06 FAQ */}
      <Section tone="cream" id="faq">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeader eyebrow="Questions" number="06" title="The ones we get asked." />
              <Button href="/how-boost-works" className="mt-10" variant="outline">
                Back to the operating loop
              </Button>
            </div>
            <div className="lg:col-span-8">
              <FAQ items={faqs} tone="cream" />
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
                note: "Six phases, the first 30 days, the cadence and the intervention protocol.",
              },
              {
                label: "Reporting and the decision log",
                href: "/how-boost-works/reporting",
                note: "Where a Creative Memory entry becomes something you read every month.",
              },
              {
                label: "Client control",
                href: "/how-boost-works/client-control",
                note: "Ownership, offboarding and how the record transfers if you leave.",
              },
            ]}
          />
        </Container>
      </Section>

      <CTABlock
        title="Start the record on your account."
        body="Every cycle you run without one is a cycle you will pay to learn twice. Tell us what feels stuck and we will show you what the first entries would look like."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "See a sample report", href: "/how-boost-works/reporting" }}
      />
    </>
  );
}
