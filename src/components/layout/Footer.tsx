"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { analytics } from "@/lib/analytics";

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/brahimharounhassan",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/brahim-haroun-hassan",
      icon: Linkedin,
    },

    {
      name: "ResearchGate",
      href: "https://www.researchgate.net/profile/Brahim-Haroun-Hassan",
      icon: GraduationCap,
    },
  ];

  const quickLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.certifications"), href: "#certifications" },
  ];

  const handleLinkClick = (name: string, href: string) => {
    analytics.trackSocialClick(name, href);
  };

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* About */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Brahim Haroun Hassan
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t("footer.description")}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.name, link.href)}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    target={
                      link.href.startsWith("mailto:") ? "_self" : "_blank"
                    }
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t("footer.quickLinks")}
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t("nav.contact")}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:brahimharoun57@yahoo.fr"
                  className="text-gray-400 hover:text-primary-400 transition-colors break-all"
                >
                  {t("about.contact.email1")}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:haroun-hassan.brahim@etu.univ-amu.fr"
                  className="text-gray-400 hover:text-primary-400 transition-colors break-all"
                >
                  {t("about.contact.email2")}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <ExternalLink className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">
                  {t("about.contact.location")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 - Brahim Haroun Hassan. {t("footer.rights")}.
            </p>
            <div className="flex items-center space-x-1 text-gray-500 text-sm">
              <span>{t("footer.madeWith")}</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
