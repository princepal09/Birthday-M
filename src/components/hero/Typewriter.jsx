import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useAppContext } from "../../context/AppContext";
import { ROMANTIC_QUOTE, STEPS } from "../../utils/constants";

/**
 * Typewriter quote — types out the romantic quote character by character.
 * Uses react-simple-typewriter (lightweight). Minimal Framer Motion for fade-in only.
 */
export default function TypewriterQuote() {
  const { currentStep, advanceStep } = useAppContext();
  const isActive = currentStep === STEPS.QUOTE;

  const [text] = useTypewriter({
    words: [ROMANTIC_QUOTE],
    loop: 1,
    typeSpeed: 65,
    deleteSpeed: 0,
    delaySpeed: 1000,
  });

  // Advance to NAME step when quote finishes typing
  useEffect(() => {
    if (isActive && text === ROMANTIC_QUOTE) {
      const timer = setTimeout(() => advanceStep(STEPS.NAME), 1200);
      return () => clearTimeout(timer);
    }
  }, [text, isActive, advanceStep]);

  if (!isActive && currentStep === STEPS.LOADER) return null;

  return (
    <motion.div
      className="text-center px-6 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p
        className="text-xl md:text-3xl lg:text-4xl font-light italic leading-relaxed"
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          color: "var(--color-rose-muted)",
          textShadow: "0 0 30px rgba(255,100,180,0.15)",
          minHeight: "3em",
        }}
      >
        {"\u201C"}
        {text}
        <Cursor cursorStyle="|" cursorColor="rgba(255,180,220,0.7)" />
        {text === ROMANTIC_QUOTE && "\u201D"}
      </p>
    </motion.div>
  );
}
