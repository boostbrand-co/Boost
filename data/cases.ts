/**
 * CASE STUDIES, migrated from boostbrand.co/portfolio (Aug 2026).
 *
 * PROOF RULE: every metric below was published by BOOST on its own portfolio page.
 * Nothing here was invented. Fields marked `needs` list what is still required
 * before the case study can be published in full. See /docs/MISSING_CASE_STUDY_INFORMATION.md
 */

export type CaseStrength = "HIGH" | "MEDIUM" | "LOW";

export type CaseMetric = {
 value: string;
 label: string;
 /** Where the number came from. Never leave empty. */
 source: string;
};

export type CaseStudy = {
 slug: string;
 client: string;
 /** Set true only when the client has approved being named in a full case study. */
 nameApproved: boolean;
 industry: string;
 industrySlug: string;
 market: string;
 marketSlug: string;
 businessModel: string;
 goal: string;
 goalSlug: string;
 services: string[];
 serviceSlugs: string[];
 status: string;
 duration: string;
 summary: string;
 problem: string;
 context: string;
 observed: string[];
 decided: string[];
 rationale: string;
 built: string[];
 changed: string[];
 learned: string;
 next: string;
 metrics: CaseMetric[];
 strength: CaseStrength;
 needs: string[];
 liveUrl?: string;
};

const SRC = "boostbrand.co/portfolio, migrated Aug 2026, verify against ad platform export before publish";

export const cases: CaseStudy[] = [
 {
 slug: "dr-mon",
 client: "Dr. Mon",
 nameApproved: false,
 industry: "Ecommerce",
 industrySlug: "ecommerce",
 market: "Mexico",
 marketSlug: "mexico",
 businessModel: "DTC ecommerce",
 goal: "Revenue growth",
 goalSlug: "revenue-growth",
 services: ["Paid media", "Measurement", "CRM and lifecycle"],
 serviceSlugs: ["paid-media", "measurement-intelligence"],
 status: "Ongoing since 2023",
 duration: "Ongoing, 3+ years",
 summary: "Sustained ecommerce growth across Meta and Google with CRM connected to the ad account.",
 problem:
 "Growth was arriving in bursts. Paid media produced orders, but nothing connected order data back to the decisions being made inside the ad accounts, so every month started from scratch.",
 context:
 "A direct-to-consumer brand selling in Mexico, running Meta and Google simultaneously with a CRM already in place.",
 observed: [
 "Order volume and ad platform conversions disagreed, so budget decisions were being made on the wrong number.",
 "Repeat purchases were invisible inside the ad accounts, which made every acquisition look more expensive than it was.",
 ],
 decided: [
 "Connect CRM order data to the ad accounts before increasing spend.",
 "Hold budget flat until the two data sources agreed within a defined tolerance.",
 "Rebuild the account structure around products that actually repeat.",
 ],
 rationale:
 "Scaling on a number nobody trusts multiplies the error. Fixing measurement first cost one month and made every month after it decidable.",
 built: [
 "Meta and Google account structure rebuilt around verified product performance",
 "CRM to ad platform conversion pipeline",
 "Monthly decision log tied to order data rather than platform-reported conversions",
 ],
 changed: [
 "Budget decisions moved from platform ROAS to order-level revenue",
 "Creative testing narrowed to the product set that repeated",
 ],
 learned:
 "The constraint was not spend level. It was that nobody could tell which products were worth spending on.",
 next: "Ongoing. Current focus is lifecycle and repeat purchase rather than first-order volume.",
 metrics: [
 { value: "51.2M MXN", label: "In sales", source: SRC },
 { value: "18,907", label: "Orders", source: SRC },
 ],
 strength: "HIGH",
 needs: [
   "UNRESOLVED 2026-08-14: the closest platform report shows 19,907 orders and 26,249,297.00 gross across Jan 2024 to Jun 2026, which does not reconcile with the 18,907 orders and 51.2M MXN published here. Confirm which report belongs to this store before either figure is quoted.",
   
 "Client approval to name in a public case study",
 "Date range the 51.2M MXN and 18,907 orders cover",
 "Baseline figures from before the engagement started",
 "One client quote",
 "Screenshots or redacted platform exports",
 ],
 },
 {
 slug: "gold-monkeys",
 client: "Gold Monkeys",
 nameApproved: false,
 industry: "Ecommerce",
 industrySlug: "ecommerce",
 market: "United States",
 marketSlug: "united-states",
 businessModel: "DTC ecommerce",
 goal: "Enter a new market",
 goalSlug: "new-market",
 services: ["Paid media", "Creative strategy"],
 serviceSlugs: ["paid-media", "creative-strategy"],
 status: "Ongoing since 2023",
 duration: "Ongoing, 3+ years",
 summary: "Scaling a brand into the US market on Meta and Google.",
 problem:
 "The brand worked in its home market. Moving into the United States meant a different buyer, a different price expectation and a different competitive set, and the existing creative did not carry across.",
 context: "A consumer brand expanding sales into the United States.",
 observed: [
 "Creative that worked at home underperformed in the US on the same offer.",
 "The gap was in reference points and proof, not in language.",
 ],
 decided: [
 "Rebuild creative for the US buyer instead of translating existing assets.",
 "Test offer framing before increasing budget.",
 ],
 rationale:
 "Translation moves words. It does not move the reasons a buyer in a different market decides to buy.",
 built: [
 "US-specific creative built natively rather than adapted",
 "Meta and Google structure separated by market so learnings stayed clean",
 ],
 changed: ["Creative direction for the US market", "Budget allocation between markets"],
 learned: "Cross-border growth failed on references and proof long before it failed on language.",
 next: "Ongoing.",
 metrics: [{ value: "938K USD", label: "In sales", source: SRC }],
 strength: "HIGH",
 needs: [
   "CONFLICT found 2026-08-14: the nearest platform report shows 928,514.04 USD gross and 747,391.44 USD total sales across Jan 2022 to Jun 2026, none of which equals the 938K figure published here. Re-pull filtered to the engagement window.",
   
 "Client approval to name",
 "Date range for the 938K USD figure",
 "Split between US and home-market revenue",
 "Creative examples cleared for publication",
 ],
 },
 {
 slug: "klean-vet",
 client: "Klean Vet",
 nameApproved: false,
 industry: "Ecommerce",
 industrySlug: "ecommerce",
 market: "Latin America",
 marketSlug: "latam",
 businessModel: "DTC ecommerce",
 goal: "Demand generation",
 goalSlug: "demand-generation",
 services: ["Paid media", "Creative strategy"],
 serviceSlugs: ["paid-media", "creative-strategy"],
 status: "Ongoing since 2023",
 duration: "Ongoing, 3+ years",
 summary: "High-volume video creative driving conversions at scale in Colombia.",
 problem: "Reach was affordable but conversion was inconsistent, and creative was the variable nobody was tracking.",
 context: "A veterinary products brand selling in Colombia with a managed media budget.",
 observed: [
 "Video view volume was high while conversion rate moved independently of it.",
 "The winning concepts were not the ones with the most views.",
 ],
 decided: [
 "Track creative at concept level rather than asset level.",
 "Kill concepts on conversion, not on view count.",
 ],
 rationale: "Views are a cheap signal. The expensive signal is which idea makes someone buy.",
 built: ["Concept-level creative testing structure", "Reporting that separates reach from conversion outcomes"],
 changed: ["Creative evaluation criteria", "Which concepts received production budget"],
 learned: "View count and conversion moved independently. Optimising for the first would have starved the second.",
 next: "Ongoing.",
 metrics: [
 { value: "1.8M+", label: "Video views", source: SRC },
 { value: "162,000", label: "Conversions", source: SRC },
 { value: "5.96%", label: "CTR", source: SRC },
 { value: "57M COP", label: "Media managed", source: SRC },
 ],
 strength: "HIGH",
 needs: [
   "STILL REQUIRED 2026-08-14: no screenshot in the reviewed set corresponds to the 1.8M views, 162,000 conversions, 5.96 percent click through rate or 57M COP published here.",
   "Client approval to name", "Date range for all four metrics", "Definition of what counted as a conversion"],
 },
 {
 slug: "kto-partes",
 client: "KTO Partes",
 nameApproved: false,
 industry: "Automotive and fleet",
 industrySlug: "automotive",
 market: "Latin America",
 marketSlug: "latam",
 businessModel: "Parts and distribution",
 goal: "Demand generation",
 goalSlug: "demand-generation",
 services: ["Paid media", "Messaging funnels"],
 serviceSlugs: ["paid-media", "web-conversion"],
 status: "Ongoing",
 duration: "Ongoing",
 summary: "Conversation-led demand in a category where the sale happens in chat.",
 problem: "The category does not convert on a form. It converts in a conversation, and the funnel was built for forms.",
 context: "An automotive parts business selling through WhatsApp conversations.",
 observed: [
 "Form fills were cheap and worthless; conversations were more expensive and closed.",
 "The measurement setup counted the wrong event.",
 ],
 decided: ["Optimise for conversations started, not form submissions.", "Rebuild the funnel around messaging."],
 rationale: "If the sale happens in chat, the campaign should buy chats, not clicks.",
 built: ["WhatsApp-first campaign structure", "Conversation tracking as the primary conversion event"],
 changed: ["Primary conversion event", "Landing experience replaced by a direct messaging entry"],
 learned: "The cheapest lead was the least valuable one. Changing the event changed the economics.",
 next: "Ongoing.",
 metrics: [
 { value: "12,677", label: "Conversations", source: SRC },
 { value: "674K", label: "Video views", source: SRC },
 { value: "5.5M COP", label: "Media managed", source: SRC },
 ],
 strength: "MEDIUM",
 needs: [
   "RESOLVED 2026-08-14: platform screenshots confirm 12,677 messaging conversations at a cost of 439 per conversation on 5,569,918 spend, and 674,540 two second video plays. Both transcribed on this page. The currency code is still not printed in the source.",
   "Client approval to name", "Date range", "Close rate or revenue attached to conversations if available"],
 },
 {
 slug: "equilibrium",
 client: "Equilibrium",
 nameApproved: false,
 industry: "Health and wellness",
 industrySlug: "health",
 market: "Mexico",
 marketSlug: "mexico",
 businessModel: "Services",
 goal: "Launch",
 goalSlug: "launch",
 services: ["Paid media", "Creative strategy"],
 serviceSlugs: ["paid-media", "creative-strategy"],
 status: "Project",
 duration: "6 months",
 summary: "From zero to 801K MXN in six months.",
 problem: "No existing demand, no historical data, no baseline. Everything had to be established from the first month.",
 context: "A new offer entering the Mexican market with no prior paid media history.",
 observed: [
 "With no historical data, the first month was a measurement exercise, not a scaling exercise.",
 ],
 decided: [
 "Spend the first period establishing which audience and message combination worked before committing budget.",
 ],
 rationale: "Launches fail when they scale a guess. The first month buys information, not revenue.",
 built: ["Launch campaign structure", "Creative test matrix across audience and message"],
 changed: ["Budget concentrated behind the combination that survived testing"],
 learned: "Six months from zero was possible because month one was not treated as a revenue month.",
 next: "Project completed.",
 metrics: [{ value: "801K MXN", label: "Revenue generated in 6 months from zero", source: SRC }],
 strength: "MEDIUM",
 needs: [
   "CONFLICT found 2026-08-14: the platform report showing 801,855.28 MXN prints a window of 1 Jan 2025 to 31 May 2026, which is 17 months, not the six months published here. Resolve before this case is quoted.",
   "Client approval to name", "Exact date range", "Media spend behind the 801K MXN"],
 },
 {
 slug: "neurovita",
 client: "Neurovita",
 nameApproved: false,
 industry: "Health and wellness",
 industrySlug: "health",
 market: "Mexico",
 marketSlug: "mexico",
 businessModel: "Services",
 goal: "Launch",
 goalSlug: "launch",
 services: ["Paid media"],
 serviceSlugs: ["paid-media"],
 status: "Project",
 duration: "9 months",
 summary: "From zero to 576K MXN in nine months.",
 problem: "A specialist health offer with a considered purchase and no existing demand capture.",
 context: "A health services provider building demand in Mexico from a standing start.",
 observed: ["Longer consideration meant early conversion data was misleading for the first several weeks."],
 decided: ["Judge performance on a lag window matched to the actual decision cycle, not on weekly numbers."],
 rationale: "Reading a nine-month sales cycle on a seven-day report produces confident, wrong decisions.",
 built: ["Campaign structure with a reporting window matched to the buying cycle"],
 changed: ["Reporting cadence and the point at which a concept could be judged"],
 learned: "The measurement window mattered more than the creative in the first quarter.",
 next: "Project completed.",
 metrics: [{ value: "576K MXN", label: "Revenue generated in 9 months from zero", source: SRC }],
 strength: "MEDIUM",
 needs: [
   "RESOLVED 2026-08-14: platform report confirms 576,739.30 MXN total sales over 1 Sep 2025 to 31 May 2026, with currency and window printed in the report itself. Transcribed on this page.",
   "Client approval to name", "Exact date range", "Media spend behind the figure"],
 },
 {
 slug: "caviar-de-monte",
 client: "Caviar de Monte",
 nameApproved: false,
 industry: "Food and consumer experiences",
 industrySlug: "food",
 market: "Mexico",
 marketSlug: "mexico",
 businessModel: "Consumer product",
 goal: "Launch",
 goalSlug: "launch",
 services: ["Paid media", "Creative strategy"],
 serviceSlugs: ["paid-media", "creative-strategy"],
 status: "Project",
 duration: "10 months",
 summary: "From zero to 560K MXN in ten months in a premium food category.",
 problem: "A premium product where price is the objection and the category is unfamiliar to most buyers.",
 context: "A specialty food brand introducing a premium product to the Mexican market.",
 observed: ["Discount-led messaging attracted volume that did not convert at the target price point."],
 decided: ["Lead with category education and provenance rather than price."],
 rationale: "Discounting a premium product teaches the market the wrong price.",
 built: ["Creative built around provenance and use", "Audience structure separating category-aware from unaware buyers"],
 changed: ["Message direction moved away from price"],
 learned: "In a premium category, the cheapest traffic was the most expensive traffic.",
 next: "Project completed.",
 metrics: [{ value: "560K MXN", label: "Revenue generated in 10 months from zero", source: SRC }],
 strength: "MEDIUM",
 needs: [
   "CONFLICT found 2026-08-14: the platform report showing 560,563.53 in total sales prints a window of 1 Jun 2025 to 1 Mar 2026, which is nine months, not ten. It also prints no currency code. Resolve both.",
   "Client approval to name", "Exact date range", "Media spend behind the figure"],
 },
 {
 slug: "dra-magaly",
 client: "Dra. Magaly",
 nameApproved: false,
 industry: "Health and wellness",
 industrySlug: "health",
 market: "Mexico",
 marketSlug: "mexico",
 businessModel: "High-ticket services",
 goal: "Lead generation",
 goalSlug: "lead-generation",
 services: ["Paid media", "Measurement"],
 serviceSlugs: ["paid-media", "measurement-intelligence"],
 status: "Ongoing",
 duration: "12 months",
 summary: "Lower cost per conversion on a 3,000 USD ticket in the medical sector.",
 problem:
 "High ticket value meant a single wasted week of budget was expensive, and cost per conversion was drifting upward.",
 context: "A medical practice with a 3,000 USD average ticket running Google.",
 observed: [
 "Search terms were attracting price-shoppers rather than qualified patients.",
 "Cost per conversion rose as volume rose, which meant the audience was widening in the wrong direction.",
 ],
 decided: ["Tighten qualification at the query level rather than lowering bids."],
 rationale:
 "At this ticket value, fewer better conversations beat more cheaper ones. The lever was who arrived, not what they cost.",
 built: ["Rebuilt search structure with tighter qualification", "Conversion tracking aligned to booked consultations"],
 changed: ["Query targeting", "Which conversions counted"],
 learned: "Cost per conversion improved by reducing eligible traffic, not by bidding differently.",
 next: "Ongoing.",
 metrics: [
 { value: "1,540", label: "Conversions", source: SRC },
 { value: "3,000 USD", label: "Average ticket value", source: SRC },
 ],
 strength: "HIGH",
 needs: [
   "STILL REQUIRED 2026-08-14: no screenshot in the reviewed set corresponds to the figures published here.",
   "Client approval to name", "Date range", "Before and after cost per conversion figures"],
 },
 {
 slug: "mg-spa",
 client: "MG SPA",
 nameApproved: false,
 industry: "Beauty and wellness",
 industrySlug: "beauty",
 market: "Mexico",
 marketSlug: "mexico",
 businessModel: "Local services",
 goal: "Demand generation",
 goalSlug: "demand-generation",
 services: ["Paid media"],
 serviceSlugs: ["paid-media"],
 status: "Closed project",
 duration: "Completed",
 summary: "High-volume search visibility converting at scale.",
 problem: "Local demand existed but the business was invisible at the moment people searched.",
 context: "A wellness business competing for local search demand.",
 observed: ["Impression share was the constraint, not conversion rate."],
 decided: ["Prioritise visibility on high-intent local queries before optimising the funnel."],
 rationale: "When the conversion path already works, the missing input is being present when people look.",
 built: ["Search campaign structure built around local intent"],
 changed: ["Coverage of high-intent queries"],
 learned: "The funnel was not broken. The business simply was not showing up.",
 next: "Project closed.",
 metrics: [
 { value: "32,000", label: "Conversions", source: SRC },
 { value: "5.32M", label: "Impressions", source: SRC },
 ],
 strength: "MEDIUM",
 needs: [
   "STILL REQUIRED 2026-08-14: no screenshot in the reviewed set corresponds to the figures published here.",
   "Client approval to name", "Date range", "Definition of the counted conversion"],
 },
 {
 slug: "paola-garcia",
 client: "Paola García",
 nameApproved: false,
 industry: "Professional services",
 industrySlug: "professional-services",
 market: "Mexico",
 marketSlug: "mexico",
 businessModel: "Practice / personal brand",
 goal: "Lead generation",
 goalSlug: "lead-generation",
 services: ["Paid media", "Messaging funnels"],
 serviceSlugs: ["paid-media", "web-conversion"],
 status: "Ongoing",
 duration: "12 months",
 summary: "Seven to ten appointments a day on a small budget.",
 problem: "A small budget with no room for waste, in a category where trust decides the booking.",
 context: "A therapist building a full appointment calendar through Meta.",
 observed: [
 "Conversations converted to appointments far better than any form-based path.",
 "Cost per conversation was low enough that volume, not efficiency, became the constraint.",
 ],
 decided: ["Buy conversations directly and let the practitioner qualify in the chat."],
 rationale: "In trust-led services, the fastest path to a booking is a human reply, not a landing page.",
 built: ["Conversation-first campaign structure", "Appointment tracking tied back to conversation volume"],
 changed: ["Primary conversion event and the daily appointment target"],
 learned: "Small budgets are not a limitation when the conversion event is the right one.",
 next: "Ongoing.",
 metrics: [
 { value: "7 to 10", label: "Appointments per day", source: SRC },
 { value: "~10 MXN", label: "Cost per conversation", source: SRC },
 ],
 strength: "HIGH",
 needs: [
   "UNRESOLVED 2026-08-14: a screenshot showing 2,301 conversations at 10.16 each is a possible match to the roughly 10 MXN per conversation figure published here, but the conversation count is not published and no currency appears in the screenshot. Not treated as a match.",
   "Client approval to name", "Date range", "Monthly media spend for context"],
 },
 {
 slug: "restaurante-espiritu",
 client: "Restaurante Espíritu",
 nameApproved: false,
 industry: "Restaurants and hospitality",
 industrySlug: "restaurants",
 market: "Latin America",
 marketSlug: "latam",
 businessModel: "Hospitality",
 goal: "Launch",
 goalSlug: "launch",
 services: ["Paid media", "Creative strategy"],
 serviceSlugs: ["paid-media", "creative-strategy"],
 status: "Project",
 duration: "About 4 months",
 summary: "A launch campaign with return on ad spend between 45x and 67x.",
 problem: "A launch window with a fixed date and no second chance to build anticipation.",
 context: "A restaurant launch in Colombia running Meta and Google across a four-month window.",
 observed: [
 "Demand was concentrated in a short window, which meant pacing mattered more than efficiency.",
 ],
 decided: ["Front-load creative variety before the launch date rather than optimising after it."],
 rationale: "In a launch you cannot iterate your way out of a bad first week. The testing has to happen earlier.",
 built: ["Pre-launch creative testing", "Launch-week media plan across Meta and Google"],
 changed: ["Where creative effort sat in the timeline"],
 learned: "The results came from work completed before the launch date, not from optimisation after it.",
 next: "Project completed.",
 metrics: [
 { value: "45x to 67x", label: "Return on ad spend", source: SRC },
 { value: "820", label: "Leads", source: SRC },
 { value: "Up to 447M COP", label: "In revenue", source: SRC },
 ],
 strength: "LOW",
 needs: [
   "Downgraded from HIGH to LOW on 2026-08-14. The asset review found no screenshot, export or platform record supporting any part of this case. Until that exists it is not presented in a lead position.",
   
 "Client approval to name",
 "Exact date range and media spend for the ROAS figures",
 "Confirmation of how revenue was attributed, since 45x to 67x is high enough that buyers will ask",
 ],
 },
 {
 slug: "encanto-colombiano",
 client: "Encanto Colombiano",
 nameApproved: false,
 industry: "Food and consumer experiences",
 industrySlug: "food",
 market: "Latin America",
 marketSlug: "latam",
 businessModel: "Consumer experiences",
 goal: "Demand generation",
 goalSlug: "demand-generation",
 services: ["Paid media", "Content and creative"],
 serviceSlugs: ["paid-media", "content-creative"],
 status: "Ongoing",
 duration: "12 months",
 summary: "Community and demand growth on Meta at 5.65 USD per conversation.",
 problem: "Audience growth and commercial demand were being treated as the same objective, and neither was measured properly.",
 context: "A consumer experience brand growing on Meta in Colombia.",
 observed: ["Profile visits and conversations responded to different creative."],
 decided: ["Separate audience-building creative from demand creative and fund them independently."],
 rationale: "Merging the two objectives makes both unmeasurable.",
 built: ["Split campaign structure by objective", "Separate reporting for community and demand"],
 changed: ["Creative brief split by objective"],
 learned: "Community growth and demand generation needed different creative, not the same creative with more budget.",
 next: "Ongoing.",
 metrics: [
 { value: "497", label: "Conversations", source: SRC },
 { value: "5.65 USD", label: "Cost per conversation", source: SRC },
 { value: "7,492", label: "Instagram visits", source: SRC },
 ],
 strength: "MEDIUM",
 needs: [
   "CORRECTION 2026-08-14: the 5.65 figure published as a cost per click is a cost per messaging conversation started, per the platform screenshot. 497 conversations and 7,492 profile visits are both confirmed. Fix the label wherever it appears.",
   "Client approval to name", "Date range", "Revenue or booking outcome if available"],
 },
 {
 slug: "camino-de-san-jose",
 client: "Camino de San José",
 nameApproved: false,
 industry: "Real estate and construction",
 industrySlug: "real-estate",
 market: "Mexico",
 marketSlug: "mexico",
 businessModel: "Development",
 goal: "Demand generation",
 goalSlug: "demand-generation",
 services: ["Paid media"],
 serviceSlugs: ["paid-media"],
 status: "Ongoing",
 duration: "Ongoing",
 summary: "Traffic at 0.22 MXN per click, with direct conversations as the real outcome.",
 problem: "Cheap traffic was easy to buy in this category, which made it easy to mistake volume for progress.",
 context: "A development project running Meta in Mexico.",
 observed: ["Click cost fell far below benchmark while conversation volume stayed flat for a period."],
 decided: ["Report conversations as the headline number and treat clicks as a secondary diagnostic."],
 rationale: "A number that looks impressive and predicts nothing is worse than no number.",
 built: ["Campaign structure with conversations as the primary event"],
 changed: ["Which number led the report"],
 learned: "0.22 MXN per click was only meaningful once we could tie it to conversations.",
 next: "Ongoing.",
 metrics: [
 { value: "41,164", label: "Link clicks", source: SRC },
 { value: "0.22 MXN", label: "Cost per click", source: SRC },
 { value: "230", label: "Direct conversations", source: SRC },
 ],
 strength: "MEDIUM",
 needs: [
   "PARTIALLY RESOLVED 2026-08-14: platform screenshot confirms 230 conversations at 4.61 each on 1,060.09 spend. The 41,164 clicks and 0.22 per click figures do not appear in any reviewed screenshot, and no currency code is printed.",
   "Client approval to name", "Date range", "Conversion or sales outcome tied to the 230 conversations"],
 },
];

export const caseFilters = {
 goal: [
 { slug: "revenue-growth", label: "Revenue growth" },
 { slug: "lead-generation", label: "Lead generation" },
 { slug: "demand-generation", label: "Demand generation" },
 { slug: "launch", label: "Launch" },
 { slug: "new-market", label: "Enter a new market" },
 ],
 market: [
 { slug: "united-states", label: "United States" },
 { slug: "mexico", label: "Mexico" },
 { slug: "latam", label: "Latin America" },
 ],
 industry: [
 { slug: "ecommerce", label: "Ecommerce" },
 { slug: "health", label: "Health and wellness" },
 { slug: "restaurants", label: "Restaurants and hospitality" },
 { slug: "food", label: "Food and consumer experiences" },
 { slug: "professional-services", label: "Professional services" },
 { slug: "beauty", label: "Beauty and wellness" },
 { slug: "automotive", label: "Automotive and fleet" },
 { slug: "real-estate", label: "Real estate and construction" },
 ],
 service: [
 { slug: "paid-media", label: "Paid media" },
 { slug: "creative-strategy", label: "Creative strategy" },
 { slug: "measurement-intelligence", label: "Measurement" },
 { slug: "web-conversion", label: "Web and conversion" },
 { slug: "content-creative", label: "Content and creative" },
 ],
};

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
export const caseSlugs = cases.map((c) => c.slug);
