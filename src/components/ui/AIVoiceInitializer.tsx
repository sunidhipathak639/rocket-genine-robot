"use client";

import { useEffect, useCallback } from "react";
import { useAIVoice } from "@/hooks/useAIVoice";

export function AIVoiceInitializer() {
  const { speakWelcome, hasSpoken } = useAIVoice();

  const handleInteraction = useCallback(() => {
    // We only try to speak if we haven't finished successfully yet
    speakWelcome();
  }, [speakWelcome]);

  useEffect(() => {
    if (hasSpoken) return;

    // Listen to major user gestures including scroll
    const events = ["click", "touchstart", "mousedown", "scroll", "wheel"];

    events.forEach((event) => {
      window.addEventListener(event, handleInteraction, {
        passive: true,
        capture: true,
      });
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleInteraction, { capture: true });
      });
    };
  }, [handleInteraction, hasSpoken]);

  return null;
}
