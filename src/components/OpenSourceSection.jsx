import { motion } from "framer-motion";
import { Github, ArrowUpRight, BadgeCheck } from "lucide-react";
import { openSource } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import CrystalLayer from "./CrystalLayer.jsx";

const colorMap = {
  amber: {
    iconBg: "bg-[rgba(255,107,53,0.09)] border-[rgba(255,107,53,0.18)]",
    iconText: "text-accent",
    badge: "bg-[rgba(255,107,53,0.07)] text-accent border-[rgba(255,107,53,0.14)]",
    roleBadge: "bg-[rgba(255,107,53,0.1)] text-accent border-[rgba(255,107,53,0.22)]",
    dot: "bg-accent",
    glow: "hover:border-[rgba(255,107,53,0.3)] hover:shadow-[0_8px_32px_rgba(255,107,53,0.08)]",
    bar: "bg-gradient-to-r from-accent to-accentSecondary",
    highlight: "bg-[rgba(255,107,53,0.07)] text-accent border-[rgba(255,107,53,0.12)]",
  },
  purple: {
    iconBg: "bg-[rgba(168,85,247,0.09)] border-[rgba(168,85,247,0.18)]",
    iconText: "text-purple-400",
    badge: "bg-[rgba(168,85,247,0.07)] text-purple-400 border-[rgba(168,85,247,0.14)]",
    roleBadge: "bg-[rgba(168,85,247,0.1)] text-purple-400 border-[rgba(168,85,247,0.22)]",
    dot: "bg-purple-400",
    glow: "hover:border-[rgba(168,85,247,0.3)] hover:shadow-[0_8px_32px_rgba(168,85,247,0.08)]",
    bar: "bg-gradient-to-r from-indigo-500 to-purple-500",
    highlight: "bg-[rgba(168,85,247,0.07)] text-purple-400 border-[rgba(168,85,247,0.12)]",
  },
  blue: {
    iconBg: "bg-[rgba(59,130,246,0.09)] border-[rgba(59,130,246,0.18)]",
    iconText: "text-blue-400",
    badge: "bg-[rgba(59,130,246,0.07)] text-blue-400 border-[rgba(59,130,246,0.14)]",
    roleBadge: "bg-[rgba(59,130,246,0.1)] text-blue-400 border-[rgba(59,130,246,0.22)]",
    dot: "bg-blue-400",
    glow: "hover:border-[rgba(59,130,246,0.3)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.08)]",
    bar: "bg-gradient-to-r from-blue-500 to-indigo-500",
    highlight: "bg-[rgba(59,130,246,0.07)] text-blue-400 border-[rgba(59,130,246,0.12)]",
  },
  green: {
    iconBg: "bg-[rgba(34,197,94,0.09)] border-[rgba(34,197,94,0.18)]",
    iconText: "text-green-400",
    badge: "bg-[rgba(34,197,94,0.07)] text-green-400 border-[rgba(34,197,94,0.14)]",
    roleBadge: "bg-[rgba(34,197,94,0.1)] text-green-400 border-[rgba(34,197,94,0.22)]",
    dot: "bg-green-400",
    glow: "hover:border-[rgba(34,197,94,0.3)] hover:shadow-[0_8px_32px_rgba(34,197,94,0.08)]",
    bar: "bg-gradient-to-r from-green-500 to-emerald-400",
    highlight: "bg-[rgba(34,197,94,0.07)] text-green-400 border-[rgba(34,197,94,0.12)]",
  },
};

// Card for a maintained project — full-width, more detail
function MaintainedProjectCard({ project, index }) {
  const c = colorMap[project.color] || colorMap.amber;

  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className={`group relative bg-surface border border-borderSubtle rounded-2xl overflow-hidden
                  card-lift transition-all duration-300 ${c.glow}`}
      aria-labelledby={`oss-${index}`}
    >
      {/* Top accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] opacity-0
                    group-hover:opacity-100 transition-opacity duration-300 ${c.bar}`}
        aria-hidden="true"
      />

      <div className="p-6 lg:p-7">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 id={`oss-${index}`} className="text-base font-semibold text-textPrimary leading-tight">
              {project.name}
            </h3>
            <p className={`text-xs mt-1 ${c.iconText}`}>{project.tagline}</p>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            {/* Role badge — prominent */}
            <span className={`inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${c.roleBadge}`}>
              <BadgeCheck size={9} aria-hidden="true" />
              {project.roleBadge}
            </span>
            {/* Active status */}
            <span className={`inline-flex items-center gap-1 text-[10px] font-mono ${c.iconText}`} aria-label="Active">
              <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} aria-hidden="true" />
              Active
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-textMuted leading-relaxed mb-5">{project.description}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.highlights.map((h) => (
            <span key={h} className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${c.highlight}`}>
              {h}
            </span>
          ))}
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] text-textMuted bg-surfaceElevated px-2 py-0.5 rounded border border-borderSubtle">
              {t}
            </span>
          ))}
        </div>

        {/* GitHub button */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-textMuted
                     hover:text-accent border border-borderSubtle hover:border-[rgba(255,107,53,0.3)]
                     px-4 py-2 rounded-full transition-all duration-200"
          aria-label={`${project.name} on GitHub`}
        >
          <Github size={13} aria-hidden="true" />
          View on GitHub
          <ArrowUpRight size={11} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

// Compact card for external org contributions
function OrgCard({ org, index }) {
  const c = colorMap[org.color] || colorMap.amber;

  return (
    <motion.a
      href={org.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeInUp}
      custom={index}
      className={`group relative flex flex-col gap-4 bg-surface border border-borderSubtle
                  rounded-2xl overflow-hidden card-lift transition-all duration-300 ${c.glow}`}
      aria-label={`${org.name} — ${org.context}`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] opacity-0
                    group-hover:opacity-100 transition-opacity duration-300 ${c.bar}`}
        aria-hidden="true"
      />

      {/* Logo banner */}
      <div className="relative h-[100px] bg-[#0d0d0d] overflow-hidden rounded-t-2xl">
        {org.logo ? (
          <img
            src={`${import.meta.env.BASE_URL}${encodeURIComponent(org.logo.replace(/^\//, "")).replace(/%2F/g, "/")}`}
            alt={org.name}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-textMuted">{org.name}</span>
          </div>
        )}
      </div>

      <div className="px-5 pb-5 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-textPrimary">{org.name}</p>
            <p className={`text-xs mt-0.5 ${c.iconText}`}>{org.context}</p>
          </div>
          <ArrowUpRight
            size={14}
            className="text-textMuted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 shrink-0"
            aria-hidden="true"
          />
        </div>

        <span className={`self-start inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border ${c.badge}`}>
          <BadgeCheck size={9} aria-hidden="true" />
          {org.myRole}
        </span>

        <p className="text-xs text-textMuted leading-relaxed">{org.description}</p>

        <div className="flex flex-wrap gap-1">
          {org.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-[10px] text-textMuted bg-surfaceElevated px-2 py-0.5 rounded border border-borderSubtle">
              {t}
            </span>
          ))}
        </div>

        <span className="text-[10px] text-textMuted font-mono">{org.period}</span>
      </div>
    </motion.a>
  );
}

export default function OpenSourceSection() {
  return (
    <section id="opensource" className="relative py-24 lg:py-32 bg-surface overflow-hidden" aria-labelledby="os-heading">
      <CrystalLayer variant="subtle" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
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
          <motion.p variants={fadeInUp} className="text-base text-textMuted max-w-xl mb-14 leading-relaxed">
            {openSource.tagline}
          </motion.p>

          {/* ── Projects I own and maintain ── */}
          <motion.div variants={fadeInUp} className="mb-14">
            <p className="text-[11px] font-mono font-semibold text-accent uppercase tracking-[0.15em] mb-6">
              My Projects
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {openSource.maintainedProjects.map((project, i) => (
                <MaintainedProjectCard key={project.name} project={project} index={i} />
              ))}
            </div>
          </motion.div>

          {/* ── External org contributions ── */}
          <motion.div variants={fadeInUp}>
            <p className="text-[11px] font-mono font-semibold text-accent uppercase tracking-[0.15em] mb-6">
              Organizations I Contribute To
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {openSource.organizations.map((org, i) => (
                <OrgCard key={org.name} org={org} index={i} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
