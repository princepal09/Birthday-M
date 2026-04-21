import { motion } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { STEPS } from "../../utils/constants";
import Typewriter from "./Typewriter";
import FloatingHearts from "./FloatingHearts";
import NameReveal from "./NameReveal";
import CTAButton from "./CTAButton";
import { useNavigate } from "react-router";
import Experience from "./Experience";
export default function Hero() {
  const { isLoading, currentStep, hasStartedExperience } = useAppContext();
  const navigate = useNavigate();
  if (isLoading) return null;

  return (
    <motion.section
      id="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0015 0%, #12002a 25%, #0d0020 50%, #08001a 75%, #050010 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Background ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            top: "-10%",
            right: "-10%",
            background:
              "radial-gradient(circle, rgba(120,40,200,0.12), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-15%",
            left: "-10%",
            background:
              "radial-gradient(circle, rgba(255,60,120,0.1), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(180,100,255,0.08), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Floating hearts */}
      <FloatingHearts />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-5 items-center justify-center px-4">
        {/* Show typewriter when step is QUOTE or beyond (but not EXPERIENCE) */}
        {(currentStep === STEPS.QUOTE ||
          currentStep === STEPS.NAME ||
          currentStep === STEPS.BUTTON) && <Typewriter />}

        <NameReveal />
        <CTAButton />

        {/* Experience started content */}
        {hasStartedExperience && (
        <Experience/>
        )}
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(5,0,16,0.8), transparent)",
        }}
      />
    </motion.section>
  );
}
