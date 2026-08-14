# REDACTION REQUIRED

Rules and open items for publishing platform evidence. Audit date 2026-08-14.

## The rule this follows

Redact identity. Do not redact the number.

A blurred metric is not proof of anything, and a buyer who sees one assumes the worst. The point of
publishing evidence is that someone can check it, so enough interface context has to survive that a
reader can tell what platform it came from and what the number is measuring.

**Always removed:** client name and logo, account name, account ID, business manager name, billing
details, staff names and email addresses in the interface chrome, customer names, order numbers,
phone numbers, physical addresses, and any campaign name that contains a client name.

**Never removed:** the metric name, the metric value, the date range, the currency code, the platform
chrome that identifies which product the screenshot came from, and any figure that shows the result
was worse than the headline suggests.

---

## Current status of the reviewed set

**No personally identifiable or confidential information was found in the text of any of the 36
screenshots.** No account names, account IDs, business manager names, person names, store names,
domains, customer names, order numbers, phone numbers or email addresses appeared in any reading.

**This is not a clearance.** The audit read text, not pixels. The regions that most commonly carry an
account name are exactly the regions a text reading is least likely to surface: the top navigation
strip, the account switcher, the browser tab title and the URL bar.

### Open item 1, blocking any image publication

Every screenshot intended for publication needs a human to look at the actual image and check:

- top navigation and account switcher strip
- browser tab title and URL bar, if the browser chrome is in frame
- any left-hand account or campaign list
- tooltips or hover states caught mid-capture
- the operating system menu bar, if the capture is full screen

Until that visual pass happens, no screenshot image is published. This is why the site currently
publishes **transcriptions** rather than images.

### Open item 2, the currency question

Most files print a bare `$` with no currency code. A `$` figure published without its currency is not
a redaction problem, it is an accuracy problem, and it will be read as US dollars by a US buyer. Two
different currencies are demonstrably present in the ads set.

Every published figure either prints its own currency code, or says on the page that no currency code
is printed in the source. No currency was inferred from a number format.

### Open item 3, client naming consent

Redaction and consent are different permissions. All 13 case studies carry `nameApproved: false`.
Removing an account name from a screenshot does not create permission to name the client in the copy
beside it.

The site currently names clients in case study copy because those cases were already public on
boostbrand.co. Written approval is still outstanding on all 13 and is tracked in
`MISSING_CASE_STUDY_INFORMATION.md`.

### Open item 4, design assets

The 30 design files in Drive are client-branded creative. Publishing them requires approval to show
the work, which is separate from approval to name the client, and confirmation that what is shown
actually ran rather than being a concept that did not.

### Open item 5, platform icons

The four files in `Icons` are third-party marks: Google, Google Business, Google Maps, Meta Business.
Check each platform's brand guidelines before use. Several prohibit presentation that implies
partnership or certification, and the positioning rules for this site already forbid unverified
partnership claims. A neutral reference next to a metric is safe. A badge row is not.

---

## Checklist before any screenshot image goes live

- [ ] Visual pass completed on the actual image, not a text reading
- [ ] Account name, account ID and business manager name removed or cropped out
- [ ] Browser chrome and operating system menu bar cropped out
- [ ] Currency code either visible or stated in the caption
- [ ] Date range either visible or stated in the caption, with axis distinguished from reporting period
- [ ] Metric name legible and metric value unredacted
- [ ] Written client approval on file, or the client not named anywhere near the image
- [ ] The caption answers what the number tells us, what BOOST decided, and what happened next
