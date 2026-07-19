/**
 * Single source of truth for all site copy and links.
 * Edit here — no component changes needed for content updates.
 *
 * Items marked [PLACEHOLDER] are pending real copy/links from the
 * Personal Brand Kit and should be replaced before launch.
 */

export const site = {
  name: "Dafa",
  legalName: "Muhammad Dafa", // [PLACEHOLDER] confirm preferred full name
  siteUrl: "https://dafa.example.com", // [PLACEHOLDER] real domain
  title: "Dafa — Verification Infrastructure for Sustainable Trade",
  description:
    "I build the verification and intelligence layer for sustainable trade — digital MRV, agentic AI for compliance, and certified traceable products.",
  email: "muhammaddafa1380@gmail.com",
  linkedin: "https://www.linkedin.com/in/dafa", // [PLACEHOLDER] real LinkedIn URL
  /** Cal.com booking link. [PLACEHOLDER] replace with real handle/event. */
  calLink: "https://cal.com/dafa/intro",
  locale: "en",
} as const;

export const nav = [
  { label: "Thesis", href: "#thesis" },
  { label: "Focus", href: "#focus" },
  { label: "Ventures", href: "#ventures" },
  { label: "Credibility", href: "#credibility" },
  { label: "About", href: "#about" },
] as const;

export const hero = {
  headline: "I build the verification layer for sustainable trade.",
  sub: "Compliance regimes are tightening across carbon, halal, and supply chains — the winners will be the ones who can prove, not just claim.",
  primaryCta: { label: "Book a call", event: "hero_book_call" },
  secondaryCta: {
    label: "See the work",
    href: "#ventures",
    event: "hero_see_work",
  },
} as const;

export const thesis = {
  heading: "The thesis",
  paragraph:
    "Global trade is entering a proof economy. Carbon border adjustments, deforestation rules, and halal mandates all converge on the same requirement: verifiable claims at the transaction level. Most exporters and supply chains can't produce that proof today. I'm building the stack that makes it possible — measurement and reporting infrastructure at the bottom, agentic AI that turns raw compliance data into decisions in the middle, and certified products that prove the model in market at the top.",
  whyNow:
    "Why now: Indonesia's BPJPH halal mandate takes full effect October 17, 2026, and EU CBAM reporting is already live. Verification is shifting from marketing to market access.",
  layers: [
    {
      title: "Infrastructure",
      body: "Digital MRV and trade-compliance rails — the measurement layer.",
    },
    {
      title: "Intelligence",
      body: "Agentic AI that turns compliance data into operational decisions.",
    },
    {
      title: "Proof",
      body: "Certified, traceable products competing in real markets.",
    },
  ],
} as const;

export const focus = {
  heading: "Focus areas",
  sub: "Three lenses on the same problem: making sustainable trade provable.",
  segments: [
    {
      title: "Technology",
      tagline: "The rails that produce proof.",
      topics: [
        {
          name: "Digital MRV",
          line: "Measurement, reporting & verification systems that turn field data into audit-grade claims.",
        },
        {
          name: "Agentic AI",
          line: "Autonomous agents that read regulations, reconcile documents, and run compliance workflows.",
        },
        {
          name: "Traceability infrastructure",
          line: "Chain-of-custody data rails from farm and facility to certificate and customs.",
        },
      ],
    },
    {
      title: "Innovation",
      tagline: "New models for a proof economy.",
      topics: [
        {
          name: "Compliance as market access",
          line: "Turning regulatory burden into competitive advantage for exporters who can prove first.",
        },
        {
          name: "Venture building",
          line: "One thesis, multiple companies — infrastructure, intelligence, and proof in market.",
        },
        {
          name: "Verification-native products",
          line: "Products designed around their evidence trail, not certified as an afterthought.",
        },
      ],
    },
    {
      title: "Sustainability",
      tagline: "Where the mandates are landing.",
      topics: [
        {
          name: "Carbon & CBAM",
          line: "Border carbon adjustments and the MRV burden they push onto every supply chain.",
        },
        {
          name: "Halal compliance",
          line: "Indonesia's BPJPH mandate — Oct 17, 2026 — makes certification a condition of trade.",
        },
        {
          name: "Verified supply chains",
          line: "Deforestation-free, traceable, certified — the new baseline for market entry.",
        },
      ],
    },
  ],
} as const;

export const ventures = {
  heading: "Ventures",
  sub: "Three companies, one stack — infrastructure, intelligence, proof.",
  featured: [
    {
      name: "Asthaloka Global",
      line: "Digital MRV & trade-compliance infrastructure.",
      href: "#contact", // Phase 2: /work/asthaloka
      event: "venture_asthaloka",
    },
    {
      name: "Invisi AI",
      line: "Agentic AI for compliance & operations.",
      href: "#contact", // Phase 2: /work/invisi
      event: "venture_invisi",
    },
    {
      name: "Lokka",
      line: "Certified, traceable products — the thesis, proven in market.",
      href: "#contact", // Phase 2: /work/lokka
      event: "venture_lokka",
    },
  ],
  tier2: {
    label: "The same thesis, applied to adjacent markets",
    items: ["Ananta Property", "Talentika", "Lokarasa"],
  },
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
    "Working alongside central-bank innovation programs, industry associations, and certification bodies.", // referenced tastefully per PRD
} as const;

export const about = {
  heading: "About",
  // [PLACEHOLDER] Replace with medium bio from the Personal Brand Kit.
  bio: "I'm a founder building at the intersection of sustainable trade, verification infrastructure, and applied AI. Across Asthaloka, Invisi, and Lokka, the through-line is the same: markets are starting to pay for proof, and the systems that produce that proof don't exist yet at the scale trade requires. I build them — from the measurement rails up to the certified products that show the model works.",
  headshotAlt: "Portrait of Dafa",
  /** [PLACEHOLDER] add real headshot at /public/headshot.jpg (same as LinkedIn) */
  headshotSrc: "/headshot.svg",
} as const;

export const contact = {
  heading: "Let's talk",
  line: "If you're working on trade compliance, carbon MRV, or verified supply chains — let's talk.",
  cta: { label: "Book a call", event: "contact_book_call" },
} as const;

export const footer = {
  note: `© ${new Date().getFullYear()} ${site.name}. Built for signal, not noise.`,
} as const;
