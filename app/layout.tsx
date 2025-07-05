import Footer from "../components/Footer";
import type React from "react"
import type { Metadata } from "next"
import { CookieConsent } from "./components/CookieConsent"
import { AICrawlerMeta } from "./components/AICrawlerMeta"
import Navbar from "./components/Navbar"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://clickwar.app"),
  title: {
    default: "ClickWar - Play Free World Domination Strategy Game Online | Missile Attack Game",
    template: "%s | ClickWar",
  },
  description:
    "🎯 Play ClickWar free online! Conquer the world by launching missiles, capturing countries, and dominating territories in this addictive strategy game. No download required!",
  keywords: [
    "clickwar",
    "world domination game",
    "missile attack game",
    "territory strategy",
    "online war game",
    "clickwar game",
    "strategy war game",
    "country conquest game",
    "missile strategy game",
    "global domination game",
    "clickwar online",
    "play clickwar free",
    "war strategy game",
    "territory control game",
    "missile defense game",
    "empire building game",
    "real-time war game",
    "browser war game",
    "no download war game",
    "free strategy game",
  ].join(", "),
  authors: [{ name: "ClickWar Team", url: "https://clickwar.app" }],
  creator: "ClickWar",
  publisher: "ClickWar",
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
    canonical: "https://clickwar.app",
    languages: {
      "x-default": "https://clickwar.app",
      en: "https://clickwar.app",
      ja: "https://clickwar.app/ja",
      vi: "https://clickwar.app/vn",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clickwar.app",
    siteName: "ClickWar",
    title: "ClickWar - Play Free World Domination Strategy Game Online",
    description:
      "🎯 Play ClickWar free online! Conquer the world by launching missiles, capturing countries, and dominating territories in this addictive strategy game.",
    images: [
      {
        url: "https://clickwar.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ClickWar - World Domination Strategy Game",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ClickWarGame",
    creator: "@ClickWarGame",
    title: "ClickWar - Play Free World Domination Strategy Game Online",
    description: "🎯 Play ClickWar free online! Conquer the world by launching missiles, capturing countries.",
    images: ["https://clickwar.app/twitter-card.jpg"],
  },
  category: "Games",
  classification: "Strategy Games",
  generator: "Next.js",
  applicationName: "ClickWar",
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
        <link rel="dns-prefetch" href="//clickwar.app" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />

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
        <script defer data-domain="clickwar.app" src="https://plausible.io/js/script.js"></script>
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
              name: "ClickWar",
              url: "https://clickwar.app",
              description: "Play ClickWar free online! Conquer the world by launching missiles, capturing countries, and dominating territories in this addictive strategy game.",
              inLanguage: ["en"],
              isAccessibleForFree: true,
              genre: ["Strategy", "War", "Conquest"],
              audience: {
                "@type": "Audience",
                audienceType: "General",
              },
              publisher: {
                "@type": "Organization",
                name: "ClickWar",
                url: "https://clickwar.app",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <AICrawlerMeta />
        <Navbar />
        {children}
        <CookieConsent />
      </body>
      <Footer />
    </html>
  )
}
