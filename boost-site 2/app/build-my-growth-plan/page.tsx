import Link from "next/link";
import { Container, Section, SectionHeader, PageHero, CTABlock } from "@/components/ui/primitives";
import { GrowthPlanForm } from "./growth-plan-form";
import { site } from "@/data/site";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
  title: "Build my growth plan",
  description:
    "Five short steps, then your starting point. Tell us what feels stuck, read back what you told us, and see which BOOST engagement fits before you book anything.",
  path: "/build-my-growth-plan",
});

const nextSteps = [
  {
    number: "01",
    title: "You send this",
    body: "Five steps. One choice, four context questions, one box in your own words, and three contact fields. Nothing is scored and nothing triggers a sales sequence.",
  },
  {
    number: "02",
    title: "A named strategist replies within one business day",
    body: "A person, not an autoresponder. They read what you wrote first, and their reply names who would be on the call and what they own on an account.",
  },
  {
    number: "03",
    title: "The first call is a diagnosis, not a pitch",
    body: "Thirty minutes on your numbers and the most likely constraint. If the constraint sits somewhere we would not bill for, or if we are the wrong answer entirely, you get told that on the call.",
  },
];

const prepare = [
  {
    label: "Performance history",
    body: "The last three to twelve months by channel, if you have it. Screenshots are fine. The trend matters more than the precision.",
  },
  {
    label: "Revenue by product or service",
    body: "Which lines actually carry the margin. This is the number most agency conversations skip, and it changes the advice.",
  },
  {
    label: "What you have already tried",
    body: "Including the things that did not work. Knowing what has been ruled out saves a quarter of rediscovery.",
  },
  {
    label: "Your account ownership situation",
    body: "If you are leaving another agency, a list of what sits under someone else's login. Some of it is easier to secure while that relationship is still live.",
  },
  {
    label: "Who decides",
    body: "Whether the decision is yours alone, and what the person who signs off will want to see.",
  },
];

export default function BuildMyGrowthPlanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Build my growth plan", url: "/build-my-growth-plan" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Start here"
        title="Tell us what feels stuck."
        lead="Five short steps, about two minutes. At the end you get your answers read back to you, the BOOST engagement that usually fits a situation like yours, and only then the calendar. If forms are not your thing, the email address is at the bottom of this page and it goes to a person."
        trail={[{ label: "Build my growth plan" }]}
        meta={[
          { label: "Time to complete", value: "About two minutes" },
          { label: "Steps", value: "Five, one of them yours to write" },
          { label: "First reply", value: "Within one business day" },
          { label: "First call", value: "30 minutes, diagnosis" },
        ]}
      />

      <GrowthPlanForm />

      {/* WHAT HAPPENS NEXT */}
      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="What happens next"
            number="01"
            title="Three steps, and none of them are a nurture sequence."
            lead="The most common complaint in our buyer research was not bad results. It was having to chase for updates. That starts before the contract, so it starts here."
          />
          <ol className="mt-16 grid border-t border-ink-900/15 md:grid-cols-3">
            {nextSteps.map((s) => (
              <li key={s.number} className="border-b border-ink-900/15 py-8 md:border-r md:px-8 md:first:pl-0">
                <span className="u-meta tabular-nums text-orange-600">{s.number}</span>
                <h3 className="u-display mt-5 text-2xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-70">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed opacity-60">
            If we are not a fit, we will say so and point you somewhere more useful. The{" "}
            <Link href="/fit" className="text-orange-600 underline underline-offset-4">
              fit page
            </Link>{" "}
            lists the situations where BOOST is the wrong answer, and it is worth reading before you book.
          </p>
        </Container>
      </Section>

      {/* WHAT TO PREPARE */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="What to prepare"
                number="02"
                title="Bring nothing. Bring these if you have them."
                lead="None of this is required to book. Every item on this list moves the first call from general advice to something specific about your business."
              />
            </div>
            <div className="lg:col-span-7">
              <dl className="border-t border-white/12">
                {prepare.map((p) => (
                  <div key={p.label} className="grid gap-2 border-b border-white/12 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                    <dt className="u-meta pt-1 text-orange-500">{p.label}</dt>
                    <dd className="text-sm leading-relaxed opacity-70">{p.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* ALTERNATIVE CONTACT */}
      <Section tone="deep">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Another way in"
                number="03"
                title="Or just write to us."
                lead="A form is a convenience, not a gate. If you would rather send two paragraphs and a screenshot, that works exactly as well and reaches the same people."
              />
              <a
                href={`mailto:${site.email}`}
                className="u-display mt-10 inline-block text-3xl text-orange-500 underline underline-offset-[8px] hover:text-orange-600 sm:text-5xl"
              >
                {site.email}
              </a>
            </div>
            <div className="lg:col-span-5">
              <dl className="border-t border-white/12">
                <div className="border-b border-white/12 py-5">
                  <dt className="u-meta opacity-50">Reply time</dt>
                  <dd className="mt-2 text-sm opacity-75">One business day, from a named person.</dd>
                </div>
                <div className="border-b border-white/12 py-5">
                  <dt className="u-meta opacity-50">Where we are</dt>
                  <dd className="mt-2 text-sm opacity-75">{site.locations.join(" · ")}</dd>
                </div>
                <div className="border-b border-white/12 py-5">
                  <dt className="u-meta opacity-50">Languages</dt>
                  <dd className="mt-2 text-sm opacity-75">English and Spanish, both natively run.</dd>
                </div>
                <div className="border-b border-white/12 py-5">
                  <dt className="u-meta opacity-50">Investment</dt>
                  <dd className="mt-2 text-sm opacity-75">
                    [INVESTMENT RANGE TO CONFIRM]. Discussed openly on the first call rather than after three meetings.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      <CTABlock
        title="Want to know how the work actually runs first?"
        body="Reasonable. The operating loop, the reporting format and the ownership rules are all published, and the fit page includes the cases where we are the wrong answer."
        primary={{ label: "See how BOOST works", href: "/how-boost-works" }}
        secondary={{ label: "Read the fit page", href: "/fit" }}
      />
    </>
  );
}
