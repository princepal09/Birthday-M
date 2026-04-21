import { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { LOADER_DURATION } from "../../utils/constants";

/**
 * Loader screen — shown for LOADER_DURATION then fades out.
 * Uses CSS keyframes for dot animation + Framer Motion only for AnimatePresence exit.
 */

// Generate random particle positions (computed once)
const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 90 + 5,
  y: Math.random() * 80 + 10,
  size: Math.random() * 3 + 2,
  delay: Math.random() * 2,
  duration: Math.random() * 2 + 2,
}));

export default function Loader() {
  const { isLoading, finishLoading, startMusic } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
      startMusic();
    }, LOADER_DURATION);

    return () => clearTimeout(timer);
  }, [finishLoading, startMusic]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-ambient"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Ambient glow */}
          <div
            className="ambient-orb"
            style={{
              width: 400,
              height: 400,
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(180,80,255,0.2), transparent 70%)",
              opacity: 0.3,
            }}
          />

          {/* Particles — CSS animated */}
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
                background: "radial-gradient(circle, rgba(255,100,180,0.7), rgba(120,80,255,0.3))",
                boxShadow: "0 0 8px rgba(255,100,180,0.4)",
                animation: `float-up ${p.duration + 3}s ease-in-out ${p.delay}s infinite`,
              }}
            />
          ))}

          {/* Center text */}
          <div className="relative z-10 text-center px-6 animate-fade-in">
            <p
              className="text-lg md:text-2xl font-light tracking-wide glow-text"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Preparing something special for you…❤️
            </p>

            {/* Pulsing shimmer line */}
            <div
              className="mt-8 mx-auto h-[2px] w-48 rounded-full"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,100,180,0.5), rgba(180,80,255,0.5), transparent)",
                animation: "shimmer-line 2s ease-in-out infinite",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
