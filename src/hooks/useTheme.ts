'use client'

import React from 'react'

const { useState, useEffect, useCallback } = React

export type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (typeof window === 'undefined') return

    // Récupérer le thème sauvegardé ou utiliser la préférence système
    const savedTheme = localStorage.getItem('theme') as Theme
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = savedTheme || systemTheme
    
    setTheme(initialTheme)
    
    // Appliquer le thème au document
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = useCallback(() => {
    if (!mounted || typeof window === 'undefined') return
    
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    
    // Appliquer le thème au document
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Sauvegarder dans localStorage
    try {
      localStorage.setItem('theme', newTheme)
    } catch (error) {
      console.warn('Cannot save theme to localStorage:', error)
    }
  }, [theme, mounted])

  return { 
    theme: mounted ? theme : 'light', 
    toggleTheme,
    mounted
  }
}
