import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Calendar,
  BadgeCheck,
  ChevronRight,
  GitPullRequest,
  Wrench,
} from "lucide-react";
import { openSource } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

// ─── Colour theme map ────────────────────────────────────────────
const colorMap = {
  amber: {
    iconBg: "bg-[rgba(255,107,53,0.12)] border-[rgba(255,107,53,0.2)]",
    iconText: "text-accent",
    badge: "bg-[rgba(255,107,53,0.1)] text-accent border-[rgba(255,107,53,0.2)]",
    dot: "bg-accent",
    btn: "bg-accent hover:bg-accentSecondary text-white shadow-[0_0_16px_rgba(255,107,53,0.2)]",
    tag: "bg-[rgba(255,107,53,0.08)] text-accent",
    glow: "hover:shadow-[0_0_40px_rgba(255,107,53,0.07)]",
    border: "border-[rgba(255,107,53,0.12)]",
  },
  purple: {
    iconBg: "bg-[rgba(168,85,247,0.12)] border-[rgba(168,85,247,0.2)]",
    iconText: "text-purple-400",
    badge: "bg-[rgba(168,85,247,0.1)] text-purple-400 border-[rgba(168,85,247,0.2)]",
    dot: "bg-purple-400",
    btn: "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_16px_rgba(168,85,247,0.15)]",
    tag: "bg-[rgba(168,85,247,0.08)] text-purple-400",
    glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.07)]",
    border: "border-[rgba(168,85,247,0.12)]",
  },
  blue: {
    iconBg: "bg-[rgba(59,130,246,0.12)] border-[rgba(59,130,246,0.2)]",
    iconText: "text-blue-400",
    badge: "bg-[rgba(59,130,246,0.1)] text-blue-400 border-[rgba(59,130,246,0.2)]",
    dot: "bg-blue-400",
    btn: "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_16px_rgba(59,130,246,0.15)]",
    tag: "bg-[rgba(59,130,246,0.08)] text-blue-400",
    glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.07)]",
    border: "border-[rgba(59,130,246,0.12)]",
  },
  green: {
    iconBg: "bg-[rgba(34,197,94,0.12)] border-[rgba(34,197,94,0.2)]",
    iconText: "text-green-400",
    badge: "bg-[rgba(34,197,94,0.1)] text-green-400 border-[rgba(34,197,94,0.2)]",
    dot: "bg-green-400",
    btn: "bg-green-600 hover:bg-green-500 text-white shadow-[0_0_16px_rgba(34,197,94,0.15)]",
    tag: "bg-[rgba(34,197,94,0.08)] text-green-400",
    glow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.07)]",
    border: "border-[rgba(34,197,94,0.12)]",
  },
};

// ─── Reusable sub-heading ────────────────────────────────────────
function SubHeading({ children }) {
  return (
    <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-textPrimary tracking-[-0.01em] mb-2">
      {children}
    </h3>
  );
}

// ─── Section divider label ───────────────────────────────────────
function SectionDivider({ label }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-accent text-xs font-mono font-semibold uppercase tracking-[0.15em]">
        {label}
      </span>
      <div className="flex-1 h-px bg-borderSubtle" aria-hidden="true" />
    </div>
  );
}

// ─── Organisation card ───────────────────────────────────────────
function OrgCard({ org, index }) {
  const c = colorMap[org.color] || colorMap.amber;

  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className={`bg-primary border border-borderSubtle rounded-2xl p-7 lg:p-8 card-hover transition-all duration-500 ${c.glow}`}
      aria-labelledby={`org-${index}-name`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${c.iconBg}`}
          >
            <GitPullRequest size={20} className={c.iconText} aria-hidden="true" />
          </div>
          <div>
            <h4
              id={`org-${index}-name`}
              className="text-lg font-semibold text-textPrimary leading-tight"
            >
              {org.name}
            </h4>
            <p className={`text-xs font-mono font-medium mt-0.5 ${c.iconText}`}>
              {org.context}
            </p>
          </div>
        </div>

        {/* Active indicator */}
        <div
          className="flex items-center gap-1.5 text-xs text-textMuted shrink-0 pt-0.5"
          aria-label="Active contribution"
        >
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
          Active
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

      {/* Contributions list */}
      <ul className="space-y-2 mb-6">
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

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {org.tech.map((t) => (
          <span
            key={t}
            className="text-xs text-textMuted bg-surfaceElevated px-3 py-1 rounded-lg border border-borderSubtle"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-5 border-t border-borderSubtle">
        <a
          href={org.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ${c.btn}`}
          aria-label={`${org.profileLabel} — ${org.name}`}
        >
          {org.profileLabel}
          <ExternalLink size={11} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

// ─── Maintained project card ─────────────────────────────────────
function MaintainedProjectCard({ project, index }) {
  const c = colorMap[project.color] || colorMap.amber;

  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className={`bg-primary border border-borderSubtle rounded-2xl p-7 lg:p-8 card-hover transition-all duration-500 ${c.glow}`}
      aria-labelledby={`proj-${index}-name`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-3">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 ${c.iconBg}`}
          >
            <Wrench size={18} className={c.iconText} aria-hidden="true" />
          </div>
          <div>
            <h4
              id={`proj-${index}-name`}
              className="text-base font-semibold text-textPrimary leading-tight"
            >
              {project.name}
            </h4>
            <p className={`text-xs font-mono mt-0.5 ${c.iconText}`}>{project.tagline}</p>
          </div>
        </div>

        {/* Status */}
        <div
          className={`flex items-center gap-1.5 text-xs shrink-0 pt-0.5 ${c.iconText}`}
          aria-label={`Status: ${project.status}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
          {project.status === "active" ? "Active" : project.status}
        </div>
      </div>

      {/* Role badge */}
      <div className="mb-4">
        <span
          className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full border ${c.badge}`}
        >
          <BadgeCheck size={11} aria-hidden="true" />
          {project.myRole}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-textMuted leading-relaxed mb-5">{project.description}</p>

      {/* Responsibilities */}
      <div className="mb-5">
        <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-accent mb-2">
          Responsibilities
        </p>
        <ul className="space-y-1.5">
          {project.responsibilities.map((r) => (
            <li key={r} className="flex items-start gap-2 text-xs text-textMuted">
              <span
                className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1 shrink-0`}
                aria-hidden="true"
              />
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs text-textMuted bg-surfaceElevated px-2.5 py-1 rounded-lg border border-borderSubtle"
          >
            {t}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <div className="pt-5 border-t border-borderSubtle">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-textMuted hover:text-accent border border-borderSubtle hover:border-accent px-4 py-2 rounded-full transition-all duration-300"
          aria-label={`View ${project.name} on GitHub`}
        >
          <Github size={13} aria-hidden="true" />
          View on GitHub
        </a>
      </div>
    </motion.article>
  );
}

// ─── Tech stack pill grid ────────────────────────────────────────
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
            className="bg-primary border border-borderSubtle rounded-xl p-5 card-hover"
          >
            <p className="text-sm font-semibold text-textPrimary mb-1">{item.name}</p>
            <p className="text-xs text-textMuted leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Contribution approach grid ──────────────────────────────────
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
            className="bg-primary border border-borderSubtle rounded-xl p-5 card-hover"
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
    <section
      id="opensource"
      className="py-24 lg:py-32 bg-surface"
      aria-labelledby="os-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* ── Section header ── */}
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
          <motion.p
            variants={fadeInUp}
            className="text-lg text-textMuted max-w-2xl mb-16"
          >
            {openSource.tagline}
          </motion.p>

          {/* ── 1. Organisations I Contribute To ── */}
          <motion.div variants={fadeInUp} className="mb-16">
            <SectionDivider label="Organizations I Contribute To" />
            <div className="grid md:grid-cols-2 gap-6">
              {openSource.organizations.map((org, i) => (
                <OrgCard key={org.name} org={org} index={i} />
              ))}
            </div>
          </motion.div>

          {/* ── 2. Projects I Maintain ── */}
          <motion.div variants={fadeInUp} className="mb-16">
            <SectionDivider label="Projects I Maintain" />
            <div className="grid md:grid-cols-2 gap-6">
              {openSource.maintainedProjects.map((project, i) => (
                <MaintainedProjectCard key={project.name} project={project} index={i} />
              ))}
            </div>
          </motion.div>

          {/* ── 3. Technologies ── */}
          <div className="mb-12">
            <TechGrid />
          </div>

          {/* ── 4. Contribution approach ── */}
          <ContributionValues />
        </motion.div>
      </div>
    </section>
  );
}
