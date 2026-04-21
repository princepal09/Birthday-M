import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { HER_NAME, STEPS } from "../../utils/constants";

export default function NameReveal() {
  const { currentStep, advanceStep } = useAppContext();
  const isVisible = currentStep === STEPS.NAME || currentStep === STEPS.BUTTON;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="text-center  gap-2 mt-10 px-4"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => {
            if (currentStep === STEPS.NAME) {
              setTimeout(() => advanceStep(STEPS.BUTTON), 900);
            }
          }}
        >
          {/* 💖 NAME */}
          <motion.h1
            className="text-5xl md:text-8xl lg:text-9xl font-normal tracking-wide"
            style={{
              fontFamily: "'Great Vibes', cursive",
              background:
                "linear-gradient(135deg, #ff9bc5, #ffd4e8, #e8a0ff, #ffb8d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 20px rgba(255,150,200,0.3))",
            }}
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{
              letterSpacing: "0.05em",
              opacity: 1,
              filter: [
                "drop-shadow(0 0 20px rgba(255,150,200,0.3))",
                "drop-shadow(0 0 60px rgba(255,150,200,0.7))",
                "drop-shadow(0 0 25px rgba(255,150,200,0.4))",
              ],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
          >
            {HER_NAME}
          </motion.h1>

          {/* ✨ Glow Pulse Ring */}
          <motion.div
            className="mx-auto mt-6 rounded-full"
            style={{
              width: "120px",
              height: "120px",
              background:
                "radial-gradient(circle, rgba(255,150,200,0.25), transparent 70%)",
              filter: "blur(20px)",
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* 💫 Decorative Line */}
          <motion.div
            className="mt-10 mx-auto h-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,150,200,0.6), transparent)",
              width: "200px",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
