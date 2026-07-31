import { motion } from "framer-motion";
import { skills } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import {
  Brain,
  Palette,
  Monitor,
  Server,
  Wrench,
  Hexagon,
  Code2,
} from "lucide-react";

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
    <section id="skills" className="py-24 lg:py-32">
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
            TECH STACK
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-4"
          >
            Tools and <span className="text-gradient">technologies</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-textMuted max-w-2xl mb-16"
          >
            The stack I use across design, frontend engineering, AI integration, and Web3.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, i) => {
              const Icon = iconMap[category.title] || Code2;
              return (
                <motion.div
                  key={category.title}
                  variants={fadeInUp}
                  custom={i}
                  className="bg-surface border border-borderSubtle rounded-2xl p-8 card-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accentSecondary/10 flex items-center justify-center border border-accent/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-accent" />
                  </div>

                  <h3 className="text-lg font-semibold text-textPrimary mb-4">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-textMuted bg-surfaceElevated px-3 py-1.5 rounded-lg border border-borderSubtle hover:border-accent/30 hover:text-textPrimary transition-all duration-300"
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
