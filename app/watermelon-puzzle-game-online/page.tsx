import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Watermelon Puzzle Game Online - Play Free Suika Game Browser",
  description:
    "Play the viral watermelon puzzle game online for free. No downloads needed - merge fruits to create watermelons in your browser. Mobile-friendly Suika Game.",
  alternates: {
    canonical: "https://suika.games/watermelon-puzzle-game-online",
  },
}

export default function WatermelonPuzzleGameOnlinePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className="text-6xl mb-4 block">🍉</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Watermelon Puzzle Game Online - Play Free in Browser
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the viral watermelon puzzle sensation directly in your browser. No downloads, no registration -
            just pure fruit-merging fun that's taken the world by storm.
          </p>
        </div>

        {/* Game Embed */}
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-4xl game-shadow rounded-3xl overflow-hidden bg-white p-2">
            <iframe
              src="https://suikagamejp.com/game/game-en"
              title="Watermelon Puzzle Game Cloud Version Online"
              className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              allow="gamepad; microphone; camera"
            />
          </div>
        </div>

        {/* Why Play Online */}
        <div className="bg-white rounded-xl p-8 game-shadow mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Play Watermelon Puzzle Game Online?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <span className="text-4xl block mb-4">🚀</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Play</h3>
              <p className="text-gray-700">
                No downloads or installations required. Click and play immediately in any modern web browser on any
                device.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <span className="text-4xl block mb-4">📱</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Optimized</h3>
              <p className="text-gray-700">
                Perfect touch controls for smartphones and tablets. Play anywhere, anytime with responsive design that
                adapts to your screen.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <span className="text-4xl block mb-4">🆓</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Completely Free</h3>
              <p className="text-gray-700">
                No hidden costs, no premium features locked behind paywalls. Enjoy the full watermelon puzzle experience
                at zero cost.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <span className="text-4xl block mb-4">🔒</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe & Secure</h3>
              <p className="text-gray-700">
                No suspicious downloads or malware risks. Play safely in your browser with our trusted, verified game
                platform.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
              <span className="text-4xl block mb-4">⚡</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Loading</h3>
              <p className="text-gray-700">
                Optimized for quick loading times and smooth gameplay. Start playing within seconds of visiting the
                page.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
              <span className="text-4xl block mb-4">🌍</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Access</h3>
              <p className="text-gray-700">
                Available worldwide with multi-language support. Join millions of players from around the globe.
              </p>
            </div>
          </div>
        </div>

        {/* Game Features */}
        <div className="bg-white rounded-xl p-8 game-shadow mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Watermelon Puzzle Game Features</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">🎮 Gameplay Mechanics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Physics-based fruit dropping and merging system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>11 different fruit types from cherry to watermelon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Realistic gravity and collision physics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Strategic placement and chain reaction opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Progressive difficulty as container fills up</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">🏆 Scoring & Progression</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Points awarded for each successful fruit merge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Bonus points for creating larger fruits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>High score tracking and personal bests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Achievement system for reaching milestones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Endless gameplay with increasing challenge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tips for Online Play */}
        <div className="bg-white rounded-xl p-8 game-shadow mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tips for Online Watermelon Puzzle</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                Master the Basics
              </h3>
              <p className="text-gray-700">
                Start by understanding fruit evolution: cherries merge into strawberries, strawberries into grapes, and
                so on. Plan your moves to create efficient merge chains.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-3">📐</span>
                Use Physics Wisely
              </h3>
              <p className="text-gray-700">
                The online version features realistic physics. Use walls and existing fruits to guide new drops into
                optimal positions for maximum merging potential.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-3">⏰</span>
                Take Your Time
              </h3>
              <p className="text-gray-700">
                There's no time pressure in the watermelon puzzle game. Take time to analyze the situation and plan your
                next several moves for optimal results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-3">🏗️</span>
                Build Smart Foundations
              </h3>
              <p className="text-gray-700">
                Create stable base layers along the container edges. This prevents chaotic fruit movement and gives you
                better control over the puzzle progression.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Master the Watermelon Puzzle?</h3>
          <p className="text-gray-700 mb-6 text-lg max-w-2xl mx-auto">
            Join millions of players worldwide who have fallen in love with this addictive fruit-merging puzzle. Start
            your journey to watermelon mastery today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/howtowin"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 text-lg"
            >
              📚 Learn Winning Strategies
            </Link>
            <Link
              href="/#games-like-suika"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              🎮 Try Other Variants
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
