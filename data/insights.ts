export type Insight = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  readTime: string;
  date: string;
  dateISO: string;
  /** Blocks render in order. */
  body: { type: "p" | "h2" | "quote" | "list" | "note"; text?: string; items?: string[] }[];
};

export const insightCategories = [
  { slug: "agency-buying", label: "Agency buying" },
  { slug: "marketing-intelligence", label: "Marketing intelligence" },
  { slug: "creative-strategy", label: "Creative strategy" },
  { slug: "ai-marketing", label: "AI and marketing" },
  { slug: "cross-border", label: "US and Mexico markets" },
];

export const insights: Insight[] = [
  {
    slug: "what-buyers-actually-check",
    title: "The question that decides most agency deals, and why almost no website answers it",
    category: "Agency buying",
    categorySlug: "agency-buying",
    excerpt:
      "Across hundreds of buyer conversations, one question comes up more than any other. It is not about price, results or process.",
    readTime: "6 min",
    date: "August 2026",
    dateISO: "2026-08-14",
    body: [
      { type: "p", text: "We commissioned a study of how businesses actually buy marketing services: what they search, what they read, what makes them leave a website, and what they ask before signing. The single most repeated question was not about price, portfolio or process." },
      { type: "quote", text: "Who will actually be doing the work on my account?" },
      { type: "p", text: "It appeared in the majority of vetting conversations we examined, usually paired with a second question about how many other accounts that person handles. And the nuance matters: buyers are not demanding that only senior people touch their account. They understand that juniors do day-to-day work at almost every agency. What they object to is not being told." },
      { type: "h2", text: "Why websites cannot answer it" },
      { type: "p", text: "We mapped 79 agency websites. Naming the delivery team, with roles, appears on a handful. Publishing how many accounts a strategist carries appears on none. Most sites show leadership and stop there, which means the most-asked question in the category is answered nowhere on the internet." },
      { type: "p", text: "This is not a copywriting gap. It is an operational one. An agency can only publish account load if it manages account load, which is why the claim is hard to fake and therefore worth making." },
      { type: "h2", text: "What buyers do instead" },
      { type: "list", items: [
        "They ask for references, specifically older ones. One buyer put it plainly: case studies are all launch day, and they wanted to know what still worked two years later.",
        "They ask for references from projects that went badly, and they treat the willingness to connect them as the actual signal.",
        "They read the agency's own website as a work sample, including its load speed and whether the copy reads as machine-generated.",
        "They increasingly ask an AI assistant who is good in a category, then check whether the agency appears in the answer.",
      ]},
      { type: "h2", text: "What we changed" },
      { type: "p", text: "We publish the roles on a BOOST account, what each one owns, and what you work with them on. Team photographs and backgrounds are being confirmed before publication rather than filled with stock imagery, which is why that page currently carries a visible note instead of pretending to be finished." },
      { type: "note", text: "Method: buyer conversations mined from public forums, review platforms and industry surveys, plus an architecture audit of 79 agency websites. Full methodology available on request." },
    ],
  },
  {
    slug: "reporting-that-ends-in-a-decision",
    title: "Reporting that ends in a decision",
    category: "Marketing intelligence",
    categorySlug: "marketing-intelligence",
    excerpt:
      "The most consistent complaint in our buyer research was not bad results. It was reports full of numbers that never connect to the business.",
    readTime: "5 min",
    date: "August 2026",
    dateISO: "2026-08-12",
    body: [
      { type: "p", text: "In our study of marketing-agency buyers, one complaint recurred across every segment, budget level and industry: the monthly report looks fine and the business does not feel better." },
      { type: "quote", text: "Monthly reports come full of great-looking numbers. ROAS up, CPC down, CTR improving. But I can never connect those to whether the business is actually more profitable." },
      { type: "p", text: "Buyers named the alternative themselves, and they were specific about it. They asked for profit dollars rather than percentages. They asked what business decision the report was supposed to help them make. One said the earliest sign a client had checked out was not in the report at all: it was whether they still opened it." },
      { type: "h2", text: "Six questions instead of a hundred metrics" },
      { type: "p", text: "A report should answer what happened, why, what we learned, what we changed, what we are testing next, and what needs a decision from you. That last one matters most, because it separates the decisions that belong to marketing from the ones that belong to the business." },
      { type: "h2", text: "The misses section" },
      { type: "p", text: "Every BOOST report has a section for what we got wrong that month. It appears before the client has to ask. This costs us something in the short term and is the single fastest way we have found to be believed in the long term." },
      { type: "p", text: "Buyers have learned to price signals by what they cost the sender. Saying no to spend, publishing a miss, giving up account ownership: all expensive, all credible. Guarantees, urgency and instant audits are free to emit, which is exactly why they no longer work." },
    ],
  },
  {
    slug: "creative-volume-is-not-the-differentiator",
    title: "Creative volume stopped being the differentiator",
    category: "Creative strategy",
    categorySlug: "creative-strategy",
    excerpt:
      "When producing an asset costs almost nothing, the scarce skill moves to deciding what is worth making and what a result would prove.",
    readTime: "6 min",
    date: "August 2026",
    dateISO: "2026-08-08",
    body: [
      { type: "p", text: "Paid social consumes creative faster than most teams can produce it, and for a decade the answer was to produce more. That answer is expiring. Production cost has fallen far enough that volume alone no longer separates anyone." },
      { type: "p", text: "We saw the failure mode clearly in our market research: an agency advertising that it ships over thirteen thousand creatives a month, with no evidence anywhere of a system for learning from them. Volume without a hypothesis is expensive noise." },
      { type: "h2", text: "The three things that survive" },
      { type: "list", items: [
        "Deciding the angle: what we believe about the buyer, and which belief this ad is built to test.",
        "Setting the threshold before launch: what result would mean scale, and what would mean stop, agreed in advance so nobody negotiates with a losing ad at month end.",
        "Recording what the result taught, in language that is still usable a year later.",
      ]},
      { type: "h2", text: "Why the third one is the hard one" },
      { type: "p", text: "Nearly every agency claims its marketing gets smarter over time. In our audit of roughly 130 marketing-services providers, we found no one shipping a client-visible record of what each test taught. The claim is universal. The mechanism is absent." },
      { type: "p", text: "That gap is why we built Creative Memory as an artifact rather than a slogan. It is a running record of insight, hypothesis, result and ruling, and it stays with the client if they leave. Taking your accumulated learning with you is the entire point." },
    ],
  },
  {
    slug: "where-ai-is-changing-agency-value",
    title: "Where AI is actually changing what an agency is worth",
    category: "AI and marketing",
    categorySlug: "ai-marketing",
    excerpt:
      "Some marketing services are collapsing in price. Others are appreciating. The dividing line is not what most agencies claim.",
    readTime: "8 min",
    date: "August 2026",
    dateISO: "2026-08-05",
    body: [
      { type: "p", text: "We ran a service-by-service analysis of where AI is compressing price and where it is raising it. The pattern is consistent enough to plan around." },
      { type: "h2", text: "Collapsing" },
      { type: "list", items: [
        "Undifferentiated content and copy, where freelance demand fell roughly thirty percent in the period after general-purpose AI writing arrived.",
        "Social posting and scheduling, now handled by tools costing a few dollars a month.",
        "Standalone reporting, absorbed by platforms that generate the narrative automatically.",
        "Basic technical audits and small marketing-site builds.",
        "Campaign setup and bid management, absorbed by the ad platforms themselves.",
      ]},
      { type: "h2", text: "Appreciating" },
      { type: "list", items: [
        "Creative strategy: deciding what to test when producing the variants is nearly free.",
        "Measurement architecture: knowing which number to trust when platform reporting and revenue disagree.",
        "Judgment about allocation: what to fund, what to stop, and when the honest answer is to spend less.",
        "Accountability: someone who owns the outcome and says so in writing.",
      ]},
      { type: "h2", text: "The client-facing consequence" },
      { type: "p", text: "About a third of agencies have already been asked for an AI discount by a client. That question is reasonable, and the honest answer is not to hide the machine. It is to itemise what AI does, what humans decide, and to price accordingly." },
      { type: "p", text: "In our audit of the market we found exactly one marketing agency publishing an actual AI-usage policy. The demand for that disclosure is measurably ahead of the supply, and regulation is arriving to make it mandatory anyway." },
      { type: "note", text: "Sources include industry analyst forecasts on agency employment and AI automation of marketing work, platform and tooling pricing, and freelance-marketplace demand analyses. Detailed source list available on request." },
    ],
  },
  {
    slug: "translation-is-not-a-market-strategy",
    title: "Translation is not a market strategy",
    category: "US and Mexico markets",
    categorySlug: "cross-border",
    excerpt:
      "US Hispanic buyers are roughly a fifth of the population and receive a fraction of the ad spend. The gap is not a language problem.",
    readTime: "7 min",
    date: "August 2026",
    dateISO: "2026-07-30",
    body: [
      { type: "p", text: "The sizing case for the US Hispanic market is well documented. Latino GDP in the United States now sits around four trillion dollars, which would make it one of the largest economies in the world on its own. Hispanic households represent roughly a fifth of the US population and a materially larger share of consumer spending growth." },
      { type: "p", text: "The spend against that audience has not kept pace. Industry data has put multicultural advertising at a single-digit share of total spend for years, against a population share several times larger. The gap has not closed on its own." },
      { type: "h2", text: "The supply gap is more useful than the demand gap" },
      { type: "p", text: "Two numbers explain the opportunity better than any population statistic. Around twenty percent of the US population speaks Spanish, and roughly two percent of US websites support it. Meanwhile cost per click in Spanish-language browsers has been measured at a fraction of the English equivalent." },
      { type: "p", text: "That is not an audience problem. It is an execution problem, and it exists because the default approach is translation." },
      { type: "h2", text: "Why translated campaigns underperform" },
      { type: "p", text: "The references are different. The proof points are different. The price expectations are different. The objections are different. None of that is language, and none of it survives being run through a translation pass." },
      { type: "h2", text: "One caution worth stating" },
      { type: "p", text: "Hispanic consumer spending growth softened in 2025, particularly in Spanish-dominant households. The long-term structural case is intact; the short-term slope is not what it was two years ago. Any plan built on this market should be built on the structural case, not the recent trend line." },
    ],
  },
  {
    slug: "the-first-ninety-days-decide-it",
    title: "The first ninety days decide whether an agency relationship works",
    category: "Agency buying",
    categorySlug: "agency-buying",
    excerpt:
      "Buyers forgive slow results. They do not forgive missing basics, and they leave mentally about six weeks before they leave contractually.",
    readTime: "6 min",
    date: "August 2026",
    dateISO: "2026-07-24",
    body: [
      { type: "p", text: "In our lifecycle research, the first ninety days of an agency relationship are judged almost entirely on operational hygiene rather than on results. Buyers were consistently willing to wait for performance. They were not willing to wait for tracking to work." },
      { type: "h2", text: "What gets forgiven" },
      { type: "p", text: "Honest timelines. Several buyers said explicitly that they respected an agency that told them meaningful movement would take months, and distrusted one that promised it in weeks." },
      { type: "h2", text: "What does not" },
      { type: "list", items: [
        "Missing setup: no negative keywords, broken conversion tracking, no call attribution.",
        "Having to chase for updates, which buyers named as the earliest reliable predictor of a bad engagement.",
        "The budget-increase recommendation arriving after a bad result rather than a diagnosis.",
        "The phrase learning phase, used at month three. It is a legitimate technical concept and it has been used as a stall so often that buyers now hear it as one.",
      ]},
      { type: "h2", text: "Months four to twelve" },
      { type: "p", text: "Churn after the honeymoon is driven by decay rather than disaster. Response times stretch. Check-ins get less frequent. Both sides agree, in their own words, that the client has mentally left about four to six weeks before giving notice, and that silence is the signal rather than complaint." },
      { type: "p", text: "This is why our first thirty days are published on the situation pages rather than described vaguely, and why the monthly review includes what we got wrong." },
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
export const insightSlugs = insights.map((i) => i.slug);
