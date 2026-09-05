# BOOST Studio OS

**BOOST Studio OS** is the internal operating system for how BOOST researches, thinks, writes, designs, presents, audits, and executes work with AI.

It turns repeated standards into reusable skills so quality does not depend on memory, one chat, or one person remembering how a previous project was handled.

> **Method lives here. Client truth stays with the client.**

## Start here

### For Claude / AI work

Read:

1. `CLAUDE.md`
2. `.claude/skills/README.md`
3. the applicable `.claude/skills/<skill-name>/SKILL.md`

### For humans

Read:

- [`studio-os/README.md`](studio-os/README.md) — how the operating system works
- [`studio-os/SKILLS_CATALOG.md`](studio-os/SKILLS_CATALOG.md) — current skill library
- [`studio-os/IMPORT_SKILLS.md`](studio-os/IMPORT_SKILLS.md) — how to bring existing Claude skills into the system
- [`studio-os/SKILL_TEMPLATE.md`](studio-os/SKILL_TEMPLATE.md) — standard for creating a new skill

## Current skill library

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

### Specialized extension

- `investor-grade-presentations`

The universal writing cleanup standard is **`stop-slop-2`**. It combines Hardik Pandya's Stop Slop framework with BOOST's professional application and Message Mode.

The universal presentation standard is **`presentation-design`**. The investor skill is an extension only when the audience is investors, financing partners, or diligence reviewers.

## Repository structure

```text
Boost/
├── README.md
├── CLAUDE.md
├── AGENTS.md
├── WEBSITE.md
│
├── .claude/
│   └── skills/
│       ├── README.md
│       ├── presentation-design/
│       │   └── SKILL.md
│       ├── stop-slop-2/
│       │   └── SKILL.md
│       ├── brand-strategy/
│       │   └── SKILL.md
│       ├── verbal-identity/
│       │   └── SKILL.md
│       └── ...
│
├── studio-os/
│   ├── README.md
│   ├── SKILLS_CATALOG.md
│   ├── IMPORT_SKILLS.md
│   └── SKILL_TEMPLATE.md
│
├── app/
├── components/
├── data/
├── docs/
└── public/
```

## Core operating principle

Before substantial work begins:

1. Identify the task and desired outcome.
2. Identify the relevant skill or skill chain.
3. Read the skill before executing.
4. Layer project-specific facts, evidence, brand, and constraints on top.
5. Execute to the skill’s acceptance checklist.
6. If the project teaches a reusable lesson, update the skill after the project.

## What belongs in Studio OS

Reusable methods, standards, quality bars, workflows, decision rules, templates, and acceptance criteria.

## What does not belong in Studio OS

Client logos, client facts, pricing, credentials, passwords, project-specific contracts, one-off campaign details, or unsupported assumptions.

## Website

The current BOOST website still lives in this repository. Its documentation has been separated so the Studio OS remains easy to understand.

See [`WEBSITE.md`](WEBSITE.md).

---

**Owner:** BOOST  
**System:** BOOST Studio OS  
**Primary use:** Claude / AI-assisted strategic and creative work
