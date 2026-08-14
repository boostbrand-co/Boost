import Link from "next/link";
import { Container, Section, SectionHeader, PageHero, Button, CTABlock } from "@/components/ui/primitives";
import { serviceGroups, services, getService, getGroup } from "@/data/services";
import { loop } from "@/data/system";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Capabilities",
  description:
    "Five capability groups and seven services: strategy and direction, creative and content, growth and acquisition, web and conversion, measurement and intelligence. How they connect matters more than the list.",
  path: "/services",
});

/** Which phase of the operating loop each capability group owns. */
const bands = [
  { slug: "strategy-direction", phases: "See and Decide", span: "lg:col-span-2" },
  { slug: "creative-content", phases: "Create", span: "lg:col-span-1" },
  { slug: "growth-acquisition", phases: "Run", span: "lg:col-span-1" },
  { slug: "measurement-intelligence", phases: "Measure and Learn", span: "lg:col-span-2" },
];

const notSold = [
  {
    label: "Volume posting sold on its own",
    body: "Cheap social output priced per post is a real service with good providers. It is not what this is, and buying it here would cost you more for the same thing.",
  },
  {
    label: "Guaranteed lead counts or guaranteed results by a date",
    body: "Anyone who guarantees a number controls the definition of that number. That is where the guarantee gets paid for, quietly, by you.",
  },
  {
    label: "Media run inside our own ad accounts",
    body: "We work inside accounts you own, including the pixel and the history. Agency-owned accounts turn your accumulated data into a switching cost.",
  },
  {
    label: "Percentage of ad spend as the entire fee",
    body: "A fee that only grows when your budget grows pays us to recommend spending more. The management fee is always stated separately from media.",
  },
  {
    label: "One task, done once",
    body: "A single asset, a single page, a single campaign with nothing around it. A freelancer will serve you better and charge less.",
  },
  {
    label: "Work without access to revenue data",
    body: "Without revenue and margin we would be optimising platform numbers, which is how reports start looking good while the business does not.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title={
          <>
            Five groups.
            <br />
            One system.
          </>
        }
        lead="Seven services, grouped five ways. The list is the least interesting part of this page. What decides whether marketing compounds is whether strategy, creative, media, conversion and measurement hand their output to each other, or arrive as five separate invoices that never meet."
        trail={[{ label: "Services" }]}
        meta={[
          { label: "Capability groups", value: "Five" },
          { label: "Services", value: "Seven" },
          { label: "Markets", value: "United States and Mexico" },
          { label: "You own", value: "Every account and asset, day one" },
        ]}
      />

      {/* THE FIVE GROUPS */}
      <Section tone="dark">
        <Container>
          <SectionHeader
            eyebrow="The five groups"
            number="01"
            title="What we actually do."
            lead="Each group is a discipline with its own job in the loop. Every service inside it has a page describing what you receive, what you provide, and when you should not buy it."
          />

          <div className="mt-16 border-t border-white/10">
            {serviceGroups.map((g) => (
              <article key={g.slug} className="grid gap-8 border-b border-white/10 py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
                <div className="lg:col-span-5">
                  <span className="u-meta tabular-nums text-orange-500">{g.number}</span>
                  <h3 className="u-display mt-5 text-3xl sm:text-4xl">{g.name}</h3>
                  <p className="mt-4 text-lg leading-snug opacity-75">{g.line}</p>
                  <p className="mt-5 max-w-md text-sm leading-relaxed opacity-55">{g.blurb}</p>
                </div>

                <div className="lg:col-span-7">
                  <p className="u-meta opacity-40">
                    {g.services.length === 1 ? "One service" : `${g.services.length} services`}
                  </p>
                  <div className="mt-5 border-t border-white/10">
                    {g.services.map((slug) => {
                      const s = getService(slug);
                      if (!s) return null;
                      return (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="group grid items-baseline gap-3 border-b border-white/10 py-6 transition-colors hover:bg-white/[0.03] sm:grid-cols-[1fr_auto] sm:gap-6"
                        >
                          <div>
                            <p className="text-xl leading-snug group-hover:text-orange-500">{s.name}</p>
                            <p className="mt-2.5 max-w-lg text-sm leading-relaxed opacity-60">{s.oneLine}</p>
                          </div>
                          <span className="u-meta text-orange-500">Open service →</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* HOW THE FIVE CONNECT */}
      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="The connection"
            number="02"
            title="How the five connect."
            lead="Each group owns a phase of the operating loop. The value is in the handoff: a hypothesis that reaches production, a result that reaches the next decision. Where an engagement breaks is almost never inside one group. It is at the seam between two."
          />

          <div className="mt-16 border border-ink-900/15">
            {/* Phase row */}
            <div className="grid border-b border-ink-900/15 sm:grid-cols-2 lg:grid-cols-6">
              {loop.map((p) => (
                <div key={p.key} className="border-b border-ink-900/15 p-5 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
                  <span className="u-meta tabular-nums text-orange-600">{p.number}</span>
                  <p className="mt-4 text-xl">{p.name}</p>
                  <p className="u-meta mt-3 opacity-45">{p.verb}</p>
                  <p className="mt-3 text-xs leading-relaxed opacity-60">{p.question}</p>
                </div>
              ))}
            </div>

            {/* Owner band */}
            <div className="grid border-b border-ink-900/15 sm:grid-cols-2 lg:grid-cols-6">
              {bands.map((b) => {
                const g = getGroup(b.slug);
                if (!g) return null;
                return (
                  <div
                    key={b.slug}
                    className={`border-b border-ink-900/15 bg-ink-900/[0.04] p-5 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0 ${b.span}`}
                  >
                    <p className="u-meta text-orange-600">
                      {g.number} · {b.phases}
                    </p>
                    <p className="mt-3.5 text-base leading-snug">{g.name}</p>
                    <p className="mt-2 text-xs leading-relaxed opacity-60">{g.line}</p>
                  </div>
                );
              })}
            </div>

            {/* The group that sits on a seam */}
            <div className="grid border-b border-ink-900/15 lg:grid-cols-6">
              <div className="border-ink-900/15 p-5 lg:col-span-2 lg:col-start-4 lg:border-l lg:border-r">
                <p className="u-meta text-orange-600">04 · Between Run and Measure</p>
                <p className="mt-3.5 text-base leading-snug">Web and conversion</p>
                <p className="mt-2 text-xs leading-relaxed opacity-60">
                  It does not own a phase. It owns the gap between a campaign that is live and a result that counts, which
                  is why it is usually the constraint media budget cannot solve.
                </p>
              </div>
            </div>

            {/* Return path */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-5">
              <p className="u-meta opacity-45">Learn feeds See · the loop restarts with more evidence than last time</p>
              <span aria-hidden className="u-meta text-orange-600">
                06 → 01
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <p className="text-base leading-relaxed opacity-70 lg:col-span-7">
              A group bought on its own still works. Creative production without a testing structure produces assets.
              Paid media without measurement produces spend. Both are legitimate purchases and we sell them. What you
              lose is the compounding: the reason month twelve should cost less per result than month one.
            </p>
            <div className="lg:col-span-5 lg:justify-self-end">
              <Button href="/how-boost-works" variant="outline">
                See the operating loop in full
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* WHAT WE DO NOT SELL */}
      <Section tone="dark">
        <Container>
          <SectionHeader
            eyebrow="Boundaries"
            number="03"
            title="What we do not sell."
            lead="A capability list is only useful if it also has edges. These are the things we either do not do, or refuse to lead with, and the reason in each case."
          />

          <div className="mt-16 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {notSold.map((n) => (
              <div key={n.label} className="border-b border-r border-white/10 p-7 sm:p-8">
                <p className="u-meta text-signal-red">Not sold here</p>
                <h3 className="mt-5 text-lg leading-snug">{n.label}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-60">{n.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed opacity-55">
            The longer version, including the situations where the honest answer is that we are the wrong partner, is on{" "}
            <Link href="/fit" className="text-orange-500 underline underline-offset-4 hover:text-orange-600">
              the fit page
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* SERVICES INDEX */}
      <Section tone="deep">
        <Container>
          <SectionHeader
            eyebrow="Index"
            number="04"
            title="Every service, one table."
            lead="Seven services. Each page carries the problem it addresses, what you receive, what you provide, the cadence, and when not to buy it."
          />

          <div className="u-scrollbar mt-14 overflow-x-auto">
            <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
              <thead>
                <tr className="u-meta border-b border-white/12 opacity-50">
                  <th scope="col" className="w-[24%] py-4 pr-6 font-normal">
                    Service
                  </th>
                  <th scope="col" className="w-[22%] py-4 pr-6 font-normal">
                    Group
                  </th>
                  <th scope="col" className="py-4 pr-6 font-normal">
                    What it does
                  </th>
                  <th scope="col" className="w-[10%] py-4 font-normal">
                    <span className="sr-only">Link</span>
                  </th>
                </tr>
              </thead>
              <tbody className="align-top">
                {services.map((s) => {
                  const g = getGroup(s.group);
                  return (
                    <tr key={s.slug} className="group border-b border-white/10 transition-colors hover:bg-white/[0.03]">
                      <th scope="row" className="py-5 pr-6 text-base font-normal">
                        <Link href={`/services/${s.slug}`} className="group-hover:text-orange-500">
                          {s.name}
                        </Link>
                      </th>
                      <td className="py-5 pr-6 text-sm opacity-60">
                        <span className="u-meta tabular-nums text-orange-500">{g?.number}</span>{" "}
                        <span className="ml-2">{g?.name}</span>
                      </td>
                      <td className="py-5 pr-6 text-sm leading-relaxed opacity-65">{s.oneLine}</td>
                      <td className="py-5">
                        <Link href={`/services/${s.slug}`} className="u-meta text-orange-500">
                          Open →
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <CTABlock
        title="Not sure which of these you need?"
        body="That is usually the right question, and it is the one the first conversation is for. Four questions from you, then a call with the people who would run the work."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "Ways to work together", href: "/engagements" }}
      />
    </>
  );
}
