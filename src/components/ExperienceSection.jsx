import { motion } from "framer-motion";
import { experience } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import { Calendar, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-surface">
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
            EXPERIENCE
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-16"
          >
            Journey so <span className="text-gradient">far</span>
          </motion.h2>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-borderSubtle to-transparent md:-translate-x-px" />

            <div className="space-y-12">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  variants={fadeInUp}
                  custom={i}
                  className={`relative grid md:grid-cols-2 gap-8 ${
                    i % 2 === 0 ? "" : "md:text-right"
                  }`}
                >
                  <div
                    className={`absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-accent border-4 border-primary -translate-x-1.5`}
                  />

                  <div
                    className={`pl-8 md:pl-0 ${
                      i % 2 === 0
                        ? "md:pr-16"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div className="bg-primary border border-borderSubtle rounded-2xl p-6 lg:p-8 card-hover">
                      <div
                        className={`flex items-center gap-2 text-accent text-sm font-medium mb-2 ${
                          i % 2 !== 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-semibold text-textPrimary mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-textMuted font-medium mb-4">
                        {exp.company}
                      </p>
                      <p className="text-sm text-textMuted leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <ul
                        className={`space-y-2 ${
                          i % 2 !== 0 ? "md:items-end" : ""
                        }`}
                      >
                        {exp.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-textMuted"
                          >
                            <ChevronRight
                              size={14}
                              className={`text-accent mt-0.5 shrink-0 ${
                                i % 2 !== 0 ? "md:ml-auto" : ""
                              }`}
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
