"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaPlay, FaRegSmile } from "react-icons/fa";

export default function Stats() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-[#f0f4fb] to-[#fdfbf7]">
      {/* Top Text */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#11388b] mb-4">
          Over 7 years of experience with the most professional immigration team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Life without borders means breaking barriers and taking bold steps toward global opportunities. 
          Your future is waiting for you here.
        </p>
      </div>

      <div className="relative flex justify-center mt-12">
        {/* 📦 Wrapper */}
        <div className="relative w-full max-w-[900px] h-[300px] md:h-[480px] flex items-center justify-center">

          {/* 🎥 Video */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-2xl shadow-xl"
            src="/video/hero-3.mp4"
            controls={false}
            playsInline
            onEnded={handleEnded}
          />

          {/* 🖼️ Cover */}
          {!isPlaying && (
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer z-20"
              onClick={handlePlay}
            >
              <Image
                src="/images/toronto-poster.webp"
                alt="Toronto Cover"
                width={900}
                height={480}
                className="w-full h-full object-cover"
              />
              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-[#11388b] hover:bg-white transition">
                  <FaPlay size={22} />
                </div>
              </div>
              {/* Text on Cover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white drop-shadow-lg pointer-events-none">
                <h3 className="text-4xl font-extrabold">TORONTO</h3>
                <p className="text-lg">Canada</p>
              </div>
            </div>
          )}

          {/* 😁 Fixed top-left icon (LTR) */}
          <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-b from-[#1d4ed8] to-[#2563eb] text-white shadow-md z-40">
            <FaRegSmile size={20} />
          </div>

          {/* 🟦 Badges (mirrored for English version) */}
          {!isPlaying && (
            <>
              <div
                className="absolute max-md:top-2 max-md:right-4 md:top-45 md:-right-16 px-3 py-1 md:px-5 md:py-2 rounded-full font-bold shadow-md z-40 
                bg-white/30 backdrop-blur-md border border-white/40 text-[#11388b] text-sm md:text-base"
              >
                Success Rate 97.8%
              </div>

              <div
                className="absolute max-md:top-19 max-md:right-4 md:top-90 md:-right-28 md:transform md:-translate-y-1/2 px-3 py-1 md:px-5 md:py-2 rounded-full font-bold shadow-md z-40
                bg-white/30 backdrop-blur-md border border-white/40 text-[#11388b] text-sm md:text-base"
              >
                +300 ongoing cases
              </div>

              <div
                className="absolute max-md:top-50 max-md:left-4 md:top-70 md:-left-30 flex items-center gap-2 px-3 py-1 md:px-5 md:py-2 rounded-full font-bold shadow-md z-40
                bg-white/30 backdrop-blur-md border border-white/40 text-[#11388b] text-sm md:text-base"
              >
                <FaRegSmile />
                +1,730 visas issued
              </div>

              <div
                className="absolute max-md:bottom-1 max-md:left-4 md:-bottom-7 md:left-20 md:-translate-x-1/2 px-3 py-1 md:px-5 md:py-2 rounded-full font-bold shadow-md z-40
                bg-white/30 backdrop-blur-md border border-white/40 text-[#11388b] text-sm md:text-base"
              >
                +2,934 successful cases
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}