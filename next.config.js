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
  
  // Configuration CORRECTE pour GitHub Pages
  // IMPORTANT: assetPrefix ET basePath sont nécessaires ensemble pour les assets CSS
  ...(isProd && {
    assetPrefix: '/portfolio',
    basePath: '/portfolio',
  }),
  
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