"use client";

import { useEffect, useCallback } from "react";
import { useAIVoice } from "@/hooks/useAIVoice";

export function AIVoiceInitializer() {
  const { speakWelcome, hasSpoken } = useAIVoice();

  const handleInteraction = useCallback(async () => {
    if (!hasSpoken) {
      await speakWelcome();
    }
  }, [hasSpoken, speakWelcome]);

  useEffect(() => {
    if (hasSpoken) return;

    // We listen to the most common user gestures
    const events = ["click", "touchstart", "mousedown"];

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
