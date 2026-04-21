import { useMemo } from "react";
import { HEART_COUNT } from "../../utils/constants";

/**
 * Floating hearts background — pure CSS animation.
 * No Framer Motion. Uses @keyframes float-up from globals.css.
 */

// SVG heart shape
function HeartSVG({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
           C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  );
}

export default function FloatingHearts() {
  const hearts = useMemo(() => {
    const colors = [
      "rgba(255,100,150,0.2)",
      "rgba(255,150,180,0.18)",
      "rgba(200,100,255,0.15)",
      "rgba(255,80,120,0.22)",
      "rgba(255,180,200,0.15)",
      "rgba(180,120,255,0.18)",
    ];

    return Array.from({ length: HEART_COUNT }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[i % colors.length],
      duration: Math.random() * 10 + 16,
      delay: Math.random() * 8,
      blur: Math.random() * 2 + 1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            width: heart.size,
            height: heart.size,
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            filter: `blur(${heart.blur}px)`,
            animation: `float-up ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
          }}
        >
          <HeartSVG color={heart.color} />
        </div>
      ))}
    </div>
  );
}
