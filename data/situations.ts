export type Situation = {
  slug: string;
  number: string;
  title: string;
  navLabel: string;
  line: string;
  intro: string;
  signals: string[];
  whatUsuallyGoesWrong: string;
  whatWeDo: { heading: string; body: string }[];
  firstThirtyDays: { day: string; action: string }[];
  proofNeeded: string[];
  relatedServices: string[];
  relatedCases: string[];
  ctaLabel: string;
};

export const situations: Situation[] = [
  {
    slug: "replacing-an-agency",
    number: "01",
    title: "You are replacing an agency",
    navLabel: "Replacing an agency",
    line: "You already know how this goes wrong. That makes you easier to work with, not harder.",
    intro:
      "Most businesses that talk to us have done this before. They are not looking for education about marketing. They want to know who will actually run the account, what happens to everything they built, and whether month seven looks like month one. Those are reasonable questions and this page answers them before you have to ask.",
    signals: [
      "The people who sold you are not the people running the work",
      "Reports arrive full of numbers that never connect to revenue",
      "Response times have quietly stretched from same-day to several days",
      "Nobody has proposed a new idea in a quarter",
      "You are not sure whether you own your own ad accounts",
      "You asked for the strategy and received a list of activities",
    ],
    whatUsuallyGoesWrong:
      "Switching agencies usually costs more than the fee difference, because the transition is done badly. Historical data gets stranded in someone else's account, the learning from two years of testing disappears, and the new agency spends its first quarter rediscovering what the old one already knew.",
    whatWeDo: [
      {
        heading: "Secure what is yours before anything else",
        body: "Before any strategy work, we go through the ownership checklist with you: ad accounts, Business Manager, pixels, Google Ads, GA4, GTM, domain, DNS, creative source files, historical campaign exports and CRM data. Much of this is easier to secure while the current relationship is still live.",
      },
      {
        heading: "Preserve the learning, not just the assets",
        body: "Historical performance data is worth more than the assets. We export and structure what exists so that the last two years of tests inform the next decision instead of being repeated.",
      },
      {
        heading: "Stabilise before optimising",
        body: "In the first weeks we do not rebuild everything. We verify measurement integrity, stop the clearly unprofitable, and leave the rest alone until we can tell the difference between a bad campaign and a mismeasured one.",
      },
      {
        heading: "Write down what we inherited",
        body: "You get a written read of the account you handed us, including what the previous team did well. That document becomes the first entry in your decision log.",
      },
    ],
    firstThirtyDays: [
      { day: "Days 1 to 5", action: "Access transfer and ownership verification. Nothing is rebuilt yet." },
      { day: "Days 6 to 12", action: "Measurement integrity check. We find out which numbers can be trusted." },
      { day: "Days 13 to 20", action: "Written diagnosis of the inherited account, including what to keep." },
      { day: "Days 21 to 30", action: "First decisions logged, thresholds agreed, 90-day plan delivered." },
    ],
    proofNeeded: [
      "Which accounts are currently under someone else's ownership",
      "Whether historical data can still be exported",
      "What your current contract says about notice and asset transfer",
    ],
    relatedServices: ["measurement-intelligence", "paid-media", "growth-strategy"],
    relatedCases: ["dr-mon", "dra-magaly"],
    ctaLabel: "Start with a Second Opinion",
  },
  {
    slug: "in-house-team",
    number: "02",
    title: "You have an internal team and need more capacity",
    navLabel: "Supporting an in-house team",
    line: "We are not here to replace your marketer. Replacing them is usually the mistake.",
    intro:
      "The pattern that works is one accountable internal owner plus outside specialist depth. The pattern that fails is an agency that quietly tries to become the marketing department. Your internal person holds context nobody outside the business can replicate, and that context is what makes external work land.",
    signals: [
      "One or two people are covering five disciplines",
      "Strategy is clear but execution is the bottleneck",
      "You need specialist depth that does not justify a full-time hire",
      "Campaign volume spikes and then collapses depending on internal capacity",
      "Your team is doing production work instead of the work only they can do",
    ],
    whatUsuallyGoesWrong:
      "Agencies get hired to add capacity and then start behaving like they own the strategy, which puts the internal owner in a defensive position. Six months later the internal team is managing the agency instead of doing marketing, and nobody is better off.",
    whatWeDo: [
      {
        heading: "Agree the split in writing before we start",
        body: "We map what your team owns, what we own, and what is genuinely shared. It goes on one page and it is revisited every quarter, because it will change.",
      },
      {
        heading: "Plug into your rhythm, not ours",
        body: "Your standups, your tools, your naming conventions. We adapt to your operating cadence rather than importing an agency process on top of a working team.",
      },
      {
        heading: "Leave the capability behind",
        body: "Playbooks, testing structures and decision frameworks stay documented in your systems. If we stop working together, your team keeps the operating system.",
      },
      {
        heading: "Make the internal owner look good",
        body: "Reporting is built so your marketing lead can defend the budget to their CEO or CFO without translating it first.",
      },
    ],
    firstThirtyDays: [
      { day: "Week 1", action: "Capability map built with your team. Who owns what, in writing." },
      { day: "Week 2", action: "Tooling, access and cadence aligned to your existing setup." },
      { day: "Week 3", action: "First workstream live in the agreed area only." },
      { day: "Week 4", action: "Review of the split. Adjust before it calcifies." },
    ],
    proofNeeded: [
      "Current team structure and where the capacity gap actually sits",
      "Which tools your team already uses",
    ],
    relatedServices: ["content-creative", "creative-strategy", "paid-media"],
    relatedCases: ["klean-vet"],
    ctaLabel: "Map the capability split",
  },
  {
    slug: "growth-plateau",
    number: "03",
    title: "Growth has plateaued",
    navLabel: "Growth has plateaued",
    line: "The answer is not automatically more spend. Usually it is not.",
    intro:
      "A plateau is a diagnosis problem before it is a budget problem. Seven things can cause it and only one of them is media budget. Diagnosing the wrong one is expensive, and it is the most common way a growing business spends a year going sideways.",
    signals: [
      "Increasing spend produces proportionally less return",
      "Cost per acquisition climbs every quarter",
      "Creative tests all land in the same narrow band",
      "The same channel mix has run unchanged for over a year",
      "Revenue is flat while activity is up",
    ],
    whatUsuallyGoesWrong:
      "The default response is to add budget or add a channel. Both feel like action. Neither works when the constraint is the offer, the conversion path, or the fact that the measurement has been wrong for eight months.",
    whatWeDo: [
      {
        heading: "Test all seven constraints, not the convenient one",
        body: "Offer, positioning, creative, channel, conversion path, measurement integrity, and team capacity. We work through them in order of cost to fix, not in order of what we happen to sell.",
      },
      {
        heading: "Prove the constraint before proposing the plan",
        body: "You get the evidence for the diagnosis before you get a recommendation. If the evidence says the constraint is your pricing or your sales follow-up, we will say so even though neither is something we would bill for.",
      },
      {
        heading: "Sequence the fix",
        body: "Fixing the wrong thing first wastes a quarter. The plan is ordered by what unblocks the most, soonest.",
      },
    ],
    firstThirtyDays: [
      { day: "Week 1", action: "Measurement integrity, because a mismeasured plateau is not a plateau." },
      { day: "Week 2", action: "Constraint testing across offer, creative, channel and conversion." },
      { day: "Week 3", action: "Written diagnosis with the evidence attached." },
      { day: "Week 4", action: "Sequenced 90-day plan and agreed thresholds." },
    ],
    proofNeeded: ["12 to 24 months of performance history", "Revenue and margin by product or service"],
    relatedServices: ["growth-strategy", "measurement-intelligence", "web-conversion"],
    relatedCases: ["dr-mon", "dra-magaly"],
    ctaLabel: "Diagnose the constraint",
  },
  {
    slug: "launching",
    number: "04",
    title: "You are launching or repositioning",
    navLabel: "Launching or repositioning",
    line: "Launches are won before the launch date.",
    intro:
      "A launch compresses every marketing decision into a short window with no room to iterate your way out of a bad start. The work that determines the outcome happens before anything goes live, which is exactly the work that usually gets cut for time.",
    signals: [
      "A fixed launch date with real revenue attached",
      "A new product, market or price point with no historical data",
      "A repositioning that the current site and creative cannot carry",
      "One shot at a seasonal or event-driven window",
    ],
    whatUsuallyGoesWrong:
      "Teams spend the pre-launch period on assets and the post-launch period discovering that the message was wrong. By then the window has closed.",
    whatWeDo: [
      {
        heading: "Test the message before the launch, not after",
        body: "Concept testing runs in the weeks before launch so that the first day of spend is behind an angle that already survived contact with an audience.",
      },
      {
        heading: "Build the whole path, not just the campaign",
        body: "Positioning, creative, the conversion path and measurement, sequenced so nothing is discovered late.",
      },
      {
        heading: "Plan the first two weeks in detail",
        body: "Pacing, thresholds and the decision points are agreed in advance, including what we do if week one underperforms.",
      },
    ],
    firstThirtyDays: [
      { day: "Pre-launch", action: "Positioning locked, concepts tested, conversion path instrumented." },
      { day: "Launch week", action: "Daily reads against pre-agreed thresholds." },
      { day: "Weeks 2 to 4", action: "Scale what survived, stop what did not, record why." },
    ],
    proofNeeded: ["Launch date and committed budget", "Whether the offer has been validated with real buyers"],
    relatedServices: ["brand-positioning", "creative-strategy", "paid-media", "web-conversion"],
    relatedCases: ["restaurante-espiritu", "equilibrium", "caviar-de-monte"],
    ctaLabel: "Plan the launch",
  },
  {
    slug: "cross-border-growth",
    number: "05",
    title: "You are growing across the US and Mexico",
    navLabel: "US and Mexico growth",
    line: "Translation moves words. It does not move the reasons people buy.",
    intro:
      "BOOST operates natively in both markets, with people in San Antonio and Monterrey. That is an operating structure, not a language claim. The work that matters is building for the buyer in each market rather than adapting one market's creative into the other's language.",
    signals: [
      "A US brand whose Hispanic-market results lag its general-market results",
      "A US company entering Mexico for the first time",
      "A Mexican company selling into the United States",
      "A brand running one creative set across two markets and wondering why one underperforms",
    ],
    whatUsuallyGoesWrong:
      "The default approach is to translate. Translated creative fails because the references, the proof points, the price expectations and the objections are different, and none of that is a language problem.",
    whatWeDo: [
      {
        heading: "Build natively in each market",
        body: "Separate creative hypotheses, separate proof, separate audience structures. Learning transfers between markets deliberately, not by default.",
      },
      {
        heading: "Keep the learning in one system",
        body: "Two markets, one Creative Memory. What works in one becomes a hypothesis in the other rather than an assumption.",
      },
      {
        heading: "Use the cross-border structure as leverage",
        body: "Production capacity in Mexico and market presence in the US means volume at a cost structure a US-only team finds difficult to match. That is a commercial advantage, and we say so plainly rather than dressing it up.",
      },
    ],
    firstThirtyDays: [
      { day: "Week 1", action: "Market-by-market diagnosis. Which market is actually the constraint." },
      { day: "Week 2", action: "Native creative hypotheses per market, not adapted assets." },
      { day: "Weeks 3 to 4", action: "Separate account structures live, shared learning record opened." },
    ],
    proofNeeded: [
      "Current performance split by market",
      "Whether existing creative was built natively or translated",
    ],
    relatedServices: ["creative-strategy", "paid-media", "content-creative"],
    relatedCases: ["gold-monkeys", "dr-mon", "klean-vet"],
    ctaLabel: "Talk about both markets",
  },
];

export const getSituation = (slug: string) => situations.find((s) => s.slug === slug);
export const situationSlugs = situations.map((s) => s.slug);
