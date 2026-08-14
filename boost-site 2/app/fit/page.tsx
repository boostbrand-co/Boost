import {
  Container,
  Section,
  SectionHeader,
  Button,
  PageHero,
  CTABlock,
  RelatedGrid,
} from "@/components/ui/primitives";
import { fit } from "@/data/engagements";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
  title: "Fit",
  description:
    "When BOOST is the right partner and when it is not. The situations we turn down, what to do instead, and the questions to ask any agency on a first call, including us.",
  path: "/fit",
});

const insteadOf = [
  {
    t: "You need one task done once",
    b: "Find a specialist freelancer. A single landing page, one video edit, a one-off audit of a Google account. You will get it faster, it will cost less, and you will not be paying for a strategy layer you do not need. Ask for two recent examples of the exact deliverable and a fixed price.",
  },
  {
    t: "Product-market fit is not settled yet",
    b: "Spend the money on getting to twenty customers by hand first. Sell directly, talk to every buyer, and find out which promise makes someone pay. Paid media makes an existing signal louder. It does not create one, and it burns budget while you look for it.",
  },
  {
    t: "You genuinely just need the accounts posted to",
    b: "There are good social management providers who do that well at a fraction of what a strategy engagement costs. That is a legitimate service and it solves a real problem. Buy it on volume, consistency and turnaround time, and do not pay agency rates for it.",
  },
  {
    t: "The budget cannot yet carry a test",
    b: "Put the money into one channel and one offer until it produces a repeatable result, rather than splitting it across four and learning nothing from any of them. If you want, we will tell you where the testing threshold sits in your category before you spend anything.",
  },
];

const questions = [
  {
    q: "Who will actually run my account day to day, and how many other accounts do they hold?",
    why: "The person in the room during the pitch is often not the person in the account. Ask for the name, the role and the client load. A vague answer here predicts most of what goes wrong later.",
  },
  {
    q: "What is the 30, 60 and 90 day plan, and what would make you change it?",
    why: "A plan you cannot see before signing is a plan that does not exist yet. Ask what the first month is meant to produce, and what evidence would cause them to abandon the approach.",
  },
  {
    q: "Who owns the ad accounts, the pixel, the analytics and the creative source files?",
    why: "If the accounts sit under the agency, leaving costs you your history. Ask who the accounts are created under, and what you leave with on the last day.",
  },
  {
    q: "What happens in the month you miss?",
    why: "Every agency misses. Ask whether the miss appears in the report before you ask about it, who tells you, and at what point they would recommend ending the engagement themselves.",
  },
  {
    q: "Show me a real monthly report from another client, redacted.",
    why: "A dashboard screenshot is not a report. You are looking for whether it ends in a decision and whether anything in it was uncomfortable to write.",
  },
];

export default function FitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Fit", url: "/fit" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Fit"
        title={
          <>
            When BOOST fits,
            <br />
            and when it does not.
          </>
        }
        lead="This page exists to save both sides time. A bad-fit engagement costs you a quarter and costs us a reference, so it is worth ten minutes now to find out which side of the line you are on."
        trail={[{ label: "Fit" }]}
        meta={[
          { label: "Read time", value: "About 4 minutes" },
          { label: "Written for", value: "Before the first call" },
          { label: "Includes", value: "When to walk away" },
          { label: "Also includes", value: "What to ask any agency" },
        ]}
      />

      {/* MAY FIT */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="The good case"
                number="01"
                title="BOOST may be a fit if."
                lead="None of these are aspirational. They are the conditions under which the way we work produces something you can act on."
              />
            </div>
            <ul className="border-t border-white/12 lg:col-span-7">
              {fit.mayFit.map((item, i) => (
                <li key={item} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/12 py-6">
                  <span className="u-meta pt-1.5 tabular-nums text-orange-500">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-base leading-relaxed opacity-85 sm:text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* PROBABLY NOT */}
      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="The honest case"
            number="02"
            title="BOOST is probably not the right fit if."
            lead="This list is longer than the one above, and that is deliberate. We turn work down for these reasons, and we would rather you read them here than find out in month three."
          />

          <ul className="mt-14 grid gap-px border border-ink-900/20 bg-ink-900/20 md:grid-cols-2">
            {fit.probablyNot.map((item, i) => (
              <li key={item} className="bg-cream-100 p-7 sm:p-9">
                <span className="u-meta tabular-nums text-orange-600">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-5 text-base leading-relaxed sm:text-lg">{item}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16 border-t border-ink-900/20 pt-12">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="u-meta text-orange-600">What to do instead</p>
                <h3 className="u-display mt-5 text-3xl sm:text-4xl">
                  If that is you,
                  <br />
                  here is the better buy.
                </h3>
                <p className="mt-6 max-w-md text-base leading-relaxed opacity-70">
                  Saying no is easy. Saying no and then leaving someone with nothing is just a wasted call. These are
                  the routes we would point you at, in order of how often they turn out to be the right answer.
                </p>
              </div>
              <div className="grid gap-px border border-ink-900/20 bg-ink-900/20 lg:col-span-8 sm:grid-cols-2">
                {insteadOf.map((x) => (
                  <div key={x.t} className="bg-cream-50 p-6 sm:p-8">
                    <h4 className="text-lg leading-snug">{x.t}</h4>
                    <p className="mt-4 text-sm leading-relaxed opacity-70">{x.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* HOW TO TEST US */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="How to test us"
                number="03"
                title="What to ask on the first call."
                lead="Ask these of any agency you are considering, including BOOST. The value is in whether the answer is specific, and whether it is the same answer three weeks later."
              />
              <p className="mt-8 max-w-md text-sm leading-relaxed opacity-60">
                We publish these because the buyers who ask them make better clients. A firm that cannot answer them
                without a follow-up email has told you something useful for free.
              </p>
              <Button href="/build-my-growth-plan" variant="outline" className="mt-10">
                Ask us these directly
              </Button>
            </div>

            <ol className="border-t border-white/12 lg:col-span-7">
              {questions.map((x, i) => (
                <li key={x.q} className="border-b border-white/12 py-7">
                  <div className="grid grid-cols-[3rem_1fr] gap-4">
                    <span className="u-meta pt-1.5 tabular-nums text-orange-500">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-lg leading-snug sm:text-xl">{x.q}</h3>
                      <p className="mt-3 text-sm leading-relaxed opacity-65">
                        <span className="u-meta mr-2 opacity-45">Why</span>
                        {x.why}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* STILL UNSURE */}
      <Section tone="deep">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Still unsure"
                number="04"
                title="A short call settles it faster than this page."
                lead="If you sit across both lists, that is normal. The first conversation is scoped to work out which side you are actually on, and it ends with a straight answer rather than a proposal."
              />
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <Button href="/engagements" variant="outline">
                See the engagement types
              </Button>
            </div>
          </div>

          <div className="mt-16">
            <RelatedGrid
              title="Related"
              items={[
                { label: "Ways to work together", href: "/engagements", note: "Four engagement shapes" },
                { label: "Who we help", href: "/who-we-help", note: "Five common situations" },
                { label: "How BOOST works", href: "/how-boost-works", note: "The loop and its artifacts" },
                { label: "Client control", href: "/how-boost-works/client-control", note: "Ownership and offboarding" },
                { label: "Case studies", href: "/work", note: "Thirteen clients, sources named" },
                { label: "Team", href: "/about/team", note: "Who is on an account" },
              ]}
            />
          </div>
        </Container>
      </Section>

      <CTABlock
        title="Think you are on the right side of this?"
        body="Four questions about what feels stuck, then a conversation with the people who would run the work. If the answer is that you do not need us, you will hear that."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "See the engagement types", href: "/engagements" }}
      />
    </>
  );
}
