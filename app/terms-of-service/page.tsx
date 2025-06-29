import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Suika Games - User Agreement & Rules",
  description:
    "Read our Terms of Service for Suika Games. Learn about user rights, usage restrictions, copyright terms, and community guidelines for our gaming platform.",
  alternates: {
    canonical: "https://suika.games/terms-of-service",
  },
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl p-8 game-shadow">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using Suika Games (suika.games), you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
              <p>
                Suika Games is a fan-operated website that provides access to Suika Game and its variants. We offer:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Free online access to Suika Game and related puzzle games</li>
                <li>Game variants and creative remixes</li>
                <li>Strategy guides and gameplay tips</li>
                <li>Community content and resources</li>
                <li>Multi-language support for global players</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Rights and Responsibilities</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Your Rights</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Free access to all games and content on our platform</li>
                <li>Privacy protection as outlined in our Privacy Policy</li>
                <li>Fair and equal treatment regardless of skill level</li>
                <li>Access to customer support and assistance</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Your Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the service in accordance with these terms</li>
                <li>Respect other users and maintain appropriate conduct</li>
                <li>Do not attempt to hack, exploit, or damage our systems</li>
                <li>Report any bugs or security issues you discover</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Usage Restrictions</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use automated systems (bots, scripts) to access our games</li>
                <li>Attempt to reverse engineer or modify our games</li>
                <li>Distribute malware or engage in harmful activities</li>
                <li>Violate any intellectual property rights</li>
                <li>Use our service for commercial purposes without permission</li>
                <li>Create multiple accounts to circumvent restrictions</li>
                <li>Share inappropriate content or engage in harassment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property Rights</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Third-Party Content</h3>
              <p className="mb-4">
                Suika Game and its original concept are the intellectual property of their respective creators. We are a
                fan site that provides access to publicly available versions and variants of these games.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Our Content</h3>
              <p className="mb-4">
                Original content created by Suika Games, including strategy guides, reviews, and website design, is
                protected by copyright. You may share and reference our content with proper attribution.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">User-Generated Content</h3>
              <p>
                Any content you submit to our platform (comments, suggestions, feedback) becomes non-exclusive property
                that we may use to improve our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Advertising and Third-Party Services</h2>
              <p>
                Our website displays advertisements through third-party services like Google AdSense. We are not
                responsible for the content of these advertisements or the practices of advertising partners. Please
                review their respective privacy policies and terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h2>
              <p>
                Our service is provided "as is" without any warranties, express or implied. We do not guarantee that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The service will be uninterrupted or error-free</li>
                <li>All games will function perfectly on all devices</li>
                <li>Our content is completely accurate or up-to-date</li>
                <li>The service will meet your specific requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                Suika Games shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your use of our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our service immediately, without prior notice or
                liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p>
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which our service
                operates, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{" "}
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
                href="/privacy-policy"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
