"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CookieConsent from "@/components/ui/CookieConsent";

const { useEffect, useState } = React;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleLocaleChange = () => {
      window.dispatchEvent(new Event("resize"));
    };

    window.addEventListener("localeChange", handleLocaleChange);

    return () => {
      window.removeEventListener("localeChange", handleLocaleChange);
    };
  }, []);

  // Rendu unifié pour éviter l'erreur d'hydratation
  // Structure TOUJOURS identique côté serveur et client
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header placeholder pendant SSR, vrai Header après hydratation */}
      {!mounted ? (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 h-16" />
      ) : (
        <Header />
      )}

      <main className="flex-1 mt-16">{children}</main>
      <Footer />

      {mounted && (
        <>
          <ScrollToTop />
          <CookieConsent />
        </>
      )}
    </div>
  );
}
