import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Suika Game - Juega gratis al rompecabezas de la sandía | Sin descargas",
  description:
    "🍉 ¡Juega gratis a Suika Game! Fusiona frutas para crear sandías en este adictivo rompecabezas japonés viral. Sin anuncios, sin descargas. Compatible con móviles y más de 11 variantes. ¡Juega ahora!",
  keywords: [
    "suika game",
    "juego de la sandía",
    "juego de fusionar frutas",
    "rompecabezas japonés",
    "rompecabezas de sandía",
    "suika game online",
    "jugar suika game gratis",
    "juego de frutas",
    "rompecabezas de fusión",
    "juego de fusionar sandía",
    "suika game sin restricciones",
    "juego japonés de sandía",
    "juego de caída de frutas",
    "rompecabezas físico",
    "juego casual",
    "juego de móvil",
    "juego de navegador",
    "juego sin descargas",
    "rompecabezas online gratis",
    "juego viral de rompecabezas",
  ].join(", "),
  authors: [{ name: "Suika Games Team" }],
  creator: "Suika Games",
  publisher: "Suika Games",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://suika.games/es",
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
    locale: "es_ES",
    url: "https://suika.games/es",
    siteName: "Suika Games",
    title: "Suika Game - Juega gratis al rompecabezas de la sandía",
    description:
      "🍉 ¡Juega gratis al viral rompecabezas japonés de la sandía! Fusiona frutas y crea sandías. Más de 11 variantes. ¡Sin descargas!",
    images: [
      {
        url: "https://suika.games/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suika Game - Rompecabezas de sandía online",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SuikaGames",
    creator: "@SuikaGames",
    title: "Suika Game - Juega gratis al rompecabezas de la sandía",
    description:
      "🍉 ¡Juega gratis al viral rompecabezas japonés de la sandía! Fusiona frutas y crea sandías. ¡Sin descargas!",
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
    name: "Juego Suika Sandía",
    description: "El rompecabezas viral original que inició el fenómeno mundial.",
    thumbnail: "/watermelon-puzzle-game.png",
  },
  {
    name: "Fusión de Frutas",
    description: "Una versión minimalista con fusión rápida y gráficos limpios.",
    thumbnail: "/minimalist-fruit-merge-game.png",
  },
  {
    name: "Suika Taylor Swift",
    description: "La estrella pop se encuentra con el caos frutal en esta variante de celebridad.",
    thumbnail: "/celebrity-fruit-game.png",
  },
  {
    name: "Fusión de Frutas Marinas",
    description: "Experiencia de caída de frutas bajo el agua con efectos de sonido acuáticos.",
    thumbnail: "/underwater-fruit-game.png",
  },
  {
    name: "FaunaMelón Juego Sandía",
    description: "Versión inspirada en VTuber con efectos lindos y estética anime.",
    thumbnail: "/vtuber-fauna-watermelon-game.png",
  },
  {
    name: "Suika Conexión Mundial",
    description: "El rompecabezas se encuentra con el viaje en una aventura frutal por los continentes.",
    thumbnail: "/world-map-fruit-puzzle.png",
  },
  {
    name: "Suika Hololive Manjuu",
    description: "Crossover con el universo Hololive y personajes YouTuber virtuales.",
    thumbnail: "/hololive-anime-fruit-game.png",
  },
  {
    name: "2048 Juego Suika",
    description: "Combina las mecánicas de Suika y 2048 para el doble de diversión en rompecabezas.",
    thumbnail: "/2048-fruit-puzzle.png",
  },
  {
    name: "Ringo Juego Sandía",
    description: "Remix centrado en la manzana con sonidos retro y ambiente arcade clásico.",
    thumbnail: "/apple-retro-fruit-game.png",
  },
  {
    name: "Suika Sandía Sintética",
    description: "Fusión de frutas estilo sci-fi con gráficos neón y música electrónica.",
    thumbnail: "/cyberpunk-fruit-game.png",
  },
  {
    name: "Suika Desbloqueado",
    description: "Juega Suika desbloqueado en la escuela o el trabajo con acceso completo y sin restricciones.",
    thumbnail: "/suika-unblocked-game.png",
  },
  {
    name: "Holo Juego Suika",
    description: "El mashup anime más popular de Suika con efectos holográficos.",
    thumbnail: "/holographic-anime-fruit.png",
  },
  {
    name: "Cool Math Suika Sandía",
    description: "Una versión de Suika adaptada para las aulas escolares.",
    thumbnail: "/cool-math-suika-game.png",
  },
  {
    name: "Watermelon Go Suika",
    description: "Edición mobile-first con jugabilidad física rápida.",
    thumbnail: "/watermelon-go-suika-game.png",
  },
  {
    name: "Juego Suika Scratch",
    description: "Recreación hecha por fans en la plataforma Scratch.",
    thumbnail: "/suika-game-scratch.png",
  },
  {
    name: "Juego Suika Poki",
    description: "Versión oficial de la plataforma Poki con mejor rendimiento y jugabilidad fluida.",
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
    question: "¿Qué es el juego Suika?",
    answer:
      "El juego Suika es un rompecabezas japonés donde dejas caer y fusionas frutas para crear frutas más grandes. El objetivo es fusionar frutas hasta crear una sandía, la fruta más grande del juego. Se ha vuelto viral en todo el mundo gracias a sus mecánicas simples pero adictivas.",
  },
  {
    question: "¿Puedo jugar en el móvil?",
    answer:
      "¡Sí! El juego Suika está totalmente optimizado para dispositivos móviles. Puedes jugar en smartphones y tabletas con controles táctiles intuitivos que hacen que dejar caer y posicionar las frutas sea fácil y divertido en cualquier tamaño de pantalla.",
  },
  {
    question: "¿Por qué es tan divertido?",
    answer:
      "La combinación de mecánicas simples, física realista y pensamiento estratégico crea una experiencia increíblemente atractiva. Cada partida se siente única gracias al motor físico, y siempre está el reto de superar tu mejor puntuación anterior.",
  },
  {
    question: "¿Cómo se gana?",
    answer:
      "Ganas creando una sandía mediante la fusión estratégica de frutas. La clave es gestionar bien el espacio, planificar con anticipación y comprender la física. El juego continúa hasta que el contenedor se llena, así que concéntrate en crear reacciones en cadena y maximizar tu puntuación.",
  },
]

const fruitEvolution = [
  { name: "Cereza", emoji: "🍒", size: "Más pequeña", points: "10" },
  { name: "Fresa", emoji: "🍓", size: "Pequeña", points: "20" },
  { name: "Uva", emoji: "🍇", size: "Pequeña+", points: "40" },
  { name: "Dekopon", emoji: "🍊", size: "Mediana-", points: "80" },
  { name: "Naranja", emoji: "🍊", size: "Mediana", points: "160" },
  { name: "Manzana", emoji: "🍎", size: "Mediana+", points: "320" },
  { name: "Pera", emoji: "🍐", size: "Grande-", points: "640" },
  { name: "Melocotón", emoji: "🍑", size: "Grande", points: "1280" },
  { name: "Piña", emoji: "🍍", size: "Grande+", points: "2560" },
  { name: "Melón", emoji: "🍈", size: "Muy grande", points: "5120" },
  { name: "Sandía", emoji: "🍉", size: "Más grande", points: "10240" },
]

const latestUpdates = [
  {
    date: "2025-06-30",
    title: "Nuevas variantes del juego Suika añadidas",
    description: "Descubre 3 nuevas variantes incluyendo Suika Desbloqueado y la versión de celebridad.",
    category: "Nuevos juegos",
    link: "/#games-like-suika",
  },
  {
    date: "2025-06-25",
    title: "Mejora del rendimiento móvil",
    description: "Controles táctiles mejorados y tiempos de carga reducidos para todas las variantes del juego.",
    category: "Actualización",
    link: "/",
  },
  {
    date: "2025-06-22",
    title: "Guía de estrategia pro publicada",
    description: "Domina las técnicas avanzadas con nuestra guía de estrategia completa para alcanzar puntuaciones altas.",
    category: "Guía",
    link: "/howtowin",
  },
  {
    date: "2025-06-20",
    title: "Soporte multilingüe extendido",
    description: "Juega Suika en 6 idiomas con contenido localizado e instrucciones.",
    category: "Función",
    link: "/#language-switcher",
  },
]

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Suika Games",
  alternateName: "Juego Suika",
  url: "https://suika.games/es",
  description: "Juega gratis a las variantes del juego Suika y el rompecabezas de sandía en línea. No se requiere descarga.",
  inLanguage: ["en", "ja", "es", "pt", "fr", "de", "nl"],
  isAccessibleForFree: true,
  genre: ["Rompecabezas", "Casual", "Físico"],
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
    target: "https://suika.games/es?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@type": "Game",
    name: "Juego Suika",
    alternateName: "Juego Sandía",
    description:
      "Un rompecabezas japonés donde los jugadores dejan caer y fusionan frutas para crear frutas más grandes. El objetivo final es crear una sandía.",
    genre: "Rompecabezas",
    playMode: "Un jugador",
    applicationCategory: "Juego",
    operatingSystem: "Navegador web",
    isAccessibleForFree: true,
    gamePlatform: ["Navegador web", "Móvil", "Escritorio"],
    numberOfPlayers: "1",
    contentRating: "Todas las edades",
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
              Juega al Juego Suika Gratis - Rompecabezas de Sandía en Línea
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
              🍉 ¡Fusiona frutas para crear sandías! Sin anuncios, sin descargas.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              12+ variantes de juego • Compatible móvil • Juega ahora
            </p>
          </div>

          <div className="w-full max-w-4xl game-shadow rounded-3xl overflow-hidden bg-white p-2">
            <iframe
              src="https://suikagamejp.com/game/game-en"
              title="Juego Suika - Juega Gratis en Línea"
              className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              allow="gamepad; microphone; camera"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              🎮 Juego Suika original japonés • 🆓 Gratis • 📱 Compatible móvil • 🚫 Sin registro
            </p>
          </div>
        </section>

        {/* Section 2: Suika Game Variants */}
        <section id="games-like-suika" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Variantes del Juego Suika y Remixes Creativos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explora el rompecabezas de sandía original y las variantes creadas por fans de todo el mundo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gameVariants.map((game, index) => (
                <article key={index} className="bg-white rounded-xl p-6 game-shadow card-hover">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={game.thumbnail || "/placeholder.svg"}
                      alt={`${game.name} - Juega gratis a esta variante del juego Suika`}
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
                    aria-label={`Jouer gratuitement à ${game.name}`}
                  >
                    Jugar ahora
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
              Cómo Jugar al Juego Suika
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Sandía">
                    🍉
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Deja caer frutas</h3>
                <p className="text-gray-600">
                  Deja caer frutas desde la parte superior del contenedor para comenzar el proceso de fusión y crear una torre de frutas.
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Orange">
                    🍊
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Fusiona las mismas frutas</h3>
                <p className="text-gray-600">
                  Cuando las frutas idénticas se tocan, se fusionan automáticamente para crear la siguiente fruta en la cadena de evolución.
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Sandía">
                    🍉
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Crea una sandía</h3>
                <p className="text-gray-600">
                  ¡Continúa fusionando estratégicamente para crear la sandía final y apunta al puntaje más alto!
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
                📌 Guía Completa de Fusión de Frutas - Sistema de Evolución
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Domina el sistema de evolución de frutas y entiende todas las combinaciones de fusión para maximizar tu puntaje
              </p>
            </div>

            {/* Fruit Evolution Chain */}
            <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                🍒➡️🍉 Cadena de Evolución Completa de Frutas
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
                <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 Reglas y Consejos de Fusión</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">✅ Fusiones Exitosas</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Las frutas idénticas deben tocarse físicamente</li>
                      <li>• La fusión ocurre instantáneamente al contacto</li>
                      <li>• La nueva fruta aparece en el punto de contacto</li>
                      <li>• Las reacciones en cadena se disparan automáticamente</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">⚠️ Errores Comunes</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Las frutas deben ser exactamente del mismo tipo</li>
                      <li>• Las frutas separadas no se fusionan</li>
                      <li>• La física puede impedir las fusiones previstas</li>
                      <li>• El desbordamiento del contenedor = fin de partida</li>
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
                  Fusión en Cadena
                </h3>
                <p className="text-gray-700 mb-4">
                  Coloca frutas idénticas en secuencia para crear fusiones en cascada. Una sola liberación estratégica puede desencadenar 3-5 fusiones consecutivas.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Consejo pro:</strong> Coloca las frutas en línea o en grupo para crear las cadenas más largas.
                </div>
              </article>

              <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Liberación de Precisión
                </h3>
                <p className="text-gray-700 mb-4">
                  Usa las paredes del contenedor y las frutas existentes para liberar nuevas frutas exactamente donde quieres.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Consejo pro:</strong> Apunta a los bordes de las frutas para controlar la dirección del rebote.
                </div>
              </article>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🏗️</span>
                  Construcción de Base
                </h3>
                <p className="text-gray-700 mb-4">
                  Crea una capa base estable con frutas grandes para sostener las frutas pequeñas y evitar rodadas caóticas.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Consejo pro:</strong> Coloca las frutas más grandes en las esquinas - posición más estable.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section 5: Strategy Tips */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Consejos de Estrategia Pro para el Juego Suika
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-12">
              Domina las técnicas de fusión de frutas y creación de sandías
            </h3>

            <div className="bg-white rounded-xl p-8 game-shadow mb-8">
              <p className="text-xl text-gray-600 mb-8 text-center">
                ¿Quieres ganar más? Aquí están las estrategias expertas de los mejores jugadores del juego Suika:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <article className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Target">
                      🎯
                    </span>
                    Planifica tus movimientos con anticipación
                  </h4>
                  <p className="text-gray-700">
                    No liberes frutas al azar - observa la cola de frutas y planifica las combinaciones para máxima eficiencia.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Location">
                      📍
                    </span>
                    Mantén el centro bajo
                  </h4>
                  <p className="text-gray-700">
                    Construye pilas altas cerca de las paredes para mantener espacio en el centro para fusiones estratégicas.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="House">
                      🏠
                    </span>
                    Usa estratégicamente las esquinas
                  </h4>
                  <p className="text-gray-700">
                    Coloca tus frutas más grandes en las esquinas sostenidas por las paredes para máxima estabilidad.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Warning">
                      ⚠️
                    </span>
                    Evita el desbordamiento del contenedor
                  </h4>
                  <p className="text-gray-700">
                    Monitorea el nivel de llenado y prioriza las fusiones cuando el contenedor alcanza 70% de capacidad.
                  </p>
                </article>
              </div>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3" role="img" aria-label="Lightning">
                    ⚡
                  </span>
                  Domina los combos en cadena
                </h4>
                <p className="text-gray-700">
                  Aprende a desencadenar múltiples fusiones con una sola liberación estratégica de fruta para puntos máximos.
                </p>
              </article>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  ¡La práctica hace al maestro! Cuanto más juegues, más intuitivo se vuelve el posicionamiento de frutas. 🍉
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
                🏆 Desafío de Puntuación Alta del Juego Suika – ¿Puedes Alcanzar la Sandía?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ¿Crees que eres bueno en el juego Suika? ¡Pon a prueba tus habilidades y apunta al puntaje definitivo!
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 game-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🎯</span>
                    Niveles de Puntuación de Referencia
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-bronze-50 to-bronze-100 rounded-lg p-4 border-l-4 border-yellow-600">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Principiante</span>
                        <span className="font-bold text-yellow-600">500+ puntos</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Primeras fusiones exitosas</p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-gray-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Intermedio</span>
                        <span className="font-bold text-gray-600">1,500+ puntos</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Alcanzar regularmente frutas grandes</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4 border-l-4 border-yellow-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Avanzado</span>
                        <span className="font-bold text-yellow-600">3,000+ puntos</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Excelente - dominio de combos y estrategia</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Experto</span>
                        <span className="font-bold text-green-600">5,000+ puntos</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Sandía alcanzada - ¡verdadero dominio!</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🍒</span>
                    Orden Completo de Frutas
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      El juego incluye <strong>11 frutas</strong> por orden de tamaño:
                    </p>
                    <div className="text-sm text-gray-800 space-y-1 mb-4">
                      <div className="flex items-center justify-between">
                        <span>🍒 Cereza</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍓 Fresa</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍇 Uva</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍊 Dekopon</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🟠 Naranja</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍎 Manzana</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍐 Pera</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍑 Melocotón</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍍 Piña</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍈 Melón</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between font-bold text-green-600">
                        <span>🍉 Sandía</span>
                        <span className="text-lg">🏆</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  Consejos de Desafío Pro
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">
                      <strong>🎯 Posicionamiento Estratégico:</strong>
                    </p>
                    <p>Mantente bajo en el centro, apila cerca de los bordes y encadena fusiones para alcanzar la cima.</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>⏱️ Desafío de Velocidad:</strong>
                    </p>
                    <p>
                      Algunos speedrunners han alcanzado la sandía en solo <strong>¡2:20 minutos!</strong>
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🧠 Conciencia de la Física:</strong>
                    </p>
                    <p>Fusionar hasta la sandía requiere paciencia, planificación y dominio de la física.</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🔄 Dominio de Combos:</strong>
                    </p>
                    <p>Encadena múltiples fusiones para ganancias exponenciales de puntos y eficiencia de espacio.</p>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 ¿Puedes batir tu récord personal?</h3>
                <p className="text-gray-700 mb-6">
                  ¡Desafíate a alcanzar nuevas alturas y únete a los jugadores de élite que han dominado el rompecabezas de sandía!
                </p>
                <a
                  href="/#game"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-colors duration-200 text-lg"
                >
                  🎮 Jugar al Juego Suika
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Latest Suika Game Updates */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">📌 Últimas Actualizaciones y Noticias del Juego Suika</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mantente informado con las últimas variantes de juego, funciones y puntos destacados de la comunidad
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
                        {new Date(update.date).toLocaleDateString("fr-FR", {
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
                    Ver más
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-xl p-8 game-shadow text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔔 Mantente Informado con las Noticias del Juego Suika</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Recibe notificaciones sobre nuevas variantes de juego, guías de estrategia y contenido exclusivo. ¡Únete a la comunidad de apasionados del rompecabezas de sandía!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ingresa tu dirección de email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-colors duration-200">
                  Suscribirse
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">Sin spam, cancelación posible en cualquier momento. Respetamos tu privacidad.</p>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Preguntas Frecuentemente Hacemos sobre el Juego Suika
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
              Acerca del Juego Suika: El Fenómeno Viral del Rompecabezas de Sandía Japonés
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                El <strong>juego Suika</strong>, también conocido como <strong>juego Sandía</strong>, es un fenómeno de rompecabezas viral de origen japonés que ha cautivado a millones de jugadores en todo el mundo. Este <strong>juego de fusión de frutas</strong> adictivo desafía a los jugadores a dejar caer y posicionar estratégicamente frutas en un contenedor, creando frutas más grandes a través de mecánicas de fusión basadas en la física. El objetivo final es fusionar combinaciones de frutas hasta crear exitosamente una <strong>sandía</strong>, la fruta más grande y gratificante de este <strong>rompecabezas de sandía</strong> cautivador.
              </p>

              <p>
                Las mecánicas de gameplay del <strong>juego Suika</strong> se basan en una simulación realista de gravedad y física, donde frutas similares se combinan automáticamente para crear el siguiente paso en la cadena de evolución de frutas. Mientras los jugadores progresan en esta <strong>experiencia de fusión de frutas</strong>, deben gestionar cuidadosamente el espacio limitado del contenedor mientras planifican un posicionamiento estratégico de frutas para evitar el desbordamiento. El <strong>rompecabezas de sandía</strong> se vuelve cada vez más difícil a medida que el contenedor se llena, exigiendo que los jugadores piensen varios movimientos por adelantado y creen reacciones en cadena efectivas para maximizar el potencial de puntuación.
              </p>

              <p>
                Lo que comenzó como un <strong>juego de rompecabezas japonés</strong> de nicho rápidamente explotó en sensación de juego mundial gracias al contenido viral de redes sociales en TikTok, canales de juegos de YouTube y streams en vivo de VTuber. Las <strong>mecánicas del juego Suika</strong> simples pero profundamente atractivas resultaron perfectas para el contenido de video corto, permitiendo a los jugadores compartir sus momentos de <strong>fusión de frutas</strong> satisfactorios y sus logros de puntuación alta. Este crecimiento viral orgánico transformó el humilde <strong>rompecabezas de sandía</strong> en un fenómeno internacional que continúa atrayendo nuevos jugadores cada día.
              </p>

              <p>
                Hoy, la <strong>comunidad del juego Suika</strong> ha creado innumerables variantes creativas y remixes, desde versiones con tema de celebridad hasta crossovers de anime, cada uno manteniendo el <strong>gameplay de fusión de frutas</strong> básico mientras agrega temas visuales y mecánicas únicas. Ya seas un jugador casual buscando entretenimiento de rompecabezas relajante o un gamer competitivo apuntando a la dominación de las clasificaciones, este <strong>rompecabezas de sandía</strong> ofrece valor de rejugabilidad infinita gracias a la mezcla perfecta de controles simples, profundidad estratégica y <strong>acción de fusión de frutas</strong> basada en física satisfactoria.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Language Switcher */}
        <section id="language-switcher" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Juega al Juego Suika en tu Idioma Preferido</h2>
            <p className="text-xl text-gray-600 mb-12">Descubre la experiencia del rompecabezas de sandía en tu idioma</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}`}
                  className="bg-white p-6 rounded-xl game-shadow card-hover flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors duration-200"
                  hrefLang={lang.code}
                  aria-label={`Jugar al Juego Suika en ${lang.name}`}
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
                  <span className="text-4xl" role="img" aria-label="Sandía">
                    🍉
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Juego Suika</h3>
                <p className="text-gray-400 mb-6">
                  El destino definitivo para el juego Suika y las variantes del rompecabezas de sandía. Juega gratis en línea sin descarga.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        Jugar al Juego Suika
                      </Link>
                    </li>
                    <li>
                      <Link href="/#games-like-suika" className="text-gray-400 hover:text-white transition-colors">
                        Variantes de Juego
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                        Acerca de Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Información Legal</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                        Política de Privacidad
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                        Términos de Servicio
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2025 Juego Suika. Todos los derechos reservados. • Juega de manera responsable y diviértete 🎮
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
