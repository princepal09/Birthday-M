import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { LOADER_DURATION } from "../../utils/constants";

// Animated glowing dots
function GlowDot({ delay, x, y, size = 4 }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: "radial-gradient(circle, rgba(255,100,180,0.8), rgba(120,80,255,0.3))",
        boxShadow: "0 0 12px rgba(255,100,180,0.5), 0 0 24px rgba(120,80,255,0.3)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0.6, 1, 0],
        scale: [0, 1.2, 0.8, 1.1, 0],
        y: [0, -20, -10, -25, -40],
      }}
      transition={{
        duration: 2.5,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

// Generate random dots
const dots = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: Math.random() * 90 + 5,
  y: Math.random() * 80 + 10,
  delay: Math.random() * 1.5,
  size: Math.random() * 4 + 2,
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
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0a0015 0%, #1a0030 30%, #0d0025 60%, #050010 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Ambient glow */}
          <div
            className="absolute w-96 h-96 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(180,80,255,0.4), transparent 70%)",
              filter: "blur(60px)",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Animated particles */}
          {dots.map((dot) => (
            <GlowDot
              key={dot.id}
              delay={dot.delay}
              x={dot.x}
              y={dot.y}
              size={dot.size}
            />
          ))}

          {/* Center text */}
          <motion.div
            className="relative z-10 text-center px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.p
              className="text-lg md:text-2xl font-light tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(255,220,240,0.9)",
                textShadow: "0 0 30px rgba(255,100,180,0.3)",
              }}
              animate={{
                textShadow: [
                  "0 0 30px rgba(255,100,180,0.3)",
                  "0 0 50px rgba(255,100,180,0.5)",
                  "0 0 30px rgba(255,100,180,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Preparing something special for you ...❤️
            </motion.p>

            {/* Pulsing bar */}
            <motion.div
              className="mt-8 mx-auto h-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,100,180,0.6), rgba(180,80,255,0.6), transparent)",
                width: "200px",
              }}
              animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
