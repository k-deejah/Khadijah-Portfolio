import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import CrystalLayer from "./CrystalLayer.jsx";

function TimelineEntry({ entry, index }) {
  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className="relative pl-14 pb-12 last:pb-0"
      aria-labelledby={`exp-role-${index}`}
    >
      {/* Accent dot with ring */}
      <div
        className="absolute left-[14px] top-[6px] w-3 h-3 rounded-full bg-accent
                   ring-2 ring-[rgba(255,107,53,0.25)] ring-offset-2 ring-offset-primary"
        aria-hidden="true"
      />

      {/* Period */}
      <span className="text-[10px] font-mono text-textMuted mb-1 block uppercase tracking-wider">
        {entry.period}
      </span>

      {/* Role + Company */}
      <h3 id={`exp-role-${index}`} className="text-base font-semibold text-textPrimary leading-snug">
        {entry.role}
      </h3>
      <span className="text-sm text-accent font-medium">{entry.company}</span>

      {/* Description */}
      <p className="text-sm text-textMuted leading-relaxed mt-2">{entry.description}</p>

      {/* Highlights */}
      {entry.highlights && entry.highlights.length > 0 && (
        <ul className="mt-3 space-y-1">
          {entry.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-textMuted">
              <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">▸</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* External link */}
      {entry.link && (
        <a
          href={entry.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-xs text-accent
                     hover:text-[#ff9f5a] transition-colors duration-200"
          aria-label={`${entry.linkLabel} for ${entry.company}`}
        >
          {entry.linkLabel}
          <ArrowUpRight size={11} aria-hidden="true" />
        </a>
      )}
    </motion.article>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-surface overflow-hidden" aria-labelledby="experience-heading">
      <CrystalLayer variant="mid" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            EXPERIENCE
          </motion.span>
          <motion.h2
            id="experience-heading"
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-12 lg:mb-16"
          >
            Where I've <span className="text-gradient">worked</span>
          </motion.h2>

          {/* Timeline container */}
          <div className="max-w-3xl relative">
            {/* Vertical connector line */}
            <div className="timeline-line" aria-hidden="true" />

            {experience.map((entry, i) => (
              <TimelineEntry key={`${entry.company}-${i}`} entry={entry} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
