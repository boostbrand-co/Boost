# BOOST Reporting System

This folder is the human-readable source of truth for recurring client performance reporting.

The system separates five jobs that used to happen manually in one workflow:

1. source collection
2. data QA and analysis
3. client-level translation
4. writing and strategic interpretation
5. presentation design

## Core files

### Analysis methodology
`.claude/skills/performance-reporting/SKILL.md`

Owns:

- data normalization
- comparable periods
- KPI directionality
- source conflicts
- client objective and service-role context
- FACT / PATTERN / HYPOTHESIS / DECISION
- content analysis
- paid-media analysis at the right depth
- client-comprehension layer
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
- four-color working palette
- visual environments and deck rhythm
- report layout families
- chart grammar
- tables
- KPI treatments
- paid-media depth by service role
- cover / closing
- visual density
- client / BOOST co-branding

### Cowork runner
`studio-os/reporting/COWORK_MONTHLY_REPORT_RUNNER.md`

Owns:

- collecting authorized source data
- browser / export workflow
- folder structure
- orchestration across analysis, translation and design
- client-comprehension QA
- final-state QA

### Client configs
`studio-os/reporting/clients/`

Owns client-specific facts that should not contaminate universal skills:

- account identity
- language
- currency
- platforms
- business objective
- service role by channel
- reporting depth by channel
- priority KPIs
- KPI directionality
- approved visual skin
- known reporting caveats
- period-specific context

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

`Collect → Validate → Normalize → Analyze → Translate → Structure → Design → QA → BOOST review`

### Translation principle

The report is a client-facing translation layer between platform data and business decisions.

Use enough technical depth to make the analysis credible, but do not make the client decode marketing jargon to understand what happened.

Default order:

`business meaning → metric → technical detail only when useful`

### Output

A client-ready editable deck and PDF preview that should not require routine Canva cleanup.

## Visual reference calibration

The system was calibrated against:

- the Shared Offices investor deck for useful visual density, layout range, diagrams, tables, and editorial presentation craft
- AB Premium reporting for the depth of client-facing analysis, content learning and recommendation language

These are quality references, not templates to copy.

## Visual rhythm

Reports should use multiple visual environments rather than a long run of identical analytical slides.

Working environments:

- warm analytical
- client-color emphasis
- near-black / visual evidence
- soft client wash

Do not rotate backgrounds mechanically. Change environment when the strategic job changes.

## One-command Cowork usage

```text
Generate the <PERIOD> performance report for <CLIENT>.
Follow studio-os/reporting/COWORK_MONTHLY_REPORT_RUNNER.md and the active client config.
Use authorized browser access to collect source data, preferring structured exports over screenshots.
Do not modify any live account.
Complete data QA before analysis.
Match reporting depth to the client's objective and BOOST's actual service role on each channel.
Translate platform data into clear client-facing language before designing the deck.
Apply performance-reporting, stop-slop-2, presentation-design, and BOOST_REPORTING_DESIGN_SYSTEM.
Use prior reports for continuity, not as a rigid slide template.
Return the editable presentation and PDF preview for BOOST review. Do not send anything to the client.
```

## V1.1 success condition

Ana should spend her time reviewing the strategic read, correcting judgment when needed, and approving the final output.

She should not routinely need to:

- manually collect every screenshot
- transcribe platform data
- rebuild charts
- translate jargon for the client
- rewrite generic AI insights
- replace an invented cover
- restyle the deck in Canva

When this workflow is reliable, its data normalization, analysis, strategic-memory, translation, and QA logic can move directly into BOOST OS.