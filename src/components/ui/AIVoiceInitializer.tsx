"use client";

import { useEffect } from "react";
import { useAIVoice } from "@/hooks/useAIVoice";

export function AIVoiceInitializer() {
  const { speakWelcome } = useAIVoice();

  useEffect(() => {
    const triggerAudio = () => {
      speakWelcome();
      // Remove listeners after first interaction
      window.removeEventListener("click", triggerAudio);
      window.removeEventListener("touchstart", triggerAudio);
      window.removeEventListener("keydown", triggerAudio);
    };

    window.addEventListener("click", triggerAudio, { once: true });
    window.addEventListener("touchstart", triggerAudio, { once: true });
    window.addEventListener("keydown", triggerAudio, { once: true });

    return () => {
      window.removeEventListener("click", triggerAudio);
      window.removeEventListener("touchstart", triggerAudio);
      window.removeEventListener("keydown", triggerAudio);
    };
  }, [speakWelcome]);

  return null;
}
