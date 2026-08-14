/**
 * TEAM.
 *
 * SOURCE OF TRUTH FOR NAMES AND ROLES:
 * Google Drive, "Case Studies / Team", ten PNG portrait files supplied by Ana on
 * 2026-07-24 and audited on 2026-08-14. Each file is named "<Name> - <Role>.png",
 * so the name and the role are taken verbatim from the asset itself. Drive file IDs
 * are recorded in /docs/ASSET_INVENTORY.md.
 *
 * ONE DELIBERATE CORRECTION: the Drive file for Victor Ramirez reads "Camarographer".
 * Ana confirmed on 2026-08-14 that the correct English title is "Videographer", and
 * that is what is published. Nothing else was changed from the source.
 *
 * WHAT IS VERIFIED: name, role, that the person works at BOOST, and that a portrait
 * photograph exists.
 *
 * WHAT IS NOT VERIFIED AND THEREFORE NOT PUBLISHED: years of experience, previous
 * employers, certifications, education, client history, personal biography. None of
 * it was invented. The `experienceStatus` field exists to keep that gap visible.
 *
 * `owns`, `specialty` and `worksWithYouOn` are ROLE DEFINITIONS drawn from the BOOST
 * operating model, not claims about the individual. They describe what the seat is
 * accountable for. Ana confirms them per person before publication; the
 * `ownershipConfirmed` flag drives a visible notice until she does.
 *
 * PHOTOGRAPHS: the ten portraits exist in Drive but were not transferable through
 * this build session. `photoDriveId` points at the exact file so they can be exported
 * into /public/team/ without guessing which image belongs to whom.
 */

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  discipline: "Leadership" | "Growth" | "Delivery" | "Creative" | "Production";
  owns: string;
  specialty: string;
  worksWithYouOn: string;
  experienceStatus: string;
  ownershipConfirmed: boolean;
  photoDriveId: string;
  photoFileName: string;
  image?: string;
};

const EXP = "Not published. Background details are confirmed with each person before they appear here.";

export const team: TeamMember[] = [
  {
    slug: "ana-hinojosa",
    name: "Ana Hinojosa",
    role: "CEO & Founder",
    discipline: "Leadership",
    owns: "Positioning, senior judgment on every account, and the final call on strategy",
    specialty: "Growth strategy across the US and Mexico",
    worksWithYouOn: "The diagnosis, the growth thesis, and the quarterly re-read",
    experienceStatus: EXP,
    ownershipConfirmed: false,
    photoDriveId: "1RSqT6Y9ydH1MaeawpUL7hI1ZkkcgbXWj",
    photoFileName: "Ana Hinojosa - CEO & Founder.png",
  },
  {
    slug: "luis-ovalle",
    name: "Luis Ovalle",
    role: "Performance Marketing Lead",
    discipline: "Growth",
    owns: "Your paid accounts day to day, and the spend decisions inside them",
    specialty: "Meta, Google and messaging funnels, plus search visibility work",
    worksWithYouOn: "Weekly performance, threshold calls, and what a result actually cost",
    experienceStatus: EXP,
    ownershipConfirmed: false,
    photoDriveId: "1MhDu56iWVHxMnUwFpA-d44Tp2zXGBMSb",
    photoFileName: "Luis Ovalle - Performance Marketing Lead.png",
  },
  {
    slug: "mau-gomez",
    name: "Mau Gómez",
    role: "Ecommerce Growth Specialist",
    discipline: "Growth",
    owns: "The store side of the number: catalogue, checkout path and repeat purchase",
    specialty: "Ecommerce reporting, product mix and returning customer behaviour",
    worksWithYouOn: "Where revenue is really coming from, and which products carry it",
    experienceStatus: EXP,
    ownershipConfirmed: false,
    photoDriveId: "19LC79ByvZLGMt8vjccjiTcDUFLloDhJp",
    photoFileName: "Mau Gómez - Ecommerce Growth Specialist.png",
  },
  {
    slug: "adriana-jimenez",
    name: "Adriana Jimenez",
    role: "Operations Manager",
    discipline: "Delivery",
    owns: "How the account is run: access, cadence, and whether commitments are met",
    specialty: "Account setup, ownership handover and internal process",
    worksWithYouOn: "Onboarding, access, and anything about how the engagement operates",
    experienceStatus: EXP,
    ownershipConfirmed: false,
    photoDriveId: "1O8G-TbP7Xi8jb9dVklnAtkQOHZzsOzKt",
    photoFileName: "Adriana Jimenez - Operations Manager.png",
  },
  {
    slug: "liz-salinas",
    name: "Liz Salinas",
    role: "Project Manager",
    discipline: "Delivery",
    owns: "Dates, dependencies and the state of every deliverable in flight",
    specialty: "Production scheduling across creative, media and web work",
    worksWithYouOn: "What is shipping this week and what is waiting on whom",
    experienceStatus: EXP,
    ownershipConfirmed: false,
    photoDriveId: "11EU40VcW-zzGpuzE8bI4MStgfp1l8Rsx",
    photoFileName: "Liz Salinas - Project Manager.png",
  },
  {
    slug: "andrea-rubi",
    name: "Andrea Rubi",
    role: "Senior Designer",
    discipline: "Creative",
    owns: "Craft and final quality on the design work that carries your brand",
    specialty: "Art direction for ecommerce and social, built native to each market",
    worksWithYouOn: "Brand-level creative and the standard everything is held to",
    experienceStatus: EXP,
    ownershipConfirmed: false,
    photoDriveId: "1yumZHs91S2-J0DHQBGroWBw0R8jaWv3C",
    photoFileName: "Andrea Rubi - Senior Designer.png",
  },
  {
    slug: "sabina-quintero",
    name: "Sabina Quintero",
    role: "Senior Designer",
    discipline: "Creative",
    owns: "Design output across campaign concepts and the assets they need",
    specialty: "Performance creative and campaign systems that can be tested",
    worksWithYouOn: "Concept reviews and what each design variant is meant to prove",
    experienceStatus: EXP,
    ownershipConfirmed: false,
    photoDriveId: "1qUX8aWd2x1io0W1q9sWYgQcBE-pb2EoB",
    photoFileName: "Sabina Quintero - Senior Designer.png",
  },
  {
    slug: "mariola-hinojosa",
    name: "Mariola Hinojosa",
    role: "Content Creator",
    discipline: "Creative",
    owns: "Content that has to sound like you rather than like an agency",
    specialty: "Social-first content in Spanish and English, written for each market",
    worksWithYouOn: "Voice, content direction and what gets published",
    experienceStatus: EXP,
    ownershipConfirmed: false,
    photoDriveId: "1bQ5Mi60WU3jJ1MZAK-srEUQGGyKNiOfl",
    photoFileName: "Mariola Hinojosa - Content Creator.png",
  },
  {
    slug: "victor-ramirez",
    name: "Victor Ramirez",
    role: "Videographer",
    discipline: "Production",
    owns: "What gets shot, and whether the footage can carry the idea",
    specialty: "On-location and studio production for paid and organic video",
    worksWithYouOn: "Shoot planning, locations and what a production day has to deliver",
    experienceStatus: EXP,
    ownershipConfirmed: false,
    photoDriveId: "1hR8qAWAYugoy6wW0XOJnZsd8yEsQOt4d",
    photoFileName: "Victor Ramirez - Camarographer.png",
  },
  {
    slug: "aliam-andueza",
    name: "Aliam Andueza",
    role: "Video Editor",
    discipline: "Production",
    owns: "The cut, and the variants a video test needs to be readable",
    specialty: "Editing for paid video, including hook and length variants",
    worksWithYouOn: "Edits, versions, and how many cuts a test actually requires",
    experienceStatus: EXP,
    ownershipConfirmed: false,
    photoDriveId: "1Zn3V4nkNebEp0pVJcR9lZJK0sVXIrsAh",
    photoFileName: "Aliam Andueza - Video Editor.png",
  },
];

/**
 * Preview set used on the homepage and the about page.
 * Deliberately spans disciplines rather than leading with leadership only, so a
 * visitor sees the people who do the work and not just the person who sells it.
 */
export const teamPreview: TeamMember[] = [
  "ana-hinojosa",
  "luis-ovalle",
  "andrea-rubi",
  "victor-ramirez",
  "liz-salinas",
  "mau-gomez",
]
  .map((slug) => team.find((m) => m.slug === slug))
  .filter((m): m is TeamMember => Boolean(m));

export const teamNote =
  "Ten people, named. Each seat has one owner, and you are told who holds yours before you sign rather than after. We publish the people who do the work, not only the person who sells it.";

export const teamPhotoNote =
  "Portraits for all ten people exist and are being prepared for the web. Names and roles on this page are taken from the source files themselves, not written for the site.";

export const teamExperienceNote =
  "Years of experience, previous employers and certifications are not published here. None of it has been confirmed in writing yet, and inventing it would undo the point of the page.";

export const disciplines = ["Leadership", "Growth", "Delivery", "Creative", "Production"] as const;
