import { useAppContext } from "../../context/AppContext";
import { STEPS } from "../../utils/constants";
import TypewriterQuote from "./Typewriter";
import FloatingHearts from "./FloatingHearts";
import NameReveal from "./NameReveal";
import CTAButton from "./CTAButton";

/**
 * Hero section — orchestrates the intro flow:
 * Typewriter Quote → Name Reveal → CTA Button
 * Background: FloatingHearts + ambient gradient orbs
 */
export default function Hero() {
  const { isLoading, currentStep } = useAppContext();

  if (isLoading) return null;

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ambient animate-fade-in"
    >
      {/* Background ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="ambient-orb"
          style={{
            width: 500,
            height: 500,
            top: "-8%",
            right: "-8%",
            background: "radial-gradient(circle, rgba(120,40,200,0.1), transparent 70%)",
          }}
        />
        <div
          className="ambient-orb"
          style={{
            width: 400,
            height: 400,
            bottom: "-12%",
            left: "-8%",
            background: "radial-gradient(circle, rgba(255,60,120,0.08), transparent 70%)",
          }}
        />
      </div>

      {/* Floating hearts */}
      <FloatingHearts />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 items-center justify-center px-4">
        {/* Show typewriter when step is QUOTE or beyond */}
        {(currentStep === STEPS.QUOTE ||
          currentStep === STEPS.NAME ||
          currentStep === STEPS.BUTTON) && <TypewriterQuote />}

        <NameReveal />
        <CTAButton />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--color-bg-primary), transparent)",
        }}
      />
    </section>
  );
}
