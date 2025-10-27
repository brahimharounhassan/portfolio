/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [],
    dangerouslyAllowSVG: false,
  },
  compress: true,
  poweredByHeader: false,
  
  // Configuration CORRIGÉE pour GitHub Pages avec CSS
  // assetPrefix doit inclure le protocole pour les assets CSS
  ...(isProd && {
    assetPrefix: '/portfolio',
    basePath: '/portfolio',
  }),
  
  // Configuration expérimentale pour forcer le CSS inline et externe
  experimental: {
    optimizeCss: false, // Désactiver l'optimisation CSS qui peut causer des problèmes
  },
  
  // Webpack configuration SIMPLIFIÉE sans optimisations CSS
  webpack: (config) => {
    // Désactiver les source maps en production
    if (isProd) {
      config.devtool = false
    }
    
    // Configuration minimale
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    }
    
    return config
  },
  
  // Configuration TypeScript et ESLint
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: false ,
  },
  
  // Configuration du compilateur SWC
  swcMinify: true,
}

module.exports = nextConfig