export type ServiceArtifact = { label: string; caption: string };

export type Service = {
  slug: string;
  group: string;
  name: string;
  shortName: string;
  oneLine: string;
  problem: string;
  forWho: string[];
  triggers: string[];
  whatWeDo: string[];
  youReceive: string[];
  youProvide: string[];
  systemRole: string;
  cadence: { label: string; value: string }[];
  whoWorksOnIt: string[];
  artifact: ServiceArtifact;
  investmentSignal: string;
  dontBuyIf: string[];
  faqs: { q: string; a: string }[];
  relatedCases: string[];
  relatedServices: string[];
};

export const serviceGroups = [
  {
    slug: "strategy-direction",
    number: "01",
    name: "Strategy and direction",
    line: "Deciding what to do, and what to stop doing.",
    blurb:
      "Positioning, growth strategy and the operating plan that makes the rest of the work decidable. This is where the constraint gets named.",
    services: ["growth-strategy", "brand-positioning"],
  },
  {
    slug: "creative-content",
    number: "02",
    name: "Creative and content",
    line: "Ideas built to be tested, not just produced.",
    blurb:
      "Creative strategy sets the angle and the hypothesis. Production makes enough of it to learn something. The two are separate jobs and we treat them that way.",
    services: ["creative-strategy", "content-creative"],
  },
  {
    slug: "growth-acquisition",
    number: "03",
    name: "Growth and acquisition",
    line: "Paid media run against business numbers.",
    blurb:
      "Meta, Google, TikTok and messaging funnels, structured so that the decisions inside the account map to decisions in the business.",
    services: ["paid-media"],
  },
  {
    slug: "web-conversion",
    number: "04",
    name: "Web and conversion",
    line: "The part of the funnel most budgets ignore.",
    blurb:
      "Sites, landing systems and the conversion path between an ad and a sale. Usually the cheapest place to find growth and the last place anyone looks.",
    services: ["web-conversion"],
  },
  {
    slug: "measurement-intelligence",
    number: "05",
    name: "Measurement and intelligence",
    line: "Knowing what happened, and why.",
    blurb:
      "Tracking, reporting and the decision log. This group is what makes the other four compound instead of resetting every quarter.",
    services: ["measurement-intelligence"],
  },
];

export const services: Service[] = [
  {
    slug: "growth-strategy",
    group: "strategy-direction",
    name: "Growth strategy",
    shortName: "Growth strategy",
    oneLine: "Find the constraint, then build the plan around it.",
    problem:
      "Most marketing plans are a list of channels. That works until growth stalls, at which point nobody can say whether the problem is the offer, the creative, the channel, the conversion path or the price. Spending more money on the wrong constraint is the most common way marketing budgets disappear.",
    forWho: [
      "Businesses between roughly 1M and 50M in revenue with real budget and a growth question they cannot answer internally",
      "Founders who have outgrown doing it themselves",
      "Marketing leads who need an outside read they can defend internally",
    ],
    triggers: [
      "Growth flattened and nobody agrees on why",
      "Spend went up and results did not",
      "You are about to commit a significant budget and want the plan pressure-tested first",
      "A previous agency delivered activity without a thesis",
    ],
    whatWeDo: [
      "Diagnose the constraint across offer, creative, channel, conversion and measurement rather than assuming it is media",
      "Build the growth thesis: what we believe, why, and what would prove us wrong",
      "Set the numbers that decide budget, and the thresholds that trigger a change",
      "Sequence the work so the first 90 days answer the biggest unknown",
    ],
    youReceive: [
      "A written diagnosis naming the constraint and the evidence behind it",
      "A 90-day plan with decisions, owners and dates",
      "The measurement definitions everything else will be judged against",
      "A decision log, opened on day one and maintained for the life of the engagement",
    ],
    youProvide: [
      "Access to your ad accounts, analytics and CRM, read-only is fine to start",
      "Revenue, margin and close-rate data at whatever granularity you have",
      "Two to four hours of leadership time in the first three weeks",
    ],
    systemRole:
      "Strategy is the SEE and DECIDE phases of the loop. Nothing enters production until there is a written hypothesis attached to it.",
    cadence: [
      { label: "Diagnostic", value: "2 to 3 weeks" },
      { label: "Plan", value: "Delivered in week 3 or 4" },
      { label: "Ongoing", value: "Monthly decision review, quarterly re-diagnosis" },
    ],
    whoWorksOnIt: ["Growth strategist (owns the thesis)", "Measurement lead (owns the numbers behind it)"],
    artifact: {
      label: "Growth thesis and decision log",
      caption:
        "The one-page thesis, the numbers it will be judged on, and the log entry that opens the engagement.",
    },
    investmentSignal:
      "Sold as a fixed-scope diagnostic, or included in a Core Partnership. [INVESTMENT RANGE TO CONFIRM]",
    dontBuyIf: [
      "You have not found product-market fit yet. Strategy cannot substitute for a product people want.",
      "You already know the constraint and simply need execution capacity. Buy the capacity instead.",
      "You are not willing to share revenue or margin data. Without it the work is guesswork with better formatting.",
    ],
    faqs: [
      {
        q: "Is this a strategy deck?",
        a: "No. It is a written diagnosis, a 90-day plan with dates and owners, and a set of measurement definitions. If it cannot be executed against, it is not finished.",
      },
      {
        q: "Do we have to buy execution from you afterwards?",
        a: "No. The plan is yours. Some clients run it internally, some bring us in to execute, some do both.",
      },
      {
        q: "How is this different from a free audit?",
        a: "A free audit is a sales tool built to find alarming things. A paid diagnostic is built to be right, including when the answer is that your marketing is fine and the problem is elsewhere.",
      },
    ],
    relatedCases: ["dr-mon", "dra-magaly"],
    relatedServices: ["measurement-intelligence", "creative-strategy"],
  },
  {
    slug: "brand-positioning",
    group: "strategy-direction",
    name: "Brand and positioning",
    shortName: "Brand and positioning",
    oneLine: "Say the thing that makes the rest of the marketing cheaper.",
    problem:
      "When positioning is unclear, every channel pays a tax. Creative takes longer, ads cost more, the sales conversation restarts every time, and no amount of media budget fixes it. Positioning work is usually mistaken for a visual exercise, which is why it usually fails.",
    forWho: [
      "Businesses whose category has become crowded and whose message no longer separates them",
      "Companies launching, repositioning, or entering a second market",
      "Brands whose paid media works but whose cost per acquisition keeps climbing",
    ],
    triggers: [
      "Prospects ask what makes you different and the answer takes a paragraph",
      "You are entering a market where nobody knows you",
      "Sales and marketing describe the company differently",
      "Creative testing plateaus because every angle says the same thing",
    ],
    whatWeDo: [
      "Interview the people who actually buy, not just the people who sell",
      "Map what competitors claim, and find the space that is both true and unoccupied",
      "Write the positioning, the proof it rests on, and the messages that carry it",
      "Translate it into the assets that touch a buyer: site, ads, sales material",
    ],
    youReceive: [
      "A positioning statement with the evidence behind it",
      "Messaging by audience and by buying stage",
      "Proof requirements: what you need to be able to show for each claim",
      "Application guidance for site, paid media and sales",
    ],
    youProvide: [
      "Access to customers for interviews, four to six is usually enough",
      "Win and loss information if you have it",
      "Decision-maker time, since positioning cannot be approved by committee after the fact",
    ],
    systemRole:
      "Positioning sets the boundary conditions for every creative hypothesis that follows. It enters the Creative Memory as the layer everything else is tested against.",
    cadence: [
      { label: "Typical duration", value: "4 to 6 weeks" },
      { label: "Client time", value: "About 8 hours total" },
      { label: "Review", value: "Revisited annually or on a market change" },
    ],
    whoWorksOnIt: ["Strategy lead", "Creative director", "Researcher for customer interviews"],
    artifact: {
      label: "Positioning and proof map",
      caption: "Each claim paired with the specific evidence that lets you make it.",
    },
    investmentSignal: "Fixed-scope project. [INVESTMENT RANGE TO CONFIRM]",
    dontBuyIf: [
      "You want a new logo. That is design, and it is a different purchase.",
      "You cannot give us access to customers. Positioning built from internal opinion is expensive fiction.",
      "The real problem is that the product does not deliver. Positioning makes that worse, faster.",
    ],
    faqs: [
      {
        q: "Does this include visual identity?",
        a: "It can, as a separate scope. The strategic work comes first because designing an identity around unsettled positioning means paying for it twice.",
      },
      {
        q: "How do you avoid generic outcomes?",
        a: "Every claim has to survive a proof test. If we cannot show what makes it true, it does not go in.",
      },
    ],
    relatedCases: ["caviar-de-monte", "gold-monkeys"],
    relatedServices: ["creative-strategy", "growth-strategy"],
  },
  {
    slug: "creative-strategy",
    group: "creative-content",
    name: "Creative strategy",
    shortName: "Creative strategy",
    oneLine: "Decide what to make, and what the result would mean.",
    problem:
      "AI made producing creative close to free, which means volume is no longer the differentiator. The scarce skill is deciding which angle is worth testing, what a win would prove, and what to do when a concept fails for reasons that have nothing to do with the creative.",
    forWho: [
      "Brands spending enough on paid media that creative is the main performance lever",
      "Teams producing plenty of assets and learning nothing from them",
      "Companies whose creative testing has become variant churn without a thesis",
    ],
    triggers: [
      "Performance is flat while output has increased",
      "Nobody can explain why the winning ad won",
      "Every test produces a result and none of them change the next decision",
      "Creative volume is being outsourced but judgment is not",
    ],
    whatWeDo: [
      "Write hypotheses, not briefs: what we believe about the buyer and what the ad is designed to prove",
      "Structure tests at concept level so results are attributable to an idea rather than a thumbnail",
      "Set kill and scale thresholds before launch so nobody negotiates with a losing ad",
      "Record what each result taught, in language a human can act on six months later",
    ],
    youReceive: [
      "A creative testing plan with hypotheses and thresholds",
      "Concept briefs with the angle, the audience belief and the proof required",
      "A creative learning record that accumulates across quarters",
      "Direction on which winners deserve production investment",
    ],
    youProvide: [
      "Product and customer access so hypotheses are grounded",
      "Ad account access and historical creative performance",
      "Fast feedback on concepts, since testing velocity is the whole point",
    ],
    systemRole:
      "Creative strategy is the CREATE phase and it feeds the LEARN phase. Every test result is written into the Creative Memory whether it won or lost.",
    cadence: [
      { label: "Planning", value: "Monthly concept cycle" },
      { label: "Review", value: "Every two weeks against thresholds" },
      { label: "Memory update", value: "Every cycle, win or lose" },
    ],
    whoWorksOnIt: ["Creative strategist", "Performance lead", "Art direction"],
    artifact: {
      label: "Creative test table",
      caption: "Concept, hypothesis, result, decision, and what it taught. The last column is the one that compounds.",
    },
    investmentSignal: "Included in Core Partnership, or as standalone direction. [INVESTMENT RANGE TO CONFIRM]",
    dontBuyIf: [
      "You are spending too little on media for tests to reach significance. Below meaningful volume this is theatre.",
      "You want assets produced without strategy attached. There are cheaper places to buy that.",
      "Your approval process takes weeks. Slow feedback destroys the learning rate that makes this valuable.",
    ],
    faqs: [
      {
        q: "Do you produce the creative too?",
        a: "Yes, through Content and creative. We separate the two because deciding what to make and making it are genuinely different jobs, and conflating them is how agencies end up producing a lot and learning nothing.",
      },
      {
        q: "How much creative volume do you produce?",
        a: "Enough to answer the question we set. Volume without a hypothesis is expensive noise.",
      },
      {
        q: "Where does AI fit?",
        a: "AI does versioning, resizing, first-draft variants and production assistance. Humans own the angle, the direction and the decision. Our AI disclosure page describes exactly what runs where.",
      },
    ],
    relatedCases: ["klean-vet", "caviar-de-monte", "restaurante-espiritu"],
    relatedServices: ["content-creative", "paid-media"],
  },
  {
    slug: "content-creative",
    group: "creative-content",
    name: "Content and creative production",
    shortName: "Content and production",
    oneLine: "Make enough of the right thing, fast enough to matter.",
    problem:
      "Paid social consumes creative faster than most teams can produce it, and the gap is where performance decays. But producing more of the wrong thing is not a solution, so production has to be connected to strategy rather than run as a content factory.",
    forWho: [
      "Ecommerce and consumer brands with continuous paid media",
      "Businesses whose in-house team is at capacity",
      "Brands who need production velocity without hiring for it permanently",
    ],
    triggers: [
      "Ad performance decays predictably and there is nothing ready to replace it",
      "Creative requests queue behind other internal priorities",
      "You need volume in two languages or two markets",
    ],
    whatWeDo: [
      "Produce ad creative, video, static, and organic content against the tested concepts",
      "Build the variant sets required to isolate what actually drove a result",
      "Localise natively for the second market rather than translating",
      "Maintain a shared asset library your team keeps",
    ],
    youReceive: [
      "Production against an agreed monthly volume",
      "Source files and full asset ownership from day one",
      "Version history tied to what each variant was testing",
    ],
    youProvide: ["Brand assets and access", "Product access for shoots where relevant", "A named approver with real authority"],
    systemRole: "Production sits inside CREATE, downstream of a hypothesis and upstream of a measured result.",
    cadence: [
      { label: "Volume", value: "Agreed per cycle" },
      { label: "Turnaround", value: "Set in the engagement, not per request" },
      { label: "Review", value: "Weekly production standup" },
    ],
    whoWorksOnIt: ["Creative director", "Designers and editors", "Production coordinator"],
    artifact: {
      label: "Production board and version history",
      caption: "What is in production, what it is testing, and what happened to the last version.",
    },
    investmentSignal: "Variable capacity, priced by agreed volume. [INVESTMENT RANGE TO CONFIRM]",
    dontBuyIf: [
      "You want the cheapest possible cost per asset. That is a commodity purchase and you should buy it as one.",
      "There is no testing structure to feed. Production without measurement is just spending.",
    ],
    faqs: [
      {
        q: "Who owns the files?",
        a: "You do, from day one, including source files. It is written into the engagement.",
      },
      {
        q: "Do you use AI in production?",
        a: "Yes, for versioning, resizing, transcription, first drafts and background production tasks. Every asset that reaches a client passes human review. The AI disclosure page lists this in detail.",
      },
    ],
    relatedCases: ["klean-vet", "encanto-colombiano"],
    relatedServices: ["creative-strategy", "paid-media"],
  },
  {
    slug: "paid-media",
    group: "growth-acquisition",
    name: "Paid media",
    shortName: "Paid media",
    oneLine: "Media decisions tied to business numbers, not platform numbers.",
    problem:
      "Platform automation now handles most of the buying. What it cannot do is decide what a conversion is worth, when a result is real, and when the honest answer is to stop spending. Those decisions are where money is made and lost, and they are the ones most agencies quietly avoid making.",
    forWho: [
      "Businesses running meaningful monthly media budgets",
      "Ecommerce brands, considered-purchase services and lead-generation businesses",
      "Companies whose reported ROAS has stopped matching their bank account",
    ],
    triggers: [
      "Platform-reported results and actual revenue have diverged",
      "Cost per acquisition rises every time budget rises",
      "You are entering a new market or channel with real money behind it",
      "You inherited an account nobody can explain",
    ],
    whatWeDo: [
      "Run Meta, Google, TikTok and messaging funnels as one budget, not four",
      "Define the conversion event that matches how your business actually earns",
      "Set spend thresholds and the conditions under which we recommend spending less",
      "Reconcile platform reporting against your own revenue data every month",
    ],
    youReceive: [
      "Media management with a written decision log behind every material change",
      "Monthly reporting built around what happened, why, and what changes next",
      "Full ownership of accounts, pixels and historical data",
      "An explicit recommendation when the answer is not more spend",
    ],
    youProvide: [
      "Ad accounts under your own ownership, we work inside yours rather than ours",
      "Revenue data at whatever granularity exists",
      "A decision-maker who can approve budget changes inside a week",
    ],
    systemRole: "Paid media is the RUN phase. It generates the evidence the rest of the loop depends on.",
    cadence: [
      { label: "First 30 days", value: "Measurement integrity, then structure" },
      { label: "Ongoing", value: "Weekly optimisation, monthly decision review" },
      { label: "Threshold checks", value: "Against agreed kill and scale rules" },
    ],
    whoWorksOnIt: ["Performance lead (owns the account)", "Creative strategist", "Measurement lead"],
    artifact: {
      label: "Decision log entry",
      caption: "Signal, diagnosis, decision, action, result, and what it changed for next month.",
    },
    investmentSignal:
      "Management fee is always stated separately from media spend. We do not take a percentage of your ad budget as our only fee, because it pays us to recommend spending more. [INVESTMENT RANGE TO CONFIRM]",
    dontBuyIf: [
      "Your monthly media budget is too small for testing to produce a signal. We will tell you where that line sits for your category.",
      "You need a guaranteed number of leads. Anyone guaranteeing that controls the definition of a lead, which is the entire game.",
      "You want us to run media inside our own accounts. We do not, because you should own the asset and the history.",
    ],
    faqs: [
      {
        q: "Do you charge a percentage of ad spend?",
        a: "Not as the whole fee. Percentage-only pricing rewards us when your budget grows regardless of whether it should. Fee structure is agreed openly at the start.",
      },
      {
        q: "Who owns the ad accounts?",
        a: "You do, from day one, including the pixel and the historical data. If you leave, everything stays with you and we help transfer access.",
      },
      {
        q: "What happens if performance misses?",
        a: "There is a written protocol. It is on the Client control page, including the point at which we tell you to stop spending or to stop working with us.",
      },
    ],
    relatedCases: ["dr-mon", "gold-monkeys", "dra-magaly", "paola-garcia", "restaurante-espiritu"],
    relatedServices: ["creative-strategy", "measurement-intelligence"],
  },
  {
    slug: "web-conversion",
    group: "web-conversion",
    name: "Web and conversion",
    shortName: "Web and conversion",
    oneLine: "The gap between a click and a sale is usually the cheapest thing to fix.",
    problem:
      "Most businesses buy more traffic before fixing what happens when it arrives. The conversion path is where budget quietly evaporates, and it is invisible in a media report because the media report stops at the click.",
    forWho: [
      "Ecommerce brands with traffic and a conversion rate problem",
      "Service businesses whose enquiry path leaks",
      "Companies whose site was built for a business they no longer run",
    ],
    triggers: [
      "Traffic is up, revenue is not",
      "Paid media works until it hits your landing page",
      "The buying path involves a conversation and the site pretends it involves a form",
      "You are launching an offer that the current site cannot carry",
    ],
    whatWeDo: [
      "Diagnose the conversion path end to end, including the parts that happen off-site",
      "Build sites, landing systems and messaging funnels that match how buying actually happens",
      "Instrument the path so drop-off is visible rather than assumed",
      "Test structure and offer, not button colours",
    ],
    youReceive: [
      "A conversion diagnosis with the drop-off quantified",
      "Built and instrumented pages or systems",
      "Full ownership of the code, the domain and the analytics",
    ],
    youProvide: ["Access to the current site and analytics", "Content and product information", "A single approver"],
    systemRole:
      "Conversion work sits between RUN and MEASURE. It is frequently the constraint that media budget cannot solve.",
    cadence: [
      { label: "Diagnosis", value: "1 to 2 weeks" },
      { label: "Build", value: "Scoped per project" },
      { label: "Ongoing", value: "Test cycle tied to media volume" },
    ],
    whoWorksOnIt: ["Conversion strategist", "Designer", "Front-end developer"],
    artifact: {
      label: "Conversion path map",
      caption: "Every step from impression to sale, with the drop-off measured rather than guessed.",
    },
    investmentSignal: "Project-based, or ongoing inside a partnership. [INVESTMENT RANGE TO CONFIRM]",
    dontBuyIf: [
      "You have almost no traffic. Fix demand first; conversion optimisation needs volume to be measurable.",
      "You want a redesign for aesthetic reasons only. That is a valid purchase but it is not this one.",
    ],
    faqs: [
      {
        q: "Do you build on a specific platform?",
        a: "We build on what you can maintain. Shopify, WordPress, Webflow or custom, chosen so that you are not locked into us to change a headline.",
      },
      { q: "Do we own the site?", a: "Yes. Code, domain, analytics and access, from day one." },
    ],
    relatedCases: ["kto-partes", "paola-garcia"],
    relatedServices: ["paid-media", "measurement-intelligence"],
  },
  {
    slug: "measurement-intelligence",
    group: "measurement-intelligence",
    name: "Measurement and intelligence",
    shortName: "Measurement",
    oneLine: "Reporting that ends in a decision, not a dashboard.",
    problem:
      "Most agency reporting answers the question nobody asked. Impressions rose, cost per click fell, and none of it tells an owner whether the business is better off. Meanwhile the learning from each month evaporates, so year three of a relationship makes the same mistakes as year one.",
    forWho: [
      "Businesses that cannot connect marketing activity to revenue with confidence",
      "Companies where the CFO has started asking harder questions",
      "Teams inheriting an account with no history of why anything was done",
    ],
    triggers: [
      "Reports look good and the business does not feel better",
      "Platform numbers and finance numbers disagree",
      "You need to defend the marketing budget internally",
      "Nobody can explain why a decision was made six months ago",
    ],
    whatWeDo: [
      "Fix tracking integrity first, because everything downstream inherits its errors",
      "Define the numbers that decide budget, in your language and your finance team's",
      "Report what happened, why, what we learned, what changed, and what needs a business decision",
      "Maintain the decision log and the Creative Memory so knowledge accumulates instead of resetting",
    ],
    youReceive: [
      "Working measurement across platforms, analytics and CRM",
      "A monthly report structured around decisions",
      "A decision log you can read end to end at any point",
      "The Creative Memory record: what was tested, what happened, what it taught",
    ],
    youProvide: ["Analytics, CRM and platform access", "Revenue and margin data", "Someone who can confirm what a good outcome looks like"],
    systemRole: "Measurement is the MEASURE and LEARN phases. It is the mechanism that makes the whole engagement compound.",
    cadence: [
      { label: "Setup", value: "First 30 days" },
      { label: "Reporting", value: "Monthly, with a live view in between" },
      { label: "Deep review", value: "Quarterly re-diagnosis" },
    ],
    whoWorksOnIt: ["Measurement lead", "Growth strategist", "Analytics engineer where required"],
    artifact: {
      label: "Monthly decision report",
      caption:
        "Six questions: what happened, why, what we learned, what we changed, what we are testing next, and what needs a decision from you.",
    },
    investmentSignal: "Included in Core Partnership; available standalone. [INVESTMENT RANGE TO CONFIRM]",
    dontBuyIf: [
      "You are not willing to share revenue data. Then this is dashboard decoration and you should not pay for it.",
      "You want attribution certainty. Nobody can sell you that honestly. We can give you decisions that survive uncertainty.",
    ],
    faqs: [
      {
        q: "Is this a dashboard product?",
        a: "No. Dashboards are a component. The deliverable is a decision record: what changed, why, and what happens next.",
      },
      {
        q: "Do we keep the decision log if we leave?",
        a: "Yes. The log and the Creative Memory are yours. Taking your accumulated learning with you is the point.",
      },
      {
        q: "Do you claim attribution certainty?",
        a: "No. We state the confidence level and make decisions that hold up whether or not the number is exactly right.",
      },
    ],
    relatedCases: ["dr-mon", "camino-de-san-jose", "dra-magaly"],
    relatedServices: ["growth-strategy", "paid-media"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const serviceSlugs = services.map((s) => s.slug);
export const getGroup = (slug: string) => serviceGroups.find((g) => g.slug === slug);
