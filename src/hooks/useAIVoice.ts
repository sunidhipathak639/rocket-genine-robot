"use client";

import { useCallback, useState, useRef } from "react";

/**
 * useAIVoice hook
 * A robust, native implementation of Web Speech API for AI greetings.
 * Handles garbage collection, state locking, and browser autoplay policies.
 */
export function useAIVoice() {
  const [hasSpoken, setHasSpoken] = useState(false);
  const isPendingRef = useRef(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speakWelcome = useCallback(() => {
    // 1. Environment check
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      console.warn("AI Voice: Speech Synthesis not supported in this browser.");
      return;
    }

    // 2. Guard: Don't speak if already finished or if a request is already pending
    if (hasSpoken || isPendingRef.current) {
      console.log("AI Voice: Already spoken or pending transition.");
      return;
    }

    // 3. Guard: If physically speaking right now, don't interrupt (unless we wanted to force it)
    if (window.speechSynthesis.speaking) {
      console.log("AI Voice: Browser engine is currently busy.");
      return;
    }

    try {
      isPendingRef.current = true;

      // 4. Reset engine state
      window.speechSynthesis.cancel();

      // 5. Build Utterance
      const text = "Welcome to the Future of Intelligent Automation";
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Pin to ref to prevent Garbage Collection in some browsers (like Chrome)
      utteranceRef.current = utterance;

      utterance.lang = "en-US";
      utterance.volume = 1.0;
      utterance.rate = 0.9;
      utterance.pitch = 1.0;

      // 6. Voice Selection
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => v.name.includes("Samantha")) || 
                    voices.find(v => v.name.includes("Google UK English Female")) ||
                    voices.find(v => v.lang === "en-US" && v.name.includes("Female")) ||
                    voices.find(v => v.lang.startsWith("en"));
      
      if (voice) utterance.voice = voice;

      // 7. Event Handlers
      utterance.onstart = () => {
        console.log("AI Voice: Playback started successfully.");
        setHasSpoken(true);
        isPendingRef.current = false;
      };

      utterance.onend = () => {
        console.log("AI Voice: Playback finished.");
        isPendingRef.current = false;
        utteranceRef.current = null;
      };

      utterance.onerror = (event: any) => {
        const error = event.error || "unknown error";
        console.error(`AI Voice: Browser Error - ${error}`);
        
        isPendingRef.current = false;
        utteranceRef.current = null;

        // If blocked by autoplay policy ('not-allowed'), allow retry on next click
        if (error === 'not-allowed' || error === 'interrupted') {
          setHasSpoken(false);
        } else {
          // For critical errors, mark as spoken to stop infinite loop
          setHasSpoken(true);
        }
      };

      // 8. Trigger Playback
      // Small pause to let cancel() settle in the engine
      setTimeout(() => {
        window.speechSynthesis.resume();
        window.speechSynthesis.speak(utterance);
      }, 50);

    } catch (err) {
      console.error("AI Voice: Failed to initialize speech engine.", err);
      isPendingRef.current = false;
    }
  }, [hasSpoken]);

  return { speakWelcome, hasSpoken };
}
