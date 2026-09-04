# BOOST Studio OS — Skill Registry

This directory contains reusable Claude skills maintained by Ana Pau Hinojosa / BOOST.

The purpose is to turn repeated strategic, creative, research, writing, design, communication, growth, and operating standards into explicit systems so future work starts from the same quality bar.

## Naming standard

Use lowercase kebab-case for every skill directory and frontmatter `name`.

Examples:

- `presentation-design`
- `brand-strategy`
- `verbal-identity`
- `design-system-direction`
- `offer-strategy`
- `content-strategy`
- `growth-strategy`
- `research-audit`
- `web-experience`
- `client-communications`
- `prose-quality`

Each skill lives at:

`.claude/skills/<skill-name>/SKILL.md`

Use `SKILL.md` as the canonical filename inside every skill folder. Keep version numbers in frontmatter, never in filenames.

## Frontmatter standard

```yaml
---
name: presentation-design
description: One concise sentence describing when Claude should use the skill.
metadata:
  owner: Ana Pau Hinojosa / BOOST
  category: design
  purpose: Universal presentation quality standard
  version: 1.0
---
```

## Current skills

### `presentation-design`
Universal presentation quality system. Use for client decks, proposals, sales presentations, brand decks, audits, research, workshops, internal decks, reports, case-study decks, keynotes, and investor presentations.

### `investor-grade-presentations`
Specialized extension for fundraising and investor-facing presentations. Apply `presentation-design` first, then add investor-specific narrative, evidence, financial, validation, and ask discipline.

### `prose-quality`
Universal professional writing standard. Applies Stop-Slop principles while preserving useful professional language, specificity, and natural rhythm.

### `brand-strategy`
Reusable method for category definition, business objective, audiences, positioning, differentiation, promise, product truth, and messaging architecture.

### `verbal-identity`
Reusable voice-system method covering personality, tone, sliders, lexicon, message rules, UX copy, and examples.

### `design-system-direction`
Reusable creative-direction method for translating strategy into visual systems across web, product, presentations, campaigns, and social content.

### `offer-strategy`
Commercial packaging method for ICP fit, offer architecture, scope, pricing logic, qualification, proof, and conversion paths.

### `content-strategy`
Audience- and business-led content planning system covering territories, formats, proof, hooks, CTA logic, production, and measurement.

### `growth-strategy`
Measured acquisition and growth method covering funnel logic, channel roles, paid acquisition, experiments, budgets, KPI trees, operating cadence, and scale gates.

### `research-audit`
Evidence-first research and audit system with source hierarchy, contradiction tracking, competitive analysis, findings, and prioritized recommendations.

### `web-experience`
Website and landing-page system covering information architecture, offer hierarchy, conversion paths, proof placement, product truth, motion, mobile, and measurement.

### `client-communications`
Natural, concise client communication system for Slack, email, WhatsApp, updates, feedback, decisions, follow-ups, and boundaries.

## Skill categories

Use these values consistently in `metadata.category`:

- `strategy`
- `research`
- `writing`
- `design`
- `communication`
- `operations`
- `growth`

Do not invent a new category when an existing one fits.

## Governance

Create a skill when a workflow is:

1. reusable across multiple projects
2. important enough that inconsistency hurts quality
3. mature enough to state decision rules
4. distinct from client-specific brand/product information

A skill should contain:

- purpose and trigger
- core principle
- workflow
- decision rules
- evidence / safety constraints where relevant
- acceptance checklist

Do not create skills for one client’s branding, one campaign, or a one-off deliverable. Client-specific systems belong in project files. Skills capture reusable methodology.

## Dependency rule

Skills may build on other skills.

Examples:

- `investor-grade-presentations` depends on `presentation-design`
- `verbal-identity` uses `prose-quality`
- `client-communications` uses `prose-quality`
- `web-experience` may use `brand-strategy`, `verbal-identity`, and `design-system-direction`
- `content-strategy` may use `brand-strategy`, `verbal-identity`, and `growth-strategy`
- `growth-strategy` may use `offer-strategy` and `research-audit`

When multiple skills apply, use the most foundational skill first.

## Recommended execution order by task

### Brand rebuild
`research-audit` → `brand-strategy` → `verbal-identity` → `design-system-direction`

### Website
`research-audit` → `offer-strategy` → `brand-strategy` → `verbal-identity` → `design-system-direction` → `web-experience`

### Content system
`research-audit` → `brand-strategy` → `verbal-identity` → `content-strategy` → `growth-strategy`

### Growth / GTM
`research-audit` → `offer-strategy` → `growth-strategy`

### Presentation
Relevant strategy/research skill(s) → `presentation-design`; add `investor-grade-presentations` only for fundraising/investor work.

## Repository direction

Recommended repository identity: **BOOST Studio OS**.

Recommended GitHub repository slug: `boost-studio-os`.

Recommended long-term separation:

- `boost-website` — public BOOST website/application
- `boost-studio-os` — reusable internal methods, skills, standards, templates, and AI operating rules

Until the repositories are separated, keep Studio OS assets inside `.claude/skills/` and `studio-os/` so they remain clearly distinct from website code.
