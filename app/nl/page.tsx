import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Suika Game - Speel gratis de watermeloen puzzel | Geen downloads",
  description:
    "🍉 Speel gratis Suika Game! Combineer fruit om watermeloenen te maken in deze verslavende virale Japanse puzzel. Geen advertenties, geen downloads. Compatibel met mobiel en meer dan 11 varianten. Speel nu!",
  keywords: [
    "suika game",
    "watermeloen spel",
    "fruit combineren spel",
    "Japanse puzzel",
    "watermeloen puzzel",
    "suika game online",
    "suika game gratis spelen",
    "fruit spel",
    "combinatie puzzel",
    "watermeloen combineren spel",
    "suika game zonder beperkingen",
    "Japanse watermeloen spel",
    "vallend fruit spel",
    "fysieke puzzel",
    "casual spel",
    "mobiel spel",
    "browser spel",
    "spel zonder downloads",
    "gratis online puzzel",
    "virale puzzel spel",
  ].join(", "),
  authors: [{ name: "Suika Games Team" }],
  creator: "Suika Games",
  publisher: "Suika Games",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://suika.games/nl",
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
    locale: "nl_NL",
    url: "https://suika.games/nl",
    siteName: "Suika Games",
    title: "Suika Game - Speel gratis de watermeloen puzzel",
    description:
      "🍉 Speel gratis de virale Japanse watermeloen puzzel! Combineer fruit en maak watermeloenen. Meer dan 11 varianten. Geen downloads!",
    images: [
      {
        url: "https://suika.games/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suika Game - Watermeloen puzzel online",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SuikaGames",
    creator: "@SuikaGames",
    title: "Suika Game - Speel gratis de watermeloen puzzel",
    description:
      "🍉 Speel gratis de virale Japanse watermeloen puzzel! Combineer fruit en maak watermeloenen. Geen downloads!",
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
    name: "Suika Watermeloen Spel",
    description: "De originele virale puzzel die het wereldwijde fenomeen startte.",
    thumbnail: "/watermelon-puzzle-game.png",
  },
  {
    name: "Fruit Combinatie",
    description: "Een minimalistische versie met snelle combinatie en schone graphics.",
    thumbnail: "/minimalist-fruit-merge-game.png",
  },
  {
    name: "Suika Taylor Swift",
    description: "De popster ontmoet de fruitige chaos in deze celebrity variant.",
    thumbnail: "/celebrity-fruit-game.png",
  },
  {
    name: "Onderwater Fruit Combinatie",
    description: "Onderwater fruit val ervaring met aquatische geluidseffecten.",
    thumbnail: "/underwater-fruit-game.png",
  },
  {
    name: "FaunaMeloen Watermeloen Spel",
    description: "VTuber-geïnspireerde versie met schattige effecten en anime esthetiek.",
    thumbnail: "/vtuber-fauna-watermelon-game.png",
  },
  {
    name: "Suika Wereldwijde Verbinding",
    description: "De puzzel ontmoet reizen in een fruitige avontuur over de continenten.",
    thumbnail: "/world-map-fruit-puzzle.png",
  },
  {
    name: "Suika Hololive Manjuu",
    description: "Crossover met het Hololive universum en virtuele YouTuber karakters.",
    thumbnail: "/hololive-anime-fruit-game.png",
  },
  {
    name: "2048 Suika Spel",
    description: "Combineert de mechanica van Suika en 2048 voor dubbele puzzel plezier.",
    thumbnail: "/2048-fruit-puzzle.png",
  },
  {
    name: "Ringo Watermeloen Spel",
    description: "Remix gefocust op appel met retro geluiden en klassieke arcade sfeer.",
    thumbnail: "/apple-retro-fruit-game.png",
  },
  {
    name: "Suika Synthetische Watermeloen",
    description: "Sci-fi fruit combinatie met neon graphics en elektronische muziek.",
    thumbnail: "/cyberpunk-fruit-game.png",
  },
  {
    name: "Suika Ontgrendeld",
    description: "Speel Suika ontgrendeld op school of werk met volledige toegang en zonder beperkingen.",
    thumbnail: "/suika-unblocked-game.png",
  },
  {
    name: "Holo Suika Spel",
    description: "De meest populaire anime mashup van Suika met holografische effecten.",
    thumbnail: "/holographic-anime-fruit.png",
  },
  {
    name: "Cool Math Suika Watermeloen",
    description: "Een Suika versie aangepast voor schoolklassen.",
    thumbnail: "/cool-math-suika-game.png",
  },
  {
    name: "Watermelon Go Suika",
    description: "Mobile-first editie met snelle fysieke gameplay.",
    thumbnail: "/watermelon-go-suika-game.png",
  },
  {
    name: "Suika Scratch Spel",
    description: "Fan-gemaakte recreatie op het Scratch platform.",
    thumbnail: "/suika-game-scratch.png",
  },
  {
    name: "Suika Poki Spel",
    description: "Officiële Poki platform versie met betere prestaties en vloeiende gameplay.",
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
    question: "Wat is het Suika spel?",
    answer:
      "Het Suika spel is een Japanse puzzel waar je fruit laat vallen en combineert om grotere vruchten te maken. Het doel is om fruit te combineren tot je een watermeloen maakt, de grootste vrucht in het spel. Het is wereldwijd viraal geworden dankzij zijn eenvoudige maar verslavende mechanica.",
  },
  {
    question: "Kan ik op mobiel spelen?",
    answer:
      "Ja! Het Suika spel is volledig geoptimaliseerd voor mobiele apparaten. Je kunt spelen op smartphones en tablets met intuïtieve touch controls die het laten vallen en positioneren van fruit gemakkelijk en leuk maken op elk schermformaat.",
  },
  {
    question: "Waarom is het zo leuk?",
    answer:
      "De combinatie van eenvoudige mechanica, realistische fysica en strategisch denken creëert een ongelooflijk boeiende ervaring. Elke game voelt uniek dankzij de fysica engine, en er is altijd de uitdaging om je vorige beste score te verbeteren.",
  },
  {
    question: "Hoe win je?",
    answer:
      "Je wint door een watermeloen te maken door strategische combinatie van fruit. De sleutel is om de ruimte goed te beheren, vooruit te plannen en de fysica te begrijpen. Het spel gaat door tot de container vol is, dus focus op het creëren van kettingreacties en het maximaliseren van je score.",
  },
]

const fruitEvolution = [
  { name: "Kers", emoji: "🍒", size: "Kleinste", points: "10" },
  { name: "Aardbei", emoji: "🍓", size: "Klein", points: "20" },
  { name: "Druif", emoji: "🍇", size: "Klein+", points: "40" },
  { name: "Dekopon", emoji: "🍊", size: "Medium-", points: "80" },
  { name: "Sinaasappel", emoji: "🍊", size: "Medium", points: "160" },
  { name: "Appel", emoji: "🍎", size: "Medium+", points: "320" },
  { name: "Peer", emoji: "🍐", size: "Groot-", points: "640" },
  { name: "Perzik", emoji: "🍑", size: "Groot", points: "1280" },
  { name: "Ananas", emoji: "🍍", size: "Groot+", points: "2560" },
  { name: "Meloen", emoji: "🍈", size: "Zeer groot", points: "5120" },
  { name: "Watermeloen", emoji: "🍉", size: "Grootste", points: "10240" },
]

const latestUpdates = [
  {
    date: "2025-06-30",
    title: "Nieuwe Suika spel varianten toegevoegd",
    description: "Ontdek 3 nieuwe varianten inclusief Suika Ontgrendeld en de celebrity versie.",
    category: "Nieuwe spellen",
    link: "/#games-like-suika",
  },
  {
    date: "2025-06-25",
    title: "Mobiele prestaties verbeterd",
    description: "Verbeterde touch controls en verminderde laadtijden voor alle spel varianten.",
    category: "Update",
    link: "/",
  },
  {
    date: "2025-06-22",
    title: "Pro strategie gids gepubliceerd",
    description: "Beheers geavanceerde technieken met onze complete strategie gids voor hoge scores.",
    category: "Gids",
    link: "/howtowin",
  },
  {
    date: "2025-06-20",
    title: "Uitgebreide meertalige ondersteuning",
    description: "Speel Suika in 6 talen met gelokaliseerde content en instructies.",
    category: "Functie",
    link: "/#language-switcher",
  },
]

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Suika Games",
  alternateName: "Suika Spel",
  url: "https://suika.games/nl",
  description: "Speel gratis de Suika spel varianten en watermeloen puzzel online. Geen download vereist.",
  inLanguage: ["en", "ja", "es", "pt", "fr", "de", "nl"],
  isAccessibleForFree: true,
  genre: ["Puzzel", "Casual", "Fysiek"],
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
    target: "https://suika.games/nl?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@type": "Game",
    name: "Suika Spel",
    alternateName: "Watermeloen Spel",
    description:
      "Een Japanse puzzel waar spelers fruit laten vallen en combineren om grotere vruchten te maken. Het uiteindelijke doel is om een watermeloen te maken.",
    genre: "Puzzel",
    playMode: "Enkele speler",
    applicationCategory: "Spel",
    operatingSystem: "Web browser",
    isAccessibleForFree: true,
    gamePlatform: ["Web browser", "Mobiel", "Desktop"],
    numberOfPlayers: "1",
    contentRating: "Alle leeftijden",
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
              Speel het Suika Spel Gratis - Watermeloen Puzzel Online
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
              🍉 Combineer fruit om watermeloenen te maken! Geen advertenties, geen downloads.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              12+ spel varianten • Mobiel compatibel • Speel nu
            </p>
          </div>

          <div className="w-full max-w-4xl game-shadow rounded-3xl overflow-hidden bg-white p-2">
            <iframe
              src="https://suikagamejp.com/game/game-en"
              title="Suika Spel - Speel Gratis Online"
              className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              allow="gamepad; microphone; camera"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              🎮 Origineel Japans Suika Spel • 🆓 Gratis • 📱 Mobiel compatibel • 🚫 Geen registratie
            </p>
          </div>
        </section>

        {/* Section 2: Suika Game Variants */}
        <section id="games-like-suika" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Suika Spel Varianten en Creatieve Remixes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Verken de originele watermeloen puzzel en varianten gemaakt door fans over de hele wereld
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gameVariants.map((game, index) => (
                <article key={index} className="bg-white rounded-xl p-6 game-shadow card-hover">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={game.thumbnail || "/placeholder.svg"}
                      alt={`${game.name} - Speel gratis deze Suika spel variant`}
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
                    aria-label={`Speel gratis ${game.name}`}
                  >
                    Nu spelen
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
              Hoe het Suika Spel te Spelen
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Watermeloen">
                    🍉
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Laat fruit vallen</h3>
                <p className="text-gray-600">
                  Laat fruit vallen vanaf de bovenkant van de container om het combinatie proces te starten en een fruit toren te maken.
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Orange">
                    🍊
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Combineer dezelfde fruit</h3>
                <p className="text-gray-600">
                  Wanneer identieke fruit elkaar raken, combineren ze automatisch om de volgende vrucht in de evolutie keten te maken.
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Watermeloen">
                    🍉
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Maak een watermeloen</h3>
                <p className="text-gray-600">
                  Blijf strategisch combineren om de uiteindelijke watermeloen te maken en mik op de hoogste score!
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
                📌 Complete Fruit Combinatie Gids - Evolutie Systeem
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Beheers het fruit evolutie systeem en begrijp alle combinatie combinaties om je score te maximaliseren
              </p>
            </div>

            {/* Fruit Evolution Chain */}
            <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                🍒➡️🍉 Complete Fruit Evolutie Ketting
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
                <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 Combinatie Regels en Tips</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">✅ Succesvolle Combinaties</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Identieke fruit moeten fysiek elkaar raken</li>
                      <li>• Combinatie gebeurt onmiddellijk bij contact</li>
                      <li>• Nieuwe fruit verschijnt op het contactpunt</li>
                      <li>• Kettingreacties worden automatisch getriggerd</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">⚠️ Veelgemaakte Fouten</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fruit moet exact van hetzelfde type zijn</li>
                      <li>• Gescheiden fruit combineren niet</li>
                      <li>• Fysica kan geplande combinaties verhinderen</li>
                      <li>• Container overflow = einde spel</li>
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
                  Ketting Combinatie
                </h3>
                <p className="text-gray-700 mb-4">
                  Plaats identieke fruit in volgorde om cascade combinaties te maken. Een enkele strategische release kan 3-5 opeenvolgende combinaties triggeren.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Pro tip:</strong> Plaats fruit in lijn of in groep om de langste kettingen te maken.
                </div>
              </article>

              <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Precisie Release
                </h3>
                <p className="text-gray-700 mb-4">
                  Gebruik de container muren en bestaande fruit om nieuwe fruit precies waar je wilt vrij te laten.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Pro tip:</strong> Mik op de randen van fruit om de stuiterrichting te controleren.
                </div>
              </article>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🏗️</span>
                  Basis Constructie
                </h3>
                <p className="text-gray-700 mb-4">
                  Creëer een stabiele basis laag met grote fruit om kleine fruit te ondersteunen en chaotische rollen te voorkomen.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Pro tip:</strong> Plaats de grootste fruit in de hoeken - meest stabiele positie.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section 5: Strategy Tips */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Pro Strategie Tips voor het Suika Spel
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-12">
              Beheers fruit combinatie technieken en watermeloen creatie
            </h3>

            <div className="bg-white rounded-xl p-8 game-shadow mb-8">
              <p className="text-xl text-gray-600 mb-8 text-center">
                Wil je meer winnen? Hier zijn de expert strategieën van de beste Suika spelers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <article className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Target">
                      🎯
                    </span>
                    Plan je bewegingen vooruit
                  </h4>
                  <p className="text-gray-700">
                    Laat fruit niet willekeurig vrij - observeer de fruit wachtrij en plan combinaties voor maximale efficiëntie.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Location">
                      📍
                    </span>
                    Houd het centrum laag
                  </h4>
                  <p className="text-gray-700">
                    Bouw hoge stapels dicht bij de muren om ruimte in het centrum te behouden voor strategische combinaties.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="House">
                      🏠
                    </span>
                    Gebruik hoeken strategisch
                  </h4>
                  <p className="text-gray-700">
                    Plaats je grootste fruit in de hoeken ondersteund door muren voor maximale stabiliteit.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Warning">
                      ⚠️
                    </span>
                    Vermijd container overflow
                  </h4>
                  <p className="text-gray-700">
                    Monitor het vulniveau en prioriteer combinaties wanneer de container 70% capaciteit bereikt.
                  </p>
                </article>
              </div>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3" role="img" aria-label="Lightning">
                    ⚡
                  </span>
                  Beheers ketting combos
                </h4>
                <p className="text-gray-700">
                  Leer om meerdere combinaties te triggeren met een enkele strategische fruit release voor maximale punten.
                </p>
              </article>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Oefening baart kunst! Hoe meer je speelt, hoe intuïtiever fruit positionering wordt. 🍉
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
                🏆 Suika Spel Hoge Score Uitdaging – Kun je de Watermeloen Bereiken?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Denk je dat je goed bent in het Suika spel? Test je vaardigheden en mik op de ultieme score!
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 game-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🎯</span>
                    Referentie Score Niveaus
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-bronze-50 to-bronze-100 rounded-lg p-4 border-l-4 border-yellow-600">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Beginner</span>
                        <span className="font-bold text-yellow-600">500+ punten</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Eerste succesvolle combinaties</p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-gray-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Gemiddeld</span>
                        <span className="font-bold text-gray-600">1,500+ punten</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Regelmatig grote fruit bereiken</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4 border-l-4 border-yellow-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Gevorderd</span>
                        <span className="font-bold text-yellow-600">3,000+ punten</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Uitstekend - beheersing van combos en strategie</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Expert</span>
                        <span className="font-bold text-green-600">5,000+ punten</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Watermeloen bereikt - echte beheersing!</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🍒</span>
                    Complete Fruit Volgorde
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      Het spel bevat <strong>11 fruit</strong> in volgorde van grootte:
                    </p>
                    <div className="text-sm text-gray-800 space-y-1 mb-4">
                      <div className="flex items-center justify-between">
                        <span>🍒 Kers</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍓 Aardbei</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍇 Druif</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍊 Dekopon</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🟠 Sinaasappel</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍎 Appel</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍐 Peer</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍑 Perzik</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍍 Ananas</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍈 Meloen</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between font-bold text-green-600">
                        <span>🍉 Watermeloen</span>
                        <span className="text-lg">🏆</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  Pro Uitdaging Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">
                      <strong>🎯 Strategische Positionering:</strong>
                    </p>
                    <p>Blijf laag in het centrum, stapel dicht bij de randen en keten combinaties om de top te bereiken.</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>⏱️ Snelheid Uitdaging:</strong>
                    </p>
                    <p>
                      Sommige speedrunners hebben de watermeloen bereikt in slechts <strong>2:20 minuten!</strong>
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🧠 Fysica Bewustzijn:</strong>
                    </p>
                    <p>Combineren tot de watermeloen vereist geduld, planning en beheersing van de fysica.</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🔄 Combo Beheersing:</strong>
                    </p>
                    <p>Keten meerdere combinaties voor exponentiële puntwinst en ruimte efficiëntie.</p>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Kun je je persoonlijke record verbeteren?</h3>
                <p className="text-gray-700 mb-6">
                  Daag jezelf uit om nieuwe hoogten te bereiken en sluit je aan bij de elite spelers die de watermeloen puzzel hebben beheerst!
                </p>
                <a
                  href="/#game"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-colors duration-200 text-lg"
                >
                  🎮 Speel het Suika Spel
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Latest Suika Game Updates */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">📌 Laatste Updates en Nieuws van het Suika Spel</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Blijf op de hoogte met de laatste spel varianten, functies en community highlights
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
                        {new Date(update.date).toLocaleDateString("nl-NL", {
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
                    Meer zien
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-xl p-8 game-shadow text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔔 Blijf Op de Hoogte met Suika Spel Nieuws</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Ontvang meldingen over nieuwe spel varianten, strategie gidsen en exclusieve content. Sluit je aan bij de community van watermeloen puzzel enthousiastelingen!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Voer je e-mailadres in"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-colors duration-200">
                  Abonneren
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">Geen spam, opzegging mogelijk op elk moment. We respecteren je privacy.</p>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Veelgestelde Vragen over het Suika Spel
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
              Over het Suika Spel: Het Virale Fenomeen van de Japanse Watermeloen Puzzel
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Het <strong>Suika spel</strong>, ook bekend als <strong>Watermeloen spel</strong>, is een viraal puzzel fenomeen van Japanse oorsprong dat miljoenen spelers over de hele wereld heeft gefascineerd. Dit verslavende <strong>fruit combinatie spel</strong> daagt spelers uit om fruit strategisch te laten vallen en te positioneren in een container, waarbij grotere vruchten worden gecreëerd door fysica-gebaseerde combinatie mechanica. Het uiteindelijke doel is om fruit combinaties te combineren tot succesvol een <strong>watermeloen</strong> wordt gemaakt, de grootste en meest belonende vrucht van deze boeiende <strong>watermeloen puzzel</strong>.
              </p>

              <p>
                De gameplay mechanica van het <strong>Suika spel</strong> is gebaseerd op realistische zwaartekracht en fysica simulatie, waarbij vergelijkbare fruit automatisch combineren om de volgende stap in de fruit evolutie ketting te creëren. Terwijl spelers vorderen in deze <strong>fruit combinatie ervaring</strong>, moeten ze zorgvuldig de beperkte ruimte van de container beheren terwijl ze strategische fruit positionering plannen om overflow te voorkomen. De <strong>watermeloen puzzel</strong> wordt steeds moeilijker naarmate de container vult, wat vereist dat spelers meerdere zetten vooruit denken en effectieve kettingreacties creëren om het score potentieel te maximaliseren.
              </p>

              <p>
                Wat begon als een niche <strong>Japanse puzzel spel</strong> explodeerde snel in een wereldwijde gaming sensatie dankzij virale sociale media content op TikTok, YouTube gaming kanalen en VTuber live streams. De eenvoudige maar diep aantrekkelijke <strong>Suika spel mechanica</strong> bleken perfect voor korte video content, waardoor spelers hun bevredigende <strong>fruit combinatie</strong> momenten en hoge score prestaties konden delen. Deze organische virale groei transformeerde de bescheiden <strong>watermeloen puzzel</strong> in een internationaal fenomeen dat nog steeds elke dag nieuwe spelers aantrekt.
              </p>

              <p>
                Vandaag heeft de <strong>Suika spel community</strong> talloze creatieve varianten en remixes gecreëerd, van celebrity thema versies tot anime crossovers, elk behoudend de basis <strong>fruit combinatie gameplay</strong> terwijl unieke visuele thema's en mechanica worden toegevoegd. Of je nu een casual speler bent die ontspannende puzzel entertainment zoekt of een competitieve gamer die mikt op ranking dominantie, deze <strong>watermeloen puzzel</strong> biedt oneindige herspeelbaarheid waarde dankzij de perfecte mix van eenvoudige controls, strategische diepte en bevredigende fysica-gebaseerde <strong>fruit combinatie actie</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Language Switcher */}
        <section id="language-switcher" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Speel het Suika Spel in je Voorkeurstaal</h2>
            <p className="text-xl text-gray-600 mb-12">Ontdek de watermeloen puzzel ervaring in je taal</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}`}
                  className="bg-white p-6 rounded-xl game-shadow card-hover flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors duration-200"
                  hrefLang={lang.code}
                  aria-label={`Speel het Suika Spel in ${lang.name}`}
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
                  <span className="text-4xl" role="img" aria-label="Watermeloen">
                    🍉
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Suika Spel</h3>
                <p className="text-gray-400 mb-6">
                  De ultieme bestemming voor het Suika spel en watermeloen puzzel varianten. Speel gratis online zonder download.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Snelle Links</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        Speel het Suika Spel
                      </Link>
                    </li>
                    <li>
                      <Link href="/#games-like-suika" className="text-gray-400 hover:text-white transition-colors">
                        Spel Varianten
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                        Over Ons
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
                <h4 className="text-lg font-semibold mb-4">Juridische Informatie</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                        Privacybeleid
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                        Servicevoorwaarden
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2025 Suika Spel. Alle rechten voorbehouden. • Speel verantwoord en heb plezier 🎮
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
