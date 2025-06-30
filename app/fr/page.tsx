import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Jeu Suika - Jouez Gratuitement au Puzzle Pastèque en Ligne | Aucun Téléchargement Requis",
  description:
    "🍉 Jouez au jeu Suika gratuitement en ligne ! Fusionnez des fruits pour créer des pastèques dans ce puzzle japonais viral. Pas de publicités, pas de téléchargements. Compatible mobile avec 11 variantes de jeu. Commencez à jouer maintenant !",
  keywords: [
    "jeu suika",
    "jeu pastèque",
    "jeu fusion fruits",
    "puzzle japonais",
    "puzzle pastèque",
    "jeu suika en ligne",
    "jouer suika gratuit",
    "puzzle fruits",
    "fusion puzzle",
    "jeu fusion pastèque",
    "suika jeu débloqué",
    "jeu pastèque japonais",
    "jeu chute fruits",
    "puzzle physique",
    "puzzle casual",
    "puzzle mobile",
    "jeu navigateur",
    "jeu sans téléchargement",
    "puzzle en ligne gratuit",
    "puzzle viral",
  ].join(", "),
  authors: [{ name: "Équipe Suika Games" }],
  creator: "Suika Games",
  publisher: "Suika Games",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://suika.games/fr",
    languages: {
      "x-default": "https://suika.games/",
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
    locale: "fr_FR",
    url: "https://suika.games/fr",
    siteName: "Suika Games",
    title: "Jeu Suika - Jouez Gratuitement au Puzzle Pastèque en Ligne",
    description:
      "🍉 Jouez au puzzle japonais viral de pastèque gratuitement en ligne ! Fusionnez des fruits, créez des pastèques et profitez de 11+ variantes de jeu. Aucun téléchargement requis !",
    images: [
      {
        url: "https://suika.games/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jeu Suika - Puzzle Pastèque en Ligne",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SuikaGames",
    creator: "@SuikaGames",
    title: "Jeu Suika - Jouez Gratuitement au Puzzle Pastèque en Ligne",
    description:
      "🍉 Jouez au puzzle japonais viral de pastèque gratuitement en ligne ! Fusionnez des fruits, créez des pastèques. Aucun téléchargement requis !",
    images: ["https://suika.games/twitter-card.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Jeux",
}

const gameVariants = [
  {
    name: "Jeu Suika Pastèque",
    description: "Le puzzle viral original qui a lancé le phénomène mondial.",
    thumbnail: "/watermelon-puzzle-game.png",
  },
  {
    name: "Fusion Fruits",
    description: "Une version minimaliste avec fusion rapide et graphismes épurés.",
    thumbnail: "/minimalist-fruit-merge-game.png",
  },
  {
    name: "Suika Taylor Swift",
    description: "Star de la pop rencontre le chaos des fruits dans cette variante célébrité.",
    thumbnail: "/celebrity-fruit-game.png",
  },
  {
    name: "Fusion Fruits Marines",
    description: "Expérience de chute de fruits sous-marine avec effets sonores aquatiques.",
    thumbnail: "/underwater-fruit-game.png",
  },
  {
    name: "FaunaMelon Jeu Pastèque",
    description: "Version inspirée VTuber avec effets mignons et esthétique anime.",
    thumbnail: "/vtuber-fauna-watermelon-game.png",
  },
  {
    name: "Suika Connect World",
    description: "Puzzle rencontre voyage dans une aventure fruitée à travers les continents.",
    thumbnail: "/world-map-fruit-puzzle.png",
  },
  {
    name: "Suika Hololive Manjuu",
    description: "Crossover avec l'univers Hololive avec des personnages YouTuber virtuels.",
    thumbnail: "/hololive-anime-fruit-game.png",
  },
  {
    name: "2048 Jeu Suika",
    description: "Combine les mécaniques Suika et 2048 pour un double plaisir de puzzle.",
    thumbnail: "/2048-fruit-puzzle.png",
  },
  {
    name: "Ringo Jeu Pastèque",
    description: "Remix centré sur la pomme avec sons rétro et vibes arcade classiques.",
    thumbnail: "/apple-retro-fruit-game.png",
  },
  {
    name: "Suika Pastèque Synthétique",
    description: "Fusion de fruits style sci-fi avec graphismes néon et musique électronique.",
    thumbnail: "/cyberpunk-fruit-game.png",
  },
  {
    name: "Suika Débloqué",
    description: "Jouez au jeu Suika débloqué à l'école ou au travail avec accès complet et sans restrictions.",
    thumbnail: "/suika-unblocked-game.png",
  },
  {
    name: "Holo Jeu Suika",
    description: "Le mashup anime le plus populaire du jeu Suika avec effets holographiques.",
    thumbnail: "/holographic-anime-fruit.png",
  },
  {
    name: "Cool Math Suika Pastèque",
    description: "Une version du jeu Suika adaptée aux salles de classe.",
    thumbnail: "/cool-math-suika-game.png",
  },
  {
    name: "Watermelon Go Suika",
    description: "Édition mobile-first avec gameplay physique rapide.",
    thumbnail: "/watermelon-go-suika-game.png",
  },
  {
    name: "Jeu Suika Scratch",
    description: "Recréation de fan faite sur la plateforme Scratch.",
    thumbnail: "/suika-game-scratch.png",
  },
  {
    name: "Jeu Suika Poki",
    description: "Version officielle plateforme Poki avec performance améliorée et gameplay fluide.",
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
    question: "Qu'est-ce que le jeu Suika ?",
    answer:
      "Le jeu Suika est un puzzle japonais où vous faites tomber et fusionnez des fruits pour créer des fruits plus gros. L'objectif est de fusionner des fruits jusqu'à créer une pastèque, le plus gros fruit du jeu. Il est devenu viral dans le monde entier grâce à ses mécaniques de jeu simples mais addictives.",
  },
  {
    question: "Puis-je jouer sur mobile ?",
    answer:
      "Oui ! Le jeu Suika est entièrement optimisé pour les appareils mobiles. Vous pouvez jouer sur smartphones et tablettes avec des contrôles tactiles intuitifs qui rendent la chute et le positionnement des fruits faciles et agréables sur n'importe quelle taille d'écran.",
  },
  {
    question: "Qu'est-ce qui le rend si amusant ?",
    answer:
      "La combinaison de mécaniques simples, de physique réaliste et de réflexion stratégique crée une expérience incroyablement engageante. Chaque partie se sent unique grâce au moteur physique, et il y a toujours le défi satisfaisant de battre votre meilleur score précédent.",
  },
  {
    question: "Comment gagner ?",
    answer:
      "Vous gagnez en créant une pastèque grâce à la fusion stratégique de fruits. La clé est la gestion efficace de l'espace, la planification à l'avance et la compréhension de la physique. Le jeu continue jusqu'à ce que votre conteneur soit plein, alors concentrez-vous sur la création de réactions en chaîne et la maximisation de votre score.",
  },
]

const fruitEvolution = [
  { name: "Cerise", emoji: "🍒", size: "Plus petite", points: "10" },
  { name: "Fraise", emoji: "🍓", size: "Petite", points: "20" },
  { name: "Raisin", emoji: "🍇", size: "Petite+", points: "40" },
  { name: "Dekopon", emoji: "🍊", size: "Moyenne-", points: "80" },
  { name: "Orange", emoji: "🍊", size: "Moyenne", points: "160" },
  { name: "Pomme", emoji: "🍎", size: "Moyenne+", points: "320" },
  { name: "Poire", emoji: "🍐", size: "Grande-", points: "640" },
  { name: "Pêche", emoji: "🍑", size: "Grande", points: "1280" },
  { name: "Ananas", emoji: "🍍", size: "Grande+", points: "2560" },
  { name: "Melon", emoji: "🍈", size: "Très grande", points: "5120" },
  { name: "Pastèque", emoji: "🍉", size: "Plus grande", points: "10240" },
]

const latestUpdates = [
  {
    date: "2025-06-30",
    title: "Nouvelles variantes du jeu Suika ajoutées",
    description: "Découvrez 3 nouvelles variantes incluant Suika Débloqué et la version célébrité.",
    category: "Nouveaux jeux",
    link: "/#games-like-suika",
  },
  {
    date: "2025-06-25",
    title: "Amélioration des performances mobiles",
    description: "Contrôles tactiles améliorés et temps de chargement réduits pour toutes les variantes de jeu.",
    category: "Mise à jour",
    link: "/",
  },
  {
    date: "2025-06-22",
    title: "Guide de stratégie pro publié",
    description: "Maîtrisez les techniques avancées avec notre guide de stratégie complet pour atteindre des scores élevés.",
    category: "Guide",
    link: "/howtowin",
  },
  {
    date: "2025-06-20",
    title: "Support multilingue étendu",
    description: "Jouez au jeu Suika en 6 langues avec du contenu localisé et des instructions.",
    category: "Fonctionnalité",
    link: "/#language-switcher",
  },
]

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Suika Games",
  alternateName: "Jeu Suika",
  url: "https://suika.games/fr",
  description: "Jouez gratuitement aux variantes du jeu Suika et du puzzle pastèque en ligne. Aucun téléchargement requis.",
  inLanguage: ["en", "ja", "es", "pt", "fr", "de", "nl"],
  isAccessibleForFree: true,
  genre: ["Puzzle", "Casual", "Physique"],
  audience: {
    "@type": "Audience",
    audienceType: "Général",
  },
  publisher: {
    "@type": "Organization",
    name: "Suika Games",
    url: "https://suika.games",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://suika.games/fr?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@type": "Game",
    name: "Jeu Suika",
    alternateName: "Jeu Pastèque",
    description:
      "Un puzzle japonais où les joueurs font tomber et fusionnent des fruits pour créer des fruits plus gros. L'objectif final est de créer une pastèque.",
    genre: "Puzzle",
    playMode: "Joueur unique",
    applicationCategory: "Jeu",
    operatingSystem: "Navigateur web",
    isAccessibleForFree: true,
    gamePlatform: ["Navigateur web", "Mobile", "Desktop"],
    numberOfPlayers: "1",
    contentRating: "Tous âges",
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
              Jouez au Jeu Suika Gratuitement - Puzzle Pastèque en Ligne
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
              🍉 Fusionnez des fruits pour créer des pastèques ! Pas de publicités, pas de téléchargements.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              12+ variantes de jeu • Compatible mobile • Jouez maintenant
            </p>
          </div>

          <div className="w-full max-w-4xl game-shadow rounded-3xl overflow-hidden bg-white p-2">
            <iframe
              src="https://suikagamejp.com/game/game-en"
              title="Jeu Suika - Jouez Gratuitement en Ligne"
              className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              allow="gamepad; microphone; camera"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              🎮 Jeu Suika original japonais • 🆓 Gratuit • 📱 Compatible mobile • 🚫 Pas d'inscription
            </p>
          </div>
        </section>

        {/* Section 2: Suika Game Variants */}
        <section id="games-like-suika" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Variantes du Jeu Suika & Remixes Créatifs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explorez le puzzle pastèque original et les variantes créées par les fans du monde entier
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gameVariants.map((game, index) => (
                <article key={index} className="bg-white rounded-xl p-6 game-shadow card-hover">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={game.thumbnail || "/placeholder.svg"}
                      alt={`${game.name} - Jouez gratuitement à cette variante du jeu Suika`}
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
                    Jouer maintenant
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
              Comment Jouer au Jeu Suika
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Pomme">
                    🍎
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Faites tomber des fruits</h3>
                <p className="text-gray-600">
                  Faites tomber des fruits depuis le haut du conteneur pour commencer le processus de fusion et créer une tour de fruits.
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Orange">
                    🍊
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Fusionnez les mêmes fruits</h3>
                <p className="text-gray-600">
                  Quand des fruits identiques se touchent, ils fusionnent automatiquement pour créer le fruit suivant dans la chaîne d'évolution.
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Pastèque">
                    🍉
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Créez une pastèque</h3>
                <p className="text-gray-600">
                  Continuez à fusionner stratégiquement pour créer la pastèque finale et visez le score le plus élevé !
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
                📌 Guide Complet de Fusion des Fruits - Système d'Évolution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Maîtrisez le système d'évolution des fruits et comprenez toutes les combinaisons de fusion pour maximiser votre score
              </p>
            </div>

            {/* Fruit Evolution Chain */}
            <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                🍒➡️🍉 Chaîne d'Évolution Complète des Fruits
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
                <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 Règles et Conseils de Fusion</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">✅ Fusions Réussies</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Les fruits identiques doivent se toucher physiquement</li>
                      <li>• La fusion se produit instantanément au contact</li>
                      <li>• Le nouveau fruit apparaît au point de contact</li>
                      <li>• Les réactions en chaîne se déclenchent automatiquement</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">⚠️ Erreurs Courantes</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Les fruits doivent être exactement du même type</li>
                      <li>• Les fruits séparés ne fusionnent pas</li>
                      <li>• La physique peut empêcher les fusions prévues</li>
                      <li>• Le débordement du conteneur = fin de partie</li>
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
                  Fusion en Chaîne
                </h3>
                <p className="text-gray-700 mb-4">
                  Placez des fruits identiques en séquence pour créer des fusions en cascade. Un seul lâcher stratégique peut déclencher 3-5 fusions consécutives.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Conseil pro :</strong> Placez les fruits en ligne ou en groupe pour créer les chaînes les plus longues.
                </div>
              </article>

              <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Lâcher de Précision
                </h3>
                <p className="text-gray-700 mb-4">
                  Utilisez les murs du conteneur et les fruits existants pour lâcher de nouveaux fruits exactement où vous le souhaitez.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Conseil pro :</strong> Visez les bords des fruits pour contrôler la direction du rebond.
                </div>
              </article>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🏗️</span>
                  Construction de Base
                </h3>
                <p className="text-gray-700 mb-4">
                  Créez une couche de base stable avec de gros fruits pour soutenir les petits fruits et éviter les roulades chaotiques.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Conseil pro :</strong> Placez les plus gros fruits dans les coins - position la plus stable.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section 5: Strategy Tips */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Conseils de Stratégie Pro pour le Jeu Suika
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-12">
              Maîtrisez les techniques de fusion de fruits et de création de pastèques
            </h3>

            <div className="bg-white rounded-xl p-8 game-shadow mb-8">
              <p className="text-xl text-gray-600 mb-8 text-center">
                Vous voulez gagner plus ? Voici les stratégies expertes des meilleurs joueurs du jeu Suika :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <article className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Target">
                      🎯
                    </span>
                    Planifiez vos coups à l'avance
                  </h4>
                  <p className="text-gray-700">
                    Ne lâchez pas les fruits au hasard - surveillez la file d'attente des fruits et planifiez les combinaisons pour une efficacité maximale.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Location">
                      📍
                    </span>
                    Gardez le centre bas
                  </h4>
                  <p className="text-gray-700">
                    Construisez des piles hautes près des murs pour garder de l'espace au centre pour les fusions stratégiques.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="House">
                      🏠
                    </span>
                    Utilisez stratégiquement les coins
                  </h4>
                  <p className="text-gray-700">
                    Placez vos plus gros fruits dans les coins soutenus par les murs pour une stabilité maximale.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Warning">
                      ⚠️
                    </span>
                    Évitez le débordement du conteneur
                  </h4>
                  <p className="text-gray-700">
                    Surveillez le niveau de remplissage et priorisez les fusions quand le conteneur atteint 70% de capacité.
                  </p>
                </article>
              </div>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3" role="img" aria-label="Lightning">
                    ⚡
                  </span>
                  Maîtrisez les combos en chaîne
                </h4>
                <p className="text-gray-700">
                  Apprenez à déclencher plusieurs fusions avec un seul lâcher stratégique de fruit pour des points maximaux.
                </p>
              </article>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  La pratique rend parfait ! Plus vous jouez, plus le placement des fruits devient intuitif. 🍉
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
                🏆 Défi de Score Élevé du Jeu Suika – Pouvez-vous Atteindre la Pastèque ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vous pensez être bon au jeu Suika ? Testez vos compétences et visez le score ultime !
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 game-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🎯</span>
                    Niveaux de Score de Référence
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-bronze-50 to-bronze-100 rounded-lg p-4 border-l-4 border-yellow-600">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Débutant</span>
                        <span className="font-bold text-yellow-600">500+ points</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Premières fusions réussies</p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-gray-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Intermédiaire</span>
                        <span className="font-bold text-gray-600">1,500+ points</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Atteindre régulièrement de gros fruits</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4 border-l-4 border-yellow-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Avancé</span>
                        <span className="font-bold text-yellow-600">3,000+ points</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Excellent - maîtrise des combos et stratégie</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Expert</span>
                        <span className="font-bold text-green-600">5,000+ points</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Pastèque atteinte - vraie maîtrise !</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🍒</span>
                    Ordre Complet des Fruits
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      Le jeu comprend <strong>11 fruits</strong> par ordre de taille :
                    </p>
                    <div className="text-sm text-gray-800 space-y-1 mb-4">
                      <div className="flex items-center justify-between">
                        <span>🍒 Cerise</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍓 Fraise</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍇 Raisin</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍊 Dekopon</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🟠 Kaki</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍎 Pomme</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍐 Poire</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍑 Pêche</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍍 Ananas</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍈 Melon</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between font-bold text-green-600">
                        <span>🍉 Pastèque</span>
                        <span className="text-lg">🏆</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  Conseils de Défi Pro
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">
                      <strong>🎯 Placement Stratégique :</strong>
                    </p>
                    <p>Restez bas au centre, empilez près des bords et enchaînez les fusions pour atteindre le sommet.</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>⏱️ Défi de Vitesse :</strong>
                    </p>
                    <p>
                      Certains speedrunners ont atteint la pastèque en seulement <strong>2:20 minutes !</strong>
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🧠 Conscience de la Physique :</strong>
                    </p>
                    <p>Fusionner jusqu'à la pastèque nécessite patience, planification et maîtrise de la physique.</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🔄 Maîtrise des Combos :</strong>
                    </p>
                    <p>Enchaînez plusieurs fusions pour des gains de points exponentiels et une efficacité d'espace.</p>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Pouvez-vous battre votre record personnel ?</h3>
                <p className="text-gray-700 mb-6">
                  Défiez-vous d'atteindre de nouveaux sommets et rejoignez les joueurs d'élite qui ont maîtrisé le puzzle pastèque !
                </p>
                <a
                  href="/#game"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-colors duration-200 text-lg"
                >
                  🎮 Jouer au Jeu Suika
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Latest Suika Game Updates */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">📌 Dernières Mises à Jour et Actualités du Jeu Suika</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Restez informé avec les dernières variantes de jeu, fonctionnalités et points forts de la communauté
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
                    Voir plus
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-xl p-8 game-shadow text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔔 Restez Informé avec les Actualités du Jeu Suika</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Recevez des notifications sur les nouvelles variantes de jeu, guides de stratégie et contenu exclusif. Rejoignez la communauté des passionnés du puzzle pastèque !
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Entrez votre adresse email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-colors duration-200">
                  S'abonner
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">Pas de spam, désabonnement possible à tout moment. Nous respectons votre vie privée.</p>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Questions Fréquemment Posées sur le Jeu Suika
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
              À Propos du Jeu Suika : Le Phénomène Viral du Puzzle Pastèque Japonais
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Le <strong>jeu Suika</strong>, également connu sous le nom de <strong>jeu Pastèque</strong>, est un phénomène de puzzle viral d'origine japonaise qui a captivé des millions de joueurs dans le monde entier. Ce <strong>jeu de fusion de fruits</strong> addictif défie les joueurs de faire tomber et positionner stratégiquement des fruits dans un conteneur, créant des fruits plus gros grâce à des mécaniques de fusion basées sur la physique. L'objectif ultime est de fusionner des combinaisons de fruits jusqu'à créer avec succès une <strong>pastèque</strong>, le fruit le plus grand et le plus gratifiant de ce <strong>puzzle pastèque</strong> captivant.
              </p>

              <p>
                Les mécaniques de gameplay du <strong>jeu Suika</strong> reposent sur une simulation réaliste de gravité et de physique, où des fruits similaires se combinent automatiquement pour créer l'étape suivante de la chaîne d'évolution des fruits. Alors que les joueurs progressent dans cette <strong>expérience de fusion de fruits</strong>, ils doivent gérer soigneusement l'espace limité du conteneur tout en planifiant un positionnement stratégique des fruits pour éviter le débordement. Le <strong>puzzle pastèque</strong> devient de plus en plus difficile à mesure que le conteneur se remplit, exigeant des joueurs qu'ils pensent plusieurs coups à l'avance et créent des réactions en chaîne efficaces pour maximiser le potentiel de score.
              </p>

              <p>
                Ce qui a commencé comme un <strong>jeu de puzzle japonais</strong> de niche a rapidement explosé en sensation de jeu mondiale grâce au contenu viral des médias sociaux sur TikTok, les chaînes de jeux YouTube et les streams en direct VTuber. Les <strong>mécaniques du jeu Suika</strong> simples mais profondément engageantes se sont avérées parfaites pour le contenu vidéo court, permettant aux joueurs de partager leurs moments de <strong>fusion de fruits</strong> satisfaisants et leurs réalisations de score élevé. Cette croissance virale organique a transformé l'humble <strong>puzzle pastèque</strong> en un phénomène international qui continue d'attirer de nouveaux joueurs chaque jour.
              </p>

              <p>
                Aujourd'hui, la <strong>communauté du jeu Suika</strong> a créé d'innombrables variantes créatives et remixes, des versions à thème célébrité aux crossovers anime, chacun maintenant le <strong>gameplay de fusion de fruits</strong> de base tout en ajoutant des thèmes visuels et des mécaniques uniques. Que vous soyez un joueur casual cherchant un divertissement de puzzle relaxant ou un gamer compétitif visant la domination des classements, ce <strong>puzzle pastèque</strong> offre une valeur de rejeu infinie grâce au mélange parfait de contrôles simples, de profondeur stratégique et d'<strong>action de fusion de fruits</strong> basée sur la physique satisfaisante.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Language Switcher */}
        <section id="language-switcher" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Jouez au Jeu Suika dans Votre Langue Préférée</h2>
            <p className="text-xl text-gray-600 mb-12">Découvrez l'expérience du puzzle pastèque dans votre langue</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}`}
                  className="bg-white p-6 rounded-xl game-shadow card-hover flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors duration-200"
                  hrefLang={lang.code}
                  aria-label={`Jouer au Jeu Suika en ${lang.name}`}
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
                  <span className="text-4xl" role="img" aria-label="Pastèque">
                    🍉
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Jeu Suika</h3>
                <p className="text-gray-400 mb-6">
                  La destination ultime pour le jeu Suika et les variantes du puzzle pastèque. Jouez gratuitement en ligne sans téléchargement.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        Jouer au Jeu Suika
                      </Link>
                    </li>
                    <li>
                      <Link href="/#games-like-suika" className="text-gray-400 hover:text-white transition-colors">
                        Variantes de Jeu
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                        À Propos de Nous
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
                <h4 className="text-lg font-semibold mb-4">Informations Légales</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                        Politique de Confidentialité
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                        Conditions d'Utilisation
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2025 Jeu Suika. Tous droits réservés. • Jouez de manière responsable et amusez-vous ! 🎮
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
