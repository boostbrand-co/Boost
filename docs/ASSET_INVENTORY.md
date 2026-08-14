# ASSET INVENTORY

Google Drive folder "Case Studies", audited 2026-08-14.
Every file below was enumerated through the Drive API. Nothing was inferred from a folder name.

Root folder ID: `1WUXAOA0mel-bwNM9i39nW-QOFl5C_z4_`

| Folder | Files | Type | Status |
|---|---|---|---|
| Team | 10 | PNG portraits | Names and roles used. Images pending export. |
| Statistics / Meta Ads | 13 | PNG screenshots | 13 read, 5 matched to a case |
| Statistics / SEO | 13 | PNG screenshots | 0 readable |
| Statistics / Ecommerce | 6 | JPEG screenshots | 6 read, 2 matched to a case |
| Statistics (root) | 4 | PNG screenshots | 4 read, all duplicates or crops of files already counted |
| Designs / Ecommerce / Suplementos | 10 | PNG | Not used yet |
| Designs / Social Media | 20 | PNG | Not used yet |
| Videos | 0 | none | All five client subfolders are empty |
| Icons | 4 | PNG | Not used yet |

---

## 1. Team portraits

Folder ID `1JinzORAp-781n987WKe_mb7d845Zb4gc`. Ten PNG files, 1.2 MB to 2.0 MB each, all modified
2026-07-24. Each filename is `<Name> - <Role>.png`, which is why the name and the role are treated
as verified and the biography is not.

| Name | Role published | Drive file ID |
|---|---|---|
| Ana Hinojosa | CEO & Founder | `1RSqT6Y9ydH1MaeawpUL7hI1ZkkcgbXWj` |
| Luis Ovalle | Performance Marketing Lead | `1MhDu56iWVHxMnUwFpA-d44Tp2zXGBMSb` |
| Mau Gómez | Ecommerce Growth Specialist | `19LC79ByvZLGMt8vjccjiTcDUFLloDhJp` |
| Adriana Jimenez | Operations Manager | `1O8G-TbP7Xi8jb9dVklnAtkQOHZzsOzKt` |
| Liz Salinas | Project Manager | `11EU40VcW-zzGpuzE8bI4MStgfp1l8Rsx` |
| Mariola Hinojosa | Content Creator | `1bQ5Mi60WU3jJ1MZAK-srEUQGGyKNiOfl` |
| Andrea Rubi | Senior Designer | `1yumZHs91S2-J0DHQBGroWBw0R8jaWv3C` |
| Sabina Quintero | Senior Designer | `1qUX8aWd2x1io0W1q9sWYgQcBE-pb2EoB` |
| Aliam Andueza | Video Editor | `1Zn3V4nkNebEp0pVJcR9lZJK0sVXIrsAh` |
| Victor Ramirez | **Videographer** | `1hR8qAWAYugoy6wW0XOJnZsd8yEsQOt4d` |

**One correction applied.** The Drive file for Victor Ramirez is named "Camarographer". Ana confirmed
on 2026-08-14 that the correct English title is Videographer, and that is what is published. The
original filename is preserved in `data/team.ts` under `photoFileName` so the source stays auditable.

**Photographs are not in the repository.** Each portrait is over 1 MB and could not be transferred
through this build session. `data/team.ts` carries the exact Drive file ID per person so they can be
exported without guessing which image belongs to whom.

To finish this:

1. Download the ten PNGs from Drive.
2. Resize to 1000 px on the short edge, export as WebP with a JPEG fallback, target under 150 KB each.
3. Save to `/public/team/<slug>.webp` using the slugs in `data/team.ts`.
4. Set `image: "/team/<slug>.webp"` on each record.
5. Replace the initials block in `components/cards/cards.tsx` with `next/image`.

The design reserves a 4:5 slot per person. Consistent framing and a neutral backdrop keep ten
portraits from looking like ten different photographers.

---

## 2. Statistics screenshots

36 files. Full readings, matches and reasoning are in `PROOF_INVENTORY.md`.

Summary of what the set does and does not contain:

- **Not one screenshot prints a client name, an account name or an account ID.** Attribution is
  therefore only possible by exact figure identity against numbers BOOST already published.
- **No screenshot prints an attribution model, a conversion window or a baseline.** None was inferred.
- **Most screenshots print a bare `$` with no currency code.** Two different number-formatting
  families appear in the ads screenshots, which means at least two account currencies are present.
- **No ads screenshot contains a revenue figure.** No return on ad spend can be computed from any of
  them.
- **The 13 SEO files returned nothing at all.** Every read came back empty. Nothing is known about
  them beyond filename, size and capture time.

---

## 3. Designs

30 PNG files, 44.4 MB total. Not used on the site yet.

| Folder | Files |
|---|---|
| Ecommerce / Suplementos / Equilibrum | 4 |
| Ecommerce / Suplementos / Serena | 3 |
| Ecommerce / Suplementos / Neurovita | 3 |
| Social Media / Food - Stories | 4 |
| Social Media / Hotel - Stories | 4 |
| Social Media / Candles | 3 |
| Social Media / Photography | 3 |
| Social Media / Yoga Fitness | 3 |
| Social Media / Hotel | 3 |

Three of these folder names correspond to clients already on the site: Equilibrum, Neurovita and
Serena. Two are named as clients in `data/cases.ts` (Equilibrium, Neurovita), and the spelling
differs by one letter on Equilibrum, so the association is likely but not confirmed. Serena does not
appear on the site at all.

Before any of these are published:

- Confirm which client each folder belongs to. Do not publish a design against a case study on the
  strength of a folder name.
- Get approval to show client-branded creative, which is separate from approval to name the client.
- Confirm whether the work shown is what actually ran, or a concept that did not.

The other six folders are described by category rather than by client, so they can only be published
as unattributed craft examples unless the client is confirmed.

---

## 4. Videos

All five subfolders are empty: EPS Servicio Automotriz, Caviar de Monte, Dr.Mon, Neurovita,
Equilibrium. The folders exist, the files do not.

EPS Servicio Automotriz does not appear anywhere on the site, so if video is delivered for it, that
is a new case study rather than an addition to an existing one.

---

## 5. Icons

Four PNGs: Google Business, Meta Business, Google Maps, Google. Between 13 KB and 190 KB.

These are third-party platform marks. Before use, check each platform's brand guidelines, because
several of them prohibit using the mark in a way that implies partnership or certification. The
positioning rules for this site already forbid unverified partnership claims, so the safe use is a
neutral reference next to a metric, not a badge row on the homepage.

---

## What is still required

- The ten team portraits, exported and optimised.
- A re-export of the 13 SEO screenshots, or the underlying numbers from Search Console and Business
  Profile directly.
- The account name behind each of the seven unmatched ads screenshots.
- Client identity for the design folders.
- Video files, or removal of the empty folders.
