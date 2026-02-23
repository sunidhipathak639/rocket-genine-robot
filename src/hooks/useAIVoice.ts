"use client";

import { useCallback, useState, useRef } from "react";

export function useAIVoice() {
  const [hasSpoken, setHasSpoken] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speakWelcome = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    
    // If it's already speaking, don't interrupt
    if (window.speechSynthesis.speaking) return;
    if (hasSpoken) return;

    try {
      // 1. Clear any stuck synthesis
      window.speechSynthesis.cancel();

      // 2. Create utterance
      const text = "Welcome to the Future of Intelligent Automation";
      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance; // Keep alive
      
      utterance.lang = "en-US";
      utterance.volume = 1.0;
      utterance.rate = 0.9;
      utterance.pitch = 1.0;

      // 3. Try to get a decent voice, but don't let it block us
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const voice = voices.find(v => v.name.includes("Samantha") || v.name.includes("Female") || v.lang.startsWith("en"));
        if (voice) utterance.voice = voice;
      }

      // 4. Set state on start
      utterance.onstart = () => {
        setHasSpoken(true);
        console.log("AI Voice: Speaking started");
      };

      utterance.onend = () => {
        utteranceRef.current = null;
        console.log("AI Voice: Speaking finished");
      };

      utterance.onerror = (e) => {
        console.error("AI Voice: Error occurred", e);
        utteranceRef.current = null;
        if (e.error === 'not-allowed') {
          // Keep hasSpoken false so we can try again on next click
          setHasSpoken(false);
        }
      };

      // 5. Speak after a tiny tick to ensure cancel() registered
      setTimeout(() => {
        // Some browsers start paused
        window.speechSynthesis.resume();
        window.speechSynthesis.speak(utterance);
      }, 50);

    } catch (error) {
      console.error("AI Voice: Initialization failed", error);
    }
  }, [hasSpoken]);

  return { speakWelcome, hasSpoken };
}
