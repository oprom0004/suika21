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
        content: 'strategy'
      },
      {
        name: 'game-genre',
        content: 'strategy,war,conquest,real-time'
      },
      {
        name: 'game-platform',
        content: 'web,mobile'
      },
      {
        name: 'game-language',
        content: 'en,ja,vi'
      },
      {
        name: 'game-difficulty',
        content: 'easy,medium,hard'
      },
      {
        name: 'game-age-rating',
        content: 'all-ages'
      },
      {
        name: 'game-features',
        content: 'missile-warfare,world-domination,territory-conquest,real-time-strategy'
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