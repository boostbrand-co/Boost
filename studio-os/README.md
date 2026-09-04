# BOOST Studio OS

BOOST Studio OS is the internal operating layer for repeatable strategic, creative, research, writing, design, communication, and AI-assisted workflows.

It exists so future work does not start from zero and quality does not depend on remembering how a prior project was handled.

## What belongs here

Reusable systems such as:

- presentation standards
- brand strategy methods
- verbal identity systems
- research and audit methods
- design-system direction
- content strategy
- website experience standards
- client communication rules
- prose quality standards
- future growth / operations skills

## What does not belong here

- one client’s logo, colors, fonts, photography, or identity
- client pricing
- client metrics
- passwords / credentials
- one-off campaign files
- project-specific contracts
- unsupported “best practices” copied from another brand

Project-specific truth stays in the project. Studio OS stores the method used to think and execute well.

## Architecture

```text
.claude/
  skills/
    README.md
    presentation-design/
      SKILL.md
    investor-grade-presentations/
      SKILL.md
    prose-quality/
      SKILL.md
    brand-strategy/
      SKILL.md
    verbal-identity/
      SKILL.md
    design-system-direction/
      SKILL.md
    research-audit/
      SKILL.md
    content-strategy/
      SKILL.md
    web-experience/
      SKILL.md
    client-communications/
      SKILL.md
studio-os/
  README.md
  SKILL_TEMPLATE.md
CLAUDE.md
```

## Operating rule

Before Claude begins substantial work, it should:

1. read `.claude/skills/README.md`
2. identify the applicable skill(s)
3. read those skill files
4. layer project-specific evidence and brand constraints on top
5. execute to the skill’s acceptance checklist

## Naming

Use lowercase kebab-case for machine-readable folders and frontmatter.

Use Title Case for human-facing headings.

Good:

- `brand-strategy`
- `presentation-design`
- `client-communications`

Avoid:

- `BrandStrategyV2`
- `final-skill-new`
- `ana-presentations`
- client names for reusable skills

## Versioning

Keep the canonical filename `SKILL.md`.

Increment `metadata.version` when methodology changes materially.

Use Git history for change tracking instead of filename versions.

## Quality governance

A skill should not be considered mature until it contains:

- clear trigger
- principle
- process
- decision rules
- boundaries / evidence discipline when relevant
- acceptance checklist

If a project teaches a reusable lesson, update the appropriate skill after the project rather than relying on memory.

## Long-term repository structure

Recommended split:

### `boost-website`
Public site and application code.

### `boost-studio-os`
Internal methods, skills, standards, templates, and AI operating rules.

The current repository contains both until migration is practical.
