import Link from "next/link"

export function LanguageSwitcher() {
  const languages = [
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Play Suika Game in Your Language</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}`}
              className="bg-white p-4 rounded-xl game-shadow card-hover flex items-center justify-center space-x-3"
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="font-medium text-gray-900">{lang.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
