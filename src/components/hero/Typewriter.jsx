import { useCallback } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useAppContext } from "../../context/AppContext";
import { ROMANTIC_QUOTE, STEPS } from "../../utils/constants";

export default function Typewriter() {
  const { currentStep, advanceStep } = useAppContext();
  const isActive = currentStep === STEPS.QUOTE;

  const handleComplete = useCallback(() => {
    // Wait a moment after the quote finishes before advancing
    setTimeout(() => {
      advanceStep(STEPS.NAME);
    }, 1200);
  }, [advanceStep]);

  const { displayedText, isComplete } = useTypewriter(
    ROMANTIC_QUOTE,
    65,
    isActive,
    handleComplete
  );

  if (!isActive && currentStep === STEPS.LOADER) return null;

  return (
    <motion.div
      className="text-center px-6 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <p
        className="text-xl md:text-3xl lg:text-4xl font-light italic leading-relaxed"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "rgba(255, 220, 240, 0.95)",
          textShadow: "0 0 40px rgba(255,100,180,0.2)",
          minHeight: "3em",
        }}
      >
        {"\u201C"}{displayedText}
        {!isComplete && (
          <motion.span
            className="inline-block ml-1 w-[2px] h-[1em] align-middle"
            style={{ background: "rgba(255,180,220,0.8)" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
        {isComplete && "\u201D"}
      </p>
    </motion.div>
  );
}
