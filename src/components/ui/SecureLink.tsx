"use client";

import React, { ReactNode } from 'react'

import { isSafeUrl } from "@/lib/security";

interface SecureLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
}

export default function SecureLink({
  href,
  children,
  className,
  target = "_blank",
  rel = "noopener noreferrer nofollow",
}: SecureLinkProps) {
  // Vérification de sécurité de l'URL
  if (!isSafeUrl(href)) {
    console.warn(`Tentative d'accès à une URL non sécurisée: ${href}`);
    return (
      <span
        className={`${className} cursor-not-allowed opacity-50`}
        title="Lien non sécurisé"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      // Sécurité supplémentaire
      onClick={(e) => {
        // Double vérification au clic
        if (!isSafeUrl(href)) {
          e.preventDefault();
          console.warn("Tentative de navigation bloquée vers:", href);
          return false;
        }
      }}
    >
      {children}
    </a>
  );
}
