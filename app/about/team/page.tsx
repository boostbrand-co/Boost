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
import { team, teamNote, teamPhotoNote, teamExperienceNote, disciplines } from "@/data/team";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata = meta({
  title: "Team",
  description:
    "The ten people at BOOST, named, with the seat each one owns and how an account is staffed. Backgrounds are not published until they are confirmed in writing.",
  path: "/about/team",
});

const disciplineFocus = [
  {
    t: "Strategy is held by one person, not a committee",
    b: "The growth strategist owns the thesis and the decision log. When the thesis changes, there is one person whose name is on the change and one document where it is recorded.",
  },
  {
    t: "Creative is split into two jobs on purpose",
    b: "Creative strategy decides what to make and what a result would mean. Creative direction decides whether the thing made is good enough to carry the idea. Collapsing them into one role is how agencies end up producing volume that teaches nothing.",
  },
  {
    t: "Media and measurement are separate seats",
    b: "The person spending the budget is not the only person checking whether the numbers behind it hold up. That separation is the point.",
  },
  {
    t: "The founder is on the account, not just the pitch",
    b: "Senior judgment on positioning and strategy is a named responsibility rather than an availability promise.",
  },
];

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
            { name: "Team", url: "/about/team" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Team"
        title={
          <>
            Who would actually
            <br />
            be on your account.
          </>
        }
        lead="Ten people, each with a named seat and defined ownership. You are told who holds yours before you sign rather than after, because the person on the call should be the person in the account."
        trail={[{ label: "About", href: "/about" }, { label: "Team" }]}
        meta={[
          { label: "People", value: `${team.length}, all named` },
          { label: "Disciplines", value: `${disciplines.length} across the team` },
          { label: "Disclosed", value: "Before you sign" },
          { label: "Backgrounds", value: "Only when confirmed" },
        ]}
      >
        <div className="mt-14 max-w-3xl">
          <PlaceholderNote>
            {teamPhotoNote} {teamExperienceNote} What each person owns is a description of the seat, written from how
            BOOST actually runs an account, and it is confirmed with the person before it is treated as final.
          </PlaceholderNote>
        </div>
      </PageHero>

      {/* TEAM NOTE + CARDS */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="The roles"
                number="01"
                title={`${team.length} people, ${team.length} owners.`}
              />
              <p className="mt-8 max-w-md border-l-2 border-orange-500 pl-5 text-base leading-relaxed sm:text-lg">
                {teamNote}
              </p>
              <p className="mt-8 max-w-md text-sm leading-relaxed opacity-60">
                Ownership is what makes this useful. A list of job titles tells you nothing. A list of who is
                accountable for which decision tells you where to go when something is wrong.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {team.map((m) => (
                <TeamCard key={m.slug} m={m} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* HOW AN ACCOUNT IS STAFFED */}
      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="Staffing"
            number="02"
            title="How a BOOST account is staffed."
            lead="On a Core Growth Partnership the strategy, growth, delivery, creative and production seats are all represented, and each one owns a defined part of the work. On a fixed-scope engagement the seats present are set in the scope document and named before kickoff."
          />

          <div className="u-scrollbar mt-14 overflow-x-auto">
            <table className="w-full min-w-[52rem] border-collapse text-left">
              <caption className="sr-only">
                The people at BOOST, the seat each one owns, their specialty and what you work with them on.
              </caption>
              <thead>
                <tr className="border-y border-ink-900/20">
                  <th scope="col" className="u-meta w-[20%] py-4 pr-6 align-bottom opacity-55">
                    Person
                  </th>
                  <th scope="col" className="u-meta w-[28%] py-4 pr-6 align-bottom opacity-55">
                    Owns
                  </th>
                  <th scope="col" className="u-meta w-[26%] py-4 pr-6 align-bottom opacity-55">
                    Specialty
                  </th>
                  <th scope="col" className="u-meta w-[26%] py-4 align-bottom opacity-55">
                    You work with them on
                  </th>
                </tr>
              </thead>
              <tbody>
                {team.map((m, i) => (
                  <tr key={m.slug} className="border-b border-ink-900/15 align-top">
                    <th scope="row" className="py-6 pr-6 font-normal">
                      <span className="u-meta tabular-nums text-orange-600">{String(i + 1).padStart(2, "0")}</span>
                      <span className="mt-2 block text-lg leading-snug">{m.name}</span>
                      <span className="u-meta mt-2 block text-orange-600">{m.role}</span>
                      <span className="u-meta mt-2 block opacity-40">{m.discipline}</span>
                    </th>
                    <td className="py-6 pr-6 text-sm leading-relaxed opacity-70">{m.owns}</td>
                    <td className="py-6 pr-6 text-sm leading-relaxed opacity-70">{m.specialty}</td>
                    <td className="py-6 text-sm leading-relaxed opacity-70">{m.worksWithYouOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 grid gap-px border border-ink-900/20 bg-ink-900/20 md:grid-cols-2">
            {disciplineFocus.map((x) => (
              <div key={x.t} className="bg-cream-100 p-7 sm:p-9">
                <h3 className="text-xl leading-snug">{x.t}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-70">{x.b}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CLIENT LOAD */}
      <Section tone="deep">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Client load"
                number="03"
                title="You are told how many other accounts they hold."
                lead="The most common failure in agency work is not incompetence. It is an account lead quietly carrying more clients than anyone can think properly about."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-8 text-base leading-relaxed opacity-80 sm:text-lg">
                <p>
                  Before you sign, you are told who holds each seat on your account and how many other accounts each of
                  those people is on at that moment. If that number changes materially during the engagement, you hear
                  it from us rather than noticing it in the work.
                </p>
                <p>
                  This is an operating commitment about disclosure, not a guaranteed maximum. Publishing a number we
                  could not hold in every month of every year would be the same kind of claim this whole site exists to
                  avoid. What we can commit to is that the real number is stated, in writing, before money changes
                  hands.
                </p>
              </div>

              <div className="mt-12 grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2">
                <div className="bg-ink-800 p-6 sm:p-7">
                  <p className="u-meta text-signal-red">What you usually get</p>
                  <p className="mt-4 text-sm leading-relaxed opacity-70">
                    A senior name on the pitch, an unnamed team on the account, and no way to find out how thinly either
                    is spread until something slips.
                  </p>
                </div>
                <div className="bg-ink-800 p-6 sm:p-7">
                  <p className="u-meta text-signal-green">What is disclosed here</p>
                  <p className="mt-4 text-sm leading-relaxed opacity-70">
                    The person in each seat, what they own, and their current client load, given before signing and
                    updated when it changes.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <PlaceholderNote>
                  No client load figure is published on this site because no confirmed number exists yet. Ana to supply
                  the current accounts-per-person figure for each role if a stated ceiling is to be published, otherwise
                  this stays a disclosure commitment rather than a number.
                </PlaceholderNote>
              </div>

              <Button href="/fit" variant="outline" className="mt-10">
                Questions to ask any agency about this
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <RelatedGrid
            title="Related"
            items={[
              { label: "About BOOST", href: "/about", note: "Why it exists and how it runs" },
              { label: "Ways to work together", href: "/engagements", note: "Which seats appear on which engagement" },
              { label: "How BOOST works", href: "/how-boost-works", note: "The operating loop" },
              { label: "Client control", href: "/how-boost-works/client-control", note: "Ownership and offboarding" },
              { label: "AI disclosure", href: "/ai-disclosure", note: "Where humans decide" },
              { label: "Fit", href: "/fit", note: "Including when we are wrong for you" },
            ]}
          />
        </Container>
      </Section>

      <CTABlock
        title="Meet them before you commit."
        body="The first conversation is with the people who would hold these seats on your account, with their current client load stated. Not a sales team handing you over afterwards."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "See the engagement types", href: "/engagements" }}
      />
    </>
  );
}
