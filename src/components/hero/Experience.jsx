import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Experience = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <motion.div
        className="flex flex-col lg:sm:p-10 items-center justify-center px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-5xl mb-4"
          style={{
            fontFamily: "'Great Vibes', cursive",
            background: "linear-gradient(135deg, #ff9bc5, #ffd4e8, #e8a0ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Happy Birthday, My Love 💖
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-lg mb-8 max-w-md"
          style={{
            fontFamily: "'Outfit', sans-serif",
            color: "rgba(255,220,240,0.75)",
            letterSpacing: "0.05em",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Today is all about you — the most beautiful part of my life ✨
        </motion.p>

        {/* Card */}
        <div
          className="relative flex flex-col gap-6 p-8 md:p-10 rounded-3xl max-w-xl w-full overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(25px)",
            border: "1px solid rgba(255,180,220,0.2)",
            boxShadow:
              "0 10px 40px rgba(255,100,180,0.2), inset 0 0 40px rgba(255,255,255,0.05)",
          }}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {/* Glow overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at top, rgba(255,150,200,0.15), transparent 60%)",
            }}
          />

          {/* Message */}
          <motion.p
            className="relative text-base md:text-lg leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "rgba(255,220,240,0.9)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            From the moment you came into my life, everything feels softer,
            warmer, and more beautiful. 💖
            <br />
            <br />
            You’re not just my love — you’re my favorite feeling, my peace, and
            my happiest place. 🌙✨
          </motion.p>

          {/* Footer */}
          <div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <p
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              With Love 💕
            </p>

            <p
              className="text-xs mt-2 tracking-widest"
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "rgba(255,200,230,0.6)",
              }}
            >
              FOREVER YOURS
            </p>
          </div>

          <button
            onClick={() => navigate("/surprise")}
            className="bg-red-500 inline-block cursor-pointer self-center px-4 py-10 rounded-md text-white mt-4 relative z-10"
          >
            A Little Surprise For You 💕
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
