import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 - Page Not Found | Suika Games",
  description:
    "The page you are looking for does not exist. Return to play Suika Game and explore our collection of fruit puzzle variants.",
  robots: "noindex, nofollow", // 防止搜索引擎索引404页面
}

// Next.js的not-found.tsx会自动返回404状态码
export default function NotFound() {
  return (
    <html lang="en">
      <head>
        {/* 404页面不设置canonical，添加noindex meta标签 */}
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        <main className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4">
          <div className="text-center max-w-2xl">
            <div className="mb-8">
              <span className="text-9xl">🍉</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Oops! Page Not Found</h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The page you're looking for seems to have rolled away like a fruit in Suika Game! Let's get you back to
              the fun puzzle action.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-colors duration-200 text-lg"
              >
                🏠 Play Suika Game
              </Link>

              <Link
                href="/#games-like-suika"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors duration-200 text-lg"
              >
                🎮 Browse All Variants
              </Link>
            </div>

            <div className="mt-12 text-gray-500">
              <p>Error 404 • Page not found</p>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
