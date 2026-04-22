import { motion } from "framer-motion";
import StarField from "../components/common/StarField";

/**
 * Surprise page — the cinematic video reveal.
 * - Video is centered, responsive, no autoplay
 * - Background music starts 5 seconds after page loads
 * - Clean, focused layout
 */
export default function Surprise() {
  return (
    <main
      id="surprise-page"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-10 overflow-hidden bg-ambient"
    >
      <StarField />

      {/* Ambient glow behind video */}
      <div
        className="ambient-orb"
        aria-hidden="true"
        style={{
          width: 600,
          height: 600,
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,80,160,0.08), transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative p-5! z-10 flex flex-col items-center gap-6 md:gap-3! w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl text-center gradient-text"
          style={{
            fontFamily: "var(--font-display)",
            filter: "drop-shadow(0 0 16px rgba(255,150,200,0.2))",
          }}
        >
          A Little Something For You 💖
        </h1>

        {/* Subtitle */}
        <p
          className="text-xs sm:text-sm md:text-base text-center max-w-md leading-relaxed"
          style={{ color: "var(--color-rose-faint)" }}
        >
          Every smile in this video is for you… because you deserve all the love
          in the world 🎂✨
        </p>

        {/* Video Card */}
        <div className="relative w-full">
          {/* Glow ring behind video */}
          <div
            className="absolute -inset-2 rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,100,180,0.15), rgba(180,80,255,0.15))",
              filter: "blur(20px)",
              animation: "soft-pulse 4s ease-in-out infinite",
            }}
            aria-hidden="true"
          />

          {/* Video container */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,180,220,0.12)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
              padding: "6px",
            }}
          >
            <video
              preload="metadata"
              controls
              playsInline
              className="w-full h-auto rounded-xl"
              style={{
                maxHeight: "70vh",
                objectFit: "contain",
                display: "block",
              }}
            >
              <source src='https://res.cloudinary.com/dwpdys0gh/video/upload/v1776852047/video_2023-02-10_12-57-50_l2fqdm.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Bottom message */}
        <p
          className="text-sm sm:text-base md:text-lg text-center max-w-md leading-relaxed mt-2"
          style={{ color: "var(--color-rose-muted)" }}
        >
          No matter where life takes us, I just want you to know — you are
          deeply loved, today and always 💕
        </p>

        {/* Divider */}
        <div
          className="w-20 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,150,200,0.35), transparent)",
          }}
        />

        {/* Footer */}
        <p
          className="text-xl sm:text-2xl md:text-3xl gradient-text"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Happy Birthday Once Again 🎉
        </p>
      </motion.div>
    </main>
  );
}
