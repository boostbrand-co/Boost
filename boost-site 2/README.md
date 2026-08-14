# BOOST® website

Complete multi-page website. Next.js 16 (App Router), React 19, TypeScript, Tailwind v4.
49 public routes, all statically prerendered.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npx tsc --noEmit && npx eslint .   # typecheck and lint
```

Node 20 or newer. No environment variables are required to run. Analytics IDs are optional and
documented in `docs/ANALYTICS_PLAN.md`.

## Deploy

**Vercel (recommended):** import the repo, framework detection handles the rest. No build config
needed. Set the production domain, then update `site.domain` in `data/site.ts` so canonicals,
sitemap and schema point at the right host.

**Any Node host:** `npm run build` then `npm start`, port 3000 by default.

**Static export:** possible with `output: "export"` in `next.config.ts` since every route is static,
but the 404 and future API routes behave better on a Node host.

Before going live: replace the team placeholders, confirm pricing, get legal sign-off on
`/privacy` and `/terms` and remove their noindex flags, add the scheduling link, and add Open Graph
images. The full list is in `docs/MISSING_CONTENT.md`.

## Editing content

Content lives in `/data`, not in page files. Edit these and the pages follow:

| File | Contains |
|---|---|
| `data/site.ts` | Site facts, navigation, footer |
| `data/services.ts` | 5 capability groups, 7 services |
| `data/cases.ts` | 13 case studies, real metrics with sources |
| `data/situations.ts` | 5 buyer situations |
| `data/engagements.ts` | 4 engagement models, fit criteria |
| `data/team.ts` | Team roles (placeholder, replace before launch) |
| `data/insights.ts` | 6 research articles |
| `data/system.ts` | Operating loop and all demonstration artifacts |

Structured this way so moving to a CMS later is a mapping exercise rather than a rebuild.

## Rules this codebase follows

- No invented clients, metrics, quotes, credentials, prices or contract terms. Real client metrics
  carry a visible source; illustrative data carries a demonstration badge.
- Pricing appears as `[INVESTMENT RANGE TO CONFIRM]` until confirmed.
- No em dashes in shipped copy.
- Every page ships full HTML. Nothing important is JS-only.

## Documentation

See `docs/README.md`.
