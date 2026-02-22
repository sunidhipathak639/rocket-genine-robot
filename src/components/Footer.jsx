import Spline from "@splinetool/react-spline";
import { useRef, useEffect, useCallback } from "react";

const LONG_PRESS_MS = 350;

const Footer = () => {
  const overlayRef = useRef(null);
  const splineWrapperRef = useRef(null);
  const timerRef = useRef(null);
  const isInteractingRef = useRef(false);
  const hintRef = useRef(null);
  const activeBadgeRef = useRef(null);

  // ─── Helper: get Spline's canvas element ────────────────────────────────────
  const getCanvas = useCallback(
    () => splineWrapperRef.current?.querySelector("canvas"),
    [],
  );

  // ─── Helper: forward a touch event to the Spline canvas ─────────────────────
  const forwardToCanvas = useCallback(
    (type, srcTouch) => {
      const canvas = getCanvas();
      if (!canvas) return;
      try {
        const isEnd = type === "touchend" || type === "touchcancel";
        const t = new Touch({
          identifier: 1,
          target: canvas,
          clientX: srcTouch.clientX,
          clientY: srcTouch.clientY,
          pageX: srcTouch.pageX,
          pageY: srcTouch.pageY,
          screenX: srcTouch.screenX,
          screenY: srcTouch.screenY,
          radiusX: srcTouch.radiusX || 1,
          radiusY: srcTouch.radiusY || 1,
          rotationAngle: srcTouch.rotationAngle || 0,
          force: srcTouch.force || 1,
        });
        canvas.dispatchEvent(
          new TouchEvent(type, {
            cancelable: true,
            bubbles: true,
            touches: isEnd ? [] : [t],
            targetTouches: isEnd ? [] : [t],
            changedTouches: [t],
          }),
        );
      } catch (err) {
        // TouchEvent/Touch constructor not supported — silently ignore
      }
    },
    [getCanvas],
  );

  // ─── Imperatively toggle hints (no React state → no render delay) ───────────
  const setHint = useCallback((interacting) => {
    if (hintRef.current)
      hintRef.current.style.opacity = interacting ? "0" : "1";
    if (activeBadgeRef.current)
      activeBadgeRef.current.style.opacity = interacting ? "1" : "0";
    if (overlayRef.current)
      overlayRef.current.style.touchAction = interacting ? "none" : "pan-y";
  }, []);

  // ─── touchstart on overlay ───────────────────────────────────────────────────
  const handleTouchStart = useCallback(
    (e) => {
      isInteractingRef.current = false;
      clearTimeout(timerRef.current);

      const touch = e.touches[0];

      timerRef.current = setTimeout(() => {
        isInteractingRef.current = true;
        setHint(true);
        // Kick off interaction on the Spline canvas at current touch position
        forwardToCanvas("touchstart", touch);
      }, LONG_PRESS_MS);
    },
    [forwardToCanvas, setHint],
  );

  // ─── touchend / touchcancel on overlay ──────────────────────────────────────
  const handleTouchEnd = useCallback(
    (e) => {
      clearTimeout(timerRef.current);
      if (isInteractingRef.current) {
        forwardToCanvas("touchend", e.changedTouches[0]);
      }
      isInteractingRef.current = false;
      setHint(false);
    },
    [forwardToCanvas, setHint],
  );

  // ─── touchmove must be registered with { passive: false } so we can
  //     call preventDefault() to block page scroll during interaction.
  //     React synthetic events are always passive, so we attach imperatively.
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const handleTouchMove = (e) => {
      if (!isInteractingRef.current) {
        // Finger moved before long-press fired → cancel the timer
        clearTimeout(timerRef.current);
        return;
      }
      // Block page scroll and forward move to Spline
      e.preventDefault();
      forwardToCanvas("touchmove", e.touches[0]);
    };

    overlay.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => overlay.removeEventListener("touchmove", handleTouchMove);
  }, [forwardToCanvas]);

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Spline — always pointer-events-auto so desktop mouse works,
          and so forwarded touch events reach the canvas */}
      <div ref={splineWrapperRef} className="w-full h-[500px] md:h-[600px]">
        <Spline scene="https://prod.spline.design/1K6ybQRe7IkDncyv/scene.splinecode" />
      </div>

      {/* Mobile-only overlay — sits above Spline and owns all touch events.
          Forwards them to the canvas when in interact mode. */}
      <div
        ref={overlayRef}
        className="md:hidden absolute inset-0 z-10"
        style={{ touchAction: "pan-y" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        // touchmove attached imperatively above (needs passive:false)
      >
        {/* Scroll-mode hint */}
        <div
          ref={hintRef}
          style={{ opacity: 1, transition: "opacity 0.3s" }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-medium pointer-events-none"
        >
          <span>👆</span>
          <span>Hold to interact with 3D scene</span>
        </div>

        {/* Interact-mode hint */}
        <div
          ref={activeBadgeRef}
          style={{ opacity: 0, transition: "opacity 0.2s" }}
          className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/80 backdrop-blur border border-indigo-400/40 text-white text-xs font-semibold pointer-events-none"
        >
          <span>✋</span>
          <span>Interacting — release to scroll</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
