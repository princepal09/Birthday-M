import { useEffect, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import { BG_MUSIC_PATH } from "../../utils/constants";

export default function BackgroundMusic() {
  const { isMusicPlaying } = useAppContext();
  const audioRef = useRef(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMusicPlaying && !hasInitialized.current) {
      hasInitialized.current = true;
      audio.volume = 0;
      audio.loop = true;

      // Attempt autoplay — will fail without user gesture on most browsers
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Fade in
            let vol = 0;
            const fadeIn = setInterval(() => {
              vol = Math.min(vol + 0.02, 0.4);
              audio.volume = vol;
              if (vol >= 0.4) clearInterval(fadeIn);
            }, 80);
          })
          .catch(() => {
            // Autoplay blocked — try on next user interaction
            const resumePlay = () => {
              audio.play().then(() => {
                let vol = 0;
                const fadeIn = setInterval(() => {
                  vol = Math.min(vol + 0.02, 0.4);
                  audio.volume = vol;
                  if (vol >= 0.4) clearInterval(fadeIn);
                }, 80);
              });
              document.removeEventListener("click", resumePlay);
              document.removeEventListener("touchstart", resumePlay);
            };
            document.addEventListener("click", resumePlay, { once: true });
            document.addEventListener("touchstart", resumePlay, { once: true });
          });
      }
    }

    if (!isMusicPlaying && hasInitialized.current) {
      // Fade out
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
  }, [isMusicPlaying]);

  return (
    <audio
      ref={audioRef}
      src={BG_MUSIC_PATH}
      preload="auto"
      style={{ display: "none" }}
    />
  );
}
