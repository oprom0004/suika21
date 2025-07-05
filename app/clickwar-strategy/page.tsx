import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClickWar Strategy Guide - Advanced Tactics for World Domination",
  description: "Master ClickWar with this advanced strategy guide. Learn phase-based tactics, expert advice, and answers to common questions to dominate the world in ClickWar.",
  keywords: [
    "clickwar strategy",
    "clickwar strategy guide",
    "clickwar advanced tactics",
    "clickwar domination strategy",
    "clickwar conquest tips",
    "clickwar expert advice",
    "clickwar faq"
  ].join(", ")
};

export default function ClickWarStrategyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <section className="max-w-3xl mx-auto bg-gray-800/60 rounded-xl p-8 border border-gray-700 mt-10">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">ClickWar Strategy Guide</h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Unlock the secrets to world domination in ClickWar! Use these advanced strategies and expert tactics to outplay your rivals and conquer the globe.
        </p>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Phase-Based Strategy</h2>
        <ol className="list-decimal list-inside text-gray-200 space-y-2 mb-8">
          <li><strong>Early Game:</strong> Focus on capturing small, weak countries to build your base and resources.</li>
          <li><strong>Mid Game:</strong> Expand aggressively, connect your territories, and establish regional dominance.</li>
          <li><strong>Late Game:</strong> Target major powers, coordinate large-scale attacks, and secure global victory.</li>
        </ol>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Expert Strategy Tips</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2 mb-8">
          <li><strong>Territory Clustering:</strong> Control neighboring countries for stronger defense and easier expansion.</li>
          <li><strong>Multi-Front Attacks:</strong> Attack from several directions to overwhelm opponents.</li>
          <li><strong>Resource Optimization:</strong> Use missiles and shields efficiently to maximize your impact.</li>
          <li><strong>Adapt to Opponents:</strong> Watch your rivals and adjust your tactics to counter their moves.</li>
        </ul>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">FAQ: ClickWar Strategy</h2>
        <div className="mb-8 text-gray-200 space-y-3">
          <div>
            <strong>Q: What is the best overall strategy in ClickWar?</strong>
            <div>A: Start small, expand smart, and always balance offense with defense. Adapt to the game flow!</div>
          </div>
          <div>
            <strong>Q: How do I beat stronger opponents?</strong>
            <div>A: Use multi-front attacks, exploit weaknesses, and team up with others if possible.</div>
          </div>
          <div>
            <strong>Q: How do I maintain control of my empire?</strong>
            <div>A: Regularly heal and shield your territories, and keep your regions connected for support.</div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/"
            className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg text-center"
          >
            🏠 Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}
