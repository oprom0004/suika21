import Link from "next/link";
import { GameEmbed } from "../components/GameEmbed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClickWar - Trò Chơi Chiến Lược Thống Trị Thế Giới | Chơi Miễn Phí",
  description: "Chơi ClickWar - trò chơi chiến lược thống trị thế giới miễn phí. Phóng tên lửa, chiếm lĩnh lãnh thổ và trở thành nhà lãnh đạo toàn cầu. Không cần tải xuống, chơi ngay!",
  keywords: "ClickWar, trò chơi chiến lược, game online, chiến tranh thế giới, tên lửa, thống trị, miễn phí, chơi ngay",
  openGraph: {
    title: "ClickWar - Trò Chơi Chiến Lược Thống Trị Thế Giới",
    description: "Chơi ClickWar miễn phí - trò chơi chiến lược thống trị thế giới. Phóng tên lửa và chiếm lĩnh lãnh thổ!",
    type: "website",
    locale: "vi_VN",
    url: "https://clickwar.app/vn",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickWar - Trò Chơi Chiến Lược Thống Trị Thế Giới",
    description: "Chơi ClickWar miễn phí - trò chơi chiến lược thống trị thế giới!",
  },
  alternates: {
    canonical: "https://clickwar.app/vn",
    languages: {
      "en": "/",
      "vi": "/vn",
      "es": "/es",
      "fr": "/fr",
      "de": "/de",
      "ja": "/ja",
      "nl": "/nl",
      "pt": "/pt",
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

export default function VietnameseHomePage() {
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
            "description": "Trò chơi chiến lược thống trị thế giới miễn phí",
            "url": "https://clickwar.app/vn",
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
            "inLanguage": "vi-VN",
            "genre": ["Strategy", "War", "Real-time"],
            "gamePlatform": ["Web Browser", "Mobile"],
            "screenshot": "https://clickwar.app/screenshot-wide.png",
            "softwareVersion": "1.0"
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
                "name": "Trang Chủ",
                "item": "https://clickwar.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "ClickWar Tiếng Việt",
                "item": "https://clickwar.app/vn"
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
                "name": "Làm thế nào để chơi ClickWar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nhấp vào một quốc gia để chọn nó, sau đó phóng tên lửa để tấn công. Giảm HP xuống 0 để chiếm lĩnh và mở rộng đế chế của bạn."
                }
              },
              {
                "@type": "Question",
                "name": "ClickWar có miễn phí không?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Có! Không cần đăng ký hoặc tải xuống. Chơi ngay lập tức trong trình duyệt của bạn."
                }
              },
              {
                "@type": "Question",
                "name": "Tôi có thể chơi trên điện thoại không?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Chắc chắn! ClickWar hoàn toàn tương thích và hoạt động trên mọi thiết bị."
                }
              },
              {
                "@type": "Question",
                "name": "Làm thế nào để bảo vệ các quốc gia của tôi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nhấp vào lãnh thổ của bạn để hồi phục và thêm khiên bảo vệ. Cân bằng tấn công và phòng thủ để có kết quả tốt nhất."
                }
              }
            ]
          })
        }}
      />
      
              <main style={{ minHeight: "100vh", background: "#10131a", color: "#fff", fontFamily: "sans-serif" }}>
          {/* Breadcrumb Navigation */}
          <nav style={{ padding: "12px 24px", background: "#181c27", borderBottom: "1px solid #23263a" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
              <Link href="/" style={{ color: "#FFD600", textDecoration: "none" }}>Trang Chủ</Link>
              <span style={{ color: "#666" }}>/</span>
              <span style={{ color: "#fff" }}>Tiếng Việt</span>
            </div>
          </nav>
          
          {/* Hero Section with Game */}
      <section style={{ padding: "20px 0 40px", textAlign: "center" }}>
        <h1 style={{ fontSize: 48, fontWeight: "bold", margin: "20px 0 10px", textAlign: "center" }}>
          🎯 CLICKWAR
        </h1>
        <p style={{ textAlign: "center", fontSize: 20, marginBottom: 20 }}>
          Trò Chơi Chiến Lược Thống Trị Thế Giới
        </p>
        {/* Play Now Button instead of iframe */}
        <div style={{ margin: "40px auto 32px", maxWidth: 900, padding: "0 20px" }}>
          <a
            href="https://clickwar.games"
            target="_blank"
            rel="noopener noreferrer nofollow"
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
            🚀 CHƠI CLICKWAR NGAY
          </a>
        </div>
        {/* Hero CTA Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: 24 }}>
          <Link href="/how-to-play-clickwar" 
            title="Hướng dẫn cách chơi ClickWar chi tiết"
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
            📖 Cách Chơi
          </Link>
          <Link href="/clickwar-strategy" 
            title="Hướng dẫn chiến lược ClickWar"
            style={{ 
            background: "#FFD600", 
            color: "#181c27", 
            padding: "16px 32px", 
            borderRadius: 12, 
            fontWeight: "bold", 
            textDecoration: "none",
            transition: "all 0.3s ease"
          }}>
            🎯 Hướng Dẫn Chiến Lược
          </Link>
        </div>
      </section>

      {/* 特色介绍区块 */}
      <section style={{ maxWidth: 1100, margin: "48px auto 0", padding: 24 }}>
        <h2 style={{ color: "#FFD600", fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>Tại Sao Chơi ClickWar?</h2>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
                      {[
            { icon: "🚀", title: "Chiến Đấu Tên Lửa Trực Tiếp", desc: "Trải nghiệm tấn công tên lửa thời gian thực và chiến tranh toàn cầu." },
            { icon: "🌍", title: "Thống Trị Thế Giới", desc: "Chinh phục các quốc gia, mở rộng lãnh thổ và trở thành nhà lãnh đạo toàn cầu." },
            { icon: "⚡", title: "Hành Động Tức Thì", desc: "Không cần tải xuống, không cần đăng ký. Chơi ngay lập tức trực tuyến trên mọi thiết bị." },
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
        <h2 style={{ color: "#FFD600", fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>Cách Thành Thạo ClickWar</h2>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {/* 新手引导 */}
          <div style={{ background: "#181c27", border: "2px solid #2196f3", borderRadius: 16, padding: 32, flex: "1 1 280px", minWidth: 260, maxWidth: 340, textAlign: "center", marginBottom: 16, boxShadow: "0 4px 24px #0004" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🧭</div>
            <div style={{ fontWeight: 700, fontSize: 18, color: "#90caf9", marginBottom: 8 }}>Hướng Dẫn Cho Người Mới</div>
            <ul style={{ color: "#eee", fontSize: 15, textAlign: "left", margin: "0 auto", maxWidth: 220, paddingLeft: 18 }}>
              <li>Nhấp vào một quốc gia để chọn mục tiêu</li>
              <li>Phóng tên lửa để giảm HP của kẻ thù</li>
              <li>Chiếm lĩnh các quốc gia để mở rộng đế chế</li>
              <li>Hồi phục và bảo vệ lãnh thổ của bạn</li>
            </ul>
          </div>
          {/* 玩法攻略 */}
          <div style={{ background: "#181c27", border: "2px solid #4caf50", borderRadius: 16, padding: 32, flex: "1 1 280px", minWidth: 260, maxWidth: 340, textAlign: "center", marginBottom: 16, boxShadow: "0 4px 24px #0004" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🎯</div>
            <div style={{ fontWeight: 700, fontSize: 18, color: "#81c784", marginBottom: 8 }}>Mẹo Chiến Lược</div>
            <ul style={{ color: "#eee", fontSize: 15, textAlign: "left", margin: "0 auto", maxWidth: 220, paddingLeft: 18 }}>
              <li>Bắt đầu với các quốc gia yếu để dễ thắng</li>
              <li>Theo dõi tên lửa trực tiếp để tìm cơ hội chiến lược</li>
              <li>Cân bằng tấn công và phòng thủ</li>
              <li>Theo dõi bộ đếm tên lửa của bạn</li>
            </ul>
          </div>
          {/* 进阶技巧 */}
          <div style={{ background: "#181c27", border: "2px solid #ab47bc", borderRadius: 16, padding: 32, flex: "1 1 280px", minWidth: 260, maxWidth: 340, textAlign: "center", marginBottom: 16, boxShadow: "0 4px 24px #0004" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🔥</div>
            <div style={{ fontWeight: 700, fontSize: 18, color: "#ce93d8", marginBottom: 8 }}>Chiến Thuật Nâng Cao</div>
            <ul style={{ color: "#eee", fontSize: 15, textAlign: "left", margin: "0 auto", maxWidth: 220, paddingLeft: 18 }}>
              <li>Tấn công liên hoàn để mở rộng nhanh chóng</li>
              <li>Khai thác kẻ thù bị suy yếu</li>
              <li>Sử dụng nhận thức bản đồ cho chiến tranh đa mặt trận</li>
              <li>Thích ứng chiến lược theo hành động của đối thủ</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ区块 */}
      <section style={{ maxWidth: 900, margin: "48px auto 0", padding: 24 }}>
        <h2 style={{ color: "#FFD600", fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>Câu Hỏi Thường Gặp ClickWar</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          {[
            {q: 'Làm thế nào để chơi ClickWar?', a: 'Nhấp vào một quốc gia để chọn nó, sau đó phóng tên lửa để tấn công. Giảm HP xuống 0 để chiếm lĩnh và mở rộng đế chế của bạn.'},
            {q: 'ClickWar có miễn phí không?', a: 'Có! Không cần đăng ký hoặc tải xuống. Chơi ngay lập tức trong trình duyệt của bạn.'},
            {q: 'Tôi có thể chơi trên điện thoại không?', a: 'Chắc chắn! ClickWar hoàn toàn tương thích và hoạt động trên mọi thiết bị.'},
            {q: 'Làm thế nào để bảo vệ các quốc gia của tôi?', a: 'Nhấp vào lãnh thổ của bạn để hồi phục và thêm khiên bảo vệ. Cân bằng tấn công và phòng thủ để có kết quả tốt nhất.'},
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
        <h2 style={{ color: "#FFD600", fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>Bạn Cũng Có Thể Thích</h2>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/what-is-clickwar-game" 
            title="ClickWar là gì? Tìm hiểu về trò chơi chiến lược thống trị thế giới"
            style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>❓</div>
            ClickWar Là Gì<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>ClickWar là gì? Định nghĩa và giới thiệu trò chơi</span>
          </Link>
          <Link href="/how-to-play-clickwar" 
            title="Hướng dẫn chi tiết cách chơi ClickWar"
            style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>📖</div>
            Cách Chơi ClickWar<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Cách chơi, hướng dẫn minh họa và video</span>
          </Link>
          <Link href="/play-clickwar-unblocked" 
            title="Chơi ClickWar không bị chặn ở trường học hoặc công ty"
            style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>🔓</div>
            ClickWar Không Bị Chặn<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Chơi ClickWar ở trường học/công ty</span>
          </Link>
          <Link href="/clickwar-crazygames" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>🎮</div>
            ClickWar CrazyGames<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Trải nghiệm ClickWar theo phong cách CrazyGames</span>
          </Link>
          <Link href="/clickwar-poki" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>🕹️</div>
            ClickWar Poki<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Trải nghiệm độc quyền cho người chơi nền tảng Poki</span>
          </Link>
          <Link href="/clickwar-coolmathgames" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>📚</div>
            ClickWar CoolmathGames<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Được khuyến nghị cho người dùng giáo dục CoolmathGames</span>
          </Link>
          <Link href="/clickwar-tips" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>💡</div>
            Mẹo ClickWar<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Mẹo thực tế và lời khuyên nâng cao</span>
          </Link>
          <Link href="/clickwar-strategy" style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 28, minWidth: 220, maxWidth: 320, textAlign: "center", color: "#FFD600", fontWeight: 700, fontSize: 18, textDecoration: "none", boxShadow: "0 4px 24px #0004", transition: "all 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>🧠</div>
            Chiến Lược ClickWar<br/>
            <span style={{ color: "#eee", fontWeight: 400, fontSize: 15 }}>Hướng dẫn chiến lược và ý tưởng chiến thắng</span>
          </Link>
        </div>
      </section>

      {/* What Players Say 区块 */}
      <section style={{ maxWidth: 900, margin: "40px auto 0", padding: 24 }}>
        <h2 style={{ color: "#FFD600", fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>Người Chơi Nói Gì</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          <blockquote style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 24, minWidth: 260, maxWidth: 400, color: "#FFD600", fontWeight: 700, fontSize: 17, boxShadow: "0 4px 24px #0004", margin: 0 }}>
            "ClickWar là trò chơi chiến lược gây nghiện nhất tôi đã chơi trong năm nay!"
            <footer style={{ color: "#eee", fontWeight: 400, fontSize: 15, marginTop: 10 }}>- Alex, USA</footer>
          </blockquote>
          <blockquote style={{ background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 24, minWidth: 260, maxWidth: 400, color: "#FFD600", fontWeight: 700, fontSize: 17, boxShadow: "0 4px 24px #0004", margin: 0 }}>
            "Dễ học, khó thành thạo. Các trận chiến toàn cầu thật mãnh liệt!"
            <footer style={{ color: "#eee", fontWeight: 400, fontSize: 15, marginTop: 10 }}>- Maria, Spain</footer>
          </blockquote>
        </div>
      </section>

      {/* Latest News & Updates 区块 */}
      <section style={{ maxWidth: 900, margin: "40px auto 0", padding: 24 }}>
        <h2 style={{ color: "#FFD600", fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>Tin Tức & Cập Nhật Mới Nhất</h2>
                  <ul style={{ color: "#FFD600", fontSize: 17, fontWeight: 700, background: "#181c27", border: "2px solid #FFD600", borderRadius: 16, padding: 32, boxShadow: "0 4px 24px #0004", maxWidth: 700, margin: "0 auto" }}>
            <li>Tháng 6/2024: Phát hành bản đồ mới và hệ thống liên minh!</li>
            <li>Tháng 5/2024: Mùa xếp hạng bắt đầu. Thi đấu để giành vị trí đầu!</li>
          </ul>
      </section>

      {/* Join the ClickWar Community 区块 */}
      <section style={{ maxWidth: 900, margin: "40px auto 0", padding: 24 }}>
        <h2 style={{ color: "#FFD600", fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>Tham Gia Cộng Đồng ClickWar</h2>
        <p style={{ color: "#eee", fontSize: 17, textAlign: "center", marginBottom: 18 }}>
          Thảo luận chiến lược, chia sẻ chiến thắng và gặp gỡ các người chơi khác trên
          <a href="https://discord.gg/xxxx" target="_blank" rel="noopener noreferrer nofollow" style={{ color: "#FFD600", textDecoration: "underline", margin: "0 8px" }}> Discord</a>
          hoặc
          <a href="https://reddit.com/r/clickwar" target="_blank" rel="noopener noreferrer nofollow" style={{ color: "#FFD600", textDecoration: "underline", margin: "0 8px" }}> Reddit</a>!
        </p>
      </section>

      {/* 底部CTA区块 */}
      <section style={{ background: "linear-gradient(90deg, #d32f2f 0%, #ffd600 100%)", padding: "48px 0", textAlign: "center", margin: "48px 0 0 0" }}>
        <h2 style={{ color: "#181c27", fontSize: 32, fontWeight: 800, marginBottom: 16 }}>Sẵn Sàng Chinh Phục Thế Giới?</h2>
        <p style={{ color: "#181c27", fontSize: 20, marginBottom: 32 }}>Tham gia cùng hàng nghìn người chơi trong trận chiến chiến lược ClickWar tối thượng. Phóng tên lửa, chiếm lĩnh lãnh thổ và trở thành nhà lãnh đạo toàn cầu!</p>
        <a href="#top" style={{ background: "#181c27", color: "#FFD600", fontWeight: 700, fontSize: 22, padding: "20px 48px", borderRadius: 16, textDecoration: "none", boxShadow: "0 4px 24px #0006", display: "inline-block", transition: "all .2s" }}>
          🚀 CHƠI CLICKWAR NGAY
        </a>
      </section>

      <footer style={{ background: "#10131a", borderTop: "2px solid #23263a", textAlign: "center", color: "#aaa", fontSize: 15, marginTop: 0, padding: "32px 12px 20px 12px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div style={{ fontWeight: 700, color: "#FFD600" }}>CLICKWAR &copy; {new Date().getFullYear()}</div>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="/privacy-policy" title="Chính sách bảo mật ClickWar" style={{ color: "#FFD600", textDecoration: "none" }}>Chính Sách Bảo Mật</a>
            <a href="/terms-of-service" title="Điều khoản dịch vụ ClickWar" style={{ color: "#FFD600", textDecoration: "none" }}>Điều Khoản Dịch Vụ</a>
          </div>
          <div style={{ color: "#FFD600" }}>Liên Hệ: <a href="mailto:support@clickwar.app" style={{ color: "#FFD600", textDecoration: "underline" }}>support@clickwar.app</a></div>
        </div>
        <div style={{ marginTop: 16, color: "#666", fontSize: 13 }}>Được tạo bởi <span style={{ color: "#e53935" }}>❤️</span> ClickWar Team</div>
      </footer>
    </main>
    </>
  );
} 