# BOOST Reporting System

This folder is the human-readable source of truth for recurring client performance reporting.

The system separates four jobs that used to happen manually in one workflow:

1. source collection
2. data QA and analysis
3. writing and strategic interpretation
4. presentation design

## Core files

### Analysis methodology
`.claude/skills/performance-reporting/SKILL.md`

Owns:

- data normalization
- comparable periods
- KPI directionality
- source conflicts
- FACT / PATTERN / HYPOTHESIS / DECISION
- content analysis
- paid-media analysis
- recommendations
- strategic memory
- reporting QA

### Writing
`.claude/skills/stop-slop-2/SKILL.md`

Owns:

- human language
- direct prose
- specificity
- removal of generic AI patterns

### Presentation quality
`.claude/skills/presentation-design/SKILL.md`

Owns:

- slide strategy
- visual hero
- layout family
- charts
- diagrams
- pacing
- art direction

### Reporting visual system
`studio-os/reporting/BOOST_REPORTING_DESIGN_SYSTEM.md`

Owns:

- BOOST skeleton + client skin
- report layout families
- chart grammar
- tables
- KPI treatments
- cover / closing
- visual density
- client / BOOST co-branding

### Cowork runner
`studio-os/reporting/COWORK_MONTHLY_REPORT_RUNNER.md`

Owns:

- collecting authorized source data
- browser / export workflow
- folder structure
- orchestration across analysis and design
- QA handoff

### Client configs
`studio-os/reporting/clients/`

Owns client-specific facts that should not contaminate universal skills:

- account identity
- language
- currency
- platforms
- business objective
- priority KPIs
- KPI directionality
- approved visual skin
- known reporting caveats

## Skill chain

For recurring monthly reports:

`performance-reporting → stop-slop-2 → presentation-design`

Then apply:

`BOOST_REPORTING_DESIGN_SYSTEM → client config`

## Monthly operating model

### Input

Authorized source data from Meta, Metricool, Google, LinkedIn, CRM, or other approved systems.

Prefer native structured exports whenever possible.

### Process

`Collect → Validate → Normalize → Analyze → Structure → Design → QA → BOOST review`

### Output

A client-ready editable deck and PDF preview that should not require routine Canva cleanup.

## Visual reference calibration

The system was calibrated against:

- the Shared Offices investor deck for useful visual density, layout range, diagrams, tables, and editorial presentation craft
- the AB Premium monthly report for the depth of client-facing monthly analysis and recommendation language

These are quality references, not templates to copy.

## One-command Cowork usage

```text
Generate the <MONTH YYYY> performance report for <CLIENT>.
Follow studio-os/reporting/COWORK_MONTHLY_REPORT_RUNNER.md and the active client config.
Use authorized browser access to collect source data, preferring structured exports over screenshots.
Do not modify any live account.
Complete data QA before analysis.
Apply performance-reporting, stop-slop-2, presentation-design, and BOOST_REPORTING_DESIGN_SYSTEM.
Use prior reports for continuity, not as a rigid slide template.
Return the editable presentation and PDF preview for BOOST review. Do not send anything to the client.
```

## V1 success condition

Ana should spend her time reviewing the monthly read, correcting judgment when needed, and approving the final output.

She should not routinely need to:

- manually collect every screenshot
- transcribe platform data
- rebuild charts
- rewrite generic AI insights
- replace an invented cover
- restyle the deck in Canva

When this workflow is reliable, its data normalization, analysis, strategic-memory, and QA logic can move directly into BOOST OS.