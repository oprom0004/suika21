import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Suika Games - How We Protect Your Data",
  description:
    "Learn how Suika Games collects, uses, and protects your personal information. Our privacy policy covers cookies, third-party advertising, and data security.",
  alternates: {
    canonical: "https://suika.games/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl p-8 game-shadow">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p>
                Suika Games ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit our website suika.games and
                play our games.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information and screen resolution</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Game performance and interaction data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your gaming experience and provide
                personalized content. Our use of cookies includes:
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the website to function properly, including game functionality, user
                preferences, and security features.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Third-Party Advertising Cookies</h3>
              <p className="mb-4">
                <strong>
                  We use third-party advertising companies such as Google AdSense to serve ads on our website. These
                  companies may use cookies and similar technologies to personalize content, measure ad performance, and
                  provide targeted advertisements based on your interests.
                </strong>
              </p>
              <p className="mb-4">
                Google AdSense may collect information about your visits to this and other websites to provide
                advertisements about goods and services that may interest you. You can opt out of personalized
                advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google's Ad Settings
                </a>
                .
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Analytics Cookies</h3>
              <p>
                We use analytics services like Google Analytics to understand how visitors interact with our website and
                games, helping us improve user experience and game performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and maintaining our gaming services</li>
                <li>Improving website functionality and user experience</li>
                <li>Personalizing content and advertisements</li>
                <li>Analyzing website traffic and user behavior</li>
                <li>Preventing fraud and ensuring website security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Advertising Partners:</strong> Google AdSense and other advertising networks for ad serving
                  and targeting
                </li>
                <li>
                  <strong>Analytics Providers:</strong> Google Analytics and similar services for website analysis
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party companies that help us operate our website and
                  services
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and review your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of personalized advertising</li>
                <li>Disable cookies through your browser settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission
                is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                  our contact page
                </Link>{" "}
                or email us at contact@suika.games.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Back to Suika Game
              </Link>
              <Link
                href="/terms-of-service"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
