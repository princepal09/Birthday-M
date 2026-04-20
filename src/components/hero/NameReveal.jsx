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
          className="text-center mt-8"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => {
            if (currentStep === STEPS.NAME) {
              setTimeout(() => advanceStep(STEPS.BUTTON), 800);
            }
          }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-normal"
            style={{
              fontFamily: "'Great Vibes', cursive",
              background:
                "linear-gradient(135deg, #ff9bc5 0%, #ffd4e8 30%, #e8a0ff 60%, #ffb8d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(255,150,200,0.4))",
            }}
            animate={{
              filter: [
                "drop-shadow(0 0 30px rgba(255,150,200,0.4))",
                "drop-shadow(0 0 50px rgba(255,150,200,0.6))",
                "drop-shadow(0 0 30px rgba(255,150,200,0.4))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {HER_NAME}
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            className="mt-4 mx-auto h-[1px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,150,200,0.5), transparent)",
              width: "160px",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
