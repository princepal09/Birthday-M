import { motion } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { STEPS } from "../../utils/constants";
import Typewriter from "./Typewriter";
import FloatingHearts from "./FloatingHearts";
import NameReveal from "./NameReveal";
import CTAButton from "./CTAButton";

export default function Hero() {
  const { isLoading, currentStep, hasStartedExperience } = useAppContext();

  if (isLoading) return null;

  return (
    <motion.section
      id="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0015 0%, #12002a 25%, #0d0020 50%, #08001a 75%, #050010 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Background ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            top: "-10%",
            right: "-10%",
            background:
              "radial-gradient(circle, rgba(120,40,200,0.12), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-15%",
            left: "-10%",
            background:
              "radial-gradient(circle, rgba(255,60,120,0.1), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(180,100,255,0.08), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Floating hearts */}
      <FloatingHearts />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Show typewriter when step is QUOTE or beyond (but not EXPERIENCE) */}
        {(currentStep === STEPS.QUOTE ||
          currentStep === STEPS.NAME ||
          currentStep === STEPS.BUTTON) && <Typewriter />}

        <NameReveal />
        <CTAButton />

        {/* Experience started content */}
        {hasStartedExperience && (
          <motion.div
            className="text-center px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.p
              className="text-2xl md:text-4xl font-light italic mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(255,220,240,0.9)",
                textShadow: "0 0 30px rgba(255,100,180,0.2)",
              }}
            >
              🎂 Happy Birthday! 🎂
            </motion.p>
            <motion.p
              className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(255,200,230,0.8)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
            >
              Every moment with you is a gift I treasure. Today, the universe
              celebrates you — and so does my heart. 💖
            </motion.p>

            {/* Birthday wish card */}
            <motion.div
              className="mt-12 p-8 rounded-2xl max-w-lg mx-auto"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,180,220,0.15)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
            >
              <p
                className="text-5xl md:text-7xl mb-4"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #ff9bc5, #ffd4e8, #e8a0ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  With Love
                </span>
              </p>
              <p
                className="text-base md:text-lg font-light"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: "rgba(255,200,230,0.7)",
                  letterSpacing: "0.05em",
                }}
              >
                Made with all my heart, just for you.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(5,0,16,0.8), transparent)",
        }}
      />
    </motion.section>
  );
}
