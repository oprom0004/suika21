import Link from "next/link";
import { GameEmbed } from "../components/GameEmbed";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "ClickWar - 世界征服戦略ゲーム | 無料プレイ",
  description: "ClickWarを無料でプレイ - 世界征服戦略ゲーム。ミサイルを発射し、領土を制圧して世界のリーダーになろう。ダウンロード不要、今すぐプレイ！",
  keywords: "ClickWar, 戦略ゲーム, オンラインゲーム, 世界戦争, ミサイル, 征服, 無料, 今すぐプレイ",
  authors: [{ name: "ClickWar Team" }],
  creator: "ClickWar",
  publisher: "ClickWar",
  category: "Games",
  other: {
    "theme-color": "#FFD600",
    "msapplication-TileColor": "#FFD600",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
  },
  openGraph: {
    title: "ClickWar - 世界征服戦略ゲーム",
    description: "ClickWarを無料でプレイ - 世界征服戦略ゲーム。ミサイルを発射して領土を制圧しよう！",
    type: "website",
    locale: "ja_JP",
    url: "https://clickwar.app/ja",
    images: [
      {
        url: "https://clickwar.app/screenshot-wide.png",
        width: 1200,
        height: 630,
        alt: "ClickWarゲームスクリーンショット"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickWar - 世界征服戦略ゲーム",
    description: "ClickWarを無料でプレイ - 世界征服戦略ゲーム！",
    images: ["https://clickwar.app/screenshot-wide.png"]
  },
  alternates: {
    canonical: "https://clickwar.app/ja",
    languages: {
      "x-default": "/",
      "en": "/",
      "vi": "/vn",
      "ja": "/ja",
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function JapaneseHomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "ClickWar",
            "description": "無料の世界征服戦略ゲーム",
            "url": "https://clickwar.app/ja",
            "applicationCategory": "Game",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250"
            },
            "author": {
              "@type": "Organization",
              "name": "ClickWar Team"
            },
            "inLanguage": "ja-JP",
            "genre": ["Strategy", "War", "Real-time"],
            "gamePlatform": ["Web Browser", "Mobile"],
            "screenshot": "https://clickwar.app/screenshot-wide.png",
            "softwareVersion": "1.0",
            "datePublished": "2024-01-01",
            "dateModified": "2024-12-01"
          })
        }}
      />
      
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "ホーム",
                "item": "https://clickwar.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "ClickWar 日本語",
                "item": "https://clickwar.app/ja"
              }
            ]
          })
        }}
      />
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "ClickWarの遊び方は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "国をクリックして選択し、ミサイルを発射して攻撃します。HPを0にして制圧し、帝国を拡大しましょう。"
                }
              },
              {
                "@type": "Question",
                "name": "ClickWarは無料ですか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "はい！登録やダウンロードは不要です。ブラウザで今すぐプレイできます。"
                }
              },
              {
                "@type": "Question",
                "name": "スマートフォンでプレイできますか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "もちろん！ClickWarは完全に互換性があり、すべてのデバイスで動作します。"
                }
              },
              {
                "@type": "Question",
                "name": "自分の国を守るには？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "自分の領土をクリックして回復し、防御シールドを追加します。攻撃と防御のバランスを取って最良の結果を得ましょう。"
                }
              }
            ]
          })
        }}
      />
      
      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ClickWar",
            "url": "https://clickwar.app",
            "logo": "https://clickwar.app/favicon.svg",
            "sameAs": [
              "https://discord.gg/xxxx",
              "https://reddit.com/r/clickwar"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "support@clickwar.app"
            }
          })
        }}
      />
      
              <main style={{ minHeight: "100vh", background: "#10131a", color: "#fff", fontFamily: "sans-serif" }} lang="ja">
          {/* Breadcrumb Navigation */}
          <nav style={{ padding: "12px 24px", background: "#181c27", borderBottom: "1px solid #23263a" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
              <Link href="/" style={{ color: "#FFD600", textDecoration: "none" }}>ホーム</Link>
              <span style={{ color: "#666" }}>/</span>
              <span style={{ color: "#fff" }}>日本語</span>
            </div>
          </nav>
          
          {/* Hero Section with Game */}
      <section style={{ padding: "20px 0 40px", textAlign: "center" }} aria-labelledby="main-title">
        <h1 style={{ fontSize: 48, fontWeight: "bold", margin: "20px 0 10px", textAlign: "center" }} id="main-title">
          🎯 CLICKWAR
        </h1>
                  <p style={{ textAlign: "center", fontSize: 20, marginBottom: 20 }}>
            世界征服戦略ゲーム
          </p>
        {/* Play Now Button instead of iframe */}
        <div style={{ margin: "40px auto 32px", maxWidth: 900, padding: "0 20px" }}>
          <a
            href="https://clickwar.games"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="ClickWarゲームを新しいタブで開く"
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #FFD600 0%, #d32f2f 100%)",
              color: "#181c27",
              fontWeight: 900,
              fontSize: 32,
              padding: "32px 64px",
              borderRadius: 24,
              boxShadow: "0 8px 32px rgba(255, 214, 0, 0.2)",
              border: "4px solid #FFD600",
              textDecoration: "none",
              transition: "all 0.2s",
              margin: "0 auto"
            }}
          >
            🚀 CLICKWARを今すぐプレイ
          </a>
        </div>
        {/* Hero CTA Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: 24 }}>
          <Link href="/how-to-play-clickwar" 
            title="ClickWarの詳細な遊び方ガイド"
            style={{ 
            background: "#181c27", 
            color: "#FFD600", 
            padding: "16px 32px", 
            borderRadius: 12, 
            fontWeight: "bold", 
            textDecoration: "none", 
            border: "2px solid #FFD600",
            transition: "all 0.3s ease"
          }}>
            📖 遊び方
          </Link>
          <Link href="/clickwar-strategy" 
            title="ClickWar戦略ガイド"
            style={{ 
            background: "#FFD600", 
            color: "#181c27", 
            padding: "16px 32px", 
            borderRadius: 12, 
            fontWeight: "bold", 
            textDecoration: "none",
            transition: "all 0.3s ease"
          }}>
            🎯 戦略ガイド
          </Link>
        </div>
      </section>

      {/* 特色介绍区块 */}
      <section style={{ maxWidth: 1100, margin: "48px auto 0", padding: 24 }}>
        <h2 style={{ color: "#FFD600", fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>なぜClickWarをプレイするのか？</h2>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
                      {[
            { icon: "🚀", title: "リアルタイムミサイル戦闘", desc: "リアルタイムミサイル攻撃とグローバル戦争を体験。" },
            { icon: "🌍", title: "世界征服", desc: "国々を征服し、領土を拡大して世界のリーダーになろう。" },
            { icon: "⚡", title: "即座のアクション", desc: "ダウンロード不要、登録不要。すべてのデバイスで今すぐオンラインプレイ。" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 32, flex: "1 1 280px", minWidth: 260, maxWidth: 340, textAlign: "center", marginBottom: 16, boxShadow: "0 4px 24px #0004" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 20, color: "#FFD600", marginBottom: 8 }}>{item.title}</div>
              <div style={{ color: "#eee", fontSize: 16 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 玩法攻略/新手引导/进阶技巧区块，紧跟特色介绍区块 */}
      <section style={{ maxWidth: 1100, margin: "48px auto 0", padding: 24 }}>
        <h2 style={{ color: "#FFD600", fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>ClickWarをマスターする方法</h2>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {/* 新手引导 */}
          <div style={{ background: "#181c27", border: "2px solid #2196f3", borderRadius: 16, padding: 32, flex: "1 1 280px", minWidth: 260, maxWidth: 340, textAlign: "center", marginBottom: 16, boxShadow: "0 4px 24px #0004" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🧭</div>
            <div style={{ fontWeight: 700, fontSize: 18, color: "#90caf9", marginBottom: 8 }}>初心者向けガイド</div>
            <ul style={{ color: "#eee", fontSize: 15, textAlign: "left", margin: "0 auto", maxWidth: 220, paddingLeft: 18 }}>
              <li>国をクリックしてターゲットを選択</li>
              <li>ミサイルを発射して敵のHPを削減</li>
              <li>国を制圧して帝国を拡大</li>
              <li>自分の領土を回復・防御</li>
            </ul>
          </div>
          {/* 玩法攻略 */}
          <div style={{ background: "#181c27", border: "2px solid #4caf50", borderRadius: 16, padding: 32, flex: "1 1 280px", minWidth: 260, maxWidth: 340, textAlign: "center", marginBottom: 16, boxShadow: "0 4px 24px #0004" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🎯</div>
            <div style={{ fontWeight: 700, fontSize: 18, color: "#81c784", marginBottom: 8 }}>戦略のヒント</div>
            <ul style={{ color: "#eee", fontSize: 15, textAlign: "left", margin: "0 auto", maxWidth: 220, paddingLeft: 18 }}>
              <li>弱い国から始めて勝利しやすくする</li>
              <li>ライブミサイルを追跡して戦略的機会を見つける</li>
              <li>攻撃と防御のバランスを取る</li>
              <li>ミサイルカウンターを監視する</li>
            </ul>
          </div>
          {/* 进阶技巧 */}
          <div style={{ background: "#181c27", border: "2px solid #ab47bc", borderRadius: 16, padding: 32, flex: "1 1 280px", minWidth: 260, maxWidth: 340, textAlign: "center", marginBottom: 16, boxShadow: "0 4px 24px #0004" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🔥</div>
            <div style={{ fontWeight: 700, fontSize: 18, color: "#ce93d8", marginBottom: 8 }}>上級テクニック</div>
            <ul style={{ color: "#eee", fontSize: 15, textAlign: "left", margin: "0 auto", maxWidth: 220, paddingLeft: 18 }}>
              <li>連続攻撃で素早く拡大</li>
              <li>弱体化した敵を利用する</li>
              <li>マップ認識を活用した多面戦争</li>
              <li>敵の行動に応じて戦略を適応</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ区块 */}
      <section style={{ maxWidth: 900, margin: "48px auto 0", padding: 24 }}>
        <h2 style={{ color: "#FFD600", fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>ClickWarよくある質問</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
                      {[
            {q: 'ClickWarの遊び方は？', a: '国をクリックして選択し、ミサイルを発射して攻撃します。HPを0にして制圧し、帝国を拡大しましょう。'},
            {q: 'ClickWarは無料ですか？', a: 'はい！登録やダウンロードは不要です。ブラウザで今すぐプレイできます。'},
            {q: 'スマートフォンでプレイできますか？', a: 'もちろん！ClickWarは完全に互換性があり、すべてのデバイスで動作します。'},
            {q: '自分の国を守るには？', a: '自分の領土をクリックして回復し、防御シールドを追加します。攻撃と防御のバランスを取って最良の結果を得ましょう。'},
          ].map((item, i) => (
            <div key={i} style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 24, flex: "1 1 340px", minWidth: 260, maxWidth: 400, marginBottom: 16, boxShadow: "0 4px 24px #0004" }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: "#FFD600", marginBottom: 8 }}>{item.q}</div>
              <div style={{ color: "#eee", fontSize: 15 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* You May Also Like 区块，已从上方移到此处，并标题英文化 */}
      <section style={{ maxWidth: 1100, margin: "32px auto 0", padding: 24 }}>
        <h2 style={{ color: "#FFD600", fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>おすすめページ</h2>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/what-is-clickwar-game" 
            title="ClickWarとは？世界征服戦略ゲームについて学ぶ"
            style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>❓</div>
            ClickWarとは<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>ClickWarとは？ゲームの定義と紹介</span>
          </Link>
          <Link href="/how-to-play-clickwar" 
            title="ClickWarの詳細な遊び方ガイド"
            style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>📖</div>
            ClickWarの遊び方<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>遊び方、図解ガイド、動画</span>
          </Link>
          <Link href="/play-clickwar-unblocked" 
            title="学校や職場でClickWarをプレイ"
            style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>🔓</div>
            ClickWarブロック解除版<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>学校/職場でClickWarをプレイ</span>
          </Link>
          <Link href="/clickwar-crazygames" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>🎮</div>
            ClickWar CrazyGames<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>CrazyGamesスタイルでClickWarを体験</span>
          </Link>
          <Link href="/clickwar-poki" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>🕹️</div>
            ClickWar Poki<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Pokiプラットフォームユーザー向け独占体験</span>
          </Link>
          <Link href="/clickwar-coolmathgames" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>📚</div>
            ClickWar CoolmathGames<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>CoolmathGames教育ユーザーにおすすめ</span>
          </Link>
          <Link href="/clickwar-tips" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>💡</div>
            ClickWarのヒント<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>実用的なヒントと上級アドバイス</span>
          </Link>
          <Link href="/clickwar-strategy" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>🧠</div>
            ClickWar戦略<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>戦略ガイドと勝利のアイデア</span>
          </Link>
        </div>
      </section>

      {/* What Players Say 区块 */}
      <section style={{ maxWidth: 900, margin: "40px auto 0", padding: 24 }}>
        <h2 style={{ color: "#FFD600", fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>プレイヤーの声</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          <blockquote style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 24, minWidth: 260, maxWidth: 400, color: "#FFD600", fontWeight: 700, fontSize: 17, boxShadow: "0 4px 24px #0004", margin: 0 }}>
            "ClickWarは今年プレイした中で最も中毒性のある戦略ゲームです！"
            <footer style={{ color: "#eee", fontWeight: 400, fontSize: 15, marginTop: 10 }}>- Alex, USA</footer>
          </blockquote>
          <blockquote style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 24, minWidth: 260, maxWidth: 400, color: "#FFD600", fontWeight: 700, fontSize: 17, boxShadow: "0 4px 24px #0004", margin: 0 }}>
            "学びやすく、マスターするのは難しい。グローバル戦闘が本当に激しい！"
            <footer style={{ color: "#eee", fontWeight: 400, fontSize: 15, marginTop: 10 }}>- Maria, Spain</footer>
          </blockquote>
        </div>
      </section>

      {/* Latest News & Updates 区块 */}
      <section style={{ maxWidth: 900, margin: "40px auto 0", padding: 24 }}>
        <h2 style={{ color: "#FFD600", fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>最新ニュース & アップデート</h2>
                  <ul style={{ color: "#FFD600", fontSize: 17, fontWeight: 700, background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 32, boxShadow: "0 4px 24px #0004", maxWidth: 700, margin: "0 auto" }}>
            <li>2024年6月: 新しいマップと同盟システムをリリース！</li>
            <li>2024年5月: ランキングシーズン開始。トップを目指して競争しよう！</li>
          </ul>
      </section>

      {/* Join the ClickWar Community 区块 */}
      <section style={{ maxWidth: 900, margin: "40px auto 0", padding: 24 }}>
        <h2 style={{ color: "#FFD600", fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>ClickWarコミュニティに参加</h2>
        <p style={{ color: "#eee", fontSize: 17, textAlign: "center", marginBottom: 18 }}>
          戦略を議論し、勝利を共有し、
          <a href="https://discord.gg/xxxx" target="_blank" rel="noopener noreferrer nofollow" style={{ color: "#FFD600", textDecoration: "underline", margin: "0 8px" }}> Discord</a>
          や
          <a href="https://reddit.com/r/clickwar" target="_blank" rel="noopener noreferrer nofollow" style={{ color: "#FFD600", textDecoration: "underline", margin: "0 8px" }}> Reddit</a>
          で他のプレイヤーと出会おう！
        </p>
      </section>

      {/* 底部CTA区块 */}
      <section style={{ background: "linear-gradient(90deg, #d32f2f 0%, #ffd600 100%)", padding: "48px 0", textAlign: "center", margin: "48px 0 0 0" }}>
        <h2 style={{ color: "#181c27", fontSize: 32, fontWeight: 800, marginBottom: 16 }}>世界征服の準備はできましたか？</h2>
        <p style={{ color: "#181c27", fontSize: 20, marginBottom: 32 }}>何千人ものプレイヤーと一緒に究極の戦略戦闘ClickWarに参加しましょう。ミサイルを発射し、領土を制圧し、世界のリーダーになろう！</p>
        <a href="#top" aria-label="ページトップに戻ってClickWarをプレイ" style={{ background: "#181c27", color: "#FFD600", fontWeight: 700, fontSize: 22, padding: "20px 48px", borderRadius: 16, textDecoration: "none", boxShadow: "0 4px 24px #0006", display: "inline-block", transition: "all .2s" }}>
          🚀 CLICKWARを今すぐプレイ
        </a>
      </section>

      <footer style={{ background: "#10131a", borderTop: "2px solid #23263a", textAlign: "center", color: "#aaa", fontSize: 15, marginTop: 0, padding: "32px 12px 20px 12px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div style={{ fontWeight: 700, color: "#FFD600" }}>CLICKWAR &copy; {new Date().getFullYear()}</div>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="/privacy-policy" title="ClickWarプライバシーポリシー" style={{ color: "#FFD600", textDecoration: "none" }}>プライバシーポリシー</a>
            <a href="/terms-of-service" title="ClickWar利用規約" style={{ color: "#FFD600", textDecoration: "none" }}>利用規約</a>
          </div>
          <div style={{ color: "#FFD600" }}>お問い合わせ: <a href="mailto:support@clickwar.app" style={{ color: "#FFD600", textDecoration: "underline" }}>support@clickwar.app</a></div>
        </div>
        <div style={{ marginTop: 16, color: "#666", fontSize: 13 }}><span style={{ color: "#e53935" }}>❤️</span> ClickWar Team によって作成</div>
      </footer>
    </main>
    </>
  );
} 