import type React from "react"
import type { Metadata } from "next"
import { CookieConsent } from "./components/CookieConsent"
import { LanguageProvider } from "./components/LanguageProvider"
import { AICrawlerMeta } from "./components/AICrawlerMeta"
import Navbar from "./components/Navbar"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://suika.games"),
  title: {
    default: "Suika Game - Play Free Watermelon Puzzle Online | No Download Required",
    template: "%s | Suika Games",
  },
  description:
    "🍉 Play Suika Game free online! Merge fruits to create watermelons in this viral Japanese puzzle. No ads, no downloads. Mobile-friendly with 11+ game variants.",
  keywords: [
    "suika game",
    "watermelon game",
    "fruit merge game",
    "japanese puzzle game",
    "watermelon puzzle",
    "suika game online",
    "play suika game free",
    "fruit puzzle game",
    "merge puzzle",
    "watermelon merge game",
    "suika game unblocked",
    "japanese watermelon game",
    "fruit drop game",
    "physics puzzle game",
    "casual puzzle game",
    "mobile puzzle game",
    "browser game",
    "no download game",
    "free online puzzle",
    "viral puzzle game",
  ].join(", "),
  authors: [{ name: "Suika Games Team", url: "https://suika.games" }],
  creator: "Suika Games",
  publisher: "Suika Games",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://suika.games",
    languages: {
      "x-default": "https://suika.games",
      en: "https://suika.games",
      ja: "https://suika.games/ja",
      es: "https://suika.games/es",
      pt: "https://suika.games/pt",
      fr: "https://suika.games/fr",
      de: "https://suika.games/de",
      nl: "https://suika.games/nl",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suika.games",
    siteName: "Suika Games",
    title: "Suika Game - Play Free Watermelon Puzzle Online",
    description:
      "🍉 Play the viral Japanese watermelon puzzle game free online! Merge fruits, create watermelons, and enjoy 11+ game variants.",
    images: [
      {
        url: "https://suika.games/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suika Game - Watermelon Puzzle Game Online",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SuikaGames",
    creator: "@SuikaGames",
    title: "Suika Game - Play Free Watermelon Puzzle Online",
    description: "🍉 Play the viral Japanese watermelon puzzle game free online! Merge fruits, create watermelons.",
    images: ["https://suika.games/twitter-card.jpg"],
  },
  category: "Games",
  classification: "Puzzle Games",
  generator: "Next.js",
  applicationName: "Suika Games",
  referrer: "origin-when-cross-origin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Consent Mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
              });
            `,
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//suikagamejp.com" />
        <link rel="dns-prefetch" href="//poki.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#4ade80" />
        <meta name="msapplication-TileColor" content="#4ade80" />

        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* AI Crawler Friendly Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Plausible Analytics */}
        <script defer data-domain="suika.games" src="https://plausible.io/js/script.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`
        }} />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Suika Games",
              url: "https://suika.games",
              description: "Play Suika Game free online! Merge fruits to create watermelons in this viral Japanese puzzle.",
              inLanguage: ["en", "ja", "fr"],
              isAccessibleForFree: true,
              genre: ["Puzzle", "Casual", "Physics"],
              audience: {
                "@type": "Audience",
                audienceType: "General",
              },
              publisher: {
                "@type": "Organization",
                name: "Suika Games",
                url: "https://suika.games",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider />
        <AICrawlerMeta />
        <Navbar />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
