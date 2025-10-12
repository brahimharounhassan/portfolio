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
  
  // Configuration pour GitHub Pages RACINE (sans sous-dossier)
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
  
  // Webpack configuration SIMPLIFIÉE
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
    ignoreDuringBuilds: false,
    dirs: ['src']
  },
  
  // Configuration du compilateur SWC
  swcMinify: true,
}

module.exports = nextConfig
module.exports = nextConfig
 