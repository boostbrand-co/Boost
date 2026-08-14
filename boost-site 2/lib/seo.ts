import type { Metadata } from "next";
import { site } from "@/data/site";

export function meta({
  title,
  description,
  path = "/",
  noIndex,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${site.domain}${path}`;
  const full = path === "/" ? `${title}` : `${title} · BOOST®`;
  return {
    title: full,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: full,
      description,
      url,
      siteName: "BOOST®",
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title: full, description },
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return { __html: JSON.stringify(data) };
}

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.domain}${t.url}`,
    })),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BOOST®",
  url: site.domain,
  email: site.email,
  description: site.description,
  sameAs: [site.instagram],
  address: [
    { "@type": "PostalAddress", addressLocality: "San Antonio", addressRegion: "TX", addressCountry: "US" },
    { "@type": "PostalAddress", addressLocality: "Monterrey", addressCountry: "MX" },
  ],
  areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Mexico" }],
};
