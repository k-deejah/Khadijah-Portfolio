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
// Summary cards shown in the section index
export const caseStudies = [
  {
    id: "food-delivery",
    title: "Food Delivery App",
    subtitle: "Redesigning checkout to reduce cart abandonment",
    tags: ["UX RESEARCH", "PRODUCT DESIGN", "MOBILE"],
    summary:
      "An end-to-end UX redesign covering research, information architecture, prototyping, and design system handoff for a food delivery platform with high cart abandonment.",
  },
  {
    id: "escrow-marketplace",
    title: "Escrow Marketplace",
    subtitle: "Designing trust into on-chain peer-to-peer transactions",
    tags: ["WEB3 UX", "FINTECH", "FRONTEND"],
    summary:
      "How I designed and built a marketplace UI that makes blockchain escrow state legible and trustworthy for buyers and sellers without Web3 experience.",
  },
  {
    id: "web3-nft-platform",
    title: "Web3 NFT Platform",
    subtitle: "Making Web3 accessible without dumbing it down",
    tags: ["WEB3", "NFT", "PRODUCT DESIGN"],
    summary:
      "Designing a progressive-disclosure NFT experience — approachable for newcomers, powerful for collectors managing multi-wallet portfolios.",
  },
];

// Full case study content — placeholder sections clearly labelled
// Replace placeholder values with real content when available
export const caseStudyDetails = {
  "food-delivery": {
    id: "food-delivery",
    title: "Food Delivery App",
    subtitle: "Redesigning checkout to reduce cart abandonment",
    tags: ["UX RESEARCH", "PRODUCT DESIGN", "MOBILE"],
    role: "Lead Product Designer",
    duration: "[Placeholder: project duration]",
    team: "[Placeholder: team size and composition]",
    accent: "green",

    overview:
      "This project was a full end-to-end UX redesign of a food delivery platform that was experiencing high cart abandonment and low repeat orders. My responsibility covered the full design process — from initial user research through to a complete design system handoff ready for engineering.",

    problem:
      "Users were abandoning their carts at a high rate. The existing product had an overwhelming menu structure with no clear hierarchy, unclear delivery time estimates, and a fragmented multi-step checkout that required too many decisions at payment. The result was a confusing, friction-heavy experience that pushed users to competitors.",

    goals: [
      "Reduce cart abandonment by simplifying the checkout flow",
      "Improve menu browsability through better information architecture",
      "Surface delivery estimates earlier in the user journey",
      "Create a reusable design system for consistent future development",
      "[Placeholder: add additional goals when available]",
    ],

    research: {
      summary:
        "[Placeholder: describe your research approach — interviews, surveys, analytics review, competitive analysis]",
      methods: [
        "[Placeholder: user interviews — number of participants, key themes]",
        "[Placeholder: usability testing on existing product]",
        "[Placeholder: analytics review — drop-off points, funnel data]",
        "[Placeholder: competitive analysis — key findings]",
      ],
      keyInsights: [
        "[Placeholder: insight 1 from research]",
        "[Placeholder: insight 2 from research]",
        "[Placeholder: insight 3 from research]",
      ],
    },

    personas: [
      {
        name: "[Placeholder: Persona Name]",
        type: "[Placeholder: e.g. Busy Professional]",
        description: "[Placeholder: describe this user segment and their key needs, frustrations, and goals]",
      },
      {
        name: "[Placeholder: Persona Name]",
        type: "[Placeholder: e.g. Frequent Orderer]",
        description: "[Placeholder: describe this user segment and their key needs, frustrations, and goals]",
      },
    ],

    userJourney:
      "[Placeholder: describe the key stages of the user journey — discovery, browsing, selecting, checkout, confirmation. Highlight where friction existed and how the redesign addressed each stage]",

    informationArchitecture:
      "[Placeholder: describe the IA changes made — menu hierarchy, category structure, navigation patterns, sitemap decisions and the reasoning behind them]",

    wireframes:
      "[Placeholder: describe the wireframing process — key screens explored, decisions made, iterations and what changed between versions]",

    designSystem: {
      summary:
        "[Placeholder: describe the design system created — scope, components covered, token structure]",
      components: [
        "[Placeholder: component 1 — e.g. Button system with states]",
        "[Placeholder: component 2 — e.g. Menu card variants]",
        "[Placeholder: component 3 — e.g. Checkout step indicators]",
        "[Placeholder: component 4 — e.g. Order status states]",
      ],
    },

    highFidelityDesigns:
      "[Placeholder: describe the high-fidelity design decisions — visual language, colour use, typography choices, spacing principles, and how they support the UX goals]",

    developmentProcess:
      "[Placeholder: describe how the handoff was structured — design tokens, Figma component annotations, developer notes, and how engineering picked up the work]",

    tech: ["Figma", "FigJam", "Design System", "Prototyping", "Usability Testing"],

    challenges: [
      "[Placeholder: describe challenge 1 — what made this difficult and how you worked through it]",
      "[Placeholder: describe challenge 2]",
      "[Placeholder: describe challenge 3]",
    ],

    solutions: [
      "Redesigned the information architecture to introduce progressive disclosure across the menu, reducing cognitive load at the browsing stage",
      "Consolidated a 5-step checkout into a single-screen flow, removing unnecessary decision points",
      "Introduced inline delivery estimate surfaces earlier in the journey to set expectations before cart commitment",
      "[Placeholder: add additional solutions]",
    ],

    results:
      "[Placeholder: describe measurable or qualitative outcomes — what changed after the redesign was implemented, stakeholder feedback, usability test results]",

    lessonsLearned: [
      "[Placeholder: lesson 1 — what you would do differently or what this project taught you]",
      "[Placeholder: lesson 2]",
      "[Placeholder: lesson 3]",
    ],

    futureImprovements: [
      "[Placeholder: improvement 1 — what you would explore next if the project continued]",
      "[Placeholder: improvement 2]",
      "[Placeholder: improvement 3]",
    ],
  },

  "escrow-marketplace": {
    id: "escrow-marketplace",
    title: "Escrow Marketplace",
    subtitle: "Designing trust into on-chain peer-to-peer transactions",
    tags: ["WEB3 UX", "FINTECH", "FRONTEND"],
    role: "Lead Product Designer & Frontend Engineer",
    duration: "[Placeholder: project duration]",
    team: "[Placeholder: team size and composition]",
    accent: "amber",

    overview:
      "This project combined product design and frontend engineering to build a peer-to-peer marketplace with an integrated smart contract escrow system. The core challenge was making blockchain escrow logic legible and trustworthy to users who had no Web3 experience — while still giving experienced users the transparency they expected.",

    problem:
      "Peer-to-peer digital transactions lacked a trust layer. Buyers feared sending payment without receiving goods. Sellers feared chargebacks and platform bias. Existing escrow solutions were either opaque, centralised intermediaries that added fees and delays, or raw smart contracts that required technical knowledge to use safely.",

    goals: [
      "Make escrow state legible to non-technical users at every transaction stage",
      "Reduce trust friction between buyers and sellers",
      "Design a dispute resolution flow that feels fair to both parties",
      "Build a frontend that correctly reflects on-chain contract state in real time",
      "[Placeholder: add additional goals when available]",
    ],

    research: {
      summary:
        "[Placeholder: describe your research approach — who you spoke to, what you looked at, what questions you were trying to answer]",
      methods: [
        "[Placeholder: interviews with buyers and sellers in P2P markets]",
        "[Placeholder: audit of existing escrow and marketplace UX patterns]",
        "[Placeholder: review of smart contract interaction patterns in Web3 products]",
        "[Placeholder: competitive analysis]",
      ],
      keyInsights: [
        "[Placeholder: insight 1 — e.g. users don't understand what 'locked in escrow' means]",
        "[Placeholder: insight 2]",
        "[Placeholder: insight 3]",
      ],
    },

    personas: [
      {
        name: "[Placeholder: Persona Name]",
        type: "[Placeholder: e.g. First-time Buyer]",
        description: "[Placeholder: describe this user — needs, fears around trust, prior experience with P2P transactions]",
      },
      {
        name: "[Placeholder: Persona Name]",
        type: "[Placeholder: e.g. Experienced Seller]",
        description: "[Placeholder: describe this user — what they care about, how they evaluate platform trustworthiness]",
      },
    ],

    userJourney:
      "[Placeholder: walk through the buyer and seller journeys — from listing creation through to funds released. Describe where the escrow state intersects with each user's experience]",

    informationArchitecture:
      "[Placeholder: describe the IA decisions — how buyer and seller flows are structured, how transaction states are organised in the UI, dashboard information hierarchy]",

    wireframes:
      "[Placeholder: describe the wireframing process — key screens, how the escrow state UI evolved across iterations]",

    designSystem: {
      summary:
        "[Placeholder: describe any design system work done for this project — components, status patterns, state indicators]",
      components: [
        "[Placeholder: escrow status indicator component]",
        "[Placeholder: transaction timeline component]",
        "[Placeholder: dispute resolution modal]",
        "[Placeholder: wallet connection flow]",
      ],
    },

    highFidelityDesigns:
      "[Placeholder: describe the visual design decisions — how colour, typography, and iconography communicate trust, status, and safety throughout the interface]",

    developmentProcess:
      "[Placeholder: describe the frontend implementation — how React state management was used to reflect contract state, key technical decisions made during build]",

    tech: ["React", "TypeScript", "Figma", "Node.js", "Solidity", "Tailwind CSS", "Ethers.js"],

    challenges: [
      "[Placeholder: challenge 1 — e.g. representing asynchronous on-chain state in a synchronous UI]",
      "[Placeholder: challenge 2 — e.g. designing for error states when transactions fail]",
      "[Placeholder: challenge 3]",
    ],

    solutions: [
      "Designed a real-time escrow status indicator that maps on-chain contract states to plain-language UI states users can understand",
      "Created a step-by-step transaction timeline that gives both buyer and seller clear visibility into where funds are and what happens next",
      "Built a dispute flow with clearly structured evidence submission and neutral status language",
      "[Placeholder: add additional solutions]",
    ],

    results:
      "[Placeholder: describe outcomes — usability test findings, stakeholder feedback, any measurable improvements observed]",

    lessonsLearned: [
      "[Placeholder: lesson 1 — what designing for blockchain state taught you about UX for async systems]",
      "[Placeholder: lesson 2]",
      "[Placeholder: lesson 3]",
    ],

    futureImprovements: [
      "[Placeholder: improvement 1 — e.g. multi-currency escrow support]",
      "[Placeholder: improvement 2 — e.g. automated dispute resolution]",
      "[Placeholder: improvement 3]",
    ],
  },

  "web3-nft-platform": {
    id: "web3-nft-platform",
    title: "Web3 NFT Platform",
    subtitle: "Making Web3 accessible without dumbing it down",
    tags: ["WEB3", "NFT", "PRODUCT DESIGN"],
    role: "Lead Product Designer",
    duration: "[Placeholder: project duration]",
    team: "[Placeholder: team size and composition]",
    accent: "purple",

    overview:
      "This project was a product design engagement for a Web3 NFT discovery and portfolio management platform. The core design challenge was building an experience that genuinely onboarded newcomers to Web3 without compromising the depth and transparency that experienced NFT collectors required.",

    problem:
      "NFT platforms had earned a reputation for confusing, exclusionary UX. Wallet connections, gas fee explanations, and blockchain terminology created high barriers for mainstream users. At the same time, experienced collectors needed granular control and data transparency that most consumer-friendly platforms stripped away.",

    goals: [
      "Design an onboarding experience that successfully brings non-Web3 users into the platform",
      "Progressive-disclose Web3 complexity without hiding it",
      "Build a portfolio management experience useful to multi-wallet collectors",
      "Make the platform feel trustworthy and professional, not speculative",
      "[Placeholder: add additional goals when available]",
    ],

    research: {
      summary:
        "[Placeholder: describe your research approach — who you interviewed, what experience levels were represented, what questions drove the research]",
      methods: [
        "[Placeholder: interviews across Web3 experience levels — novice, intermediate, experienced]",
        "[Placeholder: usability testing on competing platforms]",
        "[Placeholder: analysis of onboarding drop-off patterns in Web3 products]",
        "[Placeholder: competitive audit of NFT platform UX patterns]",
      ],
      keyInsights: [
        "[Placeholder: insight 1 — e.g. novice users abandon at wallet connection because they don't understand what a wallet is]",
        "[Placeholder: insight 2 — e.g. experienced users distrust platforms that hide on-chain data]",
        "[Placeholder: insight 3]",
      ],
    },

    personas: [
      {
        name: "[Placeholder: Persona Name]",
        type: "[Placeholder: e.g. Web3 Newcomer]",
        description: "[Placeholder: describe this user — background, motivations for exploring NFTs, key fears and barriers]",
      },
      {
        name: "[Placeholder: Persona Name]",
        type: "[Placeholder: e.g. NFT Collector]",
        description: "[Placeholder: describe this user — collection size, how they currently manage portfolios, what they need from a platform]",
      },
    ],

    userJourney:
      "[Placeholder: describe the key journey stages — discovery, wallet connection, browsing, first purchase, portfolio management. Describe how the progressive disclosure strategy plays out across the journey]",

    informationArchitecture:
      "[Placeholder: describe the IA — how discovery, collection, and portfolio sections are structured, how navigation adapts to user experience level]",

    wireframes:
      "[Placeholder: describe the wireframing process — how the onboarding flow evolved, key screens explored for the portfolio management experience]",

    designSystem: {
      summary:
        "[Placeholder: describe design system work — Web3-specific component patterns, wallet state components, NFT card variants]",
      components: [
        "[Placeholder: wallet connection flow component]",
        "[Placeholder: NFT card variants — grid, list, detail]",
        "[Placeholder: portfolio overview dashboard]",
        "[Placeholder: gas fee explanation component]",
      ],
    },

    highFidelityDesigns:
      "[Placeholder: describe the visual design decisions — how the platform communicates trustworthiness and professionalism, colour and typography choices, how the UI shifts between novice and expert modes]",

    developmentProcess:
      "[Placeholder: describe the frontend prototype work — key screens prototyped in React, wallet connection implementation, how NFT data was surfaced]",

    tech: ["Figma", "React", "TypeScript", "Ethers.js", "WalletConnect", "Tailwind CSS"],

    challenges: [
      "[Placeholder: challenge 1 — e.g. designing wallet connection for users who don't have a wallet yet]",
      "[Placeholder: challenge 2 — e.g. surfacing gas fees in a way that doesn't frighten newcomers but doesn't hide them from experts]",
      "[Placeholder: challenge 3]",
    ],

    solutions: [
      "Designed a progressive-disclosure onboarding flow that introduces Web3 concepts gradually — users can browse without a wallet and connect only when they want to transact",
      "Created a dual-mode portfolio interface — a simplified summary view for newcomers and a detailed on-chain data view for collectors",
      "Built a gas fee explanation component that gives plain-language context without hiding the actual cost",
      "[Placeholder: add additional solutions]",
    ],

    results:
      "[Placeholder: describe outcomes — usability test findings, onboarding completion rates, stakeholder or user feedback]",

    lessonsLearned: [
      "[Placeholder: lesson 1 — what designing for Web3 newcomers taught you about progressive disclosure as a design pattern]",
      "[Placeholder: lesson 2]",
      "[Placeholder: lesson 3]",
    ],

    futureImprovements: [
      "[Placeholder: improvement 1 — e.g. AI-powered collection recommendations]",
      "[Placeholder: improvement 2 — e.g. multi-chain portfolio support]",
      "[Placeholder: improvement 3]",
    ],
  },
};

// ─── OPEN SOURCE ──────────────────────────────────────────────────
export const openSource = {
  tagline:
    "Open source is where I sharpen my craft — real code, real feedback, real stakes. I contribute to established ecosystems and actively maintain projects I've built.",

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
