import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Legal boilerplate carries no search value and should not compete with
      // the pages that do.
      disallow: ["/privacy", "/terms"],
    },
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}
