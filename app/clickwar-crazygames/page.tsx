import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play ClickWar on CrazyGames - Free Online Strategy Game",
  description: "Play ClickWar on CrazyGames for free! Discover the world domination strategy game, learn how to play, and see why ClickWar is a hit on CrazyGames.",
  keywords: [
    "clickwar crazygames",
    "play clickwar on crazygames",
    "crazygames strategy game",
    "clickwar free online",
    "crazygames world domination",
    "clickwar browser game"
  ].join(", ")
};

export default function ClickWarCrazyGamesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <section className="max-w-3xl mx-auto bg-gray-800/60 rounded-xl p-8 border border-gray-700 mt-10">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Play ClickWar on CrazyGames</h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Enjoy <strong>ClickWar</strong> on CrazyGames – the ultimate world domination strategy game! Launch missiles, conquer countries, and compete with players worldwide, all for free in your browser.
        </p>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Why Play ClickWar on CrazyGames?</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2 mb-8">
          <li>Instant play – no download or registration required</li>
          <li>100% free and accessible on any device</li>
          <li>Compete with a huge CrazyGames community</li>
          <li>Safe, secure, and always up-to-date</li>
        </ul>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">ClickWar Gameplay Highlights</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2 mb-8">
          <li>Strategic world conquest – capture countries and expand your empire</li>
          <li>Real-time multiplayer action</li>
          <li>Missile attacks, defense, and resource management</li>
          <li>Easy to learn, hard to master</li>
        </ul>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">FAQ: ClickWar on CrazyGames</h2>
        <div className="mb-8 text-gray-200 space-y-3">
          <div>
            <strong>Q: Is ClickWar free to play on CrazyGames?</strong>
            <div>A: Yes! You can play ClickWar for free on CrazyGames with no registration or download needed.</div>
          </div>
          <div>
            <strong>Q: Can I play ClickWar on mobile?</strong>
            <div>A: Absolutely! ClickWar on CrazyGames works on all devices, including phones and tablets.</div>
          </div>
          <div>
            <strong>Q: What makes ClickWar popular on CrazyGames?</strong>
            <div>A: Fast-paced strategy, global competition, and easy access make ClickWar a favorite among CrazyGames players.</div>
          </div>
        </div>
        <div className="text-center">
        <a
  href="/"
  className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg text-center"
>
  ▶️ Play ClickWar Now
</a>
        </div>
      </section>
    </main>
  );
}
