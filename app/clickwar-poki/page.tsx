import type { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = {
  title: "ClickWar Poki - Play ClickWar Online | Poki Style Strategy Game",
  description: "Play ClickWar in the style of Poki! Discover how to enjoy ClickWar online, tips for school and work, and why it's a hit among Poki fans. Free browser-based strategy game.",
  keywords: [
    "clickwar poki",
    "clickwar online",
    "poki style game",
    "browser strategy game",
    "free online war game",
    "clickwar school game",
    "clickwar work game",
    "no download strategy game",
    "poki clickwar",
    "online war strategy",
  ].join(", "),
  openGraph: {
    title: "ClickWar Poki - Play ClickWar Online | Poki Style Strategy Game",
    description: "Play ClickWar in the style of Poki! Discover how to enjoy ClickWar online, tips for school and work.",
  },
}

export default function ClickwarPokiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">ClickWar</span> Poki
      </h1>
          <p className="text-xl text-gray-300 mb-8">
        Play ClickWar online just like on Poki! Enjoy the world domination strategy game anywhere, anytime.
      </p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-full inline-block font-semibold mb-8">
  🚀 Play ClickWar Now
</Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* What is ClickWar Poki */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">What is ClickWar Poki?</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong>ClickWar Poki</strong> refers to playing the popular ClickWar strategy game in a style and experience similar to Poki. Whether you're at school, work, or home, you can enjoy ClickWar online with no downloads or registration required, just like the games you love on Poki.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                This <strong>browser-based strategy game</strong> combines the addictive world domination mechanics of ClickWar with the accessibility and convenience that Poki fans expect. Launch missiles, capture countries, and expand your empire in this engaging tactical warfare experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Perfect for quick gaming sessions during breaks, ClickWar Poki offers the same strategic depth and competitive gameplay as the original, but optimized for the casual gaming experience that Poki users love.
              </p>
            </div>
          </div>

          {/* Why ClickWar is Perfect for Poki Fans */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why ClickWar is Perfect for Poki Fans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-3xl mr-3">⚡</span>
                  Instant Play Experience
                </h3>
                <p className="text-gray-300 mb-4">
                  Just like your favorite Poki titles, ClickWar loads instantly in your browser with no downloads, installations, or waiting times required.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>No registration needed</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Works on any device</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Instant browser access</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-3xl mr-3">🎯</span>
                  Strategic Gameplay
                </h3>
                <p className="text-gray-300 mb-4">
                  ClickWar offers the perfect balance of simple controls and deep strategy that Poki fans appreciate - easy to learn, challenging to master.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold mt-1">✓</span>
                    <span>Simple click mechanics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold mt-1">✓</span>
                    <span>Deep strategic depth</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold mt-1">✓</span>
                    <span>Competitive gameplay</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-3xl mr-3">🏫</span>
                  School & Work Friendly
                </h3>
                <p className="text-gray-300 mb-4">
                  Like many Poki titles, ClickWar is perfect for quick gaming sessions during breaks, lunch hours, or after school activities.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-500 font-bold mt-1">✓</span>
                    <span>No downloads required</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-500 font-bold mt-1">✓</span>
                    <span>Works on restricted networks</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-500 font-bold mt-1">✓</span>
                    <span>Quick session gameplay</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-3xl mr-3">🌍</span>
                  Global Competition
                </h3>
                <p className="text-gray-300 mb-4">
                  Experience real-time battles with players worldwide, just like the competitive multiplayer games that make Poki so engaging.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-500 font-bold mt-1">✓</span>
                    <span>Real-time multiplayer</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-500 font-bold mt-1">✓</span>
                    <span>Global leaderboards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-500 font-bold mt-1">✓</span>
                    <span>Live missile battles</span>
                  </li>
        </ul>
              </div>
            </div>
          </div>

          {/* How to Play ClickWar Poki Style */}
          <div className="bg-gradient-to-r from-blue-900/30 to-red-900/30 rounded-xl p-8 border border-gray-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Play ClickWar Poki Style</h2>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Open Your Browser</h3>
                  <p>Just like playing on Poki, simply open any modern web browser (Chrome, Firefox, Safari, Edge) and navigate to ClickWar.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Start Playing Immediately</h3>
                  <p>No downloads, no installations, no waiting - ClickWar loads instantly just like your favorite Poki titles.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Choose Your Strategy</h3>
                  <p>Select your starting country and begin your world domination campaign. Click to attack, click to defend - simple controls for maximum fun!</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Compete Globally</h3>
                  <p>Join the worldwide ClickWar community and compete against players from around the globe in real-time strategic battles.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ClickWar vs Other Poki Games */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">ClickWar vs Other Poki Strategy Titles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Action</h3>
                <p className="text-gray-400 mb-4">
                  Unlike turn-based strategy games, ClickWar features live missile battles and real-time global competition.
                </p>
                <div className="bg-green-900/30 rounded-lg p-3">
                  <p className="text-sm text-green-300">
                    <strong>Unique Feature:</strong> Watch missiles fly across the globe in real-time
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold text-white mb-3">Global Scale</h3>
                <p className="text-gray-400 mb-4">
                  Every country in the world is a potential battlefield, offering unprecedented strategic depth and replayability.
                </p>
                <div className="bg-blue-900/30 rounded-lg p-3">
                  <p className="text-sm text-blue-300">
                    <strong>Unique Feature:</strong> Conquer the entire world map
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                <div className="text-4xl mb-4">⚔️</div>
                <h3 className="text-xl font-bold text-white mb-3">Multiplayer Focus</h3>
                <p className="text-gray-400 mb-4">
                  While many strategy games are single-player, ClickWar emphasizes global multiplayer competition and real-time interaction.
                </p>
                <div className="bg-purple-900/30 rounded-lg p-3">
                  <p className="text-sm text-purple-300">
                    <strong>Unique Feature:</strong> Compete with players worldwide simultaneously
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips for Poki Players */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Tips for Poki Players New to ClickWar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">🎯 Start Small</h3>
                <p className="text-gray-300 mb-4">
                  If you're used to quick Poki sessions, begin with smaller countries that have lower HP. This gives you quick wins and helps you understand the ClickWar mechanics.
                </p>
                <p className="text-gray-300">
                  Perfect for short gaming breaks - you can capture several small countries in just a few minutes!
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">⚡ Quick Sessions</h3>
                <p className="text-gray-300 mb-4">
                  ClickWar is perfect for the short, intense gaming sessions that Poki fans love. You can make significant progress in just 5-10 minutes.
                </p>
                <p className="text-gray-300">
                  Great for school breaks, lunch hours, or quick work breaks - just like your favorite Poki titles!
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-xl p-8 border border-blue-500">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience ClickWar Poki Style?</h2>
              <p className="text-gray-200 mb-6 text-lg">
                Join millions of players worldwide in the ultimate browser-based strategy game experience
              </p>
              <Link 
                href="/"
                className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                🚀 Play ClickWar Now
              </Link>
              <p className="text-gray-300 mt-4 text-sm">
                No downloads • No registration • Instant play • Works everywhere
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 