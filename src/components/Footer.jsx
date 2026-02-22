import Spline from "@splinetool/react-spline";
import { useRef, useState, useCallback } from "react";

const LONG_PRESS_MS = 350; // ms before interaction mode activates

const Footer = () => {
  const [interacting, setInteracting] = useState(false);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  // ── Long-press starts → enable Spline pointer events ──────────────────────
  const handleTouchStart = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setInteracting(true);
    }, LONG_PRESS_MS);
  }, []);

  // ── Finger lifts or moves too much → back to scroll mode ──────────────────
  const handleTouchEnd = useCallback(() => {
    clearTimeout(timerRef.current);
    setInteracting(false);
  }, []);

  // Cancel long-press if the finger drifts (user is scrolling, not holding)
  const handleTouchMove = useCallback(() => {
    if (!interacting) {
      clearTimeout(timerRef.current);
    }
  }, [interacting]);

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Hint badge — only visible on mobile */}
      <div
        className={`
          md:hidden absolute top-4 left-1/2 -translate-x-1/2 z-20
          flex items-center gap-2 px-4 py-2 rounded-full
          bg-white/10 backdrop-blur border border-white/20
          text-white text-xs font-medium
          transition-opacity duration-300
          ${interacting ? "opacity-0" : "opacity-100"}
        `}
      >
        <span>👆</span>
        <span>Hold to interact · Release to scroll</span>
      </div>

      {/* Active interaction badge */}
      <div
        className={`
          md:hidden absolute top-4 left-1/2 -translate-x-1/2 z-20
          flex items-center gap-2 px-4 py-2 rounded-full
          bg-indigo-500/80 backdrop-blur border border-indigo-400/40
          text-white text-xs font-semibold
          transition-opacity duration-200
          ${interacting ? "opacity-100" : "opacity-0"}
        `}
      >
        <span>✋</span>
        <span>Interacting — release to scroll</span>
      </div>

      {/* Spline wrapper
          - Mobile: pointer-events toggled by long-press state
          - Desktop (md+): always pointer-events-auto for mouse hover/drag */}
      <div
        ref={containerRef}
        className={`w-full h-[500px] md:h-[600px] md:pointer-events-auto ${
          interacting ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={{ touchAction: interacting ? "none" : "pan-y" }}
      >
        <Spline scene="https://prod.spline.design/1K6ybQRe7IkDncyv/scene.splinecode" />
      </div>
    </footer>
  );
};

export default Footer;
