# BOOST Studio Skills

This directory contains reusable Claude skills maintained by Ana Pau Hinojosa / BOOST.

The goal is to turn repeated creative and strategic standards into explicit operating systems so future work starts from the same quality bar.

## Naming standard

Use lowercase kebab-case for every skill directory and frontmatter `name`.

Examples:

- `presentation-design`
- `investor-grade-presentations`
- `brand-strategy`
- `verbal-identity`
- `design-system-direction`
- `content-strategy`
- `research-audit`
- `web-experience`
- `client-communications`
- `prose-quality`

Each skill lives at:

`.claude/skills/<skill-name>/SKILL.md`

Use `SKILL.md` as the only canonical filename inside a skill folder. Do not version filenames such as `skill-v2.md`; keep version numbers in frontmatter.

## Skill frontmatter standard

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

## Skill title standard

The folder and frontmatter use machine-friendly kebab-case.
The visible H1 uses clear title case.

Example:

Folder: `presentation-design`

Frontmatter: `name: presentation-design`

Document title: `# Presentation Design`

## Current skills

### `presentation-design`
Universal presentation quality system. Use for client decks, proposals, sales presentations, brand decks, audits, research, workshops, internal decks, reports, case-study decks, keynotes, and investor presentations.

### `investor-grade-presentations`
Specialized extension for fundraising and investor-facing presentations. Apply `presentation-design` first, then add investor-specific narrative, evidence, financial, validation, and ask discipline.

## Governance

When a workflow becomes repeatable and materially improves quality, document it as a skill.

A skill should contain:

- purpose and trigger
- quality standard
- workflow
- decision rules
- evidence / safety constraints
- acceptance checklist

Do not create a skill for a single client's branding or one-off project. Client-specific systems belong in that project's files. Skills capture reusable methodology.

## Repository direction

Recommended repository identity: **BOOST Studio OS**.

Recommended GitHub repository slug: `boost-studio-os`.

This name is broad enough to contain presentation systems, writing standards, brand strategy methods, creative direction, research workflows, and future internal AI operating standards without tying the repository to one website or one client.
