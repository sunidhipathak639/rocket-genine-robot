"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

export function HeroSection() {
  const stats = [
    { icon: Users, label: "Active Learners", value: "10,000+" },
    { icon: Star, label: "Average Rating", value: "4.9/5" },
    { icon: Award, label: "Hiring Partners", value: "500+" },
  ];

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden border-b border-border/50 bg-background pt-32 md:pt-24 pb-16 z-0">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-6 md:px-12 z-10 w-full h-full flex flex-col justify-center lg:justify-center overflow-y-auto overflow-x-hidden pt-12 mt-12 lg:pt-0 lg:mt-0 no-scrollbar pb-16 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-auto min-h-min shrink-0 lg:shrink">
          {/* Left Content Area */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              New AI Masterclass Starts Nov 15th
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
            >
              Master AI.
              <br />
              <span className="text-muted-foreground">Shape the Future.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              Enterprise-grade artificial intelligence education designed for
              ambitious professionals. Learn from industry leaders, build
              real-world products, and accelerate your tech career.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="rounded-full h-12 px-8 text-base">
                Explore Courses <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 text-base"
              >
                View Placements
              </Button>
            </motion.div>

            {/* Trust Stats below CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-border/50 w-full"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xl font-bold text-foreground">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Visual Area (Spline 3D Scene) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto w-full aspect-square xl:h-[600px] xl:w-[600px] flex items-center justify-center z-10 mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 w-full h-full pointer-events-auto">
              <Spline scene="https://prod.spline.design/9aPp2nOUkM3wqAUO/scene.splinecode" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
