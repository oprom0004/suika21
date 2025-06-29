"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
    // Here you would typically initialize analytics and ad services
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      })
    }
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
    // Ensure analytics and ads are disabled
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      })
    }
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">🍪</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">We Use Cookies</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We use cookies to enhance your gaming experience and serve personalized ads through Google AdSense.
                  These cookies help us understand how you interact with our games and improve our services.
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-600">
              By clicking "Accept", you consent to our use of cookies. You can change your preferences anytime in our{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
            <button
              onClick={declineCookies}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
