import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Play Suika Classic - Original Watermelon Puzzle Game Online",
  description:
    "Experience Suika Classic with traditional gameplay mechanics. Merge fruits to create watermelons in this authentic Japanese puzzle game.",
  canonical: "https://suika.games/suika-classic",
}

export default function SuikaClassicPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Play Suika Classic</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the original Suika Game with classic gameplay mechanics and traditional fruit merging physics.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-2xl game-shadow rounded-2xl overflow-hidden bg-white">
            <iframe
              src="https://suika-game.app/"
              title="Suika Classic Game"
              className="w-full h-[500px] md:h-[600px]"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 game-shadow mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Suika Classic</h2>
          <p className="text-gray-700 mb-4">
            Suika Classic maintains the original game's physics and merging mechanics that made it a viral sensation.
            This version preserves the authentic Japanese puzzle experience with traditional fruit sequences and
            realistic physics simulation that creates unpredictable and engaging gameplay sessions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategy Tips</h3>
          <p className="text-gray-700 mb-4">
            Focus on building stable foundations along the container edges. Plan several moves ahead and consider how
            physics will affect fruit positioning. Create chain reactions by positioning identical fruits strategically
            for maximum scoring potential and efficient space utilization.
          </p>

          <p className="text-gray-700">
            The classic version rewards patience and strategic thinking over quick reflexes. Take time to analyze the
            current state and identify opportunities for efficient space management and large fruit creation sequences.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Suika-like Games</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/#games-like-suika"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
            >
              See All Variants
            </Link>
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Back to Main Suika Game
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
