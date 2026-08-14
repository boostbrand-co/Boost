import type { ProofArtifact } from "@/data/proof";

const confidenceTone: Record<ProofArtifact["confidence"], string> = {
  HIGH: "text-signal-green",
  MEDIUM: "text-signal-amber",
  LOW: "text-signal-red",
};

/**
 * A single piece of evidence, transcribed rather than screenshotted.
 * The three questions at the bottom are the point of the component: a number
 * with no decision attached to it is decoration.
 */
export function ProofCard({ p }: { p: ProofArtifact }) {
  return (
    <article className="border border-white/12 bg-ink-800">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-white/12 px-6 py-5 sm:px-8">
        <div>
          <p className="u-meta text-orange-500">Evidence</p>
          <h3 className="mt-3 text-xl leading-snug sm:text-2xl">{p.title}</h3>
        </div>
        <div className="text-right">
          <p className="u-meta opacity-40">Match confidence</p>
          <p className={`u-meta mt-2 ${confidenceTone[p.confidence]}`}>{p.confidence}</p>
        </div>
      </header>

      {/* THE READOUT */}
      <div className="border-b border-white/12 bg-ink-900/50 px-6 py-7 sm:px-8">
        <p className="u-meta opacity-40">{p.platform}</p>
        <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {p.readout.map((r) => (
            <div key={r.label} className="grid gap-1 py-4 sm:grid-cols-12 sm:items-baseline sm:gap-6">
              <dt className="text-sm opacity-65 sm:col-span-5">{r.label}</dt>
              <dd className="sm:col-span-7">
                <span className="u-display text-2xl tabular-nums">{r.value}</span>
                {r.note ? <span className="mt-1.5 block text-xs leading-relaxed opacity-45">{r.note}</span> : null}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-xs leading-relaxed opacity-45">{p.platformNote}</p>
      </div>

      {/* PROVENANCE */}
      <div className="grid gap-px border-b border-white/12 bg-white/12 sm:grid-cols-3">
        <div className="bg-ink-800 px-6 py-5 sm:px-8">
          <p className="u-meta opacity-40">Period</p>
          <p className="mt-2.5 text-xs leading-relaxed opacity-65">{p.period}</p>
        </div>
        <div className="bg-ink-800 px-6 py-5 sm:px-8">
          <p className="u-meta opacity-40">Currency</p>
          <p className="mt-2.5 text-xs leading-relaxed opacity-65">{p.currency}</p>
        </div>
        <div className="bg-ink-800 px-6 py-5 sm:px-8">
          <p className="u-meta opacity-40">Why this is attributed here</p>
          <p className="mt-2.5 text-xs leading-relaxed opacity-65">{p.matchBasis}</p>
        </div>
      </div>

      {/* THE THREE QUESTIONS */}
      <div className="divide-y divide-white/12">
        {[
          { q: "What this number tells us", a: p.tellsUs },
          { q: "What BOOST would decide", a: p.decision },
          { q: "What happens next", a: p.next },
        ].map((x) => (
          <div key={x.q} className="grid gap-3 px-6 py-6 sm:grid-cols-12 sm:gap-8 sm:px-8">
            <p className="u-meta text-orange-500 sm:col-span-4">{x.q}</p>
            <p className="text-sm leading-relaxed opacity-80 sm:col-span-8">{x.a}</p>
          </div>
        ))}
      </div>

      <footer className="border-t border-white/12 px-6 py-4 sm:px-8">
        <p className="u-meta opacity-30">Source file: {p.sourceFile}</p>
      </footer>
    </article>
  );
}

export function HeldBackList({ items }: { items: { item: string; reason: string; needed: string }[] }) {
  return (
    <div className="border-t border-ink-900/20">
      {items.map((h, i) => (
        <div key={h.item} className="grid gap-4 border-b border-ink-900/15 py-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <span className="u-meta tabular-nums text-orange-600">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2.5 text-lg leading-snug">{h.item}</p>
          </div>
          <div className="lg:col-span-4">
            <p className="u-meta opacity-45">Why it is not published</p>
            <p className="mt-2.5 text-sm leading-relaxed opacity-70">{h.reason}</p>
          </div>
          <div className="lg:col-span-4">
            <p className="u-meta opacity-45">What would release it</p>
            <p className="mt-2.5 text-sm leading-relaxed opacity-70">{h.needed}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
