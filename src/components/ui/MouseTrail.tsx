"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function MouseTrail() {
  const [isDesktop, setIsDesktop] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Use springs for smooth following without re-renders
  const springX1 = useSpring(mouseX, {
    damping: 40,
    mass: 0.1,
    stiffness: 400,
  });
  const springY1 = useSpring(mouseY, {
    damping: 40,
    mass: 0.1,
    stiffness: 400,
  });

  const springX2 = useSpring(mouseX, {
    damping: 20,
    mass: 0.5,
    stiffness: 100,
  });
  const springY2 = useSpring(mouseY, {
    damping: 20,
    mass: 0.5,
    stiffness: 100,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    const updateMousePosition = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    window.addEventListener("mousemove", updateMousePosition, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-4 w-4 rounded-full bg-white mix-blend-difference"
        style={{ x: springX1, y: springY1, translateX: -8, translateY: -8 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] h-12 w-12 rounded-full bg-primary/40 mix-blend-screen blur-[10px]"
        style={{ x: springX2, y: springY2, translateX: -24, translateY: -24 }}
      />
    </>
  );
}
