# MISSING CONTENT

Ordered by commercial impact. Nothing in this list was invented to fill a gap.

Last reviewed 2026-08-14 against the Google Drive asset audit. See `ASSET_INVENTORY.md`,
`PROOF_INVENTORY.md` and `REDACTION_REQUIRED.md`.

## 1. Team · PARTIALLY RESOLVED 2026-08-14
**Resolved:** all ten people are named and published with their real roles, taken verbatim from the
Drive portrait filenames. Victor Ramirez is published as Videographer, corrected from the
"Camarographer" spelling in the source file on Ana's confirmation. Placeholder role slots are gone.
Files: `data/team.ts`, `/about/team`, `/about`, homepage team section, `components/cards/cards.tsx`.

**Still required:**
- The ten portrait images. They exist in Drive and each Drive file ID is recorded per person in
  `data/team.ts` and in `ASSET_INVENTORY.md`. They could not be transferred in the build session
  because each file is over 1 MB. Export, resize to 1000 px short edge, save as
  `/public/team/<slug>.webp`, set `image` on the record, then swap the initials block in
  `components/cards/cards.tsx` for `next/image`.
- Confirmation of the ownership line for each person. What each seat owns is currently a role
  definition written from how BOOST runs an account, flagged by `ownershipConfirmed: false`.
- A decision on whether to publish background and experience at all. Nothing is published now
  because nothing is confirmed, and none of it was invented.
Photography direction: consistent framing, neutral backdrop, working environment rather than studio
portraits. The design reserves a 4:5 slot per person.

## 1b. Scheduling link and WhatsApp number · BLOCKS THE END OF THE FUNNEL
`/build-my-growth-plan` ends in three handoffs. Email works today. The other two are environment
variables with no value set, and the interface says so rather than linking anywhere:
- `NEXT_PUBLIC_BOOST_CALENDAR_URL`, the real booking link. No third-party scheduler is embedded or
  opened until this exists.
- `NEXT_PUBLIC_BOOST_WHATSAPP`, the business number in international format, digits only. The
  pre-filled handoff message is already built and visible to the user before it sends.
See `.env.example`.

## 2. Pricing · BLOCKS THE ENGAGEMENTS PAGE
36 instances of `[INVESTMENT RANGE TO CONFIRM]` across the site. Decide at minimum:
- Second Opinion: fixed fee
- Core Partnership: monthly floor or band
- Variable Capacity: unit of capacity and its price
- Launch Sprint: project range
The copy already commits to stating management fees separately from media spend. Confirm that is
accurate before publishing.

## 3. Client naming approval · BLOCKS CASE STUDIES
All 13 names are already public on boostbrand.co, but a case study is a different use. Written
approval needed per client, plus permission for any logo use. Every case currently carries a
pending-approval note.

## 4. Legal review · BLOCKS /privacy AND /terms
Both pages are scaffolding with LEGAL REVIEW REQUIRED banners and are noindexed. Also needs review:
the ownership and offboarding commitments on `/how-boost-works/client-control` must be reflected in
the actual signed agreement before they are published as promises.

## 5. Scheduling link
`/build-my-growth-plan` step 4 has a marked calendar slot. Provide the scheduling URL and confirm
the meeting length, who the prospect meets, and the reply-time commitment currently written as one
business day.

## 6. Redacted real report
`/how-boost-works/reporting` shows demonstration data and offers a redacted real report on request.
Produce one, with a client's written permission, to convert that from an offer into an artifact.

## 7. Company facts
Founding year, legal entity name, registered addresses, headcount, and any platform partner status
(Google Partner, Meta Business Partner). Currently marked with placeholder notes on `/about`.

## 8. Analytics and tracking IDs
No IDs installed. See `ANALYTICS_PLAN.md`.

## 9. Images
The site currently ships zero photographic assets by design, so nothing is fake. Needed:
- Team photographs (6)
- One Open Graph image (1200x630) per major section, or one brand default
- Optional: redacted screenshots of real dashboards for the reporting page

## 10. Spanish version
The build is English-only and structured so a locale layer can be added. Do not machine-translate
and publish. The cross-border positioning depends on native execution, and a translated site would
contradict the argument the site makes.
