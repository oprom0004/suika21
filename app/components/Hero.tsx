import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          🎯 CLICKWAR
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          World Domination Strategy Game
        </p>
        
        {/* Main Play Button */}
        <div className="mb-8">
          <a
            href="https://clickwar.games"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-gradient-to-r from-yellow-400 to-red-600 text-gray-900 font-black text-2xl md:text-3xl px-12 md:px-16 py-6 md:py-8 rounded-3xl shadow-2xl border-4 border-yellow-400 hover:scale-105 transition-all duration-200"
          >
            🚀 PLAY CLICKWAR NOW
          </a>
        </div>
        
        {/* Secondary Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/how-to-play-clickwar"
            className="inline-block bg-gray-900 text-yellow-400 px-8 py-4 rounded-2xl font-bold border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 text-lg"
          >
            📖 How to Play
          </Link>
          <Link
            href="/clickwar-strategy"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl font-bold border-2 border-yellow-400 hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200 text-lg"
          >
            🎯 Strategy Guide
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;