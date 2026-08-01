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
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Open Source", href: "#opensource" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

// ─── HERO ─────────────────────────────────────────────────────────
export const hero = {
  headline: "AI Design Engineer",
  subheadline:
    "Design, AI, and frontend engineering — building products that are powerful and easy to use.",
  label: "Available for opportunities",
  domains: ["AI", "Product Design", "Frontend Engineering", "Open Source", "Web3"],
  cta: {
    primary: { label: "View My Work", href: "#projects" },
    secondary: { label: "Open Source", href: "#opensource" },
    tertiary: { label: "Let's Talk", href: "#contact" },
  },
};

// ─── PROBLEM (kept for ProblemSection component compatibility) ────
export const problem = {
  title: "Most AI products are powerful but hard to use.",
  text1:
    "AI teams build powerful models. Designers create beautiful interfaces. The gap between them produces products that confuse users and fail to deliver.",
  text2:
    "I work at that intersection — fluent in both design and engineering. I understand the model, the interface, and the user. That combination is rare, and it's exactly what early-stage AI products need.",
  capabilities: [
    "AI Integration",
    "Product Design",
    "UX Research",
    "Frontend Engineering",
    "Web3 & dApp Design",
    "Open Source",
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
    { number: "6+", label: "Projects Shipped" },
    { number: "OSS", label: "Maintainer" },
    { number: "4", label: "Maintained Repos" },
    { number: "∞", label: "Still Learning" },
  ],
  whatIDo: [
    { label: "AI Product Design & Strategy", accent: true },
    { label: "UX Research & Interface Design" },
    { label: "Frontend Engineering (React / Next.js)" },
    { label: "Web3 & Decentralized Systems" },
    { label: "Open Source Contribution & Maintainership" },
  ],
  techStack: {
    design: ["Figma", "Design Systems", "User Research", "Prototyping", "Interaction Design"],
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
    ai: ["OpenAI API", "LangChain", "Prompt Engineering", "LLM Integration", "Vector Databases"],
    web3: ["Soroban Smart Contracts", "Rust", "Ethers.js", "Stellar", "IPFS", "The Graph"],
    tools: ["Git", "GitHub", "Vercel", "Node.js", "GraphQL", "REST APIs"],
  },
  philosophy:
    "I bring design thinking into engineering decisions and engineering constraints into design decisions — which produces better outcomes for real users.",
  community: [
    "Open Source Contributor & Maintainer",
    "Hackathon Participant",
    "Active Collaborator on Community-Driven Projects",
  ],
};

// ─── PROJECTS ─────────────────────────────────────────────────────
// liveStatus: "live" = show Live Demo button | null = no button
// github: string URL | null (hides button)
// caseStudy: string URL | null (hides button)
export const projects = [
  {
    title: "LineProof",
    summary: "AI-powered document authenticity verification",
    description:
      "LineProof is an AI-powered tool that detects whether a document has been tampered with, forged, or generated by AI. Built for organisations that need fast, reliable document verification without complex enterprise software.",
    tags: ["AI", "PRODUCT", "FRONTEND"],
    problem:
      "Document fraud is a growing problem in hiring, finance, and legal workflows. Existing verification tools are expensive, slow, and built for enterprises — not teams that need a quick answer.",
    solution:
      "Built a lightweight web application that uses AI models to analyse documents for signs of manipulation, formatting inconsistencies, and AI-generated content patterns. Results are returned in seconds with a clear confidence score.",
    role: "AI Design Engineer — end-to-end design and frontend engineering",
    responsibilities: [
      "Product scoping and feature prioritisation",
      "UI/UX design in Figma",
      "Frontend implementation in React and TypeScript",
      "AI model integration and result visualisation",
      "Responsive layout and accessibility",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "OpenAI API", "Framer Motion", "Vercel"],
    notableFeatures: [
      "AI document tampering detection",
      "AI-generated text scoring",
      "Confidence score visualisation",
      "Drag-and-drop document upload",
      "Mobile-responsive interface",
    ],
    github: "https://github.com/K-deejah/lineproof",
    live: null,
    liveStatus: "coming-soon",
    caseStudy: "#casestudies",
    accent: "amber",
    icon: "shield",
  },
  {
    title: "SoroKit",
    summary: "Developer toolkit for Soroban smart contracts on Stellar",
    description:
      "SoroKit is an open developer toolkit that simplifies building, testing, and deploying Soroban smart contracts on the Stellar blockchain. It provides reusable contract templates, a CLI, and clear documentation to lower the barrier for Web3 developers entering the Stellar ecosystem.",
    tags: ["WEB3", "DEVELOPER TOOLS", "OPEN SOURCE"],
    problem:
      "Getting started with Soroban smart contracts requires navigating fragmented documentation, manual boilerplate setup, and a steep learning curve — slowing down developers who want to build on Stellar.",
    solution:
      "Created a toolkit with contract templates, a CLI for scaffolding and deployment, and a documentation site that walks developers from zero to deployed contract in under an hour.",
    role: "Developer Tooling Engineer — design, architecture, and implementation",
    responsibilities: [
      "Toolkit architecture and API design",
      "Contract template library in Rust",
      "CLI tooling for scaffolding and deployment",
      "Documentation site design and content",
      "Developer experience testing and iteration",
    ],
    tech: ["Rust", "Soroban SDK", "Stellar", "TypeScript", "Node.js", "Markdown"],
    notableFeatures: [
      "Reusable Soroban contract templates",
      "CLI scaffold and deploy commands",
      "Step-by-step developer documentation",
      "TypeScript SDK for contract interaction",
      "Testnet deployment support",
    ],
    github: "https://github.com/K-deejah/sorokit",
    live: null,
    liveStatus: "coming-soon",
    caseStudy: "#casestudies",
    accent: "purple",
    icon: "code",
  },
  {
    title: "Velo System",
    summary: "Design system and component library for product teams",
    description:
      "Velo is a production-ready design system and React component library built to give product teams a shared visual language, accessible components, and engineering-ready documentation that stays in sync with design.",
    tags: ["DESIGN SYSTEM", "FRONTEND", "TOOLING"],
    problem:
      "A growing product team was shipping inconsistent UI across multiple surfaces — different button styles, spacing systems, and interaction patterns were creating a fragmented experience and slowing engineering velocity.",
    solution:
      "Built Velo: a documented design system with a Figma component library, a React and TypeScript component library, and a living Storybook documentation site that keeps design and engineering aligned.",
    role: "Design System Engineer — design tokens, component library, and documentation",
    responsibilities: [
      "Design token architecture (colours, spacing, typography)",
      "Figma component library with variants and auto-layout",
      "React and TypeScript component library",
      "WCAG 2.1 AA accessibility compliance",
      "Storybook documentation and contribution guidelines",
    ],
    tech: ["React", "TypeScript", "Figma", "Tailwind CSS", "Storybook", "Rollup"],
    notableFeatures: [
      "Semantic design token system",
      "Accessible component library (WCAG 2.1 AA)",
      "Storybook interactive documentation",
      "Figma-to-code design token sync",
      "Dark mode support out of the box",
    ],
    github: "https://github.com/K-deejah/velo-system",
    live: "https://velo-system.vercel.app",
    liveStatus: "live",
    caseStudy: "#casestudies",
    accent: "blue",
    icon: "layers",
  },
  {
    title: "Food Delivery App",
    summary: "End-to-end UX redesign of a food ordering platform",
    description:
      "A full UX redesign of a food delivery platform experiencing high cart abandonment and low repeat orders. The project covered research, IA redesign, and high-fidelity prototyping through to a complete design system handoff.",
    tags: ["UX DESIGN", "MOBILE", "PRODUCT"],
    problem:
      "Users abandoned carts at high rates due to an overwhelming menu structure, unclear delivery estimates, and a fragmented multi-step checkout flow.",
    solution:
      "Redesigned the information architecture using progressive disclosure, streamlined checkout to a single-screen flow, and introduced real-time tracking UI with clear status states throughout the order lifecycle.",
    role: "Lead Product Designer — research through to handoff",
    responsibilities: [
      "User research and journey mapping",
      "Information architecture redesign",
      "High-fidelity Figma prototypes",
      "Design system and component library",
      "Usability testing and design iteration",
    ],
    tech: ["Figma", "FigJam", "Design System", "Prototyping", "Usability Testing"],
    notableFeatures: [
      "Single-screen streamlined checkout",
      "Progressive menu disclosure pattern",
      "Real-time order tracking UI",
      "Accessible colour and contrast system",
      "Mobile-first responsive layout",
    ],
    github: null,
    live: null,
    liveStatus: "coming-soon",
    caseStudy: "#casestudies",
    accent: "green",
    icon: "box",
  },
  {
    title: "Escrow Marketplace",
    summary: "P2P marketplace with on-chain escrow payment protection",
    description:
      "Design and frontend engineering for a peer-to-peer marketplace with an integrated smart contract escrow system. The platform gives buyers and sellers transparent, trustless transaction protection without relying on a centralised intermediary.",
    tags: ["MARKETPLACE", "FINTECH", "WEB3"],
    problem:
      "Peer-to-peer digital transactions lacked trust infrastructure. Buyers feared not receiving goods; sellers feared chargebacks. Both parties needed a neutral, on-chain intermediary with clear status visibility.",
    solution:
      "Built a marketplace where funds are locked in escrow smart contracts and released only upon buyer confirmation. The UI makes contract state legible to non-technical users at every stage of the transaction.",
    role: "Lead Product Designer & Frontend Engineer — design and implementation",
    responsibilities: [
      "End-to-end product and interaction design",
      "Smart contract state UX and status visualisation",
      "Frontend implementation in React and TypeScript",
      "Escrow flow state management",
      "Dispute resolution flow design",
    ],
    tech: ["React", "TypeScript", "Figma", "Node.js", "Solidity", "Tailwind CSS", "Ethers.js"],
    notableFeatures: [
      "On-chain escrow with real-time status UI",
      "Buyer and seller dashboards",
      "Dispute resolution workflow",
      "Transaction history and receipts",
      "Wallet connection and Web3 auth",
    ],
    github: null,
    live: null,
    liveStatus: "coming-soon",
    caseStudy: "#casestudies",
    accent: "amber",
    icon: "shield",
  },
  {
    title: "Web3 NFT Platform",
    summary: "NFT discovery and portfolio management for all experience levels",
    description:
      "A Web3 NFT discovery and portfolio management platform designed to be genuinely accessible to newcomers without compromising depth for experienced users. The product bridges the gap between intimidating Web3 UX and the mainstream users NFT platforms want to reach.",
    tags: ["WEB3", "NFT", "PRODUCT DESIGN"],
    problem:
      "NFT platforms had a reputation for confusing, exclusive UX that alienated mainstream users. Wallet connections, gas fees, and on-chain terminology created unnecessary barriers to entry.",
    solution:
      "Designed an experience that progressive-discloses Web3 complexity — simple for newcomers exploring NFTs for the first time, powerful for collectors managing multi-wallet portfolios.",
    role: "Lead Product Designer — research, design, and frontend prototyping",
    responsibilities: [
      "User research across Web3 experience levels",
      "Onboarding flow design and testing",
      "High-fidelity UI design in Figma",
      "Component library and design system",
      "Frontend prototype in React",
    ],
    tech: ["Figma", "React", "TypeScript", "Ethers.js", "WalletConnect", "Tailwind CSS"],
    notableFeatures: [
      "Progressive Web3 complexity disclosure",
      "Multi-wallet portfolio management",
      "NFT discovery and filtering",
      "Accessible onboarding for Web3 newcomers",
      "Mobile-first responsive design",
    ],
    github: null,
    live: null,
    liveStatus: "coming-soon",
    caseStudy: "#casestudies",
    accent: "purple",
    icon: "hexagon",
  },
];

// ─── DESIGN PROJECTS (homepage Featured Projects) ─────────────────
// Only product/UX work — open source projects live in openSource section
export const designProjects = [
  {
    title: "Food Delivery App",
    summary: "End-to-end UX redesign that reduced checkout friction.",
    tags: ["UX DESIGN", "MOBILE", "PRODUCT"],
    tech: ["Figma", "FigJam", "Prototyping"],
    github: null,
    live: null,
    accent: "green",
    icon: "box",
  },
  {
    title: "Escrow Marketplace",
    summary: "P2P marketplace with on-chain escrow and trust-first UX.",
    tags: ["FINTECH", "WEB3"],
    tech: ["React", "TypeScript", "Solidity", "Ethers.js", "Figma"],
    github: null,
    live: null,
    accent: "amber",
    icon: "shield",
  },
  {
    title: "Web3 NFT Platform",
    summary: "Progressive NFT discovery for newcomers and collectors alike.",
    tags: ["WEB3", "NFT", "PRODUCT DESIGN"],
    tech: ["Figma", "React", "TypeScript", "Ethers.js"],
    github: null,
    live: null,
    accent: "purple",
    icon: "hexagon",
  },
];

// ─── CASE STUDIES ─────────────────────────────────────────────────
// Summary cards shown in the section index
export const caseStudies = [
  {
    id: "food-delivery",
    title: "Food Delivery App",
    subtitle: "Redesigning checkout to reduce cart abandonment",
    tags: ["UX RESEARCH", "PRODUCT DESIGN", "MOBILE"],
    summary:
      "End-to-end UX redesign covering research, information architecture, prototyping, and design system handoff for a food delivery platform with high cart abandonment.",
  },
  {
    id: "escrow-marketplace",
    title: "Escrow Marketplace",
    subtitle: "Designing trust into on-chain peer-to-peer transactions",
    tags: ["WEB3 UX", "FINTECH", "FRONTEND"],
    summary:
      "Product design and frontend engineering for a marketplace where blockchain escrow state is made legible to non-technical buyers and sellers.",
  },
  {
    id: "web3-nft-platform",
    title: "Web3 NFT Platform",
    subtitle: "Making Web3 accessible without dumbing it down",
    tags: ["WEB3", "NFT", "PRODUCT DESIGN"],
    summary:
      "Progressive-disclosure NFT experience — approachable for newcomers, with full depth for experienced collectors managing multi-wallet portfolios.",
  },
];

// Full case study content — only sections with real content are included.
// Add fields as write-ups are completed.
export const caseStudyDetails = {
  "food-delivery": {
    id: "food-delivery",
    title: "Food Delivery App",
    subtitle: "Redesigning checkout to reduce cart abandonment",
    tags: ["UX RESEARCH", "PRODUCT DESIGN", "MOBILE"],
    role: "Lead Product Designer",
    accent: "green",

    overview:
      "A full end-to-end UX redesign of a food delivery platform experiencing high cart abandonment and low repeat orders. My responsibility covered the complete design process — from initial user research through to a design system handoff ready for engineering.",

    problem:
      "Users were abandoning carts at a high rate. The existing product had an overwhelming menu structure with no clear hierarchy, unclear delivery time estimates, and a fragmented multi-step checkout. The result was a friction-heavy experience that pushed users to competitors.",

    goals: [
      "Reduce cart abandonment by simplifying the checkout flow",
      "Improve menu browsability through better information architecture",
      "Surface delivery estimates earlier in the user journey",
      "Create a reusable design system for consistent future development",
    ],

    solutions: [
      "Redesigned the information architecture to introduce progressive disclosure across the menu, reducing cognitive load at the browsing stage",
      "Consolidated a 5-step checkout into a single-screen flow, removing unnecessary decision points",
      "Introduced inline delivery estimate surfaces earlier in the journey to set expectations before cart commitment",
    ],

    tech: ["Figma", "FigJam", "Design System", "Prototyping", "Usability Testing"],
  },

  "escrow-marketplace": {
    id: "escrow-marketplace",
    title: "Escrow Marketplace",
    subtitle: "Designing trust into on-chain peer-to-peer transactions",
    tags: ["WEB3 UX", "FINTECH", "FRONTEND"],
    role: "Lead Product Designer & Frontend Engineer",
    accent: "amber",

    overview:
      "Product design and frontend engineering for a peer-to-peer marketplace with an integrated smart contract escrow system. The core challenge was making blockchain escrow logic legible and trustworthy to users without Web3 experience — while giving experienced users full transparency.",

    problem:
      "Peer-to-peer digital transactions lacked a trust layer. Buyers feared non-delivery; sellers feared chargebacks. Existing escrow solutions were either opaque centralised intermediaries or raw smart contracts requiring technical knowledge.",

    goals: [
      "Make escrow state legible to non-technical users at every transaction stage",
      "Reduce trust friction between buyers and sellers",
      "Design a dispute resolution flow that feels fair to both parties",
      "Build a frontend that correctly reflects on-chain contract state in real time",
    ],

    solutions: [
      "Designed a real-time escrow status indicator that maps on-chain contract states to plain-language UI states users can understand",
      "Created a step-by-step transaction timeline that gives both parties clear visibility into where funds are and what happens next",
      "Built a dispute flow with clearly structured evidence submission and neutral status language",
    ],

    tech: ["React", "TypeScript", "Figma", "Node.js", "Solidity", "Tailwind CSS", "Ethers.js"],
  },

  "web3-nft-platform": {
    id: "web3-nft-platform",
    title: "Web3 NFT Platform",
    subtitle: "Making Web3 accessible without dumbing it down",
    tags: ["WEB3", "NFT", "PRODUCT DESIGN"],
    role: "Lead Product Designer",
    accent: "purple",

    overview:
      "Product design for a Web3 NFT discovery and portfolio management platform. The core challenge was building an experience that genuinely onboarded newcomers without compromising the depth experienced NFT collectors required.",

    problem:
      "NFT platforms had a reputation for confusing, exclusionary UX. Wallet connections, gas fees, and on-chain terminology created high barriers for mainstream users. Experienced collectors, meanwhile, needed data transparency that most consumer-friendly platforms stripped away.",

    goals: [
      "Design an onboarding experience that successfully brings non-Web3 users into the platform",
      "Progressive-disclose Web3 complexity without hiding it",
      "Build a portfolio management experience useful to multi-wallet collectors",
      "Make the platform feel trustworthy and professional, not speculative",
    ],

    solutions: [
      "Designed a progressive-disclosure onboarding flow that introduces Web3 concepts gradually — users can browse without a wallet and connect only when ready to transact",
      "Created a dual-mode portfolio interface — a simplified summary view for newcomers and a detailed on-chain data view for collectors",
      "Built a gas fee explanation component that gives plain-language context without hiding the actual cost",
    ],

    tech: ["Figma", "React", "TypeScript", "Ethers.js", "WalletConnect", "Tailwind CSS"],
  },
};

// ─── OPEN SOURCE ──────────────────────────────────────────────────
export const openSource = {
  tagline:
    "Open source sharpens my craft — real code, real feedback, real stakes. I contribute to established ecosystems and maintain projects I've built.",

  // ── Organisations I contribute to ────────────────────────────
  organizations: [
    {
      name: "Drips",
      context: "Decentralised streaming payments protocol",
      description:
        "Drips is an open-source protocol and ecosystem that enables continuous, real-time funding streams for developers and open-source projects. I contribute to the Drips Wave (Stellar) initiative — collaborating with other contributors on frontend improvements, UX redesigns, and accessibility work within this decentralised ecosystem.",
      myRole: "Open Source Contributor & Maintainer",
      period: "May 2026 – Present",
      contributions: [
        "Contributed to the Stellar wave frontend interface",
        "Redesigned core streaming payment flow",
        "Reviewed pull requests and provided code feedback",
        "Improved onboarding and accessibility",
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
        "GrantFox is an open-source platform that helps African developers discover and apply for grants. I contribute as a maintainer and frontend engineer — reviewing PRs, shipping features, and helping grow the contributor community within this collaborative open-source project.",
      myRole: "Open Source Contributor & Maintainer",
      period: "July 2026 – Present",
      contributions: [
        "Contributed to frontend development and design systems",
        "Built the grant application tracker feature",
        "Reviewed 50+ pull requests",
        "Helped onboard new contributors",
      ],
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      profileUrl: "https://maintainer.grantfox.xyz/profile/k-deejah",
      profileLabel: "View Profile",
      color: "amber",
    },
  ],

  // ── Projects I actively maintain ─────────────────────────────
  maintainedProjects: [
    {
      name: "LineProof",
      tagline: "AI-powered document authenticity verification",
      description:
        "An open-source tool that uses AI to detect document tampering, forgery, and AI-generated content. I maintain the codebase, review contributions, manage issues, and guide the project roadmap.",
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
        "An open-source toolkit that simplifies building and deploying Soroban smart contracts. I maintain the contract templates, CLI tooling, and documentation to keep the developer experience smooth.",
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
      name: "Velo System",
      tagline: "Design system and React component library",
      description:
        "An open-source design system with a React and TypeScript component library, Figma component library, and Storybook documentation. I maintain component quality, accessibility standards, and keep design and engineering aligned.",
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
        "An open-source implementation of the nullifier pattern for Web3 applications — enabling privacy-preserving proofs that prevent double-spending without revealing user identity. I maintain the contract implementations and developer documentation.",
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

  // ── Technologies ─────────────────────────────────────────────
  techFocus: [
    { name: "React", desc: "Component architecture, hooks, performance optimisation" },
    { name: "TypeScript", desc: "Type-safe code, interfaces, generics, strict mode" },
    { name: "JavaScript", desc: "ES2022+, async patterns, module systems" },
    { name: "Next.js", desc: "App Router, SSR, API routes, deployment" },
    { name: "Rust", desc: "Smart contract development and systems programming" },
    { name: "Soroban", desc: "Stellar smart contract development and tooling" },
    { name: "Git", desc: "Branch strategy, rebasing, code review workflows" },
    { name: "GitHub", desc: "PR reviews, issue triage, CI/CD configuration" },
  ],

  // ── Contribution approach ─────────────────────────────────────
  values: [
    { title: "Code Quality", desc: "Readable, well-documented, maintainable code over clever shortcuts." },
    { title: "Collaboration", desc: "Constructive PR reviews, clear commit messages, async-friendly communication." },
    { title: "Documentation", desc: "I write the docs others wish existed — READMEs, inline comments, ADRs." },
    { title: "Maintainership", desc: "Triaging issues, onboarding contributors, keeping projects healthy long-term." },
  ],
};

// ─── SKILLS ───────────────────────────────────────────────────────
export const skills = [
  {
    title: "AI & Machine Learning",
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
    title: "Design",
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
    title: "Backend",
    skills: [
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Docker",
      "CI/CD",
      "Testing",
      "Performance",
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
];

// ─── WRITING ──────────────────────────────────────────────────────
export const writing = [
  {
    date: "2025 · 6 MIN READ",
    title: "Why AI Products Fail at the Interface Layer",
    tag: "AI",
  },
  {
    date: "2025 · 4 MIN READ",
    title: "Designing for Trust in Web3: Lessons from NFT UX",
    tag: "WEB3",
  },
  {
    date: "2024 · 8 MIN READ",
    title: "Open Source as a Learning Strategy for Early-Career Engineers",
    tag: "OPEN SOURCE",
  },
  {
    date: "2024 · 5 MIN READ",
    title: "Building Accessible Products from Lagos: A Different Default",
    tag: "ACCESSIBILITY",
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
    href: "https://www.linkedin.com/in/khadijah-abdulwasii",
    initial: "L",
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/crypt-deejah",
    initial: "T",
  },
];

// ─── EXPERIENCE (kept for ExperienceSection compatibility) ────────
export const experience = [
  {
    role: "Open Source Maintainer & Contributor",
    company: "GrantFox",
    period: "July 2026 — Present",
    description:
      "Frontend development, design systems, and contributor community growth.",
    highlights: [
      "Built grant application tracker",
      "Established design system",
      "Onboarded 10+ contributors",
    ],
    link: "https://maintainer.grantfox.xyz/profile/k-deejah",
    linkLabel: "View Profile",
  },
  {
    role: "Open Source Maintainer & Contributor",
    company: "Drips Wave (Stellar)",
    period: "May 2026 — Present",
    description:
      "UX improvements, accessibility, and onboarding for a decentralised streaming payments protocol.",
    highlights: [
      "Redesigned core streaming flow",
      "Improved onboarding experience",
      "30+ PRs merged",
    ],
    link: "https://www.drips.network/wave/stellar",
    linkLabel: "View Project",
  },
  {
    role: "AI Design Engineer",
    company: "Freelance",
    period: "2023 — Present",
    description:
      "End-to-end product design and frontend engineering for AI-powered products.",
    highlights: [
      "Shipped 6+ production projects",
      "AI + Design + Engineering",
      "Remote collaboration globally",
    ],
    link: null,
    linkLabel: null,
  },
];
