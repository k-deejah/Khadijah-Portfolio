// ─── PERSONAL ────────────────────────────────────────────────────
export const personal = {
  name: "Khadijah Abdulwasii",
  title: "AI Design Engineer",
  subtitle: "Design · AI · Frontend Engineering",
  location: "Lagos, Nigeria",
  remote: "Remote",
  email: "abdulwasiikhadijah@gmail.com",
  bio: "AI Design Engineer based in Lagos. I design and build AI-powered products end-to-end — from user research and Figma prototypes to production React and Next.js code.",
  philosophy:
    "I bring design thinking into engineering decisions and engineering constraints into design decisions. The result is products that work for real users.",
  tagline: "Based in Lagos. Building for the world.",
};

// ─── NAVIGATION ──────────────────────────────────────────────────
export const navLinks = [
  { name: "About",       href: "#about"       },
  { name: "Projects",    href: "#projects"    },
  { name: "Experience",  href: "#experience"  },
  { name: "Open Source", href: "#opensource"  },
  { name: "Skills",      href: "#skills"      },
  { name: "Contact",     href: "#contact"     },
];

// ─── HERO ─────────────────────────────────────────────────────────
export const hero = {
  headline: "AI Design Engineer",
  subheadline:
    "I bridge AI research and real users — designing and engineering products that are powerful and actually easy to use. End-to-end, no handoff.",
  label: "Available for opportunities",
  domains: ["AI", "Product Design", "Frontend Engineering", "Open Source", "Web3"],
  cta: {
    primary:   { label: "View Projects",       href: "#projects"   },
    secondary: { label: "Explore Open Source", href: "#opensource" },
    tertiary:  { label: "Download Resume",     href: null          },
  },
  credibilityStrip: [
    "Open Source Maintainer",
    "React & TypeScript",
    "AI Product Design",
    "Web3",
    "Product Engineering",
  ],
};

// ─── PROCESS ─────────────────────────────────────────────────────
export const process = {
  title: "How I work.",
  subtitle: "Research first. Design with constraints. Ship production code.",
  steps: [
    {
      num: "01",
      title: "Understand the Problem",
      desc: "User research, interviews, and competitive analysis before touching Figma or writing code.",
    },
    {
      num: "02",
      title: "Design the Solution",
      desc: "Wireframes, prototypes, and design systems — built with engineering constraints in mind from day one.",
    },
    {
      num: "03",
      title: "Build & Ship",
      desc: "I write the frontend code, integrate AI features, and ship to production. No handoff required.",
    },
  ],
};

// ─── ABOUT ────────────────────────────────────────────────────────
export const about = {
  title: "Design, AI, and engineering — end to end",
  narrative: [
    "Early-stage AI teams need someone who can design the interface, write the frontend, and understand the model. That combination is rare. I do all three — from user research and Figma to production React code.",
    "I'm Khadijah Abdulwasii, an AI Design Engineer based in Lagos. My stack: React, TypeScript, Next.js, Tailwind CSS for frontend. Rust and Soroban for Web3. I carry work from the first research session to a shipped product — no handoff needed.",
  ],
  stats: [
    { number: "6+",  label: "Projects Shipped"    },
    { number: "OSS", label: "Maintainer"           },
    { number: "4",   label: "Maintained Repos"     },
    { number: "∞",   label: "Open Source Advocate" },
  ],
  whatIDo: [
    { label: "AI Product Design & Strategy",         accent: true },
    { label: "UX Research & Interface Design"                     },
    { label: "Frontend Engineering (React / Next.js)"             },
    { label: "Web3 & Decentralized Systems"                       },
    { label: "Open Source Contribution & Maintainership"          },
  ],
  philosophy:
    "I bring design thinking into engineering decisions and engineering constraints into design decisions — which produces better outcomes for real users.",
};

// ─── PROJECTS ─────────────────────────────────────────────────────
// Order: Food Delivery → Escrow → Web3 → LineProof → SoroKit → Velo
// screenshot: null = gradient tile placeholder | "/projects/filename.png" = real image
// liveStatus: "live" | "coming-soon" | null
export const projects = [
  {
    title: "Food Delivery App",
    summary: "End-to-end UX redesign that cut checkout steps from 5 to 1.",
    description:
      "Full UX redesign of a food delivery platform experiencing high cart abandonment. Covered user research, IA restructure, high-fidelity prototyping, and a complete design system handoff ready for engineering.",
    tags: ["UX DESIGN", "MOBILE", "PRODUCT"],
    problem:
      "Users abandoned carts at high rates due to an overwhelming menu structure, unclear delivery estimates, and a fragmented multi-step checkout that created unnecessary friction before purchase.",
    solution:
      "Redesigned the information architecture using progressive disclosure, collapsed a 5-step checkout into a single-screen flow, and surfaced delivery estimates earlier — setting user expectations before cart commitment.",
    role: "Lead Product Designer — research, IA, prototyping, and design system handoff",
    impact: "Streamlined checkout from 5 steps to 1. Improved menu browsability through progressive disclosure.",
    responsibilities: [
      "Conducted user research and journey mapping",
      "Restructured information architecture to reduce cognitive load",
      "Designed high-fidelity Figma prototypes and interaction flows",
      "Built a reusable design system for engineering handoff",
      "Ran usability testing and iterated on findings",
    ],
    tech: ["Figma", "FigJam", "Design System", "Prototyping", "Usability Testing"],
    notableFeatures: [
      "Single-screen streamlined checkout",
      "Progressive menu disclosure pattern",
      "Real-time order tracking UI",
      "Accessible colour and contrast system",
      "Mobile-first responsive layout",
    ],
    screenshot: null,
    github: null,
    live: null,
    liveStatus: "coming-soon",
    caseStudy: null,
    accent: "green",
    icon: "box",
  },
  {
    title: "Escrow Marketplace",
    summary: "P2P marketplace with on-chain escrow and trust-first UX.",
    description:
      "Product design and frontend engineering for a peer-to-peer marketplace with an integrated smart contract escrow system — making on-chain transaction state legible to non-technical buyers and sellers.",
    tags: ["FINTECH", "WEB3", "PRODUCT"],
    problem:
      "Peer-to-peer digital transactions lacked a trust layer. Buyers feared non-delivery; sellers feared chargebacks. Both sides needed a neutral, on-chain intermediary with clear status visibility.",
    solution:
      "Built a marketplace where funds lock in smart contract escrow and release only on buyer confirmation. The UI maps on-chain contract states to plain-language statuses at every stage of the transaction.",
    role: "Lead Product Designer & Frontend Engineer — design through to implementation",
    impact: "Removed centralised intermediary dependency. Made on-chain escrow state readable by non-technical users.",
    responsibilities: [
      "Designed end-to-end product and interaction flows in Figma",
      "Mapped smart contract states to user-readable UI statuses",
      "Implemented frontend in React and TypeScript",
      "Engineered escrow flow state management",
      "Designed dispute resolution flow for both parties",
    ],
    tech: ["React", "TypeScript", "Figma", "Solidity", "Ethers.js", "Tailwind CSS"],
    notableFeatures: [
      "On-chain escrow with real-time status UI",
      "Buyer and seller dashboards",
      "Dispute resolution workflow",
      "Transaction history and receipts",
      "Wallet connection and Web3 auth",
    ],
    screenshot: null,
    github: null,
    live: null,
    liveStatus: "coming-soon",
    caseStudy: null,
    accent: "amber",
    icon: "shield",
  },
  {
    title: "Web3 NFT Platform",
    summary: "Progressive NFT discovery that removes Web3 barriers for new users.",
    description:
      "Product design for a Web3 NFT discovery and portfolio management platform — accessible to newcomers without compromising the depth experienced collectors need.",
    tags: ["WEB3", "NFT", "PRODUCT DESIGN"],
    problem:
      "NFT platforms alienated mainstream users with confusing UX — wallet connections, gas fees, and on-chain terminology created high barriers to entry while experienced collectors needed data depth most platforms stripped away.",
    solution:
      "Designed a progressive-disclosure experience that introduces Web3 complexity gradually. Users browse without a wallet, connect when ready to transact, and access full on-chain data depth when needed.",
    role: "Lead Product Designer — research, design system, and frontend prototype",
    impact: "Progressive disclosure reduced Web3 onboarding friction. Dual-mode portfolio serves both newcomers and power users.",
    responsibilities: [
      "Conducted user research across Web3 experience levels",
      "Designed progressive-disclosure onboarding flow and tested with users",
      "Built high-fidelity UI in Figma with full component library",
      "Created dual-mode portfolio interface (simple + advanced)",
      "Prototyped frontend interactions in React",
    ],
    tech: ["Figma", "React", "TypeScript", "Ethers.js", "WalletConnect", "Tailwind CSS"],
    notableFeatures: [
      "Progressive Web3 complexity disclosure",
      "Multi-wallet portfolio management",
      "NFT discovery and filtering",
      "Accessible onboarding for Web3 newcomers",
      "Mobile-first responsive design",
    ],
    screenshot: null,
    github: null,
    live: null,
    liveStatus: "coming-soon",
    caseStudy: null,
    accent: "purple",
    icon: "hexagon",
  },
  {
    title: "LineProof",
    summary: "AI document authenticity verification — tamper detection in seconds.",
    description:
      "LineProof is an AI-powered tool that detects whether a document has been tampered with, forged, or generated by AI. Built for organisations that need fast, reliable verification without complex enterprise software.",
    tags: ["AI", "PRODUCT", "FRONTEND"],
    problem:
      "Document fraud is a growing problem in hiring, finance, and legal workflows. Existing verification tools are expensive, slow, and built for enterprises — not teams that need an answer in seconds.",
    solution:
      "Built a lightweight web application that uses AI models to analyse documents for signs of manipulation, formatting inconsistencies, and AI-generated content patterns. Results return in seconds with a clear confidence score.",
    role: "AI Design Engineer — end-to-end design and frontend engineering",
    impact: "Reduced document verification from days to seconds. Accessible to non-enterprise teams at zero infrastructure cost.",
    responsibilities: [
      "Scoped product and prioritised features for v1",
      "Designed UI/UX in Figma end-to-end",
      "Implemented frontend in React and TypeScript",
      "Integrated OpenAI API for document analysis",
      "Built confidence score visualisation and responsive layout",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "OpenAI API", "Framer Motion", "Vercel"],
    notableFeatures: [
      "AI document tampering detection",
      "AI-generated text confidence scoring",
      "Drag-and-drop document upload",
      "Confidence score visualisation",
      "Mobile-responsive interface",
    ],
    screenshot: null,
    github: "https://github.com/K-deejah/lineproof",
    live: null,
    liveStatus: "coming-soon",
    caseStudy: null,
    accent: "amber",
    icon: "shield",
  },
  {
    title: "SoroKit",
    summary: "Developer toolkit that takes Soroban contracts from zero to deployed in under an hour.",
    description:
      "SoroKit is an open developer toolkit that simplifies building, testing, and deploying Soroban smart contracts on the Stellar blockchain — reusable templates, a CLI, and documentation to lower the barrier for Web3 developers.",
    tags: ["WEB3", "DEVELOPER TOOLS", "OPEN SOURCE"],
    problem:
      "Getting started with Soroban required navigating fragmented documentation, manual boilerplate setup, and a steep learning curve — slowing developers who just wanted to build on Stellar.",
    solution:
      "Built a toolkit with contract templates, a CLI for scaffolding and deployment, and a documentation site that walks developers from zero to a deployed contract in under an hour.",
    role: "Developer Tooling Engineer — architecture, contract templates, CLI, and documentation",
    impact: "Reduced Soroban onboarding from days of setup to under one hour. Active OSS repo with community contributors.",
    responsibilities: [
      "Architected the toolkit API and developer experience",
      "Wrote reusable contract template library in Rust",
      "Built CLI commands for scaffold, test, and deploy",
      "Designed and authored the documentation site",
      "Iterated on DX through community feedback",
    ],
    tech: ["Rust", "Soroban SDK", "Stellar", "TypeScript", "Node.js", "Markdown"],
    notableFeatures: [
      "Reusable Soroban contract templates",
      "CLI scaffold and deploy commands",
      "Step-by-step developer documentation",
      "TypeScript SDK for contract interaction",
      "Testnet deployment support",
    ],
    screenshot: null,
    github: "https://github.com/K-deejah/sorokit",
    live: null,
    liveStatus: "coming-soon",
    caseStudy: null,
    accent: "purple",
    icon: "code",
  },
  {
    title: "Velo",
    summary: "Design system and component library that keeps design and engineering in sync.",
    description:
      "Velo is a production-ready design system and React component library — a shared visual language, accessible components, and engineering-ready documentation that stays in sync with design.",
    tags: ["DESIGN SYSTEM", "FRONTEND", "TOOLING"],
    problem:
      "A growing product team was shipping inconsistent UI across multiple surfaces — different button styles, spacing systems, and interaction patterns fragmented the experience and slowed engineering velocity.",
    solution:
      "Built Velo: a Figma component library, a React and TypeScript component library, and a living Storybook documentation site that keeps design and engineering aligned on a single source of truth.",
    role: "Design System Engineer — tokens, component library, and living documentation",
    impact: "Eliminated UI inconsistency across 3+ product surfaces. Reduced component implementation time through reusable, documented primitives.",
    responsibilities: [
      "Architected design token system (colour, spacing, typography)",
      "Built Figma component library with variants and auto-layout",
      "Implemented React and TypeScript component library",
      "Achieved WCAG 2.1 AA accessibility compliance throughout",
      "Authored Storybook documentation and contribution guidelines",
    ],
    tech: ["React", "TypeScript", "Figma", "Tailwind CSS", "Storybook", "Rollup"],
    notableFeatures: [
      "Semantic design token architecture",
      "Accessible component library (WCAG 2.1 AA)",
      "Storybook interactive documentation",
      "Figma-to-code design token sync",
      "Dark mode support out of the box",
    ],
    screenshot: null,
    github: "https://github.com/K-deejah/velo-system",
    live: "https://velo-system.vercel.app",
    liveStatus: "live",
    caseStudy: null,
    accent: "blue",
    icon: "layers",
  },
];

// ─── OPEN SOURCE ──────────────────────────────────────────────────
export const openSource = {
  tagline:
    "Open source sharpens my craft — real code, real feedback, real stakes. I contribute to established ecosystems and maintain projects I've built.",

  organizations: [
    {
      name: "Drips",
      context: "Decentralised streaming payments protocol",
      description:
        "Drips enables continuous, real-time funding streams for developers and open-source projects. I contribute to the Drips Wave (Stellar) initiative — shipping frontend improvements, redesigning core flows, and improving accessibility and onboarding across the protocol interface.",
      myRole: "Open Source Contributor & Maintainer",
      period: "May 2026 – Present",
      contributions: [
        "Redesigned the core streaming payment flow, reducing user drop-off at the funding step",
        "Shipped accessibility improvements that brought key flows to WCAG 2.1 AA compliance",
        "Improved onboarding experience for new Stellar contributors",
        "Reviewed pull requests and provided structured code feedback",
      ],
      tech: ["TypeScript", "React", "Ethers.js", "Stellar"],
      profileUrl: "https://www.drips.network/wave/stellar",
      profileLabel: "View Project",
      color: "purple",
    },
    {
      name: "GrantFox",
      context: "Open-source grant discovery platform",
      description:
        "GrantFox helps African developers discover and apply for grants. As a maintainer and frontend engineer, I review PRs, ship features, establish design standards, and help grow the contributor community.",
      myRole: "Open Source Contributor & Maintainer",
      period: "July 2026 – Present",
      contributions: [
        "Built and shipped the grant application tracker feature end-to-end",
        "Established the design system that now governs UI consistency across the platform",
        "Reviewed and merged 50+ pull requests with structured, actionable feedback",
        "Onboarded and mentored new contributors, reducing their ramp-up time",
      ],
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      profileUrl: "https://maintainer.grantfox.xyz/profile/k-deejah",
      profileLabel: "View Profile",
      color: "amber",
    },
  ],

  maintainedProjects: [
    {
      name: "LineProof",
      tagline: "AI-powered document authenticity verification",
      description:
        "I built and maintain LineProof — an AI tool for detecting document tampering, forgery, and AI-generated content. I own the codebase, triage issues, review contributions, and guide the product roadmap.",
      myRole: "Maintainer",
      tech: ["React", "TypeScript", "OpenAI API", "Tailwind CSS", "Vercel"],
      responsibilities: [
        "Codebase maintenance and code review",
        "Issue triage and contributor guidance",
        "Feature roadmap and prioritisation",
        "Documentation and contribution guidelines",
      ],
      status: "active",
      github: "https://github.com/K-deejah/lineproof",
      color: "amber",
    },
    {
      name: "SoroKit",
      tagline: "Developer toolkit for Soroban smart contracts on Stellar",
      description:
        "I built and maintain SoroKit — a toolkit that simplifies Soroban smart contract development. I maintain contract templates, CLI tooling, and documentation to keep the developer experience smooth.",
      myRole: "Maintainer",
      tech: ["Rust", "Soroban SDK", "Stellar", "TypeScript", "Node.js"],
      responsibilities: [
        "Rust contract template maintenance",
        "CLI tooling development and updates",
        "Developer documentation authorship",
        "Issue triage and community support",
      ],
      status: "active",
      github: "https://github.com/K-deejah/sorokit",
      color: "purple",
    },
    {
      name: "Velo",
      tagline: "Design system and React component library",
      description:
        "I built and maintain Velo — a design system and component library. I maintain component quality, accessibility standards, and keep design and engineering aligned through living documentation.",
      myRole: "Maintainer",
      tech: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Figma"],
      responsibilities: [
        "Component library maintenance and versioning",
        "Accessibility compliance (WCAG 2.1 AA)",
        "Storybook documentation updates",
        "Design token and Figma sync",
      ],
      status: "active",
      github: "https://github.com/K-deejah/velo-system",
      color: "blue",
    },
    {
      name: "Nullifier System",
      tagline: "Privacy-preserving nullifier pattern for Web3 applications",
      description:
        "I built and maintain the Nullifier System — an open-source implementation of the nullifier pattern for Web3 apps, enabling privacy-preserving proofs that prevent double-spending without revealing user identity.",
      myRole: "Maintainer",
      tech: ["Rust", "Soroban SDK", "Stellar", "TypeScript"],
      responsibilities: [
        "Smart contract implementation and maintenance",
        "Security review and testing",
        "Developer documentation",
        "Issue triage and roadmap",
      ],
      status: "active",
      github: "https://github.com/K-deejah/nullifier-system",
      color: "green",
    },
  ],
};

// ─── SKILLS ───────────────────────────────────────────────────────
export const skills = [
  {
    title: "AI",
    skills: [
      "OpenAI API",
      "LangChain",
      "Prompt Engineering",
      "Vector Databases",
      "LLM Integration",
      "AI Product Strategy",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    title: "Product Design",
    skills: [
      "Figma",
      "UI/UX Design",
      "Design Systems",
      "User Research",
      "Prototyping",
      "Interaction Design",
    ],
  },
  {
    title: "Web3",
    skills: [
      "Soroban Smart Contracts",
      "Rust",
      "Ethers.js",
      "Stellar",
      "IPFS",
      "The Graph",
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "CI/CD",
    ],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────
export const experience = [
  {
    role: "Open Source Maintainer & Contributor",
    company: "GrantFox",
    period: "July 2026 — Present",
    description:
      "Shipped product features, established design standards, and grew the contributor community for an open-source grant discovery platform serving African developers.",
    highlights: [
      "Built and shipped the grant application tracker feature end-to-end",
      "Established the design system, improving UI consistency across the platform",
      "Reviewed and merged 50+ pull requests with structured feedback",
      "Onboarded new contributors, reducing ramp-up time significantly",
    ],
    link: "https://maintainer.grantfox.xyz/profile/k-deejah",
    linkLabel: "View Profile",
  },
  {
    role: "Open Source Maintainer & Contributor",
    company: "Drips Wave (Stellar)",
    period: "May 2026 — Present",
    description:
      "Redesigned core user flows and shipped accessibility improvements for a decentralised streaming payments protocol on Stellar.",
    highlights: [
      "Redesigned core streaming payment flow, reducing user drop-off",
      "Shipped accessibility improvements to WCAG 2.1 AA standard",
      "Improved contributor onboarding experience",
      "Merged 30+ pull requests across frontend and documentation",
    ],
    link: "https://www.drips.network/wave/stellar",
    linkLabel: "View Project",
  },
  {
    role: "AI Design Engineer",
    company: "Freelance",
    period: "2023 — Present",
    description:
      "Designed and engineered AI-powered products end-to-end for clients globally — from user research and Figma prototypes to production React and TypeScript code.",
    highlights: [
      "Shipped 6+ production projects across AI, Web3, and product design",
      "Owned full product lifecycle — research, design, engineering, deployment",
      "Collaborated remotely with teams across multiple time zones",
    ],
    link: null,
    linkLabel: null,
  },
];

// ─── SOCIAL ───────────────────────────────────────────────────────
export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/K-deejah",
    initial: "G",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khadijah-abdulwasii-772b24237",
    initial: "L",
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/Crypt_deejah",
    initial: "T",
  },
];
