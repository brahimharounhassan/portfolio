"use client";

import React from 'react'

const { useState, useEffect } = React;
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield, Settings } from "lucide-react";
import Button from "./Button";
import { analytics } from "@/lib/analytics";
import { useTranslation } from "@/hooks/useTranslation";

export default function CookieConsent() {
  const { t } = useTranslation();
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // AJOUT de l'état manquant
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (typeof window === 'undefined') return;

    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    analytics.setGAConsent(true);

    // Initialiser Google Analytics
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (gaId) {
      analytics.initGA(gaId);
    }

    setShowConsent(false);
    console.log("✅ Cookies acceptés");
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    analytics.setGAConsent(false);
    setShowConsent(false);
    console.log("❌ Cookies refusés");
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  // Ne rien rendre pendant le SSR
  if (!mounted || !showConsent) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto md:max-w-lg"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Cookie className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Cookies & Confidentialité
              </h3>
            </div>
            <button
              onClick={handleDecline}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Ce site utilise des cookies pour améliorer votre expérience de
            navigation et analyser le trafic. Vos données restent anonymes et
            sécurisées.
          </p>

          {/* Détails des cookies */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      🔧 Cookies techniques
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      Requis
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nécessaires au fonctionnement du site (thème, langue,
                    préférences).
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      📊 Google Analytics
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      Optionnel
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Analyse anonyme du trafic pour améliorer le site.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={handleAccept}
              className="flex-1"
            >
              <Shield className="w-4 h-4 mr-2" />
              Tout accepter
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleCustomize}
              className="flex-shrink-0"
            >
              <Settings className="w-4 h-4 mr-2" />
              {showDetails ? "Masquer" : "Détails"}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleDecline}
              className="flex-shrink-0"
            >
              Refuser
            </Button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
            En continuant, vous acceptez notre utilisation des cookies
            essentiels.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
