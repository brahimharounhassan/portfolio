import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Portfolio - Brahim Haroun Hassan | Ingénieur IA",
    template: "%s | Brahim Haroun Hassan",
  },
  description:
    "Portfolio de Brahim Haroun Hassan, Ingénieur en Intelligence Artificielle spécialisé en Machine Learning et Deep Learning.",
  keywords: [
    "Intelligence Artificielle",
    "Machine Learning",
    "Deep Learning",
    "Portfolio",
    "Ingénieur IA",
    "Computer Vision",
    "NLP",
    "Data Science",
  ],
  authors: [
    {
      name: "Brahim Haroun Hassan",
      url: "https://brahimharounhassan.github.io",
    },
  ],
  creator: "Brahim Haroun Hassan",
  metadataBase: new URL("https://brahimharounhassan.github.io"),
  alternates: {
    canonical: "/portfolio",
    languages: {
      "fr-FR": "/portfolio",
      "en-US": "/portfolio",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://brahimharounhassan.github.io/portfolio/",
    title: "Portfolio - Brahim Haroun Hassan | Ingénieur IA",
    description:
      "Portfolio de Brahim Haroun Hassan, Ingénieur en Intelligence Artificielle spécialisé en Machine Learning et Deep Learning.",
    siteName: "Portfolio Brahim Haroun Hassan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Brahim Haroun Hassan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Brahim Haroun Hassan | Ingénieur IA",
    description:
      "Portfolio de Brahim Haroun Hassan, Ingénieur en Intelligence Artificielle spécialisé en Machine Learning et Deep Learning.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Sécurité */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />

        {/* Preconnect pour les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
