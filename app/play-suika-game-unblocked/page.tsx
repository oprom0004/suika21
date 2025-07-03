import type { Metadata } from "next"
import Link from "next/link"
import { GameEmbed } from "../components/GameEmbed"

export const metadata: Metadata = {
  title: "Play Suika Game Unblocked - Free Online Watermelon Puzzle",
  description:
    "Play Suika Game unblocked at school or work. Free online access to the viral watermelon puzzle game with no restrictions or downloads required.",
  canonical: "https://suika.games/play-suika-game-unblocked",
}

export default function PlaySuikaGameUnblockedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Play Suika Game Unblocked - Free Online Watermelon Puzzle
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access Suika Game unblocked at school, work, or anywhere with internet restrictions. Play the viral Japanese
            watermelon puzzle game for free with no downloads or installations required.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-2xl game-shadow rounded-2xl overflow-hidden bg-white">
            <GameEmbed
              src="https://turbowarp.org/911281961/embed"
              title="Suika Game Unblocked"
              className="w-full h-[500px] md:h-[600px]"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 game-shadow mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Play Suika Game Unblocked?</h2>
          <p className="text-gray-700 mb-4">
            Suika Game unblocked provides unrestricted access to the addictive watermelon puzzle game that has
            captivated millions worldwide. Whether you're at school, work, or using a restricted network, you can enjoy
            this engaging Japanese puzzle game without any barriers.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Features of Unblocked Access</h3>
          <ul className="text-gray-700 space-y-2 mb-4">
            <li>• No downloads or installations required</li>
            <li>• Works on school and office networks</li>
            <li>• Full game functionality preserved</li>
            <li>• Mobile and desktop compatible</li>
            <li>• No registration or sign-up needed</li>
          </ul>

          <p className="text-gray-700">
            The unblocked version maintains all the original game mechanics, physics simulation, and addictive gameplay
            that made Suika Game a viral sensation. Merge fruits, create chain reactions, and work toward the ultimate
            goal of creating a watermelon.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Unblocked Games</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/#games-like-suika"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
            >
              More Suika Game Variants
            </Link>
            <Link
              href="/games-like-suika"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              All Puzzle Games
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
