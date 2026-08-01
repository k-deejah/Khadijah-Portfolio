import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Shield,
  Code2,
  Layers,
  Box,
  Hexagon,
  ChevronDown,
} from "lucide-react";
import { projects } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

const accentTheme = {
  amber: {
    border: "border-[rgba(255,107,53,0.14)]",
    iconBg: "bg-[rgba(255,107,53,0.09)] border-[rgba(255,107,53,0.18)]",
    iconText: "text-accent",
    tag: "text-accent",
    glow: "hover:border-[rgba(255,107,53,0.3)] hover:shadow-[0_8px_32px_rgba(255,107,53,0.08)]",
    liveBtn: "bg-accent text-white",
    gradient: "from-[rgba(255,107,53,0.18)] to-[rgba(255,159,90,0.04)]",
    label: "bg-[rgba(255,107,53,0.08)] text-accent border-[rgba(255,107,53,0.18)]",
  },
  purple: {
    border: "border-[rgba(168,85,247,0.14)]",
    iconBg: "bg-[rgba(168,85,247,0.09)] border-[rgba(168,85,247,0.18)]",
    iconText: "text-purple-400",
    tag: "text-purple-400",
    glow: "hover:border-[rgba(168,85,247,0.3)] hover:shadow-[0_8px_32px_rgba(168,85,247,0.08)]",
    liveBtn: "bg-purple-600 text-white",
    gradient: "from-[rgba(168,85,247,0.18)] to-[rgba(168,85,247,0.02)]",
    label: "bg-[rgba(168,85,247,0.08)] text-purple-400 border-[rgba(168,85,247,0.18)]",
  },
  blue: {
    border: "border-[rgba(59,130,246,0.14)]",
    iconBg: "bg-[rgba(59,130,246,0.09)] border-[rgba(59,130,246,0.18)]",
    iconText: "text-blue-400",
    tag: "text-blue-400",
    glow: "hover:border-[rgba(59,130,246,0.3)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.08)]",
    liveBtn: "bg-blue-600 text-white",
    gradient: "from-[rgba(59,130,246,0.18)] to-[rgba(59,130,246,0.02)]",
    label: "bg-[rgba(59,130,246,0.08)] text-blue-400 border-[rgba(59,130,246,0.18)]",
  },
  green: {
    border: "border-[rgba(34,197,94,0.14)]",
    iconBg: "bg-[rgba(34,197,94,0.09)] border-[rgba(34,197,94,0.18)]",
    iconText: "text-green-400",
    tag: "text-green-400",
    glow: "hover:border-[rgba(34,197,94,0.3)] hover:shadow-[0_8px_32px_rgba(34,197,94,0.08)]",
    liveBtn: "bg-green-600 text-white",
    gradient: "from-[rgba(34,197,94,0.18)] to-[rgba(34,197,94,0.02)]",
    label: "bg-[rgba(34,197,94,0.08)] text-green-400 border-[rgba(34,197,94,0.18)]",
  },
};

const iconMap = {
  shield: Shield,
  code: Code2,
  layers: Layers,
  box: Box,
  hexagon: Hexagon,
};

function ProjectCard({ project, index, isOpen, onToggle }) {
  const t = accentTheme[project.accent] || accentTheme.amber;
  const Icon = iconMap[project.icon] || Layers;
  const panelId = `panel-${project.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className={`group bg-surface border ${t.border} rounded-2xl flex flex-col card-lift transition-all duration-300 ${t.glow} overflow-hidden`}
      aria-labelledby={`proj-title-${index}`}
    >
      {/* Gradient colour tile */}
      <div className={`h-[100px] bg-gradient-to-br ${t.gradient} shrink-0`} aria-hidden="true" />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + primary tag */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${t.iconBg} group-hover:scale-110 transition-transform duration-300`}>
            <Icon size={18} className={t.iconText} aria-hidden="true" />
          </div>
          <span className={`text-[10px] font-mono font-semibold uppercase tracking-widest px-2 py-0.5 rounded border ${t.label}`}>
            {project.tags[0]}
          </span>
        </div>

        {/* Title + summary */}
        <h3 id={`proj-title-${index}`} className="text-base font-semibold text-textPrimary mb-1.5 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-textMuted leading-relaxed mb-4 flex-1">
          {project.summary}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[10px] text-textMuted bg-surfaceElevated px-2 py-0.5 rounded border border-borderSubtle"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-[10px] text-textMuted px-1 py-0.5">+{project.tech.length - 5}</span>
          )}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-3 pt-4 border-t border-borderSubtle">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-textMuted hover:text-accent transition-colors duration-200"
              aria-label={`${project.title} on GitHub`}
            >
              <Github size={12} aria-hidden="true" />
              GitHub
            </a>
          )}
          {project.liveStatus === "live" && project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium transition-all duration-200 ${t.liveBtn}`}
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={11} aria-hidden="true" />
              Live
            </a>
          )}
          <button
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            className="ml-auto inline-flex items-center gap-1 text-xs text-textMuted hover:text-accent transition-colors duration-200"
          >
            {isOpen ? "Less" : "Details"}
            <ChevronDown
              size={12}
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Expandable detail panel */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              role="region"
              aria-label={`${project.title} details`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="pt-5 mt-4 border-t border-borderSubtle grid md:grid-cols-2 gap-5">
                {/* Problem */}
                <div>
                  <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-2">
                    Problem
                  </p>
                  <p className="text-sm text-textMuted leading-relaxed">{project.problem}</p>
                </div>
                {/* Solution */}
                <div>
                  <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-2">
                    Solution
                  </p>
                  <p className="text-sm text-textMuted leading-relaxed">{project.solution}</p>
                </div>
                {/* Role */}
                <div>
                  <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-2">
                    My Role
                  </p>
                  <p className="text-sm text-textMuted leading-relaxed">{project.role}</p>
                </div>
                {/* Key features */}
                <div>
                  <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-2">
                    Key Features
                  </p>
                  <ul className="space-y-1">
                    {project.notableFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-textMuted">
                        <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="projects" className="py-24 lg:py-32" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
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
          <motion.p variants={fadeInUp} className="text-base text-textMuted max-w-xl mb-12">
            End-to-end projects — from user research through to shipped product.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                isOpen={openId === project.title}
                onToggle={() => setOpenId(openId === project.title ? null : project.title)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
