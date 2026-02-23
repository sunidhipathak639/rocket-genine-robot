"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  PlayCircle,
  MessageCircle,
  Star,
  ShieldCheck,
} from "lucide-react";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center overflow-hidden border-b border-border/10 bg-transparent pt-32 md:pt-24 pb-16 z-0"
    >
      <motion.div
        style={{ y, opacity }}
        className="container relative mx-auto px-6 md:px-12 z-10 w-full h-full flex flex-col justify-center lg:justify-center overflow-y-auto overflow-x-hidden pt-12 mt-12 lg:pt-0 lg:mt-0 no-scrollbar pb-16 lg:pb-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-auto min-h-min shrink-0 lg:shrink">
          {/* Left Content Area */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-secondary/50 backdrop-blur-md text-sm font-medium mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-foreground/90 glow-text">
                Accepting Applications: Winter Cohort
              </span>
            </motion.div>

            {/* Glowing Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-6 relative"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Master AI.
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_30px_rgba(99,102,241,0.4)] animate-pulse-slow">
                Shape the Future.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl font-light"
            >
              Join the world&apos;s most elite AI engineering program. Built by
              industry leaders. Designed for ambitious professionals ready to
              build real-world products.
            </motion.p>

            {/* Conversion CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-lg font-semibold bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1"
              >
                Book Free Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-8 text-lg font-semibold bg-secondary/20 border-border/50 backdrop-blur-md hover:bg-secondary/40 transition-all text-white"
              >
                <PlayCircle className="mr-2 w-5 h-5" /> Watch Intro
              </Button>
            </motion.div>

            {/* Social Proof / Conversion Anchors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10 pt-8 border-t border-border/20 w-full"
            >
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="text-2xl md:text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  84 LPA
                </div>
                <div className="text-sm text-muted-foreground font-medium flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-green-400" /> Highest
                  Salary
                </div>
              </div>
              <div className="w-px h-12 bg-border/20 hidden md:block" />
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="text-2xl md:text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  5000+
                </div>
                <div className="text-sm text-muted-foreground font-medium flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" /> Students Trained
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Area (3D Robot + FX) */}
          <div className="relative lg:ml-auto w-full aspect-square xl:h-[650px] xl:w-[650px] flex items-center justify-center z-10 mt-12 lg:mt-0">
            {/* Energy Aura behind Robot */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow" />
            <div
              className="absolute inset-10 bg-purple-500/20 blur-[80px] rounded-full mix-blend-screen animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            />

            {/* Breathing Animation Container for 3D */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full pointer-events-auto"
            >
              <Spline scene="https://prod.spline.design/9aPp2nOUkM3wqAUO/scene.splinecode" />

              {/* Scanline / Light Beam Effect */}
              <motion.div
                className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[2px] z-50 pointer-events-none"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Floating Video Testimonial Preview Component */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 bg-black/60 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl flex items-center gap-4 cursor-pointer z-50 w-64 group"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/20">
                <img
                  src="/testimonial-1.png"
                  alt="Student"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <PlayCircle className="w-5 h-5 text-white drop-shadow-md" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-green-400 font-semibold mb-0.5">
                  Placed at Google
                </span>
                <span className="text-sm text-white font-medium line-clamp-2 leading-tight group-hover:text-primary-foreground transition-colors">
                  &quot;Robot Genie transformed my career path.&quot;
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating WhatsApp Final Anchor */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] transition-all group">
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
