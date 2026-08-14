import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  Container,
  Section,
  SectionHeader,
  PageHero,
  Button,
  CTABlock,
  FAQ,
  RelatedGrid,
  PlaceholderNote,
} from "@/components/ui/primitives";
import { CreativeTestTable, ReportArtifact } from "@/components/system/artifacts";
import { CaseCard } from "@/components/cards/cards";
import { getService, getGroup, serviceSlugs, services } from "@/data/services";
import { getCase } from "@/data/cases";
import { site } from "@/data/site";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) {
    return meta({ title: "Service not found", description: "This service page does not exist.", path: "/services", noIndex: true });
  }
  return meta({
    title: s.name,
    description: `${s.oneLine} ${s.problem.split(". ")[0]}.`,
    path: `/services/${s.slug}`,
  });
}

/**
 * Structure of the artifact each service produces, for the services whose
 * artifact is not one of the real demonstration components. Labels describe
 * the fields, not the contents. No numbers are invented here.
 */
const artifactSpecs: Record<string, { label: string; note: string }[]> = {
  "growth-strategy": [
    { label: "Constraint", note: "Named in one sentence, with the evidence that points at it" },
    { label: "Thesis", note: "What we believe is true about the buyer and the market" },
    { label: "Disproof", note: "The result that would tell us the thesis is wrong" },
    { label: "Deciding numbers", note: "The measures budget decisions will be judged against" },
    { label: "Sequence", note: "What happens in the first 90 days, with owners and dates" },
    { label: "Opening log entry", note: "Dated, attributed, and the first line of the record you keep" },
  ],
  "brand-positioning": [
    { label: "Claim", note: "One line, in the words a buyer would use" },
    { label: "Audience", note: "Who the claim is for and at what buying stage" },
    { label: "Proof required", note: "What has to be demonstrable for the claim to be allowed" },
    { label: "Proof held", note: "What you can already show, and what is still missing" },
    { label: "Where it applies", note: "Site, paid media, sales material" },
  ],
  "content-creative": [
    { label: "Asset", note: "The file in production and its format" },
    { label: "Concept", note: "The tested idea it belongs to" },
    { label: "Testing", note: "The single variable this version isolates" },
    { label: "Version", note: "What changed from the version before it, and why" },
    { label: "Status", note: "In production, in review, live, or retired" },
    { label: "Owner", note: "The named person accountable for it" },
  ],
  "web-conversion": [
    { label: "Step", note: "One row per step from impression to sale" },
    { label: "Where it happens", note: "On the site, in a message thread, or on a call" },
    { label: "Measured", note: "The event that proves the step occurred" },
    { label: "Drop-off", note: "Measured from your own data, not estimated from benchmarks" },
    { label: "Suspected cause", note: "The hypothesis, and the test that would confirm it" },
  ],
};

function ArtifactSpecPanel({ label, caption, rows }: { label: string; caption: string; rows: { label: string; note: string }[] }) {
  return (
    <figure className="border border-white/12 bg-ink-800">
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 px-5 py-3.5">
        <span className="u-meta opacity-60">{label}</span>
        <span className="u-meta opacity-40">Structure</span>
      </figcaption>
      <dl className="p-5 sm:p-6">
        {rows.map((r, i) => (
          <div
            key={r.label}
            className={`grid gap-2 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6 ${i === 0 ? "" : "border-t border-white/10"}`}
          >
            <dt className="u-meta pt-0.5 text-orange-500">{r.label}</dt>
            <dd className="text-sm leading-relaxed opacity-70">{r.note}</dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-white/12 px-5 py-3.5 text-xs leading-relaxed opacity-50">{caption}</p>
    </figure>
  );
}

function ArtifactFor({ slug }: { slug: string }) {
  if (slug === "creative-strategy" || slug === "paid-media") return <CreativeTestTable />;
  if (slug === "measurement-intelligence") return <ReportArtifact />;
  return null;
}

function BorderedList({ title, items, tone = "dark" }: { title: string; items: string[]; tone?: "dark" | "cream" }) {
  const border = tone === "cream" ? "border-ink-900/15" : "border-white/12";
  const accent = tone === "cream" ? "text-orange-600" : "text-orange-500";
  return (
    <div className={`border ${border}`}>
      <p className={`u-meta border-b px-6 py-4 ${border} ${accent}`}>{title}</p>
      <ul>
        {items.map((item, i) => (
          <li key={item} className={`flex gap-4 px-6 py-5 text-sm leading-relaxed opacity-75 ${i === 0 ? "" : `border-t ${border}`}`}>
            <span className="u-meta shrink-0 tabular-nums opacity-40">{String(i + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stack({ children }: { children: ReactNode }) {
  return <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">{children}</div>;
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const group = getGroup(s.group);
  const relatedCases = s.relatedCases.map((c) => getCase(c)).filter((c) => c !== undefined);
  const relatedServices = s.relatedServices
    .map((r) => services.find((x) => x.slug === r))
    .filter((x) => x !== undefined);
  const hasComponentArtifact = ["creative-strategy", "paid-media", "measurement-intelligence"].includes(s.slug);
  const specRows = artifactSpecs[s.slug];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.oneLine,
    serviceType: group?.name,
    url: `${site.domain}/services/${s.slug}`,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
      email: site.email,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Mexico" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: s.name, url: `/services/${s.slug}` },
          ]),
        )}
      />

      <PageHero
        eyebrow={group ? `${group.number} · ${group.name}` : "Capabilities"}
        title={s.name}
        lead={s.oneLine}
        trail={[{ label: "Services", href: "/services" }, { label: s.name }]}
        meta={s.cadence.map((c) => ({ label: c.label, value: c.value }))}
      />

      {/* PROBLEM */}
      <Section tone="dark">
        <Container>
          <Stack>
            <div className="lg:col-span-4">
              <p className="u-meta text-orange-500">01 · The problem</p>
              <h2 className="u-display mt-6 text-3xl sm:text-4xl">Why this exists.</h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed opacity-50">
                Every service page here opens with the problem rather than the deliverable, because a deliverable is
                only worth what the problem costs you.
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="u-display text-2xl leading-[1.25] sm:text-3xl lg:text-[2.25rem] lg:leading-[1.28]">
                {s.problem}
              </p>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* FOR WHO + TRIGGERS */}
      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="Fit"
            number="02"
            title="Who this is for, and what brings people here."
            lead="If you do not recognise yourself in the left column, this is probably the wrong purchase and the services index is a better place to look."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <BorderedList title="Who this is for" items={s.forWho} tone="cream" />
            <BorderedList title="What usually triggers it" items={s.triggers} tone="cream" />
          </div>
        </Container>
      </Section>

      {/* WHAT WE DO */}
      <Section tone="dark">
        <Container>
          <SectionHeader
            eyebrow="The work"
            number="03"
            title="What BOOST actually does."
            lead="Written as actions rather than capabilities, so you can check whether they happened."
          />
          <ol className="mt-14 border-t border-white/10">
            {s.whatWeDo.map((w, i) => (
              <li key={w} className="grid gap-4 border-b border-white/10 py-8 sm:grid-cols-[5rem_1fr] sm:gap-8 lg:py-10">
                <span className="u-meta tabular-nums text-orange-500">{String(i + 1).padStart(2, "0")}</span>
                <p className="max-w-3xl text-lg leading-relaxed sm:text-xl">{w}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* THE EXCHANGE */}
      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="The exchange"
            number="04"
            title="What you receive, what you provide."
            lead="Both columns are written into the engagement. The right column is not a formality: it is the input the left column is built from, and the most common reason work like this underperforms is that it never arrived."
          />

          <div className="mt-14 border border-ink-900/15">
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-ink-900/15 lg:border-b-0 lg:border-r">
                <p className="u-meta border-b border-ink-900/15 px-6 py-4 text-orange-600">What you receive</p>
                <ul>
                  {s.youReceive.map((y, i) => (
                    <li
                      key={y}
                      className={`px-6 py-6 text-base leading-relaxed ${i === 0 ? "" : "border-t border-ink-900/15"}`}
                    >
                      {y}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="u-meta border-b border-ink-900/15 px-6 py-4 opacity-50">What you provide</p>
                <ul>
                  {s.youProvide.map((y, i) => (
                    <li
                      key={y}
                      className={`px-6 py-6 text-base leading-relaxed opacity-75 ${i === 0 ? "" : "border-t border-ink-900/15"}`}
                    >
                      {y}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="border-t border-ink-900/15 px-6 py-5 text-sm leading-relaxed opacity-65">
              If the right column is not available, we say so before starting rather than billing for months and
              explaining it afterwards.
            </p>
          </div>
        </Container>
      </Section>

      {/* SYSTEM ROLE + CADENCE + WHO */}
      <Section tone="deep">
        <Container>
          <Stack>
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="Position in the system"
                number="05"
                title="Where this sits."
                lead={s.systemRole}
              />
              <Button href="/how-boost-works" className="mt-10" variant="outline">
                See the operating loop
              </Button>

              <div className="mt-14">
                <p className="u-meta opacity-45">Who works on it</p>
                <ul className="mt-5 border-t border-white/12">
                  {s.whoWorksOnIt.map((w) => (
                    <li key={w} className="flex items-baseline gap-4 border-b border-white/12 py-4 text-sm">
                      <span aria-hidden className="h-px w-4 shrink-0 bg-orange-500" />
                      <span className="opacity-80">{w}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <PlaceholderNote>
                    Role slots are confirmed. The individual names and photographs behind them are being finalised before
                    publication, and are on{" "}
                    <Link href="/about/team" className="underline underline-offset-4">
                      the team page
                    </Link>
                    .
                  </PlaceholderNote>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="u-meta opacity-45">Cadence</p>
              <div className="mt-5 border border-white/12">
                <dl>
                  {s.cadence.map((c, i) => (
                    <div
                      key={c.label}
                      className={`grid gap-2 px-6 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6 ${i === 0 ? "" : "border-t border-white/12"}`}
                    >
                      <dt className="u-meta pt-1 opacity-45">{c.label}</dt>
                      <dd className="text-base">{c.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="mt-6 max-w-md text-sm leading-relaxed opacity-55">
                Cadence is agreed at kickoff and written down. If it changes, the reason goes in the decision log with a
                date on it.
              </p>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* ARTIFACT */}
      <Section tone="dark">
        <Container>
          <Stack>
            <div className="lg:col-span-4">
              <p className="u-meta text-orange-500">06 · Example artifact</p>
              <h2 className="u-display mt-6 text-3xl sm:text-4xl">{s.artifact.label}</h2>
              <p className="mt-6 text-base leading-relaxed opacity-70">{s.artifact.caption}</p>
              <p className="mt-6 text-sm leading-relaxed opacity-50">
                {hasComponentArtifact
                  ? "The panel is the real format, filled with demonstration data so you can read the structure without seeing another client's numbers."
                  : "Shown as the structure rather than a filled example, because the contents are specific to one business and are not ours to publish."}
              </p>
            </div>
            <div className="lg:col-span-8">
              {hasComponentArtifact ? (
                <ArtifactFor slug={s.slug} />
              ) : specRows ? (
                <ArtifactSpecPanel label={s.artifact.label} caption={s.artifact.caption} rows={specRows} />
              ) : null}
            </div>
          </Stack>
        </Container>
      </Section>

      {/* INVESTMENT + DONT BUY IF */}
      <Section tone="cream">
        <Container>
          <Stack>
            <div className="lg:col-span-5">
              <p className="u-meta text-orange-600">07 · Investment</p>
              <div className="mt-6 border-l-2 border-orange-600 pl-6">
                <p className="text-lg leading-relaxed">{s.investmentSignal}</p>
              </div>
              <p className="mt-8 max-w-sm text-sm leading-relaxed opacity-60">
                Ranges are confirmed in writing before any work starts, and the fee is separate from anything you spend
                on media.
              </p>
              <Button href="/engagements" className="mt-8" variant="outline">
                How engagements are structured
              </Button>
            </div>

            <div className="lg:col-span-7">
              <p className="u-meta text-signal-red">08 · When not to buy this</p>
              <h2 className="u-display mt-6 text-3xl sm:text-4xl">Do not buy this if.</h2>
              <div className="mt-8 border border-ink-900/15">
                {s.dontBuyIf.map((d, i) => (
                  <div key={d} className={`flex gap-5 px-6 py-6 ${i === 0 ? "" : "border-t border-ink-900/15"}`}>
                    <span aria-hidden className="u-meta shrink-0 pt-1 text-signal-red">
                      ✕
                    </span>
                    <p className="text-base leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed opacity-60">
                We would rather lose the sale here than eight weeks in. If one of these describes you,{" "}
                <Link href="/fit" className="text-orange-600 underline underline-offset-4">
                  the fit page
                </Link>{" "}
                says where to go instead.
              </p>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="dark">
        <Container>
          <Stack>
            <div className="lg:col-span-4">
              <SectionHeader eyebrow="Questions" number="09" title="Asked often." />
            </div>
            <div className="lg:col-span-8">
              <FAQ items={s.faqs} tone="dark" />
            </div>
          </Stack>
        </Container>
      </Section>

      {/* RELATED */}
      <Section tone="deep">
        <Container>
          {relatedCases.length > 0 && (
            <>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <SectionHeader
                  eyebrow="Proof"
                  number="10"
                  title="Where this work has run."
                  lead="Each case links to what was observed, what was decided, and what it taught. Every number names its source."
                />
                <Button href="/work" variant="outline">
                  All case studies
                </Button>
              </div>
              <div className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {relatedCases.map((c, i) => (
                  <CaseCard key={c.slug} c={c} index={i} />
                ))}
              </div>
            </>
          )}

          {relatedServices.length > 0 && (
            <div className="mt-20">
              <RelatedGrid
                title="Services that usually run alongside this"
                items={relatedServices.map((r) => ({
                  label: r.name,
                  href: `/services/${r.slug}`,
                  note: r.oneLine,
                }))}
              />
            </div>
          )}
        </Container>
      </Section>

      <CTABlock
        title={`Talk about ${s.shortName.toLowerCase()}.`}
        body="Four questions from you, then a call with the people who would run the work. If the answer is that you need something else, you will hear that on the call rather than after the invoice."
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={{ label: "All capabilities", href: "/services" }}
      />
    </>
  );
}
