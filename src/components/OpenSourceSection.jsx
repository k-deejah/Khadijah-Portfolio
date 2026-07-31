import { motion } from "framer-motion";
import { Github, Star, ArrowUpRight } from "lucide-react";
import { openSource } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

export default function OpenSourceSection() {
  return (
    <section id="opensource" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="section-label mb-4 block"
          >
            OPEN SOURCE
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-4"
          >
            Building in <span className="text-gradient">public</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-textMuted max-w-2xl mb-16"
          >
            {openSource.tagline}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {openSource.maintainers.map((project, i) => (
              <motion.div
                key={project.name}
                variants={fadeInUp}
                custom={i}
                className="bg-primary border border-borderSubtle rounded-2xl p-8 card-hover group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accentSecondary/10 flex items-center justify-center border border-accent/20">
                    <Github size={24} className="text-accent" />
                  </div>
                  <span className="text-textMuted text-sm flex items-center gap-1">
                    <Star size={14} className="text-accent" />
                    {project.stars}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-textPrimary mb-2">
                  {project.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-4">
                  {project.role}
                </p>
                <p className="text-sm text-textMuted leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-borderSubtle">
                  <span className="text-xs text-textMuted">
                    {project.contributions}
                  </span>
                  <span className="text-xs bg-surfaceElevated text-textMuted px-2 py-1 rounded">
                    {project.language}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold text-textPrimary mb-6">
              Recent Contributions
            </h3>
            <div className="bg-primary border border-borderSubtle rounded-2xl p-6 lg:p-8">
              <div className="space-y-4">
                {openSource.contributions.map((contrib, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[rgba(255,107,53,.03)] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-surfaceElevated flex items-center justify-center shrink-0">
                      <Github size={18} className="text-textMuted" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-textPrimary font-medium text-sm truncate">
                          {contrib.repo}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            contrib.type === "Feature"
                              ? "bg-[rgba(255,107,53,.15)] text-accent"
                              : contrib.type === "Bug Fix"
                              ? "bg-[rgba(34,197,94,.15)] text-green-400"
                              : "bg-[rgba(59,130,246,.15)] text-blue-400"
                          }`}
                        >
                          {contrib.type}
                        </span>
                      </div>
                      <p className="text-sm text-textMuted">
                        {contrib.desc}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-textMuted group-hover:text-accent transition-colors shrink-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {openSource.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-primary border border-borderSubtle rounded-xl p-5 text-center"
              >
                <div className="text-2xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-textMuted">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
