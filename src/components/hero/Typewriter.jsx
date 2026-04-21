import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useAppContext } from "../../context/AppContext";
import { ROMANTIC_QUOTE, STEPS } from "../../utils/constants";

export default function Typewriter() {
  const { currentStep, advanceStep } = useAppContext();
  const isActive = currentStep === STEPS.QUOTE;

  const [text] = useTypewriter({
    words: [ROMANTIC_QUOTE],
    loop: 1,
    typeSpeed: 65,
    deleteSpeed: 0,
    delaySpeed: 1000,
  });

  // Detect completion (when full text matches)
  useEffect(() => {
    if (isActive && text === ROMANTIC_QUOTE) {
      setTimeout(() => {
        advanceStep(STEPS.NAME);
      }, 1200);
    }
  }, [text, isActive, advanceStep]);

  if (!isActive && currentStep === STEPS.LOADER) return null;

  return (
    <motion.div
      className="text-center mt-100 px-6 max-w-2xl mx-auto"
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
        {"\u201C"}
        {text}
        <Cursor cursorStyle="|" cursorColor="rgba(255,180,220,0.8)" />
        {text === ROMANTIC_QUOTE && "\u201D"}
      </p>
    </motion.div>
  );
}
