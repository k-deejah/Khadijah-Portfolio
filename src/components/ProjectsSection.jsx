import { motion } from "framer-motion";
import { Github, ExternalLink, BookOpen, ChevronRight } from "lucide-react";
import { projects } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";

const accentBg = {
  amber: "from-accent/10 to-accentSecondary/5",
  purple: "from-purple-500/10 to-purple-400/5",
  blue: "from-blue-500/10 to-blue-400/5",
  green: "from-green-500/10 to-green-400/5",
};

const accentBorder = {
  amber: "border-accent/20",
  purple: "border-purple-500/20",
  blue: "border-blue-500/20",
  green: "border-green-500/20",
};

const accentText = {
  amber: "text-accent",
  purple: "text-purple-400",
  blue: "text-blue-400",
  green: "text-green-400",
};

function ProjectVisual({ project }) {
  const bg = accentBg[project.accent] || accentBg.amber;
  const border = accentBorder[project.accent] || accentBorder.amber;
  const text = accentText[project.accent] || accentText.amber;

  return (
    <div className={`group relative aspect-[16/10] rounded-2xl overflow-hidden border ${border} bg-gradient-to-br ${bg} bg-surface card-hover`}>
      {/* Project name watermark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${bg} flex items-center justify-center border ${border}`}>
            <span className={`font-mono text-lg font-bold ${text}`}>
              {project.title.charAt(0)}
            </span>
          </div>
          <p className={`font-mono text-xs font-semibold uppercase tracking-widest ${text} mb-1`}>
            {project.tags[0]}
          </p>
          <p className="text-textMuted text-sm font-medium">{project.title}</p>
        </div>
      </div>

      {/* Hover overlay with links */}
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-3">
        {project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface border border-borderSubtle text-textPrimary px-4 py-2 rounded-full text-xs font-medium hover:border-accent transition-colors flex items-center gap-1.5"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={14} />
            GitHub
          </a>
        )}
        {project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accentSecondary text-white px-4 py-2 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5"
            aria-label={`View ${project.title} live`}
          >
            <ExternalLink size={14} />
            Live
          </a>
        )}
        <a
          href={project.caseStudy}
          className="bg-surface border border-borderSubtle text-textPrimary px-4 py-2 rounded-full text-xs font-medium hover:border-accent transition-colors flex items-center gap-1.5"
          aria-label={`Read ${project.title} case study`}
        >
          <BookOpen size={14} />
          Case Study
        </a>
      </div>
    </div>
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
            SELECTED WORK
          </motion.span>
          <motion.h2
            id="projects-heading"
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-4"
          >
            Products that solve{" "}
            <span className="text-gradient">real</span> problems.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-textMuted max-w-2xl mb-16">
            Each project starts with a user problem, not a technology. Here's how I've
            helped teams design and ship things that matter.
          </motion.p>

          <div className="space-y-20 lg:space-y-28">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                variants={fadeInUp}
                custom={i}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start`}
                aria-label={project.title}
              >
                {/* Visual */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <ProjectVisual project={project} />
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  {/* Tags */}
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono font-medium text-textMuted uppercase tracking-wider px-3 py-1 rounded-lg border border-borderSubtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-semibold text-textPrimary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-base text-textMuted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Problem / Solution / Role */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-accent text-xs font-mono font-semibold uppercase tracking-widest block mb-1">
                        Problem
                      </span>
                      <p className="text-sm text-textMuted leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-accent text-xs font-mono font-semibold uppercase tracking-widest block mb-1">
                        Solution
                      </span>
                      <p className="text-sm text-textMuted leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <span className="text-accent text-xs font-mono font-semibold uppercase tracking-widest block mb-1">
                        Role
                      </span>
                      <p className="text-sm text-textMuted">{project.role}</p>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  {project.responsibilities && (
                    <div className="mb-6">
                      <span className="text-accent text-xs font-mono font-semibold uppercase tracking-widest block mb-2">
                        Responsibilities
                      </span>
                      <ul className="space-y-1.5">
                        {project.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-textMuted">
                            <ChevronRight size={14} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Notable Features */}
                  {project.notableFeatures && (
                    <div className="mb-6">
                      <span className="text-accent text-xs font-mono font-semibold uppercase tracking-widest block mb-2">
                        Notable Features
                      </span>
                      <ul className="space-y-1.5">
                        {project.notableFeatures.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-textMuted">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="mb-6">
                    <span className="text-accent text-xs font-mono font-semibold uppercase tracking-widest block mb-2">
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

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-borderSubtle hover:border-accent text-textMuted hover:text-accent px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                      >
                        <Github size={15} />
                        GitHub
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accentSecondary text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.caseStudy}
                      className="inline-flex items-center gap-2 border border-[rgba(255,107,53,0.3)] hover:border-accent text-accent px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[rgba(255,107,53,0.05)]"
                    >
                      <BookOpen size={15} />
                      Case Study
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
