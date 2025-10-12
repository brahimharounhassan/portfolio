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
  
  // Configuration pour GitHub Pages SANS assetPrefix pour éviter les problèmes CSS
  // Le assetPrefix peut casser les imports CSS en production
  ...(isProd && {
    // Seulement basePath, pas assetPrefix pour éviter les problèmes CSS
    basePath: '/portfolio',
  }),
  
  // DÉSACTIVER les optimisations CSS qui causent l'erreur Critters
  experimental: {
    // optimizeCss: false, // Désactivé pour éviter l'erreur Critters
  },
  
  // Webpack configuration simplifiée SANS optimisation CSS
  webpack: (config, { dev, isServer }) => {
    // Désactiver les source maps en production
    if (isProd) {
      config.devtool = false
    }
    
    // Configuration minimale sans optimisation CSS
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
    ignoreDuringBuilds: false,
    dirs: ['src']
  },
  
  // Configuration du compilateur SWC
  swcMinify: true,
}

module.exports = nextConfig