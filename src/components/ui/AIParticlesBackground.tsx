"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export function AIParticlesBackground() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate random particles
    const generated = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  if (!mounted) return <div className="fixed inset-0 bg-black z-[-1]" />;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030712] pointer-events-none selection:bg-transparent">
      {/* 1. Deep Background Glow Fog */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-blue-500/10 blur-[100px] mix-blend-screen opacity-40 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* 2. Digital Grid Perspective */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          transform:
            "perspective(1000px) rotateX(60deg) translateY(-100px) scale(3)",
          transformOrigin: "top center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712]" />
      </div>

      {/* 3. Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/40 shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: ["0%", "-100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* 4. Subtle scanline overlay for futuristic monitor feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0Pgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSI0IiB5Mj0iMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiPjwvbGluZT4KPC9zdmc+')] opacity-50" />
    </div>
  );
}
