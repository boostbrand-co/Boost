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
import { AISplitPanel } from "@/components/system/artifacts";
import { aiSplit } from "@/data/system";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
  title: "AI disclosure",
  description:
    "Where BOOST uses AI and where it does not, by discipline. The named human review rule, what we refuse to automate, how to exclude AI from your work, and how client data is handled.",
  path: "/ai-disclosure",
});

const LAST_UPDATED = "14 August 2026";
const VERSION = "1.0";

const byDiscipline = [
  {
    area: "Research and insight",
    ai: "Reads and clusters large volumes of input: reviews, support tickets, sales call transcripts, search and competitor material. Surfaces recurring language and outliers a person would take days to find.",
    human: "Decides which pattern is a real buying insight and which is noise. Chooses what the account will act on, and writes the hypothesis that the work is then judged against.",
  },
  {
    area: "Creative production",
    ai: "Generates first-draft variants and alternate phrasings, adapts a concept across placements and aspect ratios, handles resizing, versioning and localisation drafts.",
    human: "Sets the concept and the angle. Directs the shoot or the design. Selects what is made, edits it and takes responsibility for whether it is true and on brand.",
  },
  {
    area: "Paid media",
    ai: "Flags anomalies in performance data, checks structure and naming consistency, prepares comparisons across accounts and periods faster than manual pulls allow.",
    human: "Decides budget, thresholds, what gets killed and what gets scaled. Platform automation is used deliberately and its settings are documented, not left on by default.",
  },
  {
    area: "Measurement",
    ai: "Cleans and reconciles data, transcribes and structures inputs, spots discrepancies between platform and revenue figures for a person to investigate.",
    human: "Judges whether a number can be trusted, states the confidence level, and decides what the result means for the business rather than for the platform.",
  },
  {
    area: "Reporting and communication",
    ai: "Assembles data, drafts summaries of activity, and checks that nothing in the period has been left out of the record.",
    human: "Writes the argument, the diagnosis, the misses section and the recommendation. Every report is reviewed and sent by a named person on your account.",
  },
];

const notUsedFor = [
  {
    t: "Deciding where your money goes",
    b: "Budget allocation, kill and scale calls and strategic direction are human decisions with a name attached. A model does not get a vote on your spend.",
  },
  {
    t: "Synthetic people or fake proof",
    b: "No AI-generated testimonials, reviews, case studies, faces presented as customers, or results that did not happen. Ever, under any client pressure.",
  },
  {
    t: "Passing off generated work as photographed",
    b: "If a generated image or voice is used in a finished asset, you are told before it ships and it is disclosed wherever the platform or the context requires it.",
  },
  {
    t: "Unattended publishing",
    b: "Nothing is auto-published to your channels by a model without a person approving that specific piece.",
  },
  {
    t: "Writing the reasoning in your report",
    b: "The diagnosis, the misses section and the recommendation are written by the person accountable for them. A generated explanation of a result nobody understands is worse than no explanation.",
  },
  {
    t: "Replacing the people you were sold",
    b: "AI is used to increase how much the team can consider. It is not used to quietly reduce who is actually on your account after you sign.",
  },
];

const controls = [
  {
    t: "You can exclude AI from any part of the work",
    b: "Ask, and we will scope that part with human-only production and tooling. This applies to a discipline, a campaign, or the whole engagement.",
  },
  {
    t: "We will tell you what that changes",
    b: "Honestly, and in numbers where we can. Excluding AI from research and production typically means longer turnaround and fewer variants tested per cycle at the same fee, or the same volume at a higher fee. We will say which before you decide.",
  },
  {
    t: "You can ask what touched a specific asset",
    b: "For any deliverable, we will tell you what was AI-assisted, what was not, and who reviewed it.",
  },
  {
    t: "Your rules override ours",
    b: "If your business has its own AI policy, procurement standard or client contract that restricts tooling, tell us at kickoff and we work inside it.",
  },
];

const dataHandling = [
  "We do not train public AI models on your data. Client material is not contributed to public model training.",
  "Sensitive inputs, including customer records, revenue detail and anything personally identifying, are minimised before they go into any tool and are not pasted into consumer AI products.",
  "Where a tool is used on client material, it is a tool we have chosen deliberately and can name for you on request.",
  "One client's material is never used to produce another client's work.",
  "If you need AI tooling restricted to specific vendors or regions, that is a scope conversation we can have at kickoff rather than a surprise later.",
];

export default function AIDisclosurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "AI disclosure", url: "/ai-disclosure" },
          ]),
        )}
      />

      <PageHero
        eyebrow="AI disclosure"
        title={
          <>
            What the machine does,
            <br />
            and what it does not.
          </>
        }
        lead="Almost every agency you are considering uses AI. Very few will tell you where. This page states it by discipline, names the rule that governs it, and tells you how to remove it from your work if you would rather we did not use it."
        trail={[{ label: "AI disclosure" }]}
        meta={[
          { label: "Version", value: VERSION },
          { label: "Last updated", value: LAST_UPDATED },
          { label: "Review rule", value: "A named human, every time" },
          { label: "Client control", value: "You can opt out of any part" },
        ]}
      />

      {/* 01 POSITION */}
      <Section tone="cream" id="position">
        <Container>
          <SectionHeader eyebrow="Our position" number="01" title="Stated in one paragraph." />
          <p className="mt-10 max-w-4xl text-xl leading-relaxed sm:text-2xl">
            We use AI where it increases how much we can consider, and we do not use it where the value of the work is
            the judgment. It reads more inputs than a person can, drafts more options than a person would, and cleans
            data faster than a person should have to. It does not decide what your positioning is, which idea to back,
            where your budget goes, or what a result means. Every piece of work that reaches you has been reviewed by a
            named person who is accountable for it. If that stops being true, this page is wrong and we will change it.
          </p>
        </Container>
      </Section>

      {/* 02 SPLIT */}
      <Section tone="dark" id="split">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="The split"
                number="02"
                title="Machine work and human work."
                lead="The line is not about capability. It is about accountability. Anything that can be wrong in a way that costs you money stays with a person."
              />
            </div>
            <div className="lg:col-span-7">
              <AISplitPanel />
            </div>
          </div>
        </Container>
      </Section>

      {/* 03 BY DISCIPLINE */}
      <Section tone="cream" id="by-discipline">
        <Container>
          <SectionHeader
            eyebrow="By discipline"
            number="03"
            title="Where AI is used, function by function."
            lead="The specific version of the split above, applied to the five places the question actually comes up."
          />
          <div className="u-scrollbar mt-14 overflow-x-auto">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <caption className="sr-only">
                How BOOST divides AI-assisted work and human work across five disciplines
              </caption>
              <thead>
                <tr className="u-meta opacity-55">
                  <th scope="col" className="border-b border-ink-900/25 pb-3 pr-6 font-normal">
                    Discipline
                  </th>
                  <th scope="col" className="border-b border-ink-900/25 pb-3 pr-6 font-normal">
                    What AI does
                  </th>
                  <th scope="col" className="border-b border-ink-900/25 pb-3 font-normal">
                    What a human does
                  </th>
                </tr>
              </thead>
              <tbody className="align-top">
                {byDiscipline.map((row) => (
                  <tr key={row.area} className="border-b border-ink-900/15">
                    <th scope="row" className="w-48 py-6 pr-6 text-left text-base font-medium">
                      {row.area}
                    </th>
                    <td className="py-6 pr-6 text-sm leading-relaxed opacity-65">{row.ai}</td>
                    <td className="py-6 text-sm leading-relaxed opacity-85">{row.human}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* 04 THE REVIEW RULE */}
      <Section tone="dark" id="review-rule">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="The rule" number="04" title="One rule holds the rest together." />
            </div>
            <div className="lg:col-span-7">
              <blockquote className="border-l-2 border-orange-500 pl-6">
                <p className="u-display text-2xl leading-snug sm:text-3xl">{aiSplit.rule}</p>
              </blockquote>
              <div className="mt-10 grid gap-px border border-white/12 bg-white/12 sm:grid-cols-3">
                {[
                  { t: "Named", b: "A person, not a role or a team. If you ask who reviewed something, you get a name." },
                  { t: "Accountable", b: "The reviewer owns whether it is right, on strategy and true, not only whether it reads well." },
                  { t: "Before it ships", b: "Review happens before you see it, not after you flag something odd in it." },
                ].map((x) => (
                  <div key={x.t} className="bg-ink-800 p-6">
                    <p className="u-meta text-orange-500">{x.t}</p>
                    <p className="mt-4 text-sm leading-relaxed opacity-70">{x.b}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed opacity-60">
                The same standard is written into our operating standards on the{" "}
                <Link href="/how-boost-works/client-control#review" className="underline underline-offset-4 hover:text-orange-500">
                  client control page
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 05 WHAT WE DO NOT USE IT FOR */}
      <Section tone="cream" id="not-used-for">
        <Container>
          <SectionHeader
            eyebrow="Limits"
            number="05"
            title="What we do not use AI for."
            lead="A disclosure that only lists benefits is marketing. These are the lines we hold, including the ones a client has occasionally asked us to cross."
          />
          <div className="mt-14 grid border-l border-t border-ink-900/15 md:grid-cols-2 lg:grid-cols-3">
            {notUsedFor.map((x) => (
              <div key={x.t} className="border-b border-r border-ink-900/15 p-7 sm:p-8">
                <h3 className="text-xl leading-snug">{x.t}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-65">{x.b}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 06 CLIENT CONTROLS */}
      <Section tone="dark" id="controls">
        <Container>
          <SectionHeader
            eyebrow="Your controls"
            number="06"
            title="You can turn this off."
            lead="Not as a gesture. As a scope option with a real, stated consequence, because pretending there is no trade-off would be its own kind of dishonesty."
          />
          <div className="mt-14 grid gap-px border border-white/12 bg-white/12 md:grid-cols-2">
            {controls.map((c) => (
              <div key={c.t} className="bg-ink-800 p-7 sm:p-8">
                <p className="u-meta text-orange-500">{c.t}</p>
                <p className="mt-4 leading-relaxed opacity-75">{c.b}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 07 DATA HANDLING */}
      <Section tone="cream" id="data">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Data handling"
                number="07"
                title="What happens to your data."
                lead="Written at the level we can stand behind today. Anything that would need a vendor contract to guarantee is marked as pending rather than implied."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="border-t border-ink-900/15">
                {dataHandling.map((d) => (
                  <li key={d} className="flex gap-5 border-b border-ink-900/15 py-5">
                    <span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-orange-600" />
                    <span className="leading-relaxed opacity-80">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PlaceholderNote>
                  Specific vendor commitments are pending confirmation. The named list of AI tools in use, their data
                  retention and training terms, whether enterprise or zero-retention agreements are in place with each
                  provider, and any regional processing constraints must be verified and documented before they are
                  stated here. If your procurement team needs this now, ask and we will tell you what is confirmed today
                  rather than what would sound better.
                </PlaceholderNote>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 08 VERSIONING */}
      <Section tone="dark" id="versioning">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Versioning"
                number="08"
                title="This page has a version number."
                lead="AI practice changes faster than most policy documents get revisited. A policy with no date on it is a policy nobody is maintaining."
              />
              <Button href="/how-boost-works/client-control" className="mt-10" variant="outline">
                Client control standards
              </Button>
            </div>
            <div className="lg:col-span-7">
              <dl className="grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2">
                <div className="bg-ink-800 p-6">
                  <dt className="u-meta opacity-50">Version</dt>
                  <dd className="u-display mt-3 text-3xl tabular-nums">{VERSION}</dd>
                </div>
                <div className="bg-ink-800 p-6">
                  <dt className="u-meta opacity-50">Last updated</dt>
                  <dd className="u-display mt-3 text-3xl">{LAST_UPDATED}</dd>
                </div>
                <div className="bg-ink-800 p-6 sm:col-span-2">
                  <dt className="u-meta opacity-50">How it changes</dt>
                  <dd className="mt-3 text-sm leading-relaxed opacity-75">
                    Reviewed at least twice a year and whenever our tooling or the review rule changes in a way a client
                    would care about. Each revision increments the version and updates the date above. Current clients are
                    told in writing when a change affects how their work is produced, rather than being left to notice a
                    quiet edit to a public page.
                  </dd>
                </div>
              </dl>
              <div className="mt-8 border-l-2 border-orange-500 bg-orange-500/[0.06] px-6 py-5">
                <p className="u-meta text-orange-500">Legal review required</p>
                <p className="mt-3 text-sm leading-relaxed opacity-80">
                  This is a published operating policy, not contract language. Any contractual commitment about AI usage,
                  data handling or tooling lives in the signed agreement between your business and BOOST, and this page is
                  pending review by counsel. The effective date above must be set to the actual publication date before
                  this page goes live.
                </p>
              </div>
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
                label: "Client control",
                href: "/how-boost-works/client-control",
                note: "Ownership, human review, response standards, offboarding and confidentiality.",
              },
              {
                label: "The operating loop",
                href: "/how-boost-works",
                note: "The six phases, and which artifact each one produces.",
              },
              {
                label: "Insights",
                href: "/insights",
                note: "Our published research, including where AI is changing the value of marketing work.",
              },
            ]}
          />
        </Container>
      </Section>

      <CTABlock
        title="Ask us what touched your work."
        body="Any deliverable, any time. We will tell you what was AI-assisted, what was not, and who reviewed it before it reached you."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "How BOOST works", href: "/how-boost-works" }}
      />
    </>
  );
}
