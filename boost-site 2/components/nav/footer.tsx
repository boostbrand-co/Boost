import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { footerNav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              BOOST<span className="text-orange-500">®</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-60">{site.tagline}</p>
            <div className="mt-8 space-y-1.5">
              {site.locations.map((l) => (
                <p key={l} className="u-meta opacity-45">
                  {l}
                </p>
              ))}
            </div>
            <a href={`mailto:${site.email}`} className="mt-6 inline-block text-sm underline-offset-4 hover:text-orange-500 hover:underline">
              {site.email}
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.title}>
                <p className="u-meta opacity-40">{col.title}</p>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} className="text-sm opacity-70 transition-colors hover:text-orange-500 hover:opacity-100">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="u-meta opacity-40">© BOOST {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="u-meta opacity-40 hover:text-orange-500">Privacy</Link>
            <Link href="/terms" className="u-meta opacity-40 hover:text-orange-500">Terms</Link>
            <Link href="/ai-disclosure" className="u-meta opacity-40 hover:text-orange-500">AI disclosure</Link>
            <Link href="/llm-info" className="u-meta opacity-40 hover:text-orange-500">Information for AI</Link>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="u-meta opacity-40 hover:text-orange-500">
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
