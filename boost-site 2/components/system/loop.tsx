"use client";

import { useState } from "react";
import { loop } from "@/data/system";

export function LoopDiagram({ interactive = true }: { interactive?: boolean }) {
  const [active, setActive] = useState<string>(loop[0].key);
  const phase = loop.find((p) => p.key === active) ?? loop[0];

  return (
    <div className="grid gap-px border border-white/12 bg-white/12 lg:grid-cols-12">
      <nav aria-label="Operating loop phases" className="bg-ink-800 lg:col-span-5">
        <ul>
          {loop.map((p, i) => {
            const on = p.key === active;
            return (
              <li key={p.key} className="border-b border-white/10 last:border-0">
                <button
                  onClick={() => interactive && setActive(p.key)}
                  aria-current={on ? "true" : undefined}
                  className={`flex w-full items-baseline gap-4 px-5 py-5 text-left transition-colors ${
                    on ? "bg-orange-500/[0.07]" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span className={`u-meta tabular-nums ${on ? "text-orange-500" : "opacity-40"}`}>{p.number}</span>
                  <span className="flex-1">
                    <span className={`block text-xl ${on ? "text-orange-500" : ""}`}>{p.name}</span>
                    <span className="mt-1 block text-sm opacity-55">{p.question}</span>
                  </span>
                  {i < loop.length - 1 && (
                    <span aria-hidden className="u-meta opacity-25">
                      ↓
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="border-t border-white/10 px-5 py-4 text-xs leading-relaxed opacity-45">
          The loop does not end. Phase 06 changes what phase 01 is looking for.
        </p>
      </nav>

      <div className="bg-ink-800 p-6 sm:p-8 lg:col-span-7">
        <p className="u-meta text-orange-500">
          {phase.number} · {phase.verb}
        </p>
        <h3 className="u-display mt-4 text-3xl sm:text-4xl">{phase.name}</h3>
        <p className="mt-5 max-w-xl leading-relaxed opacity-75">{phase.body}</p>

        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="border-t border-white/12 pt-4">
            <dt className="u-meta opacity-45">Artifact produced</dt>
            <dd className="mt-2 text-sm">{phase.artifact}</dd>
            <dd className="mt-1.5 text-xs leading-relaxed opacity-50">{phase.artifactCaption}</dd>
          </div>
          <div className="border-t border-white/12 pt-4">
            <dt className="u-meta opacity-45">Who owns it</dt>
            <dd className="mt-2 text-sm">{phase.who}</dd>
          </div>
          <div className="border-t border-white/12 pt-4 sm:col-span-2">
            <dt className="u-meta opacity-45">What you see</dt>
            <dd className="mt-2 text-sm opacity-80">{phase.clientSees}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
