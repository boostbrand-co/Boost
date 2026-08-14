import Link from "next/link";
import { Container, Button } from "@/components/ui/primitives";
import { site } from "@/data/site";

/* Note: `not-found.tsx` is not a route segment, so Next ignores a `metadata`
   export here. The title stays whatever the root layout set. If a dedicated 404
   title is wanted later, that needs `app/global-not-found.tsx` and the
   `globalNotFound` flag in next.config.ts. */

const destinations = [
  { label: "Work", href: "/work", note: "Case studies with the decisions and the sources attached." },
  { label: "Services", href: "/services", note: "Five capability groups, seven services, and how they connect." },
  { label: "How BOOST works", href: "/how-boost-works", note: "The operating loop, reporting, Creative Memory, ownership." },
  { label: "Who we help", href: "/who-we-help", note: "Five situations, each with what we do in the first thirty days." },
  { label: "Insights", href: "/insights", note: "Original research on how marketing services get bought." },
  { label: "Contact", href: "/build-my-growth-plan", note: "Four short steps, then a calendar. Or just email us." },
];

export default function NotFound() {
  return (
    <div className="bg-ink-900 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Container>
        <p className="u-meta tabular-nums text-orange-500">Error 404</p>
        <h1 className="u-display mt-6 max-w-3xl text-[2.75rem] sm:text-6xl lg:text-7xl">
          That page is not here.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-75">
          Either the address is wrong or we moved something and did not redirect it. Both are our problem to fix, so if
          you followed a link from somewhere, tell us where and we will repair it.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/">Back to the homepage</Button>
          <Button href="/build-my-growth-plan" variant="outline">
            Build my growth plan
          </Button>
        </div>

        <nav aria-label="Main sections" className="mt-20">
          <p className="u-meta opacity-50">Everything else</p>
          <div className="mt-6 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group border-b border-r border-white/10 px-6 py-7 transition-colors hover:bg-white/[0.03]"
              >
                <p className="text-lg font-medium group-hover:text-orange-500">{d.label}</p>
                <p className="mt-2 text-sm leading-relaxed opacity-60">{d.note}</p>
              </Link>
            ))}
          </div>
        </nav>

        <p className="mt-14 text-sm opacity-55">
          Broken link, or looking for something specific? Email{" "}
          <a href={`mailto:${site.email}`} className="text-orange-500 underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </Container>
    </div>
  );
}
