import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Suika Games - Your Ultimate Watermelon Puzzle Destination",
  description:
    "Learn about Suika Games, the premier fan site for the viral Japanese puzzle game. Discover our mission, features, and commitment to the Suika Game community.",
  alternates: {
    canonical: "https://suika.games/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl p-8 game-shadow">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🍉</span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Suika Games</h1>
            <p className="text-xl text-gray-600">Your Ultimate Watermelon Puzzle Destination</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p>
                <strong>
                  Suika.games is a fan site dedicated to the viral Japanese puzzle game Suika Game. We collect and
                  showcase unique versions, provide strategy tips, and let you play directly online.
                </strong>
              </p>
              <p>
                Our mission is to create the ultimate destination for Suika Game enthusiasts worldwide, offering free
                access to the original game and its creative variants while building a supportive community of puzzle
                lovers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🎮</span>
                    Free Online Gaming
                  </h3>
                  <p className="text-gray-700">
                    Play Suika Game and its variants directly in your browser with no downloads or installations
                    required.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🌟</span>
                    Creative Variants
                  </h3>
                  <p className="text-gray-700">
                    Discover unique themed versions including celebrity editions, anime crossovers, and artistic
                    remixes.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3">📚</span>
                    Strategy Guides
                  </h3>
                  <p className="text-gray-700">
                    Learn expert techniques, advanced strategies, and pro tips to improve your gameplay and achieve
                    higher scores.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🌍</span>
                    Global Community
                  </h3>
                  <p className="text-gray-700">
                    Connect with players worldwide through our multi-language support and international gaming
                    community.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p>
                Suika Games was born from a passion for the simple yet addictive Japanese puzzle game that took the
                world by storm. When Suika Game went viral across social media platforms, we recognized the need for a
                dedicated platform where fans could not only play the original game but also discover the incredible
                creativity of the community.
              </p>
              <p>
                What started as a small collection of game variants has grown into a comprehensive resource for Suika
                Game enthusiasts. We've curated the best versions, created detailed strategy guides, and built a
                platform that celebrates the ingenuity and creativity of the global Suika Game community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Suika Games?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Completely Free:</strong> All games and content are available at no cost
                </li>
                <li>
                  <strong>No Registration Required:</strong> Start playing immediately without creating accounts
                </li>
                <li>
                  <strong>Mobile Optimized:</strong> Perfect gameplay experience on all devices
                </li>
                <li>
                  <strong>Regular Updates:</strong> New variants and content added frequently
                </li>
                <li>
                  <strong>Community Focused:</strong> Built by fans, for fans of the Suika Game phenomenon
                </li>
                <li>
                  <strong>Safe and Secure:</strong> No malware, no suspicious downloads, just pure gaming fun
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
              <p>
                We are committed to maintaining Suika Games as a free, accessible, and enjoyable platform for all
                players. Our team continuously works to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Discover and showcase new Suika Game variants</li>
                <li>Provide accurate and helpful strategy content</li>
                <li>Ensure optimal performance across all devices</li>
                <li>Maintain a safe and family-friendly gaming environment</li>
                <li>Support the global Suika Game community</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Community</h2>
              <p>
                Whether you're a casual player looking for a fun puzzle game or a dedicated enthusiast seeking the
                latest variants and strategies, Suika Games welcomes you. Join thousands of players who have made us
                their go-to destination for everything Suika Game related.
              </p>
              <p>
                Have suggestions, feedback, or want to share a new variant? We'd love to hear from you! Contact us
                through our contact page and become part of the Suika Games community.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Start Playing Now
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/#games-like-suika"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
              >
                Explore Variants
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
