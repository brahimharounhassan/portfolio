"use client";

import React from "react";

const { useState } = React;
import { Download, FileText, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const downloadOptions = [
  {
    type: "cv",
    label: "Télécharger (PDF)",
    icon: FileText,
    url: "/cv.pdf",
    description: "Version complète de mon CV",
  },
  {
    type: "github",
    label: "Profil GitHub",
    icon: ExternalLink,
    url: "https://github.com",
    description: "Mes projets et contributions",
  },
  {
    type: "linkedin",
    label: "Profil LinkedIn",
    icon: ExternalLink,
    url: "https://linkedin.com",
    description: "Mon réseau professionnel",
  },
];

export default function DownloadButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = (url: string, type: string) => {
    if (type === "cv") {
      // Créer un lien de téléchargement
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV-VotreNom.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Ouvrir dans un nouvel onglet
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="primary"
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Download className="w-5 h-5 mr-2" />
        Téléchargements
      </Button>

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
              className="absolute top-full mt-2 left-0 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50"
            >
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Ressources disponibles
                </h3>

                <div className="space-y-2">
                  {downloadOptions.map((option, index) => (
                    <button
                      key={option.type}
                      onClick={() => handleDownload(option.url, option.type)}
                      className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
                    >
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-3">
                        <option.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {option.label}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {option.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
