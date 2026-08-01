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
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-surface relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
            className="text-lg text-textMuted max-w-xl mb-14"
          >
            Open to AI product roles, frontend engineering, and open-source collaboration. Remote-friendly.
          </motion.p>

          {/* Contact link cards */}
          <motion.div
            variants={fadeInUp}
            className="grid sm:grid-cols-3 gap-4 mb-10"
          >
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                variants={fadeInUp}
                className="group flex flex-col gap-3 bg-primary border border-borderSubtle rounded-2xl p-6 card-lift hover:border-[rgba(255,107,53,0.25)] transition-all duration-300"
                aria-label={`${link.label}: ${link.value}`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(255,107,53,0.08)] border border-[rgba(255,107,53,0.15)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <link.icon size={17} className="text-accent" aria-hidden="true" />
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-textMuted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-xs font-mono font-semibold text-accent uppercase tracking-widest mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm text-textPrimary font-medium truncate">{link.value}</p>
                  <p className="text-xs text-textMuted mt-0.5">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Resume button */}
          <motion.div variants={fadeInUp}>
            <a
              href="/Khadijah-Portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary border border-borderSubtle hover:border-[rgba(255,107,53,0.4)] text-textPrimary px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[rgba(255,107,53,0.04)] hover:shadow-[0_0_24px_rgba(255,107,53,0.1)]"
            >
              <Download size={15} className="text-accent" aria-hidden="true" />
              Download Resume
              <ArrowUpRight size={14} className="text-textMuted" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
