'use client'

import React from 'react'
import { Locale, defaultLocale, translations } from '@/lib/i18n'

const { useEffect, useState, useCallback } = React

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (typeof window === 'undefined') return

    const savedLocale = localStorage.getItem('locale') as Locale
    const browserLocale = navigator.language.startsWith('en') ? 'en' : 'fr'
    const initialLocale = savedLocale || browserLocale
    
    setLocale(initialLocale)

    // Écouter les changements de langue globaux - AJOUT
    const handleLocaleChange = (event: CustomEvent) => {
      setLocale(event.detail);
    };

    window.addEventListener('localeChange', handleLocaleChange as EventListener);

    return () => {
      window.removeEventListener('localeChange', handleLocaleChange as EventListener);
    };
  }, [])

  const changeLocale = useCallback((newLocale: Locale) => {
    if (!mounted || typeof window === 'undefined') return
    
    setLocale(newLocale)
    
    try {
      localStorage.setItem('locale', newLocale)
    } catch (error) {
      console.warn('Cannot save locale to localStorage:', error)
    }
    
    // Déclencher l'événement de changement de langue - CORRIGÉ
    window.dispatchEvent(new CustomEvent('localeChange', { detail: newLocale }))
    
    // Forcer le re-render de tous les composants qui utilisent les traductions
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  }, [mounted])

  const t = useCallback((key: string): string => {
    // Utiliser la locale courante même pendant le SSR pour éviter les erreurs d'hydratation
    const keys = key.split('.')
    let value: any = translations[locale]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }, [locale])

  return { 
    locale: mounted ? locale : defaultLocale, 
    changeLocale, 
    t,
    isLoading: !mounted
  }
}

