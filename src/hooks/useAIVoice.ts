"use client";

import { useCallback, useState } from "react";

export function useAIVoice() {
  const [hasSpoken, setHasSpoken] = useState(false);

  const speakWelcome = useCallback(() => {
    if (hasSpoken || typeof window === "undefined" || !("speechSynthesis" in window)) return;

    try {
      const utterance = new SpeechSynthesisUtterance("Welcome to the future of A I engineering. Prepare to shift your paradigm.");
      
      // Try to find a robotic/authoritative English voice
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(
        (voice) => 
          voice.name.includes("Samantha") || // Mac default Siri-like
          voice.name.includes("Google UK English Female") || 
          voice.name.includes("Microsoft Zira") 
      );
      
      if (preferredVoice) utterance.voice = preferredVoice;
      
      utterance.pitch = 0.9; // Slightly deeper, more authoritative
      utterance.rate = 0.95; // Slightly slower, deliberate
      utterance.volume = 0.3; // Keep it subtle and ambient, not jarring

      window.speechSynthesis.speak(utterance);
      setHasSpoken(true);
    } catch (e) {
      console.debug("Speech synthesis failed or blocked:", e);
    }
  }, [hasSpoken]);

  return { speakWelcome };
}
