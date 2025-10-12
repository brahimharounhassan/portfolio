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

    // Forcer la re-render des composants lors du changement de langue
    const handleLocaleChange = () => {
      // Déclencher une mise à jour globale
      window.dispatchEvent(new Event("resize"));
    };

    window.addEventListener("localeChange", handleLocaleChange);

    return () => {
      window.removeEventListener("localeChange", handleLocaleChange);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Skeleton Header */}
        <div className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 animate-pulse">
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="flex space-x-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        {children}

        {/* Skeleton Footer */}
        <div className="bg-gray-900 py-12 mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-24 h-4 bg-gray-700 rounded"></div>
                  <div className="space-y-2">
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className="w-32 h-3 bg-gray-700 rounded"
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
}
