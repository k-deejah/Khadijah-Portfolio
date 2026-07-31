import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolio.js";

const Logo = () => (
  <a
    href="#"
    className="text-xl font-mono font-bold text-textMuted hover:text-accent transition-colors"
  >
    KA.
  </a>
);

function DesktopNav() {
  return (
    <div className="hidden md:flex items-center gap-10">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-sm font-mono font-medium text-textMuted uppercase tracking-wider hover:text-textPrimary transition-all duration-300 relative
                     after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-accent after:scale-x-0 after:transition-transform after:duration-300 after:origin-right hover:after:scale-x-100 hover:after:origin-left"
        >
          {link.name}
        </a>
      ))}
      <a
        href="#contact"
        className="text-sm font-medium bg-accent hover:bg-accentSecondary text-white px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,.3)]"
      >
        Resume
      </a>
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-textPrimary p-2"
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-surface border-b border-borderSubtle py-6"
        >
          <div className="flex flex-col gap-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-textMuted hover:text-textPrimary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function Navbar({ scrolled }) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-xl border-b border-borderSubtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </motion.nav>
  );
}
