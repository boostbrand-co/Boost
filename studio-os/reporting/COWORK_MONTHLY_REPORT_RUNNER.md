# BOOST Monthly Report Runner — Claude Cowork

Use this as the governing task brief for recurring monthly client reporting.

The goal is to remove manual collection, transcription, analysis, and formatting work while keeping BOOST responsible for judgment and final approval.

The workflow is:

`Collect → Validate → Normalize → Analyze → Translate → Structure → Design → QA → Review`

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

## Phase 1 — Confirm reporting scope and service role

Identify:

- client
- reporting period
- report language
- platforms in scope
- paid / organic scope
- primary client objective
- service role of each channel
- strategic priorities / active business initiatives in the client config
- priority KPIs
- reporting depth by channel
- comparison period
- available source platforms

The reporting depth must reflect the actual engagement.

Examples:

- If Meta Ads is an add-on used mainly to amplify content, do not build a campaign-operations report around it.
- If Meta Ads is the core acquisition service, deeper campaign and creative analysis may be appropriate.
- If the client is building a personal brand / community, prioritize reach quality, profile actions, saves, content patterns and consistency over forcing sales metrics to the front.

Do not infer that the most measurable channel is the most important channel.

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
- timezone / local client date consistency
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
Match depth to the account's service role. Separate client-relevant result from agency-only diagnostics.

### Strategic priorities
Evaluate active business initiatives even when their current executions underperform.

Separate:

- current performance
- strategic / commercial importance
- what should change in the next execution or test

Do not recommend dropping a client-approved priority solely because one post, one format or one short test performed poorly.

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

## Phase 6 — Translate for the client

Create a client-facing layer before slide design.

Apply these rules:

- Assume the client understands their business but may not know marketing terminology.
- Lead with business meaning, then the metric, then technical detail only if useful.
- Spell out a technical term before using an acronym.
- Do not use an acronym that appears only once.
- Move campaign names, ad-set taxonomy, attribution windows, CBO mechanics, CPM, CPC, CTR and other platform diagnostics to appendix / notes unless the detail changes the client's decision.
- Keep evidence and nuance. Simplify language, not thinking.

For strategic sections, client-facing labels should favor:

- **LECTURA BOOST**
- **DECISIÓN**
- **EN OBSERVACIÓN**

The internal analysis can remain more technical.

## Phase 7 — Apply writing standard

Apply `stop-slop-2` to all client-facing copy.

The report should read like a capable agency team reviewed the account.

Keep:

- useful domain language
- numbers
- caveats that affect the decision
- specific recommendations

Remove:

- generic AI summaries
- repeated metric paraphrases
- dramatic one-liners
- unsupported certainty
- filler
- platform jargon the client does not need

## Phase 8 — Build report architecture

Do not force a fixed number of slides.

Select modules from the BOOST Reporting Design System based on what the data needs.

For a normal monthly report, aim for roughly **8–10 core slides plus appendix** when appropriate. Extended periods may justify more.

Possible sequence:

1. Cover
2. Executive Summary
3. Primary outcome / performance
4. Platform or channel analysis
5. Paid media at the depth required by the account
6. Content evidence
7. Strategic read
8. Next moves
9. Optional appendix
10. Close

Combine slides when the information is closely related.

Split only when a slide would otherwise carry two separate strategic jobs.

Move detailed campaign tables, full content rankings and source methodology to appendix when they support the analysis but do not need to interrupt the core narrative.

Write a slide plan before designing:

`analysis/slide-plan.md`

For each slide include:

- strategic job
- audience question
- desired takeaway
- visual hero
- source data
- visual environment
- core vs appendix

## Phase 9 — Design the presentation

Apply `presentation-design` and `BOOST_REPORTING_DESIGN_SYSTEM.md`.

The design should be client-ready without a normal Canva cleanup step.

Use:

- the canonical BOOST report cover
- real content thumbnails when available
- presentation-grade charts
- designed tables
- diagrams when relationships matter
- multiple layout families
- multiple visual environments
- client accents with BOOST co-sign
- high useful visual density

Avoid:

- repeated generic cards
- long runs of identical white slides
- mechanical background rotation
- empty minimalist slides
- tiny text
- screenshot-heavy analytics pages
- full client-color wallpaper on every slide
- stretched, squeezed or distorted images

### Cover requirement

Use the canonical BOOST report-cover structure from `BOOST_REPORTING_DESIGN_SYSTEM.md`.

The cover is not a fresh design prompt every month.

Required behavior:

- black / near-black left panel
- dark verified client-color right panel
- thin BOOST-orange far-left rule
- approved BOOST identifier top-left
- fixed editorial title / metadata structure
- reporting period treatment on the right

Photography is optional.

If a photo is used:

- preserve its aspect ratio
- crop intentionally to fill the frame
- never stretch it horizontally or vertically
- choose another asset or no image if the source cannot fit cleanly

A clean non-photographic cover is preferable to a distorted image.

## Phase 10 — Presentation QA

Review the deck three times.

### Thumbnail pass

Check:

- rhythm
- repeated layouts
- density
- color balance
- section pacing
- no unnecessary run of identical surfaces

### Slide pass

Check:

- hierarchy
- alignment
- chart legibility
- table legibility
- image crop
- image aspect ratio
- logo proportions
- metric consistency
- text length
- source notes
- report period
- client name / logo

### Client-comprehension pass

Read the core deck as a smart business owner who does not work in marketing.

Check:

- Can every slide be understood without explaining platform terminology aloud?
- Is the practical meaning visible before technical detail?
- Did unnecessary acronyms survive?
- Is any agency-only information taking up client-facing space?
- Are next moves scannable?
- Are strategic business priorities represented accurately even when current executions underperformed?

Create:

`qa/presentation-qa.md`

Any stretched / distorted image is a QA failure and must be corrected before delivery.

## Phase 11 — Final-state QA

Before client-ready export:

- remove `Para revisión`, `Draft`, `Internal review`, or other draft-only labels unless intentionally requested
- verify all dates use the correct local timezone
- verify report period on every slide / footer
- verify client-facing file names
- verify the canonical cover is used correctly
- verify no image, screenshot or logo is distorted

## Phase 12 — Deliver for BOOST review

Place final outputs in:

`output/`

Preferred:

- editable presentation file
- PDF preview
- source / QA notes

Do not send directly to the client.

Return a concise handoff to Ana containing:

1. files created
2. primary period read
3. material data caveats
4. 2–4 decisions proposed
5. strategic-priority updates
6. anything that needs human confirmation

## Monthly runner command template

Use this instruction when starting a report:

```text
Generate the <PERIOD> performance report for <CLIENT>.

Follow the BOOST Monthly Report Runner in studio-os/reporting/COWORK_MONTHLY_REPORT_RUNNER.md and the active client config.
Collect authorized data from the available connected sources, preferring structured exports over screenshots.
Do not modify any live account, campaign, content, budget, settings, messages, or permissions.

Complete data QA before analysis.
Match reporting depth to the client's actual objective and BOOST's service role on each channel.
Respect strategic priorities from the client config even when their current executions underperform.
Translate technical platform data into clear client-facing language before designing the deck.
Apply performance-reporting, stop-slop-2, presentation-design, and the BOOST Reporting Design System.
Use prior reports for continuity, not as rigid slide templates.
Use the canonical BOOST report cover and never stretch or distort imagery.

Produce a final-quality editable presentation and PDF preview for BOOST review. Keep unnecessary technical detail in appendix / internal notes. Do not send it to the client.
```

## Success condition

This workflow succeeds when Ana can review the report as an editor / strategist instead of rebuilding it manually.

If routine delivery still requires rebuilding the cover, restyling slides in Canva, manually transcribing platform tables, translating marketing jargon for the client, correcting distorted imagery, or rewriting generic AI analysis, the system needs another iteration.
