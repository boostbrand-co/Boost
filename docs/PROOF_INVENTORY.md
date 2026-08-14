# PROOF INVENTORY

Evidence review of 36 platform screenshots in Google Drive, 2026-08-14.

**Method.** Each file was opened and read individually. Only what is legible in the file is recorded.
A screenshot is associated with a client **only** where a figure in it is identical to a figure BOOST
already published for that client. No screenshot in the set prints a client name, so exact figure
identity is the only evidence available for attribution.

**What was never inferred:** client identity, date ranges beyond what is printed, currency,
attribution model, conversion window, baseline, or spend context.

**Published:** 7 artifacts across 5 case studies, transcribed on the case pages.
**Held back:** 29 files. Reasons below.

---

## PUBLISHED

Rendered by `components/system/proof.tsx` from `data/proof.ts`. Each carries the three required
answers: what the number tells us, what BOOST would decide, what happens next.

| # | Case | Figure | Source file | Basis for the match | Confidence |
|---|---|---|---|---|---|
| 1 | kto-partes | 12,677 messaging conversations, 439 each, 5,569,918 spend | Meta Ads, 3.29.18 PM | 12,677 is the exact published figure; spend agrees | HIGH |
| 2 | kto-partes | 674,540 two second video plays, 1,748,368 spend | Meta Ads, 3.29.13 PM | 674,540 corresponds to the published 674K views | HIGH |
| 3 | encanto-colombiano | 497 conversations at 5.65, 2,809.52 spend | Meta Ads, 3.28.51 PM | Both 497 and 5.65 already published | HIGH |
| 4 | encanto-colombiano | 7,492 Instagram profile visits at 0.16 | Meta Ads, 3.28.56 PM | 7,492 is the exact published figure | HIGH |
| 5 | camino-de-san-jose | 230 conversations at 4.61, 1,060.09 spend | Meta Ads, 3.28.42 PM | 230 is the exact published figure | MEDIUM |
| 6 | neurovita | 576,739.30 MXN total sales, 945 orders, 1 Sep 2025 to 31 May 2026 | Ecommerce, 1.31.23 PM | Figure, currency and nine month window all printed and all match | HIGH |
| 7 | caviar-de-monte | 560,563.53 total sales, 394 orders, 1 Jun 2025 to 1 Mar 2026 | Ecommerce, 1.42.46 PM | 560,563.53 corresponds to the published 560K | MEDIUM |

Artifact 6 is the strongest evidence in the entire set. It is the only file that prints its own
currency code **and** its own date range **and** matches a published figure exactly.

---

## HELD BACK, WITH REASONS

Published on `/work` as well as here, because an agency that only shows the evidence that worked is
doing the thing this site argues against.

### Conflicts found between a screenshot and a published claim

| Screenshot | Published claim | The conflict |
|---|---|---|
| 801,855.28 MXN total sales, window 1 Jan 2025 to 31 May 2026 | Equilibrium, 801K MXN in six months | The report prints 17 months, not six |
| 928,514.04 USD gross / 747,391.44 USD total, Jan 2022 to Jun 2026 | Gold Monkeys, 938K USD | Neither figure equals 938K, and the window covers four and a half years |
| 26,249,297.00 gross, 19,907 orders, Jan 2024 to Jun 2026 | Dr. Mon, 51.2M MXN and 18,907 orders | Order count is within a thousand, revenue is not close. A resemblance, not a match |
| 560,563.53 total sales, window 1 Jun 2025 to 1 Mar 2026 | Caviar de Monte, 560K MXN over ten months | The report prints nine months. Published as artifact 7 with the conflict stated on the page |
| 497 conversations at 5.65 | Encanto Colombiano, 5.65 USD cost per click | The platform calls it a cost per messaging conversation started, not a cost per click. Label needs correcting |

### Unmatched, cannot be attributed without guessing

| Screenshot | Figures | Why not published |
|---|---|---|
| Meta Ads, 3.29.31 PM | 2,301 conversations at 10.16, 23,380.72 spend | Possibly Paola García, whose published figure is roughly 10 MXN per conversation. The count is not published and no currency appears. Not treated as a match |
| Meta Ads, 3.29.25 PM | 12,442 landing page views at 84, 1,042,471 spend | No corresponding published figure |
| Meta Ads, 3.29.07 PM | 782 conversations at 10.42, 8,150.57 spend | No corresponding published figure |
| Meta Ads, 3.29.01 PM | 1,584 conversations at 32.24, 51,062.67 spend | No corresponding published figure |
| Meta Ads, 3.30.00 PM | 73 conversations at 19.56, 1,427.88 spend | No corresponding published figure |
| Meta Ads, 3.29.46 PM | 396 conversations at 6,541 each, 2,590,081 spend | No corresponding published figure. High misread risk: the dot in 6.541 is a thousands separator |
| Meta Ads, 3.29.41 PM | 929,078 video plays at 2, 1,764,000 spend | Not equal to the 1.8M views published for Klean Vet. Close is not the same as equal |
| Statistics root, 6.21.49 PM | 6,376 conversations at 5,980 each, 38,129,433 spend | No corresponding published figure |
| Ecommerce, 1.32.14 PM | 24,801,187.00 gross, 14,659 orders, 2020 to 2026 | No corresponding published figure at all |
| Statistics root, 3 further files | Duplicates and crops of files already listed | Same datasets, no new information |

### Unreadable

Thirteen files in `Statistics / SEO`. Every one returned empty when opened. Nothing is known about
them beyond filename, file size and capture time, which was 2026-06-10 between 3:31:48 PM and
3:33:08 PM. Capture time is not a reporting period and must never be used as one.

To unblock: re-export the files, or pull the numbers from Search Console and Business Profile
directly. The second option is better anyway, because a platform export carries an exact date range
and a screenshot does not.

### Explicitly withheld on instruction

The 45x to 67x return on ad spend figure published for Restaurante Espíritu. No screenshot, export or
platform record in the reviewed set supports any part of it: no spend context, no attribution model,
no window. On 2026-08-14 this case was downgraded from HIGH to LOW strength and removed from the
homepage featured position it previously held. It is not quoted to prospects until the platform
export, the media spend and the attribution setting are supplied.

---

## Cross-cutting findings

**Two currencies are present in the ads set and neither is labelled.** The screenshots split into two
number-formatting families: one using dot thousands with comma decimals at small magnitudes, one
using dot thousands with no decimals at large magnitudes. That is at least two account currencies.
Spend must never be summed across these files.

**One screenshot has a different axis start.** The 230-conversation file runs from 9 Jun 2025 while
the rest run from 1 Jun 2025. Do not present them as covering the same period.

**No ads screenshot contains a revenue figure.** Every efficiency number in the set is a cost per
action where the action is a conversation, a landing page view, a profile visit or a two second video
play. None of them is a sale.

**Reach metrics are not results.** Two files measure two second video plays and one measures profile
visits. These are published on the site only alongside a conversation figure, explicitly labelled as
reach, precisely to show the difference.

**Screenshots print an axis, not a reporting period.** Ten of the ads files show a chart axis running
1 Jun 2025 to 9 Jun 2026 but do not print the selected date range. The axis is reported as an axis.

**These are text readings, not pixel inspections.** A logo, browser tab title, URL bar or account
switcher could exist in an image without appearing in the reading. See `REDACTION_REQUIRED.md`.

---

## What would move items from held back to published

1. The account name behind each of the seven unmatched ads screenshots.
2. Account currency settings for every account represented.
3. Re-exported or re-captured SEO screenshots.
4. Reports re-filtered to the engagement window for Equilibrium, Gold Monkeys and Dr. Mon.
5. Written client approval to name, which is separately outstanding on all 13 cases.
6. Media spend for the two ecommerce artifacts, so revenue can be read as a return.
