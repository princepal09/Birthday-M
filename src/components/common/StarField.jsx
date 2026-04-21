import { useMemo } from "react";
import { STAR_COUNT } from "../../utils/constants";

/**
 * Pure CSS starfield — subtle twinkling dots scattered across the viewport.
 * No JS animation, no Framer Motion. Just CSS keyframes.
 */
export default function StarField() {
  const stars = useMemo(() => {
    return Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, []);

  return (
    <div className="star-field" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            "--duration": star.duration,
            "--delay": star.delay,
          }}
        />
      ))}
    </div>
  );
}
