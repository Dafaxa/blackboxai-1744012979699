/**
 * Single source of truth for all site copy and links.
 * Edit here — no component changes needed for content updates.
 *
 * Brand: DAFA — AI Technology Entrepreneur. Sourced from the DAFA Portfolio
 * design handoff (home, ventures, about, contact — English only; the
 * handoff also ships Indonesian copy and a Solutions/Content section,
 * not wired up here).
 * Items marked [PLACEHOLDER] are pending real links/assets — the founder
 * photo and venture images are AI-generated placeholders from the design
 * handoff, not real photography.
 */

export const site = {
  name: "Dafa",
  legalName: "Muhammad Dafa", // [PLACEHOLDER] confirm preferred full name
  tagline: "AI Technology Entrepreneur",
  siteUrl: "https://dafa.example.com", // [PLACEHOLDER] real domain
  title: "Dafa — AI Technology Entrepreneur",
  description:
    "Designing and building intelligent systems that connect data, physical assets, and people — creating measurable value across industries and economies.",
  email: "muhammaddafa1380@gmail.com",
  linkedin: "https://www.linkedin.com/in/dafa", // [PLACEHOLDER] real LinkedIn URL
  /** Cal.com booking link. [PLACEHOLDER] replace with real handle/event. */
  calLink: "https://cal.com/dafa/intro",
  locale: "en",
} as const;

export const nav = [
  { label: "Ventures", href: "/ventures" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "AI × DIGITAL TWIN × INDUSTRY × ENTREPRENEURSHIP",
  headlineA: "Building AI-powered infrastructure for",
  headlineB: "the real economy.",
  sub: "Designing and building intelligent systems that connect data, physical assets, and people — creating measurable value across industries and economies.",
  primaryCta: { label: "Explore what I'm building", href: "/ventures", event: "hero_see_work" },
  secondaryCta: { label: "Book a call", event: "hero_book_call" },
} as const;

export const stats = [
  { value: "4", title: "Technology Ventures", sub: "Vistara, Ananta, Asthaloka, Talentika", icon: "property" },
  { value: "", title: "Global Opportunities", sub: "From Indonesia. For the World.", icon: "globe" },
  { value: "", title: "AI × Industry Focus", sub: "Energy, Industrial, Property, Trade, Talent", icon: "chip" },
  { value: "", title: "Real Economic Value", sub: "Technology that creates tangible impact", icon: "bars" },
  { value: "", title: "Sustainable Future", sub: "Innovation for people, economy and planet", icon: "leaf" },
] as const;

export const venturesTeaser = {
  label: "OUR VENTURES & SOLUTIONS",
  heading: "Four ventures, one mission.",
  sub: "Explore how our ventures and solutions create real-world impact across industries.",
} as const;

export const framework = {
  label: "OUR APPROACH",
  heading: "From intelligence to real economic value.",
  paragraph:
    "A practical framework to turn data, simulation, and AI into measurable outcomes for the real world. Every venture I build runs the same loop: read the system with AI, simulate it as a digital twin, optimize the decisions inside it, and operate it for outcomes that show up on a balance sheet — not a slide.",
  positioning:
    "The objective isn't more technology. The objective is better outcomes.",
  steps: [
    { title: "Understand", body: "AI reads the system.", icon: "neural" },
    { title: "Simulate", body: "Digital Twin models the system.", icon: "cube" },
    { title: "Optimize", body: "AI discovers better decisions.", icon: "bars" },
    { title: "Operate", body: "Technology creates real-world outcomes.", icon: "gear" },
  ],
  outcome: "Real economic value",
} as const;

export const areas = {
  label: "AREAS OF INTEREST",
  heading: "Where I see the next generation of technology businesses.",
  sub: "Building solutions at the intersection of real-world problems, emerging technologies, and global opportunities.",
  items: [
    { title: "AI", icon: "neural", list: ["Agentic AI", "AI Engineering", "Enterprise AI", "Intelligent Automation"], relatedSlug: "vistara" },
    { title: "Digital Twins", icon: "cube", list: ["Simulation", "Spatial Computing", "3D Systems", "Real-Time Digital Models"], relatedSlug: "vistara" },
    { title: "Energy", icon: "waveform", list: ["Building Energy", "Data Centers", "Industrial Optimization", "Battery & BESS Intelligence"], relatedSlug: "vistara" },
    { title: "Industry", icon: "factory", list: ["Manufacturing", "Mining", "Infrastructure", "Logistics", "Industrial Operations"], relatedSlug: "vistara" },
    { title: "Property", icon: "property", list: ["Digital Sales", "Customer Experience", "Property Intelligence", "Immersive Technology"], relatedSlug: "ananta" },
    { title: "Trade", icon: "globe", list: ["Global Commerce", "Verification", "Traceability", "Trade Finance", "Sustainable Supply Chains"], relatedSlug: "asthaloka" },
  ],
} as const;

export const globalOutlook = {
  label: "GLOBAL OUTLOOK",
  heading: "Building from Indonesia. For the world.",
  paragraph:
    "Leveraging global opportunities to create technology solutions that drive sustainable growth across industries and economies.",
  cta: { label: "Our Global Vision", href: "/about" },
} as const;

export type VentureIcon =
  | "chip" | "property" | "globe" | "network" | "neural" | "cube" | "bars"
  | "factory" | "shield" | "leaf" | "book" | "chat" | "flask" | "doc" | "waveform";

export const ventures = [
  {
    slug: "vistara",
    name: "Vistara",
    sub: "AI Engineering & Digital Infrastructure",
    desc: "Building AI systems, digital twins, simulation environments, and intelligent optimization solutions for enterprise and industrial applications.",
    short: "Building AI systems, digital twins, and intelligent optimization solutions for enterprise and industrial applications.",
    chips: ["AI Engineering", "Digital Twin", "Industrial AI"],
    hero: "/images/vistara/hero.jpg",
    icon: "chip" as VentureIcon,
    feats: [
      { t: "AI", d: "Engineering at Scale", icon: "neural" as VentureIcon },
      { t: "Digital Twin", d: "Real-world Simulation", icon: "cube" as VentureIcon },
      { t: "Industry", d: "Operational Optimization", icon: "factory" as VentureIcon },
      { t: "Impact", d: "Measurable Business Value", icon: "bars" as VentureIcon },
    ],
    focusHeading: "End-to-end AI infrastructure for real-world applications.",
    focusSub: "From data and simulation to optimization and autonomous operations.",
    focus: [
      { t: "AI Engineering", d: "From data to intelligent systems for real-world applications.", img: "/images/vistara/f-1.jpg" },
      { t: "Digital Twin", d: "Real-time simulation environments for physical assets.", img: "/images/vistara/f-2.jpg" },
      { t: "Simulation", d: "What-if scenario analysis before decisions are made.", img: "/images/vistara/hero.jpg" },
      { t: "Energy Optimization", d: "AI-driven energy efficiency and sustainability.", img: "/images/vistara/f-4.jpg" },
      { t: "Industrial AI", d: "Operational intelligence for industry and infrastructure.", img: "/images/vistara/f-5.jpg" },
      { t: "Agentic Systems", d: "Intelligent agents for enterprise workflows and decision support.", img: "/images/vistara/f-6.jpg" },
    ],
    ctaText: "Let's explore how AI, digital twins, and intelligent systems can create real value for your organization.",
    ctaItems: [
      { t: "Discuss your challenge", d: "15–30 minute conversation", icon: "chat" as VentureIcon },
      { t: "Explore opportunities", d: "Use cases, potential value, next steps", icon: "flask" as VentureIcon },
      { t: "Start a collaboration", d: "From discovery to real-world impact", icon: "doc" as VentureIcon },
    ],
    related: ["ananta", "asthaloka"],
  },
  {
    slug: "ananta",
    name: "Ananta Property",
    sub: "Property Experience & AI Sales Infrastructure",
    desc: "Transforming property sales and customer experience through digital twins, immersive experiences, AI property advisors, lead intelligence, and digital sales infrastructure.",
    short: "Transforming property sales and customer experience through digital twins, immersive technology, and AI.",
    chips: ["AI Property Advisor", "Digital Twin", "CRM"],
    hero: "/images/ananta/hero.jpg",
    icon: "property" as VentureIcon,
    feats: [
      { t: "Digital Twin", d: "Showcase", icon: "cube" as VentureIcon },
      { t: "AI Property", d: "Advisor", icon: "network" as VentureIcon },
      { t: "Sales", d: "Intelligence", icon: "bars" as VentureIcon },
      { t: "Immersive", d: "Experience", icon: "cube" as VentureIcon },
    ],
    focusHeading: "End-to-end solutions for modern property.",
    focusSub: "From digital twins to sales intelligence, we combine AI and immersive technology to create better property experiences and business outcomes.",
    focus: [
      { t: "Digital Twin", d: "Realistic 3D environments for smarter planning, sales, and operations.", img: "/images/ananta/f-1.jpg" },
      { t: "Immersive Sales Gallery", d: "Interactive experiences that bring properties to life anytime, anywhere.", img: "/images/ananta/f-2.jpg" },
      { t: "AI Property Advisor", d: "Personalized recommendations for buyers, investors, and property teams.", img: "/images/ananta/f-3.jpg" },
      { t: "CRM", d: "Centralize leads, customers, and sales processes with AI-powered insights.", img: "/images/ananta/f-4.jpg" },
      { t: "Sales Intelligence", d: "Data-driven insights to identify, qualify, and convert leads more effectively.", img: "/images/ananta/f-5.jpg" },
      { t: "Property Experience", d: "A seamless, integrated experience across the entire property journey.", img: "/images/ananta/f-6.jpg" },
    ],
    ctaText: "Let's explore how AI, digital twins, and intelligent sales systems can create better property experiences and real business outcomes.",
    ctaItems: [
      { t: "Higher Conversion", d: "Turn interest into real opportunities.", icon: "bars" as VentureIcon },
      { t: "Engaging Experiences", d: "Immersive and interactive property showcases.", icon: "cube" as VentureIcon },
      { t: "Smarter Decisions", d: "AI-driven insights for buyers and sales teams.", icon: "network" as VentureIcon },
      { t: "Global Opportunities", d: "From Indonesia. For the world.", icon: "globe" as VentureIcon },
    ],
    related: ["vistara"],
  },
  {
    slug: "asthaloka",
    name: "Asthaloka Global",
    sub: "Sustainable Trade Infrastructure",
    desc: "Building digital infrastructure for the next generation of global trade — connecting discovery, verification, transactions, finance, logistics, and measurable sustainability.",
    short: "Building digital infrastructure for the next generation of global trade — connecting discovery, verification, transactions, and impact.",
    chips: ["Trade Intelligence", "Traceability", "ESG & Impact"],
    hero: "/images/asthaloka/hero.jpg",
    icon: "globe" as VentureIcon,
    feats: [
      { t: "Sustainable Trade", d: "Economic growth with real impact.", icon: "leaf" as VentureIcon },
      { t: "Global Network", d: "Connecting Indonesia to the world.", icon: "globe" as VentureIcon },
      { t: "Data-Driven", d: "Transparency and better decisions.", icon: "bars" as VentureIcon },
      { t: "Trusted Ecosystem", d: "From source to market.", icon: "shield" as VentureIcon },
    ],
    focusHeading: "A complete infrastructure for global trade.",
    focusSub: "Connecting people, products, and opportunities through technology, data, and trusted ecosystems.",
    focus: [
      { t: "Trade Intelligence", d: "Global market insights, demand analysis, and opportunity matching.", img: "/images/asthaloka/f-1.jpg" },
      { t: "Supplier Verification", d: "Trusted supplier networks, due diligence, and compliance validation.", img: "/images/asthaloka/f-2.jpg" },
      { t: "Traceability", d: "End-to-end product traceability from source to market.", img: "/images/asthaloka/f-3.jpg" },
      { t: "Sustainable Marketplace", d: "Connecting responsible buyers and suppliers for a greener global trade.", img: "/images/asthaloka/f-4.jpg" },
      { t: "Trade Finance", d: "Access to financing solutions, enabling smoother global transactions.", img: "/images/asthaloka/f-5.jpg" },
      { t: "ESG & Impact", d: "Traceable supply chains and measurable environmental and social impact.", img: "/images/asthaloka/hero.jpg" },
    ],
    ctaText: "Let's explore how trade intelligence, verification, and trade finance can build trusted and sustainable supply chains.",
    ctaItems: [
      { t: "Sustainable Trade", d: "Economic growth with real impact.", icon: "leaf" as VentureIcon },
      { t: "Global Network", d: "Connecting Indonesia to the world.", icon: "globe" as VentureIcon },
      { t: "Trusted Ecosystem", d: "From source to market.", icon: "shield" as VentureIcon },
    ],
    related: ["talentika"],
  },
  {
    slug: "talentika",
    name: "Talentika",
    sub: "AI Talent & Opportunity Infrastructure",
    desc: "Building intelligent systems that help students and young professionals discover their potential, develop relevant capabilities, and connect with global opportunities.",
    short: "Building intelligent systems that help students and young professionals discover their potential and connect with global opportunities.",
    chips: ["AI Career Intelligence", "Talent Discovery", "Learning"],
    hero: "/images/talentika/hero.jpg",
    icon: "network" as VentureIcon,
    feats: [
      { t: "Students & Young Talents", d: "Discover potential", icon: "network" as VentureIcon },
      { t: "Schools & Universities", d: "Future-ready programs", icon: "book" as VentureIcon },
      { t: "Industry & Partners", d: "Talent pipeline", icon: "property" as VentureIcon },
      { t: "Global Opportunities", d: "Study, work, and collaborate worldwide", icon: "globe" as VentureIcon },
    ],
    focusHeading: "End-to-end solutions for future-ready talent.",
    focusSub: "From talent discovery to global opportunities, Talentika empowers individuals, schools, and organizations to build a brighter, more inclusive future.",
    focus: [
      { t: "AI Career Intelligence", d: "Understand strengths, interests, and career opportunities with AI.", img: "/images/talentika/f-1.jpg" },
      { t: "Talent Discovery", d: "Identify and nurture talents early through data-driven insights.", img: "/images/talentika/f-2.jpg" },
      { t: "Personalized Learning", d: "Tailored learning journeys to develop relevant skills.", img: "/images/talentika/f-3.jpg" },
      { t: "Opportunity Matching", d: "Connect to internships, scholarships, jobs, and global programs.", img: "/images/talentika/f-4.jpg" },
      { t: "Career Analytics", d: "Track progress and measure career readiness with powerful analytics.", img: "/images/talentika/f-5.jpg" },
    ],
    ctaText: "Let's explore how AI, personalized learning, and global opportunities can empower students, schools, and organizations to create real impact.",
    ctaItems: [
      { t: "Future-Ready Students", d: "Discover potential and build real skills", icon: "network" as VentureIcon },
      { t: "Stronger Institutions", d: "Future-ready programs and global network", icon: "property" as VentureIcon },
      { t: "Global Opportunities", d: "Study, work, and collaborate worldwide", icon: "globe" as VentureIcon },
    ],
    related: [] as string[],
  },
] as const;

export const venturesPage = {
  label: "VENTURES",
  heading: "Four ventures, one mission.",
  sub: "Four technology businesses building AI-powered infrastructure for property, industry, trade, and talent.",
} as const;

export const credibility = {
  heading: "Credibility",
  wins: [
    { title: "UNDP-CMK Global ImpactPreneur", note: "Competition win" }, // [PLACEHOLDER] confirm year/placement
    { title: "CAIEC", note: "Competition win" }, // [PLACEHOLDER] confirm year/placement
    { title: "PIDI BI × Digdaya", note: "Competition win" }, // [PLACEHOLDER] confirm year/placement
  ],
  institutions:
    "Working alongside central-bank innovation programs, industry associations, and certification bodies.",
} as const;

export const about = {
  label: "ABOUT",
  heading: "I build at the intersection of technology, industry, and entrepreneurship.",
  p1: "The most interesting opportunities in AI aren't limited to software screens.",
  p2: "They exist inside the physical and economic systems that power the world:",
  industries: ["Buildings.", "Energy.", "Industry.", "Property.", "Trade.", "Talent."],
  p3: "My work focuses on turning emerging technologies into products that create measurable economic value.",
  p4a: "From AI and agentic systems to digital twins, simulation, automation, and intelligent infrastructure, I explore how technology can move from ",
  p4b: "intelligence to action",
  p4c: ".",
  thesisLabel: "MY THESIS",
  thesisBody: "Technology becomes truly valuable when intelligence can understand a system, simulate possibilities, optimize decisions, and ultimately improve real-world outcomes.",
  role: "AI Technology Entrepreneur",
  profile: ["Building AI for the Real Economy", "AI × Digital Twin × Industry × Entrepreneurship", "From Indonesia. For the World."],
  quote: "Better Technology. Real Impact.",
  /** [PLACEHOLDER] AI-generated placeholder from the design handoff — swap for a real photo before launch. */
  photo: "/images/founder.jpg",
  photoAlt: "Portrait of Dafa",
  indoLabel: "BUILDING FROM INDONESIA",
  indoHeading: "Global technology opportunities can be built from anywhere.",
  indoP1: "Indonesia gives me a unique environment to explore emerging-market problems while thinking globally.",
  indoP2: "The objective isn't simply to build for Indonesia.",
  indoP3: "It is to identify problems that exist globally, build solutions competitively, and use Indonesia as the starting point.",
  indoT1: "BUILD FROM INDONESIA.",
  indoT2: "BUILD FOR THE WORLD.",
  focusLabel: "CURRENT FOCUS",
  focusHeading: "What I'm building next.",
  focusIntro: "My current focus is on the intersection of:",
  focusParts: ["AI ENGINEERING", "DIGITAL TWINS", "INTELLIGENT AUTOMATION", "REAL-WORLD INDUSTRIES"],
  focusGoalIntro: "The goal is simple:",
  focusGoal: "Build technology that creates measurable value.",
  focusNot1: "Not hype.",
  focusNot2: "Not technology for its own sake.",
  focusValues: "Economic value. Operational value. Environmental value.",
} as const;

export const contact = {
  label: "LET'S BUILD THE NEXT",
  heading: "Let's build what comes next.",
  sub: "Have a complex problem, an ambitious idea, or a technology opportunity worth exploring?",
  talk: "Let's talk.",
  /** [PLACEHOLDER] AI-generated placeholder from the design handoff. */
  image: "/images/contact-globe.jpg",
  cta: { label: "Book a call", event: "contact_book_call" },
  collabLabel: "COLLABORATE",
  collabHeading: "Building something ambitious?",
  collabIntro: "I'm interested in working with:",
  collabItems: [
    { t: "Founders", d: "Building ambitious technology companies." },
    { t: "Enterprise Leaders", d: "Looking to transform complex operations." },
    { t: "Developers & Engineers", d: "Building the next generation of AI infrastructure." },
    { t: "Investors", d: "Exploring high-growth technology opportunities." },
    { t: "Industry Partners", d: "Looking for new applications of AI and digital infrastructure." },
  ],
  steps: [
    { t: "Discuss your challenge", d: "15–30 minute conversation", icon: "chat" as VentureIcon },
    { t: "Explore opportunities", d: "Use cases, potential value, next steps", icon: "flask" as VentureIcon },
    { t: "Start a collaboration", d: "From discovery to real-world impact", icon: "doc" as VentureIcon },
  ],
  values: [
    { t: "Global Perspective", d: "From Indonesia. For the world.", icon: "globe" as VentureIcon },
    { t: "Real-World Impact", d: "Practical solutions with measurable outcomes.", icon: "bars" as VentureIcon },
    { t: "Sustainable Growth", d: "Technology for people, economy and planet.", icon: "leaf" as VentureIcon },
    { t: "Long-Term Partnership", d: "From discovery to continuous value creation.", icon: "neural" as VentureIcon },
  ],
} as const;

export const footer = {
  line: "Building from Indonesia. Building for the world.",
  note: `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`,
} as const;
