import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "../data/portfolio.js";

// Track which section is currently in view
function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

// ─── Theme Toggle ─────────────────────────────────────────────────
function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={onToggle}
      className="relative w-9 h-9 rounded-full border border-borderSubtle bg-surface flex items-center justify-center text-textMuted hover:text-textPrimary hover:border-[rgba(255,107,53,0.3)] transition-colors duration-200"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.16 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!isDark}
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: "flex" }}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </motion.span>
    </motion.button>
  );
}

const Logo = () => (
  <a
    href="#home"
    className="text-xl font-mono font-bold text-textMuted hover:text-accent transition-colors duration-200"
    aria-label="Khadijah Abdulwasii — Home"
  >
    KA.
  </a>
);

function DesktopNav({ theme, onToggleTheme }) {
  const active = useActiveSection();

  return (
    <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => {
        const isActive = active === link.href;
        return (
          <a
            key={link.name}
            href={link.href}
            className={`text-sm font-mono font-medium uppercase tracking-wider transition-colors duration-200 relative
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-accent
              after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]
              ${isActive
                ? "text-textPrimary after:scale-x-100 after:origin-left"
                : "text-textMuted hover:text-textPrimary after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left"
              }`}
            aria-current={isActive ? "page" : undefined}
          >
            {link.name}
          </a>
        );
      })}

      {/* Theme toggle */}
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />

      {/* Resume */}
      <motion.a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium bg-accent text-white px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(255,107,53,.25)]"
        whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(255,107,53,.45)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.18 }}
      >
        Resume
      </motion.a>
    </nav>
  );
}

function MobileNav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center gap-3">
      {/* Theme toggle visible on mobile too */}
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />

      <motion.button
        onClick={() => setOpen(!open)}
        className="text-textPrimary p-2"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        whileTap={{ scale: 0.92 }}
        transition={{ duration: 0.12 }}
      >
        <motion.span
          initial={false}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "block" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.span>
      </motion.button>

      {open && (
        <motion.div
          id="mobile-nav"
          role="dialog"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-borderSubtle py-6 z-40"
        >
          <nav className="flex flex-col gap-1 px-6">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-textMuted hover:text-textPrimary hover:bg-[rgba(255,107,53,0.05)] px-3 py-2.5 rounded-lg"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 text-sm font-medium bg-accent text-white px-6 py-2.5 rounded-full text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.04, duration: 0.25 }}
            >
              Resume
            </motion.a>
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default function Navbar({ scrolled, theme, onToggleTheme }) {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
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
          <DesktopNav theme={theme} onToggleTheme={onToggleTheme} />
          <MobileNav theme={theme} onToggleTheme={onToggleTheme} />
        </div>
      </div>
    </motion.header>
  );
}
