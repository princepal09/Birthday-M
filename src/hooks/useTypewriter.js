import { useState, useEffect, useRef } from "react";
import { TYPEWRITER_SPEED } from "../utils/constants";

/**
 * Custom hook that produces a typewriter effect for the given text.
 *
 * @param {string}  text     – The full string to type out.
 * @param {number}  speed    – Milliseconds between each character.
 * @param {boolean} enabled  – Whether the effect should start.
 * @param {Function} onComplete – Callback when typing finishes.
 * @returns {{ displayedText: string, isComplete: boolean }}
 */
export function useTypewriter(
  text,
  speed = TYPEWRITER_SPEED,
  enabled = true,
  onComplete
) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    indexRef.current = 0;
    setDisplayedText("");
    setIsComplete(false);

    const interval = setInterval(() => {
      indexRef.current += 1;
      setDisplayedText(text.slice(0, indexRef.current));

      if (indexRef.current >= text.length) {
        clearInterval(interval);
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, enabled, onComplete]);

  return { displayedText, isComplete };
}
