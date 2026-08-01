import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Download, ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/animations.js";
import { personal } from "../data/portfolio.js";

const links = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
    description: "Send a message",
  },
  {
    label: "GitHub",
    value: "K-deejah",
    href: "https://github.com/K-deejah",
    icon: Github,
    description: "View repositories",
  },
  {
    label: "LinkedIn",
    value: "khadijah-abdulwasii",
    href: "https://www.linkedin.com/in/khadijah-abdulwasii",
    icon: Linkedin,
    description: "Connect professionally",
  },
  {
    label: "X (Twitter)",
    value: "crypt-deejah",
    href: "https://twitter.com/crypt-deejah",
    icon: Twitter,
    description: "Follow on X",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-surface relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="section-label mb-4 block">
            CONTACT
          </motion.span>

          <motion.h2
            id="contact-heading"
            variants={fadeInUp}
            className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight tracking-[-0.02em] text-textPrimary mb-4"
          >
            Let's build something{" "}
            <span className="text-gradient">intelligent</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base text-textMuted max-w-xl mb-12"
          >
            Open to AI product roles, frontend engineering, and open-source collaboration. Remote-friendly.
          </motion.p>

          {/* Contact cards — 2×2 on mobile, 4 across on desktop */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex flex-col gap-3 bg-primary border border-borderSubtle rounded-2xl p-5 card-lift hover:border-[rgba(255,107,53,0.22)] transition-all duration-300"
                aria-label={`${link.label}: ${link.value}`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(255,107,53,0.07)] border border-[rgba(255,107,53,0.14)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <link.icon size={15} className="text-accent" aria-hidden="true" />
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="text-textMuted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-xs text-textPrimary font-medium truncate">{link.value}</p>
                  <p className="text-[11px] text-textMuted mt-0.5">{link.description}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Resume button */}
          <motion.div variants={fadeInUp}>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary border border-borderSubtle hover:border-[rgba(255,107,53,0.35)] text-textPrimary px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[rgba(255,107,53,0.04)] hover:shadow-[0_0_20px_rgba(255,107,53,0.09)]"
            >
              <Download size={14} className="text-accent" aria-hidden="true" />
              Download Resume
              <ArrowUpRight size={13} className="text-textMuted" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
