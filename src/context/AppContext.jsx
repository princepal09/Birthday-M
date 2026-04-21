import { createContext, useContext, useState, useCallback, useMemo } from "react";
import { STEPS } from "../utils/constants";

// ─── Context ─────────────────────────────────────────────────────────────────
const AppContext = createContext(null);

// ─── Provider ────────────────────────────────────────────────────────────────
export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(STEPS.LOADER);

  const advanceStep = useCallback((step) => {
    setCurrentStep(step);
  }, []);

  const startMusic = useCallback(() => {
    setIsMusicPlaying(true);
  }, []);

  const stopMusic = useCallback(() => {
    setIsMusicPlaying(false);
  }, []);

  const finishLoading = useCallback(() => {
    setIsLoading(false);
    setCurrentStep(STEPS.QUOTE);
  }, []);

  const value = useMemo(
    () => ({
      isLoading,
      isMusicPlaying,
      currentStep,
      advanceStep,
      startMusic,
      stopMusic,
      finishLoading,
    }),
    [isLoading, isMusicPlaying, currentStep, advanceStep, startMusic, stopMusic, finishLoading]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// ─── Custom Hook ─────────────────────────────────────────────────────────────
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
