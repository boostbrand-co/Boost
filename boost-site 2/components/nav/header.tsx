"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  // Close any open menu on navigation, derived during render rather than in an
  // effect so there is no extra commit and no flash of an open menu.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (open) setOpen(false);
    if (openMenu) setOpenMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open || openMenu ? "border-b border-white/10 bg-ink-900/95 backdrop-blur" : "bg-transparent"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-orange-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="text-xl font-semibold tracking-tight" aria-label="BOOST home">
          BOOST<span className="text-orange-500">®</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}>
                <Link
                  href={item.href}
                  aria-expanded={item.children ? openMenu === item.label : undefined}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm transition-colors ${
                    isActive ? "text-orange-500" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <span aria-hidden className="text-[0.6rem] opacity-50">
                      ▾
                    </span>
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={site.primaryCta.href}
            className="hidden bg-orange-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 sm:inline-flex"
          >
            {site.primaryCta.label}
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center border border-white/15 lg:hidden"
          >
            <span aria-hidden className="text-lg leading-none">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      {openMenu && (
        <div className="hidden border-t border-white/10 bg-ink-900 lg:block">
          <div className="mx-auto w-full max-w-[88rem] px-5 py-9 sm:px-8 lg:px-12">
            {nav
              .filter((n) => n.label === openMenu && n.children)
              .map((n) => (
                <div key={n.label} className="grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-8">
                    <p className="u-meta opacity-40">{n.label}</p>
                    <div className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                      {n.children!.map((c) => (
                        <Link
                          key={c.href + c.label}
                          href={c.href}
                          className="group border-t border-white/10 py-3.5 transition-colors hover:border-orange-500"
                        >
                          <span className="block text-[0.95rem] group-hover:text-orange-500">{c.label}</span>
                          {c.note && <span className="mt-1 block text-xs opacity-50">{c.note}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {n.feature && (
                    <div className="lg:col-span-4">
                      <Link href={n.feature.href} className="block border border-white/12 p-6 transition-colors hover:border-orange-500">
                        <p className="u-meta text-orange-500">{n.feature.label}</p>
                        <p className="mt-3 text-sm leading-relaxed opacity-70">{n.feature.body}</p>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Mobile nav */}
      {open && (
        <div id="mobile-nav" className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-ink-900 lg:hidden">
          <div className="px-5 py-4 sm:px-8">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-white/10 py-1">
                <Link href={item.href} className="block py-3 text-lg">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="pb-3">
                    {item.children.map((c) => (
                      <li key={c.href + c.label}>
                        <Link href={c.href} className="block py-2 pl-4 text-sm opacity-65">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link
              href={site.primaryCta.href}
              className="mt-5 block bg-orange-500 px-5 py-3.5 text-center text-sm font-medium text-white"
            >
              {site.primaryCta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
