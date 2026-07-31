// ─── PERSONAL ────────────────────────────────────────────────────
export const personal = {
  name: "Khadijah Abdulwasii",
  title: "AI Design Engineer",
  subtitle: "Designing and engineering AI-powered digital products",
  location: "Lagos, Nigeria",
  remote: "Remote",
  email: "abdulwasiikhadijah@gmail.com",
  bio: "I'm Khadijah Abdulwasii — an AI Design Engineer based in Lagos, Nigeria. I got into this field because I kept seeing the same problem: powerful technology that people couldn't actually use. Models that worked beautifully in demos but failed in the real world because nobody thought about the human on the other end. So I learned both languages — I design interfaces with the precision of a product designer and build them with the fluency of a frontend engineer. Building from Lagos gives me a particular perspective: I design for contexts where connectivity isn't always fast, where users come from diverse backgrounds, and where making technology accessible isn't a nice-to-have — it's the product.",
  philosophy:
    "Great AI shouldn't feel hard to use. My work sits at the intersection of design, AI, and engineering — where I translate complex technology into intuitive experiences that real people actually want to use.",
  tagline:
    "Building from Lagos for the world. Bridging design and engineering to ship AI products that work — not just prototypes.",
};

// ─── NAVIGATION ──────────────────────────────────────────────────
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Open Source", href: "#opensource" },
  { name: "Case Studies", href: "#casestudies" },
  { name: "Writing", href: "#writing" },
  { name: "Contact", href: "#contact" },
];

// ─── HERO ─────────────────────────────────────────────────────────
export const hero = {
  headline: "AI Design Engineer",
  subheadline:
    "I sit at the intersection of AI, product design, and frontend engineering — building intelligent products that feel intuitive to the humans who use them.",
  label: "Available for opportunities",
  badge: "Based in Lagos · Remote",
  domains: ["AI", "Product Design", "Frontend Engineering", "Open Source", "Web3"],
  cta: {
    primary: { label: "View My Work", href: "#projects" },
    secondary: { label: "Case Studies", href: "#casestudies" },
    tertiary: { label: "Let's Talk", href: "#contact" },
  },
};

// ─── PROBLEM ─────────────────────────────────────────────────────
export const problem = {
  title: "Great AI shouldn't feel hard to use.",
  text1:
    "AI teams build powerful models. Designers create beautiful interfaces. But too often, the gap between them produces products that confuse users and fail to deliver on their potential.",
  text2:
    "As an AI Design Engineer, I sit at that intersection — fluent in both languages. I understand the model, the interface, and the human on the other side. That's a rare combination, and it's exactly what early-stage AI products need.",
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
  title: "From problem to shipped product.",
  subtitle: "A clear process means fewer surprises and better outcomes for everyone.",
  steps: [
    {
      num: "01",
      title: "Understand the Problem",
      desc: "I start with your users, not your tech stack. Research, interviews, and competitive analysis to surface what actually matters.",
    },
    {
      num: "02",
      title: "Design the Solution",
      desc: "Wireframes, prototypes, and design systems — tested early, iterated fast. Design with engineering constraints in mind from day one.",
    },
    {
      num: "03",
      title: "Build & Ship",
      desc: "From Figma to production. I write the frontend code, integrate AI features, and ship products that work — not just prototypes.",
    },
  ],
};

// ─── ABOUT ────────────────────────────────────────────────────────
export const about = {
  title: "The intersection of design, AI, and engineering",
  narrative: [
    "I'm Khadijah Abdulwasii — an AI Design Engineer who builds at the intersection of product design, frontend engineering, and artificial intelligence. I came to this role because I kept watching powerful technology fail its users at the interface layer — and I wanted to fix that.",
    "I design and build AI-powered digital products end-to-end. That means running user research, writing Figma prototypes, and then writing the React or Next.js code that ships to production. I don't hand off — I carry the work through.",
    "On the engineering side, I work across React, TypeScript, Next.js, and Tailwind CSS for frontend. I've contributed to open-source projects in JavaScript, TypeScript, and Rust, including smart contract work with Soroban on the Stellar blockchain.",
    "My edge is the combination: I can sit in a product strategy conversation and a code review in the same afternoon and contribute meaningfully to both. I bring design thinking into engineering decisions and engineering constraints into design decisions — which produces better outcomes for real users.",
  ],
  stats: [
    { number: "5+", label: "Projects Shipped" },
    { number: "OSS", label: "Maintainer" },
    { number: "3+", label: "Domains" },
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
    "Great AI shouldn't feel hard to use. I translate complex technology into intuitive experiences — designing with empathy and engineering with precision.",
  community: [
    "Open Source Contributor & Maintainer",
    "Hackathon Participant",
    "Active Collaborator on Community-Driven Projects",
  ],
};

// ─── PROJECTS ─────────────────────────────────────────────────────
// liveStatus: "live" | "coming-soon" | null (hides button)
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

// ─── CASE STUDIES ─────────────────────────────────────────────────
export const caseStudies = [
  {
    title: "LineProof: AI Document Verification",
    subtitle: "Designing an AI-powered trust layer for document authenticity",
    tags: ["AI PRODUCT", "UX DESIGN", "FRONTEND"],
    summary:
      "How I scoped, designed, and built an AI document verification tool — from problem definition through to a production React application.",
    href: "#",
  },
  {
    title: "Escrow UX: Designing for Trust",
    subtitle: "Making on-chain transactions legible to non-technical users",
    tags: ["WEB3 UX", "FINTECH", "FRONTEND"],
    summary:
      "How I approached the challenge of making blockchain escrow state visible and understandable for buyers and sellers without Web3 experience.",
    href: "#",
  },
  {
    title: "Velo System: From Chaos to Consistency",
    subtitle: "Building a design system that engineering teams actually adopt",
    tags: ["DESIGN SYSTEMS", "ENGINEERING", "DOCUMENTATION"],
    summary:
      "The process behind Velo — from design tokens to a React component library with Storybook documentation and a Figma-to-code sync workflow.",
    href: "#",
  },
];

// ─── OPEN SOURCE ──────────────────────────────────────────────────
export const openSource = {
  maintainers: [
    {
      name: "GrantFox",
      roles: ["Open Source Maintainer", "Open Source Contributor"],
      description:
        "Leading frontend development and design systems for a grant discovery platform empowering African developers with funding opportunities.",
      contributions: "50+ PRs reviewed, 15+ features shipped",
      stars: "120+",
      language: "TypeScript",
      period: "July 2026 – Present",
      profileUrl: "https://maintainer.grantfox.xyz/profile/k-deejah",
      profileLabel: "View Profile",
      color: "amber",
    },
    {
      name: "Drips Wave (Stellar)",
      roles: ["Open Source Maintainer", "Open Source Contributor"],
      description:
        "Contributing to the Stellar wave of Drips — a decentralized streaming payments protocol enabling real-time, continuous funding for open-source projects.",
      contributions: "30+ PRs merged, redesigned core flows",
      stars: "800+",
      language: "TypeScript",
      period: "May 2026 – Present",
      profileUrl: "https://www.drips.network/wave/stellar",
      profileLabel: "View Project",
      color: "purple",
    },
  ],
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
  contributions: [
    { repo: "GrantFox/frontend", type: "Feature", desc: "Built grant application tracker UI" },
    { repo: "Drips/interface", type: "Feature", desc: "Redesigned core streaming payment flow" },
    { repo: "vercel/next.js", type: "Bug Fix", desc: "Fixed hydration mismatch in dynamic routes" },
    { repo: "shadcn/ui", type: "Feature", desc: "Added new accessible component variant" },
    { repo: "tailwindlabs/tailwindcss", type: "Docs", desc: "Improved dark mode documentation" },
  ],
  stats: [
    { label: "Total Commits", value: "500+" },
    { label: "PRs Merged", value: "80+" },
    { label: "Issues Closed", value: "60+" },
    { label: "Repositories", value: "25+" },
  ],
  tagline:
    "Open source has sharpened my craft more than anything else — real code, real feedback, real stakes. I maintain projects and contribute to the tools I use daily.",
  values: [
    { title: "Code Quality", desc: "Readable, well-documented, maintainable code over clever shortcuts." },
    { title: "Collaboration", desc: "Constructive PR reviews, clear commit messages, async-friendly communication." },
    { title: "Documentation", desc: "I write the docs others wish existed — READMEs, inline comments, ADRs." },
    { title: "Maintainership", desc: "Triaging issues, onboarding contributors, keeping the project healthy long-term." },
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

// ─── EXPERIENCE ───────────────────────────────────────────────────
export const experience = [
  {
    role: "Open Source Maintainer & Contributor",
    company: "GrantFox",
    period: "July 2026 — Present",
    description:
      "Leading frontend development and design systems. Reviewing PRs, shipping features, and growing the contributor community.",
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
      "Contributing to the Stellar wave of Drips — a decentralized streaming payments protocol. Focused on UX improvements, accessibility, and onboarding.",
    highlights: [
      "Redesigned core streaming flow",
      "Improved onboarding by 40%",
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
      "Designing and building AI-powered products for startups and open-source projects. End-to-end product development from research through to production.",
    highlights: [
      "Shipped 5+ production projects",
      "Combined AI + Design + Engineering",
      "Remote collaboration globally",
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
    href: "https://linkedin.com/in/your-linkedin",
    initial: "L",
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/crypt-deejah",
    initial: "T",
  },
];
