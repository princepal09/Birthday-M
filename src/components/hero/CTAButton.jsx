import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { STEPS } from "../../utils/constants";

export default function CTAButton() {
  const { currentStep, startExperience } = useAppContext();
  const isVisible = currentStep === STEPS.BUTTON;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.button
            id="cta-begin-surprise"
            onClick={startExperience}
            className="relative px-10 py-4 rounded-full text-lg md:text-xl font-medium cursor-pointer border-none outline-none overflow-hidden"
            style={{
              fontFamily: "'Outfit', sans-serif",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,180,220,0.25)",
              color: "rgba(255,220,240,0.95)",
              boxShadow:
                "0 8px 32px rgba(255,100,180,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
            whileHover={{
              scale: 1.06,
              boxShadow:
                "0 12px 48px rgba(255,100,180,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,180,220,0.45)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,200,230,0.12) 50%, transparent 60%)",
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 2,
              }}
            />
            <span className="relative z-10">Begin the Surprise ✨</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
