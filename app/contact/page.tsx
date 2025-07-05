import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact ClickWar Games - Get in Touch with Our Team",
  description:
    "Contact ClickWar Games for support, feedback, or partnership inquiries. Reach out to our team for any questions about our puzzle games and services.",
  alternates: {
    canonical: "https://clickwar.app/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl p-8 game-shadow">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">📧</span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact ClickWar Games</h1>
            <p className="text-xl text-gray-600">We'd love to hear from you!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3">💬</span>
                    General Inquiries
                  </h3>
                  <p className="text-gray-700 mb-2">
                    For general questions, feedback, or suggestions (please mention "General" in subject):
                  </p>
                  <a href="mailto:support@clickwar.app" className="text-blue-600 hover:text-blue-800 font-medium">
                    support@clickwar.app
                  </a>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🛠️</span>
                    Technical Support
                  </h3>
                  <p className="text-gray-700 mb-2">
                    For technical issues, bugs, or game problems (please mention "Support" in subject):
                  </p>
                  <a href="mailto:support@clickwar.app" className="text-blue-600 hover:text-blue-800 font-medium">
                    support@clickwar.app
                  </a>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🤝</span>
                    Partnerships & Business
                  </h3>
                  <p className="text-gray-700 mb-2">
                    For business inquiries and partnerships (please mention "Business" in subject):
                  </p>
                  <a href="mailto:support@clickwar.app" className="text-blue-600 hover:text-blue-800 font-medium">
                    support@clickwar.app
                  </a>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🔒</span>
                    Privacy & Legal
                  </h3>
                  <p className="text-gray-700 mb-2">
                    For privacy concerns and legal matters (please mention "Legal" in subject):
                  </p>
                  <a href="mailto:support@clickwar.app" className="text-blue-600 hover:text-blue-800 font-medium">
                    support@clickwar.app
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="bug-report">Bug Report</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Response Time:</strong> We typically respond to all inquiries within 24-48 hours. For urgent
                  technical issues, please include detailed information about your device and browser.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <p className="text-gray-600 mb-6">
                Before contacting us, you might find your answer in our FAQ section or other helpful pages.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/#faq"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  View FAQ
                </Link>
                <Link
                  href="/about"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link
                  href="/"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                >
                  Back to Game
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
