"use client";

import React from "react";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { analytics } from "@/lib/analytics";

const { useState, useEffect } = React;

export default function Header() {
  const { locale, changeLocale, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "certifications",
    ];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    analytics.trackThemeChange(newTheme as "light" | "dark");
  };

  const scrollToSection = (sectionId: string) => {
    analytics.trackNavigation(sectionId);
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (newLocale: "fr" | "en") => {
    changeLocale(newLocale);
    analytics.trackLanguageChange(newLocale);
  };

  const navItems = [
    { label: t("nav.home"), href: "#home", key: "home" },
    { label: t("nav.about"), href: "#about", key: "about" },
    { label: t("nav.skills"), href: "#skills", key: "skills" },
    { label: t("nav.projects"), href: "#projects", key: "projects" },
    { label: t("nav.experience"), href: "#experience", key: "experience" },
    {
      label: t("nav.certifications"),
      href: "#certifications",
      key: "certifications",
    },
  ];

  // Header rendu UNIQUEMENT côté client (pas de SSR)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 min-w-0">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer flex-shrink-0 min-w-0"
          >
            <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 min-w-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 relative rounded-lg overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/portfolio/logo.jpg"
                  alt="Brahim Haroun Hassan Logo"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 24px, (max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
                  priority
                />
              </div>
              <span className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent truncate">
                BHH
              </span>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeSection === item.key
                    ? "bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-gray-200"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => handleLanguageChange("fr")}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  locale === "fr"
                    ? "bg-white dark:bg-gray-700 text-primary-600 dark:text-gray-200 shadow-sm"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  locale === "en"
                    ? "bg-white dark:bg-gray-700 text-primary-600 dark:text-gray-200 shadow-sm"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Actions Mobile */}
          <div className="flex lg:hidden items-center gap-1 flex-shrink-0 ml-2">
            <div className="flex bg-gray-200 dark:bg-gray-700 rounded-md p-1 border border-gray-300 dark:border-gray-600">
              <button
                onClick={() => handleLanguageChange("fr")}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  locale === "fr"
                    ? "bg-primary-600 text-white shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  locale === "en"
                    ? "bg-primary-600 text-white shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md bg-primary-600 hover:bg-primary-700 text-white border-2 border-primary-700 transition-colors shadow-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.key
                    ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
