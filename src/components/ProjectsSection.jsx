import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, ExternalLink, X,
  Shield, Code2, Layers, Box, Hexagon,
  ChevronLeft, ChevronRight, ChevronDown,
} from "lucide-react";
import { projects } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import CrystalLayer from "./CrystalLayer.jsx";

// ─── Accent theme ────────────────────────────────────────────────
const accentTheme = {
  amber: {
    border:    "border-[rgba(255,107,53,0.18)]",
    iconBg:    "bg-[rgba(255,107,53,0.09)] border-[rgba(255,107,53,0.18)]",
    iconText:  "text-accent",
    glow:      "hover:shadow-[0_0_40px_rgba(255,107,53,0.1)]",
    gradient:  "from-[rgba(255,107,53,0.22)] via-[rgba(255,107,53,0.08)] to-transparent",
    label:     "bg-[rgba(255,107,53,0.1)] text-accent border-[rgba(255,107,53,0.2)]",
    liveBtn:   "bg-accent hover:bg-[#ff9f5a] text-white",
    detailBtn: "border-[rgba(255,107,53,0.35)] text-accent",
    activeDot: "bg-accent",
  },
  purple: {
    border:    "border-[rgba(168,85,247,0.18)]",
    iconBg:    "bg-[rgba(168,85,247,0.09)] border-[rgba(168,85,247,0.18)]",
    iconText:  "text-purple-400",
    glow:      "hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]",
    gradient:  "from-[rgba(168,85,247,0.22)] via-[rgba(168,85,247,0.08)] to-transparent",
    label:     "bg-[rgba(168,85,247,0.1)] text-purple-400 border-[rgba(168,85,247,0.2)]",
    liveBtn:   "bg-purple-600 hover:bg-purple-500 text-white",
    detailBtn: "border-[rgba(168,85,247,0.35)] text-purple-400",
    activeDot: "bg-purple-400",
  },
  blue: {
    border:    "border-[rgba(59,130,246,0.18)]",
    iconBg:    "bg-[rgba(59,130,246,0.09)] border-[rgba(59,130,246,0.18)]",
    iconText:  "text-blue-400",
    glow:      "hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]",
    gradient:  "from-[rgba(59,130,246,0.22)] via-[rgba(59,130,246,0.08)] to-transparent",
    label:     "bg-[rgba(59,130,246,0.1)] text-blue-400 border-[rgba(59,130,246,0.2)]",
    liveBtn:   "bg-blue-600 hover:bg-blue-500 text-white",
    detailBtn: "border-[rgba(59,130,246,0.35)] text-blue-400",
    activeDot: "bg-blue-400",
  },
  green: {
    border:    "border-[rgba(34,197,94,0.18)]",
    iconBg:    "bg-[rgba(34,197,94,0.09)] border-[rgba(34,197,94,0.18)]",
    iconText:  "text-green-400",
    glow:      "hover:shadow-[0_0_40px_rgba(34,197,94,0.1)]",
    gradient:  "from-[rgba(34,197,94,0.22)] via-[rgba(34,197,94,0.08)] to-transparent",
    label:     "bg-[rgba(34,197,94,0.1)] text-green-400 border-[rgba(34,197,94,0.2)]",
    liveBtn:   "bg-green-600 hover:bg-green-500 text-white",
    detailBtn: "border-[rgba(34,197,94,0.35)] text-green-400",
    activeDot: "bg-green-400",
  },
};

const iconMap = { shield: Shield, code: Code2, layers: Layers, box: Box, hexagon: Hexagon };

// ─── Project card ────────────────────────────────────────────────
function ProjectCard({ project, isExpanded, onToggleExpand }) {
  const t = accentTheme[project.accent] || accentTheme.amber;
  const Icon = iconMap[project.icon] || Layers;
  const panelId = `panel-${project.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article
      className={`relative bg-surface border ${t.border} rounded-2xl flex flex-col overflow-hidden
                  transition-all duration-300 ${t.glow} h-full`}
      aria-labelledby={`proj-title-${project.title.replace(/\s+/g, "-")}`}
    >
      {/* Screenshot / gradient tile */}
      <div className={`relative h-[160px] bg-gradient-to-br ${t.gradient} shrink-0 overflow-hidden`}>
        {project.screenshot ? (
          <>
            {/* Browser chrome dots */}
            <div
              className="absolute top-0 left-0 right-0 h-6 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm
                         flex items-center px-3 gap-1.5 z-10"
              aria-hidden="true"
            >
              <span className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.18)]" />
              <span className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.18)]" />
              <span className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.18)]" />
            </div>
            <motion.img
              src={`${import.meta.env.BASE_URL}${encodeURIComponent(
                project.screenshot.replace(/^\//, "")
              ).replace(/%2F/g, "/")}`}
              alt={`${project.title} screenshot`}
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ paddingTop: "24px" }}
              loading="lazy"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none z-10"
              style={{ background: "linear-gradient(to bottom, transparent, var(--surface))" }}
              aria-hidden="true"
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${t.iconBg} opacity-40`}>
              <Icon size={18} className={t.iconText} />
            </div>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Icon + tag */}
        <div className="flex items-start justify-between mb-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${t.iconBg}`}>
            <Icon size={16} className={t.iconText} aria-hidden="true" />
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
            <span className="text-[10px] text-textMuted px-1 py-0.5">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-2 pt-3 border-t border-borderSubtle flex-wrap">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-textMuted hover:text-accent
                         transition-colors duration-200 px-3 py-1.5 rounded-full border border-borderSubtle
                         hover:border-[rgba(255,107,53,0.3)]"
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
              className={`inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full font-medium
                          transition-all duration-200 ${t.liveBtn}`}
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={11} aria-hidden="true" />
              Live Demo
            </a>
          )}

          {/* Details toggle — right-aligned */}
          <button
            onClick={onToggleExpand}
            aria-expanded={isExpanded}
            aria-controls={panelId}
            className={`ml-auto inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5
                        rounded-full border transition-all duration-200
                        ${isExpanded
                          ? `${t.detailBtn} bg-[rgba(255,255,255,0.04)]`
                          : "border-borderSubtle text-textMuted hover:border-[rgba(255,107,53,0.3)] hover:text-accent"
                        }`}
          >
            {isExpanded ? (
              <>
                <X size={11} aria-hidden="true" />
                Close
              </>
            ) : (
              <>
                Details
                <ChevronDown size={11} aria-hidden="true" />
              </>
            )}
          </button>
        </div>

        {/* ── Expandable detail panel ──
            - No overflow:hidden so the content is never auto-truncated
            - User must click Close to collapse
            - height:auto so it expands to fit all content
        */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id={panelId}
              role="region"
              aria-label={`${project.title} details`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="pt-5 mt-4 border-t border-borderSubtle space-y-4">

                {/* Impact highlight */}
                {project.impact && (
                  <div className="bg-[rgba(255,107,53,0.05)] border border-[rgba(255,107,53,0.14)] rounded-xl px-4 py-3">
                    <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-1">
                      Impact
                    </p>
                    <p className="text-sm text-textPrimary leading-relaxed font-medium">
                      {project.impact}
                    </p>
                  </div>
                )}

                {/* 2-col grid: Problem / Solution / Role / Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-1.5">
                      Problem
                    </p>
                    <p className="text-sm text-textMuted leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-1.5">
                      Solution
                    </p>
                    <p className="text-sm text-textMuted leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-1.5">
                      My Role
                    </p>
                    <p className="text-sm text-textMuted leading-relaxed">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-1.5">
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

                {/* Close at the bottom so user doesn't have to scroll back up */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={onToggleExpand}
                    className={`inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full
                                border ${t.detailBtn} bg-[rgba(255,255,255,0.03)] transition-all duration-200
                                hover:bg-[rgba(255,255,255,0.07)]`}
                  >
                    <X size={11} aria-hidden="true" />
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

// ─── Main carousel ───────────────────────────────────────────────
const AUTOPLAY_DELAY = 6000;

export default function ProjectsSection() {
  const [current, setCurrent]     = useState(0);
  const [expandedId, setExpandedId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const autoplayRef = useRef(null);
  const count = projects.length;

  // goTo does NOT collapse expanded panel — user controls that
  const goTo = useCallback((idx) => {
    const next = ((idx % count) + count) % count;
    setCurrent(next);
    // Only collapse panel when user navigates away from the card that's expanded
    setExpandedId((prev) => {
      if (prev === null) return null;
      // Check if expanded project is still visible after navigation
      const visibleIndices = [0, 1, 2].map((o) => (next + o) % count);
      const expandedIdx = projects.findIndex((p) => p.title === prev);
      return visibleIndices.includes(expandedIdx) ? prev : null;
    });
  }, [count]);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Autoplay — ALWAYS pauses when any panel is expanded
  useEffect(() => {
    if (expandedId !== null || isDragging) {
      clearInterval(autoplayRef.current);
      return;
    }
    autoplayRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(autoplayRef.current);
  }, [next, expandedId, isDragging]);

  // Keyboard — only fires when no input is focused
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Touch swipe
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 48) { delta < 0 ? next() : prev(); }
    touchStartX.current = null;
  };

  // Mouse drag
  const dragStartX = useRef(null);
  const handleMouseDown = (e) => { dragStartX.current = e.clientX; setIsDragging(true); };
  const handleMouseUp   = (e) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 48) { delta < 0 ? next() : prev(); }
    dragStartX.current = null;
    setTimeout(() => setIsDragging(false), 100);
  };

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <CrystalLayer variant="subtle" flip />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            FEATURED PROJECTS
          </motion.span>
          <motion.h2
            id="projects-heading"
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-3"
          >
            Selected <span className="text-gradient">work</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base text-textMuted max-w-lg">
            End-to-end projects from research to shipped product.
          </motion.p>
        </motion.div>

        {/* ── Carousel with large side arrows ── */}
        <div className="relative">

          {/* Left arrow — large, always visible */}
          <button
            onClick={prev}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 lg:-translate-x-7 z-20
                       w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-borderSubtle bg-surface/90
                       backdrop-blur-sm items-center justify-center
                       text-textMuted hover:text-accent hover:border-[rgba(255,107,53,0.4)]
                       hover:shadow-[0_0_24px_rgba(255,107,53,0.12)]
                       transition-all duration-200 focus-visible:outline-none"
            aria-label="Previous project"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          {/* Right arrow — large, always visible */}
          <button
            onClick={next}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 lg:translate-x-7 z-20
                       w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-borderSubtle bg-surface/90
                       backdrop-blur-sm items-center justify-center
                       text-textMuted hover:text-accent hover:border-[rgba(255,107,53,0.4)]
                       hover:shadow-[0_0_24px_rgba(255,107,53,0.12)]
                       transition-all duration-200 focus-visible:outline-none"
            aria-label="Next project"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>

          {/* Slide viewport */}
          <div
            className="overflow-hidden select-none cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            role="region"
            aria-label="Project carousel"
            aria-live="polite"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -48 }}
                transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[0, 1, 2].map((offset) => {
                  const idx = (current + offset) % count;
                  const project = projects[idx];
                  return (
                    <div
                      key={`${project.title}-${offset}`}
                      className={
                        offset === 0 ? "block"
                        : offset === 1 ? "hidden sm:block"
                        : "hidden lg:block"
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
        </div>

        {/* ── Mobile arrows + counter (shown on mobile only) ── */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-borderSubtle bg-surface flex items-center justify-center
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
            className="w-11 h-11 rounded-full border border-borderSubtle bg-surface flex items-center justify-center
                       text-textMuted hover:text-accent hover:border-[rgba(255,107,53,0.3)] transition-all duration-200"
            aria-label="Next project"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        {/* ── Progress dots ── */}
        <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Project slides">
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
