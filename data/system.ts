/**
 * THE BOOST OPERATING LOOP + demonstration artifacts.
 *
 * PROOF RULE: every number in `scenarios`, `sampleReport`, `creativeMemory`
 * and `decisionLog` is DEMONSTRATION DATA built to show the shape of the work.
 * It is labelled as such everywhere it appears in the UI. No client numbers
 * are used here. Real client metrics live only in data/cases.ts.
 */

export type Phase = {
 key: string;
 number: string;
 name: string;
 verb: string;
 question: string;
 body: string;
 artifact: string;
 artifactCaption: string;
 clientSees: string;
 who: string;
};

export const loop: Phase[] = [
 {
 key: "see",
 number: "01",
 name: "See",
 verb: "Signal",
 question: "What actually happened?",
 body:
 "Every cycle starts with evidence rather than opinion. Platform data reconciled against your revenue data, so the number we act on is one your finance team would recognise. When the two disagree, that disagreement is the first thing we fix.",
 artifact: "Signal record",
 artifactCaption: "The observation, the source, and how confident we are in it.",
 clientSees: "The reconciled numbers and any gaps we found in them",
 who: "Measurement lead",
 },
 {
 key: "decide",
 number: "02",
 name: "Decide",
 verb: "Diagnosis",
 question: "What do we think is causing it, and what would prove us wrong?",
 body:
 "A signal is not a diagnosis. We name what we believe is happening, what evidence supports it, and what result would tell us we were wrong. Then the decision gets written down before the money moves.",
 artifact: "Decision log entry",
 artifactCaption: "Diagnosis, decision, rationale, and the threshold that would reverse it.",
 clientSees: "Every entry, as it is written, not summarised later",
 who: "Growth strategist",
 },
 {
 key: "create",
 number: "03",
 name: "Create",
 verb: "Hypothesis",
 question: "What are we making, and what will it prove?",
 body:
 "Creative starts from a hypothesis about the buyer, not from a brief for an asset. Concepts are built so that a result is attributable to an idea. Production volume follows the hypothesis rather than the calendar.",
 artifact: "Concept brief",
 artifactCaption: "The angle, the belief being tested, and the threshold for scaling it.",
 clientSees: "The hypothesis before the work is made",
 who: "Creative strategist and creative director",
 },
 {
 key: "run",
 number: "04",
 name: "Run",
 verb: "Execution",
 question: "Is it live, clean, and reading correctly?",
 body:
 "Media goes live against pre-agreed kill and scale thresholds, so nobody has to negotiate with a losing ad at the end of the month. Structure is built so results stay attributable.",
 artifact: "Live account board",
 artifactCaption: "What is running, what it is testing, and against which threshold.",
 clientSees: "Live account access, always, under your ownership",
 who: "Performance lead",
 },
 {
 key: "measure",
 number: "05",
 name: "Measure",
 verb: "Result",
 question: "What changed in the business, not just in the platform?",
 body:
 "Results are read against the business number, with the confidence level stated. When attribution is uncertain we say so and make a decision that holds either way, rather than pretending to a precision nobody has.",
 artifact: "Monthly decision report",
 artifactCaption: "What happened, why, what we learned, what we changed, what needs your decision.",
 clientSees: "The full report, plus the misses",
 who: "Measurement lead and growth strategist",
 },
 {
 key: "learn",
 number: "06",
 name: "Learn",
 verb: "Memory",
 question: "What does the next decision inherit from this one?",
 body:
 "The result is written into your Creative Memory whether it won or lost, in language that is still useful a year later. This is the step nearly every agency skips, and it is the only reason month twelve should be smarter than month one.",
 artifact: "Creative Memory record",
 artifactCaption: "Insight, hypothesis, result, and what it rules in or out next time.",
 clientSees: "The full record. It stays yours if you leave.",
 who: "Creative strategist and growth strategist",
 },
];

export type ScenarioStep = { label: string; value: string; detail?: string; tone?: "neutral" | "good" | "bad" | "accent" };
export type Scenario = {
 key: string;
 label: string;
 context: string;
 steps: ScenarioStep[];
 memory: string;
};

/** DEMONSTRATION DATA, illustrative, not client results. */
export const scenarios: Scenario[] = [
 {
 key: "conversion-drop",
 label: "Conversion drops",
 context: "Ecommerce, US market, $40K monthly media",
 steps: [
 { label: "Signal", value: "Landing page conversion falls 22% in 9 days", detail: "Traffic volume unchanged", tone: "bad" },
 { label: "Diagnosis", value: "Offer friction, not traffic quality", detail: "Paid and organic fell together, so the cause is on the page", tone: "neutral" },
 { label: "Decision", value: "Do not increase spend", detail: "Spending into a broken path multiplies the loss", tone: "accent" },
 { label: "Create", value: "4 angles tested against the same audience", detail: "Certainty, speed, price, social proof", tone: "neutral" },
 { label: "Result", value: "Concept 03 converts 1.8x the control", detail: "Certainty framing", tone: "good" },
 { label: "Learning", value: "Certainty beats discount messaging in this category", detail: "Written to Creative Memory", tone: "accent" },
 { label: "Next move", value: "Scale Concept 03, build 3 variants on the same axis", tone: "neutral" },
 ],
 memory: "Discount framing is now deprioritised for this account until a market change justifies retesting.",
 },
 {
 key: "lead-quality",
 label: "Leads up, sales flat",
 context: "Considered-purchase service, $18K monthly media",
 steps: [
 { label: "Signal", value: "Leads +41%, closed deals flat", detail: "Cost per lead improved 27%", tone: "bad" },
 { label: "Diagnosis", value: "Lead quality problem, not volume problem", detail: "Close rate fell in proportion to volume gained", tone: "neutral" },
 { label: "Decision", value: "Hold budget. Change qualification, not spend", tone: "accent" },
 { label: "Create", value: "Message rewritten to pre-qualify on budget and timeline", tone: "neutral" },
 { label: "Result", value: "Lead volume down 19%, closed deals up 23%", tone: "good" },
 { label: "Learning", value: "Volume was never the constraint", detail: "Cheaper leads were costing sales capacity", tone: "accent" },
 { label: "Next move", value: "Scale only after close rate holds for two cycles", tone: "neutral" },
 ],
 memory: "Cost per lead is demoted as a headline metric on this account. Cost per closed deal replaces it.",
 },
 {
 key: "creative-fatigue",
 label: "Performance decays on schedule",
 context: "DTC brand, high-frequency paid social",
 steps: [
 { label: "Signal", value: "CPA rises 30% around day 18 of every cycle", detail: "Pattern repeated across 4 months", tone: "bad" },
 { label: "Diagnosis", value: "Creative fatigue, predictable and therefore plannable", tone: "neutral" },
 { label: "Decision", value: "Change the production calendar, not the bids", tone: "accent" },
 { label: "Create", value: "Concept pipeline moved 2 weeks ahead of the decay point", tone: "neutral" },
 { label: "Result", value: "CPA variance across the cycle narrows to 9%", tone: "good" },
 { label: "Learning", value: "The fatigue curve is a scheduling input, not a surprise", tone: "accent" },
 { label: "Next move", value: "Production calendar now keyed to measured decay, per channel", tone: "neutral" },
 ],
 memory: "Decay window logged per channel. Production planning inherits it automatically.",
 },
];

/** DEMONSTRATION DATA */
export const creativeTests = [
 { id: "C-07", concept: "Discount-led, 15% off", cpa: "$82", status: "Paused", reason: "Below threshold at day 9", tone: "bad" as const },
 { id: "C-09", concept: "Founder explains the guarantee", cpa: "$61", status: "Held", reason: "Inside band, needs volume", tone: "neutral" as const },
 { id: "C-12", concept: "Certainty framing, no discount", cpa: "$39", status: "Scaling", reason: "1.8x control over 14 days", tone: "good" as const },
 { id: "C-14", concept: "Comparison against alternative", cpa: "$47", status: "Variant set built", reason: "Second-best axis", tone: "good" as const },
];

/** DEMONSTRATION DATA */
export const sampleReport = {
 period: "Demonstration report · Month 07",
 questions: [
 {
 q: "What happened?",
 a: "Revenue from paid rose 18% on flat spend. Cost per closed deal fell from $412 to $338. Two concepts were retired and one scaled.",
 },
 {
 q: "Why?",
 a: "The certainty-framed concept from last cycle held its performance at 2.4x the previous budget level, which is unusual and worth naming. The retired concepts fell below the agreed kill threshold on day 9 and day 12.",
 },
 {
 q: "What did we learn?",
 a: "This audience responds to risk reduction rather than price. That now applies to landing page copy as well as ads, which is a change to our earlier assumption.",
 },
 {
 q: "What did we change?",
 a: "Budget reallocated from Concept 07 to Concept 12. Landing page headline rewritten to match the winning message. Kill threshold tightened from day 14 to day 10.",
 },
 {
 q: "What are we testing next?",
 a: "Three variants on the certainty axis, plus one deliberate counter-test on price so we do not over-fit to a single idea.",
 },
 {
 q: "What needs a decision from you?",
 a: "Whether to extend the guarantee to the second product line. That is a business decision with margin implications, not a marketing one, so it sits with you.",
 },
 ],
 misses: [
 "We held Concept 09 four days longer than our own threshold allowed. That cost roughly $2,100 in spend and we have tightened the review cadence.",
 "The CRM sync broke for two days in week three. Reporting for those days is estimated and marked as such.",
 ],
};

/** DEMONSTRATION DATA */
export const memoryRecords = [
 {
 date: "Cycle 12",
 insight: "Buyers compare against doing nothing, not against competitors",
 hypothesis: "Cost-of-inaction framing outperforms feature comparison",
 result: "Confirmed. 1.4x on qualified conversion",
 ruling: "Feature-comparison creative deprioritised unless the market shifts",
 },
 {
 date: "Cycle 09",
 insight: "Mobile buyers abandon at the shipping step, not at price",
 hypothesis: "Showing delivery date earlier lifts completion",
 result: "Confirmed. 11% lift in checkout completion",
 ruling: "Delivery clarity now standard in all creative and on the product page",
 },
 {
 date: "Cycle 06",
 insight: "Video length correlated with nothing measurable",
 hypothesis: "Shorter cuts would raise conversion",
 result: "Not supported. No significant difference",
 ruling: "Length removed as a testing variable. Opening 3 seconds tested instead",
 },
 {
 date: "Cycle 03",
 insight: "Discount responders churn before second purchase",
 hypothesis: "Discount acquisition damages LTV in this category",
 result: "Confirmed over two cohorts",
 ruling: "Discount used only for inventory clearance, never for acquisition",
 },
];

export const ownership = [
 { item: "Meta and Google ad accounts", owner: "You", note: "Created under your Business Manager from day one" },
 { item: "Pixels, tags and conversion setup", owner: "You", note: "Inside your accounts, not ours" },
 { item: "GA4, GTM and analytics", owner: "You", note: "You are the account owner, we are a user" },
 { item: "Domain, DNS and hosting", owner: "You", note: "We never hold the domain" },
 { item: "Creative source files", owner: "You", note: "Delivered as standard, not on request" },
 { item: "Historical campaign data", owner: "You", note: "Exported and handed over at any point you ask" },
 { item: "Decision log and Creative Memory", owner: "You", note: "The accumulated learning goes with you" },
 { item: "CRM and customer data", owner: "You", note: "We access, we never own or resell" },
];

export const capabilitySplit = [
 { area: "Business strategy and pricing", client: true, boost: false, shared: false },
 { area: "Positioning and messaging", client: false, boost: false, shared: true },
 { area: "Creative hypotheses and testing plan", client: false, boost: true, shared: false },
 { area: "Creative production", client: false, boost: true, shared: false },
 { area: "Brand guardianship", client: false, boost: false, shared: true },
 { area: "Paid media execution", client: false, boost: true, shared: false },
 { area: "Budget authority", client: true, boost: false, shared: false },
 { area: "Measurement and reporting", client: false, boost: true, shared: false },
 { area: "What a good outcome means", client: true, boost: false, shared: false },
 { area: "Sales follow-up and close", client: true, boost: false, shared: false },
];

export const aiSplit = {
 ai: [
 "Research synthesis across large volumes of data",
 "First-draft variants and versioning",
 "Resizing, reformatting and production assistance",
 "Transcription and data cleanup",
 "Anomaly detection in performance data",
 ],
 human: [
 "Positioning and strategic judgment",
 "Creative direction and concept selection",
 "Budget decisions and threshold calls",
 "Client communication and recommendations",
 "Final quality review on everything that ships",
 ],
 rule:
 "No AI-generated work reaches you without a named human reviewing it. AI is used to increase how much we can consider, not to decide what to do.",
};

export const interventionProtocol = [
 {
 trigger: "A concept misses its threshold",
 window: "Within the test window, typically 7 to 14 days",
 action: "It is stopped. The reason is logged. No negotiation with a losing ad.",
 },
 {
 trigger: "A month misses the agreed target",
 window: "At the monthly review",
 action:
 "You get a written read of why, what we are changing, and whether we believe the target was wrong. The miss appears in the report before you have to ask about it.",
 },
 {
 trigger: "Two consecutive months miss",
 window: "Day 60",
 action:
 "We run a full re-diagnosis at our cost, including whether the constraint sits outside marketing. If it does, we say so.",
 },
 {
 trigger: "Three consecutive months miss",
 window: "Day 90",
 action:
 "We put the recommendation to end or restructure the engagement in writing ourselves. If we cannot move your business, continuing to bill you is not a service.",
 },
];
