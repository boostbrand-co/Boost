import Link from "next/link";
import type { CaseStudy } from "@/data/cases";
import type { TeamMember } from "@/data/team";

export function CaseCard({ c, index }: { c: CaseStudy; index?: number }) {
  return (
    <Link
      href={`/work/${c.slug}`}
      className="group flex flex-col border-b border-r border-white/10 p-6 transition-colors hover:bg-white/[0.03] sm:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="u-meta opacity-40 tabular-nums">{index !== undefined ? String(index + 1).padStart(2, "0") : ""}</span>
        <span className="u-meta opacity-40">{c.market}</span>
      </div>
      <h3 className="u-display mt-6 text-2xl group-hover:text-orange-500 sm:text-3xl">{c.client}</h3>
      <p className="mt-3 text-sm leading-relaxed opacity-65">{c.summary}</p>

      <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4">
        {c.metrics.slice(0, 2).map((m) => (
          <div key={m.label} className="border-t border-white/12 pt-3">
            <p className="u-display text-xl tabular-nums sm:text-2xl">{m.value}</p>
            <p className="mt-1.5 text-xs opacity-55">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
        <span className="u-meta border border-white/12 px-2.5 py-1 opacity-55">{c.industry}</span>
        <span className="u-meta border border-white/12 px-2.5 py-1 opacity-55">{c.goal}</span>
      </div>
      <span className="u-meta mt-6 text-orange-500">Read the decisions →</span>
    </Link>
  );
}

export function TeamCard({ m }: { m: TeamMember }) {
  return (
    <article className="flex h-full flex-col border border-white/12 bg-ink-800 p-6">
      <div
        aria-hidden
        className="mb-6 flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 border border-white/10 bg-ink-700"
      >
        <span className="u-display text-4xl opacity-25">
          {m.name
            .split(" ")
            .slice(0, 2)
            .map((p) => p[0])
            .join("")}
        </span>
        <span className="u-meta opacity-30">Portrait in preparation</span>
      </div>
      <p className="u-meta text-orange-500">{m.role}</p>
      <h3 className="mt-3 text-xl">{m.name}</h3>
      <p className="u-meta mt-2 opacity-40">{m.discipline}</p>
      <dl className="mt-5 space-y-4 text-sm">
        <div>
          <dt className="u-meta opacity-40">Owns</dt>
          <dd className="mt-1.5 opacity-75">{m.owns}</dd>
        </div>
        <div>
          <dt className="u-meta opacity-40">Specialty</dt>
          <dd className="mt-1.5 opacity-75">{m.specialty}</dd>
        </div>
        <div>
          <dt className="u-meta opacity-40">You work with them on</dt>
          <dd className="mt-1.5 opacity-75">{m.worksWithYouOn}</dd>
        </div>
      </dl>
    </article>
  );
}

export function SituationCard({
  href,
  number,
  title,
  line,
  signals,
}: {
  href: string;
  number: string;
  title: string;
  line: string;
  signals?: string[];
}) {
  return (
    <Link href={href} className="group flex flex-col border-b border-r border-white/10 p-6 transition-colors hover:bg-white/[0.03] sm:p-8">
      <span className="u-meta tabular-nums text-orange-500">{number}</span>
      <h3 className="u-display mt-5 text-2xl group-hover:text-orange-500 sm:text-[1.75rem]">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed opacity-65">{line}</p>
      {signals && (
        <ul className="mt-6 space-y-2">
          {signals.slice(0, 3).map((s) => (
            <li key={s} className="flex gap-3 text-xs leading-relaxed opacity-50">
              <span aria-hidden className="mt-1.5 h-px w-3 shrink-0 bg-orange-500" />
              {s}
            </li>
          ))}
        </ul>
      )}
      <span className="u-meta mt-auto pt-7 text-orange-500">Read this situation →</span>
    </Link>
  );
}
