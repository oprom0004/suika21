import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Suika Game - Spiele kostenlos das Wassermelonen-Puzzle | Keine Downloads",
  description:
    "🍉 Spiele kostenlos Suika Game! Kombiniere Früchte, um Wassermelonen in diesem süchtig machenden viralen japanischen Puzzle zu erstellen. Keine Werbung, keine Downloads. Mobil-kompatibel und über 11 Varianten. Jetzt spielen!",
  keywords: [
    "suika game",
    "wassermelonen spiel",
    "früchte kombinieren spiel",
    "japanisches puzzle",
    "wassermelonen puzzle",
    "suika game online",
    "suika game kostenlos spielen",
    "früchte spiel",
    "kombinations puzzle",
    "wassermelonen kombinieren spiel",
    "suika game ohne einschränkungen",
    "japanisches wassermelonen spiel",
    "fallende früchte spiel",
    "physik puzzle",
    "casual spiel",
    "mobil spiel",
    "browser spiel",
    "spiel ohne downloads",
    "kostenloses online puzzle",
    "virales puzzle spiel",
  ].join(", "),
  authors: [{ name: "Suika Games Team" }],
  creator: "Suika Games",
  publisher: "Suika Games",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://suika.games/de",
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
    locale: "de_DE",
    url: "https://suika.games/de",
    siteName: "Suika Games",
    title: "Suika Game - Spiele kostenlos das Wassermelonen-Puzzle",
    description:
      "🍉 Spiele kostenlos das virale japanische Wassermelonen-Puzzle! Kombiniere Früchte und erstelle Wassermelonen. Über 11 Varianten. Keine Downloads!",
    images: [
      {
        url: "https://suika.games/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suika Game - Wassermelonen-Puzzle online",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SuikaGames",
    creator: "@SuikaGames",
    title: "Suika Game - Spiele kostenlos das Wassermelonen-Puzzle",
    description:
      "🍉 Spiele kostenlos das virale japanische Wassermelonen-Puzzle! Kombiniere Früchte und erstelle Wassermelonen. Keine Downloads!",
    images: ["https://suika.games/twitter-card.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Games",
}

const gameVariants = [
  {
    name: "Suika Wassermelonen Spiel",
    description: "Das ursprüngliche virale Puzzle, das das weltweite Phänomen startete.",
    thumbnail: "/watermelon-puzzle-game.png",
  },
  {
    name: "Früchte Kombination",
    description: "Eine minimalistische Version mit schneller Kombination und sauberer Grafik.",
    thumbnail: "/minimalist-fruit-merge-game.png",
  },
  {
    name: "Suika Taylor Swift",
    description: "Der Popstar trifft auf fruchtiges Chaos in dieser Celebrity-Variante.",
    thumbnail: "/celebrity-fruit-game.png",
  },
  {
    name: "Unterwasser Früchte Kombination",
    description: "Unterwasser-Früchte-Fall-Erfahrung mit aquatischen Soundeffekten.",
    thumbnail: "/underwater-fruit-game.png",
  },
  {
    name: "FaunaMeloen Wassermelonen Spiel",
    description: "VTuber-inspirierte Version mit süßen Effekten und Anime-Ästhetik.",
    thumbnail: "/vtuber-fauna-watermelon-game.png",
  },
  {
    name: "Suika Weltweite Verbindung",
    description: "Das Puzzle trifft auf Reisen in einem fruchtigen Abenteuer über die Kontinente.",
    thumbnail: "/world-map-fruit-puzzle.png",
  },
  {
    name: "Suika Hololive Manjuu",
    description: "Crossover mit dem Hololive-Universum und virtuellen YouTuber-Charakteren.",
    thumbnail: "/hololive-anime-fruit-game.png",
  },
  {
    name: "2048 Suika Spiel",
    description: "Kombiniert die Mechaniken von Suika und 2048 für doppelten Puzzle-Spaß.",
    thumbnail: "/2048-fruit-puzzle.png",
  },
  {
    name: "Ringo Wassermelonen Spiel",
    description: "Remix fokussiert auf Apfel mit Retro-Sounds und klassischer Arcade-Atmosphäre.",
    thumbnail: "/apple-retro-fruit-game.png",
  },
  {
    name: "Suika Synthetische Wassermelone",
    description: "Sci-Fi-Früchte-Kombination mit Neon-Grafik und elektronischer Musik.",
    thumbnail: "/cyberpunk-fruit-game.png",
  },
  {
    name: "Suika Entsperrt",
    description: "Spiele Suika entsperrt in der Schule oder bei der Arbeit mit vollständigem Zugang und ohne Einschränkungen.",
    thumbnail: "/suika-unblocked-game.png",
  },
  {
    name: "Holo Suika Spiel",
    description: "Das beliebteste Anime-Mashup von Suika mit holografischen Effekten.",
    thumbnail: "/holographic-anime-fruit.png",
  },
  {
    name: "Cool Math Suika Wassermelone",
    description: "Eine Suika-Version angepasst für Schulklassen.",
    thumbnail: "/cool-math-suika-game.png",
  },
  {
    name: "Watermelon Go Suika",
    description: "Mobile-First-Edition mit schnellem physikalischem Gameplay.",
    thumbnail: "/watermelon-go-suika-game.png",
  },
  {
    name: "Suika Scratch Spiel",
    description: "Fan-gemachte Rekreation auf der Scratch-Plattform.",
    thumbnail: "/suika-game-scratch.png",
  },
  {
    name: "Suika Poki Spiel",
    description: "Offizielle Poki-Plattform-Version mit besserer Leistung und flüssigem Gameplay.",
    thumbnail: "/suika-game-poki.png",
  },
]

const languages = [
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
]

const faqs = [
  {
    question: "Was ist das Suika-Spiel?",
    answer:
      "Das Suika-Spiel ist ein japanisches Puzzle, bei dem du Früchte fallen lässt und kombinierst, um größere Früchte zu erstellen. Das Ziel ist es, Früchte zu kombinieren, bis du eine Wassermelone erstellst, die größte Frucht im Spiel. Es ist weltweit viral geworden dank seiner einfachen aber süchtig machenden Mechaniken.",
  },
  {
    question: "Kann ich auf dem Handy spielen?",
    answer:
      "Ja! Das Suika-Spiel ist vollständig für mobile Geräte optimiert. Du kannst auf Smartphones und Tablets mit intuitiven Touch-Steuerungen spielen, die das Fallenlassen und Positionieren von Früchten einfach und unterhaltsam auf jeder Bildschirmgröße machen.",
  },
  {
    question: "Warum macht es so viel Spaß?",
    answer:
      "Die Kombination aus einfachen Mechaniken, realistischer Physik und strategischem Denken schafft eine unglaublich fesselnde Erfahrung. Jedes Spiel fühlt sich einzigartig an dank der Physik-Engine, und es gibt immer die Herausforderung, deine vorherige Bestpunktzahl zu übertreffen.",
  },
  {
    question: "Wie gewinnt man?",
    answer:
      "Du gewinnst, indem du eine Wassermelone durch strategische Kombination von Früchten erstellst. Der Schlüssel ist, den Platz gut zu verwalten, vorauszuplanen und die Physik zu verstehen. Das Spiel geht weiter, bis der Container voll ist, also konzentriere dich darauf, Kettenreaktionen zu erstellen und deine Punktzahl zu maximieren.",
  },
]

const fruitEvolution = [
  { name: "Kirsche", emoji: "🍒", size: "Kleinste", points: "10" },
  { name: "Erdbeere", emoji: "🍓", size: "Klein", points: "20" },
  { name: "Traube", emoji: "🍇", size: "Klein+", points: "40" },
  { name: "Dekopon", emoji: "🍊", size: "Mittel-", points: "80" },
  { name: "Orange", emoji: "🍊", size: "Mittel", points: "160" },
  { name: "Apfel", emoji: "🍎", size: "Mittel+", points: "320" },
  { name: "Birne", emoji: "🍐", size: "Groß-", points: "640" },
  { name: "Pfirsich", emoji: "🍑", size: "Groß", points: "1280" },
  { name: "Ananas", emoji: "🍍", size: "Groß+", points: "2560" },
  { name: "Melone", emoji: "🍈", size: "Sehr groß", points: "5120" },
  { name: "Wassermelone", emoji: "🍉", size: "Größte", points: "10240" },
]

const latestUpdates = [
  {
    date: "2025-06-30",
    title: "Neue Suika-Spiel-Varianten hinzugefügt",
    description: "Entdecke 3 neue Varianten einschließlich Suika Entsperrt und der Celebrity-Version.",
    category: "Neue Spiele",
    link: "/#games-like-suika",
  },
  {
    date: "2025-06-25",
    title: "Mobile Leistung verbessert",
    description: "Verbesserte Touch-Steuerungen und reduzierte Ladezeiten für alle Spielvarianten.",
    category: "Update",
    link: "/",
  },
  {
    date: "2025-06-22",
    title: "Pro-Strategie-Guide veröffentlicht",
    description: "Meistere fortgeschrittene Techniken mit unserem vollständigen Strategie-Guide für hohe Punktzahlen.",
    category: "Guide",
    link: "/howtowin",
  },
  {
    date: "2025-06-20",
    title: "Erweiterte mehrsprachige Unterstützung",
    description: "Spiele Suika in 6 Sprachen mit lokalisiertem Inhalt und Anweisungen.",
    category: "Funktion",
    link: "/#language-switcher",
  },
]

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Suika Games",
  alternateName: "Suika Spiel",
  url: "https://suika.games/de",
  description: "Spiele kostenlos die Suika-Spiel-Varianten und das Wassermelonen-Puzzle online. Kein Download erforderlich.",
  inLanguage: ["en", "ja", "es", "pt", "fr", "de", "nl"],
  isAccessibleForFree: true,
  genre: ["Puzzle", "Casual", "Physik"],
  audience: {
    "@type": "Audience",
    audienceType: "General",
  },
  publisher: {
    "@type": "Organization",
    name: "Suika Games",
    url: "https://suika.games",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://suika.games/de?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@type": "Game",
    name: "Suika Spiel",
    alternateName: "Wassermelonen Spiel",
    description:
      "Ein japanisches Puzzle, bei dem Spieler Früchte fallen lassen und kombinieren, um größere Früchte zu erstellen. Das ultimative Ziel ist es, eine Wassermelone zu erstellen.",
    genre: "Puzzle",
    playMode: "Einzelspieler",
    applicationCategory: "Spiel",
    operatingSystem: "Web-Browser",
    isAccessibleForFree: true,
    gamePlatform: ["Web-Browser", "Mobil", "Desktop"],
    numberOfPlayers: "1",
    contentRating: "Alle Altersgruppen",
  },
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen">
        {/* Section 1: Hero Section with Game Embed */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
          <div className="text-center mb-8 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Spiele das Suika-Spiel Kostenlos - Wassermelonen-Puzzle Online
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
              🍉 Kombiniere Früchte, um Wassermelonen zu erstellen! Keine Werbung, keine Downloads.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              12+ Spielvarianten • Mobil-kompatibel • Jetzt spielen
            </p>
          </div>

          <div className="w-full max-w-4xl game-shadow rounded-3xl overflow-hidden bg-white p-2">
            <iframe
              src="https://suikagamejp.com/game/game-en"
              title="Suika Spiel - Spiele Kostenlos Online"
              className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              allow="gamepad; microphone; camera"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              🎮 Originales japanisches Suika-Spiel • 🆓 Kostenlos • 📱 Mobil-kompatibel • 🚫 Keine Registrierung
            </p>
          </div>
        </section>

        {/* Section 2: Suika Game Variants */}
        <section id="games-like-suika" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Suika-Spiel-Varianten und Kreative Remixes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Entdecke das ursprüngliche Wassermelonen-Puzzle und von Fans aus der ganzen Welt erstellte Varianten
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gameVariants.map((game, index) => (
                <article key={index} className="bg-white rounded-xl p-6 game-shadow card-hover">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={game.thumbnail || "/placeholder.svg"}
                      alt={`${game.name} - Spiele kostenlos diese Suika-Spiel-Variante`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="200"
                      height="128"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{game.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{game.description}</p>
                  <Link
                    href="/#games-like-suika"
                    className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 text-sm"
                    aria-label={`Spiele kostenlos ${game.name}`}
                  >
                    Jetzt spielen
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: How to Play */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Wie man das Suika-Spiel spielt
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Wassermelone">
                    🍉
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Lass Früchte fallen</h3>
                <p className="text-gray-600">
                  Lass Früchte von der Oberseite des Containers fallen, um den Kombinationsprozess zu starten und einen Früchte-Turm zu erstellen.
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Orange">
                    🍊
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Kombiniere die gleichen Früchte</h3>
                <p className="text-gray-600">
                  Wenn identische Früchte sich berühren, kombinieren sie sich automatisch, um die nächste Frucht in der Evolutionskette zu erstellen.
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Wassermelone">
                    🍉
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Erstelle eine Wassermelone</h3>
                <p className="text-gray-600">
                  Kombiniere weiterhin strategisch, um die finale Wassermelone zu erstellen und ziele auf die höchste Punktzahl!
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Section 4: How to Merge Fruits */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                📌 Vollständiger Früchte-Kombinations-Guide - Evolutionssystem
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meistere das Früchte-Evolutionssystem und verstehe alle Kombinationskombinationen, um deine Punktzahl zu maximieren
              </p>
            </div>

            {/* Fruit Evolution Chain */}
            <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                🍒➡️🍉 Vollständige Früchte-Evolutionskette
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {fruitEvolution.map((fruit, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center game-shadow">
                    <div className="text-4xl mb-2">{fruit.emoji}</div>
                    <h4 className="font-semibold text-gray-900 text-sm">{fruit.name}</h4>
                    <p className="text-xs text-gray-600">{fruit.size}</p>
                    <p className="text-xs font-medium text-green-600">{fruit.points} points</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 Kombinationsregeln und Tipps</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">✅ Erfolgreiche Kombinationen</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Identische Früchte müssen sich physisch berühren</li>
                      <li>• Kombination erfolgt sofort bei Kontakt</li>
                      <li>• Neue Frucht erscheint am Kontaktpunkt</li>
                      <li>• Kettenreaktionen werden automatisch ausgelöst</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">⚠️ Häufige Fehler</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Früchte müssen genau vom gleichen Typ sein</li>
                      <li>• Getrennte Früchte kombinieren sich nicht</li>
                      <li>• Physik kann geplante Kombinationen verhindern</li>
                      <li>• Container-Überlauf = Spielende</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Merging Techniques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🔄</span>
                  Kettenkombination
                </h3>
                <p className="text-gray-700 mb-4">
                  Platziere identische Früchte in Sequenz, um Kaskadenkombinationen zu erstellen. Eine einzige strategische Freigabe kann 3-5 aufeinanderfolgende Kombinationen auslösen.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Pro-Tipp:</strong> Platziere Früchte in Linie oder in Gruppen, um die längsten Ketten zu erstellen.
                </div>
              </article>

              <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Präzise Freigabe
                </h3>
                <p className="text-gray-700 mb-4">
                  Nutze die Container-Wände und bestehende Früchte, um neue Früchte genau dort freizugeben, wo du sie haben möchtest.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Pro-Tipp:</strong> Ziele auf die Ränder der Früchte, um die Richtung des Abpralls zu kontrollieren.
                </div>
              </article>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🏗️</span>
                  Basis-Konstruktion
                </h3>
                <p className="text-gray-700 mb-4">
                  Erstelle eine stabile Basisschicht mit großen Früchten, um kleine Früchte zu stützen und chaotisches Rollen zu vermeiden.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Pro-Tipp:</strong> Platziere die größeren Früchte in den Ecken - stabilste Position.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section 5: Strategy Tips */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Pro-Strategie-Tipps für das Suika-Spiel
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-12">
              Meistere die Früchte-Kombinationstechniken und Wassermelonen-Erstellung
            </h3>

            <div className="bg-white rounded-xl p-8 game-shadow mb-8">
              <p className="text-xl text-gray-600 mb-8 text-center">
                Möchtest du mehr gewinnen? Hier sind die Expertenstrategien der besten Suika-Spieler:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <article className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Target">
                      🎯
                    </span>
                    Plane deine Züge im Voraus
                  </h4>
                  <p className="text-gray-700">
                    Lass keine Früchte zufällig los - beobachte die Früchte-Warteschlange und plane Kombinationen für maximale Effizienz.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Location">
                      📍
                    </span>
                    Halte das Zentrum niedrig
                  </h4>
                  <p className="text-gray-700">
                    Baue hohe Stapel nahe den Wänden, um Platz im Zentrum für strategische Kombinationen zu halten.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="House">
                      🏠
                    </span>
                    Nutze strategisch die Ecken
                  </h4>
                  <p className="text-gray-700">
                    Platziere deine größeren Früchte in den von Wänden gestützten Ecken für maximale Stabilität.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Warning">
                      ⚠️
                    </span>
                    Vermeide Container-Überlauf
                  </h4>
                  <p className="text-gray-700">
                    Überwache den Füllstand und priorisiere Kombinationen, wenn der Container 70% Kapazität erreicht.
                  </p>
                </article>
              </div>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3" role="img" aria-label="Lightning">
                    ⚡
                  </span>
                  Meistere Kettenkombos
                </h4>
                <p className="text-gray-700">
                  Lerne, mehrere Kombinationen mit einer einzigen strategischen Früchte-Freigabe für maximale Punkte auszulösen.
                </p>
              </article>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Übung macht den Meister! Je mehr du spielst, desto intuitiver wird die Früchte-Positionierung. 🍉
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Suika Game High Score Challenge */}
        <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                🏆 Suika-Spiel-Hochpunktzahl-Herausforderung – Kannst du die Wassermelone erreichen?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Denkst du, du bist gut im Suika-Spiel? Teste deine Fähigkeiten und ziele auf die ultimative Punktzahl!
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 game-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🎯</span>
                    Referenz-Punktzahl-Level
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-bronze-50 to-bronze-100 rounded-lg p-4 border-l-4 border-yellow-600">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Anfänger</span>
                        <span className="font-bold text-yellow-600">500+ Punkte</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Erste erfolgreiche Kombinationen</p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-gray-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Fortgeschritten</span>
                        <span className="font-bold text-gray-600">1,500+ Punkte</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Regelmäßig große Früchte erreichen</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4 border-l-4 border-yellow-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Erweitert</span>
                        <span className="font-bold text-yellow-600">3,000+ Punkte</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Ausgezeichnet - Meisterschaft von Combos und Strategie</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Experte</span>
                        <span className="font-bold text-green-600">5,000+ Punkte</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Wassermelone erreicht - wahre Meisterschaft!</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🍒</span>
                    Vollständige Früchte-Reihenfolge
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      Das Spiel enthält <strong>11 Früchte</strong> nach Größenordnung:
                    </p>
                    <div className="text-sm text-gray-800 space-y-1 mb-4">
                      <div className="flex items-center justify-between">
                        <span>🍒 Kirsche</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍓 Erdbeere</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍇 Traube</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍊 Dekopon</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🟠 Orange</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍎 Apfel</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍐 Birne</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍑 Pfirsich</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍍 Ananas</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍈 Melone</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between font-bold text-green-600">
                        <span>🍉 Wassermelone</span>
                        <span className="text-lg">🏆</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  Pro-Herausforderungs-Tipps
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">
                      <strong>🎯 Strategische Positionierung:</strong>
                    </p>
                    <p>Bleib niedrig im Zentrum, staple nahe den Rändern und verketten Kombinationen, um die Spitze zu erreichen.</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>⏱️ Geschwindigkeits-Herausforderung:</strong>
                    </p>
                    <p>
                      Einige Speedrunner haben die Wassermelone in nur <strong>2:20 Minuten erreicht!</strong>
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🧠 Physik-Bewusstsein:</strong>
                    </p>
                    <p>Kombinieren bis zur Wassermelone erfordert Geduld, Planung und Physik-Meisterschaft.</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🔄 Combo-Meisterschaft:</strong>
                    </p>
                    <p>Verketten mehrere Kombinationen für exponentielle Punktgewinne und Platzeffizienz.</p>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Kannst du deinen persönlichen Rekord schlagen?</h3>
                <p className="text-gray-700 mb-6">
                  Fordere dich heraus, neue Höhen zu erreichen und schließe dich den Elite-Spielern an, die das Wassermelonen-Puzzle gemeistert haben!
                </p>
                <a
                  href="/#game"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-colors duration-200 text-lg"
                >
                  🎮 Suika-Spiel spielen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Latest Suika Game Updates */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">📌 Neueste Updates und Nachrichten vom Suika-Spiel</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bleib informiert über die neuesten Spielvarianten, Funktionen und Community-Highlights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {latestUpdates.map((update, index) => (
                <article key={index} className="bg-white rounded-xl p-6 game-shadow card-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {update.category}
                      </span>
                      <time className="text-sm text-gray-500" dateTime={update.date}>
                        {new Date(update.date).toLocaleDateString("de-DE", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link href={update.link} className="hover:text-indigo-600 transition-colors">
                      {update.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{update.description}</p>

                  <Link
                    href={update.link}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
                  >
                    Mehr anzeigen
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-xl p-8 game-shadow text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔔 Bleib informiert mit den Suika-Spiel-Nachrichten</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Erhalte Benachrichtigungen über neue Spielvarianten, Strategie-Guides und exklusive Inhalte. Schließe dich der Community der Wassermelonen-Puzzle-Enthusiasten an!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Gib deine E-Mail-Adresse ein"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-colors duration-200">
                  Abonnieren
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">Kein Spam, jederzeit kündbar. Wir respektieren deine Privatsphäre.</p>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Häufig gestellte Fragen zum Suika-Spiel
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-8 game-shadow"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: SEO Content Block */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              Über das Suika-Spiel: Das virale Phänomen des japanischen Wassermelonen-Puzzles
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Das <strong>Suika-Spiel</strong>, auch bekannt als <strong>Wassermelonen-Spiel</strong>, ist ein virales Puzzle-Phänomen japanischen Ursprungs, das Millionen von Spielern weltweit fasziniert hat. Dieses süchtig machende <strong>Früchte-Kombinations-Spiel</strong> fordert Spieler heraus, Früchte strategisch in einen Container fallen zu lassen und zu positionieren, wodurch größere Früchte durch physikbasierte Kombinationsmechaniken entstehen. Das ultimative Ziel ist es, Früchte-Kombinationen zu kombinieren, bis erfolgreich eine <strong>Wassermelone</strong> entsteht, die größte und lohnendste Frucht dieses fesselnden <strong>Wassermelonen-Puzzles</strong>.
              </p>

              <p>
                Die Gameplay-Mechaniken des <strong>Suika-Spiels</strong> basieren auf einer realistischen Schwerkraft- und Physik-Simulation, bei der ähnliche Früchte automatisch kombiniert werden, um den nächsten Schritt in der Früchte-Evolutionskette zu erstellen. Während Spieler in dieser <strong>Früchte-Kombinations-Erfahrung</strong> fortschreiten, müssen sie den begrenzten Platz des Containers sorgfältig verwalten und gleichzeitig strategische Früchte-Positionierung planen, um Überlauf zu vermeiden. Das <strong>Wassermelonen-Puzzle</strong> wird zunehmend schwieriger, wenn sich der Container füllt, und erfordert von Spielern, mehrere Züge im Voraus zu denken und effektive Kettenreaktionen zu erstellen, um das Punktzahl-Potenzial zu maximieren.
              </p>

              <p>
                Was als Nischen-<strong>japanisches Puzzle-Spiel</strong> begann, explodierte schnell zu einer weltweiten Gaming-Sensation dank viralem Social-Media-Content auf TikTok, YouTube-Gaming-Kanälen und VTuber-Livestreams. Die einfachen aber tiefgreifend ansprechenden <strong>Suika-Spiel-Mechaniken</strong> erwiesen sich als perfekt für Kurzvideo-Content und ermöglichten es Spielern, ihre befriedigenden <strong>Früchte-Kombinations</strong>-Momente und ihre hohen Punktzahl-Erfolge zu teilen. Dieses organische virale Wachstum verwandelte das bescheidene <strong>Wassermelonen-Puzzle</strong> in ein internationales Phänomen, das weiterhin täglich neue Spieler anzieht.
              </p>

              <p>
                Heute hat die <strong>Suika-Spiel-Community</strong> unzählige kreative Varianten und Remixes geschaffen, von Celebrity-Themen-Versionen bis hin zu Anime-Crossovers, wobei jede das grundlegende <strong>Früchte-Kombinations-Gameplay</strong> beibehält und gleichzeitig einzigartige visuelle Themen und Mechaniken hinzufügt. Ob du ein Casual-Spieler bist, der nach entspannender Puzzle-Unterhaltung sucht, oder ein kompetitiver Gamer, der auf Ranking-Dominanz abzielt, dieses <strong>Wassermelonen-Puzzle</strong> bietet endlosen Wiederspielwert dank der perfekten Mischung aus einfachen Steuerungen, strategischer Tiefe und befriedigender physikbasierter <strong>Früchte-Kombinations-Aktion</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Language Switcher */}
        <section id="language-switcher" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Spiele das Suika-Spiel in deiner bevorzugten Sprache</h2>
            <p className="text-xl text-gray-600 mb-12">Entdecke die Wassermelonen-Puzzle-Erfahrung in deiner Sprache</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}`}
                  className="bg-white p-6 rounded-xl game-shadow card-hover flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors duration-200"
                  hrefLang={lang.code}
                  aria-label={`Spiele das Suika-Spiel auf ${lang.name}`}
                >
                  <span className="text-3xl" role="img" aria-label={`${lang.name} flag`}>
                    {lang.flag}
                  </span>
                  <span className="font-semibold text-gray-900 text-lg">{lang.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer with Legal Links */}
        <footer className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="mb-6">
                  <span className="text-4xl" role="img" aria-label="Wassermelone">
                    🍉
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Suika Spiel</h3>
                <p className="text-gray-400 mb-6">
                  Das ultimative Ziel für das Suika-Spiel und die Wassermelonen-Puzzle-Varianten. Spiele kostenlos online ohne Download.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Schnelllinks</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        Suika-Spiel spielen
                      </Link>
                    </li>
                    <li>
                      <Link href="/#games-like-suika" className="text-gray-400 hover:text-white transition-colors">
                        Spielvarianten
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                        Über uns
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Rechtliche Informationen</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                        Datenschutzrichtlinie
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                        Nutzungsbedingungen
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2025 Suika Spiel. Alle Rechte vorbehalten. • Spiele verantwortungsvoll und habe Spaß 🎮
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
