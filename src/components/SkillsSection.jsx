import { motion } from "framer-motion";
import { skills } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import { Brain, Palette, Monitor, Wrench, Hexagon, Code2 } from "lucide-react";
import CrystalLayer from "./CrystalLayer.jsx";

const iconMap = {
  "AI":               Brain,
  "Frontend":         Monitor,
  "Product Design":   Palette,
  "Web3":             Hexagon,
  "Developer Tools":  Wrench,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="skills-heading">
      <CrystalLayer variant="mid" flip />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            SKILLS & TECHNOLOGIES
          </motion.span>
          <motion.h2
            id="skills-heading"
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-10"
          >
            Tools and <span className="text-gradient">technologies</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((category, i) => {
              const Icon = iconMap[category.title] || Code2;
              return (
                <motion.div
                  key={category.title}
                  variants={fadeInUp}
                  custom={i}
                  className="bg-surface border border-borderSubtle rounded-2xl p-5 card-lift group"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[rgba(255,107,53,0.09)] border border-[rgba(255,107,53,0.14)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={16} className="text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="text-xs font-semibold text-textPrimary uppercase tracking-wider">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-textMuted bg-surfaceElevated px-2.5 py-0.5 rounded-lg border border-borderSubtle hover:border-[rgba(255,107,53,0.25)] hover:text-textPrimary transition-all duration-200"
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
