import { motion } from "framer-motion";
import { personal } from "../data/portfolio.js";
import { fadeInUp } from "../lib/animations.js";

export default function Footer() {
  return (
    <footer className="pt-12 border-t border-borderSubtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm"
        >
          <span className="font-mono text-xs text-textMuted">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </span>
          <span className="text-textMuted text-xs font-mono flex items-center gap-2">
            Designed & built with
            <span className="text-accent">♥</span>
            in Lagos, Nigeria
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
