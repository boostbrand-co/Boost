# BOOST® Website

This repository also contains the current BOOST public website.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind v4
- 49 statically prerendered public routes

## Run locally

```bash
npm install
npm run dev
npm run build
npm start
npx tsc --noEmit && npx eslint .
```

Node 20 or newer.

## Deploy

**Vercel:** import the repository and use the default Next.js detection.

Before production launch, confirm all open items in `docs/MISSING_CONTENT.md`, including team details, pricing, legal review, scheduling links, Open Graph images, and any remaining noindex flags.

## Content architecture

| File | Contains |
|---|---|
| `data/site.ts` | Site facts, navigation, footer |
| `data/services.ts` | Capability groups and services |
| `data/cases.ts` | Case studies and sourced metrics |
| `data/situations.ts` | Buyer situations |
| `data/engagements.ts` | Engagement models and fit criteria |
| `data/team.ts` | Team roles |
| `data/insights.ts` | Research articles |
| `data/system.ts` | Operating-loop demonstration artifacts |

## Website evidence rules

- Do not invent clients, metrics, quotes, credentials, prices, or contract terms.
- Real client metrics require visible sources.
- Illustrative data must be labeled as illustrative.
- Pricing remains `[INVESTMENT RANGE TO CONFIRM]` until approved.
- No em dashes in shipped copy.
- Important content must ship in HTML, not depend on JavaScript only.

See `docs/README.md` for website-specific documentation.
