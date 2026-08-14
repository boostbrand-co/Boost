"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Container, Section } from "@/components/ui/primitives";
import { insightCategories, insights } from "@/data/insights";

export function InsightsIndex() {
  // Multi-select. An empty set means "everything", which is the honest default
  // for a six-article library.
  const [active, setActive] = useState<string[]>([]);
  const [notified, setNotified] = useState(false);

  const filtered = useMemo(
    () => (active.length === 0 ? insights : insights.filter((i) => active.includes(i.categorySlug))),
    [active],
  );

  function toggle(slug: string) {
    setActive((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  const [lead, ...rest] = filtered;

  return (
    <Section tone="dark" id="all-insights">
      <Container>
        {/* FILTER CHIPS */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="u-meta opacity-50" id="filter-label">
              Filter by subject
            </p>
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-labelledby="filter-label">
              <button
                type="button"
                onClick={() => setActive([])}
                aria-pressed={active.length === 0}
                className={`u-meta border px-4 py-2.5 transition-colors ${
                  active.length === 0
                    ? "border-orange-500 bg-orange-500 text-white"
                    : "border-white/15 text-cream-100/65 hover:border-white/35 hover:text-cream-100"
                }`}
              >
                Everything
              </button>
              {insightCategories.map((c) => {
                const on = active.includes(c.slug);
                const count = insights.filter((i) => i.categorySlug === c.slug).length;
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => toggle(c.slug)}
                    aria-pressed={on}
                    className={`u-meta border px-4 py-2.5 transition-colors ${
                      on
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-white/15 text-cream-100/65 hover:border-white/35 hover:text-cream-100"
                    }`}
                  >
                    {c.label}
                    <span className="ml-2 tabular-nums opacity-60">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="u-meta tabular-nums opacity-45" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          </p>
        </div>

        {/* LEAD ARTICLE */}
        {lead && (
          <article className="mt-14 border-t border-white/12 pt-10">
            <Link href={`/insights/${lead.slug}`} className="group grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="u-meta border border-orange-500/45 px-2.5 py-1 text-orange-500">Lead article</span>
                  <span className="u-meta opacity-50">{lead.category}</span>
                </div>
                <h2 className="u-display mt-7 text-3xl leading-[1.05] group-hover:text-orange-500 sm:text-4xl lg:text-[3.25rem]">
                  {lead.title}
                </h2>
              </div>
              <div className="flex flex-col justify-end lg:col-span-5">
                <p className="text-base leading-relaxed opacity-70 sm:text-lg">{lead.excerpt}</p>
                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/12 pt-5">
                  <span className="u-meta opacity-45">{lead.readTime} read</span>
                  <span className="u-meta opacity-45">{lead.date}</span>
                  <span className="u-meta text-orange-500">Read it →</span>
                </div>
              </div>
            </Link>
          </article>
        )}

        {/* THE REST */}
        {rest.length > 0 && (
          <div className="mt-16 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <article key={a.slug} className="flex">
                <Link
                  href={`/insights/${a.slug}`}
                  className="group flex w-full flex-col border-b border-r border-white/10 p-7 transition-colors hover:bg-white/[0.03] sm:p-8"
                >
                  <p className="u-meta text-orange-500">{a.category}</p>
                  <h3 className="mt-5 text-xl leading-snug group-hover:text-orange-500">{a.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">{a.excerpt}</p>
                  <div className="mt-auto flex items-center gap-4 pt-8">
                    <span className="u-meta opacity-40">{a.readTime} read</span>
                    <span className="u-meta opacity-40">{a.date}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="mt-14 border border-white/12 p-10 text-center">
            <p className="text-lg">Nothing published under that combination yet.</p>
            <button
              type="button"
              onClick={() => setActive([])}
              className="u-meta mt-5 text-orange-500 underline underline-offset-4"
            >
              Clear the filters
            </button>
          </div>
        )}

        {/* NEWSLETTER
         *
         * WIRING NOTE: this form has no action and no handler. It does not
         * store, send or subscribe anything. Point it at the email platform
         * when one is chosen, add a double opt-in confirmation step, and
         * replace the pending note below with the real cadence. Until then the
         * copy says exactly what it does, which is nothing.
         */}
        <div className="mt-20 border border-white/12 p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="u-meta text-orange-500">Not connected yet</p>
              <h2 className="u-display mt-5 text-2xl sm:text-3xl">Get the next study when it publishes.</h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed opacity-65">
                Being straight with you: this field is not wired to anything. There is no mailing list behind it on this
                build, so nothing you type here is stored or sent. Until it is connected, email{" "}
                <Link href="/build-my-growth-plan" className="text-orange-500 underline underline-offset-4">
                  through the contact page
                </Link>{" "}
                and we will add you by hand.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // No endpoint. See the wiring note above. This only tells the
                  // person the truth instead of faking a success state.
                  setNotified(true);
                }}
                className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
              >
                <div className="flex-1">
                  <label htmlFor="insights-newsletter" className="u-meta block opacity-55">
                    Email
                  </label>
                  <input
                    id="insights-newsletter"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    aria-describedby="insights-newsletter-note"
                    className="mt-3 w-full border border-white/15 bg-ink-900 px-4 py-3.5 text-base text-cream-100 transition-colors placeholder:text-cream-100/30 hover:border-white/25 focus:border-orange-500"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 inline-flex items-center justify-center border border-white/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-orange-500 hover:text-orange-500 sm:mt-[1.9rem] lg:mt-0 xl:mt-[1.9rem]"
                >
                  Subscribe
                </button>
              </form>
              <p id="insights-newsletter-note" className="u-meta mt-4 opacity-40">
                No mailing list connected on this build
              </p>
              {notified && (
                <p role="status" className="mt-4 border-l-2 border-orange-500 pl-4 text-sm leading-relaxed opacity-80">
                  Nothing was submitted, because there is nowhere for it to go yet. Send us a line through the{" "}
                  <Link href="/build-my-growth-plan" className="text-orange-500 underline underline-offset-4">
                    contact page
                  </Link>{" "}
                  and we will add you manually.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
