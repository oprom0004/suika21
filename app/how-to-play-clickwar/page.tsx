import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Play ClickWar - Step-by-Step Guide & Winning Strategies",
  description: "Learn how to play ClickWar with this complete guide. Discover gameplay steps, winning strategies, tips, and answers to common questions about the world domination strategy game ClickWar.",
  keywords: [
    "how to play clickwar",
    "clickwar guide",
    "clickwar strategy",
    "world domination game",
    "strategy game tips",
    "clickwar winning tips",
    "clickwar faq",
    "how to win clickwar",
    "clickwar tutorial"
  ].join(", ")
};

export default function HowToPlayClickWarPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <section className="max-w-3xl mx-auto bg-gray-800/60 rounded-xl p-8 border border-gray-700 mt-10">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">How to Play ClickWar</h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          ClickWar is a world domination strategy game where you conquer countries, launch missile attacks, and defend your empire. This guide will teach you the basics, advanced strategies, and answer common questions to help you become a ClickWar champion.
        </p>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Step-by-Step Gameplay</h2>
        <ol className="list-decimal list-inside text-gray-200 space-y-3 mb-8">
          <li>
            <strong>Select a Country:</strong> Click on any country on the map to view its stats and make it your target.
          </li>
          <li>
            <strong>Launch Missiles:</strong> Use the missile button to attack enemy countries. Each hit reduces their HP.
          </li>
          <li>
            <strong>Conquer & Expand:</strong> When a country's HP drops to zero, you capture it and grow your empire.
          </li>
          <li>
            <strong>Defend Your Territories:</strong> Click your own countries to heal and add shields, protecting them from enemy attacks.
          </li>
        </ol>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Winning Strategies & Tips</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2 mb-8">
          <li><strong>Prioritize Weak Targets:</strong> Attack countries with low HP for quick expansion.</li>
          <li><strong>Balance Offense and Defense:</strong> Don’t neglect your own territories—heal and shield them regularly.</li>
          <li><strong>Resource Management:</strong> Use your missiles wisely and plan attacks for maximum efficiency.</li>
          <li><strong>Map Awareness:</strong> Zoom and pan the map to spot strategic opportunities and threats.</li>
          <li><strong>Adapt to Opponents:</strong> Watch other players’ moves and adjust your strategy accordingly.</li>
        </ul>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Frequently Asked Questions (FAQ)</h2>
        <div className="mb-8 text-gray-200 space-y-4">
          <div>
            <strong>Q: Is ClickWar free to play?</strong>
            <div>A: Yes, ClickWar is completely free and can be played directly in your browser.</div>
          </div>
          <div>
            <strong>Q: Can I play ClickWar on mobile?</strong>
            <div>A: Absolutely! ClickWar is fully responsive and works on all devices.</div>
          </div>
          <div>
            <strong>Q: How do I defend my countries?</strong>
            <div>A: Click your own territories to heal and add shields. Balance attack and defense for best results.</div>
          </div>
          <div>
            <strong>Q: What is the goal of ClickWar?</strong>
            <div>A: Conquer as many countries as possible and become the global leader!</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg text-center">🏠 Back to Home</Link>
          <a href="/what-is-clickwar-game" className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg text-center">❓ What is ClickWar?</a>
        </div>
      </section>
    </main>
  );
}