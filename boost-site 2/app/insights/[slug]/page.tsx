import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, PageHero, CTABlock, RelatedGrid } from "@/components/ui/primitives";
import { getInsight, insightSlugs, insights } from "@/data/insights";
import { site } from "@/data/site";
import { meta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return insightSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) {
    return meta({
      title: "Insight not found",
      description: "This article does not exist.",
      path: `/insights/${slug}`,
      noIndex: true,
    });
  }
  return meta({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
  });
}

const slugifyHeading = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

/** Contextual CTA per subject. Nothing here promises an outcome. */
const ctaByCategory: Record<string, { title: string; body: string; secondary: { label: string; href: string } }> = {
  "agency-buying": {
    title: "The questions in this study are fair ones. Ask us them.",
    body: "Who runs the account, how many others they carry, and what happens to everything you built if you leave. Thirty minutes, and the answers are not rehearsed.",
    secondary: { label: "How client control works", href: "/how-boost-works/client-control" },
  },
  "marketing-intelligence": {
    title: "See a real report before you talk to anyone.",
    body: "Six questions instead of a hundred metrics, including the section on what we got wrong that month. It is published, not described.",
    secondary: { label: "See the reporting format", href: "/how-boost-works/reporting" },
  },
  "creative-strategy": {
    title: "Volume without a hypothesis is expensive noise.",
    body: "Creative Memory is the record of what each test taught, in language still usable a year later, and it stays yours if you leave.",
    secondary: { label: "How Creative Memory works", href: "/how-boost-works/creative-memory" },
  },
  "ai-marketing": {
    title: "We itemise what the machine does.",
    body: "What AI handles, what humans decide, and the rule that nothing reaches you without a named human reviewing it first. Published, not on request.",
    secondary: { label: "Read the AI disclosure", href: "/ai-disclosure" },
  },
  "cross-border": {
    title: "Two markets, built natively in both.",
    body: "People in San Antonio and Monterrey, separate creative hypotheses per market, one shared learning record. That is an operating structure, not a language claim.",
    secondary: { label: "How cross-border work runs", href: "/who-we-help/cross-border-growth" },
  },
};

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  const headings = article.body
    .filter((b) => b.type === "h2" && b.text)
    .map((b) => ({ id: slugifyHeading(b.text as string), text: b.text as string }));

  const related = [
    ...insights.filter((i) => i.slug !== article.slug && i.categorySlug === article.categorySlug),
    ...insights.filter((i) => i.slug !== article.slug && i.categorySlug !== article.categorySlug),
  ].slice(0, 3);

  const cta = ctaByCategory[article.categorySlug] ?? {
    title: "Tell us what feels stuck.",
    body: "Four short steps, then a calendar. The first call is thirty minutes and it is a diagnosis, not a pitch.",
    secondary: { label: "See how BOOST works", href: "/how-boost-works" },
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    articleSection: article.category,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    url: `${site.domain}/insights/${article.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.domain}/insights/${article.slug}` },
    author: { "@type": "Organization", name: site.name, url: site.domain },
    publisher: { "@type": "Organization", name: site.name, url: site.domain, email: site.email },
  };

  const tocLinks = (
    <ol className="border-t border-white/12">
      {headings.map((h, i) => (
        <li key={h.id} className="border-b border-white/12">
          <a
            href={`#${h.id}`}
            className="flex gap-3 py-3.5 text-sm leading-snug opacity-65 transition-colors hover:text-orange-500 hover:opacity-100"
          >
            <span className="u-meta pt-1 tabular-nums opacity-50">0{i + 1}</span>
            <span>{h.text}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Insights", url: "/insights" },
            { name: article.title, url: `/insights/${article.slug}` },
          ]),
        )}
      />

      <PageHero
        eyebrow={article.category}
        title={article.title}
        lead={article.excerpt}
        trail={[{ label: "Insights", href: "/insights" }, { label: article.category }]}
        meta={[
          { label: "Reading time", value: `${article.readTime} read` },
          { label: "Published", value: article.date },
          { label: "Author", value: "BOOST research" },
          { label: "Subject", value: article.category },
        ]}
      />

      <Section tone="dark">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* TABLE OF CONTENTS */}
            {headings.length > 0 && (
              <aside className="lg:col-span-4 xl:col-span-3">
                <details className="border border-white/12 px-5 py-4 lg:hidden">
                  <summary className="u-meta cursor-pointer list-none text-orange-500">
                    Contents ({headings.length} sections)
                  </summary>
                  <div className="mt-4">{tocLinks}</div>
                </details>

                <nav aria-label="Table of contents" className="hidden lg:sticky lg:top-28 lg:block">
                  <p className="u-meta opacity-50">Contents</p>
                  <div className="mt-5">{tocLinks}</div>
                  <p className="u-meta mt-8 opacity-40">
                    {article.readTime} read · {article.date}
                  </p>
                </nav>
              </aside>
            )}

            {/* ARTICLE BODY */}
            <article className={headings.length > 0 ? "lg:col-span-8 xl:col-span-8 xl:col-start-5" : "lg:col-span-9"}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-white/12 pb-6">
                <span className="u-meta text-orange-500">BOOST research</span>
                <span className="u-meta opacity-45">{article.date}</span>
                <span className="u-meta opacity-45">{article.readTime} read</span>
              </div>

              <div className="mt-10 max-w-2xl">
                {article.body.map((block, i) => {
                  if (block.type === "h2") {
                    const id = slugifyHeading(block.text ?? "");
                    return (
                      <h2 key={i} id={id} className="u-display mt-16 scroll-mt-28 text-3xl first:mt-0 sm:text-4xl">
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "p") {
                    return (
                      <p key={i} className="mt-6 text-lg leading-relaxed opacity-80">
                        {block.text}
                      </p>
                    );
                  }

                  if (block.type === "quote") {
                    return (
                      <blockquote key={i} className="mt-12 border-l-2 border-orange-500 pl-6 sm:pl-8">
                        <p className="u-display text-2xl leading-tight text-orange-500 sm:text-3xl lg:text-[2.5rem]">
                          {block.text}
                        </p>
                      </blockquote>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <ul key={i} className="mt-10 border-t border-white/12">
                        {(block.items ?? []).map((item, j) => (
                          <li key={j} className="grid grid-cols-[2.5rem_1fr] gap-2 border-b border-white/12 py-5">
                            <span className="u-meta pt-1.5 tabular-nums text-orange-500">0{j + 1}</span>
                            <span className="text-base leading-relaxed opacity-75">{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // note
                  return (
                    <aside key={i} className="mt-12 border border-white/12 px-5 py-5">
                      <p className="u-meta text-orange-500">Methodology</p>
                      <p className="mt-3 text-sm leading-relaxed opacity-65">{block.text}</p>
                    </aside>
                  );
                })}
              </div>

              <div className="mt-16 border-t border-white/12 pt-8">
                <p className="text-sm leading-relaxed opacity-60">
                  Published by BOOST research. Full methodology and source lists are available on request. Back to{" "}
                  <Link href="/insights" className="text-orange-500 underline underline-offset-4">
                    all insights
                  </Link>
                  .
                </p>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {/* RELATED */}
      {related.length > 0 && (
        <Section tone="deep">
          <Container>
            <RelatedGrid
              title="Related research"
              items={related.map((r) => ({
                label: r.title,
                href: `/insights/${r.slug}`,
                note: `${r.category} · ${r.readTime} read`,
              }))}
            />
          </Container>
        </Section>
      )}

      <CTABlock
        title={cta.title}
        body={cta.body}
        primary={{ label: "Build my growth plan", href: "/build-my-growth-plan" }}
        secondary={cta.secondary}
      />
    </>
  );
}
