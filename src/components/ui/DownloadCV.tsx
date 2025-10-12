"use client";

import SecureDownloadCV from "./SecureDownloadCV";

interface DownloadCVProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  language?: "fr" | "en" | "auto";
}

/**
 * Composant de téléchargement de CV qui utilise le système sécurisé
 * Redirection vers SecureDownloadCV pour tous les téléchargements
 */
export default function DownloadCV(props: DownloadCVProps) {
  return <SecureDownloadCV {...props} />;
}
