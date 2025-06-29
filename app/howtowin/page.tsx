import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Win Suika Game - Expert Tips & Winning Strategies",
  description:
    "Master Suika Game with proven winning strategies. Learn advanced techniques, fruit placement tips, and expert tactics to create watermelons consistently.",
  alternates: {
    canonical: "https://suika.games/howtowin",
  },
}

export default function HowToWinPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block">🏆</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Win Suika Game - Expert Tips & Winning Strategies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of fruit merging with proven strategies that will help you create watermelons consistently
            and achieve record-breaking high scores.
          </p>
        </div>

        <div className="space-y-8">
          {/* Quick Start Guide */}
          <div className="bg-white rounded-xl p-8 game-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">🚀</span>
              Quick Start: 5 Essential Winning Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Build Stable Foundations</h3>
                <p className="text-gray-700">
                  Always start by placing fruits along the bottom edges. This creates a stable base that prevents
                  chaotic rolling and gives you better control over fruit positioning.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Use Corner Strategy</h3>
                <p className="text-gray-700">
                  Place your largest fruits in corners where they're supported by two walls. This maximizes stability
                  and prevents them from rolling into unwanted positions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Plan Chain Reactions</h3>
                <p className="text-gray-700">
                  Set up multiple identical fruits near each other, then trigger cascading merges with strategic
                  placement. One well-planned drop can create multiple merges.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Monitor Fill Level</h3>
                <p className="text-gray-700">
                  Keep the center area lower than the sides. When the container gets 70% full, focus on creating merges
                  rather than adding new fruits.
                </p>
              </div>
            </div>
          </div>

          {/* Advanced Strategies */}
          <div className="bg-white rounded-xl p-8 game-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">🧠</span>
              Advanced Winning Strategies
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Waterfall Technique</h3>
                <p className="text-gray-700 mb-3">
                  Create a "waterfall" effect by building higher stacks on one side and letting fruits naturally roll
                  down to create merges. This technique is especially effective for creating chain reactions with
                  smaller fruits.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Pro Tip:</strong> Use the physics engine to your advantage - fruits will naturally settle in
                  the most stable position.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Sandwich Method</h3>
                <p className="text-gray-700 mb-3">
                  Place identical fruits on opposite sides of a larger fruit, then drop a matching fruit on top to
                  create a "sandwich" merge. This technique helps you merge fruits even when they're not directly
                  touching.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Pro Tip:</strong> This works best with medium-sized fruits like oranges and apples.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Space Management</h3>
                <p className="text-gray-700 mb-3">
                  When your container is nearly full, focus on creating merges in the most congested areas first.
                  Sometimes it's better to make a suboptimal merge than to risk game over by adding more fruits.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Pro Tip:</strong> Learn to recognize when you're in "danger zone" - usually when fruits reach
                  80% of container height.
                </p>
              </div>
            </div>
          </div>

          {/* Fruit Evolution Guide */}
          <div className="bg-white rounded-xl p-8 game-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">🍎</span>
              Fruit Evolution Mastery
            </h2>
            <p className="text-gray-600 mb-6">
              Understanding the fruit evolution sequence is crucial for planning your moves and maximizing scoring
              potential.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <span className="text-3xl block mb-2">🍒</span>
                <p className="text-sm font-medium">Cherry (Start)</p>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <span className="text-3xl block mb-2">🍓</span>
                <p className="text-sm font-medium">Strawberry</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <span className="text-3xl block mb-2">🍇</span>
                <p className="text-sm font-medium">Grape</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <span className="text-3xl block mb-2">🍊</span>
                <p className="text-sm font-medium">Orange</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <span className="text-3xl block mb-2">🍋</span>
                <p className="text-sm font-medium">Lemon</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <span className="text-3xl block mb-2">🍎</span>
                <p className="text-sm font-medium">Apple</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <span className="text-3xl block mb-2">🍐</span>
                <p className="text-sm font-medium">Pear</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-300">
                <span className="text-3xl block mb-2">🍉</span>
                <p className="text-sm font-medium">Watermelon (Goal!)</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Scoring Strategy</h3>
              <p className="text-gray-700">
                Each merge gives you points based on the resulting fruit size. Focus on creating larger fruits rather
                than many small merges. A single watermelon is worth more than dozens of small fruit combinations.
              </p>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-white rounded-xl p-8 game-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Common Mistakes to Avoid
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Rushing Your Moves</h3>
                <p className="text-red-700">
                  Taking time to plan your next 2-3 moves is always better than dropping fruits randomly. Patience is
                  key to high scores.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Ignoring Physics</h3>
                <p className="text-red-700">
                  Fruits will bounce and roll realistically. Always consider how physics will affect your placement
                  before dropping.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Filling the Center First</h3>
                <p className="text-red-700">
                  Keep the center area lower than the sides. A high center stack leads to quick game over situations.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Not Planning Ahead</h3>
                <p className="text-red-700">
                  Always look at the next fruit in queue and plan where it will be most useful for creating future
                  merges.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Exercises */}
          <div className="bg-white rounded-xl p-8 game-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">💪</span>
              Practice Exercises
            </h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Exercise 1: Foundation Building</h3>
                <p className="text-gray-700">
                  Play 5 games focusing only on building stable foundations. Don't worry about high scores - just
                  practice creating solid base layers along the container edges.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Exercise 2: Chain Reaction Training</h3>
                <p className="text-gray-700">
                  Try to create at least one chain reaction (3+ consecutive merges) in each game. Focus on setting up
                  clusters of identical fruits before triggering the chain.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Exercise 3: Space Management</h3>
                <p className="text-gray-700">
                  Play games where you intentionally let the container get 80% full, then practice creating merges to
                  free up space without losing the game.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Put These Strategies to Work?</h3>
          <p className="text-gray-700 mb-6 text-lg">
            Now that you know the winning strategies, it's time to practice! Apply these techniques and watch your
            scores soar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 text-lg"
            >
              🎮 Play Suika Game Now
            </Link>
            <Link
              href="/#games-like-suika"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              🌟 Try Game Variants
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
