import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Suika Game Cloud Version – Play the Watermelon Game Online (Scratch, Mouse Control)",
  description:
    "Play the Suika Game Cloud Version – a watermelon game where fruits fall from clouds! Enjoy cloud-themed gameplay, Scratch platform, and advanced mouse control. Merge fruits, reach the legendary watermelon, and experience the best watermelon puzzle game online.",
  keywords: [
    "watermelon game", "cloud suika game", "suika game cloud version", "play watermelon game online", "scratch platform", "mouse control", "fruit puzzle", "cloud-themed puzzle game", "relaxing puzzle", "fruit merging game", "precision control"
  ].join(", "),
  authors: [{ name: "Suika Games Team" }],
  creator: "Suika Games",
  publisher: "Suika Games",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://suika.games/suika-watermelon-cloud-scratch",
    languages: {
      "x-default": "https://suika.games/",
      en: "https://suika.games/",
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
    url: "https://suika.games/suika-watermelon-cloud-scratch",
    siteName: "Suika Games",
    title: "Suika Game Cloud Version – The Ultimate Watermelon Game with Cloud, Scratch & Mouse Control",
    description:
      "🍉 Play the Suika Game Cloud Version – a watermelon game where fruits fall from clouds! Enjoy cloud-themed gameplay, Scratch platform, and advanced mouse control. Merge fruits, reach the legendary watermelon, and experience the best watermelon puzzle game online.",
    images: [
      {
        url: "https://suika.games/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suika Game Cloud Scratch Mouse Control - Watermelon Puzzle",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SuikaGames",
    creator: "@SuikaGames",
    title: "Suika Game Cloud Version – The Ultimate Watermelon Game with Cloud, Scratch & Mouse Control",
    description:
      "🍉 Play the Suika Game Cloud Version – a watermelon game where fruits fall from clouds! Enjoy cloud-themed gameplay, Scratch platform, and advanced mouse control. Merge fruits, reach the legendary watermelon, and experience the best watermelon puzzle game online.",
    images: ["https://suika.games/twitter-card.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Games",
}

export default function SuikaWatermelonCloudScratchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-8">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-8">
        <span className="text-6xl" role="img" aria-label="Cloud Watermelon">☁️🍉</span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
          Suika Game Cloud Version
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-700 font-semibold mb-4">
          The Most Atmospheric Watermelon Game – Now with Scratch & Mouse Control
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Play the <strong>watermelon game</strong> where fruits fall from clouds! Merge fruits, enjoy cloud-themed visuals, and experience the best <strong>cloud suika game</strong> online.
        </p>
      </section>

      {/* Game Embed */}
      <section className="flex justify-center mb-10">
        <div className="w-full max-w-3xl game-shadow rounded-3xl overflow-hidden bg-white p-2">
          <iframe
            src="https://turbowarp.org/911281961/embed"
            title="Suika Game Cloud Scratch - Advanced Watermelon Puzzle"
            className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            allow="gamepad; microphone; camera"
          />
        </div>
      </section>

      {/* How to Play */}
      <section className="max-w-3xl mx-auto mb-12 bg-white/80 rounded-xl p-8 shadow">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">How to Play the Cloud Suika Watermelon Game</h3>
        <ol className="list-decimal list-inside text-gray-800 text-lg space-y-2">
          <li>Fruits fall from clouds—click or tap to drop them into the box.</li>
          <li>Merge identical fruits to create bigger ones and work your way up to the giant watermelon.</li>
          <li>Use <strong>precision mouse control</strong> for perfect placement and combos.</li>
          <li>Don't let the box overflow, or the game ends!</li>
        </ol>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 shadow">
          <h4 className="text-xl font-bold text-blue-700 mb-2">Cloud-Themed Gameplay</h4>
          <p className="text-gray-700">Fruits fall from fluffy clouds, creating a relaxing and visually stunning watermelon game experience.</p>
        </div>
        <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-6 shadow">
          <h4 className="text-xl font-bold text-green-700 mb-2">Scratch Platform</h4>
          <p className="text-gray-700">Play instantly in your browser, enjoy community features, and share your high scores with friends.</p>
        </div>
        <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl p-6 shadow">
          <h4 className="text-xl font-bold text-pink-700 mb-2">Advanced Mouse Control</h4>
          <p className="text-gray-700">Drop fruits with pixel-perfect precision for maximum combos and strategy.</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-100 to-blue-50 rounded-xl p-6 shadow">
          <h4 className="text-xl font-bold text-yellow-700 mb-2">Classic Watermelon Game</h4>
          <p className="text-gray-700">Merge fruits, create combos, and aim for the legendary watermelon in this viral puzzle game.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto mb-12 bg-white/80 rounded-xl p-8 shadow">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">FAQ – Cloud Suika Watermelon Game</h3>
        <div className="mb-4">
          <strong>Q: What does "cloud" mean in this watermelon game?</strong>
          <p>A: "Cloud" means that fruits fall from fluffy clouds in the sky, giving the game a relaxing and dreamy atmosphere. It's a fun visual twist on the classic Suika Game!</p>
        </div>
        <div className="mb-4">
          <strong>Q: Is this the same as the original Suika Game?</strong>
          <p>A: The core mechanics are the same, but the cloud theme, Scratch platform, and advanced mouse control make it a fresh experience.</p>
        </div>
        <div className="mb-4">
          <strong>Q: Can I play on mobile and desktop?</strong>
          <p>A: Yes! The cloud suika game works great on both desktop and mobile browsers.</p>
        </div>
        <div>
          <strong>Q: Do I need to log in or save progress?</strong>
          <p>A: No login or cloud storage needed—just play and enjoy the watermelon puzzle game instantly!</p>
        </div>
      </section>

      {/* SEO/LSI Content */}
      <section className="max-w-3xl mx-auto mb-12 text-gray-700">
        <h3 className="text-xl font-bold mb-2">Why Play Watermelon Game Cloud Version?</h3>
        <p>
          The <strong>watermelon game</strong> has become a viral sensation, and the cloud version adds a new layer of fun with its sky-themed visuals. Whether you're a fan of fruit puzzle games, love relaxing gameplay, or want to try the <strong>cloud suika game</strong> on the Scratch platform, this is the perfect choice. Enjoy advanced mouse control, merge fruits, and challenge yourself to reach the legendary watermelon!
        </p>
      </section>

      {/* Footer with Legal Links - same as homepage */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="mb-6">
                <span className="text-4xl" role="img" aria-label="Watermelon">🍉</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Suika Games</h3>
              <p className="text-gray-400 mb-6">
                The ultimate destination for Suika Game and watermelon puzzle variants. Play free online with no downloads required.
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
  )
} 