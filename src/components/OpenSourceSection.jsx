import { motion } from "framer-motion";
import { Github, ArrowUpRight, BadgeCheck } from "lucide-react";
import { openSource } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

const colorMap = {
  amber: {
    iconBg: "bg-[rgba(255,107,53,0.09)] border-[rgba(255,107,53,0.18)]",
    iconText: "text-accent",
    badge: "bg-[rgba(255,107,53,0.07)] text-accent border-[rgba(255,107,53,0.14)]",
    maintainer: "bg-[rgba(255,107,53,0.08)] text-accent border-[rgba(255,107,53,0.2)]",
    dot: "bg-accent",
    glow: "hover:border-[rgba(255,107,53,0.28)] hover:shadow-[0_8px_32px_rgba(255,107,53,0.07)]",
    bar: "bg-gradient-to-r from-accent to-accentSecondary",
    context: "text-accent",
  },
  purple: {
    iconBg: "bg-[rgba(168,85,247,0.09)] border-[rgba(168,85,247,0.18)]",
    iconText: "text-purple-400",
    badge: "bg-[rgba(168,85,247,0.07)] text-purple-400 border-[rgba(168,85,247,0.14)]",
    maintainer: "bg-[rgba(168,85,247,0.08)] text-purple-400 border-[rgba(168,85,247,0.2)]",
    dot: "bg-purple-400",
    glow: "hover:border-[rgba(168,85,247,0.28)] hover:shadow-[0_8px_32px_rgba(168,85,247,0.07)]",
    bar: "bg-gradient-to-r from-indigo-500 to-purple-500",
    context: "text-purple-400",
  },
  blue: {
    iconBg: "bg-[rgba(59,130,246,0.09)] border-[rgba(59,130,246,0.18)]",
    iconText: "text-blue-400",
    badge: "bg-[rgba(59,130,246,0.07)] text-blue-400 border-[rgba(59,130,246,0.14)]",
    maintainer: "bg-[rgba(59,130,246,0.08)] text-blue-400 border-[rgba(59,130,246,0.2)]",
    dot: "bg-blue-400",
    glow: "hover:border-[rgba(59,130,246,0.28)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.07)]",
    bar: "bg-gradient-to-r from-blue-500 to-indigo-500",
    context: "text-blue-400",
  },
  green: {
    iconBg: "bg-[rgba(34,197,94,0.09)] border-[rgba(34,197,94,0.18)]",
    iconText: "text-green-400",
    badge: "bg-[rgba(34,197,94,0.07)] text-green-400 border-[rgba(34,197,94,0.14)]",
    maintainer: "bg-[rgba(34,197,94,0.08)] text-green-400 border-[rgba(34,197,94,0.2)]",
    dot: "bg-green-400",
    glow: "hover:border-[rgba(34,197,94,0.28)] hover:shadow-[0_8px_32px_rgba(34,197,94,0.07)]",
    bar: "bg-gradient-to-r from-green-500 to-emerald-400",
    context: "text-green-400",
  },
};

function GrantFoxLogo({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="GrantFox" role="img">
      <defs>
        <linearGradient id="gf-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#FFD166" />
        </linearGradient>
      </defs>
      <path d="M20 4L8 10V20C8 28.837 13.373 36.739 20 39C26.627 36.739 32 28.837 32 20V10L20 4Z" fill="url(#gf-grad)" opacity="0.9" />
      <path d="M14 20L18 24L26 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DripsLogo({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Drips" role="img">
      <defs>
        <linearGradient id="drips-grad" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <path d="M20 3C20 3 9 14 9 22C9 28.627 13.925 34 20 34C26.075 34 31 28.627 31 22C31 14 20 3 20 3Z" fill="url(#drips-grad)" />
      <path d="M14 24C14 27.314 16.686 30 20 30" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

const orgLogoMap = { Drips: DripsLogo, GrantFox: GrantFoxLogo };

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
      className={`group relative flex flex-col gap-4 bg-surface border border-borderSubtle
                  rounded-2xl p-6 card-lift transition-all duration-300 overflow-hidden ${c.glow}`}
      aria-label={`${org.name} — ${org.context}`}
    >
      {/* Top accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] opacity-0
                    group-hover:opacity-100 transition-opacity duration-300 ${c.bar}`}
        aria-hidden="true"
      />

      {/* Row 1: Logo + arrow */}
      <div className="flex items-start justify-between">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border
                        shrink-0 group-hover:scale-105 transition-transform duration-300 ${c.iconBg}`}>
          {Logo ? <Logo size={22} /> : <Github size={18} className={c.iconText} />}
        </div>
        <ArrowUpRight
          size={14}
          className="text-textMuted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300"
          aria-hidden="true"
        />
      </div>

      {/* Row 2: Name + context */}
      <div>
        <p className="text-base font-semibold text-textPrimary group-hover:text-white transition-colors leading-snug">
          {org.name}
        </p>
        <p className={`text-xs mt-0.5 ${c.context}`}>{org.context}</p>
      </div>

      {/* Row 3: Role badge + period */}
      <div className="flex flex-wrap items-center gap-2">
        <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border ${c.badge}`}>
          <BadgeCheck size={9} aria-hidden="true" />
          {org.myRole}
        </span>
        <span className="text-[10px] text-textMuted font-mono">{org.period}</span>
      </div>

      {/* Row 4: Tech chips */}
      <div className="flex flex-wrap gap-1">
        {org.tech.slice(0, 4).map((t) => (
          <span key={t} className="text-[10px] text-textMuted bg-surfaceElevated px-2 py-0.5 rounded border border-borderSubtle">
            {t}
          </span>
        ))}
      </div>

      {/* Row 5: Link label */}
      <p className="text-xs text-textMuted flex items-center gap-1">
        {org.profileLabel}
        <ArrowUpRight size={10} className="opacity-50" aria-hidden="true" />
      </p>
    </motion.a>
  );
}

function MaintainedCard({ project, index }) {
  const c = colorMap[project.color] || colorMap.amber;

  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className={`bg-surface border border-borderSubtle rounded-xl p-5 card-lift
                  transition-all duration-300 ${c.glow}`}
      aria-labelledby={`mp-${index}`}
    >
      {/* Header row: name + MAINTAINER badge */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h4 id={`mp-${index}`} className="text-sm font-semibold text-textPrimary leading-tight">
          {project.name}
        </h4>
        <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border uppercase tracking-widest shrink-0 ${c.maintainer}`}>
          Maintainer
        </span>
      </div>

      {/* Tagline */}
      <p className={`text-[11px] mt-0.5 mb-2 ${c.iconText}`}>{project.tagline}</p>

      {/* Description */}
      <p className="text-xs text-textMuted leading-relaxed mb-3">{project.description}</p>

      {/* Status + tech chips */}
      <div className="flex flex-wrap gap-1 mb-3">
        <span className={`inline-flex items-center gap-1 text-[10px] font-medium ${c.iconText}`} aria-label="Active">
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} aria-hidden="true" />
          Active
        </span>
      </div>
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="text-[10px] text-textMuted bg-surfaceElevated px-2 py-0.5 rounded border border-borderSubtle">
            {t}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-textMuted hover:text-accent transition-colors"
        aria-label={`${project.name} on GitHub`}
      >
        <Github size={11} aria-hidden="true" />
        GitHub
      </a>
    </motion.article>
  );
}

export default function OpenSourceSection() {
  return (
    <section id="opensource" className="py-24 lg:py-32 bg-surface" aria-labelledby="os-heading">
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

          {/* Tagline */}
          <motion.p variants={fadeInUp} className="text-base text-textMuted max-w-2xl mb-12 leading-relaxed">
            {openSource.tagline}
          </motion.p>

          {/* Organisations */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-[11px] font-mono font-semibold text-accent uppercase tracking-[0.15em] mb-5">
              Organizations I Contribute To
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {openSource.organizations.map((org, i) => (
                <OrgCard key={org.name} org={org} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Maintained projects */}
          <motion.div variants={fadeInUp}>
            <p className="text-[11px] font-mono font-semibold text-accent uppercase tracking-[0.15em] mb-5">
              Projects I Maintain
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {openSource.maintainedProjects.map((project, i) => (
                <MaintainedCard key={project.name} project={project} index={i} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
