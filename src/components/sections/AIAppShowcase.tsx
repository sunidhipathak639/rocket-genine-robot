"use client";

import { AIParticlesBackground } from "@/components/ui/AIParticlesBackground";
import { MobileAppNavbar } from "@/components/layout/MobileAppNavbar";
import { AILearningCardPremium } from "@/components/sections/AILearningCardPremium";
import { motion } from "framer-motion";

export function AIAppShowcase() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-hidden selection:bg-cyan-500/30">
      {/* Background Layer */}
      <AIParticlesBackground />

      {/* Fixed Navbar */}
      <MobileAppNavbar />

      {/* Main Content Area (Mobile Viewport Sim) */}
      <main className="pt-28 pb-12 px-6 max-w-lg mx-auto min-h-screen flex flex-col justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-2"
        >
          <h1 className="text-4xl font-black tracking-tight leading-[1.1]">
            Next-Gen <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Education
            </span>
          </h1>
          <p className="text-blue-100/40 text-sm font-medium">
            Propel your career into the future of intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <AILearningCardPremium />
        </motion.div>

        {/* Additional decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
      </main>
    </div>
  );
}
