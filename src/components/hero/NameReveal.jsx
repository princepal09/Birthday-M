import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { HER_NAME, STEPS } from "../../utils/constants";

/**
 * Name reveal — shows the birthday name with gradient text.
 * Minimal animation: just a fade + subtle letter-spacing ease.
 */
export default function NameReveal() {
  const { currentStep, advanceStep } = useAppContext();
  const isVisible = currentStep === STEPS.NAME || currentStep === STEPS.BUTTON;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="text-center mt-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => {
            if (currentStep === STEPS.NAME) {
              setTimeout(() => advanceStep(STEPS.BUTTON), 900);
            }
          }}
        >
          {/* Name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-normal gradient-text"
            style={{
              fontFamily: "var(--font-display)",
              filter: "drop-shadow(0 0 24px rgba(255,150,200,0.25))",
              lineHeight: 1.2,
            }}
          >
            {HER_NAME}
          </h1>

          {/* Decorative line */}
          <div
            className="mt-6 mx-auto h-[1px] rounded-full animate-fade-in"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,150,200,0.5), transparent)",
              width: "180px",
              animationDelay: "0.6s",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
