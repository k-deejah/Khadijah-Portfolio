// ─── RESUME ───────────────────────────────────────────────────────
export const resumeUrl = "https://eu.wps.com/cms/docs/d/cbOakpbj74zCeDAQ?sa=601.1074";

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
    { number: "3",   label: "Maintained Repos"     },
    { number: "∞",   label: "Open Source Advocate" },
  ],
  whatIDo: [
    { label: "AI Product Design & Strategy",         accent: true },
    { label: "UX Research & Interface Design"                     },
    { label: "Frontend Engineering (React / Next.js)"             },
    { label: "Web3 & Decentralized Systems"                       },
    { label: "Open Source Maintainership"                         },
  ],
  philosophy:
    "I bring design thinking into engineering decisions and engineering constraints into design decisions — which produces better outcomes for real users.",
};

// ─── PROJECTS ─────────────────────────────────────────────────────
// Order: Dee Kitchen → Escrow → Web3 → LineProof → Sorokit → Velo
// screenshot: null = gradient tile | "/projects/filename.png" = real image
// liveStatus: "live" | "coming-soon" | null
export const projects = [
  {
    title: "Dee Kitchen",
    summary: "Food delivery platform with seamless browsing and fast checkout.",
    description:
      "Dee Kitchen is a modern food delivery platform where users browse restaurants, discover meals, and order with a fast, seamless experience. Features promotional discounts and a mobile-first interface.",
    tags: ["PRODUCT", "MOBILE", "UX DESIGN"],
    problem:
      "Food ordering platforms suffer from slow navigation and confusing checkout flows.",
    solution:
      "Built a fast, visually driven interface with streamlined checkout and promotional surfaces.",
    role: "Lead Frontend Engineer & Product Designer",
    impact: "Production-ready food ordering platform, live on Netlify.",
    responsibilities: [
      "Designed the full product experience in Figma",
      "Implemented frontend with React and Tailwind CSS",
      "Built promotional discount and menu browsing features",
      "Optimised for mobile-first responsive layout",
      "Deployed to Netlify with continuous delivery",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "Figma", "Netlify"],
    notableFeatures: [
      "Restaurant and meal discovery interface",
      "Promotional discounts and offers",
      "Streamlined checkout flow",
      "Mobile-first responsive design",
      "Fast, intuitive ordering experience",
    ],
    screenshot: "/projects/dee-kitchen.png",
    github: "https://github.com/k-deejah/Food-Delivery-App",
    live: "https://dee-kitchen.netlify.app/menu",
    liveStatus: "live",
    caseStudy: null,
    accent: "green",
    icon: "box",
  },
  {
    title: "Escrow Marketplace",
    summary: "Secure P2P marketplace where escrow protects every transaction.",
    description:
      "A secure marketplace where buyers and sellers trade gadgets, phones, and fashion items with escrow-protected payments that safeguard both parties throughout every transaction.",
    tags: ["FINTECH", "WEB3", "PRODUCT"],
    problem:
      "P2P marketplaces lack a trust layer — buyers risk non-delivery, sellers risk chargebacks.",
    solution:
      "Funds held in escrow, released only when both parties confirm. Clear status UI at every stage.",
    role: "Lead Product Designer & Frontend Engineer",
    impact: "Live escrow-protected marketplace with real buyer and seller protection flows.",
    responsibilities: [
      "Designed end-to-end product and interaction flows",
      "Implemented frontend in React and TypeScript",
      "Built escrow flow and transaction status UI",
      "Engineered buyer and seller dashboard experiences",
      "Deployed live to Netlify",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Figma", "Netlify"],
    notableFeatures: [
      "Escrow-protected payment system",
      "Buyer and seller dashboards",
      "Transaction status visibility",
      "Dispute resolution workflow",
      "Mobile-responsive interface",
    ],
    screenshot: "/projects/escrow-marketplace.png",
    github: "https://github.com/k-deejah/Escrow-Marketplace",
    live: "https://escrowmarketplace.netlify.app",
    liveStatus: "live",
    caseStudy: null,
    accent: "amber",
    icon: "shield",
  },
  {
    title: "Web3 NFT Platform",
    summary: "NFT marketplace where creators mint, showcase, buy, and sell.",
    description:
      "A modern Web3 NFT marketplace where creators mint, showcase, buy, and sell digital collectibles, artwork, and photography through an intuitive blockchain-powered experience.",
    tags: ["WEB3", "NFT", "PRODUCT DESIGN"],
    problem:
      "NFT platforms alienate mainstream users with confusing onboarding and wallet-first experiences.",
    solution:
      "Progressive-disclosure Web3 experience — approachable for newcomers, powerful for collectors.",
    role: "Lead Product Designer",
    impact: "Live Web3 NFT platform accessible to both newcomers and experienced collectors.",
    responsibilities: [
      "Designed the full product experience from research to prototype",
      "Built progressive-disclosure onboarding for non-Web3 users",
      "Implemented the frontend with React and Ethers.js",
      "Created a dual-mode interface for newcomers and power users",
      "Deployed live to Netlify",
    ],
    tech: ["React", "TypeScript", "Ethers.js", "WalletConnect", "Tailwind CSS"],
    notableFeatures: [
      "NFT minting and marketplace",
      "Progressive Web3 complexity disclosure",
      "Multi-wallet portfolio management",
      "Creator showcase and discovery",
      "Mobile-first responsive design",
    ],
    screenshot: "/projects/web3-nft.png",
    github: "https://github.com/k-deejah/Web3-NFT-Platform",
    live: "https://web3nft-platform.netlify.app",
    liveStatus: "live",
    caseStudy: null,
    accent: "purple",
    icon: "hexagon",
  },
  {
    title: "LineProof",
    summary: "On-chain protocol for transparent, non-transferable waiting lists.",
    description:
      "An open-source protocol on Stellar and Soroban that enables organizations to create transparent, auditable, and non-transferable waiting lists for oversubscribed resources.",
    tags: ["WEB3", "OPEN SOURCE", "STELLAR"],
    problem:
      "Oversubscribed resources lack transparent, auditable queue systems. Existing waitlists are opaque and manipulable.",
    solution:
      "Soroban-powered on-chain waiting list with non-transferable positions and full auditability.",
    role: "Creator & Maintainer",
    impact: "Open-source protocol enabling verifiable, fair waiting lists on Stellar.",
    responsibilities: [
      "Designed and implemented the LineProof protocol architecture",
      "Wrote Soroban smart contracts for queue management",
      "Built non-transferable queue position logic",
      "Authored developer documentation and contribution guidelines",
      "Maintained codebase and reviewed contributions",
    ],
    tech: ["Stellar", "Soroban", "Rust", "TypeScript", "Smart Contracts"],
    notableFeatures: [
      "Transparent and auditable waiting lists",
      "Non-transferable queue positions",
      "Built on Stellar and Soroban",
      "Open-source protocol",
      "Smart contract-powered fairness",
    ],
    screenshot: null,
    github: "https://github.com/Stellar-Deejah/-LineProof",
    live: null,
    liveStatus: null,
    caseStudy: null,
    accent: "amber",
    icon: "shield",
  },
  {
    title: "Sorokit",
    summary: "Enterprise TypeScript SDK and smart contract toolkit for Stellar Soroban.",
    description:
      "Enterprise-grade toolkit for Stellar Soroban — production-ready TypeScript SDK, React UI components, and Rust smart contracts for building decentralized applications.",
    tags: ["WEB3", "DEVELOPER TOOLS", "OPEN SOURCE"],
    problem:
      "Building on Soroban requires fragmented tooling, manual wallet integration, and boilerplate contracts.",
    solution:
      "sorokit-core (TypeScript SDK), sorokit-ui (React components), and sorokit-contracts (Rust: Escrow, Splitter, Registry).",
    role: "Creator & Maintainer",
    impact: "Enterprise-grade toolkit used by Stellar developers. Multi-repo OSS organization.",
    responsibilities: [
      "Architected the sorokit-core TypeScript SDK",
      "Built sorokit-ui React components for Stellar/Soroban",
      "Wrote sorokit-contracts Rust smart contracts",
      "Designed developer experience across all three repositories",
      "Maintained GitHub organization and reviewed contributions",
    ],
    tech: ["TypeScript", "React", "Rust", "Stellar", "Soroban"],
    notableFeatures: [
      "sorokit-core TypeScript SDK",
      "sorokit-ui React components",
      "sorokit-contracts Rust smart contracts",
      "Enterprise-grade developer tooling",
      "Full Stellar Soroban ecosystem coverage",
    ],
    screenshot: null,
    github: "https://github.com/Sorokit",
    live: null,
    liveStatus: null,
    caseStudy: null,
    accent: "purple",
    icon: "code",
  },
  {
    title: "Velo",
    summary: "Privacy-preserving payment and liquidity platform on Stellar.",
    description:
      "Open-source payment and liquidity platform on Stellar combining Soroban smart contracts, a lightweight API layer, and a mobile-first experience for programmable escrow and real-world commerce.",
    tags: ["WEB3", "PAYMENTS", "OPEN SOURCE"],
    problem:
      "No unified platform for privacy-preserving agent-assisted payments and programmable escrow on Stellar.",
    solution:
      "Soroban smart contracts + lightweight API + mobile-first UI for cash-like settlement.",
    role: "Maintainer",
    impact: "Open-source platform enabling privacy-preserving payments and local commerce on Stellar.",
    responsibilities: [
      "Maintained the Velo platform codebase and architecture",
      "Oversaw Soroban smart contract development and security",
      "Guided the API layer design and implementation",
      "Drove mobile-first experience decisions",
      "Managed issues, PRs, and contributor onboarding",
    ],
    tech: ["Stellar", "Soroban", "Rust", "TypeScript", "APIs"],
    notableFeatures: [
      "Privacy-preserving cash access on Stellar",
      "Programmable escrow smart contracts",
      "Agent-assisted payment flows",
      "Mobile-first experience",
      "Real-world local commerce support",
    ],
    screenshot: null,
    github: "https://github.com/Nullifier-Systems/velo",
    live: null,
    liveStatus: null,
    caseStudy: null,
    accent: "blue",
    icon: "layers",
  },
];

// ─── OPEN SOURCE ──────────────────────────────────────────────────
export const openSource = {
  tagline:
    "I build and maintain open-source tools that solve real problems for developers building on Stellar, Soroban, and the Web3 ecosystem.",

  // The 3 projects I created and actively maintain
  maintainedProjects: [
    {
      name: "Sorokit",
      tagline: "Enterprise-grade toolkit for Stellar Soroban developers",
      myRole: "Creator & Maintainer",
      roleBadge: "Creator & Maintainer",
      description:
        "Sorokit is an enterprise-grade TypeScript SDK and smart contract toolkit for the Stellar Soroban ecosystem. It provides production-ready developer tools including wallet integration, transaction handling, reusable React UI components, and Soroban smart contracts for building Web3 applications.",
      highlights: [
        "Enterprise Developer Tooling",
        "TypeScript SDK",
        "React Components",
        "Wallet Integration",
        "Soroban Smart Contracts",
      ],
      tech: ["TypeScript", "React", "Rust", "Stellar", "Soroban"],
      status: "active",
      github: "https://github.com/Sorokit",
      color: "purple",
    },
    {
      name: "LineProof",
      tagline: "Transparent, auditable waiting-list protocol on Stellar",
      myRole: "Creator & Maintainer",
      roleBadge: "Creator & Maintainer",
      description:
        "LineProof is an open-source protocol built on Stellar and Soroban that enables organizations to create transparent, auditable, and non-transferable waiting lists for oversubscribed resources.",
      highlights: [
        "Web3 Infrastructure",
        "Stellar & Soroban",
        "Transparency",
        "Non-transferable Queues",
        "Smart Contracts",
      ],
      tech: ["Stellar", "Soroban", "Rust", "TypeScript", "Smart Contracts"],
      status: "active",
      github: "https://github.com/Stellar-Deejah/-LineProof",
      color: "amber",
    },
    {
      name: "Velo",
      tagline: "Privacy-preserving payment and liquidity platform on Stellar",
      myRole: "Maintainer",
      roleBadge: "Maintainer",
      description:
        "Velo is an open-source payment and liquidity platform built on Stellar that combines Soroban smart contracts, a lightweight API layer, and a mobile-first experience to enable secure payments, programmable escrow, agent-assisted transactions, and real-world digital commerce.",
      highlights: [
        "Payments & Liquidity",
        "Mobile-first",
        "Soroban Smart Contracts",
        "Programmable Escrow",
        "Privacy-preserving",
      ],
      tech: ["Stellar", "Soroban", "Rust", "TypeScript", "APIs"],
      status: "active",
      github: "https://github.com/Nullifier-Systems/velo",
      color: "blue",
    },
  ],

  // External organizations I contribute to
  organizations: [
    {
      name: "Drips",
      context: "Decentralised streaming payments protocol",
      description:
        "Contributing frontend improvements, UX redesigns, and accessibility work to the Drips Wave (Stellar) initiative.",
      myRole: "Open Source Contributor",
      period: "May 2026 – Present",
      tech: ["TypeScript", "React", "Ethers.js", "Stellar"],
      profileUrl: "https://www.drips.network/wave/stellar",
      profileLabel: "View Project",
      logo: "/logos/drips.png",
      color: "purple",
    },
    {
      name: "GrantFox",
      context: "Open-source grant discovery platform",
      description:
        "Maintainer and frontend engineer — reviewing PRs, shipping features, establishing design standards, and growing the contributor community.",
      myRole: "Open Source Contributor & Maintainer",
      period: "July 2026 – Present",
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      profileUrl: "https://maintainer.grantfox.xyz/profile/k-deejah",
      profileLabel: "View Profile",
      logo: "/logos/grantfox.png",
      color: "amber",
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
    href: "https://x.com/Crypt_deejah",
    initial: "T",
  },
];
