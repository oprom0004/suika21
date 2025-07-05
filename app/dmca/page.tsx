export const metadata = {
  title: "DMCA Policy - ClickWar",
  description: "Read the DMCA policy for ClickWar. Learn how to submit copyright infringement notices and how we handle DMCA takedown requests.",
  alternates: {
    canonical: "https://clickwar.app/dmca",
  },
};

export default function DmcaPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#10131a", color: "#fff", fontFamily: "sans-serif" }}>
      <section style={{ maxWidth: 700, margin: "48px auto", padding: 24, background: "#181c27", borderRadius: 24, boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}>
        <h1 style={{ fontSize: 40, fontWeight: "bold", marginBottom: 24, textAlign: "center", color: "#FFD600" }}>
          DMCA Policy
        </h1>
        
        <p style={{ fontSize: 18, marginBottom: 16 }}>
          ClickWar respects the intellectual property rights of others and complies with the Digital Millennium Copyright Act (DMCA). If you believe that your copyrighted work has been used on our site in a way that constitutes copyright infringement, please notify us as described below.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: "bold", margin: "32px 0 12px", color: "#FFD600" }}>How to Submit a DMCA Notice</h2>
        <p style={{ fontSize: 16, marginBottom: 12 }}>
          To file a DMCA takedown request, please send an email to <a href="mailto:contact@clickwar.app" rel="nofollow" style={{ color: "#FFD600", textDecoration: "underline" }}>contact@clickwar.app</a> with the following information:
        </p>
        <ul style={{ fontSize: 16, marginBottom: 16, paddingLeft: 24 }}>
          <li>1. A description of the copyrighted work you claim has been infringed.</li>
          <li>2. The exact URL or location of the allegedly infringing material on ClickWar.</li>
          <li>3. Your contact information (name, address, email, phone number).</li>
          <li>4. A statement that you have a good faith belief that the use is not authorized by the copyright owner, its agent, or the law.</li>
          <li>5. A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
          <li>6. Your physical or electronic signature.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: "bold", margin: "32px 0 12px", color: "#FFD600" }}>Counter-Notification</h2>
        <p style={{ fontSize: 16, marginBottom: 12 }}>
          If you believe that your content was removed by mistake or misidentification, you may file a counter-notification. Please send an email to <a href="mailto:contact@clickwar.app" rel="nofollow" style={{ color: "#FFD600", textDecoration: "underline" }}>contact@clickwar.app</a> with:
        </p>
        <ul style={{ fontSize: 16, marginBottom: 16, paddingLeft: 24 }}>
          <li>1. Identification of the material that was removed or disabled.</li>
          <li>2. A statement under penalty of perjury that you have a good faith belief the material was removed by mistake.</li>
          <li>3. Your consent to local federal court jurisdiction.</li>
          <li>4. Your contact information.</li>
          <li>5. Your physical or electronic signature.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: "bold", margin: "32px 0 12px", color: "#FFD600" }}>Our Response</h2>
        <p style={{ fontSize: 16, marginBottom: 16 }}>
          Upon receiving a valid DMCA notice, we will:
        </p>
        <ul style={{ fontSize: 16, marginBottom: 16, paddingLeft: 24 }}>
          <li>Promptly remove or disable access to the allegedly infringing material</li>
          <li>Notify the user who posted the content</li>
          <li>Provide the user with a copy of the DMCA notice</li>
          <li>Inform the user of their right to file a counter-notification</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: "bold", margin: "32px 0 12px", color: "#FFD600" }}>Repeat Infringers</h2>
        <p style={{ fontSize: 16, marginBottom: 16 }}>
          ClickWar maintains a policy of terminating accounts of users who are repeat infringers of copyright or other intellectual property rights.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: "bold", margin: "32px 0 12px", color: "#FFD600" }}>Contact Information</h2>
        <p style={{ fontSize: 16, marginBottom: 16 }}>
          For DMCA-related inquiries, please contact us at:
        </p>
        <div style={{ fontSize: 16, marginBottom: 16, padding: 16, background: "#252a36", borderRadius: 8 }}>
          <p style={{ margin: "8px 0" }}>Email: <a href="mailto:contact@clickwar.app" rel="nofollow" style={{ color: "#FFD600", textDecoration: "underline" }}>contact@clickwar.app</a></p>
          <p style={{ margin: "8px 0" }}>Subject: DMCA Notice</p>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: "bold", margin: "32px 0 12px", color: "#FFD600" }}>Important Notes</h2>
        <ul style={{ fontSize: 16, marginBottom: 16, paddingLeft: 24 }}>
          <li>Only copyright owners or their authorized representatives may file DMCA notices</li>
          <li>False claims may result in legal liability</li>
          <li>We reserve the right to modify this DMCA policy at any time</li>
          <li>This policy is provided for informational purposes and does not constitute legal advice</li>
        </ul>

        <p style={{ fontSize: 14, marginTop: 32, padding: 16, background: "#252a36", borderRadius: 8, fontStyle: "italic" }}>
          Last updated: December 2024. This DMCA policy is effective immediately and applies to all content on ClickWar.
        </p>
      </section>
    </main>
  );
}