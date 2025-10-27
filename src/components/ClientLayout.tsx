"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CookieConsent from "@/components/ui/CookieConsent";

const { useEffect, useState } = React;

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
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

  // Structure DOM identique côté serveur ET client pour éviter l'erreur d'hydratation
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Header - toujours présent avec la même structure */}
        <Header />

        <main className="flex-1 mt-16">{children}</main>
        <Footer />
      </div>

      {/* Composants conditionnels en dehors de la structure principale */}
      {mounted && (
        <>
          <ScrollToTop />
          <CookieConsent />
        </>
      )}
    </>
  );
}
