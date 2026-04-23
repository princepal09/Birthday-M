import { useEffect, useRef } from "react";
import music from "/music/music1.mp3";

/**
 * Background music player.
 * - Waits MUSIC_DELAY (5s) before attempting playback
 * - Fades in volume gradually
 * - Falls back to user interaction if browser blocks autoplay
 */
export default function BackgroundMusic({ active = false }) {
  const audioRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (active && !hasStarted.current) {
      hasStarted.current = true;
      audio.volume = 0;
      audio.loop = true;

      const fadeIn = () => {
        let vol = 0;
        const interval = setInterval(() => {
          vol = Math.min(vol + 0.015, 0.35);
          audio.volume = vol;
          if (vol >= 0.35) clearInterval(interval);
        }, 100);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(fadeIn).catch(() => {
          // Fallback — shouldn't happen since triggered by user click
          const resumePlay = () => {
            audio
              .play()
              .then(fadeIn)
              .catch(() => {});
            document.removeEventListener("click", resumePlay);
            document.removeEventListener("touchstart", resumePlay);
          };
          document.addEventListener("click", resumePlay, { once: true });
          document.addEventListener("touchstart", resumePlay, { once: true });
        });
      }
    }
  }, [active]);

  // Fade out when deactivated
  useEffect(() => {
    const audio = audioRef.current;
    if (!active && hasStarted.current && audio && !audio.paused) {
      let vol = audio.volume;
      const fadeOut = setInterval(() => {
        vol = Math.max(vol - 0.02, 0);
        audio.volume = vol;
        if (vol <= 0) {
          clearInterval(fadeOut);
          audio.pause();
        }
      }, 80);
    }
  }, [active]);

  return (
    <audio
      ref={audioRef}
      src={music}
      preload="auto"
      style={{ display: "none" }}
    />
  );
}
