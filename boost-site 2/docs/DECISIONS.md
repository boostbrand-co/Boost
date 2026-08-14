# DECISIONS

Every significant choice made during this build, with the evidence behind it. Where research
findings conflicted, the conflict is stated and the choice is explained.

## Positioning

**D1. The core position is verifiability, not capability.**
Line: "Marketing you can actually watch work."
Evidence: the whitespace audit tested 30 hypotheses against roughly 130 providers. Five collapsed
on contact (published pricing, elastic capacity, capability transfer, hybrid models, human-judgment
language). What survived with documented zero occupants were mechanisms, not claims: numeric client
caps, decision logs, client-owned creative learning records, predetermined failure protocols,
offboarding guarantees, AI governance, and switcher specialisation. The buyer research independently
found that buyers price signals by what they cost the sender. So the site is built on mechanisms
that are expensive to fake.

**D2. Banned phrases were removed from the brand layer, not just the homepage.**
"Full-service", "creative growth agency", "AI-powered", "results-driven", "data-driven", "growth
partner", "extension of your team", "creative + performance" and "scale" do not carry any page.
The saturation map rated the first eight EXTREME to HIGH. Where a term is the clearest available
description (for example "paid media"), it is used descriptively inside a service page.

**D3. Cross-border is a flanking position, not the lead.**
The sizing report scored the US-Mexico lane highest on competitive rarity (60/70) but rated demand 7,
not 10, and flagged a 2025 softening in Hispanic consumer spend plus a caution that "bilingual" alone
is a decaying asset as AI translation improves. So it gets a full situation page, a homepage section
and a service thread, but it does not carry the brand. The framing is native execution and operating
leverage, never translation.

**D4. Judgment over output is expressed structurally.**
The AI threat map classified content, social posting, reporting, basic SEO, small web builds and
media-buying execution as commoditising, and creative strategy, measurement architecture, allocation
judgment and accountability as appreciating. The services architecture reflects that: strategy and
measurement bracket the loop, production sits inside it as a supporting discipline, and creative
strategy is separated from creative production on its own page because they are different jobs.

## Architecture

**D5. Situation-first navigation, industry-second.**
The architecture report found the industry or audience axis was the single biggest differentiator
between strong and thin agency architectures, but the buyer research found buyers self-identify by
situation. Resolution: /who-we-help is organised by situation (5 pages) and industry filtering lives
on /work where it belongs. COLLINS's outcome-named Programs were the model.

**D6. Two pages nobody else builds got built first.**
Across 79 agency sites, two addressed agency-replacers and two addressed in-house teams. Replacing
an agency is simultaneously the most common documented purchase trigger. /who-we-help/replacing-an-agency
carries a working ownership checklist; /who-we-help/in-house-team carries the capability split map.

**D7. /how-boost-works is a product page, not an "approach" page.**
The invisible-work research found that the strongest pattern across 80 sites is a real artifact with a
precise number attached, and that the weakest is a named methodology with nothing behind it. Every
phase of the loop therefore produces a named artifact, and three of those artifacts are rendered on
the site rather than described.

**D8. A control page exists because the outcome page creates anxiety.**
PhoneIQ pairs an outcome page with a governance page. /how-boost-works/client-control is that page:
ownership, AI, response standards, scope changes, what happens on a miss, and offboarding.

## Proof and honesty

**D9. Real client metrics were migrated, never invented.**
All 13 case studies come from boostbrand.co/portfolio. Every metric renders its source string, and
every case renders a `needs` list of what is still required (date ranges, baselines, spend context,
naming approval). This is unusual and deliberate: the buyer research found case studies are
structurally distrusted and that visible verification is what restores them.

**D10. Demonstration data is labelled everywhere it appears.**
The scenario demo, creative test table, sample report and Creative Memory records are illustrative.
They render inside an ArtifactFrame or with a DemoBadge, and the homepage caption points readers to
the real numbers in /work.

**D11. Team data is placeholder and says so.**
No names, photos or credentials were available, so none were invented. Six role slots are published
with what each owns, plus a visible notice. This is the site's largest content gap and the highest
priority to close, because "who will actually do the work" was the single most-asked buyer question.

**D12. Pricing is a marked placeholder, not a hidden number.**
Every commercial page renders `[INVESTMENT RANGE TO CONFIRM]` (36 occurrences). The research on
published pricing was genuinely split: buyers overwhelmingly want a number, while several agencies
that scaled upmarket removed theirs. The chosen resolution is a published band or floor once Ana
confirms it, plus the fee-separate-from-media-spend commitment which is already live in copy.

**D13. Legal pages carry a LEGAL REVIEW REQUIRED banner and are noindexed.**

## Build

**D14. Fonts are self-hosted.**
next/font/google was replaced with @fontsource-variable packages. This removes a third-party origin
from the critical path, improves LCP, and makes the build reproducible offline.

**D15. /work stays statically rendered.**
Filters hydrate from the URL after mount rather than through server searchParams, so all 13 cases
appear in the prerendered HTML for crawlers, AI readers and no-JS visitors while deep links still work.
The architecture research found JS-blank pages return nothing to LLM crawlers, which now matters
commercially because buyers shortlist through AI assistants.

**D16. Zero em dashes in shipped output.** Verified against the built HTML.


## 2026-08-14, decisions from the Drive asset audit

**Publish transcriptions, not screenshot images.** The screenshot binaries could not be transferred
in the build session, and a text reading is not a clearance for publishing an image. Transcribing the
readout with the source file named is more useful than a screenshot dump anyway: it forces the
missing context, the currency and the date range to be stated out loud instead of hidden in a
picture. `REDACTION_REQUIRED.md` holds the checklist for when images do go live.

**Attribute a screenshot to a client only on exact figure identity.** No screenshot in the set prints
a client name. Matching on plausibility would have produced seven more artifacts and at least one
wrong one. Five cases got evidence, eight did not, and that is the honest split.

**Publish the held-back list.** `/work` carries a section naming the evidence that was reviewed and
not used, with the reason. A site arguing that agencies hide their misses cannot hide its own.

**Remove the 45x to 67x figure from the homepage lead position.** No evidence of any kind supports it.
The case moved from HIGH to LOW strength. It stays on the site, with what it needs listed publicly,
because deleting it would be a quieter kind of dishonesty than keeping it with the caveat attached.

**Correct rather than quietly drop the mislabelled metric.** The Encanto Colombiano 5.65 figure was
published as a cost per click and is a cost per messaging conversation. The correction is written
into the case data and stated on the proof artifact.

**Name ten people, publish no biographies.** Names and roles came from the source files and are
verified. Experience, employers and credentials are not confirmed, so none is published and none was
invented. What each seat owns is a role definition, flagged as unconfirmed until Ana signs it off.

**No scheduler, no phone number, until real ones exist.** The growth plan flow ends in three
handoffs. Email works. The calendar and WhatsApp handoffs read from environment variables and state
plainly that they are not connected, rather than linking to a placeholder that looks real.

**The recommendation is a routing rule and says so.** The summary step points at one of the four
engagements that exist, states in the interface that it has not analysed anything, and can be wrong.
Presenting a five-question form as a diagnosis would have been the exact behaviour the positioning
argues against.
