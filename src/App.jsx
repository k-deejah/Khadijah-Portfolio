import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";
import { useTheme } from "./lib/useTheme.js";

// Below-fold sections — lazy loaded
const AboutSection      = lazy(() => import("./components/AboutSection.jsx"));
const ProcessSection    = lazy(() => import("./components/ProcessSection.jsx"));
const ProjectsSection   = lazy(() => import("./components/ProjectsSection.jsx"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection.jsx"));
const OpenSourceSection = lazy(() => import("./components/OpenSourceSection.jsx"));
const SkillsSection     = lazy(() => import("./components/SkillsSection.jsx"));
const ContactSection    = lazy(() => import("./components/ContactSection.jsx"));
const Footer            = lazy(() => import("./components/Footer.jsx"));

function App() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary text-textPrimary font-sans antialiased">
      {/* Scroll progress bar — fixed, top of viewport */}
      <ScrollProgressBar />

      <Navbar scrolled={scrolled} theme={theme} onToggleTheme={toggle} />

      <main>
        {/* Hero — eager, above fold */}
        <section id="home" aria-label="Hero">
          <HeroSection />
        </section>

        {/* All below-fold sections — lazy loaded */}
        <Suspense fallback={null}>
          <AboutSection />
          <ProcessSection />
          <ProjectsSection />
          <ExperienceSection />
          <OpenSourceSection />
          <SkillsSection />
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
