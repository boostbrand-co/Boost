# BOOST Studio OS — Skills Catalog

This is the human-readable index of reusable skills maintained by BOOST.

Machine-readable skill files live under `.claude/skills/<skill-name>/SKILL.md`.

## Status language

- **Core** — broad, reusable, expected to be used often
- **Specialized** — extension used only in a narrower context
- **Emerging** — useful but still likely to evolve materially

## Strategy

### `brand-strategy` — Core
Defines how to build or rebuild a brand strategy from evidence, audience, offer, market context, positioning, differentiation, and business goals.

### `offer-strategy` — Core
Defines how to structure offers, packages, ladders, value architecture, fit criteria, and buyer logic.

### `content-strategy` — Core
Defines how to turn business goals, audience needs, proof, formats, and constraints into a useful content system.

### `growth-strategy` — Core
Defines how to structure acquisition, channels, funnel logic, measurement, experimentation, and scalable growth priorities.

## Research

### `research-audit` — Core
Defines how to audit a business, brand, market, customer, competitor set, website, or content ecosystem without inventing facts or stopping at surface-level observations.

## Writing & communication

### `verbal-identity` — Core
Defines brand voice, messaging hierarchy, terminology, language rules, audience adaptation, and practical verbal-system use.

### `stop-slop-2` — Core
BOOST's universal human-writing standard. It combines Hardik Pandya's Stop Slop framework with professional application rules, speaker-voice preservation, and a dedicated Message Mode for Slack, WhatsApp, email, DMs, texts, replies, and other interpersonal communication.

### `client-communications` — Core
Defines how BOOST handles client-facing decisions, updates, requests, explanations, follow-ups, scope, recommendations, and boundaries. It uses `stop-slop-2` in Message Mode for the writing itself.

## Design & experience

### `presentation-design` — Core
Universal presentation standard for proposals, sales decks, brand decks, audits, workshops, internal decks, reports, keynotes, case-study decks, and investor presentations.

Key standard: visually dense without becoming text-dense, narrative-first, one visual hero per slide, varied layout families, strong thumbnail rhythm, business-illustrating photography, real diagrams, and no meaningless whitespace.

### `design-system-direction` — Core
Defines how to translate strategy into a visual system with hierarchy, typography, color, imagery, layout logic, reusable components, and art direction.

### `web-experience` — Core
Defines how to structure and critique websites around buyer logic, offer clarity, proof, conversion, content hierarchy, UX, brand expression, and credible interaction patterns.

## Specialized extensions

### `investor-grade-presentations` — Specialized
Use only for fundraising, investor, financing, board-capital, or diligence contexts.

Always apply `presentation-design` first, then add investor-specific requirements around thesis, traction, economics, validation, ask, risk, and modeled-vs-achieved evidence discipline.

## Recommended skill chains

### Brand rebuild

`research-audit → brand-strategy → verbal-identity → design-system-direction`

### Website strategy / redesign

`research-audit → offer-strategy → brand-strategy → verbal-identity → design-system-direction → web-experience`

### Growth / GTM

`research-audit → offer-strategy → growth-strategy`

### Content system

`research-audit → brand-strategy → verbal-identity → content-strategy`

### Presentation

Relevant strategic context → `presentation-design`

If investor-facing:

Relevant strategic context → `presentation-design → investor-grade-presentations`

### Writing / editing

`stop-slop-2`

For client communication:

`client-communications → stop-slop-2` (Message Mode)

## Governance

When a project creates a repeatable lesson that materially improves quality:

1. identify the skill it belongs to
2. update that skill instead of creating a duplicate
3. increment the skill version if methodology changed materially
4. add a new skill only when the workflow is meaningfully distinct

Do not create client-specific skills unless the methodology is reusable across clients.
