import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#10131a", borderTop: "2px solid #23263a", textAlign: "center", color: "#aaa", fontSize: 15, marginTop: 0, padding: "32px 12px 20px 12px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <div style={{ fontWeight: 700, color: "#FFD600" }}>CLICKWAR &copy; {new Date().getFullYear()}</div>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center" }}>
          <a href="/about" title="About ClickWar" style={{ color: "#FFD600", textDecoration: "none" }} rel="nofollow">About</a>
          <a href="/privacy-policy" title="ClickWar Privacy Policy" style={{ color: "#FFD600", textDecoration: "none" }} rel="nofollow">Privacy Policy</a>
          <a href="/terms-of-service" title="ClickWar Terms of Service" style={{ color: "#FFD600", textDecoration: "none" }} rel="nofollow">Terms of Service</a>
          <a href="/disclaimer" title="ClickWar Disclaimer" style={{ color: "#FFD600", textDecoration: "none" }} rel="nofollow">Disclaimer</a>
          <a href="/dmca" title="ClickWar DMCA Policy" style={{ color: "#FFD600", textDecoration: "none" }} rel="nofollow">DMCA</a>
          <a href="/faq" title="ClickWar FAQ" style={{ color: "#FFD600", textDecoration: "none" }} rel="nofollow">FAQ</a>
        </div>
        <div style={{ color: "#FFD600" }}>Contact: <a href="mailto:support@clickwar.app" style={{ color: "#FFD600", textDecoration: "underline" }} rel="nofollow">support@clickwar.app</a></div>
      </div>
      <div style={{ marginTop: 16, color: "#666", fontSize: 13 }}>Made with <span style={{ color: "#e53935" }}>❤️</span> by ClickWar Team</div>
    </footer>
  );
}