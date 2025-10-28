"use client";

import React from "react";
import { Download, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import Button from "./Button";
import { useTranslation } from "@/hooks/useTranslation";
import {
  validateDocumentAccess,
  generateSecureDownloadToken,
} from "@/lib/documentSecurity";
import { analytics } from "@/lib/analytics";

const { useState, useEffect } = React;

interface SecureDownloadCVProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  language?: "fr" | "en" | "auto";
}

export default function SecureDownloadCV({
  variant = "primary",
  size = "lg",
  className = "",
  language = "auto",
}: SecureDownloadCVProps) {
  const { locale, t } = useTranslation();
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Gérer la détection mobile côté client uniquement
  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSecureDownload = async () => {
    setIsDownloading(true);
    setError(null);
    setSuccess(false);

    try {
      // Déterminer la langue à utiliser
      const downloadLang = language === "auto" ? locale : language;
      const documentId = downloadLang === "fr" ? "cv-fr" : "cv-en";

      // Phase 1: Validation sécurisée

      const userAgent = navigator.userAgent;
      const referer = window.location.href;

      const validation = validateDocumentAccess(documentId, userAgent, referer);

      if (!validation.allowed) {
        let errorMessage = t("cv.accessDenied");

        switch (validation.reason) {
          case "Rate limit exceeded":
            errorMessage = t("cv.rateLimitExceeded");
            break;
          case "Invalid referer":
            errorMessage = t("cv.invalidReferer");
            break;
          case "Suspicious user agent":
            errorMessage = t("cv.suspiciousActivity");
            break;
        }

        throw new Error(errorMessage);
      }

      // Phase 2: Génération du token
      const token = generateSecureDownloadToken(documentId);

      // Phase 3: Analytics et logging
      analytics.trackDownload(documentId as "cv-fr" | "cv-en", {
        language: downloadLang,
        secure: true,
      });

      // Phase 4: Téléchargement sécurisé

      const filename =
        downloadLang === "fr"
          ? "CV_fr-Brahim-Haroun-Hassan.pdf"
          : "CV_en-Brahim-Haroun-Hassan.pdf";

      // Simuler le téléchargement sécurisé (ici on redirige vers contact)
      // Dans un vrai projet, ceci appellerait une API sécurisée
      const downloadUrl = `/contact?download=${downloadLang}&token=${token}`;

      // Ouvrir dans un nouvel onglet avec les paramètres de sécurité
      const newWindow = window.open(
        downloadUrl,
        "_blank",
        "noopener,noreferrer"
      );

      if (!newWindow) {
        throw new Error("Popup bloqué - veuillez autoriser les popups");
      }

      // Marquer comme succès
      setSuccess(true);

      // Reset après 3 secondes
      setTimeout(() => {
        setIsDownloading(false);
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("cv.downloadError"));
      setIsDownloading(false);

      // Analytics pour les erreurs
      analytics.trackDownload("cv", {
        error: true,
        errorMessage: err instanceof Error ? err.message : "Unknown error",
        language: language === "auto" ? locale : language,
      });

      // Auto-clear l'erreur après 5 secondes
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  // Texte du bouton selon l'état - SSR safe
  const getButtonText = () => {
    if (success) return t("secureDownload.success");
    if (isDownloading) return t("about.cv.downloading");
    if (error) return t("about.cv.retry");

    // Texte selon la langue et la taille d'écran (SSR safe)
    if (language === "fr") {
      return mounted && isMobile ? t("about.cv.download.frenchShort") : t("about.cv.download.frenchFull");
    }
    if (language === "en") {
      return mounted && isMobile ? t("about.cv.download.englishShort") : t("about.cv.download.englishFull");
    }

    // Mode auto
    if (locale === "fr") {
      return mounted && isMobile ? t("about.cv.download.frenchShort") : t("about.cv.download.frenchFull");
    } else {
      return mounted && isMobile ? t("about.cv.download.englishShort") : t("about.cv.download.englishFull");
    }
  };

  // Icône selon l'état
  const getIcon = () => {
    if (success)
      return (
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500 flex-shrink-0" />
      );
    if (error)
      return (
        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-500 flex-shrink-0" />
      );
    if (isDownloading)
      return (
        <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0" />
      );

    return (
      <div className="flex items-center">
        <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
      </div>
    );
  };

  // Affichage fallback pendant l'hydratation
  if (!mounted) {
    return (
      <Button
        variant={variant}
        size={size}
        className={`${className} w-full justify-center`}
        disabled
      >
        <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
        <span className="truncate">
          {language === "fr"
            ? t("about.cv.download.frenchFull")
            : language === "en"
            ? t("about.cv.download.englishFull")
            : locale === "fr"
            ? t("about.cv.download.frenchFull")
            : t("about.cv.download.englishFull")}
        </span>
      </Button>
    );
  }

  return (
    <div className="relative w-full">
      <Button
        variant={success ? "primary" : error ? "outline" : variant}
        size={size}
        className={`${className} ${isDownloading ? "animate-pulse" : ""} ${
          success ? "bg-green-600 hover:bg-green-700" : ""
        } w-full justify-center truncate`}
        onClick={handleSecureDownload}
        disabled={isDownloading || success}
      >
        {getIcon()}
        <span className="truncate">{getButtonText()}</span>
      </Button>

      {error && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-300 z-10 max-w-full">
          <div className="flex items-center">
            <Shield className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="font-medium truncate">
              {t("cv.securityActive")}
            </span>
          </div>
          <div className="mt-1 text-xs opacity-90 break-words">{error}</div>
        </div>
      )}

      {success && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-sm text-green-700 dark:text-green-300 z-10 max-w-full">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="font-medium truncate">
              {t("secureDownload.protectedDocument")}
            </span>
          </div>
          <div className="mt-1 text-xs opacity-90 break-words">
            {t("secureDownload.accessLogged")}
          </div>
        </div>
      )}
    </div>
  );
}
