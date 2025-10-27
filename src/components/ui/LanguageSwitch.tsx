"use client";

import React from "react";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { Locale } from "@/lib/i18n";
import { analytics } from "@/lib/analytics";

const { useState, useCallback } = React;

const languages = {
  fr: { code: "fr", name: "Français", flag: "🇫🇷" },
  en: { code: "en", name: "English", flag: "🇺🇸" },
};

export default function LanguageSwitch() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, changeLocale, isLoading } = useTranslation();

  // Type assertion pour éviter l'erreur any
  const currentLanguage = (languages as any)[locale] || languages.fr;

  const handleLanguageChange = useCallback(
    (newLocale: Locale) => {
      if (newLocale === locale) {
        setIsOpen(false);
        return;
      }

      // Changement immédiat de langue
      changeLocale(newLocale);

      // Fermeture immédiate du menu
      setIsOpen(false);

      // Analytics
      analytics.trackLanguageChange(newLocale);

      // Feedback visuel (optionnel)
      const button = document.querySelector(".language-switch-button");
      if (button) {
        button.classList.add("animate-pulse");
        setTimeout(() => {
          button.classList.remove("animate-pulse");
        }, 500);
      }
    },
    [locale, changeLocale]
  );

  // Empêcher l'interaction pendant le chargement
  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 opacity-50">
        <Globe className="w-5 h-5 text-gray-400" />
        <span className="text-sm font-medium text-gray-400">⋯</span>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-switch-button flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentLanguage.flag}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4 text-gray-500"
        >
          ⌄
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full mt-2 right-0 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50"
            >
              <div className="p-2">
                {Object.entries(languages).map(([code, lang]) => {
                  const isActive = locale === code;

                  return (
                    <button
                      key={code}
                      onClick={() => handleLanguageChange(code as Locale)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                      disabled={isActive}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium flex-1 text-left">
                        {lang.name}
                      </span>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-primary-600 dark:text-primary-400"
                        >
                          <Check size={16} />
                        </motion.div>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
