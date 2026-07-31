import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Calendar,
  BadgeCheck,
  ChevronRight,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { openSource } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

// ─── Colour theme ────────────────────────────────────────────────
const colorMap = {
  amber: {
    iconBg: "bg-[rgba(255,107,53,0.12)] border-[rgba(255,107,53,0.2)]",
    iconText: "text-accent",
    badge: "bg-[rgba(255,107,53,0.1)] text-accent border-[rgba(255,107,53,0.2)]",
    dot: "bg-accent",
    btn: "bg-accent hover:bg-accentSecondary text-white",
    glow: "hover:shadow-[0_0_48px_rgba(255,107,53,0.12)]",
    orgGlow: "hover:border-[rgba(255,107,53,0.25)] hover:shadow-[0_12px_48px_rgba(255,107,53,0.1)]",
  },
  purple: {
    iconBg: "bg-[rgba(168,85,247,0.12)] border-[rgba(168,85,247,0.2)]",
    iconText: "text-purple-400",
    badge: "bg-[rgba(168,85,247,0.1)] text-purple-400 border-[rgba(168,85,247,0.2)]",
    dot: "bg-purple-400",
    btn: "bg-purple-600 hover:bg-purple-500 text-white",
    glow: "hover:shadow-[0_0_48px_rgba(168,85,247,0.12)]",
    orgGlow: "hover:border-[rgba(99,102,241,0.3)] hover:shadow-[0_12px_48px_rgba(99,102,241,0.1)]",
  },
  blue: {
    iconBg: "bg-[rgba(59,130,246,0.12)] border-[rgba(59,130,246,0.2)]",
    iconText: "text-blue-400",
    badge: "bg-[rgba(59,130,246,0.1)] text-blue-400 border-[rgba(59,130,246,0.2)]",
    dot: "bg-blue-400",
    btn: "bg-blue-600 hover:bg-blue-500 text-white",
    glow: "hover:shadow-[0_0_48px_rgba(59,130,246,0.12)]",
    orgGlow: "hover:border-[rgba(59,130,246,0.25)] hover:shadow-[0_12px_48px_rgba(59,130,246,0.1)]",
  },
  green: {
    iconBg: "bg-[rgba(34,197,94,0.12)] border-[rgba(34,197,94,0.2)]",
    iconText: "text-green-400",
    badge: "bg-[rgba(34,197,94,0.1)] text-green-400 border-[rgba(34,197,94,0.2)]",
    dot: "bg-green-400",
    btn: "bg-green-600 hover:bg-green-500 text-white",
    glow: "hover:shadow-[0_0_48px_rgba(34,197,94,0.12)]",
    orgGlow: "hover:border-[rgba(34,197,94,0.25)] hover:shadow-[0_12px_48px_rgba(34,197,94,0.1)]",
  },
};

// ─── GrantFox Logo SVG ───────────────────────────────────────────
// Derived from the official GrantFox brand — warm gradient wordmark
function GrantFoxLogo({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GrantFox logo"
      role="img"
    >
      <defs>
        <linearGradient id="gf-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#FF9F5A" />
          <stop offset="100%" stopColor="#FFD166" />
        </linearGradient>
      </defs>
      {/* Fox head silhouette */}
      <path
        d="M20 4L8 10V20C8 28.837 13.373 36.739 20 39C26.627 36.739 32 28.837 32 20V10L20 4Z"
        fill="url(#gf-grad)"
        opacity="0.9"
      />
      {/* Inner check mark */}
      <path
        d="M14 20L18 24L26 16"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Drips Logo SVG ──────────────────────────────────────────────
// Derived from the official Drips brand — blue/indigo drop mark
function DripsLogo({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Drips logo"
      role="img"
    >
      <defs>
        <linearGradient id="drips-grad" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      {/* Drop shape */}
      <path
        d="M20 3C20 3 9 14 9 22C9 28.627 13.925 34 20 34C26.075 34 31 28.627 31 22C31 14 20 3 20 3Z"
        fill="url(#drips-grad)"
      />
      {/* Inner shine */}
      <path
        d="M14 24C14 27.314 16.686 30 20 30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

const orgLogoMap = {
  Drips: DripsLogo,
  GrantFox: GrantFoxLogo,
};

// ─── Section divider ────────────────────────────────────────────
function SectionDivider({ label }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-accent text-xs font-mono font-semibold uppercase tracking-[0.15em] shrink-0">
        {label}
      </span>
      <div className="flex-1 h-px bg-borderSubtle" aria-hidden="true" />
    </div>
  );
}

// ─── Organisation card — full card is a link ─────────────────────
function OrgCard({ org, index }) {
  const c = colorMap[org.color] || colorMap.amber;
  const Logo = orgLogoMap[org.name];

  return (
    <motion.a
      href={org.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeInUp}
      custom={index}
      className={`group relative flex flex-col bg-primary border border-borderSubtle rounded-2xl p-7 lg:p-8 org-card-hover transition-all duration-400 overflow-hidden ${c.orgGlow}`}
      aria-label={`${org.name} — ${org.context}. Opens in new tab.`}
    >
      {/* Subtle top gradient bar matching brand colour */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          org.color === "amber"
            ? "bg-gradient-to-r from-accent to-accentSecondary"
            : org.color === "purple"
            ? "bg-gradient-to-r from-indigo-500 to-purple-500"
            : "bg-gradient-to-r from-blue-500 to-indigo-500"
        }`}
        aria-hidden="true"
      />

      {/* Header — logo + name + active dot */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-4">
          {/* Brand logo */}
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover:scale-105 ${c.iconBg}`}
          >
            {Logo ? (
              <Logo size={28} />
            ) : (
              <Github size={22} className={c.iconText} aria-hidden="true" />
            )}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-textPrimary leading-tight group-hover:text-white transition-colors duration-300">
              {org.name}
            </h4>
            <p className={`text-xs font-mono font-medium mt-0.5 ${c.iconText}`}>
              {org.context}
            </p>
          </div>
        </div>

        {/* Active + arrow */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-textMuted">
            <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
            Active
          </div>
          <ArrowUpRight
            size={16}
            className="text-textMuted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Role badge + period */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span
          className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full border ${c.badge}`}
        >
          <BadgeCheck size={11} aria-hidden="true" />
          {org.myRole}
        </span>
        <span className="flex items-center gap-1 text-xs text-textMuted">
          <Calendar size={11} aria-hidden="true" />
          {org.period}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-textMuted leading-relaxed mb-5">{org.description}</p>

      {/* Contributions */}
      <ul className="space-y-2 mb-6 flex-1">
        {org.contributions.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-textMuted">
            <ChevronRight
              size={13}
              className={`${c.iconText} mt-0.5 shrink-0`}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {org.tech.map((t) => (
          <span
            key={t}
            className="text-xs text-textMuted bg-surfaceElevated px-3 py-1 rounded-lg border border-borderSubtle"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer — profile link styled as a label (card itself is the link) */}
      <div className="pt-5 border-t border-borderSubtle flex items-center justify-between">
        <span className="text-xs text-textMuted font-mono">{org.profileLabel} →</span>
        <ExternalLink size={12} className="text-textMuted group-hover:text-accent transition-colors duration-300" aria-hidden="true" />
      </div>
    </motion.a>
  );
}

// ─── Maintained project card ────────────────────────────────────
function MaintainedProjectCard({ project, index }) {
  const c = colorMap[project.color] || colorMap.amber;

  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className={`bg-primary border border-borderSubtle rounded-2xl p-6 lg:p-7 card-lift transition-all duration-400 ${c.glow}`}
      aria-labelledby={`proj-${index}-name`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-3">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 ${c.iconBg}`}>
            <Wrench size={17} className={c.iconText} aria-hidden="true" />
          </div>
          <div>
            <h4 id={`proj-${index}-name`} className="text-base font-semibold text-textPrimary leading-tight">
              {project.name}
            </h4>
            <p className={`text-xs font-mono mt-0.5 ${c.iconText}`}>{project.tagline}</p>
          </div>
        </div>
        <div className={`flex items-center gap-1.5 text-xs shrink-0 pt-0.5 ${c.iconText}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
          {project.status === "active" ? "Active" : project.status}
        </div>
      </div>

      {/* Role badge */}
      <div className="mb-4">
        <span className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full border ${c.badge}`}>
          <BadgeCheck size={11} aria-hidden="true" />
          {project.myRole}
        </span>
      </div>

      <p className="text-sm text-textMuted leading-relaxed mb-5">{project.description}</p>

      {/* Responsibilities */}
      <div className="mb-5">
        <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-accent mb-2">
          Responsibilities
        </p>
        <ul className="space-y-1.5">
          {project.responsibilities.map((r) => (
            <li key={r} className="flex items-start gap-2 text-xs text-textMuted">
              <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1 shrink-0`} aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="tech-pill text-xs text-textMuted bg-surfaceElevated px-2.5 py-1 rounded-lg border border-borderSubtle">
            {t}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-borderSubtle">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-textMuted hover:text-accent border border-borderSubtle hover:border-accent px-4 py-2 rounded-full transition-all duration-300 hover:bg-[rgba(255,107,53,0.04)]"
          aria-label={`View ${project.name} on GitHub`}
        >
          <Github size={13} aria-hidden="true" />
          View on GitHub
        </a>
      </div>
    </motion.article>
  );
}

// ─── Tech focus grid ─────────────────────────────────────────────
function TechGrid() {
  return (
    <motion.div variants={fadeInUp}>
      <SectionDivider label="Technologies" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {openSource.techFocus.map((item, i) => (
          <motion.div
            key={item.name}
            variants={fadeInUp}
            custom={i}
            className="bg-primary border border-borderSubtle rounded-xl p-5 card-lift"
          >
            <p className="text-sm font-semibold text-textPrimary mb-1">{item.name}</p>
            <p className="text-xs text-textMuted leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Contribution values ─────────────────────────────────────────
function ContributionValues() {
  return (
    <motion.div variants={fadeInUp}>
      <SectionDivider label="How I Contribute" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {openSource.values.map((v, i) => (
          <motion.div
            key={v.title}
            variants={fadeInUp}
            custom={i}
            className="bg-primary border border-borderSubtle rounded-xl p-5 card-lift"
          >
            <p className="text-sm font-semibold text-textPrimary mb-1">{v.title}</p>
            <p className="text-xs text-textMuted leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main section ────────────────────────────────────────────────
export default function OpenSourceSection() {
  return (
    <section id="opensource" className="py-24 lg:py-32 bg-surface" aria-labelledby="os-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            OPEN SOURCE
          </motion.span>
          <motion.h2
            id="os-heading"
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-4"
          >
            Building in <span className="text-gradient">public</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-textMuted max-w-2xl mb-16">
            {openSource.tagline}
          </motion.p>

          {/* ── Organizations ── */}
          <motion.div variants={fadeInUp} className="mb-16">
            <SectionDivider label="Organizations I Contribute To" />
            <div className="grid md:grid-cols-2 gap-6">
              {openSource.organizations.map((org, i) => (
                <OrgCard key={org.name} org={org} index={i} />
              ))}
            </div>
          </motion.div>

          {/* ── Projects I Maintain ── */}
          <motion.div variants={fadeInUp} className="mb-16">
            <SectionDivider label="Projects I Maintain" />
            <div className="grid md:grid-cols-2 gap-6">
              {openSource.maintainedProjects.map((project, i) => (
                <MaintainedProjectCard key={project.name} project={project} index={i} />
              ))}
            </div>
          </motion.div>

          {/* ── Technologies ── */}
          <div className="mb-12">
            <TechGrid />
          </div>

          {/* ── How I Contribute ── */}
          <ContributionValues />
        </motion.div>
      </div>
    </section>
  );
}
