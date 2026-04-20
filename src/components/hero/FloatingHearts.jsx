import { useMemo } from "react";
import { motion } from "framer-motion";
import { HEART_COUNT } from "../../utils/constants";

// SVG heart shape
function HeartSVG({ color, glow }) {
  return (
    <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
           C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        style={{
          filter: glow ? `drop-shadow(0 0 8px ${color})` : "none",
        }}
      />
    </svg>
  );
}

export default function FloatingHearts() {
  const hearts = useMemo(() => {
    return Array.from({ length: HEART_COUNT }, (_, i) => {
      const size = Math.random() * 24 + 10;
      const colors = [
        "rgba(255,100,150,0.3)",
        "rgba(255,150,180,0.25)",
        "rgba(200,100,255,0.2)",
        "rgba(255,80,120,0.35)",
        "rgba(255,180,200,0.2)",
        "rgba(180,120,255,0.25)",
      ];
      return {
        id: i,
        size,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[i % colors.length],
        blur: Math.random() * 3 + 1,
        duration: Math.random() * 12 + 14,
        delay: Math.random() * 5,
        glow: Math.random() > 0.5,
        moveX: (Math.random() - 0.5) * 200,
        moveY: (Math.random() - 0.5) * 200,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            width: heart.size,
            height: heart.size,
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            filter: `blur(${heart.blur}px)`,
            opacity: 0,
          }}
          animate={{
            x: [0, heart.moveX * 0.5, heart.moveX, heart.moveX * 0.3, 0],
            y: [0, heart.moveY * 0.3, heart.moveY * 0.7, heart.moveY, 0],
            opacity: [0, 0.7, 0.5, 0.8, 0],
            scale: [0.8, 1.1, 0.9, 1.05, 0.8],
            rotate: [0, 15, -10, 5, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HeartSVG color={heart.color} glow={heart.glow} />
        </motion.div>
      ))}
    </div>
  );
}
