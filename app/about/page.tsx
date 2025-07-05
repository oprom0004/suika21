export const metadata = {
    title: "About ClickWar",
    description: "Learn more about ClickWar, the free online world domination strategy game. Contact information and site details.",
    alternates: {
      canonical: "https://clickwar.app/about",
    },
  };
  
export default function AboutPage() {
    return (
      <main className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">About ClickWar</h1>
        <p className="mb-2">
          ClickWar is a web-based mini game focused on click strategy and reaction speed. Our mission is to provide players worldwide with a simple, fun, and accessible gaming experience—no downloads required.
        </p>
        <p className="mb-2">
          All content on this site is for entertainment and educational purposes only. All game copyrights belong to their respective owners. If you believe your rights have been infringed, please contact us for prompt removal.
        </p>
        <p>
          Contact: <a href="mailto:contact@clickwar.app" rel="nofollow">contact@clickwar.app</a>
        </p>
      </main>
    );
  }
  