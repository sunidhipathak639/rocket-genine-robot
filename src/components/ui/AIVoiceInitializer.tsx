"use client";

import { useEffect } from "react";
import { useAIVoice } from "@/hooks/useAIVoice";

export function AIVoiceInitializer() {
  const { speakWelcome, hasSpoken } = useAIVoice();

  useEffect(() => {
    if (hasSpoken) return;

    // Use a simpler approach: any interaction starts it
    const events = [
      "click",
      "touchstart",
      "mousedown",
      "keydown",
      "scroll",
      "wheel",
    ];

    const handleGesture = () => {
      speakWelcome();
      // Remove all listeners immediately after first one triggers
      events.forEach((event) => {
        window.removeEventListener(event, handleGesture);
      });
    };

    events.forEach((event) => {
      window.addEventListener(event, handleGesture);
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleGesture);
      });
    };
  }, [speakWelcome, hasSpoken]);

  return null;
}
