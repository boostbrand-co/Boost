import Link from "next/link";
import {
  Container,
  Section,
  SectionHeader,
  PageHero,
  Button,
  CTABlock,
  RelatedGrid,
  PlaceholderNote,
} from "@/components/ui/primitives";
import { OwnershipTable, AISplitPanel } from "@/components/system/artifacts";
import { interventionProtocol } from "@/data/system";
import { engagements } from "@/data/engagements";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
  title: "Client control",
  description:
    "BOOST's operating standards on account ownership, data, assets, AI usage, human review, response times, scope changes, performance misses, offboarding and confidentiality.",
  path: "/how-boost-works/client-control",
});

const jump = [
  { label: "Account ownership", href: "#accounts" },
  { label: "Data ownership", href: "#data" },
  { label: "Asset ownership", href: "#assets" },
  { label: "AI usage", href: "#ai" },
  { label: "Human review", href: "#review" },
  { label: "Communication", href: "#communication" },
  { label: "Scope changes", href: "#scope" },
  { label: "When performance misses", href: "#misses" },
  { label: "If you leave", href: "#offboarding" },
  { label: "Security", href: "#security" },
];

const accountRules = [
  "Ad accounts are created inside your Business Manager or Google account, or transferred into it if a previous partner set them up. Ownership sits with your business, not with an agency holding entity.",
  "We are added as a user with the permissions the work requires, and nothing beyond them.",
  "Access is granted to named individuals. Shared logins are not used, so every change in your account traces back to a person.",
  "You keep admin rights throughout. You can remove our access yourself, at any time, without going through us.",
  "When someone rotates off your account, their access is removed rather than left in place.",
];

const dataRules = [
  "Revenue, margin, CRM and customer data are accessed for the work and are never sold, shared or used to run another client's account.",
  "Analytics and tag manager properties are owned by you. We are a user on them, the same as the ad platforms.",
  "Historical campaign data is exported and handed to you at any point you ask, not only at the end.",
  "The decision log and Creative Memory are part of your data, not part of our methodology library.",
  "Where we need to move data between systems, the route and the tools involved are written down so you know where it went.",
];

const communication = [
  {
    t: "Named people, not a shared inbox",
    b: "You know who is on the account and you can reach them directly. The person on the call is the person doing the work.",
  },
  {
    t: "A weekly written note",
    b: "What is live, what changed, what we are watching, what is blocked on your side. It goes out whether or not there is a meeting.",
  },
  {
    t: "Same business day acknowledgement",
    b: "Our standard is that a message gets acknowledged within one business day, with a real answer or a stated time for one. Acknowledged is not the same as solved, and we do not pretend otherwise.",
  },
  {
    t: "Anything that moves money is written",
    b: "Budget shifts, threshold changes and strategic pivots go into the decision log with the rationale, even when they were agreed verbally on a call.",
  },
  {
    t: "Bad news travels at the same speed as good news",
    b: "A broken tracking setup or a failing test reaches you when we find it, not at the monthly review.",
  },
];

const scopeRules = [
  {
    t: "Scope is written before work starts",
    b: "Each engagement states what is included. If a request sits outside it, we say so at the point of the request rather than absorbing it quietly and running short somewhere else.",
  },
  {
    t: "Small things stay small",
    b: "Not every extra request is a change order. Minor additions inside the spirit of the scope get done. We are describing a way of working, not building a billing trap.",
  },
  {
    t: "Real changes get priced before they start",
    b: "A new channel, a new market, a site rebuild or a launch on top of the retainer is quoted in writing and agreed before anyone begins. No retrospective invoices.",
  },
  {
    t: "Reducing scope is a normal conversation",
    b: "If a discipline is no longer earning its place, we would rather restructure the engagement than keep billing for it. Variable Capacity exists partly for this reason.",
  },
];

const offboarding = [
  {
    t: "Access transfer",
    b: "Our users are removed from your ad accounts, analytics, tag manager, CRM and any other system we touched. You already hold admin, so nothing needs to be handed back to you. It only needs to be handed off from us.",
  },
  {
    t: "Assets and source files",
    b: "Creative source files, working files, exports and templates are delivered in their native formats. This is standard rather than something to negotiate at the exit.",
  },
  {
    t: "Historical data",
    b: "Campaign history, performance exports and measurement configuration documentation are packaged and sent, so the next team is not starting from a blank account.",
  },
  {
    t: "Decision log",
    b: "The full record of decisions, rationales and reversal thresholds goes with you. It is the reasoning behind every dollar you spent with us.",
  },
  {
    t: "Creative Memory",
    b: "Exported in full and transferred. Every insight, hypothesis, result and ruling accumulated on your account stays yours. We do not retain it as leverage and we do not reuse it on another client.",
  },
  {
    t: "A written handover",
    b: "What was running, what state it is in, what was about to be tested and what we would do next. Written for whoever picks it up, including an in-house team.",
  },
];

const securityRules = [
  "Access follows the work: the minimum permission needed, granted to a named person, removed when they rotate off.",
  "No shared credentials. Where a platform forces a single login, access is managed through a password manager with individual accounts.",
  "Client information is treated as confidential by default, including the fact of the engagement itself until you are happy for it to be named.",
  "We do not publish client work, logos or results without written approval from that client.",
  "If we become aware of a security issue affecting your data or accounts, you are told promptly and in writing, along with what we know and what we have done.",
];

export default function ClientControlPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "How BOOST works", url: "/how-boost-works" },
            { name: "Client control", url: "/how-boost-works/client-control" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Client control"
        title={
          <>
            The terms of control,
            <br />
            written down in public.
          </>
        }
        lead="Who owns the accounts, who owns the data, what AI touches, how fast we answer, what happens when performance misses, and what you walk away with if you leave. Most of this is normally discovered late. It is easier to read it now."
        trail={[{ label: "How BOOST works", href: "/how-boost-works" }, { label: "Client control" }]}
        meta={[
          { label: "Accounts", value: "Yours from day one" },
          { label: "Data", value: "Yours, never resold" },
          { label: "AI", value: "Disclosed and reviewed" },
          { label: "Offboarding", value: "Full transfer, including the record" },
        ]}
      >
        <nav aria-label="On this page" className="mt-14 border-t border-white/10 pt-6">
          <p className="u-meta opacity-45">On this page</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {jump.map((j) => (
              <li key={j.href}>
                <Link href={j.href} className="text-sm opacity-70 underline-offset-4 hover:text-orange-500 hover:underline">
                  {j.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {/* LEGAL NOTICE */}
      <section className="border-y border-orange-500/30 bg-orange-500/[0.06] py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12">
            <p className="u-meta text-orange-500 lg:col-span-3">Legal review required</p>
            <div className="lg:col-span-9">
              <p className="max-w-3xl leading-relaxed">
                Everything on this page describes BOOST&apos;s operating standards: how we intend to work and what we hold
                ourselves to. It is not contract language and it does not create a legal guarantee.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed opacity-75">
                The binding terms of any engagement, including notice periods, liability, payment terms, confidentiality
                and the treatment of data, live in the signed agreement between your business and BOOST. Where this page
                and that agreement differ, the agreement governs. This page is pending review by counsel before
                publication, and any term stated here that has commercial or legal effect must be confirmed there first.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 01 OWNERSHIP */}
      <Section tone="dark" id="accounts">
        <Container>
          <SectionHeader
            eyebrow="Ownership"
            number="01"
            title="Account ownership."
            lead="The test we hold ourselves to: if you ended the engagement on a Friday, could you keep running on Monday without us? Everything below exists to make the answer yes."
          />
          <ul className="mt-14 max-w-4xl border-t border-white/10">
            {accountRules.map((r) => (
              <li key={r} className="flex gap-5 border-b border-white/10 py-5">
                <span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-orange-500" />
                <span className="leading-relaxed opacity-80">{r}</span>
              </li>
            ))}
          </ul>

          <div id="data" className="mt-20 scroll-mt-28">
            <h2 className="u-display text-3xl sm:text-4xl">Data ownership.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed opacity-70">
              Your business data is the input that makes the work honest. It is also the thing most easily taken for
              granted, so here is the standard we operate to.
            </p>
            <ul className="mt-10 max-w-4xl border-t border-white/10">
              {dataRules.map((r) => (
                <li key={r} className="flex gap-5 border-b border-white/10 py-5">
                  <span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-orange-500" />
                  <span className="leading-relaxed opacity-80">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="assets" className="mt-20 scroll-mt-28">
            <h2 className="u-display text-3xl sm:text-4xl">Asset ownership.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed opacity-70">
              Set up in the first week of the engagement rather than negotiated at the end of it.
            </p>
            <div className="mt-10">
              <OwnershipTable />
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 AI */}
      <Section tone="deep" id="ai">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Disclosure"
                number="02"
                title="AI usage."
                lead="AI is used in this work. Pretending otherwise would be dishonest, and refusing to say where would be worse. This is the split, and the full policy is published separately."
              />
              <p className="mt-8 max-w-md leading-relaxed opacity-65">
                You can ask us to exclude AI from any part of your work. We will tell you plainly what that changes about
                cost and turnaround rather than quietly agreeing and carrying on.
              </p>
              <Button href="/ai-disclosure" className="mt-10" variant="outline">
                Read the full AI disclosure
              </Button>
            </div>
            <div className="lg:col-span-7">
              <AISplitPanel />
            </div>
          </div>

          <div id="review" className="mt-20 scroll-mt-28 border-t border-white/10 pt-14">
            <h2 className="u-display text-3xl sm:text-4xl">Human review.</h2>
            <div className="mt-10 grid gap-px border border-white/12 bg-white/12 md:grid-cols-3">
              {[
                {
                  t: "A named reviewer, every time",
                  b: "Nothing reaches you without a specific person having reviewed it. Not a role, not a team, a person. If you ask who signed off on something, there is an answer.",
                },
                {
                  t: "Review means judgment, not proofreading",
                  b: "The reviewer is accountable for whether the thing is right, on strategy and true, not only for whether it reads well.",
                },
                {
                  t: "Claims get checked against evidence",
                  b: "Any factual or performance claim in creative is traced back to a source before it ships. If a source cannot be produced, the claim is cut.",
                },
              ].map((x) => (
                <div key={x.t} className="bg-ink-800 p-6 sm:p-7">
                  <p className="text-lg leading-snug">{x.t}</p>
                  <p className="mt-3 text-sm leading-relaxed opacity-65">{x.b}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 03 COMMUNICATION AND SCOPE */}
      <Section tone="cream" id="communication">
        <Container>
          <SectionHeader
            eyebrow="Working standards"
            number="03"
            title="Communication and response."
            lead="Most of the frustration in agency relationships is not about results. It is about not knowing what is happening and not being able to get an answer quickly."
          />
          <div className="mt-14 grid border-l border-t border-ink-900/15 md:grid-cols-2 lg:grid-cols-3">
            {communication.map((c) => (
              <div key={c.t} className="border-b border-r border-ink-900/15 p-7 sm:p-8">
                <h3 className="text-xl leading-snug">{c.t}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-65">{c.b}</p>
              </div>
            ))}
          </div>

          <div id="scope" className="mt-20 scroll-mt-28 border-t border-ink-900/15 pt-14">
            <h2 className="u-display text-3xl sm:text-4xl">Scope changes.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed opacity-70">
              Scope creep damages both sides. The client feels nickel and dimed, the agency quietly under-resources the
              original work to cover the extras, and nobody says anything until the relationship is already strained.
            </p>
            <div className="mt-10 grid gap-px border border-ink-900/15 bg-ink-900/15 md:grid-cols-2">
              {scopeRules.map((s) => (
                <div key={s.t} className="bg-cream-100 p-7 sm:p-8">
                  <p className="u-meta text-orange-600">{s.t}</p>
                  <p className="mt-4 text-sm leading-relaxed opacity-70">{s.b}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed opacity-60">
              What each engagement includes is listed on{" "}
              <Link href="/engagements" className="underline underline-offset-4 hover:text-orange-600">
                ways to work together
              </Link>
              . Fees are stated separately from media spend, always.
            </p>
          </div>
        </Container>
      </Section>

      {/* 04 MISSES */}
      <Section tone="dark" id="misses">
        <Container>
          <SectionHeader
            eyebrow="Accountability"
            number="04"
            title="What happens when performance misses."
            lead="This is agreed at kickoff and it runs whether or not you chase us. The last row is the one that costs us something, which is why it is worth publishing."
          />
          <div className="u-scrollbar mt-14 overflow-x-auto">
            <table className="w-full min-w-[42rem] border-collapse text-left">
              <caption className="sr-only">
                BOOST intervention protocol: trigger, window and action for each level of performance miss
              </caption>
              <thead>
                <tr className="u-meta opacity-50">
                  <th scope="col" className="border-b border-white/20 pb-3 pr-6 font-normal">
                    Trigger
                  </th>
                  <th scope="col" className="border-b border-white/20 pb-3 pr-6 font-normal">
                    Window
                  </th>
                  <th scope="col" className="border-b border-white/20 pb-3 font-normal">
                    What happens
                  </th>
                </tr>
              </thead>
              <tbody className="align-top">
                {interventionProtocol.map((row) => (
                  <tr key={row.trigger} className="border-b border-white/10">
                    <td className="py-6 pr-6 text-base font-medium">{row.trigger}</td>
                    <td className="py-6 pr-6 text-sm tabular-nums opacity-55">{row.window}</td>
                    <td className="max-w-xl py-6 text-sm leading-relaxed opacity-75">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed opacity-60">
            An agency with no pre-agreed exit point has a commercial reason to keep a failing engagement alive. Agreeing
            the exit before the work starts takes that incentive out of the room. The same protocol appears on the{" "}
            <Link href="/how-boost-works#hits-and-misses" className="underline underline-offset-4 hover:text-orange-500">
              operating loop page
            </Link>
            , where it sits next to what happens when something works.
          </p>
        </Container>
      </Section>

      {/* 05 OFFBOARDING */}
      <Section tone="cream" id="offboarding">
        <Container>
          <SectionHeader
            eyebrow="Exit"
            number="05"
            title="What happens if you leave."
            lead="Every engagement ends eventually. The honest measure of an agency is what the client is holding on the day after."
          />
          <div className="mt-14 grid border-l border-t border-ink-900/15 md:grid-cols-2 lg:grid-cols-3">
            {offboarding.map((o) => (
              <div key={o.t} className="border-b border-r border-ink-900/15 p-7 sm:p-8">
                <h3 className="text-xl leading-snug">{o.t}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-65">{o.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="u-display text-2xl sm:text-3xl">Commitment terms, as published</h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-70">
              These are the commitment terms stated for each engagement type. Anything beyond what is written here,
              including notice mechanics and payment on termination, is set in the signed agreement rather than on this
              page.
            </p>
            <div className="u-scrollbar mt-8 overflow-x-auto">
              <table className="w-full min-w-[38rem] border-collapse text-left">
                <caption className="sr-only">Commitment terms published for each BOOST engagement type</caption>
                <thead>
                  <tr className="u-meta opacity-55">
                    <th scope="col" className="border-b border-ink-900/25 pb-3 pr-6 font-normal">
                      Engagement
                    </th>
                    <th scope="col" className="border-b border-ink-900/25 pb-3 font-normal">
                      Commitment as stated
                    </th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  {engagements.map((e) => (
                    <tr key={e.slug} className="border-b border-ink-900/15">
                      <td className="py-5 pr-6">
                        <Link href={`/engagements#${e.slug}`} className="text-sm font-medium underline-offset-4 hover:text-orange-600 hover:underline">
                          {e.name}
                        </Link>
                      </td>
                      <td className="py-5 text-sm leading-relaxed opacity-75">{e.commitment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* 06 SECURITY */}
      <Section tone="dark" id="security">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Confidentiality"
                number="06"
                title="Security and confidentiality."
                lead="Written at the level we can actually stand behind. Where a specific certification or vendor commitment would be expected, it is marked as pending rather than implied."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="border-t border-white/10">
                {securityRules.map((r) => (
                  <li key={r} className="flex gap-5 border-b border-white/10 py-5">
                    <span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-orange-500" />
                    <span className="text-sm leading-relaxed opacity-80">{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PlaceholderNote>
                  Formal security documentation is not yet published. Specific certifications, sub-processor lists, data
                  retention periods, breach notification timelines and any named vendor commitments must be confirmed and
                  reviewed before they appear here. If your procurement process needs them now, ask and we will tell you
                  exactly what exists today rather than what sounds reassuring.
                </PlaceholderNote>
              </div>
            </div>
          </div>

          <div className="mt-16 border-l-2 border-orange-500 bg-orange-500/[0.06] px-6 py-6">
            <p className="u-meta text-orange-500">Legal review required</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed opacity-80">
              To repeat the notice at the top of this page: these are BOOST&apos;s operating standards, not contract
              terms. The binding agreement between your business and BOOST governs in every case, and this page is
              pending legal review.
            </p>
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
                note: "How the work runs, the first 30 days and the ongoing cadence.",
              },
              {
                label: "AI disclosure",
                href: "/ai-disclosure",
                note: "Where AI is used by discipline, the review rule and how to exclude it.",
              },
              {
                label: "Ways to work together",
                href: "/engagements",
                note: "Four engagement types, what each includes and the commitment stated for each.",
              },
            ]}
          />
        </Container>
      </Section>

      <CTABlock
        title="Ask the awkward questions first."
        body="Ownership, access, AI, exit terms. If an agency gets uncomfortable answering those before you sign, you have learned something useful for free."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "Read the fit page", href: "/fit" }}
      />
    </>
  );
}
