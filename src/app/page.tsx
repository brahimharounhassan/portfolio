"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificationsSection from "@/components/sections/CertificationsSection";

const { useEffect, useState } = React;

export default function Home() {
  const [key, setKey] = useState(0);

  // Forcer le re-render lors du changement de langue
  useEffect(() => {
    const handleLocaleChange = () => {
      setKey((prev) => prev + 1);
    };

    window.addEventListener("localeChange", handleLocaleChange);
    window.addEventListener("resize", handleLocaleChange); // Fallback

    return () => {
      window.removeEventListener("localeChange", handleLocaleChange);
      window.removeEventListener("resize", handleLocaleChange);
    };
  }, []);

  return (
    <main
      key={key} // Force re-render avec la nouvelle langue
      id="main-content"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="certifications">
        <CertificationsSection />
      </div>
    </main>
  );
}
