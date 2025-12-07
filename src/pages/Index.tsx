import { useState, useEffect } from "react";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import PhotoGallery from "@/components/PhotoGallery";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    // Check if intro was already shown this session
    const introShown = sessionStorage.getItem("introShown");
    if (introShown) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem("introShown", "true");
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="relative min-h-screen">
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      <LightRays 
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        pulsating
        followMouse
        mouseInfluence={0.1}
      />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <PhotoGallery />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
