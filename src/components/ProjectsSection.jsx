import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  BookOpen,
  ChevronRight,
  Clock,
  Shield,
  Code2,
  Layers,
  Box,
  Hexagon,
} from "lucide-react";
import { projects } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

// ─── Accent theme map ─────────────────────────────────────────────
const theme = {
  amber: {
    bg: "from-[rgba(255,107,53,0.08)] to-transparent",
    border: "border-[rgba(255,107,53,0.15)]",
    iconBg: "bg-[rgba(255,107,53,0.12)] border-[rgba(255,107,53,0.2)]",
    iconText: "text-accent",
    tag: "bg-[rgba(255,107,53,0.1)] text-accent border-[rgba(255,107,53,0.2)]",
    glow: "hover:shadow-[0_0_48px_rgba(255,107,53,0.07)]",
    dot: "bg-accent",
    liveBtn: "bg-accent hover:bg-accentSecondary text-white shadow-[0_0_20px_rgba(255,107,53,0.25)] hover:shadow-[0_0_28px_rgba(255,107,53,0.4)]",
  },
  purple: {
    bg: "from-[rgba(168,85,247,0.08)] to-transparent",
    border: "border-[rgba(168,85,247,0.15)]",
    iconBg: "bg-[rgba(168,85,247,0.12)] border-[rgba(168,85,247,0.2)]",
    iconText: "text-purple-400",
    tag: "bg-[rgba(168,85,247,0.1)] text-purple-400 border-[rgba(168,85,247,0.2)]",
    glow: "hover:shadow-[0_0_48px_rgba(168,85,247,0.07)]",
    dot: "bg-purple-400",
    liveBtn: "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.2)]",
  },
  blue: {
    bg: "from-[rgba(59,130,246,0.08)] to-transparent",
    border: "border-[rgba(59,130,246,0.15)]",
    iconBg: "bg-[rgba(59,130,246,0.12)] border-[rgba(59,130,246,0.2)]",
    iconText: "text-blue-400",
    tag: "bg-[rgba(59,130,246,0.1)] text-blue-400 border-[rgba(59,130,246,0.2)]",
    glow: "hover:shadow-[0_0_48px_rgba(59,130,246,0.07)]",
    dot: "bg-blue-400",
    liveBtn: "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]",
  },
  green: {
    bg: "from-[rgba(34,197,94,0.08)] to-transparent",
    border: "border-[rgba(34,197,94,0.15)]",
    iconBg: "bg-[rgba(34,197,94,0.12)] border-[rgba(34,197,94,0.2)]",
    iconText: "text-green-400",
    tag: "bg-[rgba(34,197,94,0.1)] text-green-400 border-[rgba(34,197,94,0.2)]",
    glow: "hover:shadow-[0_0_48px_rgba(34,197,94,0.07)]",
    dot: "bg-green-400",
    liveBtn: "bg-green-600 hover:bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.2)]",
  },
};

// ─── Per-project icon map ─────────────────────────────────────────
const iconMap = {
  shield: Shield,
  code: Code2,
  layers: Layers,
  box: Box,
  hexagon: Hexagon,
};

// ─── Project thumbnail ────────────────────────────────────────────
function ProjectThumbnail({ project }) {
  const t = theme[project.accent] || theme.amber;
  const Icon = iconMap[project.icon] || Layers;

  return (
    <div
      className={`group relative aspect-[16/10] rounded-2xl overflow-hidden border ${t.border} bg-gradient-to-br ${t.bg} bg-surface transition-all duration-500 ${t.glow}`}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Centre content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
        <div
          className={`w-16 h-16 rounded-2xl border flex items-center justify-center ${t.iconBg} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon size={28} className={t.iconText} aria-hidden="true" />
        </div>
        <div className="text-center">
          <p className={`font-mono text-[11px] font-semibold uppercase tracking-[0.15em] ${t.iconText} mb-1`}>
            {project.tags[0]}
          </p>
          <p className="text-textMuted text-sm font-medium">{project.summary}</p>
        </div>
      </div>

      {/* Hover overlay — quick-access links */}
      <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 flex-wrap px-6">
        <ProjectButtons project={project} size="sm" />
      </div>
    </div>
  );
}

// ─── Live Demo / Coming Soon / GitHub / Case Study buttons ────────
function ProjectButtons({ project, size = "md" }) {
  const t = theme[project.accent] || theme.amber;
  const px = size === "sm" ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm";
  const iconSize = size === "sm" ? 13 : 15;

  return (
    <>
      {/* GitHub — only if URL exists */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 border border-borderSubtle hover:border-accent text-textMuted hover:text-accent ${px} rounded-full font-medium transition-all duration-300`}
          aria-label={`View ${project.title} on GitHub`}
        >
          <Github size={iconSize} aria-hidden="true" />
          GitHub
        </a>
      )}

      {/* Live Demo OR Coming Soon */}
      {project.liveStatus === "live" && project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 ${t.liveBtn} ${px} rounded-full font-medium transition-all duration-300`}
          aria-label={`View ${project.title} live demo`}
        >
          <ExternalLink size={iconSize} aria-hidden="true" />
          Live Demo
        </a>
      ) : project.liveStatus === "coming-soon" ? (
        <span
          className={`inline-flex items-center gap-1.5 border border-borderSubtle text-textMuted ${px} rounded-full font-medium cursor-default select-none opacity-70`}
          aria-label={`${project.title} live demo coming soon`}
          title="Live demo coming soon"
        >
          <Clock size={iconSize} aria-hidden="true" />
          Coming Soon
        </span>
      ) : null}

      {/* Case Study — only if URL exists */}
      {project.caseStudy && (
        <a
          href={project.caseStudy}
          className={`inline-flex items-center gap-1.5 border border-[rgba(255,107,53,0.25)] hover:border-accent text-accent ${px} rounded-full font-medium transition-all duration-300 hover:bg-[rgba(255,107,53,0.05)]`}
          aria-label={`Read ${project.title} case study`}
        >
          <BookOpen size={iconSize} aria-hidden="true" />
          Case Study
        </a>
      )}
    </>
  );
}

// ─── Section label ────────────────────────────────────────────────
function FieldLabel({ children }) {
  return (
    <span className="block text-accent text-[11px] font-mono font-semibold uppercase tracking-[0.12em] mb-2">
      {children}
    </span>
  );
}

// ─── Full project article ─────────────────────────────────────────
function ProjectArticle({ project, index }) {
  const t = theme[project.accent] || theme.amber;
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      aria-labelledby={`project-title-${index}`}
    >
      {/* ── Thumbnail ── */}
      <div className={isReversed ? "lg:order-2" : ""}>
        <ProjectThumbnail project={project} />
      </div>

      {/* ── Content ── */}
      <div className={isReversed ? "lg:order-1" : ""}>

        {/* Tags row */}
        <div className="flex items-center gap-2 flex-wrap mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] font-mono font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-lg border ${t.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title + summary */}
        <h3
          id={`project-title-${index}`}
          className="text-2xl lg:text-[1.75rem] font-semibold text-textPrimary leading-tight tracking-[-0.02em] mb-1"
        >
          {project.title}
        </h3>
        <p className={`text-sm font-medium ${t.iconText} mb-4`}>{project.summary}</p>
        <p className="text-base text-textMuted leading-relaxed mb-7">{project.description}</p>

        {/* Problem / Solution / Role */}
        <div className="space-y-4 mb-7 bg-surface rounded-xl p-5 border border-borderSubtle">
          <div>
            <FieldLabel>Problem</FieldLabel>
            <p className="text-sm text-textMuted leading-relaxed">{project.problem}</p>
          </div>
          <div className="border-t border-borderSubtle pt-4">
            <FieldLabel>Solution</FieldLabel>
            <p className="text-sm text-textMuted leading-relaxed">{project.solution}</p>
          </div>
          <div className="border-t border-borderSubtle pt-4">
            <FieldLabel>Role</FieldLabel>
            <p className="text-sm text-textMuted">{project.role}</p>
          </div>
        </div>

        {/* Responsibilities */}
        {project.responsibilities?.length > 0 && (
          <div className="mb-6">
            <FieldLabel>Responsibilities</FieldLabel>
            <ul className="space-y-2">
              {project.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-textMuted">
                  <ChevronRight
                    size={13}
                    className="text-accent mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Notable features */}
        {project.notableFeatures?.length > 0 && (
          <div className="mb-6">
            <FieldLabel>Key Features</FieldLabel>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.notableFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-textMuted">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${t.dot} mt-1.5 shrink-0`}
                    aria-hidden="true"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        <div className="mb-7">
          <FieldLabel>Tech Stack</FieldLabel>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs text-textMuted bg-surfaceElevated px-3 py-1.5 rounded-lg border border-borderSubtle hover:border-accent/30 hover:text-textPrimary transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pt-1">
          <ProjectButtons project={project} size="md" />
        </div>
      </div>
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 lg:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            FEATURED PROJECTS
          </motion.span>
          <motion.h2
            id="projects-heading"
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-4"
          >
            Selected <span className="text-gradient">work</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-textMuted max-w-2xl mb-4"
          >
            AI tools, developer tooling, marketplaces, and design systems — each starting with a user problem.
          </motion.p>

          {/* Status legend */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-5 mb-16 text-xs text-textMuted font-mono"
          >
            <span className="flex items-center gap-2">
              <ExternalLink size={12} className="text-accent" aria-hidden="true" />
              Live
            </span>
            <span className="flex items-center gap-2">
              <Clock size={12} aria-hidden="true" />
              Deployment in progress
            </span>
            <span className="flex items-center gap-2">
              <Github size={12} aria-hidden="true" />
              Open source
            </span>
          </motion.div>

          {/* Project list */}
          <div className="space-y-24 lg:space-y-32">
            {projects.map((project, i) => (
              <ProjectArticle key={project.title} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
