import Link from "next/link"

interface GameCardProps {
  name: string
  description: string
  slug: string
  priority?: boolean
}

export function GameCard({ name, description, slug, priority = false }: GameCardProps) {
  return (
    <div className={`bg-white rounded-xl p-6 game-shadow card-hover ${priority ? "ring-2 ring-green-200" : ""}`}>
      <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-4xl">🖱️</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
      <Link
        href={`/${slug}`}
        className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 text-sm"
      >
        Play Now
      </Link>
    </div>
  )
}
