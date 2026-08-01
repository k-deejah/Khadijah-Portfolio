import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Shield,
  Code2,
  Layers,
  Box,
  Hexagon,
  ArrowUpRight,
} from "lucide-react";
import { projects } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

// ─── Accent theme ─────────────────────────────────────────────────
const theme = {
  amber: {
    border: "border-[rgba(255,107,53,0.15)]",
    iconBg: "bg-[rgba(255,107,53,0.1)] border-[rgba(255,107,53,0.2)]",
    iconText: "text-accent",
    tag: "bg-[rgba(255,107,53,0.08)] text-accent",
    glow: "hover:border-[rgba(255,107,53,0.3)] hover:shadow-[0_8px_32px_rgba(255,107,53,0.08)]",
    liveBtn: "bg-accent hover:bg-accentSecondary text-white",
  },
  purple: {
    border: "border-[rgba(168,85,247,0.15)]",
    iconBg: "bg-[rgba(168,85,247,0.1)] border-[rgba(168,85,247,0.2)]",
    iconText: "text-purple-400",
    tag: "bg-[rgba(168,85,247,0.08)] text-purple-400",
    glow: "hover:border-[rgba(168,85,247,0.3)] hover:shadow-[0_8px_32px_rgba(168,85,247,0.08)]",
    liveBtn: "bg-purple-600 hover:bg-purple-500 text-white",
  },
  blue: {
    border: "border-[rgba(59,130,246,0.15)]",
    iconBg: "bg-[rgba(59,130,246,0.1)] border-[rgba(59,130,246,0.2)]",
    iconText: "text-blue-400",
    tag: "bg-[rgba(59,130,246,0.08)] text-blue-400",
    glow: "hover:border-[rgba(59,130,246,0.3)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.08)]",
    liveBtn: "bg-blue-600 hover:bg-blue-500 text-white",
  },
  green: {
    border: "border-[rgba(34,197,94,0.15)]",
    iconBg: "bg-[rgba(34,197,94,0.1)] border-[rgba(34,197,94,0.2)]",
    iconText: "text-green-400",
    tag: "bg-[rgba(34,197,94,0.08)] text-green-400",
    glow: "hover:border-[rgba(34,197,94,0.3)] hover:shadow-[0_8px_32px_rgba(34,197,94,0.08)]",
    liveBtn: "bg-green-600 hover:bg-green-500 text-white",
  },
};

const iconMap = { shield: Shield, code: Code2, layers: Layers, box: Box, hexagon: Hexagon };

function ProjectCard({ project, index }) {
  const t = theme[project.accent] || theme.amber;
  const Icon = iconMap[project.icon] || Layers;

  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className={`group bg-surface border ${t.border} rounded-2xl p-6 flex flex-col card-lift transition-all duration-300 ${t.glow}`}
      aria-labelledby={`proj-${index}`}
    >
      {/* Icon + tag */}
      <div className="flex items-start justify-between mb-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${t.iconBg} group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={18} className={t.iconText} aria-hidden="true" />
        </div>
        <span className={`text-[10px] font-mono font-semibold uppercase tracking-widest px-2.5 py-1 rounded-md ${t.tag}`}>
          {project.tags[0]}
        </span>
      </div>

      {/* Title + summary */}
      <h3 id={`proj-${index}`} className="text-base font-semibold text-textPrimary mb-1 leading-snug">
        {project.title}
      </h3>
      <p className="text-xs text-textMuted leading-relaxed mb-5 flex-1">
        {project.summary}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.slice(0, 4).map((tech) => (
          <span key={tech} className="text-[11px] text-textMuted bg-surfaceElevated px-2 py-0.5 rounded-md border border-borderSubtle">
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-[11px] text-textMuted px-2 py-0.5">+{project.tech.length - 4}</span>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 pt-4 border-t border-borderSubtle">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-textMuted hover:text-accent transition-colors duration-200"
            aria-label={`${project.title} on GitHub`}
          >
            <Github size={13} aria-hidden="true" />
            GitHub
          </a>
        )}
        {project.liveStatus === "live" && project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${t.liveBtn}`}
            aria-label={`${project.title} live demo`}
          >
            <ExternalLink size={12} aria-hidden="true" />
            Live Demo
          </a>
        )}
        <a
          href="#contact"
          className="ml-auto inline-flex items-center gap-1 text-xs text-textMuted hover:text-accent transition-colors duration-200 group-hover:text-accent"
          aria-label={`Enquire about ${project.title}`}
        >
          View more
          <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32" aria-labelledby="projects-heading">
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
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-16"
          >
            Selected <span className="text-gradient">work</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
