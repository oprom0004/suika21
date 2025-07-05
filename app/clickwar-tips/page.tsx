import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClickWar Tips - Best Strategies & Pro Tips for Winning",
  description: "Discover the best ClickWar tips and tricks to dominate the world. Learn advanced strategies, pro tips, and answers to common questions for ClickWar players.",
  keywords: [
    "clickwar tips",
    "clickwar tricks",
    "clickwar pro tips",
    "clickwar advice",
    "clickwar winning tips",
    "clickwar gameplay tips",
    "clickwar faq"
  ].join(", ")
};

export default function ClickWarTipsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <section className="max-w-3xl mx-auto bg-gray-800/60 rounded-xl p-8 border border-gray-700 mt-10">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">ClickWar Tips & Tricks</h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Master ClickWar with these expert tips and tricks. Improve your strategy, outsmart your opponents, and become a world domination champion!
        </p>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Top ClickWar Tips</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2 mb-8">
          <li><strong>Focus on Weak Targets:</strong> Attack countries with low HP for quick expansion.</li>
          <li><strong>Chain Attacks:</strong> Plan consecutive attacks to capture multiple countries in a row.</li>
          <li><strong>Defend Your Base:</strong> Always heal and shield your home country to avoid losing your foundation.</li>
          <li><strong>Monitor the Map:</strong> Watch for enemy movements and adapt your strategy in real time.</li>
          <li><strong>Resource Management:</strong> Use your missiles and shields wisely for maximum impact.</li>
          <li><strong>Stay Flexible:</strong> Change your tactics based on the current game situation.</li>
        </ul>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Advanced Tips & Pro Advice</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2 mb-8">
          <li><strong>Coordinate with Allies:</strong> Team up with other players for joint attacks and defense.</li>
          <li><strong>Exploit Weaknesses:</strong> Target opponents who are distracted or under attack by others.</li>
          <li><strong>Territory Clustering:</strong> Capture neighboring countries to create strong regional control.</li>
          <li><strong>Timing is Key:</strong> Launch attacks when opponents are least prepared.</li>
        </ul>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">FAQ: ClickWar Tips</h2>
        <div className="mb-8 text-gray-200 space-y-3">
          <div>
            <strong>Q: What is the best way to start in ClickWar?</strong>
            <div>A: Focus on small, weak countries to build your empire quickly and safely.</div>
          </div>
          <div>
            <strong>Q: How do I defend my territories?</strong>
            <div>A: Regularly heal and shield your countries, especially your home base and key regions.</div>
          </div>
          <div>
            <strong>Q: How can I win more games?</strong>
            <div>A: Balance offense and defense, adapt your strategy, and use pro tips from this page!</div>
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
