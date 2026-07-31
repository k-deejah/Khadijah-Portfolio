import { motion } from "framer-motion";
import { about } from "../data/portfolio.js";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import {
  Brain,
  Palette,
  Code2,
  Hexagon,
  Terminal,
} from "lucide-react";

const whatIDoIcons = [Brain, Palette, Code2, Hexagon, Terminal];

export default function AboutSection() {

  return (
    <section id="about" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            ABOUT
          </motion.span>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div variants={fadeInUp} custom={0}>
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-textPrimary mb-8">
                The intersection of{" "}
                <span className="text-gradient">design, AI,</span> and
                engineering
              </h2>

              <div className="space-y-5 text-textMuted text-lg leading-relaxed">
                {about.narrative.map((para, i) => (
                  <p key={i}>
                    {i === 1
                      ? (
                        <>
                          So that's what I do. I{" "}
                          <span className="text-textPrimary font-medium">
                            design and build AI-powered digital products
                          </span>{" "}
                          — combining product thinking, UX design, and frontend
                          engineering to create experiences that make complex
                          technology feel intuitive and human.
                        </>
                      )
                      : para}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              custom={1}
              className="lg:pt-16 space-y-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-primary border border-borderSubtle rounded-2xl p-6 card-hover"
                  >
                    <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-textMuted font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary border border-borderSubtle rounded-2xl p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-textPrimary mb-4">
                  What I Do
                </h3>
                <div className="space-y-3">
                  {about.whatIDo.map((item, i) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-textMuted"
                    >
                      {(() => {
                        const Icon = whatIDoIcons[i % whatIDoIcons.length];
                        return (
                          <Icon
                            size={16}
                            className={
                              item.accent
                                ? "text-accent"
                                : "text-accentSecondary"
                            }
                          />
                        );
                      })()}
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary border border-borderSubtle rounded-2xl p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-textPrimary mb-4">
                  Philosophy
                </h3>
                <p className="text-sm text-textMuted leading-relaxed">
                  {about.philosophy}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-textMuted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Available for new opportunities
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
