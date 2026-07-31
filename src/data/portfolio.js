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

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Open Source", href: "#opensource" },
  { name: "Writing", href: "#writing" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const hero = {
  headline: "AI Design Engineer",
  subheadline:
    "I bridge design and engineering to build intelligent products that feel intuitive. Most AI products are powerful but hard to use — I fix that.",
  label: "Available for opportunities",
  stats: [
    { number: "5+", label: "Projects Shipped" },
    { number: "OSS", label: "Maintainer" },
    { number: "3+", label: "Domains" },
  ],
  cta: {
    primary: { label: "View My Work", href: "#projects" },
    secondary: { label: "Let's Talk", href: "#contact" },
  },
};

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

export const about = {
  title: "The intersection of design, AI, and engineering",
  narrative: [
    "I've always been drawn to building things. When AI started changing what was possible in product design and engineering, I didn't want to choose a side — I wanted to work at the intersection of both.",
    "So that's what I do. I design and build AI-powered digital products — combining product thinking, UX design, and frontend engineering to create experiences that make complex technology feel intuitive and human.",
    "Based in Lagos, I collaborate remotely with open-source communities and teams around the world. I'm a maintainer at GrantFox and Drips, where I contribute features, review pull requests, and help build software used by developers globally.",
    "My edge is the combination: I understand the design and the code. I can sit in a product conversation and a technical architecture discussion and bring both together into something that actually works for real people.",
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
    { label: "Frontend Engineering (React/Next.js)" },
    { label: "Web3 & Decentralized Systems" },
    { label: "Open Source Contribution" },
  ],
  community: [
    "Open Source Contributor & Maintainer",
    "Hackathon Participant",
    "Active Collaborator on Community-Driven Projects",
  ],
  skills: [
    { name: "AI Product Design", level: 90 },
    { name: "UX / Product Design", level: 92 },
    { name: "Frontend Engineering", level: 80 },
    { name: "Web3 / dApp Design", level: 75 },
    { name: "Open Source", level: 85 },
  ],
};

export const projects = [
  {
    title: "GrantFox Platform",
    description:
      "An open-source grant discovery and management platform connecting African developers with funding opportunities.",
    tags: ["UX DESIGN", "WEB", "PRODUCT"],
    problem:
      "Developers in Africa struggle to find and apply for grants due to fragmented information and complex application processes.",
    solution:
      "Built a unified platform that aggregates grant opportunities, simplifies applications, and tracks funding progress.",
    role: "Open Source Maintainer & Frontend Lead",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    impact:
      "Helped 200+ developers discover grants, 50+ applications submitted through the platform",
    github: "https://github.com/GrantFox",
    live: "https://grantfox.io",
    accent: "amber",
  },
  {
    title: "Drips Protocol Interface",
    description:
      "A decentralized streaming payments interface for continuous, real-time funding of open-source projects.",
    tags: ["WEB3", "NFT", "PRODUCT DESIGN"],
    problem:
      "Open-source maintainers lack sustainable income models beyond one-time donations or corporate sponsorships.",
    solution:
      "Designed and built an intuitive interface for Drips, enabling continuous funding streams to developers and projects.",
    role: "Frontend Engineer & UI Designer",
    tech: ["React", "TypeScript", "Ethers.js", "Tailwind CSS", "GraphQL"],
    impact:
      "Improved user onboarding conversion by 40%, redesigned core streaming flow",
    github: "https://github.com/radicle-dev/drips-app-v2",
    live: "https://drips.network",
    accent: "purple",
  },
  {
    title: "Food Delivery App",
    description:
      "Ordering food online is full of friction — overwhelming menus, confusing flows, and abandoned checkouts. I redesigned the end-to-end experience to make browsing, ordering, and checkout feel effortless.",
    tags: ["UX DESIGN", "MOBILE", "PRODUCT"],
    role: "Product Designer",
    tech: ["Figma", "Design System", "Prototyping"],
    impact: "Redesigned end-to-end ordering flow, reduced checkout drop-off by 35%",
    github: "#",
    live: "#",
    accent: "blue",
  },
  {
    title: "Web3 NFT Application",
    description:
      "Web3 UX has a reputation for being confusing and exclusive. I designed an NFT discovery and management experience that's accessible to newcomers without dumbing it down for power users.",
    tags: ["WEB3", "NFT", "PRODUCT DESIGN"],
    role: "Lead Product Designer",
    tech: ["Figma", "React", "Ethers.js", "WalletConnect"],
    impact: "Designed onboarding flow for 10K+ new users, 4.9/5 satisfaction rating",
    github: "#",
    live: "#",
    accent: "amber",
  },
  {
    title: "Escrow Marketplace",
    description:
      "Trust is the core problem in peer-to-peer transactions. I designed a marketplace with an escrow payment system that gives both buyers and sellers confidence to transact.",
    tags: ["MARKETPLACE", "FINTECH", "UX DESIGN"],
    role: "Lead Product Designer",
    tech: ["Figma", "React", "Node.js", "Smart Contracts"],
    impact: "Processed $2M+ in transactions, dispute rate reduced to under 1%",
    github: "#",
    live: "#",
    accent: "green",
  },
];

export const openSource = {
  maintainers: [
    {
      name: "GrantFox",
      role: "Open Source Maintainer",
      description:
        "Leading frontend development and design systems for a grant discovery platform empowering African developers.",
      contributions: "50+ PRs reviewed, 15+ features shipped",
      stars: "120+",
      language: "TypeScript",
    },
    {
      name: "Drips",
      role: "Open Source Maintainer",
      description:
        "Contributing to the decentralized streaming payments protocol interface, focused on UX improvements and accessibility.",
      contributions: "30+ PRs merged, redesigned core flows",
      stars: "800+",
      language: "TypeScript",
    },
  ],
  contributions: [
    { repo: "vercel/next.js", type: "Bug Fix", desc: "Fixed hydration mismatch in dynamic routes" },
    { repo: "shadcn/ui", type: "Feature", desc: "Added new component variant" },
    { repo: "tailwindlabs/tailwindcss", type: "Docs", desc: "Improved dark mode documentation" },
    { repo: "GrantFox/frontend", type: "Feature", desc: "Built grant application tracker" },
  ],
  stats: [
    { label: "Total Commits", value: "500+" },
    { label: "PRs Merged", value: "80+" },
    { label: "Issues Closed", value: "60+" },
    { label: "Repositories", value: "25+" },
  ],
  tagline:
    "Open source has sharpened my craft more than anything else — real code, real feedback, real stakes. I maintain projects and contribute to the tools I use daily.",
};

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
      "Ethereum",
      "Solidity",
      "Ethers.js",
      "The Graph",
      "IPFS",
      "Smart Contracts",
    ],
  },
];

export const writing = [
  {
    date: "2025 · 6 MIN READ",
    title: "Why AI Products Fail at the Interface Layer",
  },
  {
    date: "2025 · 4 MIN READ",
    title: "Designing for Trust in Web3: Lessons from NFT UX",
  },
  {
    date: "2024 · 8 MIN READ",
    title: "Open Source as a Learning Strategy for Early-Career Engineers",
  },
  {
    date: "2024 · 5 MIN READ",
    title: "Building Accessible Products from Lagos: A Different Default",
  },
];

export const experience = [
  {
    role: "Open Source Maintainer",
    company: "GrantFox",
    period: "2024 — Present",
    description:
      "Leading frontend development and design systems. Reviewing PRs, shipping features, and growing the contributor community.",
    highlights: [
      "Built grant application tracker",
      "Established design system",
      "Onboarded 10+ contributors",
    ],
  },
  {
    role: "Open Source Maintainer",
    company: "Drips",
    period: "2023 — Present",
    description:
      "Contributing to the decentralized streaming payments interface. Focused on UX improvements and accessibility.",
    highlights: [
      "Redesigned core streaming flow",
      "Improved onboarding by 40%",
      "30+ PRs merged",
    ],
  },
  {
    role: "AI Design Engineer",
    company: "Freelance",
    period: "2023 — Present",
    description:
      "Designing and building AI-powered products for startups and open-source projects. End-to-end product development.",
    highlights: [
      "Shipped 5+ production projects",
      "Combined AI + Design + Engineering",
      "Remote collaboration globally",
    ],
  },
];

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
