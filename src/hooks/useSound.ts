"use client";

import { useCallback, useRef } from "react";

type SoundType = "hover" | "click" | "pop";

/**
 * useSound hook
 * Generates UI feedback sounds using the Web Audio API.
 * This avoids 404/416 errors from missing or empty MP3 files.
 */
export function useSound() {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playSynthesizedSound = useCallback((type: SoundType) => {
    if (typeof window === "undefined") return;

    // Initialize AudioContext on first interaction
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const ctx = audioContextRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === "hover") {
      // Subtle, high-pitched short blip
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.05, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    } else if (type === "click") {
      // Short, medium click sound
      osc.type = "square";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.1);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    } else {
      // Soft pop
      osc.type = "triangle";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.08);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    }

    osc.start(now);
    osc.stop(now + 0.15);
  }, []);

  // For backward compatibility with existing components
  const playSound = useCallback((type: SoundType) => {
    playSynthesizedSound(type);
  }, [playSynthesizedSound]);

  return { playSound };
}
