import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import { socialLinks, personal } from "../data/portfolio.js";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-surface relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,107,53,.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            variants={fadeInUp}
            className="section-label mb-4 block"
          >
            CONTACT
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight tracking-[-0.02em] text-textPrimary mb-6"
          >
            Ready to build something <span className="text-gradient">intelligent</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-textMuted leading-relaxed mb-12"
          >
            Whether you're an AI startup, a founder with an idea, or a team
            looking for someone who speaks both design and engineering — let's
            talk.
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-3 text-accent font-mono text-xl font-semibold tracking-wider uppercase border-b-2 border-accent pb-2 hover:text-accentSecondary transition-all duration-300 mb-12"
          >
            <Mail size={20} />
            {personal.email}
          </motion.a>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accentSecondary text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-[0_0_30px_rgba(255,107,53,.3)]"
            >
              <Download size={18} />
              Download Resume
            </a>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-12 h-12 rounded-full bg-surface border border-borderSubtle flex items-center justify-center text-textMuted hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
                >
                  <span className="font-mono text-xs font-medium">
                    {social.initial}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
