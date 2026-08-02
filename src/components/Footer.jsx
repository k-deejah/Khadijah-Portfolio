import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { personal, navLinks, socialLinks } from "../data/portfolio.js";
import { fadeInUp } from "../lib/animations.js";

const socialIconMap = { GitHub: Github, LinkedIn: Linkedin, "X (Twitter)": Twitter };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 border-t border-borderSubtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Row 1 — Logo + nav links */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <a
              href="#home"
              className="font-mono font-bold text-xl text-textMuted hover:text-accent transition-colors duration-200"
              aria-label="Khadijah Abdulwasii — back to top"
            >
              KA.
            </a>
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono text-textMuted hover:text-accent transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Row 2 — Social icons + copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => {
                const Icon = socialIconMap[s.name] || Github;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg border border-borderSubtle flex items-center justify-center
                               text-textMuted hover:text-accent hover:border-[rgba(255,107,53,0.3)]
                               transition-all duration-200"
                    aria-label={s.name}
                  >
                    <Icon size={14} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            {/* Copyright + tagline */}
            <div className="flex flex-col md:flex-row items-center gap-2 text-xs text-textMuted text-center font-mono">
              <span>© {year} {personal.name}. All rights reserved.</span>
              <span className="hidden md:block opacity-30">·</span>
              <span className="flex items-center gap-1">
                Designed &amp; built with{" "}
                <span className="text-accent" aria-label="love">♥</span>
                {" "}in Lagos, Nigeria
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
