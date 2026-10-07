/**
 * Single source of truth for all site copy and links.
 * Edit here — no component changes needed for content updates.
 *
 * Brand: DAFA — AI Technology Entrepreneur. Sourced from the DAFA AI Brand
 * Guidelines System (positioning, taglines, framework, venture ecosystem).
 * Items marked [PLACEHOLDER] are pending real links/assets.
 */

export const site = {
  name: "Dafa",
  legalName: "Muhammad Dafa", // [PLACEHOLDER] confirm preferred full name
  tagline: "AI Technology Entrepreneur",
  siteUrl: "https://dafa.example.com", // [PLACEHOLDER] real domain
  title: "Dafa — AI Technology Entrepreneur",
  description:
    "I build AI-powered technology businesses that transform real-world industries — from intelligence to economic value.",
  email: "muhammaddafa1380@gmail.com",
  linkedin: "https://www.linkedin.com/in/dafa", // [PLACEHOLDER] real LinkedIn URL
  /** Cal.com booking link. [PLACEHOLDER] replace with real handle/event. */
  calLink: "https://cal.com/dafa/intro",
  locale: "en",
} as const;

export const nav = [
  { label: "Framework", href: "#framework" },
  { label: "Domains", href: "#domains" },
  { label: "Ventures", href: "#ventures" },
  { label: "Credibility", href: "#credibility" },
  { label: "About", href: "#about" },
] as const;

export const hero = {
  eyebrow: "AI Technology Entrepreneur",
  headline: "Building the digital infrastructure of the real economy.",
  sub: "I build AI-powered technology businesses across property, industry, energy, trade, and talent.",
  primaryCta: {
    label: "Explore what I'm building",
    href: "#ventures",
    event: "hero_see_work",
  },
  secondaryCta: { label: "Book a call", event: "hero_book_call" },
} as const;

export const stats = [
  { value: "4", label: "ventures — one framework" },
  { value: "5", label: "domains: property, industry, energy, trade, talent" },
  { value: "3", label: "international competition wins" },
] as const;

export const framework = {
  heading: "The framework",
  paragraph:
    "A framework to turn intelligence into real-world economic value. Every venture I build runs the same loop: read the system with AI, simulate it as a digital twin, optimize the decisions inside it, and operate it for outcomes that show up on a balance sheet — not a slide.",
  positioning:
    "I build AI-powered technology businesses that transform real-world industries.",
  steps: [
    {
      title: "Understand",
      body: "AI reads the system.",
      icon: "neural",
    },
    {
      title: "Simulate",
      body: "Digital Twin models the system.",
      icon: "cube",
    },
    {
      title: "Optimize",
      body: "AI discovers better decisions.",
      icon: "bars",
    },
    {
      title: "Operate",
      body: "Technology creates real-world outcomes.",
      icon: "gear",
    },
  ],
  outcome: "Real economic value",
} as const;

export const domains = {
  heading: "Domains",
  sub: "One builder, one framework, five domains of the real economy.",
  items: [
    {
      name: "Property",
      icon: "property",
      line: "Digital twins and AI sales infrastructure for real estate.",
    },
    {
      name: "Industry",
      icon: "factory",
      line: "AI engineering and digital infrastructure for industrial operations.",
    },
    {
      name: "Energy",
      icon: "waveform",
      line: "Simulating and optimizing energy systems in real time.",
    },
    {
      name: "Trade",
      icon: "globe",
      line: "Sustainable, verifiable trade infrastructure.",
    },
    {
      name: "Talent",
      icon: "network",
      line: "Connecting AI talent to real-world opportunity.",
    },
  ],
} as const;

export const ventures = {
  heading: "Ventures",
  sub: "Four companies, one framework — understand, simulate, optimize, operate.",
  featured: [
    {
      name: "Vistara",
      line: "AI Engineering & Digital Infrastructure.",
      href: "#contact", // Phase 2: /work/vistara
      event: "venture_vistara",
      icon: "chip",
    },
    {
      name: "Ananta Property",
      line: "Property Experience & AI Sales Platform.",
      href: "#contact", // Phase 2: /work/ananta
      event: "venture_ananta",
      icon: "property",
    },
    {
      name: "Asthaloka Global",
      line: "Sustainable Trade Infrastructure.",
      href: "#contact", // Phase 2: /work/asthaloka
      event: "venture_asthaloka",
      icon: "globe",
    },
    {
      name: "Talentika",
      line: "AI Talent & Opportunity Platform.",
      href: "#contact", // Phase 2: /work/talentika
      event: "venture_talentika",
      icon: "network",
    },
  ],
} as const;

export const credibility = {
  heading: "Credibility",
  wins: [
    {
      title: "UNDP-CMK Global ImpactPreneur",
      note: "Competition win", // [PLACEHOLDER] confirm year/placement
    },
    {
      title: "CAIEC",
      note: "Competition win", // [PLACEHOLDER] confirm year/placement
    },
    {
      title: "PIDI BI × Digdaya",
      note: "Competition win", // [PLACEHOLDER] confirm year/placement
    },
  ],
  institutions:
    "Working alongside central-bank innovation programs, industry associations, and certification bodies.",
} as const;

export const about = {
  heading: "About",
  bio: "I'm a founder building AI-powered technology businesses that transform real-world industries. Across Vistara, Ananta, Asthaloka, and Talentika, the same framework repeats: read the system with AI, simulate it as a digital twin, optimize the decisions inside it, and operate it for real economic value — across property, industry, energy, trade, and talent. Building from Indonesia, for the world.",
  headshotAlt: "Portrait of Dafa",
  /** [PLACEHOLDER] add real headshot at /public/headshot.jpg (same as LinkedIn) */
  headshotSrc: "/headshot.svg",
} as const;

export const contact = {
  heading: "Let's build",
  line: "If you're working on AI infrastructure, digital twins, or real-world industry platforms — let's talk.",
  cta: { label: "Book a call", event: "contact_book_call" },
} as const;

export const footer = {
  note: `© ${new Date().getFullYear()} ${site.name}. Building AI for the real economy.`,
} as const;
