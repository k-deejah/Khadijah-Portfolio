import { motion } from "framer-motion";
import { skills } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import { Brain, Palette, Monitor, Server, Wrench, Hexagon, Code2 } from "lucide-react";

const iconMap = {
  "AI & Machine Learning": Brain,
  Design: Palette,
  Frontend: Monitor,
  Backend: Server,
  "Developer Tools": Wrench,
  Web3: Hexagon,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-surface" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            TECH STACK
          </motion.span>
          <motion.h2
            id="skills-heading"
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-16"
          >
            Tools and <span className="text-gradient">technologies</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((category, i) => {
              const Icon = iconMap[category.title] || Code2;
              return (
                <motion.div
                  key={category.title}
                  variants={fadeInUp}
                  custom={i}
                  className="bg-primary border border-borderSubtle rounded-2xl p-6 card-lift group"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-[rgba(255,107,53,0.1)] border border-[rgba(255,107,53,0.15)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={18} className="text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-semibold text-textPrimary">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] text-textMuted bg-surfaceElevated px-2.5 py-1 rounded-lg border border-borderSubtle hover:border-accent/30 hover:text-textPrimary transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
