import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Games Like Suika - Best Watermelon Puzzle Variants & Alternatives",
  description:
    "Discover the best games like Suika Game. Play creative variants, fan-made versions, and alternatives to the viral watermelon puzzle.",
  canonical: "https://suika.games/games-like-suika",
}

const suikaVariants = [
  {
    name: "Merge Fruit",
    slug: "merge-fruit",
    description:
      "Classic fruit merging mechanics with smooth physics and colorful graphics. Perfect introduction to the genre with intuitive controls and satisfying merge animations that make every combination feel rewarding.",
  },
  {
    name: "Suika Taylor Swift",
    slug: "suika-taylor-swift",
    description:
      "Merge Taylor Swift albums and songs instead of fruits. A creative twist for Swifties combining music fandom with addictive puzzle gameplay, featuring iconic album artwork and song references.",
  },
  {
    name: "Sea Fruit Merge",
    slug: "sea-fruit-merge",
    description:
      "Underwater fruit merging adventure with ocean-themed graphics, aquatic sound effects, and marine-inspired fruit varieties that create a unique underwater puzzle experience.",
  },
  {
    name: "FaunaMelon Watermelon Game",
    slug: "faunamelon-watermelon-game",
    description:
      "Animal-themed fruit puzzle featuring cute creatures, nature-inspired gameplay mechanics, and wildlife conservation themes that educate while entertaining players.",
  },
  {
    name: "Suika Connect World",
    slug: "suika-connect-world",
    description:
      "Global connection puzzle variant combining Suika mechanics with world geography, cultural elements, and international themes that celebrate global diversity.",
  },
  {
    name: "Suika Hololive Manjuu",
    slug: "suika-hololive-manjuu",
    description:
      "Hololive VTuber character themed version featuring popular virtual YouTuber personalities and streaming culture references that fans of the VTuber community will love.",
  },
  {
    name: "Suika Synthetic Watermelon",
    slug: "suika-synthetic-watermelon",
    description:
      "Futuristic synthetic fruit theme with neon graphics, electronic music soundtrack, and cyberpunk aesthetic elements that create a sci-fi puzzle experience.",
  },
  {
    name: "Ringo Watermelon Game",
    slug: "ringo-watermelon-game",
    description:
      "Apple-focused fruit merging with Japanese aesthetics, traditional gameplay elements, and orchard-themed visuals that celebrate Japanese fruit culture.",
  },
  {
    name: "Holo Suika Game",
    slug: "holo-suika-game",
    description:
      "Holographic visual effects version with stunning 3D graphics, immersive gameplay, and futuristic presentation style that pushes the boundaries of the genre.",
  },
]

export default function GamesLikeSuikaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Games Like Suika - Best Watermelon Puzzle Variants
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore creative variants and fan-made versions of the viral Suika Game. Each offers unique themes,
            mechanics, and visual styles while maintaining the addictive fruit-merging gameplay that made the original
            famous worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {suikaVariants.map((game) => (
            <div key={game.slug} className="bg-white rounded-xl p-6 game-shadow card-hover">
              <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🍉</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{game.name}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">{game.description}</p>
              <Link
                href={`/${game.slug}`}
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-colors duration-200 text-sm"
              >
                Play Now
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 game-shadow text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Play the Original?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            After exploring these creative variants, experience where it all started with the original Suika Game that
            took the world by storm and inspired this entire genre of puzzle games.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-colors duration-200"
          >
            Return to Original Suika Game
          </Link>
        </div>
      </div>
    </main>
  )
}
