"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function MouseTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth > 768);

      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", updateMousePosition);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-4 w-4 rounded-full bg-white mix-blend-difference"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", damping: 40, mass: 0.1, stiffness: 400 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] h-12 w-12 rounded-full bg-primary/40 mix-blend-screen blur-[10px]"
        animate={{ x: mousePosition.x - 24, y: mousePosition.y - 24 }}
        transition={{ type: "spring", damping: 20, mass: 0.5, stiffness: 100 }}
      />
    </>
  );
}
