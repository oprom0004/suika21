import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "スイカゲーム - 無料でプレイできるウォーターメロンパズル | ダウンロード不要",
  description:
    "🍉 スイカゲームを無料でプレイ！このウイルス的な日本発のパズルゲームで、フルーツをマージしてスイカを作ろう。広告なし、ダウンロード不要。モバイル対応で11種類のバリエーション。今すぐプレイ！",
  keywords: [
    "suika game",
    "スイカゲーム",
    "フルーツマージゲーム",
    "日本のパズルゲーム",
    "ウォーターメロンパズル",
    "スイカゲームオンライン",
    "無料スイカゲーム",
    "フルーツパズルゲーム",
    "マージパズル",
    "ウォーターメロンマージゲーム",
    "スイカゲーム制限なし",
    "日本のスイカゲーム",
    "フルーツドロップゲーム",
    "物理パズルゲーム",
    "カジュアルパズルゲーム",
    "モバイルパズルゲーム",
    "ブラウザゲーム",
    "ダウンロード不要ゲーム",
    "無料オンラインパズル",
    "ウイルス的パズルゲーム",
  ].join(", "),
  authors: [{ name: "Suika Games Team" }],
  creator: "Suika Games",
  publisher: "Suika Games",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://suika.games/ja",
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
    locale: "ja_JP",
    url: "https://suika.games/ja",
    siteName: "Suika Games",
    title: "スイカゲーム - 無料でプレイできるウォーターメロンパズル",
    description:
      "🍉 ウイルス的な日本発のスイカパズルゲームを無料でプレイ！フルーツをマージしてスイカを作ろう。11種類以上のバリエーションを楽しもう。ダウンロード不要！",
    images: [
      {
        url: "https://suika.games/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "スイカゲーム - オンラインウォーターメロンパズル",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SuikaGames",
    creator: "@SuikaGames",
    title: "スイカゲーム - 無料でプレイできるウォーターメロンパズル",
    description:
      "🍉 ウイルス的な日本発のスイカパズルゲームを無料でプレイ！フルーツをマージしてスイカを作ろう。ダウンロード不要！",
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
    name: "スイカゲーム",
    description: "世界的な現象となった元祖パズルゲーム。",
    thumbnail: "/watermelon-puzzle-game.png",
  },
  {
    name: "フルーツマージ",
    description: "シンプルなグラフィックで高速マージが楽しめるミニマルなバージョン。",
    thumbnail: "/minimalist-fruit-merge-game.png",
  },
  {
    name: "スイカ テイラースウィフト",
    description: "ポップスターとフルーツカオスが融合したセレブリティバージョン。",
    thumbnail: "/celebrity-fruit-game.png",
  },
  {
    name: "シーフルーツマージ",
    description: "海の音響効果が特徴の海洋テーマのフルーツドロップ体験。",
    thumbnail: "/underwater-fruit-game.png",
  },
  {
    name: "ファウナメロン スイカゲーム",
    description: "VTuber風のかわいいエフェクトとアニメ調のデザイン。",
    thumbnail: "/vtuber-fauna-watermelon-game.png",
  },
  {
    name: "スイカコネクトワールド",
    description: "大陸を越えて旅するフルーツマップアドベンチャー。",
    thumbnail: "/world-map-fruit-puzzle.png",
  },
  {
    name: "スイカ ホロライブまんじゅう",
    description: "バーチャルYouTuberキャラクターとのホロライブコラボ。",
    thumbnail: "/hololive-anime-fruit-game.png",
  },
  {
    name: "2048 スイカゲーム",
    description: "スイカと2048のメカニクスを組み合わせたダブルパズル。",
    thumbnail: "/2048-fruit-puzzle.png",
  },
  {
    name: "りんごスイカゲーム",
    description: "レトロサウンドとクラシックアーケード風のりんごバージョン。",
    thumbnail: "/apple-retro-fruit-game.png",
  },
  {
    name: "スイカ シンセティック",
    description: "ネオングラフィックと電子音楽のSFスタイル。",
    thumbnail: "/cyberpunk-fruit-game.png",
  },
  {
    name: "スイカ アンブロックド",
    description: "学校や職場で制限なくプレイできるフルアクセスバージョン。",
    thumbnail: "/suika-unblocked-game.png",
  },
  {
    name: "ホロスイカゲーム",
    description: "ホログラフィック効果付きの人気アニメマッシュアップ。",
    thumbnail: "/holographic-anime-fruit.png",
  },
  {
    name: "クールマス スイカウォーターメロン",
    description: "教室でも楽しめるスイカゲームバージョン。",
    thumbnail: "/cool-math-suika-game.png",
  },
  {
    name: "ウォーターメロンGO スイカ",
    description: "高速な物理演算が特徴のモバイルファースト版。",
    thumbnail: "/watermelon-go-suika-game.png",
  },
  {
    name: "スイカゲーム Scratch",
    description: "Scratchプラットフォームで作られたファン制作版。",
    thumbnail: "/suika-game-scratch.png",
  },
  {
    name: "スイカゲーム Poki",
    description: "パフォーマンスが向上し、スムーズなゲームプレイが特徴の公式Pokiバージョン。",
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
    question: "スイカゲームとは？",
    answer:
      "スイカゲームは、フルーツを落としてマージさせ、より大きなフルーツを作る日本発のパズルゲームです。最終目標は、ゲーム内で最大のフルーツであるスイカを作ることです。シンプルながら中毒性のあるゲームプレイで世界的に人気となりました。",
  },
  {
    question: "モバイルでプレイできますか？",
    answer:
      "はい！スイカゲームはモバイルデバイスに完全対応しています。スマートフォンやタブレットで、直感的なタッチコントロールを使って、どんな画面サイズでも簡単に楽しくフルーツを落としてポジショニングできます。",
  },
  {
    question: "なぜこんなに面白いの？",
    answer:
      "シンプルなメカニクス、リアルな物理演算、戦略的思考の組み合わせが、非常に魅力的な体験を生み出しています。物理エンジンのおかげで毎回のゲームがユニークで、前回のハイスコアを超える挑戦が常に満足感を与えてくれます。",
  },
  {
    question: "どうやって勝つの？",
    answer:
      "戦略的なフルーツのマージでスイカを作ることが勝利条件です。鍵となるのは、効率的なスペース管理、先を見据えた計画、物理演算の理解です。コンテナが一杯になるまでゲームは続くので、連鎖反応を起こしてスコアを最大化することに集中しましょう。",
  },
]

const fruitEvolution = [
  { name: "さくらんぼ", emoji: "🍒", size: "最小", points: "10" },
  { name: "いちご", emoji: "🍓", size: "小", points: "20" },
  { name: "ぶどう", emoji: "🍇", size: "小+", points: "40" },
  { name: "デコポン", emoji: "🍊", size: "中-", points: "80" },
  { name: "オレンジ", emoji: "🍊", size: "中", points: "160" },
  { name: "りんご", emoji: "🍎", size: "中+", points: "320" },
  { name: "なし", emoji: "🍐", size: "大-", points: "640" },
  { name: "もも", emoji: "🍑", size: "大", points: "1280" },
  { name: "パイナップル", emoji: "🍍", size: "大+", points: "2560" },
  { name: "メロン", emoji: "🍈", size: "特大", points: "5120" },
  { name: "スイカ", emoji: "🍉", size: "最大", points: "10240" },
]

const latestUpdates = [
  {
    date: "2025-06-30",
    title: "新しいスイカゲームバリエーション追加",
    description: "スイカアンブロックドやセレブリティバージョンを含む3つの新しいバリエーションを発見しよう。",
    category: "新作ゲーム",
    link: "/#games-like-suika",
  },
  {
    date: "2025-06-25",
    title: "モバイルパフォーマンス改善",
    description: "全てのゲームバリエーションでタッチコントロールの向上と読み込み時間の短縮を実現。",
    category: "アップデート",
    link: "/",
  },
  {
    date: "2025-06-22",
    title: "プロ戦略ガイド公開",
    description: "ハイスコアを達成するための包括的な戦略ガイドで高度なテクニックをマスター。",
    category: "ガイド",
    link: "/howtowin",
  },
  {
    date: "2025-06-20",
    title: "多言語サポート拡大",
    description: "ローカライズされたコンテンツと説明で6つの言語でスイカゲームをプレイ。",
    category: "機能",
    link: "/#language-switcher",
  },
]

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Suika Games",
  alternateName: "スイカゲーム",
  url: "https://suika.games/ja",
  description: "スイカゲームとウォーターメロンパズルのバリエーションを無料でオンラインプレイ。ダウンロード不要。",
  inLanguage: ["en", "ja", "es", "pt", "fr", "de", "nl"],
  isAccessibleForFree: true,
  genre: ["パズル", "カジュアル", "物理演算"],
  audience: {
    "@type": "Audience",
    audienceType: "一般向け",
  },
  publisher: {
    "@type": "Organization",
    name: "Suika Games",
    url: "https://suika.games",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://suika.games/ja?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@type": "Game",
    name: "スイカゲーム",
    alternateName: "ウォーターメロンゲーム",
    description:
      "プレイヤーがフルーツを落としてマージし、より大きなフルーツを作る日本発のパズルゲーム。最終目標はスイカを作ること。",
    genre: "パズル",
    playMode: "シングルプレイヤー",
    applicationCategory: "ゲーム",
    operatingSystem: "ウェブブラウザ",
    isAccessibleForFree: true,
    gamePlatform: ["ウェブブラウザ", "モバイル", "デスクトップ"],
    numberOfPlayers: "1",
    contentRating: "全年齢対象",
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
              スイカゲームを無料でプレイ - ウォーターメロンパズルゲーム
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
              🍉 フルーツをマージしてスイカを作ろう！広告なし、ダウンロード不要。
            </p>
            <p className="text-lg text-gray-600 mb-8">
              12種類以上のバリエーション • モバイル対応 • 今すぐプレイ
            </p>
          </div>

          <div className="w-full max-w-4xl game-shadow rounded-3xl overflow-hidden bg-white p-2">
            <iframe
              src="https://suikagamejp.com/game/game-en"
              title="スイカゲーム - 無料でオンラインプレイ"
              className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              allow="gamepad; microphone; camera"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              🎮 オリジナル日本発スイカゲーム • 🆓 無料プレイ • 📱 モバイル対応 • 🚫 登録不要
            </p>
          </div>
        </section>

        {/* Section 2: Suika Game Variants */}
        <section id="games-like-suika" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                スイカゲームのバリエーション＆クリエイティブリミックス
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                オリジナルのウォーターメロンパズルと世界中のファンメイドバリエーションを探索しよう
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gameVariants.map((game, index) => (
                <article key={index} className="bg-white rounded-xl p-6 game-shadow card-hover">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={game.thumbnail || "/placeholder.svg"}
                      alt={`${game.name} - このスイカゲームバリエーションを無料でプレイ`}
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
                    aria-label={`${game.name}を無料でプレイ`}
                  >
                    今すぐプレイ
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
              スイカゲームの遊び方
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="りんご">
                    🍎
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">1. 上からフルーツを落とす</h3>
                <p className="text-gray-600">
                  コンテナの上からフルーツを落として、マージプロセスを開始し、フルーツタワーを作ります。
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="オレンジ">
                    🍊
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">2. 同じフルーツをマージ</h3>
                <p className="text-gray-600">
                  同じフルーツが触れ合うと、自動的に進化チェーンの次に大きなフルーツにマージします。
                </p>
              </article>

              <article className="text-center p-8 bg-white rounded-xl game-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="スイカ">
                    🍉
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">3. スイカを作る</h3>
                <p className="text-gray-600">
                  戦略的にマージを続けて、最終的なスイカを作り、最高スコアを目指しましょう！
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
                📌 フルーツのマージ方法 - 完全進化ガイド
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                フルーツ進化システムをマスターし、全てのマージの組み合わせを理解してスコアを最大化しよう
              </p>
            </div>

            {/* Fruit Evolution Chain */}
            <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                🍒➡️🍉 フルーツ進化チェーン完全版
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {fruitEvolution.map((fruit, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center game-shadow">
                    <div className="text-4xl mb-2">{fruit.emoji}</div>
                    <h4 className="font-semibold text-gray-900 text-sm">{fruit.name}</h4>
                    <p className="text-xs text-gray-600">{fruit.size}</p>
                    <p className="text-xs font-medium text-green-600">{fruit.points}点</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 マージのルールとヒント</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">✅ 成功するマージ</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 同じフルーツが物理的に接触する必要があります</li>
                      <li>• マージは接触時に即座に発生します</li>
                      <li>• 新しいフルーツは接触点に出現します</li>
                      <li>• 連鎖反応は自動的に発生します</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">⚠️ よくある失敗</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• フルーツは完全に同じ種類である必要があります</li>
                      <li>• 離れているフルーツはマージしません</li>
                      <li>• 物理演算が意図したマージを妨げることがあります</li>
                      <li>• コンテナのオーバーフローでゲームオーバーです</li>
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
                  チェーンマージ
                </h3>
                <p className="text-gray-700 mb-4">
                  同じフルーツを連続して配置し、カスケードマージを作成。1回の戦略的なドロップで3-5回の連続マージが可能です。
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>プロのヒント：</strong> 最大の連鎖を生み出すために、フルーツを一列や集団で配置しましょう。
                </div>
              </article>

              <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  精密ドロップ
                </h3>
                <p className="text-gray-700 mb-4">
                  コンテナの壁や既存のフルーツを利用して、新しいフルーツを狙った場所に正確に落とします。
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>プロのヒント：</strong> バウンドの方向をコントロールするため、フルーツの端を狙いましょう。
                </div>
              </article>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🏗️</span>
                  土台作り
                </h3>
                <p className="text-gray-700 mb-4">
                  大きなフルーツで安定した土台層を作り、小さなフルーツを支えて混沌とした転がりを防ぎます。
                </p>
                <div className="bg-white rounded-lg p-3 text-sm">
                  <strong>プロのヒント：</strong> 最大のフルーツは角に配置しましょう - 最も安定した位置です。
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section 5: Strategy Tips */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              スイカゲームのプロ戦略ヒント
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-12">
              フルーツマージとスイカ作成の技術をマスターしよう
            </h3>

            <div className="bg-white rounded-xl p-8 game-shadow mb-8">
              <p className="text-xl text-gray-600 mb-8 text-center">
                もっと勝ちたいですか？トップスイカゲームプレイヤーからのエキスパート戦略をご紹介します：
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <article className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Target">
                      🎯
                    </span>
                    先を見据えて手を計画する
                  </h4>
                  <p className="text-gray-700">
                    フルーツをランダムに落とさないでください—フルーツキューを監視し、最大効率のために組み合わせを計画しましょう。
                  </p>
                </article>

                <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Location">
                      📍
                    </span>
                    中央エリアを低く保つ
                  </h4>
                  <p className="text-gray-700">
                    戦略的なマージのための中央にスペースを確保するため、壁の近くに高いスタックを構築しましょう。
                  </p>
                </article>

                <article className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="House">
                      🏠
                    </span>
                    角を戦略的に使用する
                  </h4>
                  <p className="text-gray-700">
                    最大の安定性のために、壁で支えられた角に大きなフルーツを配置しましょう。
                  </p>
                </article>

                <article className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3" role="img" aria-label="Warning">
                      ⚠️
                    </span>
                    コンテナのオーバーフローを避ける
                  </h4>
                  <p className="text-gray-700">
                    充填レベルを監視し、コンテナが70%満杯になったらマージを優先しましょう。
                  </p>
                </article>
              </div>

              <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3" role="img" aria-label="Lightning">
                    ⚡
                  </span>
                  チェーンコンボをマスターする
                </h4>
                <p className="text-gray-700">
                  最大ポイントのために、単一の戦略的なフルーツドロップで複数のマージをトリガーする方法を学びましょう。
                </p>
              </article>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  練習が完璧を作ります！プレイすればするほど、フルーツの配置が直感的になります。🍉
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
                🏆 スイカゲームハイスコアチャレンジ – スイカに到達できますか？
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                スイカゲームが得意だと思いますか？スキルをテストして究極のハイスコアを目指しましょう！
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 game-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🎯</span>
                    ハイスコア基準
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-bronze-50 to-bronze-100 rounded-lg p-4 border-l-4 border-yellow-600">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">初級者</span>
                        <span className="font-bold text-yellow-600">500+ ポイント</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">最初の数回の成功したマージ</p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-gray-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">中級者</span>
                        <span className="font-bold text-gray-600">1,500+ ポイント</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">大きなフルーツに一貫して到達</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4 border-l-4 border-yellow-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">上級者</span>
                        <span className="font-bold text-yellow-600">3,000+ ポイント</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">優秀 - コンボと戦略の習得</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">エキスパート</span>
                        <span className="font-bold text-green-600">5,000+ ポイント</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">スイカ達成 - 真のマスター！</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🍒</span>
                    完全フルーツ順序
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      ゲームにはサイズ順に<strong>11個のフルーツ</strong>が含まれています：
                    </p>
                    <div className="text-sm text-gray-800 space-y-1 mb-4">
                      <div className="flex items-center justify-between">
                        <span>🍒 さくらんぼ</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍓 いちご</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍇 ぶどう</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍊 デコポン</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🟠 かき</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍎 りんご</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍐 なし</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍑 もも</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍍 パイナップル</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>🍈 メロン</span>
                        <span className="text-xs text-gray-500">→</span>
                      </div>
                      <div className="flex items-center justify-between font-bold text-green-600">
                        <span>🍉 スイカ</span>
                        <span className="text-lg">🏆</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  プロチャレンジヒント
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">
                      <strong>🎯 戦略的配置：</strong>
                    </p>
                    <p>中央を低く保ち、端に積み重ね、チェーンマージでトップに到達しましょう。</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>⏱️ スピードチャレンジ：</strong>
                    </p>
                    <p>
                      一部のスピードランナーはわずか<strong>2分20秒</strong>でスイカに到達しています！
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🧠 物理演算の理解：</strong>
                    </p>
                    <p>スイカまでマージするには、忍耐、計画、物理演算の習得が必要です。</p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong>🔄 コンボマスター：</strong>
                    </p>
                    <p>指数関数的なポイント獲得とスペース効率のために複数のマージを連鎖させましょう。</p>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 自分の最高記録を更新できますか？</h3>
                <p className="text-gray-700 mb-6">
                  新しい高みに挑戦し、スイカパズルをマスターしたエリートプレイヤーに加わりましょう！
                </p>
                <a
                  href="/#game"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-colors duration-200 text-lg"
                >
                  🎮 スイカゲームをプレイ
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Latest Suika Game Updates - 简版博客更新入口 */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">📌 最新のスイカゲームアップデートとニュース</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                最新のゲームバリエーション、機能、コミュニティハイライトで最新情報を入手しましょう
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
                        {new Date(update.date).toLocaleDateString("en-US", {
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
                    詳細を見る
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-xl p-8 game-shadow text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔔 スイカゲームニュースで最新情報を入手</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                新しいゲームバリエーション、戦略ガイド、限定コンテンツの通知を受け取りましょう。スイカパズル愛好家のコミュニティに参加しましょう！
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="メールアドレスを入力してください"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-colors duration-200">
                  購読
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">スパムはありません、いつでも購読解除可能です。プライバシーを尊重します。</p>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              スイカゲームについてよくある質問
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
              スイカゲームについて：ウイルス的な日本発スイカパズル現象
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                <strong>スイカゲーム</strong>は、<strong>ウォーターメロンゲーム</strong>としても知られる、日本発祥で世界中の何百万人ものプレイヤーを魅了しているウイルス的なパズル現象です。この中毒性のある<strong>フルーツマージゲーム</strong>は、プレイヤーにコンテナ内でフルーツを落として戦略的に配置し、物理ベースのマージメカニクスを通じてより大きなフルーツを作ることを挑戦します。最終目標は、この魅力的な<strong>スイカパズル</strong>で最大で最も報酬の高いフルーツである<strong>スイカ</strong>を成功裏に作成するまでフルーツの組み合わせをマージすることです。
              </p>

              <p>
                <strong>スイカゲーム</strong>のゲームプレイメカニクスは、現実的な重力と物理演算シミュレーションに依存し、類似のフルーツが自動的に結合してフルーツ進化チェーンの次の段階を作成します。プレイヤーがこの<strong>マージフルーツ体験</strong>で進歩するにつれて、オーバーフローを防ぐために戦略的なフルーツ配置を計画しながら、限られたコンテナスペースを慎重に管理する必要があります。<strong>スイカパズル</strong>は、コンテナが満杯になるにつれてますます挑戦的になり、プレイヤーに数手先を考え、最大スコアリングポテンシャルのための効率的な連鎖反応を作成することを要求します。
              </p>

              <p>
                ニッチな<strong>日本のパズルゲーム</strong>として始まったものが、TikTok、YouTubeゲームチャンネル、VTuberライブストリームでのウイルス的なソーシャルメディアコンテンツのおかげで、すぐに世界的なゲームセンセーションに爆発しました。シンプルながら深く魅力的な<strong>スイカゲームメカニクス</strong>は、短編動画コンテンツに最適で、プレイヤーが満足のいく<strong>マージフルーツの瞬間</strong>とハイスコアの成果を共有しました。この有機的なウイルス的成長により、謙虚な<strong>スイカパズル</strong>が、毎日新しいプレイヤーを引き付け続ける国際的な現象に変わりました。
              </p>

              <p>
                今日、<strong>スイカゲームコミュニティ</strong>は、セレブリティテーマ版からアニメクロスオーバーまで、無数の創造的なバリエーションとリミックスを作成しており、それぞれがコアの<strong>マージフルーツゲームプレイ</strong>を維持しながら、ユニークな視覚的テーマとメカニクスを追加しています。リラックスしたパズルエンターテイメントを求めるカジュアルプレイヤーであろうと、リーダーボード支配を目指す競争的なゲーマーであろうと、この<strong>スイカパズル</strong>は、シンプルなコントロール、戦略的深さ、満足のいく物理ベースの<strong>フルーツマージアクション</strong>の完璧なブレンドを通じて、無限のリプレイ価値を提供します。
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Language Switcher */}
        <section id="language-switcher" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">お好みの言語でスイカゲームをプレイ</h2>
            <p className="text-xl text-gray-600 mb-12">お好みの言語でスイカパズルを体験しましょう</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}`}
                  className="bg-white p-6 rounded-xl game-shadow card-hover flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors duration-200"
                  hrefLang={lang.code}
                  aria-label={`Play Suika Game in ${lang.name}`}
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
                  <span className="text-4xl" role="img" aria-label="Watermelon">
                    🍉
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">スイカゲーム</h3>
                <p className="text-gray-400 mb-6">
                  スイカゲームとスイカパズルバリエーションの究極の目的地。ダウンロード不要で無料オンラインプレイ。
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">クイックリンク</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        スイカゲームをプレイ
                      </Link>
                    </li>
                    <li>
                      <Link href="/#games-like-suika" className="text-gray-400 hover:text-white transition-colors">
                        ゲームバリエーション
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                        私たちについて
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                        お問い合わせ
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">法的情報</h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                        プライバシーポリシー
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                        利用規約
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2025 スイカゲーム。全著作権所有。 • 責任を持ってプレイして楽しみましょう！🎮
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
