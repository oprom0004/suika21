import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Play Suika Poki - Watermelon Game on Poki Platform",
  description:
    "Play Suika Poki, the watermelon puzzle game optimized for the Poki gaming platform. Merge fruits and create watermelons online for free.",
  canonical: "https://suika.games/suika-poki",
}

export default function SuikaPokiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Play Suika Poki</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience Suika Game optimized for the Poki platform with enhanced performance and smooth gameplay.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-2xl game-shadow rounded-2xl overflow-hidden bg-white">
            <iframe
              src="https://poki.com/en/g/suika-watermelon-game"
              title="Suika Poki Game"
              className="w-full h-[500px] md:h-[600px]"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 game-shadow mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Suika Poki Features</h2>
          <p className="text-gray-700 mb-4">
            Suika Poki brings the beloved watermelon puzzle game to the popular Poki gaming platform with optimized
            performance, enhanced graphics, and seamless browser integration. This version maintains all the core
            gameplay mechanics while providing improved loading times and stability.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Platform Optimizations</h3>
          <p className="text-gray-700 mb-4">
            The Poki version features enhanced mobile responsiveness, faster loading times, and improved touch controls
            for mobile devices. The game integrates seamlessly with Poki's gaming ecosystem while preserving the
            authentic Suika Game experience that players love.
          </p>

          <p className="text-gray-700">
            Perfect for casual gaming sessions, Suika Poki offers the same addictive fruit-merging gameplay with the
            reliability and performance optimization that the Poki platform is known for.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Suika-like Games</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/#games-like-suika"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
            >
              See All Variants
            </Link>
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Back to Original Suika Game
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
