import { rateLimit, detectAttackAttempt, sanitizeInput } from './security'

// Configuration sécurisée des documents
const SECURE_DOCUMENTS = {
  'cv-fr': {
    path: '/src/documents/cv/CV_fr-Brahim-Haroun-Hassan.pdf',
    publicPath: '/api/documents/cv-fr',
    filename: 'CV_fr-Brahim-Haroun-Hassan.pdf',
    maxDownloads: 100, // Limite par jour
    allowedReferers: [
      'elbramos.github.io',
      'localhost'
    ]
  },
  'cv-en': {
    path: '/src/documents/cv/CV_en-Brahim-Haroun-Hassan.pdf',
    publicPath: '/api/documents/cv-en',
    filename: 'CV_en-Brahim-Haroun-Hassan.pdf',
    maxDownloads: 100,
    allowedReferers: [
      'elbramos.github.io',
      'localhost'
    ]
  }
} as const

// Log des téléchargements pour surveillance
const downloadLogs = new Map<string, Array<{ timestamp: number, ip?: string, userAgent?: string }>>()

/**
 * Valide l'accès à un document
 */
export function validateDocumentAccess(
  documentId: string,
  userAgent?: string,
  referer?: string,
  ip?: string
): { allowed: boolean; reason?: string } {
  
  // Vérifier si le document existe
  if (!SECURE_DOCUMENTS[documentId as keyof typeof SECURE_DOCUMENTS]) {
    return { allowed: false, reason: 'Document not found' }
  }

  // Rate limiting par document
  if (!rateLimit(`download-${documentId}`, 5, 60000)) {
    return { allowed: false, reason: 'Rate limit exceeded' }
  }

  // Vérifier le referer si présent
  if (referer) {
    const document = SECURE_DOCUMENTS[documentId as keyof typeof SECURE_DOCUMENTS]
    const isValidReferer = document.allowedReferers.some(allowed => 
      referer.includes(allowed)
    )
    
    if (!isValidReferer) {
      console.warn(`Suspicious referer for ${documentId}: ${referer}`)
      return { allowed: false, reason: 'Invalid referer' }
    }
  }

  // Détecter les user agents suspects
  if (userAgent && detectAttackAttempt(userAgent)) {
    console.warn(`Suspicious user agent for ${documentId}: ${userAgent}`)
    return { allowed: false, reason: 'Suspicious user agent' }
  }

  // Logger l'accès autorisé
  logDocumentAccess(documentId, ip, userAgent)

  return { allowed: true }
}

/**
 * Log sécurisé des accès aux documents
 */
function logDocumentAccess(documentId: string, ip?: string, userAgent?: string) {
  const logs = downloadLogs.get(documentId) || []
  
  logs.push({
    timestamp: Date.now(),
    ip: ip ? sanitizeInput(ip) : undefined,
    userAgent: userAgent ? sanitizeInput(userAgent.substring(0, 200)) : undefined
  })
  
  // Garder seulement les 1000 derniers logs
  if (logs.length > 1000) {
    logs.splice(0, logs.length - 1000)
  }
  
  downloadLogs.set(documentId, logs)
  
  // Analytics intégré pour le monitoring
  if (typeof window !== 'undefined') {
    import('./analytics').then(({ analytics }) => {
      analytics.trackDownload(documentId as 'cv-fr' | 'cv-en', {
        securityLog: true,
        timestamp: Date.now()
      })
    })
  }
}

/**
 * Génère un token temporaire pour le téléchargement
 */
export function generateSecureDownloadToken(documentId: string): string {
  const timestamp = Date.now()
  const randomPart = Math.random().toString(36).substring(2, 15)
  const data = `${documentId}-${timestamp}-${randomPart}`
  
  // Encodage simple (pour un vrai projet, utiliser JWT ou crypto)
  return btoa(data).replace(/[+/=]/g, (char) => {
    switch (char) {
      case '+': return '-'
      case '/': return '_'
      case '=': return ''
      default: return char
    }
  })
}

/**
 * Valide un token de téléchargement
 */
export function validateDownloadToken(token: string, documentId: string): boolean {
  try {
    // Décoder le token
    const decodedToken = token.replace(/-/g, '+').replace(/_/g, '/')
    const data = atob(decodedToken)
    const [tokenDocId, timestamp] = data.split('-')
    
    // Vérifier la correspondance du document
    if (tokenDocId !== documentId) return false
    
    // Vérifier l'expiration (5 minutes)
    const tokenTime = parseInt(timestamp)
    const now = Date.now()
    const fiveMinutes = 5 * 60 * 1000
    
    if (now - tokenTime > fiveMinutes) return false
    
    return true
  } catch {
    return false
  }
}

/**
 * Obtient les statistiques de téléchargement
 */
export function getDownloadStats(documentId: string) {
  const logs = downloadLogs.get(documentId) || []
  const last24h = logs.filter(log => Date.now() - log.timestamp < 24 * 60 * 60 * 1000)
  
  return {
    totalDownloads: logs.length,
    last24h: last24h.length,
    uniqueIPs: new Set(logs.map(log => log.ip).filter(Boolean)).size
  }
}
