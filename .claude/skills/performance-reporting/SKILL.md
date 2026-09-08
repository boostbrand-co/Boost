---
name: performance-reporting
description: Turn raw marketing data into accurate, evidence-led client reporting with BOOST-style analysis, recommendations, QA, strategic memory, and client-level translation.
metadata:
  owner: BOOST
  category: operations
  purpose: Monthly marketing performance analysis and reporting standard
  version: 1.2
---

# Performance Reporting

Use this skill when preparing, auditing, or updating a recurring client performance report from platform exports, dashboards, screenshots, spreadsheets, API data, or prior-period reports.

This skill owns the **analysis and reporting logic**. It does not own universal slide design. When the deliverable is a presentation, apply `presentation-design` after this skill. Apply `stop-slop-2` to all prose.

The reporting standard is simple: show what happened, explain what the evidence supports, translate it into language the client can use, decide what changes next, and make uncertainty visible.

## 1. Required outcome

A BOOST performance report should let the client answer these questions quickly:

1. What changed this period?
2. Which results matter most for what we are trying to accomplish?
3. What do those results mean in practical terms?
4. What have we learned with enough evidence to act on?
5. What will BOOST do next?

A report is incomplete if it only reproduces platform metrics. It is also incomplete if the analysis is technically correct but the client needs marketing expertise to understand it.

## 2. Source hierarchy

Prefer structured data over visual transcription.

Use sources in this order when available:

1. API or native structured export
2. CSV / XLSX export
3. platform-generated PDF or report
4. dashboard screenshots
5. manually supplied figures

Screenshots can provide context or evidence, but do not manually transcribe dozens of metrics when a structured export exists.

For every source, record:

- platform / system
- account or property
- reporting period
- export or sync timestamp when known
- whether data is organic, paid, blended, or unclear
- any attribution or measurement caveat

Never silently combine sources with different periods or definitions.

## 3. Data normalization before analysis

Create one normalized working dataset before writing conclusions.

For each metric, store or determine:

- metric name
- raw value
- display value
- platform
- channel
- period
- previous comparable period
- absolute change when useful
- percentage change when valid
- source
- directionality
- confidence / caveat

### Directionality

Every KPI belongs to one of three classes:

- `higher_is_better` — e.g. qualified leads, revenue, conversions, reach when awareness is the objective
- `lower_is_better` — e.g. CPL, CPA, cost per booked appointment
- `contextual` — e.g. spend, frequency, follower count, impressions, CPM, posting volume

Do not assign positive or negative meaning from the mathematical sign alone.

Examples:

- CPL -22% can be positive.
- Revenue -22% is negative.
- Spend +22% is neither positive nor negative without outcome context.

## 4. Period discipline

Comparisons must use comparable periods.

Check:

- same date range length
- same source definition
- same attribution window where relevant
- same organic / paid scope
- same account or property

If the report period is July 1–31 but Ads data runs through August 9, label the Ads period clearly and do not present the mixed period as a July-only total.

If prior-period data is unavailable, do not manufacture a percentage change.

## 5. Reconciliation and QA before interpretation

Do not write analysis until the numbers pass a consistency check.

Verify:

- totals reconcile with component rows where they should
- acquired / lost / net follower math is consistent
- campaign totals match account totals when the scope is equivalent
- paid + organic equals total when the platform definitions permit that calculation
- currency is consistent
- decimals and thousands separators are consistent
- dates and month labels are correct throughout
- client-facing dates use the account / client timezone, not UTC by default
- metric names are not being used interchangeably when the platform treats them differently

If two valid sources disagree, document the conflict. Do not pick the number that makes the report look better.

## 6. Business objective and service-role context

Before choosing KPIs or depth, determine both:

1. **What the client is trying to accomplish.**
2. **What BOOST is actually responsible for in this account.**

The report must reflect the real engagement.

Examples of client objectives:

- direct acquisition
- awareness
- personal-brand growth
- community building
- authority / category presence
- reservations
- qualified conversations
- ecommerce revenue
- retention or repeat demand

Examples of service roles:

- core acquisition program
- organic content / brand building
- paid-media add-on or amplification
- full-funnel performance management
- reporting-only or advisory support

Do not make a secondary add-on look like the strategic center of the account because the platform provides more data.

If paid media is only used to amplify published content or support awareness, summarize the client-relevant outcome and keep campaign mechanics secondary. If paid media is the core growth service, deeper campaign and creative analysis may belong in the main report.

## 7. Business-first metric selection

Do not give every available metric equal visual weight.

Start with the client's objective and service scope.

Possible priority layers:

### Business outcome
Revenue, qualified leads, appointments, orders, booked calls, purchases, conversations, reservations.

### Acquisition efficiency
CPA, CPL, cost per conversation, ROAS, CAC, conversion rate.

### Demand / intent
Link clicks, profile actions, landing-page sessions, inquiries, saves, direct messages.

### Distribution
Reach, impressions, views, unique viewers.

### Community / brand-building signals
Follower quality, profile visits, saves, shares, recurring viewers, engagement, reactions, comments, non-follower reach.

A follower count should not become a hero KPI for a lead-generation client merely because the platform displays it prominently. Sales should not become the hero KPI for an account whose current job is personal-brand visibility or community.

If a downstream business metric is unavailable or outside BOOST's scope, state that limitation and use the closest defensible proxy.

## 8. Evidence levels

Every strategic statement should fit one of four evidence levels.

### FACT
Directly supported by the source data.

Example:
`Facebook link clicks increased 57.7% versus the previous comparable period.`

### PATTERN
A result that repeats across multiple pieces, periods, campaigns, or signals.

Example:
`Condition-specific educational posts ranked in the top three for reach for three consecutive months.`

Do not call one strong post a pattern.

### HYPOTHESIS
A plausible explanation or opportunity that still needs testing.

Example:
`The checklist structure may be improving retention; test the format again with a different topic.`

### DECISION
The action BOOST will take because of current evidence.

Example:
`Produce two additional checklist Reels and compare retention and profile actions against the account median.`

Use these distinctions internally even when the client-facing copy does not display all four labels explicitly.

For client-facing strategic sections, prefer this simplified taxonomy:

- **LECTURA BOOST** — what the evidence reasonably suggests
- **DECISIÓN** — what changes next
- **EN OBSERVACIÓN** — a signal worth monitoring that is not yet mature enough to call a conclusion

## 9. Correlation is not causation

Avoid causal language unless the source supports it.

Weak:
`The algorithm rewarded consistency.`

Better:
`Impressions increased 18.2% while publishing frequency increased 10%. One month is not enough to attribute the increase to cadence alone, so maintain the current rhythm and compare reach per post next month.`

Weak:
`The strategy is working.`

Better:
`Paid distribution increased reach and link clicks this month. Conversion quality is not available in the current dataset, so the next read should include downstream outcomes if that metric matters to the engagement.`

## 10. Benchmark discipline

Do not call a metric "good," "excellent," "competitive," "low," or "high for the market" without one of these:

- verified historical client benchmark
- verified external category benchmark
- explicit client target
- clearly labeled internal reference range

If no benchmark exists, compare against the client's own history or state the raw change.

## 11. Content analysis

Content reporting should move past ranking posts.

For each meaningful winner or loser, capture when available:

- content title / hook
- format
- topic
- publish date
- primary performance metric
- relevant secondary metrics
- thumbnail / visual artifact
- comparison point
- observed learning

Do not infer the winning mechanism from one creative without evidence.

Useful analysis asks:

- Which hooks recur among winners?
- Which topics drive reach versus action?
- Which formats produce stronger engagement efficiency?
- Which content attracts non-followers?
- Which creative produces the downstream result the account cares about?
- Are we seeing a repeatable pattern or one outlier?

### Strategic priority vs current performance

Performance and strategic importance are not the same thing.

A client may have an initiative that matters commercially even when the first content or campaign executions perform poorly. In that case:

1. state that the current execution underperformed,
2. preserve the business importance of the initiative,
3. diagnose what can change in framing, creative, offer communication, format, distribution or paid support,
4. recommend a better test before recommending that the initiative be dropped.

Do not remove or deprioritize a client-approved strategic priority solely because one organic post, one format, or one short test underperformed.

Weak:
`The student promotion ranked last, so remove it from the content plan.`

Better:
`The student offer underperformed in its first three organic executions. Because the offer remains a business priority, the next step is to strengthen the hook and value communication and support the new creative with paid amplification before deciding whether the initiative has low demand.`

If the client config marks an initiative as a strategic priority, include it in analysis and next-step logic even when it is not a performance winner.

## 12. Paid-media analysis

Match the depth of paid-media reporting to the role paid media plays in the account.

### Client-facing default

For most mixed-service reports, lead with:

- total spend
- primary result
- cost per result
- one to three key implications

Add reach, frequency, CTR, CPC or other diagnostics only when they help explain a decision.

### Technical detail

Campaign names, ad-set names, attribution windows, placement breakdowns, CPM, CPC, CTR, CBO mechanics and detailed ad-level tables belong in the core report only when:

- paid media is a primary service,
- the detail changes a decision,
- a material anomaly needs explanation, or
- the client is sophisticated enough to use the detail.

Otherwise move them to appendix / internal notes.

Do not recommend scaling because CPL is low if lead quality or downstream performance is unknown.

Do not recommend changing a campaign solely because frequency increased; interpret frequency alongside cost, results, audience size, and creative fatigue signals.

### Translation rule

Write the business meaning before the platform mechanic.

Prefer:
`265 conversations came from ads at $27.79 each, while cost improved 6.7%. Results remain efficient, but most conversations depend on one long-running creative, so BOOST should refresh the creative bank before performance weakens.`

Over:
`CBO concentrated delivery in BULK 28 OCT with frequency 3.01 and 7-day click / 1-day view attribution.`

The technical version may still exist in notes or appendix.

## 13. Strategic reading format

For each important development, think in this sequence:

### RESULT
What happened?

### READING
What does the evidence reasonably suggest?

### DECISION
What changes next?

Example:

**Result:** Instagram reach increased 11.6%, while profile visits fell 38.3%.

**Reading:** Distribution improved, but a smaller share of reached users moved into profile exploration.

**Decision:** Test stronger profile-directed CTAs on two Reels and measure profile visits per 1,000 reached accounts.

This is the core BOOST reporting voice: analytical, specific, calm, useful, and understandable without marketing expertise.

## 14. Client-comprehension layer

The final report is a translation layer between platform data and the client.

Assume the client is smart about their business but may not know marketing terminology.

### Write in this order

1. business meaning
2. plain-language metric explanation
3. technical label only if useful

Examples:

Prefer:
`Costo por conversación: $27.79`

Over:
`CPR: $27.79`

Prefer:
`Meta mostró el contenido a la misma audiencia unas 3 veces en promedio.`

Over:
`Frecuencia: 3.01`

Prefer:
`Los clics al enlace subieron 67%, una señal de que más personas pasaron de ver el contenido a buscar más información.`

Over:
`Link clicks +66.8%.`

### Jargon rules

- Spell out a technical term before using an acronym.
- Do not introduce an acronym if it appears only once.
- Keep attribution mechanics, campaign taxonomy and platform setup details out of the client narrative unless they change the decision.
- Keep enough detail to make the analysis credible; simplify wording, not evidence.

## 15. Executive summary

The executive summary is a decision layer, not a duplicate dashboard.

Include only the metrics and shifts that matter most.

A strong summary usually contains:

- 3–5 priority KPIs
- 2–4 meaningful positive developments
- 1–3 areas requiring attention
- one short overall read when useful

Do not force equal numbers of positive and negative points.

Do not hide poor performance behind neutral language.

## 16. Recommendations

Every recommendation must trace to evidence.

A recommendation should contain:

- action
- reason / evidence
- measurement plan when useful

Prefer specific tests over generic advice.

Weak:
`Post more Reels.`

Better:
`Publish two additional condition-specific Reels using the checklist structure; compare saves, profile visits and reach against the account median.`

Do not prescribe arbitrary schedules, budgets, formats, or audience claims unless the source supports them or they are explicitly labeled as a test.

For client-facing next moves, keep each action scannable. Put technical implementation detail in speaker notes, appendix or internal analysis when it is not needed for client approval.

When a strategic priority underperforms, recommendations should distinguish between **weak execution** and **weak business importance**. Improve the test before dropping the priority unless the client has changed direction or the evidence is strong enough to support that decision.

## 17. What not to do

Do not:

- invent missing metrics
- invent benchmarks
- invent historical highs
- call one result a trend
- turn correlation into causation
- use platform jargon as analysis
- make the most data-rich channel the center of the report when it is only an add-on service
- recommend tactics only to make the report feel comprehensive
- include demographics that do not affect a decision
- show every exported metric
- use the same report structure because the previous client had it
- write six recommendations of equal priority when only two matter
- soften material declines until they become meaningless
- overwhelm the client with campaign / ad-set taxonomy that only the agency needs
- treat a strategic initiative as unimportant only because its first execution performed poorly

## 18. Strategic memory

When prior reports or account notes are available, maintain a lightweight account memory.

Track:

- previous hypotheses
- tests launched
- decisions made
- recurring winners
- recurring underperformers
- strategic priorities
- known benchmarks
- unresolved questions
- measurement gaps

Use history to distinguish a one-month observation from a repeatable learning.

Example:

Month 1: checklist Reel wins → HYPOTHESIS
Month 2: checklist wins again → emerging PATTERN
Month 3: checklist wins across two topics → stronger PATTERN / possible content system decision

## 19. Report architecture

Report sections are a menu, not a fixed slide count.

Possible modules:

- Cover
- Executive Summary
- Business / outcome performance
- Platform performance
- Paid media
- Campaign comparison
- Content winners
- Content pattern analysis
- Audience / geography when decision-relevant
- Strategic read
- What changed
- What we're learning
- Next moves
- What we're watching
- Appendix / source notes

Use only the modules the account needs.

### Core report vs appendix

For a normal monthly report, aim for roughly **8–10 core slides** when the content supports it, plus appendix as needed. This is a pacing target, not a quota.

Move detail to appendix when it proves the analysis but is not required to understand the decision. Common appendix material:

- full content rankings
- detailed campaign / ad-set tables
- attribution notes
- source methodology
- secondary platform diagnostics

A longer report is appropriate when the reporting period is extended, multiple missed months are combined, or the account genuinely needs more evidence.

Avoid a fixed rule such as "Facebook is always slide 3" or "every report has 9 slides."

## 20. Language standard

Apply `stop-slop-2`.

The report should sound like the agency reviewed the account, not like software generated commentary.

Prefer:

- direct statements
- complete thoughts
- specific numbers
- measured interpretation
- concise recommendations
- plain-language explanations before jargon

Avoid:

- "The algorithm is loving this"
- "This proves the strategy is working"
- "Huge opportunity"
- "Double down" unless the wording is genuinely the clearest choice
- empty celebration
- dramatic one-liners
- generic AI summaries
- acronyms that make the client decode the report

Do not repeat the metric and then restate it in different words without adding interpretation.

## 21. Presentation handoff

When the final output is a deck:

1. Complete data QA and analysis first.
2. Build the report narrative and select modules.
3. Apply the client-comprehension layer.
4. Apply `stop-slop-2` to copy.
5. Apply `presentation-design` for slide strategy, visual hero, charts, layout variation, rhythm, and art direction.
6. Apply the current approved BOOST Reporting Design System or client-specific reporting skin.
7. Move nonessential technical detail into appendix or speaker notes.

The presentation should be final-quality without requiring Canva cleanup as a normal workflow step.

## 22. Final QA checklist

Before delivery, verify:

### Data
- [ ] reporting period is correct everywhere
- [ ] previous-period comparisons are comparable
- [ ] totals reconcile
- [ ] currency is consistent
- [ ] paid / organic scope is clear
- [ ] directionality is interpreted correctly
- [ ] no metric was invented
- [ ] client-facing dates use the correct local timezone

### Analysis
- [ ] every conclusion has evidence
- [ ] single observations are not labeled patterns
- [ ] causal language is justified or removed
- [ ] benchmarks are sourced
- [ ] recommendations trace to evidence
- [ ] uncertainties are visible
- [ ] reporting depth matches the actual service role
- [ ] client-approved strategic priorities remain visible even when current execution underperforms

### Client comprehension
- [ ] a smart non-marketer can understand the core report without explanation
- [ ] technical terms are translated or moved to appendix
- [ ] the report states business meaning before platform mechanics
- [ ] no acronym appears only to make the report sound technical
- [ ] next moves are scannable and decision-oriented

### Client value
- [ ] the account's real objective is easy to identify
- [ ] the report explains more than the source dashboards already do
- [ ] the client can see what BOOST will change next
- [ ] weak or irrelevant metrics were removed

### Presentation
- [ ] `presentation-design` was applied
- [ ] the deck uses the approved reporting visual system
- [ ] no repeated generic slide template dominates the deck
- [ ] charts answer one question each
- [ ] top content uses real thumbnails when available
- [ ] the deck reads clearly at laptop size
- [ ] draft-only labels are removed before client delivery
- [ ] no Canva cleanup is required for basic consistency

A report is finished when the numbers are correct, the interpretation is defensible, the language is understandable, and the next decision is clear.
