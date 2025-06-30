'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function LanguageProvider() {
  const pathname = usePathname()

  useEffect(() => {
    // Function to get locale from pathname
    function getLocaleFromPathname(pathname: string): string {
      const pathSegments = pathname.split('/').filter(Boolean)
      const firstSegment = pathSegments[0]
      
      // Define supported locales
      const supportedLocales = ['ja', 'es', 'pt', 'fr', 'de', 'nl']
      
      if (supportedLocales.includes(firstSegment)) {
        return firstSegment
      }
      
      // Default to English
      return 'en'
    }

    const locale = getLocaleFromPathname(pathname)
    
    // Update the html lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [pathname])

  return null
} 