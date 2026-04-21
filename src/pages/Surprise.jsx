import React from "react";
import vid from "../assets/video/vid.mp4";

const Surprise = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-br from-black via-[#1a0015] to-black text-center">
      
      {/* Title */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 leading-tight"
        style={{
          fontFamily: "'Great Vibes', cursive",
          background: "linear-gradient(135deg, #ff9bc5, #ffd4e8, #e8a0ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        A Little Something For You 💖
      </h1>

      {/* Subtitle */}
      <p
        className="text-xs sm:text-sm md:text-lg mb-8 max-w-xs sm:max-w-md md:max-w-lg leading-relaxed"
        style={{
          fontFamily: "'Outfit', sans-serif",
          color: "rgba(255,220,240,0.75)",
        }}
      >
        Every smile in this video is for you… because you deserve all the love
        in the world 🎂✨
      </p>

      {/* Video Card */}
      <div className="relative w-full max-w-md sm:max-w-xl md:max-w-3xl rounded-2xl overflow-hidden">
        
        {/* Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-20 blur-xl rounded-2xl"></div>

        {/* Video Container */}
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-pink-200/10">
          <video
            preload="metadata"
            controls
            className="w-full h-auto max-h-[70vh] object-contain"
          >
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Message */}
      <p
        className="mt-8 max-w-xs sm:max-w-md md:max-w-lg text-sm sm:text-base md:text-lg leading-relaxed px-2"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "rgba(255,220,240,0.9)",
        }}
      >
        No matter where life takes us, I just want you to know —  
        you are deeply loved, today and always 💕
      </p>

      {/* Divider */}
      <div className="w-24 h-[1px] bg-pink-400/40 my-6"></div>

      {/* Footer */}
      <p
        className="text-xl sm:text-2xl md:text-3xl"
        style={{
          fontFamily: "'Great Vibes', cursive",
          color: "#ff9bc5",
        }}
      >
        Happy Birthday Once Again 🎉
      </p>
    </div>
  );
};

export default Surprise;