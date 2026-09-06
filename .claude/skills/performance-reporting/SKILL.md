---
name: performance-reporting
description: Turn raw monthly marketing data into accurate, evidence-led client reporting with BOOST-style analysis, recommendations, QA, and strategic memory.
metadata:
  owner: BOOST
  category: operations
  purpose: Monthly marketing performance analysis and reporting standard
  version: 1.0
---

# Performance Reporting

Use this skill when preparing, auditing, or updating a recurring client performance report from platform exports, dashboards, screenshots, spreadsheets, API data, or prior-period reports.

This skill owns the **analysis and reporting logic**. It does not own universal slide design. When the deliverable is a presentation, apply `presentation-design` after this skill. Apply `stop-slop-2` to all prose.

The reporting standard is simple: show what happened, explain what the evidence supports, decide what changes next, and make uncertainty visible.

## 1. Required outcome

A BOOST performance report should let the client answer five questions quickly:

1. What changed this period?
2. Which results matter most to the business?
3. What appears to be driving those results?
4. What have we learned with enough evidence to act on?
5. What will BOOST do next?

A report is incomplete if it only reproduces platform metrics.

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
- metric names are not being used interchangeably when the platform treats them differently

If two valid sources disagree, document the conflict. Do not pick the number that makes the report look better.

## 6. Business-first metric selection

Do not give every available metric equal visual weight.

Start with the client's business objective and reporting scope.

Possible priority layers:

### Business outcome
Revenue, qualified leads, appointments, orders, booked calls, purchases, conversations, reservations.

### Acquisition efficiency
CPA, CPL, cost per conversation, ROAS, CAC, conversion rate.

### Demand / intent
Link clicks, profile actions, landing-page sessions, inquiries, saves, direct messages.

### Distribution
Reach, impressions, views, unique viewers.

### Community
Follower growth, engagement, reactions, comments.

A follower count should not become a hero KPI for a lead-generation client merely because the platform displays it prominently.

If a downstream business metric is unavailable, state that limitation and use the closest defensible proxy.

## 7. Evidence levels

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

Use these distinctions internally even when the client-facing copy does not display the labels explicitly.

## 8. Correlation is not causation

Avoid causal language unless the source supports it.

Weak:
`The algorithm rewarded consistency.`

Better:
`Impressions increased 18.2% while publishing frequency increased 10%. One month is not enough to attribute the increase to cadence alone, so maintain the current rhythm and compare reach per post next month.`

Weak:
`The strategy is working.`

Better:
`Paid distribution increased reach and link clicks this month. Conversion quality is not available in the current dataset, so the next read should include downstream outcomes.`

## 9. Benchmark discipline

Do not call a metric "good," "excellent," "competitive," "low," or "high for the market" without one of these:

- verified historical client benchmark
- verified external category benchmark
- explicit client target
- clearly labeled internal reference range

If no benchmark exists, compare against the client's own history or state the raw change.

## 10. Content analysis

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
- Which creative produces the downstream result the business cares about?
- Are we seeing a repeatable pattern or one outlier?

## 11. Paid-media analysis

When paid data is available, prioritize:

- spend
- primary result
- cost per result
- conversion / lead quality signal when available
- CTR / CPC where diagnostically useful
- frequency
- campaign or ad-set comparison
- creative performance

Do not recommend scaling because CPL is low if lead quality or downstream performance is unknown.

Do not recommend changing a campaign solely because frequency increased; interpret frequency alongside cost, results, audience size, and creative fatigue signals.

## 12. Strategic reading format

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

This is the core BOOST reporting voice: analytical, specific, calm, and useful.

## 13. Executive summary

The executive summary is a decision layer, not a duplicate dashboard.

Include only the metrics and shifts that matter most.

A strong summary usually contains:

- 3–5 priority KPIs
- 2–4 meaningful positive developments
- 1–3 areas requiring attention
- one short overall read when useful

Do not force equal numbers of positive and negative points.

Do not hide poor performance behind neutral language.

## 14. Recommendations

Every recommendation must trace to evidence.

A recommendation should contain:

- action
- reason / evidence
- measurement plan when useful

Prefer specific tests over generic advice.

Weak:
`Post more Reels.`

Better:
`Publish two additional condition-specific Reels using the checklist structure; compare 3-second hold, completion, saves, and profile visits against the July Reel median.`

Do not prescribe arbitrary schedules, budgets, formats, or audience claims unless the source supports them or they are explicitly labeled as a test.

## 15. What not to do

Do not:

- invent missing metrics
- invent benchmarks
- invent historical highs
- call one result a trend
- turn correlation into causation
- use platform jargon as analysis
- recommend tactics only to make the report feel comprehensive
- include demographics that do not affect a decision
- show every exported metric
- use the same report structure because the previous client had it
- write six recommendations of equal priority when only two matter
- soften material declines until they become meaningless

## 16. Strategic memory

When prior reports or account notes are available, maintain a lightweight account memory.

Track:

- previous hypotheses
- tests launched
- decisions made
- recurring winners
- recurring underperformers
- known benchmarks
- unresolved questions
- measurement gaps

Use history to distinguish a one-month observation from a repeatable learning.

Example:

Month 1: checklist Reel wins → HYPOTHESIS
Month 2: checklist wins again → emerging PATTERN
Month 3: checklist wins across two topics → stronger PATTERN / possible content system decision

## 17. Report architecture

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

Avoid a fixed rule such as "Facebook is always slide 3" or "every report has 9 slides."

## 18. Language standard

Apply `stop-slop-2`.

The report should sound like the agency reviewed the account, not like software generated commentary.

Prefer:

- direct statements
- complete thoughts
- specific numbers
- measured interpretation
- concise recommendations

Avoid:

- "The algorithm is loving this"
- "This proves the strategy is working"
- "Huge opportunity"
- "Double down" unless the wording is genuinely the clearest choice
- empty celebration
- dramatic one-liners
- generic AI summaries

Do not repeat the metric and then restate it in different words without adding interpretation.

## 19. Presentation handoff

When the final output is a deck:

1. Complete data QA and analysis first.
2. Build the report narrative and select modules.
3. Apply `stop-slop-2` to copy.
4. Apply `presentation-design` for slide strategy, visual hero, charts, layout variation, rhythm, and art direction.
5. Apply the current approved BOOST Reporting Design System or client-specific reporting skin.

The presentation should be final-quality without requiring Canva cleanup as a normal workflow step.

## 20. Final QA checklist

Before delivery, verify:

### Data
- [ ] reporting period is correct everywhere
- [ ] previous-period comparisons are comparable
- [ ] totals reconcile
- [ ] currency is consistent
- [ ] paid / organic scope is clear
- [ ] directionality is interpreted correctly
- [ ] no metric was invented

### Analysis
- [ ] every conclusion has evidence
- [ ] single observations are not labeled patterns
- [ ] causal language is justified or removed
- [ ] benchmarks are sourced
- [ ] recommendations trace to evidence
- [ ] uncertainties are visible

### Client value
- [ ] the most important business outcome is easy to find
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
- [ ] no Canva cleanup is required for basic consistency

A report is finished when the numbers are correct, the interpretation is defensible, and the next decision is clear.