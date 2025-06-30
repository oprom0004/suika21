import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Suika Game - Jogue grátis o quebra-cabeça da melancia | Sem downloads",
  description:
    "🍉 Jogue grátis o Suika Game! Combine frutas para criar melancias neste viciante quebra-cabeça japonês viral. Sem anúncios, sem downloads. Compatível com mobile e mais de 11 variantes. Jogue agora!",
  keywords: [
    "suika game",
    "jogo da melancia",
    "jogo de combinar frutas",
    "quebra-cabeça japonês",
    "quebra-cabeça da melancia",
    "suika game online",
    "jogar suika game grátis",
    "jogo de frutas",
    "quebra-cabeça de combinação",
    "jogo de combinar melancia",
    "suika game sem restrições",
    "jogo japonês da melancia",
    "jogo de queda de frutas",
    "quebra-cabeça físico",
    "jogo casual",
    "jogo de mobile",
    "jogo de navegador",
    "jogo sem downloads",
    "quebra-cabeça online grátis",
    "jogo viral de quebra-cabeça",
  ].join(", "),
  authors: [{ name: "Suika Games Team" }],
  creator: "Suika Games",
  publisher: "Suika Games",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://suika.games/pt",
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
    locale: "pt_BR",
    url: "https://suika.games/pt",
    siteName: "Suika Games",
    title: "Suika Game - Jogue grátis o quebra-cabeça da melancia",
    description:
      "🍉 Jogue grátis o viral quebra-cabeça japonês da melancia! Combine frutas e crie melancias. Mais de 11 variantes. Sem downloads!",
    images: [
      {
        url: "https://suika.games/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suika Game - Quebra-cabeça da melancia online",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SuikaGames",
    creator: "@SuikaGames",
    title: "Suika Game - Jogue grátis o quebra-cabeça da melancia",
    description:
      "🍉 Jogue grátis o viral quebra-cabeça japonês da melancia! Combine frutas e crie melancias. Sem downloads!",
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
    name: "Jogo Suika Melancia",
    description: "O quebra-cabeça viral original que iniciou o fenômeno mundial.",
    thumbnail: "/watermelon-puzzle-game.png",
  },
  {
    name: "Combinação de Frutas",
    description: "Uma versão minimalista com combinação rápida e gráficos limpos.",
    thumbnail: "/minimalist-fruit-merge-game.png",
  },
  {
    name: "Suika Taylor Swift",
    description: "A estrela pop encontra o caos frutal nesta variante de celebridade.",
    thumbnail: "/celebrity-fruit-game.png",
  },
  {
    name: "Combinação de Frutas Marinhas",
    description: "Experiência de queda de frutas subaquática com efeitos sonoros aquáticos.",
    thumbnail: "/underwater-fruit-game.png",
  },
  {
    name: "FaunaMelão Jogo Melancia",
    description: "Versão inspirada em VTuber com efeitos fofos e estética anime.",
    thumbnail: "/vtuber-fauna-watermelon-game.png",
  },
  {
    name: "Suika Conexão Mundial",
    description: "O quebra-cabeça encontra a viagem em uma aventura frutal pelos continentes.",
    thumbnail: "/world-map-fruit-puzzle.png",
  },
  {
    name: "Suika Hololive Manjuu",
    description: "Crossover com o universo Hololive e personagens YouTuber virtuais.",
    thumbnail: "/hololive-anime-fruit-game.png",
  },
  {
    name: "2048 Jogo Suika",
    description: "Combina as mecânicas do Suika e 2048 para diversão dupla em quebra-cabeça.",
    thumbnail: "/2048-fruit-puzzle.png",
  },
  {
    name: "Ringo Jogo Melancia",
    description: "Remix focado na maçã com sons retrô e ambiente arcade clássico.",
    thumbnail: "/apple-retro-fruit-game.png",
  },
  {
    name: "Suika Melancia Sintética",
    description: "Combinação de frutas estilo sci-fi com gráficos neon e música eletrônica.",
    thumbnail: "/cyberpunk-fruit-game.png",
  },
  {
    name: "Suika Desbloqueado",
    description: "Jogue Suika desbloqueado na escola ou trabalho com acesso completo e sem restrições.",
    thumbnail: "/suika-unblocked-game.png",
  },
  {
    name: "Holo Jogo Suika",
    description: "O mashup anime mais popular do Suika com efeitos holográficos.",
    thumbnail: "/holographic-anime-fruit.png",
  },
  {
    name: "Cool Math Suika Melancia",
    description: "Uma versão do Suika adaptada para salas de aula escolares.",
    thumbnail: "/cool-math-suika-game.png",
  },
  {
    name: "Watermelon Go Suika",
    description: "Edição mobile-first com jogabilidade física rápida.",
    thumbnail: "/watermelon-go-suika-game.png",
  },
  {
    name: "Jogo Suika Scratch",
    description: "Recriação feita por fãs na plataforma Scratch.",
    thumbnail: "/suika-game-scratch.png",
  },
  {
    name: "Jogo Suika Poki",
    description: "Versão oficial da plataforma Poki com melhor performance e jogabilidade fluida.",
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
    question: "O que é o jogo Suika?",
    answer:
      "O jogo Suika é um quebra-cabeça japonês onde você deixa cair e combina frutas para criar frutas maiores. O objetivo é combinar frutas até criar uma melancia, a maior fruta do jogo. Tornou-se viral em todo o mundo graças às suas mecânicas simples mas viciantes.",
  },
  {
    question: "Posso jogar no mobile?",
    answer:
      "Sim! O jogo Suika está totalmente otimizado para dispositivos móveis. Você pode jogar em smartphones e tablets com controles touch intuitivos que tornam deixar cair e posicionar as frutas fácil e divertido em qualquer tamanho de tela.",
  },
  {
    question: "Por que é tão divertido?",
    answer:
      "A combinação de mecânicas simples, física realista e pensamento estratégico cria uma experiência incrivelmente envolvente. Cada partida se sente única graças ao motor de física, e sempre há o desafio de superar sua melhor pontuação anterior.",
  },
  {
    question: "Como se vence?",
    answer:
      "Você vence criando uma melancia através da combinação estratégica de frutas. A chave é gerenciar bem o espaço, planejar com antecedência e entender a física. O jogo continua até que o container se encha, então concentre-se em criar reações em cadeia e maximizar sua pontuação.",
  },
]

const fruitEvolution = [
  { name: "Cereja", emoji: "🍒", size: "Menor", points: "10" },
  { name: "Morango", emoji: "🍓", size: "Pequena", points: "20" },
  { name: "Uva", emoji: "🍇", size: "Pequena+", points: "40" },
  { name: "Tangerina", emoji: "🍊", size: "Média-", points: "80" },
  { name: "Laranja", emoji: "🍊", size: "Média", points: "160" },
  { name: "Maçã", emoji: "🍎", size: "Média+", points: "320" },
  { name: "Pêra", emoji: "🍐", size: "Grande-", points: "640" },
  { name: "Pêssego", emoji: "🍑", size: "Grande", points: "1280" },
  { name: "Abacaxi", emoji: "🍍", size: "Grande+", points: "2560" },
      { name: "Coco", emoji: "🥥", size: "Extra Grande", points: "5120" },
    { name: "Melancia", emoji: "🍉", size: "Máxima", points: "10240" },
]

const latestUpdates = [
  {
    date: "2025-06-30",
    title: "Novas variantes do jogo Suika adicionadas",
    description: "Descubra 3 novas variantes incluindo Suika Desbloqueado e a versão de celebridade.",
    category: "Novos jogos",
    link: "/#games-like-suika",
  },
  {
    date: "2025-06-25",
    title: "Melhoria do desempenho mobile",
    description: "Controles touch melhorados e tempos de carregamento reduzidos para todas as variantes do jogo.",
    category: "Atualização",
    link: "/",
  },
  {
    date: "2025-06-22",
    title: "Guia de estratégia pro publicada",
    description: "Domine as técnicas avançadas com nossa guia de estratégia completa para alcançar pontuações altas.",
    category: "Guia",
    link: "/howtowin",
  },
  {
    date: "2025-06-20",
    title: "Suporte multilíngue estendido",
    description: "Jogue Suika em 6 idiomas com conteúdo localizado e instruções.",
    category: "Função",
    link: "/#language-switcher",
  },
]

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Suika Games",
  alternateName: "Jogo Suika",
  url: "https://suika.games/pt",
  description: "Jogue grátis as variantes do jogo Suika e o quebra-cabeça da melancia online. Não é necessário download.",
  inLanguage: ["en", "ja", "es", "pt", "fr", "de", "nl"],
  isAccessibleForFree: true,
  genre: ["Quebra-cabeça", "Casual", "Físico"],
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
    target: "https://suika.games/pt?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@type": "Game",
    name: "Jogo Suika",
    alternateName: "Jogo da Melancia",
    description:
      "Um quebra-cabeça japonês onde os jogadores deixam cair e combinam frutas para criar frutas maiores. O objetivo final é criar uma melancia.",
    genre: "Quebra-cabeça",
    playMode: "Um jogador",
    applicationCategory: "Jogo",
    operatingSystem: "Navegador web",
    isAccessibleForFree: true,
    gamePlatform: ["Navegador web", "Mobile", "Desktop"],
    numberOfPlayers: "1",
    contentRating: "Todas as idades",
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
              Jogue o Jogo Suika Grátis - Quebra-cabeça da Melancia Online
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
              🍉 Combine frutas para criar melancias! Sem anúncios, sem downloads.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              12+ variantes de jogo • Compatível mobile • Jogue agora
            </p>
          </div>

          <div className="w-full max-w-4xl game-shadow rounded-3xl overflow-hidden bg-white p-2">
            <iframe
              src="https://suikagamejp.com/game/game-en"
              title="Jogo Suika - Jogue Grátis Online"
              className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              allow="gamepad; microphone; camera"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              🎮 Jogo Suika original japonês • 🆓 Grátis • 📱 Compatível mobile • 🚫 Sem registro
            </p>
          </div>
        </section>

        {/* Section 2: Suika Game Variants */}
        <section id="games-like-suika" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Variantes do Jogo Suika e Remixes Criativos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore o quebra-cabeça da melancia original e as variantes criadas por fãs de todo o mundo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gameVariants.map((game, index) => (
                <article key={index} className="bg-white rounded-xl p-6 game-shadow card-hover">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={game.thumbnail || "/placeholder.svg"}
                      alt={`${game.name} - Jogue grátis esta variante do jogo Suika`}
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
                    aria-label={`Jogar gratuitamente ${game.name}`}
                  >
                    Jogar agora
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
              Como Jogar o Jogo Suika
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Melancia">
                    🍉
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Deixe cair frutas</h3>
                <p className="text-gray-600">
                  Deixe cair frutas do topo do container para começar o processo de combinação e criar uma torre de frutas.
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Laranja">
                    🍊
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Combine as mesmas frutas</h3>
                <p className="text-gray-600">
                  Quando frutas idênticas se tocam, elas se combinam automaticamente para criar a próxima fruta na cadeia de evolução.
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Melancia">
                    🍉
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Crie uma melancia</h3>
                <p className="text-gray-600">
                  Continue combinando estrategicamente para criar a melancia final e aponte para a pontuação mais alta!
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
                📌 Guia Completa de Combinação de Frutas - Sistema de Evolução
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Domine o sistema de evolução de frutas e entenda todas as combinações para maximizar sua pontuação
              </p>
            </div>

            {/* Fruit Evolution Chain */}
            <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                🍒➡️🍉 Cadeia de Evolução Completa de Frutas
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
                <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 Regras e Dicas de Combinação</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">✅ Combinações Bem-sucedidas</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Frutas idênticas devem se tocar fisicamente</li>
                      <li>• A combinação ocorre instantaneamente no contato</li>
                      <li>• A nova fruta aparece no ponto de contato</li>
                      <li>• Reações em cadeia são disparadas automaticamente</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">⚠️ Erros Comuns</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• As frutas devem ser exatamente do mesmo tipo</li>
                      <li>• Frutas separadas não se combinam</li>
                      <li>• A física pode impedir combinações planejadas</li>
                      <li>• Transbordamento do container = fim da partida</li>
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
                  Combinação em Cadeia
                </h3>
                <p className="text-gray-700 mb-4">
                  Coloque frutas idênticas em sequência para criar combinações em cascata. Uma única liberação estratégica pode desencadear 3-5 combinações consecutivas.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Dica pro:</strong> Coloque as frutas em linha ou em grupo para criar as cadeias mais longas.
                </div>
              </article>

              <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Liberação de Precisão
                </h3>
                <p className="text-gray-700 mb-4">
                  Use as paredes do container e as frutas existentes para liberar novas frutas exatamente onde você quer.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Dica pro:</strong> Mire nas bordas das frutas para controlar a direção do quique.
                </div>
              </article>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🏗️</span>
                  Construção de Base
                </h3>
                <p className="text-gray-700 mb-4">
                  Crie uma camada base estável com frutas grandes para sustentar as frutas pequenas e evitar rolamentos caóticos.
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>Dica pro:</strong> Coloque as frutas maiores nos cantos - posição mais estável.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section 5: Strategy Tips */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Dicas de Estratégia Pro para o Jogo Suika
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-12">
              Domine as técnicas de combinação de frutas e criação de melancias
            </h3>

            <div className="bg-white rounded-xl p-8 game-shadow mb-8">
              <p className="text-xl text-gray-600 mb-8 text-center">
                Quer vencer mais? Aqui estão as estratégias especializadas dos melhores jogadores do jogo Suika:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <article className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Target">
                      🎯
                    </span>
                    Planeje seus movimentos com antecedência
                  </h4>
                  <p className="text-gray-700">
                    Não libere frutas aleatoriamente - observe a fila de frutas e planeje as combinações para máxima eficiência.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Location">
                      📍
                    </span>
                    Mantenha o centro baixo
                  </h4>
                  <p className="text-gray-700">
                    Construa pilhas altas perto das paredes para manter espaço no centro para combinações estratégicas.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="House">
                      🏠
                    </span>
                    Use estrategicamente os cantos
                  </h4>
                  <p className="text-gray-700">
                    Coloque suas frutas maiores nos cantos sustentados pelas paredes para máxima estabilidade.
                  </p>
                </article>

                <article className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Warning">
                      ⚠️
                    </span>
                    Evite o transbordamento do container
                  </h4>
                  <p className="text-gray-700">
                    Monitore o nível de preenchimento e priorize as combinações quando o container atingir 70% de capacidade.
                  </p>
                </article>
              </div>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3" role="img" aria-label="Lightning">
                    ⚡
                  </span>
                  Domine os combos em cadeia
                </h4>
                <p className="text-gray-700">
                  Aprenda a desencadear múltiplas combinações com uma única liberação estratégica de fruta para pontos máximos.
                </p>
              </article>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  A prática leva à perfeição! Quanto mais você jogar, mais intuitivo se torna o posicionamento de frutas. 🍉
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
                🏆 Desafio de Pontuação Alta do Jogo Suika – Você Consegue Alcançar a Melancia?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Acha que é bom no jogo Suika? Teste suas habilidades e aponte para a pontuação definitiva!
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 game-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🎯</span>
                    Níveis de Pontuação de Referência
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-bronze-50 to-bronze-100 rounded-lg p-4 border-l-4 border-yellow-600">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Iniciante</span>
                        <span className="font-bold text-yellow-600">500+ pontos</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Primeiras combinações bem-sucedidas</p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-gray-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Intermediário</span>
                        <span className="font-bold text-gray-600">1,500+ pontos</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Alcançar regularmente frutas grandes</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4 border-l-4 border-yellow-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Avançado</span>
                        <span className="font-bold text-yellow-600">3,000+ pontos</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Excelente - domínio de combos e estratégia</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Especialista</span>
                        <span className="font-bold text-green-600">5,000+ pontos</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Melancia alcançada - verdadeiro domínio!</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🍒</span>
                    Ordem Completa de Frutas
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      O jogo inclui <strong>11 frutas</strong> por ordem de tamanho:
                    </p>
                    <div className="text-sm text-gray-800 space-y-1 mb-4">
                      <div className="flex items-center justify-between">
                        <span>🍒 Cereja</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍓 Morango</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍇 Uva</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍊 Tangerina</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🟠 Laranja</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍎 Maçã</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍐 Pêra</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍑 Pêssego</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍍 Abacaxi</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🥥 Coco</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between font-bold text-green-600">
                        <span>🍉 Melancia</span>
                        <span className="text-lg">🏆</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  Dicas de Desafio Pro
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">
                      <strong>🎯 Posicionamento Estratégico:</strong>
                    </p>
                    <p>Mantenha-se baixo no centro, empilhe perto das bordas e encadeie combinações para alcançar o topo.</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>⏱️ Desafio de Velocidade:</strong>
                    </p>
                    <p>
                      Alguns speedrunners alcançaram a melancia em apenas <strong>2:20 minutos!</strong>
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🧠 Consciência da Física:</strong>
                    </p>
                    <p>Combinar até a melancia requer paciência, planejamento e domínio da física.</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🔄 Domínio de Combos:</strong>
                    </p>
                    <p>Encadeie múltiplas combinações para ganhos exponenciais de pontos e eficiência de espaço.</p>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Você consegue bater seu recorde pessoal?</h3>
                <p className="text-gray-700 mb-6">
                  Desafie-se a alcançar novas alturas e junte-se aos jogadores de elite que dominaram o quebra-cabeça da melancia!
                </p>
                <a
                  href="/#game"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-colors duration-200 text-lg"
                >
                  🎮 Jogar o Jogo Suika
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Latest Suika Game Updates */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">📌 Últimas Atualizações e Notícias do Jogo Suika</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mantenha-se informado com as últimas variantes de jogo, funções e destaques da comunidade
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
                        {new Date(update.date).toLocaleDateString("pt-BR", {
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
                    Ver mais
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-xl p-8 game-shadow text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔔 Mantenha-se Informado com as Notícias do Jogo Suika</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Receba notificações sobre novas variantes de jogo, guias de estratégia e conteúdo exclusivo. Junte-se à comunidade de apaixonados pelo quebra-cabeça da melancia!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Digite seu endereço de email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-colors duration-200">
                  Inscrever-se
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">Sem spam, cancelamento possível a qualquer momento. Respeitamos sua privacidade.</p>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Perguntas Frequentes sobre o Jogo Suika
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
              Sobre o Jogo Suika: O Fenômeno Viral do Quebra-cabeça da Melancia Japonês
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                O <strong>jogo Suika</strong>, também conhecido como <strong>jogo da Melancia</strong>, é um fenômeno de quebra-cabeça viral de origem japonesa que cativou milhões de jogadores em todo o mundo. Este <strong>jogo de combinação de frutas</strong> viciante desafia os jogadores a deixar cair e posicionar estrategicamente frutas em um container, criando frutas maiores através de mecânicas de combinação baseadas na física. O objetivo final é combinar combinações de frutas até criar com sucesso uma <strong>melancia</strong>, a maior e mais gratificante fruta deste <strong>quebra-cabeça da melancia</strong> cativante.
              </p>

              <p>
                As mecânicas de gameplay do <strong>jogo Suika</strong> são baseadas em uma simulação realista de gravidade e física, onde frutas similares se combinam automaticamente para criar o próximo passo na cadeia de evolução de frutas. Enquanto os jogadores progridem nesta <strong>experiência de combinação de frutas</strong>, devem gerenciar cuidadosamente o espaço limitado do container enquanto planejam um posicionamento estratégico de frutas para evitar o transbordamento. O <strong>quebra-cabeça da melancia</strong> se torna cada vez mais difícil à medida que o container se enche, exigindo que os jogadores pensem vários movimentos à frente e criem reações em cadeia efetivas para maximizar o potencial de pontuação.
              </p>

              <p>
                O que começou como um <strong>jogo de quebra-cabeça japonês</strong> de nicho rapidamente explodiu em sensação de jogo mundial graças ao conteúdo viral de redes sociais no TikTok, canais de jogos do YouTube e streams ao vivo de VTuber. As <strong>mecânicas do jogo Suika</strong> simples mas profundamente atrativas resultaram perfeitas para o conteúdo de vídeo curto, permitindo aos jogadores compartilhar seus momentos de <strong>combinação de frutas</strong> satisfatórios e suas conquistas de pontuação alta. Este crescimento viral orgânico transformou o humilde <strong>quebra-cabeça da melancia</strong> em um fenômeno internacional que continua atraindo novos jogadores a cada dia.
              </p>

              <p>
                Hoje, a <strong>comunidade do jogo Suika</strong> criou inúmeras variantes criativas e remixes, desde versões com tema de celebridade até crossovers de anime, cada um mantendo o <strong>gameplay de combinação de frutas</strong> básico enquanto adiciona temas visuais e mecânicas únicas. Seja você um jogador casual buscando entretenimento de quebra-cabeça relaxante ou um gamer competitivo mirando na dominação das classificações, este <strong>quebra-cabeça da melancia</strong> oferece valor de rejogabilidade infinita graças à mistura perfeita de controles simples, profundidade estratégica e <strong>ação de combinação de frutas</strong> baseada em física satisfatória.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Language Switcher */}
        <section id="language-switcher" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Jogue o Jogo Suika no seu Idioma Preferido</h2>
            <p className="text-xl text-gray-600 mb-12">Descubra a experiência do quebra-cabeça da melancia no seu idioma</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}`}
                  className="bg-white p-6 rounded-xl game-shadow card-hover flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors duration-200"
                  hrefLang={lang.code}
                  aria-label={`Jogar o Jogo Suika em ${lang.name}`}
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
                  <span className="text-4xl" role="img" aria-label="Melancia">
                    🍉
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Jogo Suika</h3>
                <p className="text-gray-400 mb-6">
                  O destino definitivo para o jogo Suika e as variantes do quebra-cabeça da melancia. Jogue grátis online sem download.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        Jogar o Jogo Suika
                      </Link>
                    </li>
                    <li>
                      <Link href="/#games-like-suika" className="text-gray-400 hover:text-white transition-colors">
                        Variantes de Jogo
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                        Sobre Nós
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                        Contato
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Informação Legal</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                        Política de Privacidade
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                        Termos de Serviço
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2025 Jogo Suika. Todos os direitos reservados. • Jogue de forma responsável e divirta-se 🎮
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
