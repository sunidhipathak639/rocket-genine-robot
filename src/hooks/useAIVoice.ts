"use client";

import { useCallback, useState, useRef } from "react";

/**
 * useAIVoice hook
 * Plays a pre-recorded welcome MP3 on user interaction.
 * Normalizes behavior across browsers by handling autoplay policies.
 */
export function useAIVoice() {
  const [hasSpoken, setHasSpoken] = useState(false);
  const isPlayingRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const speakWelcome = useCallback(() => {
    if (typeof window === "undefined") return;

    // Only block if we actually finished successfully
    if (hasSpoken || isPlayingRef.current) return;

    try {
      isPlayingRef.current = true;

      // 1. Setup Audio
      if (!audioRef.current) {
        audioRef.current = new Audio("/sounds/welcome.mp3");
      }
      
      const audio = audioRef.current;
      audio.volume = 1.0;

      // 2. Event Handlers
      audio.onplay = () => {
        console.log("AI Voice: Playing pre-recorded greeting...");
        setHasSpoken(true);
      };

      audio.onended = () => {
        console.log("AI Voice: Greeting finished.");
        isPlayingRef.current = false;
        audioRef.current = null; // Cleanup
      };

      audio.onerror = (e) => {
        console.warn("AI Voice: Audio file playback failed", e);
        isPlayingRef.current = false;
        setHasSpoken(false); // Allow retry
      };

      // 3. Play
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("AI Voice: Autoplay prevented, waiting for next interaction.", error.name);
          isPlayingRef.current = false;
          setHasSpoken(false);
        });
      }

    } catch (err) {
      console.error("AI Voice: Initialization error", err);
      isPlayingRef.current = false;
    }
  }, [hasSpoken]);

  return { speakWelcome, hasSpoken };
}
