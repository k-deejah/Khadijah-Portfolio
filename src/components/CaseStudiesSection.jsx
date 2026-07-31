import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { caseStudies, caseStudyDetails } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import CaseStudyPanel from "./CaseStudyPanel.jsx";

const tagColors = [
  "bg-[rgba(255,107,53,0.1)] text-accent border-[rgba(255,107,53,0.2)]",
  "bg-[rgba(168,85,247,0.1)] text-purple-400 border-[rgba(168,85,247,0.2)]",
  "bg-[rgba(59,130,246,0.1)] text-blue-400 border-[rgba(59,130,246,0.2)]",
];

const accentIcon = {
  "food-delivery": "text-green-400",
  "escrow-marketplace": "text-accent",
  "web3-nft-platform": "text-purple-400",
};

const accentBorder = {
  "food-delivery": "border-[rgba(34,197,94,0.2)]",
  "escrow-marketplace": "border-[rgba(255,107,53,0.2)]",
  "web3-nft-platform": "border-[rgba(168,85,247,0.2)]",
};

const accentIconBg = {
  "food-delivery": "bg-[rgba(34,197,94,0.1)]",
  "escrow-marketplace": "bg-[rgba(255,107,53,0.1)]",
  "web3-nft-platform": "bg-[rgba(168,85,247,0.1)]",
};

function CaseStudyCard({ cs, isOpen, onToggle, index }) {
  const iconColor = accentIcon[cs.id] || "text-accent";
  const iconBorder = accentBorder[cs.id] || "border-accent/20";
  const iconBg = accentIconBg[cs.id] || "bg-[rgba(255,107,53,0.1)]";

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="flex flex-col"
    >
      {/* Card button */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`cs-panel-${cs.id}`}
        className={`group w-full text-left bg-surface border rounded-2xl p-8 card-hover flex flex-col transition-all duration-300 ${
          isOpen
            ? "border-[rgba(255,255,255,0.15)] rounded-b-none"
            : "border-borderSubtle"
        }`}
      >
        {/* Icon + chevron row */}
        <div className="flex items-start justify-between mb-6">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${iconBg} ${iconBorder}`}
          >
            <BookOpen size={22} className={iconColor} aria-hidden="true" />
          </div>
          <span
            className={`flex items-center gap-1 text-xs font-mono text-textMuted transition-colors duration-300 ${
              isOpen ? "text-accent" : "group-hover:text-accent"
            }`}
            aria-hidden="true"
          >
            {isOpen ? (
              <>Collapse <ChevronUp size={14} /></>
            ) : (
              <>Read Study <ChevronDown size={14} /></>
            )}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {cs.tags.map((tag, ti) => (
            <span
              key={tag}
              className={`text-xs font-mono font-medium px-2.5 py-1 rounded-lg border ${
                tagColors[ti % tagColors.length]
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title + subtitle */}
        <h3
          className={`text-lg font-semibold mb-2 leading-snug transition-colors duration-300 ${
            isOpen ? "text-accent" : "text-textPrimary group-hover:text-accent"
          }`}
        >
          {cs.title}
        </h3>
        <p className="text-sm text-accent font-medium mb-3">{cs.subtitle}</p>
        <p className="text-sm text-textMuted leading-relaxed">{cs.summary}</p>
      </button>

      {/* Expandable panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`cs-panel-${cs.id}`}
            role="region"
            aria-label={`${cs.title} case study`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <CaseStudyPanel cs={caseStudyDetails[cs.id]} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CaseStudiesSection() {
  const [openId, setOpenId] = useState(null);

  function handleToggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section
      id="casestudies"
      className="py-24 lg:py-32"
      aria-labelledby="cs-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            CASE STUDIES
          </motion.span>
          <motion.h2
            id="cs-heading"
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-4"
          >
            The thinking behind{" "}
            <span className="text-gradient">the work</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-textMuted max-w-2xl mb-4"
          >
            Deep dives into the research, decisions, and iterations that shaped
            each product. Not just what was built — but why.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-sm text-textMuted font-mono mb-16"
          >
            Click any case study to expand the full write-up.
            Sections marked <span className="italic">[Placeholder]</span> will
            be filled in as content is finalised.
          </motion.p>

          {/* Cards grid — one card per row so the expanded panel sits directly below its card */}
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard
                key={cs.id}
                cs={cs}
                index={i}
                isOpen={openId === cs.id}
                onToggle={() => handleToggle(cs.id)}
              />
            ))}
          </div>

          {/* Full-width expanded panel — renders below the grid */}
          <AnimatePresence initial={false}>
            {openId && caseStudyDetails[openId] && (
              <motion.div
                key={openId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                <CaseStudyPanel cs={caseStudyDetails[openId]} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
