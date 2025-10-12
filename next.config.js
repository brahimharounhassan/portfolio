/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'portfolio'

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
  
  // Configuration sécurisée pour GitHub Pages
  assetPrefix: isProd ? `/${repoName}` : '',
  basePath: isProd ? `/${repoName}` : '',
  
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
 