# SEO MAP

## Technical
- All 49 public routes statically prerendered. Full content in HTML, including the filterable work
  index, so crawlers and LLM readers see everything without executing JS.
- `app/sitemap.ts` generates 47 URLs. `/privacy` and `/terms` excluded and noindexed.
- `app/robots.ts` allows all, disallows the two legal routes, declares the sitemap.
- `public/llms.txt` follows the llms.txt convention with linked sections.
- `/llm-info` is a human-readable, machine-parseable facts page with Organization schema.
- Canonicals on every page via `lib/seo.ts`.
- Self-hosted fonts, so no third-party origin on the critical path.

## Structured data
| Schema | Where |
|---|---|
| Organization | Root layout (every page) and `/llm-info` |
| BreadcrumbList | Every detail page |
| Service | Each of the 7 service pages |
| CreativeWork | Each of the 13 case studies, Organization as creator |
| Article | Each of the 6 insight articles, Organization as author and publisher |

No Person schema is used, because no team member has been confirmed. Add it with the team data.

## URL architecture
Intentional and shallow. Each capability has its own URL rather than sharing one services page,
which the architecture audit identified as the most common and most expensive agency mistake
(sites naming 20 to 41 services on a single page with zero indexable service URLs).

## Internal linking
Every service links to related cases and sibling services. Every case links to the capabilities used
and the next case. Every situation links to services and cases. The footer carries a four-column
sitemap. 49 distinct internal link targets, zero broken links (verified by crawling the built HTML).

## Page families deliberately not built
- City and location pages. The audit found location SEO is exclusively an SMB and local-services play,
  and that URL patterns within a single agency's set are usually inconsistent because they are
  hand-built. Not appropriate for this positioning.
- "Best X agency" self-published listicles. Available, cheap, and corrosive to the trust position.
- Thin per-LLM pages (chatgpt-seo, perplexity-seo and so on). Four agencies in the audit split GEO
  per engine; it reads as keyword farming.

## Next steps
1. Add Open Graph images. There are none, so social shares currently render text only.
2. Once pricing is published, add a cost or pricing page. The audit found cost content performs as
   trust content and WebFX deliberately places it in the About menu rather than in sales.
3. Consider industry pages once there are at least three cases per industry.
