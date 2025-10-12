"use client";

import React from "react";

const { useState, useEffect } = React;
import { Download, X, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePWA } from "@/hooks/usePWA";
import Button from "./Button";

export default function InstallPWA() {
  const { canInstall, installPWA } = usePWA();
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Gérer l'hydratation et localStorage côté client uniquement
  useEffect(() => {
    setMounted(true);
    const isDismissed =
      localStorage.getItem("pwa-install-dismissed") === "true";
    setDismissed(isDismissed);
  }, []);

  const handleInstall = async () => {
    await installPWA();
    setDismissed(true);
  };

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("pwa-install-dismissed", "true");
    }
  };

  // Ne rien rendre côté serveur ou si pas encore monté
  if (!mounted || dismissed || !canInstall) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        className="fixed bottom-4 right-4 z-50 max-w-sm"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Smartphone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Installer l'app
              </h4>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Installez ce portfolio sur votre appareil pour un accès rapide et
            une expérience optimisée.
          </p>

          <div className="flex space-x-2">
            <Button variant="primary" size="sm" onClick={handleInstall}>
              <Download className="w-4 h-4 mr-2" />
              Installer
            </Button>
            <Button variant="outline" size="sm" onClick={handleDismiss}>
              Plus tard
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
