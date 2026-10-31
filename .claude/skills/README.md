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
- `stop-slop-3`
- `client-communications`
- `client-deliverables`

### Direction & management
- `marketing-director-os` — universal growth-partner judgment: move the needle, prioritize, delegate, avoid unnecessary work and measure results.

### Taco Palenque workflows
- `taco-palenque-director-os` — specialized client layer; use after `marketing-director-os` and with private project context.
- `taco-palenque-propuestas-duenos` — prepare owner choices and clear recommendations.
- `taco-palenque-presentaciones` — visual and brand-specific presentation layer.

The older `stop-slop-2` is retained as legacy material; do not use it by default.

### Design & experience
- `presentation-design`
- `design-system-direction`
- `web-experience`

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
- AI writing cleanup / humanized prose / message naturalness → `stop-slop-3`
- positioning → `brand-strategy`
- messaging / voice → `verbal-identity`
- acquisition planning → `growth-strategy`

Do not create duplicate variants such as `presentation-v2`, `premium-decks`, or `better-copy`.

## Dependencies

Skills may build on other skills.

Examples:

- `investor-grade-presentations` depends on `presentation-design`
- `verbal-identity` uses `stop-slop-3`
- `client-communications` uses `stop-slop-3` in Message Mode
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

### Client deliverables
`client-deliverables` uses `stop-slop-3`; add `research-audit` when researching and `presentation-design` when building a deck. It owns executive synthesis, practical comparisons, evidence visibility, client templates, and consistency across deliverable files.

### Presentation
Relevant strategy/research skill(s) → `presentation-design`

For investor-facing work:

Relevant strategy/research skill(s) → `presentation-design → investor-grade-presentations`

## Importing existing Claude skills

Use `studio-os/IMPORT_SKILLS.md`.

Inventory first. Merge duplicates. Strip client-specific facts. Normalize naming and frontmatter. Update this registry and `studio-os/SKILLS_CATALOG.md` after migration.

## Private context
Client documents, confidential numbers, personal José context and transcripts belong in a private Claude project, not this public skill repository.

### Marketing Director / Growth Partner
`marketing-director-os → stop-slop-3`; add the relevant specialty skill when needed. For Taco Palenque: `marketing-director-os → taco-palenque-director-os → taco-palenque-propuestas-duenos` only if an owner decision is being prepared. Do not load confidential client references into universal skills.
