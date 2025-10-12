// Utilitaires de sécurité pour le portfolio

/**
 * Sanitise une chaîne de caractères pour éviter les XSS
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  
  return input
    .replace(/[<>]/g, '') // Supprimer < et >
    .replace(/javascript:/gi, '') // Supprimer javascript:
    .replace(/on\w+=/gi, '') // Supprimer les événements onclick, etc.
    .replace(/script/gi, '') // Supprimer script
    .trim()
    .substring(0, 1000) // Limiter la longueur
}

/**
 * Valide une adresse email
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

/**
 * Valide un nom (lettres, espaces, tirets seulement)
 */
export function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-ZÀ-ÿ\s\-]{1,50}$/
  return nameRegex.test(name)
}

/**
 * Vérifie si une URL est sûre (domaines autorisés uniquement)
 */
export function isSafeUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    const allowedDomains = [
      'github.com',
      'linkedin.com',
      'twitter.com',
      'ieeexplore.ieee.org',
      'fonts.googleapis.com',
      'fonts.gstatic.com'
    ]
    
    return allowedDomains.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
    )
  } catch {
    return false
  }
}

/**
 * Rate limiting côté client (basique)
 */
const actionTimestamps = new Map<string, number[]>()

export function rateLimit(action: string, maxRequests = 5, windowMs = 60000): boolean {
  const now = Date.now()
  const timestamps = actionTimestamps.get(action) || []
  
  // Nettoyer les anciens timestamps
  const validTimestamps = timestamps.filter(timestamp => now - timestamp < windowMs)
  
  if (validTimestamps.length >= maxRequests) {
    return false // Rate limit atteint
  }
  
  validTimestamps.push(now)
  actionTimestamps.set(action, validTimestamps)
  return true
}

/**
 * Obfuscation simple pour les données sensibles
 */
export function obfuscateData(data: string, visibleChars = 3): string {
  if (data.length <= visibleChars * 2) return data
  
  const start = data.substring(0, visibleChars)
  const end = data.substring(data.length - visibleChars)
  const middle = '*'.repeat(Math.max(3, data.length - visibleChars * 2))
  
  return `${start}${middle}${end}`
}

/**
 * Génère un nonce sécurisé pour CSP
 */
export function generateNonce(): string {
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(16)
    window.crypto.getRandomValues(array)
    return btoa(String.fromCharCode.apply(null, Array.from(array)))
  }
  
  // Fallback pour les anciens navigateurs
  return Math.random().toString(36).substring(2, 15) +
         Math.random().toString(36).substring(2, 15)
}

/**
 * Détecte les tentatives d'attaque basiques
 */
export function detectAttackAttempt(input: string): boolean {
  const maliciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /eval\(/i,
    /document\./i,
    /window\./i,
    /(union|select|insert|drop|delete|update|create|alter)/i,
    /\.\.\//,
    /\/etc\/passwd/i,
    /cmd\.exe/i
  ]
  
  return maliciousPatterns.some(pattern => pattern.test(input))
}

/**
 * Validation stricte des domaines autorisés
 */
export function validateAllowedDomain(url: string): boolean {
  try {
    const urlObj = new URL(url)
    const allowedDomains = [
      'github.com',
      'linkedin.com', 
      'researchgate.net',
      'elbramos.github.io'
    ]
    
    return allowedDomains.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
    )
  } catch {
    return false
  }
}
