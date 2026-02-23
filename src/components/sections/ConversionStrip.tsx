"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useSound } from "@/hooks/useSound";

export function ConversionStrip() {
  const { playSound } = useSound();

  return (
    <section className="py-24 relative overflow-hidden bg-black border-y border-white/5">
      {/* Background Deep Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Grid Pattern with CSS */}
      <div
        className="absolute inset-0 [mask-image:linear-gradient(180deg,white,rgba(10,12,14,0))] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group"
        >
          {/* Internal Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />

          <div className="max-w-xl text-center md:text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" /> Final Call for Next Cohort
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Your Future in AI <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400">
                Starts Today.
              </span>
            </h2>
            <p className="text-white/60 text-lg">
              Admissions for the upcoming residential and online cohorts are
              closing soon. Secure your high-paying tech career before seats
              fill up.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 relative z-10"
          >
            <Button
              size="lg"
              className="rounded-full h-14 px-8 text-base bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all hover:scale-105 group/btn"
              onMouseEnter={() => playSound("hover")}
              onClick={() => playSound("click")}
            >
              Apply Now{" "}
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base bg-transparent border-green-500/30 text-white hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-400 transition-all shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:scale-105 group/btn2"
              onMouseEnter={() => playSound("hover")}
              onClick={() => playSound("click")}
            >
              <MessageCircle className="mr-2 w-5 h-5 text-green-400 group-hover/btn2:scale-110 transition-transform" />{" "}
              WhatsApp Expert
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
