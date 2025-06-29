export function HowToPlay() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">How to Play Suika Game</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl game-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">🍎</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Drop Fruits</h3>
            <p className="text-gray-600">Drop fruits from the top of the container to start the merging process.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl game-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">🍊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Merge Matching</h3>
            <p className="text-gray-600">When identical fruits touch, they merge into the next larger fruit.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl game-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">🍉</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Reach Watermelon</h3>
            <p className="text-gray-600">Keep merging to create the watermelon and achieve the highest score!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
