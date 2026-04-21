import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useAppContext } from "../../context/AppContext";
import { STEPS } from "../../utils/constants";
import Button from "../common/Button";

/**
 * CTA Button — navigates to the experience page.
 * Uses the reusable Button component with a simple fade-in.
 */
export default function CTAButton() {
  const { currentStep } = useAppContext();
  const navigate = useNavigate();
  const isVisible = currentStep === STEPS.BUTTON;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Button
            id="cta-begin-surprise"
            onClick={() => navigate("/experience")}
            className="text-base md:text-lg"
          >
            Begin the Surprise ✨
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
