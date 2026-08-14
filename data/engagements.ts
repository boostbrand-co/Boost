export type Engagement = {
 slug: string;
 number: string;
 name: string;
 line: string;
 bestFor: string;
 description: string;
 includes: string[];
 commitment: string;
 investment: string;
 outcome: string;
 isEntry?: boolean;
};

export const engagements: Engagement[] = [
 {
 slug: "second-opinion",
 number: "01",
 name: "Second Opinion",
 line: "A paid diagnostic with a real artifact at the end.",
 bestFor: "Businesses replacing an agency, or about to commit budget they want pressure-tested first.",
 description:
 "A fixed-scope, fixed-timeline read of your marketing: what is working, what is not, what the constraint actually is, and what we would do about it. It is deliberately not a free audit. Free audits are built to alarm you into a contract. This is built to be correct, including when the correct answer is that you do not need us.",
 includes: [
 "Measurement integrity check across platforms, analytics and CRM",
 "Account and creative review with the evidence attached",
 "Written diagnosis naming the constraint",
 "90-day recommendation with sequencing",
 "A walkthrough call, recorded, so your team can rewatch it",
 ],
 commitment: "Fixed scope. No obligation to continue.",
 investment: "[INVESTMENT RANGE TO CONFIRM], fixed fee, credited against the first invoice if you continue within 30 days.",
 outcome: "You end up with a decision you can defend, whether or not you work with us.",
 isEntry: true,
 },
 {
 slug: "core-partnership",
 number: "02",
 name: "Core Growth Partnership",
 line: "The operating system, running continuously.",
 bestFor: "Businesses that need strategy, measurement and execution coordinated rather than bought separately.",
 description:
 "The full loop: strategy and direction, creative strategy, paid media, measurement and the decision log, run as one system with named people who stay on the account. This is the engagement most clients are on.",
 includes: [
 "Named team with defined ownership, disclosed before you sign",
 "Growth thesis, reviewed quarterly",
 "Creative strategy and testing against written hypotheses",
 "Paid media across the channels that fit your buyer",
 "Monthly decision report and a maintained decision log",
 "Creative Memory that stays yours",
 ],
 commitment: "Initial 90-day term, then month to month with 30 days notice.",
 investment: "[INVESTMENT RANGE TO CONFIRM], management fee stated separately from media spend, always.",
 outcome: "Marketing that is measurably better informed each quarter than it was the one before.",
 },
 {
 slug: "variable-capacity",
 number: "03",
 name: "Variable Capacity",
 line: "Specialist depth without permanent headcount.",
 bestFor: "In-house teams that own the strategy and need production, paid, web or specialist capacity.",
 description:
 "Agreed capacity in a defined discipline, added to a team that already knows what it wants. Scoped by output rather than by hours, so the conversation is about what gets made rather than how long it took.",
 includes: [
 "Agreed monthly capacity in the discipline you need",
 "Integration into your tools and rhythm, not ours",
 "A written split of who owns what",
 "Assets and source files delivered to you as standard",
 ],
 commitment: "Month to month after an initial cycle. Scale up or down between cycles.",
 investment: "[INVESTMENT RANGE TO CONFIRM], priced by agreed capacity.",
 outcome: "Your team keeps ownership and gets the depth it was missing.",
 },
 {
 slug: "launch-sprint",
 number: "04",
 name: "Launch or Reposition Sprint",
 line: "A defined project with a date attached.",
 bestFor: "Product launches, market entries, repositioning, or a fixed seasonal window.",
 description:
 "Positioning, creative, conversion path and launch media, sequenced backwards from your launch date so the testing happens while there is still time for it to matter.",
 includes: [
 "Positioning and message testing before launch",
 "Creative concepts tested pre-launch",
 "Conversion path built and instrumented",
 "Launch media plan with pre-agreed thresholds",
 "Post-launch read and the decision record",
 ],
 commitment: "Fixed scope, fixed timeline, agreed at kickoff.",
 investment: "[INVESTMENT RANGE TO CONFIRM], fixed project fee.",
 outcome: "A launch whose first week is executing a plan rather than discovering one.",
 },
];

export const fit = {
 mayFit: [
 "You have an established business with real revenue and a marketing budget you are willing to defend",
 "You want the reasoning, not just the deliverables",
 "You can give access to revenue, margin and CRM data",
 "You have someone internally who can make a decision inside a week",
 "You are replacing an agency and know exactly what went wrong last time",
 "You are growing across the US and Mexico and are tired of translated campaigns",
 ],
 probablyNot: [
 "You have not found product-market fit yet. Marketing amplifies what exists; it cannot create demand for something the market has not accepted.",
 "Your media budget is too small for testing to produce a signal. We will tell you where that threshold sits in your category rather than taking the work.",
 "You want the cheapest possible social posting. That is a real service and there are good providers, but it is not what this is.",
 "You want guaranteed results by a specific date. Anyone who guarantees that controls the definition of the result.",
 "You are not willing to share business data. Without revenue and margin we would be optimising numbers that do not matter.",
 "You need one small task done once. A freelancer will serve you better and cost less.",
 ],
};

export const getEngagement = (slug: string) => engagements.find((e) => e.slug === slug);
