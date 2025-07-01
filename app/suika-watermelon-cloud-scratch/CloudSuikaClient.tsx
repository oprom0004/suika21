"use client";
import { useState } from "react";

export default function CloudSuikaClient() {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="w-full max-w-4xl game-shadow rounded-3xl overflow-hidden bg-white p-2 relative">
      {!showGame && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm cursor-pointer transition hover:bg-white/60"
          onClick={() => setShowGame(true)}
        >
          <img
            src="/cloud-suika-thumb.png"
            alt="云朵Suika Game 封面图"
            className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-2xl shadow-lg border-4 border-white"
            draggable="false"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-white/80 rounded-full px-8 py-4 text-2xl font-bold text-blue-700 shadow-lg mb-4 border-2 border-blue-200">
              ☁️ 点击开始云朵Suika Game
            </div>
            <div className="text-blue-400 text-lg font-semibold">Cloud Watermelon Game</div>
          </div>
        </div>
      )}
      {showGame && (
        <iframe
          src="https://turbowarp.org/911281961/embed"
          title="Suika Game Cloud Scratch - Advanced Watermelon Puzzle"
          className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          allow="gamepad; microphone; camera"
        />
      )}
    </div>
  );
} 