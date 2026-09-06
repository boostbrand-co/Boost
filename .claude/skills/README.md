# BOOST Studio OS — Skill Registry

This directory is the canonical machine-readable skill library for BOOST.

Human-friendly documentation lives in:

- `studio-os/README.md`
- `studio-os/SKILLS_CATALOG.md`
- `studio-os/IMPORT_SKILLS.md`
- `studio-os/SKILL_TEMPLATE.md`

## Naming standard

Use lowercase kebab-case for every skill directory and frontmatter `name`.

Each skill lives at:

`.claude/skills/<skill-name>/SKILL.md`

The canonical filename is always `SKILL.md`. Keep version numbers in frontmatter, never filenames.

## Frontmatter standard

```yaml
---
name: presentation-design
description: One concise sentence describing when Claude should use the skill.
metadata:
  owner: BOOST
  category: design
  purpose: Universal presentation quality standard
  version: 1.0
---
```

## Current skills

### Strategy
- `brand-strategy`
- `offer-strategy`
- `content-strategy`
- `growth-strategy`

### Research
- `research-audit`

### Writing & communication
- `verbal-identity`
- `stop-slop-2`
- `client-communications`

### Design & experience
- `presentation-design`
- `design-system-direction`
- `web-experience`

### Operations
- `performance-reporting`

### Specialized extensions
- `investor-grade-presentations`

See `studio-os/SKILLS_CATALOG.md` for descriptions and recommended skill chains.

## Categories

Use only these values in `metadata.category` unless the taxonomy is deliberately revised:

- `strategy`
- `research`
- `writing`
- `design`
- `communication`
- `growth`
- `operations`

## Governance

Create a new skill only when a workflow is:

1. reusable across multiple projects
2. important enough that inconsistency hurts quality
3. mature enough to state decision rules
4. meaningfully distinct from existing skills
5. separate from client-specific facts or branding

Every mature skill should contain:

- purpose / trigger
- core principles
- workflow
- decision rules
- boundaries / evidence discipline where relevant
- acceptance checklist

## Merge-before-create rule

Before creating a skill, check whether an existing skill already owns the topic.

Examples:

- slide quality / deck layouts → `presentation-design`
- monthly marketing data analysis / report logic → `performance-reporting`
- AI writing cleanup / humanized prose / message naturalness → `stop-slop-2`
- positioning → `brand-strategy`
- messaging / voice → `verbal-identity`
- acquisition planning → `growth-strategy`

Do not create duplicate variants such as `presentation-v2`, `premium-decks`, `monthly-report-v2`, or `better-copy`.

## Dependencies

Skills may build on other skills.

Examples:

- `investor-grade-presentations` depends on `presentation-design`
- `performance-reporting` uses `stop-slop-2` for prose and hands presentation output to `presentation-design`
- `verbal-identity` uses `stop-slop-2`
- `client-communications` uses `stop-slop-2` in Message Mode
- `web-experience` may use `brand-strategy`, `verbal-identity`, and `design-system-direction`
- `content-strategy` may use `brand-strategy`, `verbal-identity`, and `growth-strategy`
- `growth-strategy` may use `offer-strategy` and `research-audit`

When multiple skills apply, use the most foundational skill first.

## Recommended execution order

### Brand rebuild
`research-audit → brand-strategy → verbal-identity → design-system-direction`

### Website
`research-audit → offer-strategy → brand-strategy → verbal-identity → design-system-direction → web-experience`

### Content system
`research-audit → brand-strategy → verbal-identity → content-strategy`

### Growth / GTM
`research-audit → offer-strategy → growth-strategy`

### Presentation
Relevant strategy/research skill(s) → `presentation-design`

### Monthly performance report
`performance-reporting → stop-slop-2 → presentation-design`

Use the approved reporting design system and active client reporting config after the skill chain.

For investor-facing work:

Relevant strategy/research skill(s) → `presentation-design → investor-grade-presentations`

## Importing existing Claude skills

Use `studio-os/IMPORT_SKILLS.md`.

Inventory first. Merge duplicates. Strip client-specific facts. Normalize naming and frontmatter. Update this registry and `studio-os/SKILLS_CATALOG.md` after migration.
