"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Container, Section, Button } from "@/components/ui/primitives";
import { CaseCard } from "@/components/cards/cards";
import { cases, caseFilters } from "@/data/cases";

type GroupKey = "goal" | "market" | "industry" | "service";
type Selection = Record<GroupKey, string[]>;

const GROUPS: { key: GroupKey; label: string; options: { slug: string; label: string }[] }[] = [
  { key: "goal", label: "Goal", options: caseFilters.goal },
  { key: "market", label: "Market", options: caseFilters.market },
  { key: "industry", label: "Industry", options: caseFilters.industry },
  { key: "service", label: "Service", options: caseFilters.service },
];

const EMPTY: Selection = { goal: [], market: [], industry: [], service: [] };

/**
 * Filters are hydrated from the server (page.tsx reads searchParams) so the full
 * case list is present in the prerendered HTML for crawlers, LLMs and no-JS users.
 * Client state then takes over for instant filtering without a round trip.
 */
export function WorkIndex() {
  // Start unfiltered so all 13 cases are present in the prerendered HTML for
  // crawlers, LLM readers and no-JS users. Deep-link filters from the URL are
  // applied after mount, which keeps the page static and still shareable.
  const [selected, setSelected] = useState<Selection>(EMPTY);

  // Reading the URL is a subscription to an external system (the address bar),
  // which is the documented exception to the set-state-in-effect rule. Doing it
  // here rather than during render is what keeps this page statically rendered.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const read = (k: keyof Selection, valid: string[]) =>
      (q.get(k) ?? "").split(",").map((v) => v.trim()).filter((v) => valid.includes(v));
    const next: Selection = {
      goal: read("goal", caseFilters.goal.map((f) => f.slug)),
      market: read("market", caseFilters.market.map((f) => f.slug)),
      industry: read("industry", caseFilters.industry.map((f) => f.slug)),
      service: read("service", caseFilters.service.map((f) => f.slug)),
    };
    if (Object.values(next).some((v) => v.length)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelected(next);
    }
  }, []);

  useEffect(() => {
    const qs = new URLSearchParams();
    for (const group of GROUPS) {
      const values = selected[group.key];
      if (values.length) qs.set(group.key, values.join(","));
    }
    const query = qs.toString();
    window.history.replaceState(null, "", query ? `/work?${query}` : "/work");
  }, [selected]);

  const toggle = useCallback((key: GroupKey, slug: string) => {
    setSelected((prev) => {
      const values = prev[key];
      return {
        ...prev,
        [key]: values.includes(slug) ? values.filter((v) => v !== slug) : [...values, slug],
      };
    });
  }, []);

  const clearAll = useCallback(() => setSelected(EMPTY), []);

  const activeCount = useMemo(
    () => GROUPS.reduce((total, group) => total + selected[group.key].length, 0),
    [selected],
  );

  const filtered = useMemo(
    () =>
      cases.filter((c) => {
        if (selected.goal.length && !selected.goal.includes(c.goalSlug)) return false;
        if (selected.market.length && !selected.market.includes(c.marketSlug)) return false;
        if (selected.industry.length && !selected.industry.includes(c.industrySlug)) return false;
        if (selected.service.length && !c.serviceSlugs.some((s) => selected.service.includes(s))) return false;
        return true;
      }),
    [selected],
  );

  return (
    <Section tone="dark">
      <Container>
        {/* FILTER BAR */}
        <div className="border-t border-white/12">
          {GROUPS.map((group) => (
            <fieldset key={group.key} className="grid gap-4 border-b border-white/12 py-6 lg:grid-cols-[9rem_1fr] lg:gap-8">
              <legend className="sr-only">Filter by {group.label.toLowerCase()}</legend>
              <p aria-hidden className="u-meta pt-1.5 opacity-45">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.options.map((option) => {
                  const active = selected[group.key].includes(option.slug);
                  return (
                    <button
                      key={option.slug}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggle(group.key, option.slug)}
                      className={`u-meta border px-3 py-1.5 transition-colors ${
                        active
                          ? "border-orange-500 bg-orange-500/10 text-orange-500"
                          : "border-white/12 opacity-60 hover:border-white/35 hover:opacity-100"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        {/* COUNT + CLEAR */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="u-meta" aria-live="polite">
            <span className="tabular-nums text-orange-500">{filtered.length}</span>
            <span className="opacity-55"> of </span>
            <span className="tabular-nums opacity-55">{cases.length}</span>
            <span className="opacity-55"> projects</span>
          </p>
          <button
            type="button"
            onClick={clearAll}
            disabled={activeCount === 0}
            className="u-meta border border-white/12 px-3 py-1.5 transition-colors hover:border-orange-500 hover:text-orange-500 disabled:pointer-events-none disabled:opacity-30"
          >
            Clear all filters
            {activeCount > 0 && <span className="tabular-nums"> ({activeCount})</span>}
          </button>
        </div>

        {/* GRID */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c, i) => (
              <CaseCard key={c.slug} c={c} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-white/12 p-8 sm:p-12">
            <h2 className="u-display text-2xl sm:text-3xl">No case study matches that combination.</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-65">
              Thirteen projects are published here. Some combinations of goal, market, industry and service do not exist
              in that set yet. Remove a filter or start again.
            </p>
            <Button onClick={clearAll} variant="outline" className="mt-8">
              Clear all filters
            </Button>
          </div>
        )}

        {/* HONEST NOTE */}
        <div className="mt-12 max-w-3xl border-l-2 border-orange-500 pl-6">
          <p className="u-meta text-orange-500">On these numbers</p>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            Every metric on this page was published by BOOST on its own portfolio. Each one is being re-verified against
            platform exports before it goes into wider publication, and each case study names the source it came from.
            Client naming approval is in progress, so the case studies are marked as pending approval until each client
            signs off.
          </p>
        </div>
      </Container>
    </Section>
  );
}
