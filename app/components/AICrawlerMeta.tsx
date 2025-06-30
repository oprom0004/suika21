'use client'

import { useEffect } from 'react'

export function AICrawlerMeta() {
  useEffect(() => {
    // Add AI-friendly meta tags dynamically
    const metaTags = [
      {
        name: 'ai-friendly',
        content: 'true'
      },
      {
        name: 'content-type',
        content: 'game'
      },
      {
        name: 'game-type',
        content: 'puzzle'
      },
      {
        name: 'game-genre',
        content: 'casual,physics,merge'
      },
      {
        name: 'game-platform',
        content: 'web,mobile'
      },
      {
        name: 'game-language',
        content: 'en,ja,fr'
      },
      {
        name: 'game-difficulty',
        content: 'easy,medium'
      },
      {
        name: 'game-age-rating',
        content: 'all-ages'
      }
    ]

    metaTags.forEach(tag => {
      const meta = document.createElement('meta')
      meta.name = tag.name
      meta.content = tag.content
      document.head.appendChild(meta)
    })

    // Cleanup function
    return () => {
      metaTags.forEach(tag => {
        const existingMeta = document.querySelector(`meta[name="${tag.name}"]`)
        if (existingMeta) {
          existingMeta.remove()
        }
      })
    }
  }, [])

  return null
} 