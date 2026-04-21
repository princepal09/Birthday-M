import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import StarField from "../components/common/StarField";
import FloatingHearts from "../components/hero/FloatingHearts";
import Button from "../components/common/Button";

/**
 * Experience page — emotional love message + button to the surprise.
 * Clean glassmorphism card with romantic typography.
 */
export default function ExperiencePage() {
  const navigate = useNavigate();

  return (
    <main
      id="experience-page"
      className="relative p-10 min-h-screen flex items-center justify-center overflow-hidden bg-ambient"
    >
      <StarField />
      <FloatingHearts />

      {/* Ambient glow */}
      <div
        className="ambient-orb"
        aria-hidden="true"
        style={{
          width: 500,
          height: 500,
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(180,80,255,0.1), transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative  z-10 flex flex-col items-center justify-center px-5! md:px-0 sm:px-8 py-12 w-full max-w-lg mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title */}
        <h1
          className="text-4xl md:text-6xl mb-4! gradient-text text-center"
          style={{
            fontFamily: "var(--font-display)",
            filter: "drop-shadow(0 0 20px rgba(255,150,200,0.2))",
          }}
        >
          Happy Birthday, My Love 💖
        </h1>

        {/* Subtitle */}
        <p
          className="text-sm mt-4! md:text-base mb-10 text-center"
          style={{
            color: "var(--color-rose-faint)",
            letterSpacing: "0.04em",
          }}
        >
          Today is all about you — the most beautiful part of my life ✨
        </p>

        {/* Glass card */}
        <div className="glass-card flex gap-5 flex-col justify-center md:p-10 w-full">
          {/* Glow overlay */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at top, rgba(255,150,200,0.1), transparent 60%)",
            }}
            aria-hidden="true"
          />

          {/* Message */}
          <p
            className="relative text-base md:text-lg leading-relaxed mb-8"
            style={{
              color: "var(--color-rose-muted)",
            }}
          >
            From the moment you came into my life, everything feels softer,
            warmer, and more beautiful. 💖
            <br />
            <br />
            You're not just my love — you're my favorite feeling, my peace, and
            my happiest place. 🌙✨
          </p>

          {/* Footer signature */}
          <div className="text-center mb-6">
            <p
              className="text-3xl md:text-4xl gradient-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              With Love 💕
            </p>
            <p
              className="text-xs mt-2 tracking-widest uppercase"
              style={{ color: "var(--color-rose-faint)" }}
            >
              Forever Yours
            </p>
          </div>

          {/* Divider */}
          <div
            className="mx-auto h-px w-32 mb-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,150,200,0.4), transparent)",
            }}
          />

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              id="cta-surprise"
              onClick={() => navigate("/surprise")}
              className="text-sm md:text-base"
            >
              A Little Surprise For You 💕
            </Button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
