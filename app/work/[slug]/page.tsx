import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Container,
  Section,
  SectionHeader,
  Eyebrow,
  PageHero,
  MetricBlock,
  PlaceholderNote,
  CTABlock,
  RelatedGrid,
} from "@/components/ui/primitives";
import { cases, caseSlugs, getCase } from "@/data/cases";
import { proofForCase } from "@/data/proof";
import { ProofCard } from "@/components/system/proof";
import { getService } from "@/data/services";
import { site } from "@/data/site";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

/** Which role would have owned each service on the account. */
const ROLE_BY_SERVICE: Record<string, string> = {
  "paid-media": "Performance lead",
  "creative-strategy": "Creative strategist",
  "measurement-intelligence": "Measurement lead",
  "web-conversion": "Conversion strategist",
  "content-creative": "Creative director",
};

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return meta({ title: "Case study not found", description: "This case study does not exist.", path: "/work", noIndex: true });
  return meta({
    title: `${c.client} · ${c.industry} · ${c.market}`,
    description: `${c.summary} The decisions, the reasoning behind them, and the source of every number.`,
    path: `/work/${c.slug}`,
  });
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const index = cases.findIndex((x) => x.slug === c.slug);
  const nextCase = cases[(index + 1) % cases.length];
  const proof = proofForCase(c.slug);

  const roles = Array.from(
    new Set(c.serviceSlugs.map((s) => ROLE_BY_SERVICE[s]).filter((r): r is string => Boolean(r))),
  );

  const related = c.serviceSlugs
    .map((s) => getService(s))
    .filter((s): s is NonNullable<ReturnType<typeof getService>> => Boolean(s))
    .map((s) => ({ label: s.name, href: `/services/${s.slug}`, note: s.oneLine }));

  const org = { "@type": "Organization", name: site.name, url: site.domain };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: c.client, url: `/work/${c.slug}` },
          ]),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: `${c.client} case study`,
          headline: c.summary,
          description: c.problem,
          url: `${site.domain}/work/${c.slug}`,
          inLanguage: "en",
          about: c.industry,
          author: org,
          publisher: org,
          creator: org,
          isPartOf: { "@type": "CollectionPage", name: "Selected work", url: `${site.domain}/work` },
        })}
      />

      {/* 01 HERO */}
      <PageHero
        eyebrow="Case study"
        title={c.client}
        lead={c.summary}
        trail={[{ label: "Work", href: "/work" }, { label: c.client }]}
        meta={[
          { label: "Industry", value: c.industry },
          { label: "Market", value: c.market },
          { label: "Duration", value: c.duration },
          { label: "Status", value: c.status },
        ]}
      >
        {!c.nameApproved && (
          <p className="u-meta mt-10 max-w-2xl border-l-2 border-orange-500 py-1 pl-4 leading-relaxed opacity-60">
            Client naming approval pending. This business is already named on BOOST&rsquo;s public portfolio, so we have
            not hidden it here, but written approval for a full case study has not been signed yet.
          </p>
        )}
      </PageHero>

      {/* 02 METRICS */}
      <section className="border-t border-white/10 bg-ink-900 pb-20 sm:pb-24">
        <Container>
          <div
            className={`grid gap-x-10 gap-y-10 sm:grid-cols-2 ${c.metrics.length > 2 ? "lg:grid-cols-3" : ""}`}
          >
            {c.metrics.map((m) => (
              <MetricBlock key={m.label} value={m.value} label={m.label} source={m.source} size="lg" />
            ))}
          </div>
        </Container>
      </section>

      {/* 03 CONTEXT + 04 PROBLEM */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow number="03">Business context</Eyebrow>
              <p className="mt-6 text-lg leading-relaxed opacity-75">{c.context}</p>
              <dl className="mt-10 space-y-5">
                <div className="border-t border-ink-900/15 pt-4">
                  <dt className="u-meta opacity-50">Business model</dt>
                  <dd className="mt-2 text-sm">{c.businessModel}</dd>
                </div>
                <div className="border-t border-ink-900/15 pt-4">
                  <dt className="u-meta opacity-50">Goal</dt>
                  <dd className="mt-2 text-sm">{c.goal}</dd>
                </div>
                <div className="border-t border-ink-900/15 pt-4">
                  <dt className="u-meta opacity-50">Services</dt>
                  <dd className="mt-2 text-sm">{c.services.join(", ")}</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-8">
              <Eyebrow number="04">The problem</Eyebrow>
              <h2 className="u-display mt-7 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">{c.problem}</h2>
            </div>
          </div>
        </Container>
      </Section>

      {/* 05 WHAT WE SAW */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeader eyebrow="What we saw" number="05" title="The evidence." />
            </div>
            <ol className="lg:col-span-8">
              {c.observed.map((o, i) => (
                <li key={o} className="grid grid-cols-[3rem_1fr] gap-5 border-t border-white/12 py-7 last:border-b">
                  <span className="u-meta pt-1.5 tabular-nums text-orange-500">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-lg leading-relaxed opacity-80">{o}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* 06 WHAT WE DECIDED + WHY */}
      <section className="border-y border-orange-500/25 bg-ink-800 py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow number="06">What we decided</Eyebrow>
            <h2 className="u-display mt-5 text-4xl sm:text-5xl lg:text-[3.75rem]">The decisions.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-75">
              This is the part most case studies leave out. The result is downstream of these calls, so this is the
              section worth arguing with.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <ol className="lg:col-span-7">
              {c.decided.map((d, i) => (
                <li
                  key={d}
                  className="grid grid-cols-[3.5rem_1fr] gap-5 border-t border-orange-500/25 py-8 last:border-b"
                >
                  <span className="u-display pt-1 text-2xl tabular-nums text-orange-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="u-display text-xl leading-snug sm:text-2xl">{d}</p>
                </li>
              ))}
            </ol>

            <aside className="lg:col-span-5">
              <div className="border border-orange-500/30 bg-orange-500/[0.06] p-7 sm:p-8">
                <p className="u-meta text-orange-500">Why we decided it</p>
                <p className="mt-5 text-lg leading-relaxed opacity-85">{c.rationale}</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* 07 WHAT WE BUILT */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeader eyebrow="What we built" number="07" title="The work itself." />
            </div>
            <ul className="border-t border-white/12 lg:col-span-8">
              {c.built.map((b) => (
                <li key={b} className="flex gap-5 border-b border-white/12 py-6">
                  <span aria-hidden className="mt-3.5 h-px w-6 shrink-0 bg-orange-500" />
                  <p className="text-lg leading-relaxed opacity-80">{b}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 08 TIMELINE + TEAM */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow number="08">Timeline</Eyebrow>
              <dl className="mt-8 space-y-5">
                <div className="border-t border-ink-900/15 pt-4">
                  <dt className="u-meta opacity-50">Duration</dt>
                  <dd className="mt-2 text-lg">{c.duration}</dd>
                </div>
                <div className="border-t border-ink-900/15 pt-4">
                  <dt className="u-meta opacity-50">Status</dt>
                  <dd className="mt-2 text-lg">{c.status}</dd>
                </div>
                <div className="border-t border-ink-900/15 pt-4">
                  <dt className="u-meta opacity-50">What happened next</dt>
                  <dd className="mt-2 text-lg">{c.next}</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7">
              <Eyebrow>Team</Eyebrow>
              <p className="mt-6 max-w-xl leading-relaxed opacity-70">
                These are the roles the work required, derived from the services running on the account.
              </p>
              <ul className="mt-8 grid gap-px border border-ink-900/15 bg-ink-900/15 sm:grid-cols-2">
                {roles.map((r) => (
                  <li key={r} className="bg-cream-100 p-6">
                    <p className="u-meta text-orange-600">Role</p>
                    <p className="mt-3 text-xl">{r}</p>
                  </li>
                ))}
              </ul>
              <p className="u-meta mt-6 opacity-55">
                Individual names are being confirmed before publication.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 09 WHAT CHANGED */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeader eyebrow="What changed" number="09" title="What the account does differently now." />
            </div>
            <ul className="border-t border-white/12 lg:col-span-8">
              {c.changed.map((x) => (
                <li key={x} className="flex gap-5 border-b border-white/12 py-6">
                  <span aria-hidden className="mt-3.5 h-px w-6 shrink-0 bg-orange-500" />
                  <p className="text-lg leading-relaxed opacity-80">{x}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 10 RESULTS */}
      <Section tone="deep">
        <Container>
          <SectionHeader
            eyebrow="Results"
            number="10"
            title="The numbers, and where each one came from."
            lead="Sources are printed next to the figure rather than in a footnote, because the source is the part that decides whether the figure means anything."
          />

          <div className="mt-14 border-t border-white/12">
            {c.metrics.map((m) => (
              <div
                key={m.label}
                className="grid gap-4 border-b border-white/12 py-8 lg:grid-cols-12 lg:items-baseline lg:gap-8"
              >
                <p className="u-display text-4xl tabular-nums sm:text-5xl lg:col-span-4">{m.value}</p>
                <p className="text-lg opacity-80 lg:col-span-3">{m.label}</p>
                <div className="lg:col-span-5">
                  <p className="u-meta opacity-40">Source</p>
                  <p className="mt-2 text-sm leading-relaxed opacity-55">{m.source}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl border-l-2 border-orange-500 pl-6">
            <p className="u-meta text-orange-500">Verification status</p>
            <p className="mt-3 text-sm leading-relaxed opacity-70">
              These figures were published by BOOST on its own portfolio and are being re-verified against platform
              exports before wider publication. Where a date range, a spend figure or an attribution method is still
              outstanding, it is listed below rather than left out.
            </p>
          </div>
        </Container>
      </Section>

      {/* 10b PLATFORM EVIDENCE */}
      {proof.length > 0 ? (
        <Section tone="dark">
          <Container>
            <SectionHeader
              eyebrow="Platform evidence"
              number="10b"
              title={proof.length === 1 ? "The screenshot behind the number." : "The screenshots behind the numbers."}
              lead="Read from the platform itself and transcribed here, including the parts that are missing from it. Where the screenshot does not print a currency or a date range, that is stated rather than filled in."
            />
            <div className="mt-14 space-y-10">
              {proof.map((p) => (
                <ProofCard key={p.id} p={p} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* 11 WHAT WE LEARNED */}
      <Section tone="cream">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow number="11">What we learned</Eyebrow>
            <blockquote className="mt-8">
              <p className="u-display text-3xl leading-tight sm:text-4xl lg:text-[3.25rem]">
                <span aria-hidden className="text-orange-600">
                  &ldquo;
                </span>
                {c.learned}
                <span aria-hidden className="text-orange-600">
                  &rdquo;
                </span>
              </p>
              <footer className="u-meta mt-8 opacity-55">
                Recorded in the decision log for {c.client}. Kept so the next engagement starts from it.
              </footer>
            </blockquote>
          </div>
        </Container>
      </Section>

      {/* 12 WHAT HAPPENED NEXT + 13 STILL TO CONFIRM */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="What happened next" number="12" title="Where it stands." />
              <p className="mt-8 text-lg leading-relaxed opacity-80">{c.next}</p>
            </div>

            <div className="lg:col-span-7">
              <Eyebrow number="13">Still to confirm on this case study</Eyebrow>
              <div className="mt-8">
                <PlaceholderNote>
                  <span className="block">
                    This case study is published before it is fully sourced. The following items are outstanding, and
                    each one is being chased directly with the client or pulled from platform exports.
                  </span>
                  <span className="mt-5 block">
                    <span className="u-meta block opacity-60">Outstanding</span>
                    {c.needs.map((n) => (
                      <span key={n} className="mt-2.5 flex gap-3 leading-relaxed">
                        <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-orange-500" />
                        <span>{n}</span>
                      </span>
                    ))}
                  </span>
                  <span className="mt-5 block">BOOST publishes what it can verify, and lists what it cannot.</span>
                </PlaceholderNote>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 14 RELATED CAPABILITIES + 15 NEXT CASE */}
      <Section tone="deep">
        <Container>
          <RelatedGrid title="Related capabilities" items={related} />

          <div className="mt-16">
            <p className="u-meta opacity-50">Next case study</p>
            <Link
              href={`/work/${nextCase.slug}`}
              className="group mt-6 flex flex-col gap-6 border-t border-white/12 py-10 lg:flex-row lg:items-end lg:justify-between"
            >
              <div>
                <h2 className="u-display text-4xl group-hover:text-orange-500 sm:text-5xl">{nextCase.client}</h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-65">{nextCase.summary}</p>
              </div>
              <span className="u-meta shrink-0 text-orange-500">Read the decisions &rarr;</span>
            </Link>
            <Link href="/work" className="u-meta mt-6 inline-block opacity-55 hover:text-orange-500 hover:opacity-100">
              &larr; All thirteen case studies
            </Link>
          </div>
        </Container>
      </Section>

      <CTABlock
        title="Is your account in the same position?"
        body={`${c.client} is one business with one set of constraints. Tell us what feels stuck in yours and we will tell you which decision on this page is worth copying and which one is not.`}
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "See how BOOST works", href: "/how-boost-works" }}
      />
    </>
  );
}
