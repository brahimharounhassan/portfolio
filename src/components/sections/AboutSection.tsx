"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Phone,
  Shield,
  GraduationCap,
} from "lucide-react";
import Card from "@/components/ui/Card";
import SecureDownloadCV from "@/components/ui/SecureDownloadCV";
import { useTranslation } from "@/hooks/useTranslation";
import { analytics } from "@/lib/analytics";

export default function AboutSection() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: GraduationCap,
      title: t("about.highlights.ai"),
    },
    {
      icon: Phone,
      title: t("about.highlights.research"),
    },
    {
      icon: Github,
      title: t("about.highlights.innovation"),
    },
    {
      icon: Mail,
      title: t("about.highlights.collaboration"),
    },
  ];

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
    {
      name: "Email",
      href: "mailto:brahimharoun57@yahoo.fr",
      icon: Mail,
    },
  ];

  const handleSocialClick = (name: string, href: string) => {
    analytics.trackSocialClick(name, href);
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("about.title")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg mb-6">
                {t("about.description")}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-700 shadow-sm"
                    >
                      <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                        {highlight.title}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* CV Download Section */}
              <Card className="p-2 sm:p-4 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-primary-200 dark:border-primary-800">
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {t("about.cv.title")}
                    </h3>
                  </div>

                  {/* Download Buttons */}
                  <div className="w-auto sm:w-2/3 mx-auto">
                    <SecureDownloadCV
                      variant="primary"
                      size="md"
                      className="w-full"
                    />
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                    <Shield className="w-3 h-3 flex-shrink-0" />
                    <span>{t("about.cv.securityInfo")}</span>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {t("nav.contact")}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {t("about.contact.emailPrimary")}
                    </p>
                    <a
                      href="mailto:brahimharoun57@yahoo.fr"
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all"
                    >
                      {t("about.contact.email1")}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {t("about.contact.emailSecondary")}
                    </p>
                    <a
                      href="mailto:haroun-hassan.brahim@etu.univ-amu.fr"
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all"
                    >
                      {t("about.contact.email2")}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {t("about.contact.locationLabel")}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t("about.contact.location")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                  {t("footer.connect")}
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={() => handleSocialClick(link.name, link.href)}
                        className="flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
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

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("about.contact.availability")}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
