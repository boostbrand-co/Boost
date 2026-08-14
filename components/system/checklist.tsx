"use client";

import { useId, useState } from "react";

/**
 * Interactive ownership checklist. Local state only, nothing is stored or sent.
 * Real checkboxes with labels so it is keyboard operable and prints legibly.
 */
export function Checklist({
  items,
  label = "Checklist",
  unit = "secured",
  note,
}: {
  items: string[];
  label?: string;
  unit?: string;
  note?: string;
}) {
  const uid = useId();
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));

  const done = checked.filter(Boolean).length;
  const pct = items.length ? Math.round((done / items.length) * 100) : 0;

  const toggle = (i: number) => setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <div className="border border-white/12 bg-ink-800 print:bg-white print:text-black">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 px-5 py-3.5">
        <span className="u-meta opacity-60">{label}</span>
        <div className="flex items-center gap-4">
          <span className="u-meta tabular-nums text-orange-500" role="status" aria-live="polite">
            {done} of {items.length} {unit}
          </span>
          <button
            type="button"
            onClick={() => setChecked(items.map(() => false))}
            disabled={done === 0}
            className="u-meta opacity-45 transition-opacity hover:opacity-100 disabled:pointer-events-none disabled:opacity-20 print:hidden"
          >
            Reset
          </button>
        </div>
      </div>

      <div aria-hidden className="h-px w-full bg-white/10 print:hidden">
        <div className="h-px bg-orange-500 transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>

      <ul>
        {items.map((item, i) => {
          const id = `${uid}-item-${i}`;
          return (
            <li key={item} className="border-b border-white/10 last:border-b-0">
              <div className="flex items-start gap-4 px-5 py-4">
                <span className="relative mt-0.5 flex shrink-0">
                  <input
                    id={id}
                    type="checkbox"
                    checked={checked[i]}
                    onChange={() => toggle(i)}
                    className="peer h-[18px] w-[18px] cursor-pointer appearance-none border border-white/30 bg-transparent transition-colors checked:border-orange-500 checked:bg-orange-500 hover:border-white/60 print:border-black"
                  />
                  <svg
                    aria-hidden
                    viewBox="0 0 12 12"
                    className="pointer-events-none absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                  >
                    <path d="M2 6.4 L4.7 9 L10 3.2" fill="none" stroke="#fff" strokeWidth="1.7" />
                  </svg>
                </span>
                <label
                  htmlFor={id}
                  className={`cursor-pointer text-sm leading-relaxed transition-opacity ${
                    checked[i] ? "opacity-45 line-through decoration-orange-500/60" : "opacity-85"
                  }`}
                >
                  {item}
                </label>
              </div>
            </li>
          );
        })}
      </ul>

      {note && (
        <p className="border-t border-white/12 px-5 py-4 text-xs leading-relaxed opacity-55 print:opacity-100">{note}</p>
      )}
    </div>
  );
}
