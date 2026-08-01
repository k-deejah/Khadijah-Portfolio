import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import OpenSourceSection from "./components/OpenSourceSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import { useTheme } from "./lib/useTheme.js";

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
      <Navbar scrolled={scrolled} theme={theme} onToggleTheme={toggle} />
      <main>
        <section id="home" aria-label="Hero">
          <HeroSection />
        </section>
        <AboutSection />
        <ProjectsSection />
        <OpenSourceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
