"use client";

import { useCallback, useRef } from "react";

type SoundType = "hover" | "click" | "pop";

const soundUrls: Record<SoundType, string> = {
  hover: "/sounds/hover.mp3",
  click: "/sounds/click.mp3",
  pop: "/sounds/pop.mp3",
};

export function useSound() {
  // Cache instantiated Audio objects
  const audioRef = useRef<Record<SoundType, HTMLAudioElement | null>>({
    hover: null,
    click: null,
    pop: null,
  });

  const playSound = useCallback((type: SoundType) => {
    if (typeof window === "undefined") return;

    let sourceAudio = audioRef.current[type];

    // Lazy initialization
    if (!sourceAudio) {
      sourceAudio = new Audio(soundUrls[type]);
      sourceAudio.volume = type === "hover" ? 0.1 : 0.2;
      audioRef.current[type] = sourceAudio;
    }
      if (sourceAudio) {
        // Clone the node so multiple of the same sound can play concurrently
        // and avoid mutating the state object directly
        const clone = sourceAudio.cloneNode(true) as HTMLAudioElement;
        clone.volume = sourceAudio.volume;
        clone.play().catch((e) => {
          // Ignore auto-play blocking errors silently
          console.debug("Autoplay prevented:", e);
        });
      }
    },
    []
  );

  return { playSound };
}
