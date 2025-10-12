// Système d'analytics sécurisé pour le portfolio

type AnalyticsEventType = 'page_view' | 'download' | 'navigation' | 'theme_change' | 'language_change' | 'contact_form' | 'project_view' | 'social_click'

type DownloadType = 'cv' | 'cv-fr' | 'cv-en' | 'project' | 'document'

interface AnalyticsEvent {
  type: AnalyticsEventType
  data?: Record<string, any>
  timestamp: number
  sessionId: string
}

// Session ID unique pour chaque visiteur
let sessionId = ''
if (typeof window !== 'undefined') {
  sessionId = sessionStorage.getItem('analytics-session') || Math.random().toString(36).substring(2, 15)
  sessionStorage.setItem('analytics-session', sessionId)
}

// Queue d'événements pour le batch processing
const eventQueue: AnalyticsEvent[] = []

/**
 * Classe principale pour le système d'analytics
 */
class Analytics {
  isEnabled: boolean

  constructor() {
    this.isEnabled = true // Par défaut, l'analytics est activé
  }

  /**
   * Fonction principale pour tracker les événements
   */
  trackEvent(type: AnalyticsEventType, data?: Record<string, any>) {
    if (!this.isEnabled) return

    const event: AnalyticsEvent = {
      type,
      data: {
        ...data,
        url: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      },
      timestamp: Date.now(),
      sessionId
    }

    eventQueue.push(event)
    
    // Console log pour le développement
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event)
    }

    // Envoyer vers Google Analytics si configuré
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag('event', type, {
          event_category: 'portfolio',
          event_label: data?.label || '',
          value: data?.value || 0
        })
      } catch (error) {
        console.warn('Erreur Google Analytics:', error)
      }
    }
  }

  /**
   * Tracker les téléchargements de documents
   */
  trackDownload(downloadType: DownloadType, additionalData?: Record<string, any>) {
    this.trackEvent('download', {
      downloadType,
      ...additionalData
    })
  }

  /**
   * Tracker les vues de page
   */
  trackPageView(page: string) {
    this.trackEvent('page_view', {
      page,
      referrer: typeof document !== 'undefined' ? document.referrer : ''
    })
  }

  /**
   * Tracker la navigation interne
   */
  trackNavigation(section: string) {
    this.trackEvent('navigation', {
      section,
      from: typeof window !== 'undefined' ? window.location.hash : ''
    })
  }

  /**
   * Tracker les changements de thème
   */
  trackThemeChange(theme: 'light' | 'dark') {
    this.trackEvent('theme_change', {
      theme,
      previous: theme === 'dark' ? 'light' : 'dark'
    })
  }

  /**
   * Tracker les changements de langue
   */
  trackLanguageChange(language: 'fr' | 'en') {
    this.trackEvent('language_change', {
      language,
      previous: language === 'fr' ? 'en' : 'fr'
    })
  }

  /**
   * Tracker les soumissions de formulaire de contact
   */
  trackContactForm(action: 'submit' | 'error' | 'success') {
    this.trackEvent('contact_form', {
      action
    })
  }

  /**
   * Tracker les vues de projet
   */
  trackProjectView(projectId: string, projectName?: string) {
    this.trackEvent('project_view', {
      projectId,
      projectName
    })
  }

  /**
   * Tracker les clics sur les réseaux sociaux
   */
  trackSocialClick(platform: string, url: string, additionalData?: Record<string, any>) {
    if (!this.isEnabled) return;

    const eventData = {
      social_platform: platform,
      link_url: url,
      timestamp: Date.now(),
      ...additionalData
    };

    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'social_click', {
        social_network: platform,
        link_url: url,
        custom_parameters: eventData
      });
    }

    // Privacy-friendly logging
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Social Click:', platform, url, eventData);
    }

    // Store pour analytics locales
    this.storeEvent('social_click', eventData);
  }

  /**
   * Obtenir les statistiques d'usage
   */
  getAnalyticsStats() {
    const stats = {
      totalEvents: eventQueue.length,
      downloads: eventQueue.filter(e => e.type === 'download').length,
      pageViews: eventQueue.filter(e => e.type === 'page_view').length,
      navigation: eventQueue.filter(e => e.type === 'navigation').length,
      sessionId
    }

    return stats
  }

  /**
   * Exporter les données analytics (pour debug)
   */
  exportAnalyticsData() {
    if (process.env.NODE_ENV === 'development') {
      console.log('📈 Analytics Data:', {
        stats: this.getAnalyticsStats(),
        events: eventQueue.slice(-10) // Derniers 10 événements
      })
    }

    return eventQueue
  }

  /**
   * Initialise Google Analytics si l'ID est fourni
   */
  initGA(gaId?: string) {
    if (typeof window === 'undefined' || !gaId) return

    // Charger le script Google Analytics
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script)

    // Initialiser gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments)
    }
    
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', gaId, {
      page_title: document.title,
      page_location: window.location.href
    })

    console.log('📊 Google Analytics initialisé avec ID:', gaId)
  }

  /**
   * Active ou désactive Google Analytics selon le consentement
   */
  setGAConsent(hasConsent: boolean) {
    if (typeof window === 'undefined' || !window.gtag) return

    if (hasConsent) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
      console.log('📊 Consentement Google Analytics accordé')
    } else {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      })
      console.log('📊 Consentement Google Analytics refusé')
    }
  }

  /**
   * Stocker un événement pour une analyse ultérieure (locale)
   */
  private storeEvent(type: AnalyticsEventType, data: Record<string, any>) {
    try {
      if (typeof window === 'undefined') return
      
      const event = {
        type,
        data,
        timestamp: Date.now(),
        sessionId
      }
      
      // Stockage local sécurisé (limité à 100 événements)
      const stored = JSON.parse(localStorage.getItem('analytics-events') || '[]')
      stored.push(event)
      
      // Garder seulement les 100 derniers événements
      const limited = stored.slice(-100)
      localStorage.setItem('analytics-events', JSON.stringify(limited))
      
    } catch (error) {
      console.warn('Cannot store analytics event:', error)
    }
  }

  /**
   * Nettoyer les données analytics anciennes
   */
  cleanupOldAnalytics() {
    try {
      if (typeof window === 'undefined') return
      
      const stored = JSON.parse(localStorage.getItem('analytics-events') || '[]')
      const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000)
      
      const recent = stored.filter((event: any) => event.timestamp > oneDayAgo)
      localStorage.setItem('analytics-events', JSON.stringify(recent))
      
    } catch (error) {
      console.warn('Cannot cleanup analytics:', error)
    }
  }
}

// Déclaration globale pour TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// Export par défaut mis à jour
export const analytics = new Analytics()
