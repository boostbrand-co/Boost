import Link from "next/link";
import { Container, Section, SectionHeader, Button, PageHero, CTABlock } from "@/components/ui/primitives";
import { SituationCard } from "@/components/cards/cards";
import { situations } from "@/data/situations";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
  title: "Who we help",
  description:
    "Five buying situations, each with its own page: replacing an agency, supporting an in-house team, a growth plateau, a launch, and growing across the US and Mexico. The honest answer depends on which one you are in.",
  path: "/who-we-help",
});

export default function WhoWeHelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Who we help", url: "/who-we-help" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Situations"
        title={
          <>
            The right answer depends
            <br />
            on the situation you are in.
          </>
        }
        lead="What helps a business replacing an agency is not what helps a team with a launch date eleven weeks out. So we wrote the five situations separately instead of averaging them into one pitch. Find yours and read what the first thirty days actually look like."
        trail={[{ label: "Who we help" }]}
      />

      <Section tone="deep">
        <Container>
          <SectionHeader
            eyebrow="Five situations"
            number="01"
            title="Which of these is you?"
            lead="Each page states the signals, the pattern that usually goes wrong, what we do about it, and what we need from you before we can be useful."
          />

          <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {situations.map((s) => (
              <SituationCard
                key={s.slug}
                href={`/who-we-help/${s.slug}`}
                number={s.number}
                title={s.title}
                line={s.line}
                signals={s.signals}
              />
            ))}

            <div className="flex flex-col border-b border-r border-white/10 bg-orange-500/[0.05] p-6 sm:p-8">
              <span className="u-meta text-orange-500">06</span>
              <h3 className="u-display mt-5 text-2xl sm:text-[1.75rem]">Not sure which one?</h3>
              <p className="mt-4 text-sm leading-relaxed opacity-70">
                Two of these often overlap. A plateau and a measurement problem look identical from the outside, and
                plenty of launches are also repositionings. If none of them fits cleanly, start with the fit page. It
                includes the cases where we are the wrong answer, which is faster than reading five pages to find out.
              </p>
              <div className="mt-auto flex flex-col gap-2 pt-8">
                <Link href="/fit" className="u-meta text-orange-500 hover:text-orange-600">
                  Read the fit page →
                </Link>
                <Link href="/build-my-growth-plan" className="u-meta text-orange-500 hover:text-orange-600">
                  Answer four questions instead →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Why it is organised this way"
                number="02"
                title="By situation, not by industry."
              />
              <Button href="/work" className="mt-10" variant="outline">
                Filter the work by industry
              </Button>
            </div>

            <div className="lg:col-span-7 lg:pt-4">
              <div className="space-y-6 text-lg leading-relaxed opacity-80">
                <p>
                  Most agency sites sort themselves by industry. That tells you who else they have worked with and
                  almost nothing about what they would do for you. Two ecommerce brands at the same revenue can need
                  opposite things: one needs the measurement rebuilt before anyone touches budget, the other needs a
                  second channel and a new offer. The situation predicts the work. The industry usually does not.
                </p>
                <p>
                  Industry experience still matters, mostly for speed. Knowing the category means fewer weeks spent
                  learning how buyers in it behave. So it stays filterable where it belongs, on the work, alongside
                  market and goal.
                </p>
              </div>

              <div className="mt-10 border-l-2 border-orange-600 bg-orange-600/5 px-6 py-5">
                <p className="u-meta text-orange-600">From our own research</p>
                <p className="mt-3 text-sm leading-relaxed opacity-80">
                  In an architecture audit of 79 agency websites, two addressed buyers who were replacing an agency and
                  two addressed in-house marketing teams. Those are two of the most common reasons anyone contacts an
                  agency, and the category answers them almost nowhere.
                </p>
                <Link
                  href="/insights/what-buyers-actually-check"
                  className="u-meta mt-5 inline-block text-orange-600 underline underline-offset-4"
                >
                  Read the research →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTABlock
        title="Tell us which one you are in."
        body="Four questions, then a calendar showing who you would be meeting and what the conversation covers. If your situation is not on this page, say so in the first answer."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "See how BOOST works", href: "/how-boost-works" }}
        tone="dark"
      />
    </>
  );
}
