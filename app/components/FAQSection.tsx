export function FAQSection() {
  const faqs = [
    {
      question: "What is Suika Game?",
      answer:
        "Suika Game is a Japanese puzzle game where you drop and merge fruits to create larger ones. The goal is to merge fruits until you create a watermelon, the largest fruit in the game. It became viral worldwide due to its simple yet addictive gameplay mechanics.",
    },
    {
      question: "Can I play Suika Game on mobile?",
      answer:
        "Yes! Suika Game is fully optimized for mobile devices. You can play on smartphones and tablets with intuitive touch controls that make dropping and positioning fruits easy and enjoyable on any screen size.",
    },
    {
      question: "What makes Suika Game so addictive?",
      answer:
        "The combination of simple mechanics, realistic physics, and strategic thinking creates an incredibly engaging experience. Each game feels unique due to the physics engine, and there's always the satisfying challenge of beating your previous high score.",
    },
    {
      question: "How do you win at Suika Game?",
      answer:
        "You win by creating a watermelon through strategic fruit merging. The key is efficient space management, planning ahead, and understanding the physics. The game continues until your container fills up, so focus on creating chain reactions and maximizing your score.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 game-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
