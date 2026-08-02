import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, ExternalLink,
  Shield, Code2, Layers, Box, Hexagon,
  ChevronLeft, ChevronRight, ChevronDown,
} from "lucide-react";
import { projects } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import CrystalLayer from "./CrystalLayer.jsx";

// ─── Accent theme map ────────────────────────────────────────────
const accentTheme = {
  amber: {
    border: "border-[rgba(255,107,53,0.18)]",
    iconBg: "bg-[rgba(255,107,53,0.09)] border-[rgba(255,107,53,0.18)]",
    iconText: "text-accent",
    glow: "shadow-[0_0_40px_rgba(255,107,53,0.07)]",
    gradient: "from-[rgba(255,107,53,0.22)] via-[rgba(255,107,53,0.08)] to-transparent",
    label: "bg-[rgba(255,107,53,0.1)] text-accent border-[rgba(255,107,53,0.2)]",
    liveBtn: "bg-accent hover:bg-[#ff9f5a] text-white",
    dot: "bg-accent",
    activeDot: "bg-accent",
  },
  purple: {
    border: "border-[rgba(168,85,247,0.18)]",
    iconBg: "bg-[rgba(168,85,247,0.09)] border-[rgba(168,85,247,0.18)]",
    iconText: "text-purple-400",
    glow: "shadow-[0_0_40px_rgba(168,85,247,0.07)]",
    gradient: "from-[rgba(168,85,247,0.22)] via-[rgba(168,85,247,0.08)] to-transparent",
    label: "bg-[rgba(168,85,247,0.1)] text-purple-400 border-[rgba(168,85,247,0.2)]",
    liveBtn: "bg-purple-600 hover:bg-purple-500 text-white",
    dot: "bg-purple-400",
    activeDot: "bg-purple-400",
  },
  blue: {
    border: "border-[rgba(59,130,246,0.18)]",
    iconBg: "bg-[rgba(59,130,246,0.09)] border-[rgba(59,130,246,0.18)]",
    iconText: "text-blue-400",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.07)]",
    gradient: "from-[rgba(59,130,246,0.22)] via-[rgba(59,130,246,0.08)] to-transparent",
    label: "bg-[rgba(59,130,246,0.1)] text-blue-400 border-[rgba(59,130,246,0.2)]",
    liveBtn: "bg-blue-600 hover:bg-blue-500 text-white",
    dot: "bg-blue-400",
    activeDot: "bg-blue-400",
  },
  green: {
    border: "border-[rgba(34,197,94,0.18)]",
    iconBg: "bg-[rgba(34,197,94,0.09)] border-[rgba(34,197,94,0.18)]",
    iconText: "text-green-400",
    glow: "shadow-[0_0_40px_rgba(34,197,94,0.07)]",
    gradient: "from-[rgba(34,197,94,0.22)] via-[rgba(34,197,94,0.08)] to-transparent",
    label: "bg-[rgba(34,197,94,0.1)] text-green-400 border-[rgba(34,197,94,0.2)]",
    liveBtn: "bg-green-600 hover:bg-green-500 text-white",
    dot: "bg-green-400",
    activeDot: "bg-green-400",
  },
};

const iconMap = { shield: Shield, code: Code2, layers: Layers, box: Box, hexagon: Hexagon };

// ─── Single project card ─────────────────────────────────────────
function ProjectCard({ project, isExpanded, onToggleExpand }) {
  const t = accentTheme[project.accent] || accentTheme.amber;
  const Icon = iconMap[project.icon] || Layers;
  const panelId = `panel-${project.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article
      className={`relative bg-surface border ${t.border} rounded-2xl flex flex-col overflow-hidden
                  transition-shadow duration-300 ${t.glow} h-full`}
      aria-labelledby={`proj-title-${project.title.replace(/\s+/g, "-")}`}
    >
      {/* Screenshot / browser mockup */}
      <div className={`relative h-[160px] bg-gradient-to-br ${t.gradient} shrink-0 overflow-hidden`}>
        {project.screenshot ? (
          <>
            {/* Browser chrome bar */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-[rgba(0,0,0,0.35)] backdrop-blur-sm flex items-center px-3 gap-1.5 z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
            </div>
            <motion.img
              src={`${import.meta.env.BASE_URL}${project.screenshot.replace(/^\//, "")}`}
              alt={`${project.title} screenshot`}
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ paddingTop: "24px" }}
              loading="lazy"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Bottom fade so screenshot blends into card */}
            <div
              className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none z-10"
              style={{ background: "linear-gradient(to bottom, transparent, var(--surface))" }}
              aria-hidden="true"
            />
          </>
        ) : (
          /* Placeholder when no screenshot yet */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${t.iconBg} opacity-40`}>
              <Icon size={18} className={t.iconText} aria-hidden="true" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + tag row */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${t.iconBg}`}>
            <Icon size={18} className={t.iconText} aria-hidden="true" />
          </div>
          <span className={`text-[10px] font-mono font-semibold uppercase tracking-widest px-2 py-0.5 rounded border ${t.label}`}>
            {project.tags[0]}
          </span>
        </div>

        {/* Title + summary */}
        <h3
          id={`proj-title-${project.title.replace(/\s+/g, "-")}`}
          className="text-base font-semibold text-textPrimary mb-1.5 leading-snug"
        >
          {project.title}
        </h3>
        <p className="text-sm text-textMuted leading-relaxed mb-4 flex-1">{project.summary}</p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.slice(0, 5).map((tech) => (
            <span key={tech} className="text-[10px] text-textMuted bg-surfaceElevated px-2 py-0.5 rounded border border-borderSubtle">
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-[10px] text-textMuted px-1 py-0.5">+{project.tech.length - 5}</span>
          )}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-2 pt-4 border-t border-borderSubtle flex-wrap">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-textMuted hover:text-accent transition-colors duration-200 px-3 py-1.5 rounded-full border border-borderSubtle hover:border-[rgba(255,107,53,0.3)]"
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
              className={`inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${t.liveBtn}`}
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={11} aria-hidden="true" />
              Live Demo
            </a>
          )}
          <button
            onClick={onToggleExpand}
            aria-expanded={isExpanded}
            aria-controls={panelId}
            className="ml-auto inline-flex items-center gap-1 text-xs text-textMuted hover:text-accent transition-colors duration-200"
          >
            {isExpanded ? "Less" : "Details"}
            <ChevronDown
              size={12}
              className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Expandable panel */}
        <AnimatePresence initial={false}>
          {isExpanded && (
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
              <div className="pt-5 mt-4 border-t border-borderSubtle space-y-4">
                {project.impact && (
                  <div className="bg-[rgba(255,107,53,0.04)] border border-[rgba(255,107,53,0.12)] rounded-xl px-4 py-3">
                    <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-1.5">Impact</p>
                    <p className="text-sm text-textPrimary leading-relaxed font-medium">{project.impact}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-2">Problem</p>
                    <p className="text-sm text-textMuted leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-2">Solution</p>
                    <p className="text-sm text-textMuted leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-2">My Role</p>
                    <p className="text-sm text-textMuted leading-relaxed">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-2">Key Features</p>
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

// ─── Carousel ────────────────────────────────────────────────────
const AUTOPLAY_DELAY = 5000;

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [expandedId, setExpandedId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const autoplayRef = useRef(null);
  const count = projects.length;

  const goTo = useCallback((idx) => {
    // Wrap around
    const next = ((idx % count) + count) % count;
    setCurrent(next);
    setExpandedId(null); // collapse panel on slide change
  }, [count]);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Autoplay — pause when expanded or dragging
  useEffect(() => {
    if (expandedId || isDragging) return;
    autoplayRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(autoplayRef.current);
  }, [next, expandedId, isDragging]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  { prev(); }
      if (e.key === "ArrowRight") { next(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Touch / swipe
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) { delta < 0 ? next() : prev(); }
    touchStartX.current = null;
  };

  // Mouse drag
  const dragStartX = useRef(null);
  const handleMouseDown = (e) => { dragStartX.current = e.clientX; setIsDragging(true); };
  const handleMouseUp = (e) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 50) { delta < 0 ? next() : prev(); }
    dragStartX.current = null;
    setTimeout(() => setIsDragging(false), 100);
  };

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="projects-heading">
      <CrystalLayer variant="subtle" flip />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-10"
        >
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            FEATURED PROJECTS
          </motion.span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <motion.h2
              id="projects-heading"
              variants={fadeInUp}
              className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary"
            >
              Selected <span className="text-gradient">work</span>
            </motion.h2>

            {/* Desktop arrow controls */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-borderSubtle bg-surface flex items-center justify-center
                           text-textMuted hover:text-accent hover:border-[rgba(255,107,53,0.3)] transition-all duration-200"
                aria-label="Previous project"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <span className="text-xs text-textMuted font-mono tabular-nums">
                {current + 1} / {count}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-borderSubtle bg-surface flex items-center justify-center
                           text-textMuted hover:text-accent hover:border-[rgba(255,107,53,0.3)] transition-all duration-200"
                aria-label="Next project"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </motion.div>
          </div>
          <motion.p variants={fadeInUp} className="text-base text-textMuted max-w-xl mt-3">
            End-to-end projects — from research through to shipped product.
          </motion.p>
        </motion.div>

        {/* Carousel viewport */}
        <div
          className="relative overflow-hidden select-none cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          role="region"
          aria-label="Project carousel"
          aria-live="polite"
        >
          {/* Slide track — animates x */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Show current + next 2 on large, current + next on md, current on mobile */}
              {[0, 1, 2].map((offset) => {
                const idx = (current + offset) % count;
                const project = projects[idx];
                return (
                  <div
                    key={`${project.title}-${offset}`}
                    className={
                      offset === 0
                        ? "block"                            // always visible
                        : offset === 1
                        ? "hidden sm:block"                  // visible sm+
                        : "hidden lg:block"                  // visible lg+
                    }
                  >
                    <ProjectCard
                      project={project}
                      isExpanded={expandedId === project.title}
                      onToggleExpand={() =>
                        setExpandedId(expandedId === project.title ? null : project.title)
                      }
                    />
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Project slides">
          {projects.map((p, i) => {
            const t = accentTheme[p.accent] || accentTheme.amber;
            return (
              <button
                key={p.title}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to ${p.title}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? `w-6 h-2 ${t.activeDot}`
                    : "w-2 h-2 bg-borderSubtle hover:bg-textMuted"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
