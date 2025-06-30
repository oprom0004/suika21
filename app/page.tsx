import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Suika Game - Play Free Watermelon Puzzle Online | No Download Required",
  description:
    "🍉 Play Suika Game free online! Merge fruits to create watermelons in this viral Japanese puzzle. No ads, no downloads. Mobile-friendly with 11 game variants. Start playing now!",
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
  authors: [{ name: "Suika Games Team" }],
  creator: "Suika Games",
  publisher: "Suika Games",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://suika.games/",
    languages: {
      "x-default": "https://suika.games/",
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
    url: "https://suika.games/",
    siteName: "Suika Games",
    title: "Suika Game - Play Free Watermelon Puzzle Online",
    description:
      "🍉 Play the viral Japanese watermelon puzzle game free online! Merge fruits, create watermelons, and enjoy 11+ game variants. No downloads required!",
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
    description:
      "🍉 Play the viral Japanese watermelon puzzle game free online! Merge fruits, create watermelons. No downloads required!",
    images: ["https://suika.games/twitter-card.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Games",
}

const gameVariants = [
  {
    name: "Suika Watermelon Game",
    description: "The original viral puzzle that started the global phenomenon.",
    thumbnail: "/watermelon-puzzle-game.png",
  },
  {
    name: "Merge Fruit",
    description: "A minimalist twist with fast-paced merging and clean graphics.",
    thumbnail: "/minimalist-fruit-merge-game.png",
  },
  {
    name: "Suika Taylor Swift",
    description: "Pop star meets fruit chaos in this celebrity-themed variant.",
    thumbnail: "/celebrity-fruit-game.png",
  },
  {
    name: "Sea Fruit Merge",
    description: "Ocean-themed fruit drop experience with aquatic sound effects.",
    thumbnail: "/underwater-fruit-game.png",
  },
  {
    name: "FaunaMelon Watermelon Game",
    description: "VTuber inspired version with cute effects and anime aesthetics.",
    thumbnail: "/vtuber-fauna-watermelon-game.png",
  },
  {
    name: "Suika Connect World",
    description: "Puzzle meets travel in a fruity map adventure across continents.",
    thumbnail: "/world-map-fruit-puzzle.png",
  },
  {
    name: "Suika Hololive Manjuu",
    description: "Crossover with Hololive universe featuring virtual YouTuber characters.",
    thumbnail: "/hololive-anime-fruit-game.png",
  },
  {
    name: "2048 Suika Game",
    description: "Combines Suika and 2048 mechanics for double the puzzle fun.",
    thumbnail: "/2048-fruit-puzzle.png",
  },
  {
    name: "Ringo Watermelon Game",
    description: "Apple-focused remix with retro sounds and classic arcade vibes.",
    thumbnail: "/apple-retro-fruit-game.png",
  },
  {
    name: "Suika Synthetic Watermelon",
    description: "Sci-fi styled fruit fusion with neon graphics and electronic music.",
    thumbnail: "/cyberpunk-fruit-game.png",
  },
  {
    name: "Suika Unblocked",
    description: "Play Suika Game unblocked at school or work with full access and no restrictions.",
    thumbnail: "/suika-unblocked-game.png",
  },
  {
    name: "Holo Suika Game",
    description: "Most popular anime mashup of Suika game with holographic effects.",
    thumbnail: "/holographic-anime-fruit.png",
  },
  {
    name: "Cool Math Suika Watermelon",
    description: "A classroom-friendly version of Suika Game.",
    thumbnail: "/cool-math-suika-game.png",
  },
  {
    name: "Watermelon Go Suika",
    description: "Mobile-first edition with fast physics gameplay.",
    thumbnail: "/watermelon-go-suika-game.png",
  },
  {
    name: "Suika Game Scratch",
    description: "Fan recreation made on Scratch platform.",
    thumbnail: "/suika-game-scratch.png",
  },
  {
    name: "Suika Game Poki",
    description: "Official Poki platform version with enhanced performance and smooth gameplay.",
    thumbnail: "/suika-game-poki.png",
  },
]

const languages = [
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
]

const faqs = [
  {
    question: "What is Suika Game?",
    answer:
      "Suika Game is a Japanese puzzle game where you drop and merge fruits to create larger ones. The goal is to merge fruits until you create a watermelon, the largest fruit in the game. It became viral worldwide due to its simple yet addictive gameplay mechanics.",
  },
  {
    question: "Can I play on mobile?",
    answer:
      "Yes! Suika Game is fully optimized for mobile devices. You can play on smartphones and tablets with intuitive touch controls that make dropping and positioning fruits easy and enjoyable on any screen size.",
  },
  {
    question: "What makes it so fun?",
    answer:
      "The combination of simple mechanics, realistic physics, and strategic thinking creates an incredibly engaging experience. Each game feels unique due to the physics engine, and there's always the satisfying challenge of beating your previous high score.",
  },
  {
    question: "How do you win?",
    answer:
      "You win by creating a watermelon through strategic fruit merging. The key is efficient space management, planning ahead, and understanding the physics. The game continues until your container fills up, so focus on creating chain reactions and maximizing your score.",
  },
]

const fruitEvolution = [
  { name: "Cherry", emoji: "🍒", size: "Smallest", points: "10" },
  { name: "Strawberry", emoji: "🍓", size: "Small", points: "20" },
  { name: "Grape", emoji: "🍇", size: "Small+", points: "40" },
  { name: "Dekopon", emoji: "🍊", size: "Medium-", points: "80" },
  { name: "Orange", emoji: "🍊", size: "Medium", points: "160" },
  { name: "Apple", emoji: "🍎", size: "Medium+", points: "320" },
  { name: "Pear", emoji: "🍐", size: "Large-", points: "640" },
  { name: "Peach", emoji: "🍑", size: "Large", points: "1280" },
  { name: "Pineapple", emoji: "🍍", size: "Large+", points: "2560" },
  { name: "Melon", emoji: "🍈", size: "XL", points: "5120" },
  { name: "Watermelon", emoji: "🍉", size: "Largest", points: "10240" },
]

const latestUpdates = [
  {
    date: "2025-06-30",
    title: "New Suika Game Variants Added",
    description: "Discover 3 new variations including Suika Unblocked and Celebrity versions.",
    category: "New Games",
    link: "/#games-like-suika",
  },
  {
    date: "2025-06-25",
    title: "Mobile Performance Improvements",
    description: "Enhanced touch controls and faster loading times across all game variants.",
    category: "Updates",
    link: "/",
  },
  {
    date: "2025-06-22",
    title: "Pro Strategy Guide Released",
    description: "Master advanced techniques with comprehensive strategy guide for high scores.",
    category: "Guides",
    link: "/howtowin",
  },
  {
    date: "2025-06-20",
    title: "Multi-language Support Expanded",
    description: "Play Suika Game in 6 languages with localized content and instructions.",
    category: "Features",
    link: "/#language-switcher",
  },
]

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Suika Games",
  alternateName: "Watermelon Puzzle Game",
  url: "https://suika.games",
  description: "Play Suika Game and watermelon puzzle variants online for free. No downloads required.",
  inLanguage: ["en", "ja", "es", "pt", "fr", "de", "nl"],
  isAccessibleForFree: true,
  genre: ["Puzzle", "Casual", "Physics"],
  audience: {
    "@type": "Audience",
    audienceType: "General Public",
  },
  publisher: {
    "@type": "Organization",
    name: "Suika Games",
    url: "https://suika.games",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://suika.games/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@type": "Game",
    name: "Suika Game",
    alternateName: "Watermelon Game",
    description:
      "A Japanese puzzle game where players drop and merge fruits to create larger ones, with the goal of creating a watermelon.",
    genre: "Puzzle",
    playMode: "SinglePlayer",
    applicationCategory: "Game",
    operatingSystem: "Web Browser",
    isAccessibleForFree: true,
    gamePlatform: ["Web Browser", "Mobile", "Desktop"],
    numberOfPlayers: "1",
    contentRating: "Everyone",
  },
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen">
        {/* Section 1: Hero Section with Game Embed */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
          <div className="text-center mb-8 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Play Suika Game Free Online - Watermelon Puzzle Game
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
              🍉 Merge fruits and reach the watermelon! No ads, no downloads required.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              The viral Japanese puzzle game with 12+ variants • Mobile-friendly • Instant play
            </p>
          </div>

          <div className="w-full max-w-4xl game-shadow rounded-3xl overflow-hidden bg-white p-2">
            <iframe
              src="https://suikagamejp.com/game/game-en"
              title="Suika Watermelon Game - Play Free Online"
              className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              allow="gamepad; microphone; camera"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              🎮 Original Japanese Watermelon Game • 🆓 Free to Play • 📱 Mobile Optimized • 🚫 No Registration Required
            </p>
          </div>
        </section>

        {/* Section 2: Suika Game Variants */}
        <section id="games-like-suika" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Suika Game Variants &amp; Creative Remixes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the original watermelon puzzle and fan-made variants from around the world
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gameVariants.map((game, index) => (
                <article key={index} className="bg-white rounded-xl p-6 game-shadow card-hover">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={game.thumbnail || "/placeholder.svg"}
                      alt={`${game.name} - Play this Suika Game variant online free`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="200"
                      height="128"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{game.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{game.description}</p>
                  <Link
                    href="/#games-like-suika"
                    className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 text-sm"
                    aria-label={`Play ${game.name} online free`}
                  >
                    Play Now
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: How to Play */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              How to Play Suika Watermelon Game
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Apple">
                    🍎
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Drop Fruits from Top</h3>
                <p className="text-gray-600">
                  Drop fruits from the top of the container to start the merging process and build your fruit tower.
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Orange">
                    🍊
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Merge Matching Fruits</h3>
                <p className="text-gray-600">
                  When identical fruits touch, they automatically merge into the next larger fruit in the evolution
                  chain.
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Watermelon">
                    🍉
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Create the Watermelon</h3>
                <p className="text-gray-600">
                  Keep merging strategically to create the ultimate watermelon and achieve the highest possible score!
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Section 4: How to Merge Fruits - 玩法攻略块 */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                📌 How to Merge Fruits - Complete Evolution Guide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master the fruit evolution system and understand every merge combination to maximize your scoring
                potential
              </p>
            </div>

            {/* Fruit Evolution Chain */}
            <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                🍒➡️🍉 Complete Fruit Evolution Chain
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {fruitEvolution.map((fruit, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center game-shadow">
                    <div className="text-4xl mb-2">{fruit.emoji}</div>
                    <h4 className="font-semibold text-gray-900 text-sm">{fruit.name}</h4>
                    <p className="text-xs text-gray-600">{fruit.size}</p>
                    <p className="text-xs font-medium text-green-600">{fruit.points} pts</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 Merging Rules & Tips</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">✅ Successful Merging</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Two identical fruits must physically touch</li>
                      <li>• Merging happens instantly upon contact</li>
                      <li>• New fruit appears at the contact point</li>
                      <li>• Chain reactions can occur automatically</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">⚠️ Common Mistakes</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fruits must be exactly the same type</li>
                      <li>• Separated fruits won't merge</li>
                      <li>• Physics can prevent intended merges</li>
                      <li>• Container overflow stops the game</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Merging Techniques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🔄</span>
                  Chain Merging
                </h3>
                <p className="text-gray-700 mb-4">
                  Set up multiple identical fruits in sequence to create cascading merges. One strategic drop can
                  trigger 3-5 consecutive merges.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Pro Tip:</strong> Position fruits in a line or cluster for maximum chain potential.
                </div>
              </article>

              <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Precision Dropping
                </h3>
                <p className="text-gray-700 mb-4">
                  Use the container walls and existing fruits to guide new drops exactly where you want them to land.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Pro Tip:</strong> Aim for the edges of fruits to control bounce direction.
                </div>
              </article>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🏗️</span>
                  Foundation Building
                </h3>
                <p className="text-gray-700 mb-4">
                  Create stable base layers with larger fruits to support smaller ones and prevent chaotic rolling.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Pro Tip:</strong> Use corners for your biggest fruits - they're the most stable positions.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section 5: Strategy Tips */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Pro Strategy Tips for Suika Game
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-12">
              Master the Art of Fruit Merging & Watermelon Creation
            </h3>

            <div className="bg-white rounded-xl p-8 game-shadow mb-8">
              <p className="text-xl text-gray-600 mb-8 text-center">
                Want to win more often? Here are expert strategies from top Suika Game players:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <article className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Target">
                      🎯
                    </span>
                    Plan Your Moves Ahead
                  </h4>
                  <p className="text-gray-700">
                    Don't drop fruits randomly—watch the fruit queue and plan your combinations for maximum efficiency.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Location">
                      📍
                    </span>
                    Keep Center Area Low
                  </h4>
                  <p className="text-gray-700">
                    Build higher stacks near the walls to give yourself room in the middle for strategic merges.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="House">
                      🏠
                    </span>
                    Use Corners Strategically
                  </h4>
                  <p className="text-gray-700">
                    Place larger fruits in corners where they're supported by walls for maximum stability.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Warning">
                      ⚠️
                    </span>
                    Avoid Container Overflow
                  </h4>
                  <p className="text-gray-700">
                    Monitor your fill level and prioritize merging when the container gets 70% full.
                  </p>
                </article>
              </div>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3" role="img" aria-label="Lightning">
                    ⚡
                  </span>
                  Master Chain Combos
                </h4>
                <p className="text-gray-700">
                  Learn to trigger multiple merges with a single strategic fruit drop for maximum points.
                </p>
              </article>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Practice makes perfect! The more you play, the more intuitive your fruit placement becomes. 🍉
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Suika Game High Score Challenge */}
        <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                🏆 Suika Game High Score Challenge – Can You Reach the Watermelon?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Think you're good at Suika Game? Test your skills and aim for the ultimate high score!
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 game-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🎯</span>
                    High Score Benchmarks
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-bronze-50 to-bronze-100 rounded-lg p-4 border-l-4 border-yellow-600">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Beginner</span>
                        <span className="font-bold text-yellow-600">500+ points</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">First few successful merges</p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-gray-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Intermediate</span>
                        <span className="font-bold text-gray-600">1,500+ points</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Reaching larger fruits consistently</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4 border-l-4 border-yellow-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Advanced</span>
                        <span className="font-bold text-yellow-600">3,000+ points</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Excellent - mastery of combos and strategy</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Expert</span>
                        <span className="font-bold text-green-600">5,000+ points</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Watermelon achieved - true mastery!</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🍒</span>
                    Complete Fruit Order
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      The game includes <strong>11 fruits</strong> in order of size:
                    </p>
                    <div className="text-sm text-gray-800 space-y-1 mb-4">
                      <div className="flex items-center justify-between">
                        <span>🍒 Cherry</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍓 Strawberry</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍇 Grape</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍊 Dekopon</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🟠 Persimmon</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍎 Apple</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍐 Pear</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍑 Peach</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍍 Pineapple</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍈 Melon</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between font-bold text-green-600">
                        <span>🍉 Watermelon</span>
                        <span className="text-lg">🏆</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  Pro Challenge Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">
                      <strong>🎯 Strategic Placement:</strong>
                    </p>
                    <p>Stay low in the middle, stack near the edges, and chain merges to reach the top.</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>⏱️ Speed Challenge:</strong>
                    </p>
                    <p>
                      Some speedrunners have reached watermelon in just <strong>2:20 minutes!</strong>
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🧠 Physics Awareness:</strong>
                    </p>
                    <p>Merging up to the watermelon requires patience, planning, and physics mastery.</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🔄 Combo Mastery:</strong>
                    </p>
                    <p>Chain multiple merges together for exponential point gains and space efficiency.</p>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Can you beat your personal best?</h3>
                <p className="text-gray-700 mb-6">
                  Challenge yourself to reach new heights and join the elite players who've mastered the watermelon
                  puzzle!
                </p>
                <a
                  href="/#game"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-colors duration-200 text-lg"
                >
                  🎮 Play Suika Game
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Latest Suika Game Updates - 简版博客更新入口 */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">📌 Latest Suika Game Updates & News</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest game variants, features, and community highlights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {latestUpdates.map((update, index) => (
                <article key={index} className="bg-white rounded-xl p-6 game-shadow card-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {update.category}
                      </span>
                      <time className="text-sm text-gray-500" dateTime={update.date}>
                        {new Date(update.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link href={update.link} className="hover:text-indigo-600 transition-colors">
                      {update.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{update.description}</p>

                  <Link
                    href={update.link}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-xl p-8 game-shadow text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔔 Stay Updated with Suika Game News</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get notified about new game variants, strategy guides, and exclusive content. Join our community of
                watermelon puzzle enthusiasts!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-colors duration-200">
                  Subscribe
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">No spam, unsubscribe anytime. We respect your privacy.</p>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Frequently Asked Questions About Suika Game
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-8 game-shadow"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: SEO Content Block */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              About Suika Game: The Viral Japanese Watermelon Puzzle Phenomenon
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                <strong>Suika Game</strong>, also known as the <strong>Watermelon Game</strong>, is a viral puzzle
                phenomenon that originated in Japan and has captivated millions of players worldwide. This addictive{" "}
                <strong>fruit merge game</strong> challenges players to drop and strategically position fruits in a
                container, creating larger fruits through physics-based merging mechanics. The ultimate goal is to merge
                fruit combinations until you successfully create a <strong>watermelon</strong>, the largest and most
                rewarding fruit in this engaging <strong>watermelon puzzle</strong>.
              </p>

              <p>
                The gameplay mechanics of <strong>Suika Game</strong> rely on realistic gravity and physics simulation,
                where similar fruits automatically combine to create the next tier in the fruit evolution chain. As
                players progress in this <strong>merge fruit experience</strong>, they must carefully manage limited
                container space while planning strategic fruit placements to prevent overflow. The{" "}
                <strong>watermelon puzzle</strong> becomes increasingly challenging as the container fills, requiring
                players to think several moves ahead and create efficient chain reactions for maximum scoring potential.
              </p>

              <p>
                What started as a niche <strong>Japanese puzzle game</strong> quickly exploded into a global gaming
                sensation thanks to viral social media content on TikTok, YouTube gaming channels, and VTuber live
                streams. The simple yet deeply engaging <strong>Suika Game mechanics</strong> made it perfect for
                short-form video content, with players sharing satisfying <strong>merge fruit moments</strong> and
                high-score achievements. This organic viral growth transformed the humble{" "}
                <strong>watermelon puzzle</strong> into an international phenomenon that continues to attract new
                players daily.
              </p>

              <p>
                Today, the <strong>Suika Game community</strong> has created countless creative variants and remixes,
                from celebrity-themed versions to anime crossovers, each maintaining the core{" "}
                <strong>merge fruit gameplay</strong> while adding unique visual themes and mechanics. Whether you're a
                casual player seeking relaxing puzzle entertainment or a competitive gamer aiming for leaderboard
                dominance, this <strong>watermelon puzzle</strong> offers endless replay value through its perfect blend
                of simple controls, strategic depth, and satisfying physics-based <strong>fruit merging action</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Language Switcher */}
        <section id="language-switcher" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Play Suika Game in Your Language</h2>
            <p className="text-xl text-gray-600 mb-12">Experience the watermelon puzzle in your preferred language</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}`}
                  className="bg-white p-6 rounded-xl game-shadow card-hover flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors duration-200"
                  hrefLang={lang.code}
                  aria-label={`Play Suika Game in ${lang.name}`}
                >
                  <span className="text-3xl" role="img" aria-label={`${lang.name} flag`}>
                    {lang.flag}
                  </span>
                  <span className="font-semibold text-gray-900 text-lg">{lang.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer with Legal Links */}
        <footer className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="mb-6">
                  <span className="text-4xl" role="img" aria-label="Watermelon">
                    🍉
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Suika Games</h3>
                <p className="text-gray-400 mb-6">
                  The ultimate destination for Suika Game and watermelon puzzle variants. Play free online with no
                  downloads required.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        Play Suika Game
                      </Link>
                    </li>
                    <li>
                      <Link href="/#games-like-suika" className="text-gray-400 hover:text-white transition-colors">
                        Game Variants
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2025 Suika Games. All rights reserved. • Play responsibly and have fun! 🎮
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
