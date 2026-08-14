"use client";

import { useState } from "react";
import { DemoBadge } from "@/components/ui/primitives";
import { creativeTests, sampleReport, memoryRecords, ownership, capabilitySplit, aiSplit } from "@/data/system";

const toneMap = {
  good: "text-signal-green",
  bad: "text-signal-red",
  neutral: "opacity-70",
  accent: "text-orange-500",
} as const;

/** Frame that makes every artifact read as an interface panel rather than a card. */
export function ArtifactFrame({
  label,
  caption,
  demo = true,
  children,
  className = "",
}: {
  label: string;
  caption?: string;
  demo?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={`border border-white/12 bg-ink-800 ${className}`}>
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 px-5 py-3.5">
        <span className="u-meta opacity-60">{label}</span>
        {demo && <DemoBadge />}
      </figcaption>
      <div className="p-5 sm:p-6">{children}</div>
      {caption && <p className="border-t border-white/12 px-5 py-3.5 text-xs leading-relaxed opacity-50">{caption}</p>}
    </figure>
  );
}

export function CreativeTestTable({ compact = false }: { compact?: boolean }) {
  return (
    <ArtifactFrame
      label="Creative test table · cycle 07"
      caption="Concept, cost per acquisition, decision and the reason. The reason column is the one that compounds."
    >
      <div className="u-scrollbar -mx-1 overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
          <thead>
            <tr className="u-meta opacity-50">
              <th scope="col" className="pb-3 pr-4 font-normal">ID</th>
              <th scope="col" className="pb-3 pr-4 font-normal">Concept</th>
              <th scope="col" className="pb-3 pr-4 font-normal">CPA</th>
              <th scope="col" className="pb-3 pr-4 font-normal">Decision</th>
              {!compact && <th scope="col" className="pb-3 font-normal">Reason</th>}
            </tr>
          </thead>
          <tbody className="align-top">
            {creativeTests.map((t) => (
              <tr key={t.id} className="border-t border-white/10">
                <td className="py-4 pr-4 font-mono text-xs opacity-60">{t.id}</td>
                <td className="py-4 pr-4">{t.concept}</td>
                <td className={`py-4 pr-4 font-mono tabular-nums ${toneMap[t.tone]}`}>{t.cpa}</td>
                <td className={`py-4 pr-4 ${toneMap[t.tone]}`}>{t.status}</td>
                {!compact && <td className="py-4 text-xs opacity-60">{t.reason}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ArtifactFrame>
  );
}

export function ReportArtifact() {
  const [open, setOpen] = useState(0);
  return (
    <ArtifactFrame
      label={sampleReport.period}
      caption="Six questions. Not a hundred metrics. The last question is the one that needs you."
    >
      <ol className="divide-y divide-white/10">
        {sampleReport.questions.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-5 py-4 text-left"
              >
                <span className="flex items-baseline gap-4">
                  <span className="u-meta shrink-0 tabular-nums text-orange-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-base font-medium">{item.q}</span>
                </span>
                <span aria-hidden className={`text-lg leading-none opacity-50 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {isOpen && <p className="pb-5 pl-11 pr-4 text-sm leading-relaxed opacity-75">{item.a}</p>}
            </li>
          );
        })}
      </ol>
      <div className="mt-6 border-t border-white/12 pt-5">
        <p className="u-meta text-orange-500">What we got wrong this month</p>
        <ul className="mt-3 space-y-2.5">
          {sampleReport.misses.map((m) => (
            <li key={m} className="flex gap-3 text-sm leading-relaxed opacity-70">
              <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-signal-red" />
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>
    </ArtifactFrame>
  );
}

export function MemoryTable() {
  return (
    <ArtifactFrame
      label="Creative Memory · running record"
      caption="Every cycle adds a row. The ruling column is what the next decision inherits."
    >
      <div className="u-scrollbar -mx-1 overflow-x-auto">
        <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
          <thead>
            <tr className="u-meta opacity-50">
              <th scope="col" className="pb-3 pr-4 font-normal">Cycle</th>
              <th scope="col" className="pb-3 pr-4 font-normal">Insight</th>
              <th scope="col" className="pb-3 pr-4 font-normal">Hypothesis</th>
              <th scope="col" className="pb-3 pr-4 font-normal">Result</th>
              <th scope="col" className="pb-3 font-normal">Ruling</th>
            </tr>
          </thead>
          <tbody className="align-top">
            {memoryRecords.map((r) => (
              <tr key={r.date} className="border-t border-white/10">
                <td className="py-4 pr-4 font-mono text-xs opacity-60">{r.date}</td>
                <td className="py-4 pr-4 opacity-85">{r.insight}</td>
                <td className="py-4 pr-4 opacity-70">{r.hypothesis}</td>
                <td className="py-4 pr-4 text-signal-green">{r.result}</td>
                <td className="py-4 text-orange-500">{r.ruling}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ArtifactFrame>
  );
}

export function OwnershipTable() {
  return (
    <div className="border border-white/12">
      <div className="flex items-center justify-between border-b border-white/12 px-5 py-3.5">
        <span className="u-meta opacity-60">What you own</span>
        <span className="u-meta text-orange-500">From day one</span>
      </div>
      <ul>
        {ownership.map((o) => (
          <li key={o.item} className="grid gap-1 border-b border-white/10 px-5 py-4 last:border-0 sm:grid-cols-12 sm:gap-4">
            <span className="text-sm sm:col-span-4">{o.item}</span>
            <span className="u-meta text-orange-500 sm:col-span-2">{o.owner}</span>
            <span className="text-sm opacity-60 sm:col-span-6">{o.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CapabilityMap() {
  const Dot = ({ on }: { on: boolean }) =>
    on ? (
      <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-orange-500" />
    ) : (
      <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full border border-white/20" />
    );
  return (
    <div className="border border-white/12">
      <div className="grid grid-cols-12 border-b border-white/12 px-5 py-3.5">
        <span className="u-meta col-span-6 opacity-60">Area</span>
        <span className="u-meta col-span-2 text-center opacity-60">You</span>
        <span className="u-meta col-span-2 text-center opacity-60">BOOST</span>
        <span className="u-meta col-span-2 text-center opacity-60">Shared</span>
      </div>
      <ul>
        {capabilitySplit.map((row) => (
          <li key={row.area} className="grid grid-cols-12 items-center border-b border-white/10 px-5 py-4 last:border-0">
            <span className="col-span-6 pr-4 text-sm">{row.area}</span>
            <span className="col-span-2 text-center"><Dot on={row.client} /><span className="sr-only">{row.client ? "You own this" : "Not yours"}</span></span>
            <span className="col-span-2 text-center"><Dot on={row.boost} /><span className="sr-only">{row.boost ? "BOOST owns this" : "Not BOOST"}</span></span>
            <span className="col-span-2 text-center"><Dot on={row.shared} /><span className="sr-only">{row.shared ? "Shared" : "Not shared"}</span></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AISplitPanel() {
  return (
    <div className="grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2">
      <div className="bg-ink-800 p-6">
        <p className="u-meta opacity-50">AI handles</p>
        <ul className="mt-5 space-y-3">
          {aiSplit.ai.map((i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed opacity-75">
              <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-white/30" />
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-ink-800 p-6">
        <p className="u-meta text-orange-500">Humans own</p>
        <ul className="mt-5 space-y-3">
          {aiSplit.human.map((i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-orange-500" />
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-ink-700 p-6 sm:col-span-2">
        <p className="text-sm leading-relaxed opacity-80">{aiSplit.rule}</p>
      </div>
    </div>
  );
}
