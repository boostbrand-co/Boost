export const site = {
  name: "BOOST®",
  legalName: "BOOST",
  domain: "https://boostbrand.co",
  tagline: "Marketing you can actually watch work.",
  description:
    "BOOST is a marketing partner for established businesses in the US and Mexico. Strategy, creative and paid media run as one system, with the decisions written down.",
  email: "hello@boostbrand.co",
  locations: ["San Antonio, Texas", "Monterrey, Mexico"],
  instagram: "https://www.instagram.com/boostbrand.co/",
  primaryCta: { label: "Build my growth plan", href: "/build-my-growth-plan" },
  secondaryCta: { label: "See how BOOST works", href: "/how-boost-works" },
};

export type NavChild = { label: string; href: string; note?: string };
export type NavItem = { label: string; href: string; children?: NavChild[]; feature?: { label: string; href: string; body: string } };

export const nav: NavItem[] = [
  {
    label: "Work",
    href: "/work",
    children: [
      { label: "All case studies", href: "/work", note: "Filter by goal, market, industry" },
      { label: "Ecommerce growth", href: "/work?industry=ecommerce", note: "Meta, Google, CRM" },
      { label: "Lead generation", href: "/work?goal=lead-generation", note: "Services and considered purchases" },
      { label: "Launches", href: "/work?goal=launch", note: "From zero, with a date attached" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Strategy and direction", href: "/services/growth-strategy", note: "Find the constraint first" },
      { label: "Creative strategy", href: "/services/creative-strategy", note: "Decide what to make" },
      { label: "Content and production", href: "/services/content-creative", note: "Volume against a hypothesis" },
      { label: "Paid media", href: "/services/paid-media", note: "Business numbers, not platform numbers" },
      { label: "Web and conversion", href: "/services/web-conversion", note: "The gap between click and sale" },
      { label: "Measurement", href: "/services/measurement-intelligence", note: "Reporting that ends in a decision" },
      { label: "Brand and positioning", href: "/services/brand-positioning", note: "Make the rest cheaper" },
    ],
    feature: {
      label: "All capabilities",
      href: "/services",
      body: "Five capability groups, seven services. How they connect matters more than the list.",
    },
  },
  {
    label: "How BOOST works",
    href: "/how-boost-works",
    children: [
      { label: "The operating loop", href: "/how-boost-works", note: "See, decide, create, run, measure, learn" },
      { label: "Creative Memory", href: "/how-boost-works/creative-memory", note: "Why month 12 is smarter than month 1" },
      { label: "Reporting and decision log", href: "/how-boost-works/reporting", note: "A real sample report" },
      { label: "Client control", href: "/how-boost-works/client-control", note: "Ownership, AI, misses, offboarding" },
    ],
  },
  {
    label: "Who we help",
    href: "/who-we-help",
    children: [
      { label: "Replacing an agency", href: "/who-we-help/replacing-an-agency" },
      { label: "Supporting an in-house team", href: "/who-we-help/in-house-team" },
      { label: "Growth has plateaued", href: "/who-we-help/growth-plateau" },
      { label: "Launching or repositioning", href: "/who-we-help/launching" },
      { label: "US and Mexico growth", href: "/who-we-help/cross-border-growth" },
    ],
    feature: {
      label: "Ways to work together",
      href: "/engagements",
      body: "Four engagement types, from a fixed-scope diagnostic to a full partnership.",
    },
  },
  { label: "Insights", href: "/insights" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About BOOST", href: "/about" },
      { label: "Team", href: "/about/team" },
      { label: "Fit", href: "/fit", note: "Including when we are not the right answer" },
      { label: "AI disclosure", href: "/ai-disclosure" },
    ],
  },
];

export const footerNav = [
  {
    title: "Services",
    links: [
      { label: "All capabilities", href: "/services" },
      { label: "Growth strategy", href: "/services/growth-strategy" },
      { label: "Creative strategy", href: "/services/creative-strategy" },
      { label: "Content and production", href: "/services/content-creative" },
      { label: "Paid media", href: "/services/paid-media" },
      { label: "Web and conversion", href: "/services/web-conversion" },
      { label: "Measurement", href: "/services/measurement-intelligence" },
      { label: "Brand and positioning", href: "/services/brand-positioning" },
    ],
  },
  {
    title: "Who we help",
    links: [
      { label: "All situations", href: "/who-we-help" },
      { label: "Replacing an agency", href: "/who-we-help/replacing-an-agency" },
      { label: "In-house team support", href: "/who-we-help/in-house-team" },
      { label: "Growth plateau", href: "/who-we-help/growth-plateau" },
      { label: "Launching", href: "/who-we-help/launching" },
      { label: "US and Mexico", href: "/who-we-help/cross-border-growth" },
    ],
  },
  {
    title: "How BOOST works",
    links: [
      { label: "The operating loop", href: "/how-boost-works" },
      { label: "Creative Memory", href: "/how-boost-works/creative-memory" },
      { label: "Reporting sample", href: "/how-boost-works/reporting" },
      { label: "Client control", href: "/how-boost-works/client-control" },
      { label: "Ways to work together", href: "/engagements" },
      { label: "Fit", href: "/fit" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Work", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "About", href: "/about" },
      { label: "Team", href: "/about/team" },
      { label: "Contact", href: "/build-my-growth-plan" },
      { label: "AI disclosure", href: "/ai-disclosure" },
      { label: "Information for AI", href: "/llm-info" },
    ],
  },
];
