import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "What is ClickWar Game? - World Domination Strategy Game Explained",
  description: "Discover ClickWar - the addictive world domination strategy game where you launch missiles, conquer countries, and expand your global empire. Learn what makes ClickWar unique!",
  keywords: [
    "what is clickwar",
    "clickwar game",
    "clickwar explained",
    "world domination game",
    "strategy game",
    "missile game",
    "conquer countries game",
    "global conquest game",
    "clickwar gameplay",
    "clickwar features",
  ].join(", "),
  openGraph: {
    title: "What is ClickWar Game? - World Domination Strategy Game Explained",
    description: "Discover ClickWar - the addictive world domination strategy game where you launch missiles and conquer countries!",
  },
}

export default function WhatIsClickWarPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What is <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">ClickWar</span>?
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            The ultimate world domination strategy game where you conquer countries through missile warfare
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Game Overview */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">🎯 ClickWar Game Overview</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong>ClickWar</strong> is an addictive browser-based strategy game where your goal is to achieve world domination by launching missiles at countries and conquering them. Starting with your home country, you must strategically attack enemy territories, reduce their HP to zero, and expand your global empire.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The game combines simple click mechanics with deep strategic thinking. You'll need to balance offensive attacks with defensive management, choose your targets wisely, and maintain your captured territories through healing and shielding.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">🚀 ClickWar Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-3xl mr-3">⚔️</span>
                  Missile Warfare
                </h3>
                <p className="text-gray-300 mb-4">
                  Launch strategic missile attacks on any country in the world. Watch your cyan missiles fly across the globe as you wage war for domination.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-3xl mr-3">🗺️</span>
                  Global Conquest
                </h3>
                <p className="text-gray-300 mb-4">
                  Conquer countries across all continents. Every captured territory becomes part of your expanding empire and contributes to your global dominance.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-3xl mr-3">🛡️</span>
                  Defense System
                </h3>
                <p className="text-gray-300 mb-4">
                  Protect your territories with shields and healing. Strategic defense is crucial to maintaining your empire against enemy attacks.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-3xl mr-3">🎮</span>
                  Real-time Strategy
                </h3>
                <p className="text-gray-300 mb-4">
                  Experience real-time strategic gameplay where every decision matters. Plan your conquests, manage resources, and adapt to changing battlefield conditions.
                </p>
              </div>
            </div>
          </div>

          {/* How to Play */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">🎮 How ClickWar Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">1. Select Target</h3>
                <p className="text-gray-300">
                  Click on any country to select it and view its HP and status
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">2. Launch Attack</h3>
                <p className="text-gray-300">
                  Click the missile button to attack and reduce enemy HP
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-white mb-3">3. Conquer & Expand</h3>
                <p className="text-gray-300">
                  When HP reaches zero, capture the country and expand your empire
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Conquest?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://clickwar.app"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-xl hover:scale-105 transition-transform"
              >
                🚀 Play ClickWar Now
              </a>
              <Link
                href="/how-to-play-clickwar"
                className="bg-gray-700 text-white font-bold py-4 px-8 rounded-xl border border-gray-600 hover:bg-gray-600 transition-colors"
              >
                📖 Learn How to Play
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 