"use client";

import { useEffect, useRef, useState } from "react";
import { scenarios } from "@/data/system";
import { DemoBadge } from "@/components/ui/primitives";

const toneClass = {
  good: "text-signal-green",
  bad: "text-signal-red",
  accent: "text-orange-500",
  neutral: "text-cream-100",
} as const;

/**
 * The BOOST System panel.
 * Shows signal → diagnosis → decision → creative → result → learning → next move
 * for a chosen scenario. Steps reveal progressively; the full sequence is always
 * present in the DOM so it works without JS, without motion, and for screen readers.
 */
export function ScenarioDemo({ autoplay = true }: { autoplay?: boolean }) {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(autoplay ? 0 : scenarios[0].steps.length);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const scenario = scenarios[active];

  useEffect(() => {
    if (!autoplay) return;
    // Respect reduced motion: reveal everything immediately, no interval.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setRevealed(scenario.steps.length));
      return () => cancelAnimationFrame(id);
    }
    const start = requestAnimationFrame(() => setRevealed(0));
    timer.current = setInterval(() => {
      setRevealed((r) => {
        if (r >= scenario.steps.length) {
          if (timer.current) clearInterval(timer.current);
          return r;
        }
        return r + 1;
      });
    }, 620);
    return () => {
      cancelAnimationFrame(start);
      if (timer.current) clearInterval(timer.current);
    };
  }, [active, autoplay, scenario.steps.length]);

  return (
    <div className="border border-white/12 bg-ink-800">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 px-5 py-3.5">
        <span className="u-meta opacity-60">The BOOST system · live view</span>
        <DemoBadge />
      </div>

      <div
        role="tablist"
        aria-label="Choose a scenario"
        className="u-scrollbar flex gap-1 overflow-x-auto border-b border-white/12 px-3 py-3"
      >
        {scenarios.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={i === active}
            aria-controls={`scenario-panel-${s.key}`}
            id={`scenario-tab-${s.key}`}
            onClick={() => setActive(i)}
            className={`u-meta shrink-0 border px-3.5 py-2 transition-colors ${
              i === active
                ? "border-orange-500 bg-orange-500/10 text-orange-500"
                : "border-white/12 opacity-60 hover:border-white/30 hover:opacity-100"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`scenario-panel-${scenario.key}`}
        aria-labelledby={`scenario-tab-${scenario.key}`}
        className="px-5 py-5 sm:px-6"
      >
        <p className="u-meta mb-5 opacity-45">{scenario.context}</p>
        <ol className="space-y-0">
          {scenario.steps.map((step, i) => {
            const shown = i < revealed;
            return (
              <li
                key={step.label}
                className={`grid grid-cols-[5.5rem_1fr] gap-4 border-t border-white/10 py-3.5 first:border-t-0 sm:grid-cols-[7rem_1fr] ${
                  shown ? "anim-in" : "opacity-25"
                }`}
                style={shown ? { animationDelay: `${i * 40}ms` } : undefined}
              >
                <span className="u-meta pt-1 opacity-50">{step.label}</span>
                <span>
                  <span className={`block text-[0.95rem] leading-snug ${toneClass[step.tone ?? "neutral"]}`}>
                    {step.value}
                  </span>
                  {step.detail && <span className="mt-1 block text-xs leading-relaxed opacity-50">{step.detail}</span>}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="mt-5 flex items-start gap-3 border border-orange-500/30 bg-orange-500/[0.06] px-4 py-3.5">
          <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
          <p className="text-xs leading-relaxed">
            <span className="u-meta mr-2 text-orange-500">Creative Memory updated</span>
            <span className="opacity-70">{scenario.memory}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
