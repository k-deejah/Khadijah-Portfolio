import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProcessSection from "./components/ProcessSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import OpenSourceSection from "./components/OpenSourceSection.jsx";
import WritingSection from "./components/WritingSection.jsx";
import CaseStudiesSection from "./components/CaseStudiesSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary text-textPrimary font-sans antialiased">
      <Navbar scrolled={scrolled} />
      <main>
        {/* 1 — Who am I? */}
        <section id="home" aria-label="Hero">
          <HeroSection />
        </section>

        {/* 2 — What do I do? */}
        <AboutSection />

        {/* 3 — How do I solve problems? */}
        <ProcessSection />

        {/* 4 — What have I built? */}
        <ProjectsSection />

        {/* 5 — Tech Stack */}
        <SkillsSection />

        {/* 6 — Where do I contribute and what do I maintain? */}
        <OpenSourceSection />

        {/* 7 — How do I share my work? */}
        <WritingSection />

        {/* 8 — How do I think and solve problems? */}
        <CaseStudiesSection />

        {/* 9 — How can someone reach me? */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
