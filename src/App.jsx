import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import OpenSourceSection from "./components/OpenSourceSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
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
        {/* 1 — Hero */}
        <section id="home" aria-label="Hero">
          <HeroSection />
        </section>
        {/* 2 — About */}
        <AboutSection />
        {/* 3 — Featured Projects (product/UX work only) */}
        <ProjectsSection />
        {/* 4 — Open Source */}
        <OpenSourceSection />
        {/* 5 — Skills & Technologies */}
        <SkillsSection />
        {/* 6 — Contact */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
