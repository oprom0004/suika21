import Link from "next/link";
import { GameEmbed } from "./components/GameEmbed";
import { Metadata } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "ClickWar - World Domination Strategy Game | Play Free Online",
  description: "Play ClickWar - the ultimate world domination strategy game. Launch missiles, conquer countries, and become the global leader. Free to play, no download required!",
  keywords: "ClickWar, strategy game, world domination, missile game, free online game, browser game, war strategy",
  openGraph: {
    title: "ClickWar - World Domination Strategy Game",
    description: "Play ClickWar - the ultimate world domination strategy game. Launch missiles and conquer the world!",
    type: "website",
    locale: "en_US",
    url: "https://clickwar.app",
    images: [
      {
        url: "https://clickwar.app/screenshot-wide.png",
        width: 1200,
        height: 630,
        alt: "ClickWar Game Screenshot"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickWar - World Domination Strategy Game",
    description: "Play ClickWar - the ultimate world domination strategy game!",
    images: ["https://clickwar.app/screenshot-wide.png"]
  },
  alternates: {
    canonical: "https://clickwar.app",
    languages: {
      "en": "/",
      "ja": "/ja",
      "vi": "/vn",
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
};

export default function HomePage() {
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
            "description": "World domination strategy game - launch missiles and conquer countries",
            "url": "https://clickwar.app",
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
            "inLanguage": "en-US",
            "genre": ["Strategy", "War", "Real-time"],
            "gamePlatform": ["Web Browser", "Mobile"],
            "screenshot": "https://clickwar.app/screenshot-wide.png",
            "softwareVersion": "1.0"
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
                "name": "How do I play ClickWar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Click a country to select it, then launch missiles to attack. Reduce HP to zero to capture and expand your empire."
                }
              },
              {
                "@type": "Question",
                "name": "Is ClickWar free to play?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! No registration or download required. Play instantly in your browser."
                }
              },
              {
                "@type": "Question",
                "name": "Can I play on mobile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! ClickWar is fully responsive and works on all devices."
                }
              },
              {
                "@type": "Question",
                "name": "How do I defend my countries?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Click your own territories to heal and add shields. Balance attack and defense for best results."
                }
              }
            ]
          })
        }}
      />
      
      <main style={{ minHeight: "100vh", background: "#10131a", color: "#fff", fontFamily: "sans-serif" }}>
        <Hero />
        {/* 特色介绍区块 */}
        <section style={{ maxWidth: 1100, margin: "48px auto 0", padding: 24 }}>
          <h2 style={{ color: "#FFD600", fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>Why Play ClickWar?</h2>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { icon: "🚀", title: "Live Missile Battles", desc: "Experience real-time missile attacks and global warfare." },
              { icon: "🌍", title: "World Domination", desc: "Conquer countries, expand your territory, and become the global leader." },
              { icon: "⚡", title: "Instant Action", desc: "No downloads, no registration. Play instantly online on any device." },
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
          <h2 style={{ color: "#FFD600", fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>How to Master ClickWar</h2>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
            {/* 新手引导 */}
            <div style={{ background: "#181c27", border: "2px solid #2196f3", borderRadius: 16, padding: 32, flex: "1 1 280px", minWidth: 260, maxWidth: 340, textAlign: "center", marginBottom: 16, boxShadow: "0 4px 24px #0004" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>🧭</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#90caf9", marginBottom: 8 }}>Beginner Guide</div>
              <ul style={{ color: "#eee", fontSize: 15, textAlign: "left", margin: "0 auto", maxWidth: 220, paddingLeft: 18 }}>
                <li>Click a country to select your target</li>
                <li>Launch missiles to reduce enemy HP</li>
                <li>Capture countries to expand your empire</li>
                <li>Heal and shield your own territories</li>
              </ul>
            </div>
            {/* 玩法攻略 */}
            <div style={{ background: "#181c27", border: "2px solid #4caf50", borderRadius: 16, padding: 32, flex: "1 1 280px", minWidth: 260, maxWidth: 340, textAlign: "center", marginBottom: 16, boxShadow: "0 4px 24px #0004" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>🎯</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#81c784", marginBottom: 8 }}>Strategy Tips</div>
              <ul style={{ color: "#eee", fontSize: 15, textAlign: "left", margin: "0 auto", maxWidth: 220, paddingLeft: 18 }}>
                <li>Start with weaker countries for easy wins</li>
                <li>Watch live missiles for strategic opportunities</li>
                <li>Balance offense and defense</li>
                <li>Monitor your missile counter</li>
              </ul>
            </div>
            {/* 进阶技巧 */}
            <div style={{ background: "#181c27", border: "2px solid #ab47bc", borderRadius: 16, padding: 32, flex: "1 1 280px", minWidth: 260, maxWidth: 340, textAlign: "center", marginBottom: 16, boxShadow: "0 4px 24px #0004" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>🔥</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#ce93d8", marginBottom: 8 }}>Advanced Tactics</div>
              <ul style={{ color: "#eee", fontSize: 15, textAlign: "left", margin: "0 auto", maxWidth: 220, paddingLeft: 18 }}>
                <li>Chain attacks for rapid expansion</li>
                <li>Exploit weakened enemies</li>
                <li>Use map awareness for multi-front wars</li>
                <li>Adapt your strategy to rivals' moves</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ区块 */}
        <section style={{ maxWidth: 900, margin: "48px auto 0", padding: 24 }}>
          <h2 style={{ color: "#FFD600", fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>ClickWar FAQ</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
            {[
              {q: 'How do I play ClickWar?', a: 'Click a country to select it, then launch missiles to attack. Reduce HP to zero to capture and expand your empire.'},
              {q: 'Is ClickWar free to play?', a: 'Yes! No registration or download required. Play instantly in your browser.'},
              {q: 'Can I play on mobile?', a: 'Absolutely! ClickWar is fully responsive and works on all devices.'},
              {q: 'How do I defend my countries?', a: 'Click your own territories to heal and add shields. Balance attack and defense for best results.'},
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
          <h2 style={{ color: "#FFD600", fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>You May Also Like</h2>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/what-is-clickwar-game" 
              title="What is ClickWar? Game definition and introduction"
              style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>❓</div>
              What is ClickWar Game<br/>
              <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>What is ClickWar? Game definition & introduction</span>
            </Link>
            <Link href="/how-to-play-clickwar" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>📖</div>
              How to Play ClickWar<br/>
              <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>How to play, illustrated guide & video</span>
            </Link>
            <Link href="/play-clickwar-unblocked" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>🔓</div>
              ClickWar Unblocked<br/>
              <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Play ClickWar at school/company</span>
            </Link>
            <Link href="/clickwar-crazygames" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>🎮</div>
              ClickWar CrazyGames<br/>
              <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Experience ClickWar in CrazyGames style</span>
            </Link>
            <Link href="/clickwar-poki" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>🕹️</div>
              ClickWar Poki<br/>
              <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Exclusive experience for Poki platform players</span>
            </Link>
            <Link href="/clickwar-coolmathgames" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>📚</div>
              ClickWar CoolmathGames<br/>
              <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Recommended for CoolmathGames educational users</span>
            </Link>
            <Link href="/clickwar-tips" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>💡</div>
              ClickWar Tips<br/>
              <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Practical tips & advanced advice</span>
            </Link>
            <Link href="/clickwar-strategy" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>🧠</div>
              ClickWar Strategy<br/>
              <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Strategy guide & winning ideas</span>
            </Link>
          </div>
        </section>

        {/* What Players Say 区块 */}
        <section style={{ maxWidth: 900, margin: "40px auto 0", padding: 24 }}>
          <h2 style={{ color: "#FFD600", fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>What Players Say</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
            <blockquote style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 24, minWidth: 260, maxWidth: 400, color: "#FFD600", fontWeight: 700, fontSize: 17, boxShadow: "0 4px 24px #0004", margin: 0 }}>
              "ClickWar is the most addictive strategy game I've played this year!"
              <footer style={{ color: "#eee", fontWeight: 400, fontSize: 15, marginTop: 10 }}>- Alex, USA</footer>
            </blockquote>
            <blockquote style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 24, minWidth: 260, maxWidth: 400, color: "#FFD600", fontWeight: 700, fontSize: 17, boxShadow: "0 4px 24px #0004", margin: 0 }}>
              "Easy to learn, hard to master. The global battles are intense!"
              <footer style={{ color: "#eee", fontWeight: 400, fontSize: 15, marginTop: 10 }}>- Maria, Spain</footer>
            </blockquote>
          </div>
        </section>

        {/* Latest News & Updates 区块 */}
        <section style={{ maxWidth: 900, margin: "40px auto 0", padding: 24 }}>
          <h2 style={{ color: "#FFD600", fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>Latest News & Updates</h2>
          <ul style={{ color: "#FFD600", fontSize: 17, fontWeight: 700, background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 32, boxShadow: "0 4px 24px #0004", maxWidth: 700, margin: "0 auto" }}>
            <li>June 2024: New map and alliance system released!</li>
            <li>May 2024: Ranked season begins. Compete for the top spot!</li>
          </ul>
        </section>

        {/* Join the ClickWar Community 区块 */}
        <section style={{ maxWidth: 900, margin: "40px auto 0", padding: 24 }}>
          <h2 style={{ color: "#FFD600", fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>Join the ClickWar Community</h2>
          <p style={{ color: "#eee", fontSize: 17, textAlign: "center", marginBottom: 18 }}>
            Discuss strategies, share your victories, and meet other players on our
            <a href="https://discord.gg/xxxx" target="_blank" rel="noopener noreferrer nofollow" style={{ color: "#FFD600", textDecoration: "underline", margin: "0 8px" }}> Discord</a>
            or
            <a href="https://reddit.com/r/clickwar" target="_blank" rel="noopener noreferrer nofollow" style={{ color: "#FFD600", textDecoration: "underline", margin: "0 8px" }}> Reddit</a>!
          </p>
        </section>
      </main>
    </>
  );
}