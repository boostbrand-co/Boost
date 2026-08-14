import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { caseSlugs } from "@/data/cases";
import { serviceSlugs } from "@/data/services";
import { situationSlugs } from "@/data/situations";
import { insights } from "@/data/insights";

type Entry = MetadataRoute.Sitemap[number];

const url = (path: string) => `${site.domain}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entry = (
    path: string,
    priority: number,
    changeFrequency: Entry["changeFrequency"],
    lastModified: Date = now,
  ): Entry => ({ url: url(path), lastModified, changeFrequency, priority });

  return [
    // Entry points
    entry("/", 1, "weekly"),
    entry("/build-my-growth-plan", 0.9, "monthly"),

    // Proof
    entry("/work", 0.9, "weekly"),
    ...caseSlugs.map((slug) => entry(`/work/${slug}`, 0.7, "monthly")),

    // Capabilities
    entry("/services", 0.9, "monthly"),
    ...serviceSlugs.map((slug) => entry(`/services/${slug}`, 0.8, "monthly")),

    // How the work runs
    entry("/how-boost-works", 0.9, "monthly"),
    entry("/how-boost-works/creative-memory", 0.7, "monthly"),
    entry("/how-boost-works/reporting", 0.7, "monthly"),
    entry("/how-boost-works/client-control", 0.7, "monthly"),
    entry("/ai-disclosure", 0.6, "yearly"),

    // Situations and commercial terms
    entry("/who-we-help", 0.8, "monthly"),
    ...situationSlugs.map((slug) => entry(`/who-we-help/${slug}`, 0.7, "monthly")),
    entry("/engagements", 0.7, "monthly"),
    entry("/fit", 0.6, "monthly"),

    // Company
    entry("/about", 0.6, "monthly"),
    entry("/about/team", 0.6, "monthly"),

    // Research
    entry("/insights", 0.8, "weekly"),
    ...insights.map((a) => entry(`/insights/${a.slug}`, 0.7, "monthly", new Date(a.dateISO))),

    // Machine-readable summary
    entry("/llm-info", 0.4, "monthly"),

    // /privacy and /terms are intentionally excluded. They are also disallowed
    // in app/robots.ts.
  ];
}
