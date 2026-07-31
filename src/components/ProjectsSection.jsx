import { motion } from "framer-motion";
import { Github, ExternalLink, Layers } from "lucide-react";
import { projects } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

const accentMap = {
  amber: "bg-accent/10 border-accent/20",
  purple: "bg-purple-500/10 border-purple-500/20",
  blue: "bg-blue-500/10 border-blue-500/20",
  green: "bg-green-500/10 border-green-500/20",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32">
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
            SELECTED WORK
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-4"
          >
            Products that solve<span className="text-gradient"> real</span>{" "}
            problems.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-textMuted max-w-2xl mb-16"
          >
            Each project starts with a user problem, not a technology. Here's
            how I've helped teams ship things that matter.
          </motion.p>

          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                custom={i}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="group relative aspect-[16/10] rounded-2xl overflow-hidden border border-borderSubtle bg-surface card-hover">
                    <div
                      className={`absolute inset-0 ${
                        accentMap[project.accent] || accentMap.amber
                      } opacity-50`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div
                          className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${
                            project.accent === "amber"
                              ? "bg-gradient-to-br from-accent/20 to-accentSecondary/10"
                              : "bg-gradient-to-br from-accent/20 to-accentSecondary/10"
                          } flex items-center justify-center border border-accent/20`}
                        >
                          <Layers size={28} className="text-accent" />
                        </div>
                        <span className="text-textMuted text-sm font-medium">
                          {project.title}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                      <a
                        href={project.github}
                        className="bg-surface border border-borderSubtle text-textPrimary px-5 py-2.5 rounded-full text-sm font-medium hover:border-accent transition-colors flex items-center gap-2"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="bg-accent hover:bg-accentSecondary text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono font-medium text-textMuted uppercase tracking-wider px-3 py-1.5 rounded-lg border border-borderSubtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-semibold text-textPrimary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base text-textMuted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {project.problem && (
                    <div className="space-y-4 mb-8">
                      <div>
                        <span className="text-accent text-sm font-medium font-mono uppercase tracking-wider block mb-1">
                          Problem
                        </span>
                        <p className="text-sm text-textMuted mt-1">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-accent text-sm font-medium font-mono uppercase tracking-wider block mb-1">
                          Solution
                        </span>
                        <p className="text-sm text-textMuted mt-1">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <span className="text-accent text-sm font-medium font-mono uppercase tracking-wider block mb-1">
                          Role
                        </span>
                        <p className="text-sm text-textMuted mt-1">
                          {project.role}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="mb-8">
                    <span className="text-accent text-sm font-medium font-mono uppercase tracking-wider block mb-3">
                      Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-textMuted bg-surfaceElevated px-3 py-1.5 rounded-lg border border-borderSubtle hover:border-accent/30 hover:text-textPrimary transition-all duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[rgba(255,107,53,.05)] border border-[rgba(255,107,53,.15)] rounded-xl p-4 mb-6">
                    <span className="text-accent text-sm font-medium font-mono uppercase tracking-wider block mb-1">
                      Impact
                    </span>
                    <p className="text-sm text-textPrimary mt-1">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
