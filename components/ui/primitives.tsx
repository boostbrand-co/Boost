import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  tone = "dark",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "cream" | "deep";
  id?: string;
}) {
  const tones = {
    dark: "bg-ink-900 text-cream-100",
    deep: "bg-ink-800 text-cream-100",
    cream: "bg-cream-100 text-ink-900 on-cream",
  };
  return (
    <section id={id} className={`${tones[tone]} py-20 sm:py-28 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, number }: { children: ReactNode; number?: string }) {
  return (
    <p className="u-meta flex items-center gap-3 text-orange-500">
      {number && <span className="tabular-nums opacity-70">{number}</span>}
      <span className="opacity-100">{children}</span>
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  number,
  title,
  lead,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  number?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl"} ${className}`}>
      {eyebrow && <Eyebrow number={number}>{eyebrow}</Eyebrow>}
      <h2 className="u-display mt-5 text-4xl sm:text-5xl lg:text-[3.75rem]">{title}</h2>
      {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-75 sm:text-xl">{lead}</p>}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type,
  onClick,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "cream";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "border border-current/25 hover:border-orange-500 hover:text-orange-500",
    ghost: "hover:text-orange-500",
    cream: "bg-cream-100 text-ink-900 hover:bg-white",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`u-rule border-t ${className}`} />;
}

export function MetricBlock({
  value,
  label,
  source,
  size = "md",
}: {
  value: string;
  label: string;
  source?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = { sm: "text-2xl sm:text-3xl", md: "text-3xl sm:text-4xl", lg: "text-4xl sm:text-5xl lg:text-6xl" };
  return (
    <div className="u-rule border-t pt-4">
      <p className={`u-display tabular-nums ${sizes[size]}`}>{value}</p>
      <p className="mt-2 text-sm opacity-70">{label}</p>
      {source && <p className="u-meta mt-3 opacity-40">{source}</p>}
    </div>
  );
}

export function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`u-meta inline-flex items-center gap-2 border border-orange-500/40 px-2.5 py-1 text-orange-500 ${className}`}
    >
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
      Demonstration data
    </span>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-orange-500 bg-orange-500/5 px-5 py-4 text-sm leading-relaxed">
      <p className="u-meta mb-2 text-orange-500">Awaiting confirmed content</p>
      <p className="opacity-80">{children}</p>
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="u-meta flex flex-wrap items-center gap-2 opacity-55">
      <Link href="/" className="hover:text-orange-500">
        Home
      </Link>
      {trail.map((t) => (
        <span key={t.label} className="flex items-center gap-2">
          <span aria-hidden>/</span>
          {t.href ? (
            <Link href={t.href} className="hover:text-orange-500">
              {t.label}
            </Link>
          ) : (
            <span aria-current="page">{t.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  trail,
  meta,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  trail?: { label: string; href?: string }[];
  meta?: { label: string; value: string }[];
  children?: ReactNode;
}) {
  return (
    <header className="bg-ink-900 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <Container>
        {trail && <Breadcrumbs trail={trail} />}
        <div className="mt-10 max-w-5xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="u-display mt-5 text-[2.75rem] sm:text-6xl lg:text-7xl">{title}</h1>
          {lead && <p className="mt-8 max-w-3xl text-lg leading-relaxed opacity-75 sm:text-xl">{lead}</p>}
        </div>
        {meta && (
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="u-rule border-t pt-4">
                <dt className="u-meta opacity-50">{m.label}</dt>
                <dd className="mt-2 text-sm">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {children}
      </Container>
    </header>
  );
}

export function FAQ({ items, tone = "dark" }: { items: { q: string; a: string }[]; tone?: "dark" | "cream" }) {
  return (
    <div className="u-rule border-t">
      {items.map((item) => (
        <details key={item.q} className="u-rule group border-b">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-medium">
            <span>{item.q}</span>
            <span
              aria-hidden
              className={`mt-1 shrink-0 text-xl leading-none transition-transform duration-300 group-open:rotate-45 ${
                tone === "cream" ? "text-orange-600" : "text-orange-500"
              }`}
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-7 text-base leading-relaxed opacity-70">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CTABlock({
  title,
  body,
  primary,
  secondary,
  tone = "cream",
}: {
  title: string;
  body: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "cream" | "dark";
}) {
  const isCream = tone === "cream";
  return (
    <section className={isCream ? "bg-cream-100 text-ink-900 on-cream" : "bg-ink-800 text-cream-100"}>
      <Container className="py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="u-display text-4xl sm:text-5xl lg:text-[3.5rem]">{title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-70">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Button href={primary?.href ?? "/build-my-growth-plan"} variant="primary">
              {primary?.label ?? "Build my growth plan"}
            </Button>
            <Button href={secondary?.href ?? "/how-boost-works"} variant="outline">
              {secondary?.label ?? "See how BOOST works"}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function RelatedGrid({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string; note?: string }[];
}) {
  return (
    <div>
      <p className="u-meta opacity-50">{title}</p>
      <div className="u-rule mt-6 grid border-t sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href + item.label}
            href={item.href}
            className="u-rule group border-b border-r px-6 py-7 transition-colors hover:bg-white/[0.03]"
          >
            <p className="text-lg font-medium group-hover:text-orange-500">{item.label}</p>
            {item.note && <p className="mt-2 text-sm opacity-60">{item.note}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}
