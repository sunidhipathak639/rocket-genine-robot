"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function TrainingEnvSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-transparent z-0 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-full bg-slate-900/10 absolute inset-0 pointer-events-none" />
      </div>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-background/10 z-10 pointer-events-none" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 text-center text-foreground">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-md">
            See AI in Action.
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Watch our Robot Genie at work. Discover the cutting-edge technology
            and seamlessly integrated workflows that power our enterprise-grade
            AI solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
