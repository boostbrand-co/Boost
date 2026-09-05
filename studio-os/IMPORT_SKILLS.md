# Import Existing Claude Skills into BOOST Studio OS

Use this process when Ana has useful skills, instructions, or operating standards living inside Claude projects, chats, local files, or other repositories.

The goal is to consolidate reusable methodology without creating duplicates or copying client-specific information into the global system.

## Destination

Every canonical skill lives at:

`.claude/skills/<skill-name>/SKILL.md`

Use lowercase kebab-case for `<skill-name>`.

## Before importing

For each candidate skill, determine:

1. Is this reusable across multiple clients or projects?
2. Does an existing BOOST Studio OS skill already cover the same methodology?
3. Is the content a method, or is it client-specific truth?
4. Does it contain unsupported claims, private client information, passwords, or sensitive material?
5. Is it mature enough to become a canonical skill, or should it first be merged into an existing skill?

## Import rules

### Merge before creating

If an existing skill already owns the topic, merge the useful methodology into that skill.

Examples:

- deck layout guidance → `presentation-design`
- copy humanization / AI-tell removal / natural message writing → `stop-slop-2`
- positioning methodology → `brand-strategy`
- tone / messaging rules → `verbal-identity`

Do not create `presentation-design-v2`, `presentation-style`, or `premium-decks` if `presentation-design` already owns the method.

### Remove client-specific content

Do not import:

- client names as examples unless they are necessary and non-sensitive
- client logos / colors / fonts
- private metrics
- credentials
- contract terms
- account IDs
- passwords
- one-off campaign details

Extract the reusable lesson instead.

### Preserve provenance when useful

If a skill was derived from a public framework or named methodology, note the source inside the skill where appropriate.

Example: `stop-slop-2` materially incorporates Hardik Pandya’s public Stop Slop framework and adds BOOST’s professional application and Message Mode. Preserve attribution and source license information in the canonical skill.

## Required skill structure

Every imported skill should contain:

```yaml
---
name: skill-name
description: One concise sentence describing when Claude should use the skill.
metadata:
  owner: BOOST
  category: strategy | research | writing | design | communication | growth | operations
  purpose: Short human-readable purpose
  version: 1.0
---
```

Then:

1. Title
2. Purpose / trigger
3. Core principles
4. Workflow
5. Decision rules
6. Boundaries / evidence discipline
7. Acceptance checklist

## Naming rules

Good:

- `presentation-design`
- `brand-strategy`
- `client-communications`
- `research-audit`
- `stop-slop-2`

Avoid:

- `final-skill`
- `skill-new`
- `ana-deck-skill`
- `clientname-branding`
- `presentation-v3`

## Versioning

Do not version filenames.

Keep:

`SKILL.md`

Change the frontmatter version only when methodology changes materially.

Examples:

- wording cleanup only → no version bump required
- new workflow / decision framework → increment minor version
- major restructuring / changed operating philosophy → increment major version

## Claude Core import workflow

When asked to import Ana’s existing Claude skills:

1. inventory all candidate skills / instruction files available in Claude
2. summarize them in a temporary migration table
3. map each one to:
   - MERGE into existing skill
   - CREATE as a new skill
   - KEEP project-specific
   - DISCARD duplicate / weak / obsolete
4. show the proposed mapping before destructive cleanup
5. normalize names and frontmatter
6. remove client-specific facts from global skills
7. merge overlaps
8. write canonical `SKILL.md` files
9. update `.claude/skills/README.md`
10. update `studio-os/SKILLS_CATALOG.md`
11. report exactly what was added, merged, skipped, or left project-specific

## Quality check

Before import is complete, verify:

- no duplicate skills cover the same job
- every skill has a clear trigger
- every skill has a reusable workflow
- all names follow kebab-case
- all canonical files are named `SKILL.md`
- client-specific truth has not leaked into global methodology
- sensitive data is absent
- the skill catalog reflects the final library
- `CLAUDE.md` can discover the final structure without hardcoded obsolete paths
