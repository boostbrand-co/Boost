# BOOST Monthly Report Runner — Claude Cowork

Use this as the governing task brief for recurring monthly client reporting.

The goal is to remove manual collection, transcription, analysis, and formatting work while keeping BOOST responsible for judgment and final approval.

## Mission

Prepare a client-ready monthly performance report using the client's approved reporting config, source platforms, BOOST reporting methodology, writing standards, and presentation system.

The workflow is:

`Collect → Validate → Normalize → Analyze → Structure → Design → QA → Review`

Do not publish, send, or modify live marketing activity unless the user separately asks.

## Required BOOST sources

Before working, read:

1. `.claude/skills/performance-reporting/SKILL.md`
2. `.claude/skills/stop-slop-2/SKILL.md`
3. `.claude/skills/presentation-design/SKILL.md`
4. `studio-os/reporting/BOOST_REPORTING_DESIGN_SYSTEM.md`
5. the active client's reporting config
6. prior report(s) when supplied or accessible

Follow the most specific approved client facts without overriding universal evidence rules.

## Working folder

Create or use:

`reports/<client-slug>/<YYYY-MM>/`

Recommended structure:

```text
reports/
  <client-slug>/
    <YYYY-MM>/
      sources/
      normalized/
      analysis/
      output/
      qa/
```

Keep raw source exports untouched inside `sources/`.

## Phase 1 — Confirm reporting scope

Identify:

- client
- reporting month
- report language
- platforms in scope
- paid / organic scope
- primary business objective
- priority KPIs
- comparison period
- available source platforms

If the client config contains unresolved fields that materially affect analysis, flag them before final delivery. Continue collecting data when possible instead of stopping the workflow unnecessarily.

## Phase 2 — Collect source data

Use the connected browser / Chrome only for authorized accounts already accessible to the user.

Possible sources:

- Meta Business Suite
- Meta Ads Manager
- Metricool
- Google Ads
- Google Analytics
- LinkedIn
- client CRM or other approved source

### Collection rules

Prefer:

`API / native export → CSV/XLSX → platform PDF → screenshot`

When a structured export is available, download it.

Use screenshots for:

- data that cannot be exported cleanly
- visual content evidence
- creative thumbnails
- source verification

Do not manually transcribe large tables from screenshots if a downloadable export exists.

### Browser safety

This workflow is read-only unless the user gives a separate explicit instruction.

Do not:

- change campaigns
- change budgets
- edit ads
- publish content
- respond to messages
- change account settings
- delete assets
- modify permissions

## Phase 3 — Source manifest

Create:

`normalized/source-manifest.md`

For every source record:

- source name
- account / property
- report period
- export timestamp if known
- file name
- organic / paid / blended scope
- notes / caveats

Example:

```markdown
| Source | Account | Period | Scope | File | Notes |
|---|---|---|---|---|---|
| Meta Ads | AB Premium | Aug 1–31, 2026 | Paid | meta-ads-aug.csv | 7-day click attribution |
| Metricool | AB Premium | Aug 1–31, 2026 | Organic social | metricool-aug.xlsx | IG + FB |
```

## Phase 4 — Normalize and reconcile

Create:

`normalized/metrics.json`

Normalize the metrics required by `performance-reporting`.

Do not write strategic conclusions yet.

Run reconciliation checks first:

- date consistency
- account consistency
- currency
- totals
- acquired / lost / net math
- paid / organic scope
- current vs previous period
- metric definition conflicts

When two sources conflict, document both values and the likely reason. Do not silently choose one.

Create:

`qa/data-qa.md`

Use statuses:

- PASS
- REVIEW
- BLOCKER

A BLOCKER is reserved for an issue that makes the main result materially unreliable.

## Phase 5 — Analyze

Apply `performance-reporting`.

Create:

`analysis/monthly-analysis.md`

Structure the working analysis around:

### Executive read
The few changes that matter most.

### Priority metrics
Current result, comparison, context.

### Content
Winners, losers, repeatable signals, outliers.

### Paid media
Efficiency, scale, campaign differences, creative signals.

### FACTS
What the data directly supports.

### PATTERNS
What has repeated enough to matter.

### HYPOTHESES
What should be tested rather than stated as fact.

### DECISIONS
What BOOST recommends doing next.

### WHAT WE'RE WATCHING
Signals that are interesting but not mature enough to drive a conclusion.

Use prior reports to identify longitudinal patterns when available.

## Phase 6 — Apply writing standard

Apply `stop-slop-2` to all client-facing copy.

The report should read like a capable agency team reviewed the account.

Keep:

- domain language
- numbers
- useful caveats
- specific recommendations

Remove:

- generic AI summaries
- repeated metric paraphrases
- dramatic one-liners
- unsupported certainty
- filler

## Phase 7 — Build report architecture

Do not force a fixed number of slides.

Select modules from the BOOST Reporting Design System based on what the data needs.

Possible sequence:

1. Cover
2. Executive Summary
3. Primary outcome / performance
4. Platform or channel analysis
5. Paid media
6. Content evidence
7. Strategic read
8. Next moves
9. Optional appendix
10. Close

Combine slides when the information is closely related.

Split only when a slide would otherwise carry two separate strategic jobs.

Write a slide plan before designing:

`analysis/slide-plan.md`

For each slide include:

- strategic job
- audience question
- desired takeaway
- visual hero
- source data

## Phase 8 — Design the presentation

Apply `presentation-design` and `BOOST_REPORTING_DESIGN_SYSTEM.md`.

The design should be client-ready without a normal Canva cleanup step.

Use:

- real content thumbnails when available
- presentation-grade charts
- designed tables
- diagrams when relationships matter
- multiple layout families
- client accent with BOOST co-sign
- high useful visual density

Avoid:

- repeated generic cards
- empty minimalist slides
- tiny text
- screenshot-heavy analytics pages
- full client-color wallpaper on every slide

### Cover requirement

Use the approved client identity and `CLIENT × BOOST` system.

Do not generate an unrelated decorative cover.

## Phase 9 — Presentation QA

Review the deck twice.

### Thumbnail pass

Check:

- rhythm
- repeated layouts
- density
- color balance
- section pacing

### Slide pass

Check:

- hierarchy
- alignment
- chart legibility
- table legibility
- image crop
- metric consistency
- text length
- source notes
- report period
- client name / logo

Create:

`qa/presentation-qa.md`

## Phase 10 — Deliver for BOOST review

Place final outputs in:

`output/`

Preferred:

- editable presentation file
- PDF preview
- source / QA notes

Do not send directly to the client.

Return a concise handoff to Ana containing:

1. files created
2. primary monthly read
3. material data caveats
4. 2–4 decisions proposed
5. anything that needs human confirmation

## Monthly runner command template

Use this instruction when starting a report:

```text
Generate the <MONTH YYYY> performance report for <CLIENT>.

Follow the BOOST Monthly Report Runner in studio-os/reporting/COWORK_MONTHLY_REPORT_RUNNER.md.
Use the active client config.
Collect authorized data from the available connected sources, preferring structured exports over screenshots.
Do not modify any live account, campaign, content, budget, settings, messages, or permissions.

Complete data QA before analysis.
Apply performance-reporting, stop-slop-2, presentation-design, and the BOOST Reporting Design System.
Use the prior report for continuity, not as a rigid slide template.

Produce a final-quality editable presentation and PDF preview for BOOST review. Do not send it to the client.
```

## Success condition

This workflow succeeds when Ana can review the report as an editor / strategist instead of rebuilding it manually.

If routine delivery still requires rebuilding the cover, restyling slides in Canva, manually transcribing platform tables, or rewriting generic AI analysis, the system needs another iteration.