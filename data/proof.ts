/**
 * PROOF ARTIFACTS.
 *
 * SOURCE: Google Drive, "Case Studies / Statistics", audited 2026-08-14.
 * 36 platform screenshots were reviewed. What is published below is a TRANSCRIPTION
 * of what is legible in the screenshot, not a restatement of an agency claim.
 *
 * MATCHING RULE, applied strictly: a screenshot is associated with a client ONLY
 * where a figure in the screenshot is identical to a figure BOOST already published
 * for that client on boostbrand.co/portfolio. No screenshot in the set prints a
 * client name, an account name or an account ID, so identity by exact figure is the
 * only evidence available. `matchBasis` states that evidence on every record.
 *
 * NOT DONE, deliberately:
 *  - No date was inferred. Where a screenshot prints an axis range rather than a
 *    selected reporting period, that is said out loud.
 *  - No currency was inferred. Where the screenshot prints a bare "$", the record
 *    says so and names the currency only if BOOST already published one for that
 *    account, flagged as such.
 *  - No attribution model, conversion window or baseline was inferred. None is
 *    visible in any screenshot in the set.
 *  - No screenshot image is embedded. The portrait and screenshot binaries could
 *    not be transferred in this build session, so what ships is the readout plus a
 *    pointer to the source file. /docs/PROOF_INVENTORY.md carries the file IDs.
 *
 * HELD BACK: see `heldBack` at the bottom of this file, and /docs/PROOF_INVENTORY.md.
 */

export type ProofConfidence = "HIGH" | "MEDIUM" | "LOW";

export type ProofReadout = {
  label: string;
  value: string;
  note?: string;
};

export type ProofArtifact = {
  id: string;
  caseSlug: string;
  title: string;
  platform: string;
  /** What the screenshot does and does not identify about itself. */
  platformNote: string;
  readout: ProofReadout[];
  period: string;
  currency: string;
  matchBasis: string;
  confidence: ProofConfidence;
  /** The three questions every artifact has to answer. */
  tellsUs: string;
  decision: string;
  next: string;
  sourceFile: string;
};

export const proofArtifacts: ProofArtifact[] = [
  {
    id: "kto-conversations",
    caseSlug: "kto-partes",
    title: "Cost of a conversation, across a full year of spend",
    platform: "Ads manager performance summary, Spanish interface",
    platformNote:
      "The screenshot prints the metric names and the totals. It does not print an account name, an account ID, a campaign name or a currency code.",
    readout: [
      { label: "Messaging conversations started", value: "12,677" },
      { label: "Cost per conversation started", value: "439", note: "Platform reported, no currency code printed" },
      { label: "Amount spent", value: "5,569,918" },
      { label: "Arithmetic check", value: "5,569,918 ÷ 12,677 = 439.4", note: "Consistent with the reported cost per result" },
    ],
    period:
      "The chart axis runs 1 Jun 2025 to 9 Jun 2026 at daily granularity. The selected reporting period is not printed in the screenshot, so the axis is reported rather than a date range asserted.",
    currency:
      "No currency code is printed. The figure BOOST already published for this account is in Colombian pesos, which is the only basis for reading it that way.",
    matchBasis:
      "12,677 conversations is the exact figure already published for this account on the BOOST portfolio, and the 5.5M spend figure agrees with it.",
    confidence: "HIGH",
    tellsUs:
      "The account bought conversations at a stable unit cost across a long window rather than in a single good month. A number that holds for a year is a different kind of evidence than a number that held for a fortnight.",
    decision:
      "With a cost per conversation this stable, the constraint is no longer media efficiency. BOOST would stop optimising cost per conversation and move the work to what happens after the conversation starts, because that is where the remaining value is.",
    next:
      "Instrument the conversation itself: how many reach a qualified stage, how many close, and what a closed one is worth. Until that exists, this number describes activity rather than revenue and should not be sold as revenue.",
    sourceFile: "Statistics / Meta Ads, Screenshot 2026-06-10 at 3.29.18 PM.png",
  },
  {
    id: "kto-video",
    caseSlug: "kto-partes",
    title: "Video reach on the same account, priced per play",
    platform: "Ads manager performance summary, Spanish interface",
    platformNote:
      "Metric names and totals are legible. No account identifier and no currency code are printed.",
    readout: [
      { label: "2 second continuous video plays", value: "674,540" },
      { label: "Cost per result", value: "3", note: "Rounded by the platform, no currency code printed" },
      { label: "Amount spent", value: "1,748,368" },
      { label: "Arithmetic check", value: "1,748,368 ÷ 674,540 = 2.59", note: "Rounds to the displayed 3" },
    ],
    period: "Chart axis 1 Jun 2025 to 9 Jun 2026, daily granularity. Selected reporting period not printed.",
    currency: "No currency code printed. Same account as the conversation figure above.",
    matchBasis:
      "674,540 plays corresponds to the 674K views already published for this account on the BOOST portfolio.",
    confidence: "HIGH",
    tellsUs:
      "A 2 second play is attention, not intent. Published next to the conversation figure it shows the difference between the two, which is the whole reason both are printed here.",
    decision:
      "BOOST would not report this as a result on its own. It is useful as a diagnostic for whether creative is reaching people at all, and it is reported as reach, in the reach column, with the conversation number beside it.",
    next:
      "Read plays and conversations together per creative concept. A concept that buys plays cheaply and conversations expensively is a hook that works on the wrong audience, and that is a creative decision rather than a budget one.",
    sourceFile: "Statistics / Meta Ads, Screenshot 2026-06-10 at 3.29.13 PM.png",
  },
  {
    id: "encanto-conversations",
    caseSlug: "encanto-colombiano",
    title: "497 conversations, and what each one cost",
    platform: "Ads manager performance summary, Spanish interface",
    platformNote: "Metric names and totals legible. No account identifier printed.",
    readout: [
      { label: "Messaging conversations started", value: "497" },
      { label: "Cost per conversation started", value: "5.65" },
      { label: "Amount spent", value: "2,809.52" },
      { label: "Arithmetic check", value: "2,809.52 ÷ 497 = 5.65", note: "Exact" },
    ],
    period: "Chart axis 1 Jun 2025 to 9 Jun 2026, daily granularity. Selected reporting period not printed.",
    currency:
      "No currency code printed. The published figure for this account is in US dollars, which is the only basis for reading it that way.",
    matchBasis:
      "497 conversations and a 5.65 unit cost are both already published for this account on the BOOST portfolio.",
    confidence: "HIGH",
    tellsUs:
      "The unit cost is exact rather than rounded, and the spend divides into it cleanly. That is what makes it checkable, which matters more here than the size of the number.",
    decision:
      "A correction comes before any decision. This figure has been published as a cost per click. The screenshot shows it is a cost per conversation started, which is a different and more useful thing. BOOST would fix the label before quoting the number again.",
    next:
      "Restate the metric correctly everywhere it appears, then attach a close rate to the 497 so the account can be judged on outcomes rather than on conversation volume.",
    sourceFile: "Statistics / Meta Ads, Screenshot 2026-06-10 at 3.28.51 PM.png",
  },
  {
    id: "encanto-profile",
    caseSlug: "encanto-colombiano",
    title: "Profile visits on the same account, for contrast",
    platform: "Ads manager performance summary, Spanish interface",
    platformNote: "Metric names and totals legible. No account identifier printed.",
    readout: [
      { label: "Instagram profile visits", value: "7,492" },
      { label: "Cost per result", value: "0.16" },
      { label: "Amount spent", value: "1,207.06" },
      { label: "Arithmetic check", value: "1,207.06 ÷ 7,492 = 0.161", note: "Consistent" },
    ],
    period: "Chart axis 1 Jun 2025 to 9 Jun 2026, daily granularity. Selected reporting period not printed.",
    currency: "No currency code printed. Same account as the conversation figure above.",
    matchBasis: "7,492 profile visits is the exact figure already published for this account.",
    confidence: "HIGH",
    tellsUs:
      "Profile visits cost roughly a thirty fifth of what a conversation cost on the same account. Cheap traffic and useful traffic are not the same purchase.",
    decision:
      "BOOST would keep profile visits out of the results column entirely and use them only to judge whether the profile itself converts attention into a message.",
    next:
      "Measure the step between a profile visit and a conversation. If that step is where people stop, the fix is the profile, not the media buy, and no amount of extra budget will find it.",
    sourceFile: "Statistics / Meta Ads, Screenshot 2026-06-10 at 3.28.56 PM.png",
  },
  {
    id: "camino-conversations",
    caseSlug: "camino-de-san-jose",
    title: "230 conversations from a messaging campaign",
    platform: "Ads manager performance summary, Spanish interface",
    platformNote:
      "Metric names and totals legible. No account identifier printed. This screenshot has a different axis start from the rest of the set.",
    readout: [
      { label: "Messaging conversations started", value: "230" },
      { label: "Cost per conversation started", value: "4.61" },
      { label: "Amount spent", value: "1,060.09" },
      { label: "Arithmetic check", value: "1,060.09 ÷ 230 = 4.61", note: "Exact" },
    ],
    period:
      "Chart axis 9 Jun 2025 to 9 Jun 2026, which differs from every other screenshot in the set. Selected reporting period not printed.",
    currency:
      "No currency code printed, and none can be established from the published figures for this account with confidence. Treated as unresolved.",
    matchBasis: "230 conversations is the exact figure already published for this account.",
    confidence: "MEDIUM",
    tellsUs:
      "The conversation count is confirmed by the platform. The unit cost is confirmed as arithmetic but not as currency, so it is published as a ratio rather than as money.",
    decision:
      "BOOST would not quote the unit cost publicly until the account currency is confirmed from the billing settings. A ratio without a unit is not a price.",
    next:
      "Pull the account currency and the click figures published alongside this case, which do not appear in this screenshot, and reconcile the two before this case is presented to a prospect.",
    sourceFile: "Statistics / Meta Ads, Screenshot 2026-06-10 at 3.28.42 PM.png",
  },
  {
    id: "neurovita-sales",
    caseSlug: "neurovita",
    title: "Nine months of store revenue, with the window printed on it",
    platform: "Ecommerce platform sales report, Spanish interface",
    platformNote:
      "The report prints its own date range and its own currency code, which makes it the strongest single artifact in the set. It does not print a store name or domain.",
    readout: [
      { label: "Total sales", value: "576,739.30 MXN" },
      { label: "Gross sales", value: "924,148.00 MXN" },
      { label: "Discounts", value: "-234,367.30 MXN" },
      { label: "Returns", value: "-116,841.40 MXN" },
      { label: "Orders", value: "945", note: "673 of them fulfilled at the time of capture" },
      { label: "Repeat customer rate", value: "17.62%" },
    ],
    period: "1 Sep 2025 to 31 May 2026, printed in the report itself. Nine months.",
    currency: "MXN, printed in the report itself.",
    matchBasis:
      "576K MXN over nine months is already published for this account, and the report prints both the figure and the nine month window.",
    confidence: "HIGH",
    tellsUs:
      "The published figure survives contact with its source, including the window it was measured over. It also shows what the headline number hides: 234K of discounts and 117K of returns sit between gross and total.",
    decision:
      "BOOST would report total sales rather than gross for this account, because the gap between them is 38 percent and a gross figure would flatter the work by more than a third.",
    next:
      "Attach media spend to this window so the account can be read as a return rather than as revenue, and treat the 17.62 percent repeat rate as the next thing to move.",
    sourceFile: "Statistics / Ecommerce, WhatsApp Image 2026-06-10 at 1.31.23 PM.jpeg",
  },
  {
    id: "caviar-sales",
    caseSlug: "caviar-de-monte",
    title: "Store revenue against a printed comparison window",
    platform: "Ecommerce platform sales report, Spanish interface",
    platformNote:
      "The report prints its own date range and a comparison period. It does not print a store name, a domain or a currency code.",
    readout: [
      { label: "Total sales", value: "560,563.53" },
      { label: "Gross sales", value: "555,936.74" },
      { label: "Shipping charged", value: "22,366.69" },
      { label: "Returns", value: "-14,589.90" },
      { label: "Orders", value: "394", note: "383 of them fulfilled at the time of capture" },
      { label: "Repeat customer rate", value: "9.65%" },
    ],
    period:
      "1 Jun 2025 to 1 Mar 2026, printed in the report. That is nine months, and the figure has been published against a ten month window. The discrepancy is unresolved.",
    currency: "No currency code printed in this report, unlike the other store reports in the set.",
    matchBasis: "560,563.53 total sales corresponds to the 560K figure already published for this account.",
    confidence: "MEDIUM",
    tellsUs:
      "The revenue figure holds. The duration attached to it in the published case does not match the window printed on the report, which is the sort of thing that gets found by a prospect rather than by the agency.",
    decision:
      "BOOST would correct the published duration to the window the report actually prints, and would not present the case again until it is corrected.",
    next:
      "Confirm the account currency and either re-pull the report at the ten month window or restate the case as nine months. Repeat rate at 9.65 percent is the honest weak point and belongs in the case rather than out of it.",
    sourceFile: "Statistics / Ecommerce, WhatsApp Image 2026-06-10 at 1.42.46 PM.jpeg",
  },
];

export const proofForCase = (slug: string) => proofArtifacts.filter((p) => p.caseSlug === slug);

/**
 * Evidence reviewed and deliberately NOT published, with the reason.
 * This list is public on purpose. An agency that only shows the evidence that
 * worked is doing the thing this site exists to argue against.
 */
export const heldBack: { item: string; reason: string; needed: string }[] = [
  {
    item: "Store report showing 801,855.28 MXN in total sales",
    reason:
      "The figure matches a published case exactly, but the report prints a 17 month window while the case claims six months. One of the two is wrong.",
    needed: "Re-pull the report at the claimed window, or restate the case at the window the report prints.",
  },
  {
    item: "Store report showing 928,514.04 USD gross and 747,391.44 USD total sales",
    reason:
      "Close to a published figure but not equal to it, and the report covers a period longer than the engagement described in the case.",
    needed: "The report filtered to the engagement period, so the published figure can be confirmed or corrected.",
  },
  {
    item: "Store report showing 26,249,297.00 gross and 19,907 orders",
    reason:
      "The order count is within a thousand of a published case and the revenue is not close to it. That is not a match, it is a coincidence with a resemblance.",
    needed: "Confirmation of which store this report belongs to before any association is made.",
  },
  {
    item: "Store report showing 24,801,187.00 gross and 14,659 orders, 2020 to 2026",
    reason: "No published BOOST figure corresponds to it, so there is nothing to attribute it to.",
    needed: "Client identity and consent, plus the engagement window inside the six year range.",
  },
  {
    item: "Six further ads manager screenshots with no corresponding published figure",
    reason:
      "Conversation and view totals that cannot be matched to any client without guessing. Guessing is the failure mode this whole approach exists to avoid.",
    needed: "The account name each screenshot was taken from.",
  },
  {
    item: "Thirteen screenshots in the SEO folder",
    reason: "Not one of them could be read. Every file returned empty when opened, so nothing about them is known.",
    needed: "Re-export the thirteen files, or pull the numbers from Search Console and Business Profile directly.",
  },
  {
    item: "The 45x to 67x return figure published for a restaurant client",
    reason:
      "No screenshot in the set supports it. There is no spend context, no attribution model and no window attached to it anywhere in the evidence.",
    needed:
      "The platform export behind it, the media spend, and the attribution setting. Until then it stays off the front of the site.",
  },
];
