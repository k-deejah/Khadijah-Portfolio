import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { caseStudies } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

const tagColors = [
  "bg-[rgba(255,107,53,0.1)] text-accent border-[rgba(255,107,53,0.2)]",
  "bg-[rgba(168,85,247,0.1)] text-purple-400 border-[rgba(168,85,247,0.2)]",
  "bg-[rgba(59,130,246,0.1)] text-blue-400 border-[rgba(59,130,246,0.2)]",
];

export default function CaseStudiesSection() {
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
            className="text-lg text-textMuted max-w-2xl mb-16"
          >
            Deep dives into the research, decisions, and iterations that shaped
            each product. Not just what was built — but why.
          </motion.p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.article
                key={cs.title}
                variants={fadeInUp}
                custom={i}
                className="group bg-surface border border-borderSubtle rounded-2xl p-8 card-hover flex flex-col"
                aria-label={cs.title}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accentSecondary/10 flex items-center justify-center border border-accent/20 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <BookOpen size={22} className="text-accent" aria-hidden="true" />
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
                <h3 className="text-lg font-semibold text-textPrimary mb-2 leading-snug">
                  {cs.title}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">{cs.subtitle}</p>
                <p className="text-sm text-textMuted leading-relaxed flex-1 mb-8">
                  {cs.summary}
                </p>

                {/* CTA */}
                <a
                  href={cs.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accentSecondary transition-colors group-hover:gap-3 duration-300"
                  aria-label={`Read case study: ${cs.title}`}
                >
                  Read Case Study
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </motion.article>
            ))}
          </div>

          {/* Coming soon note */}
          <motion.p
            variants={fadeInUp}
            className="text-center text-sm text-textMuted mt-10 font-mono"
          >
            Full case studies coming soon — currently writing them up.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
