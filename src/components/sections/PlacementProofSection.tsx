"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, TrendingUp, Building2 } from "lucide-react";
import Image from "next/image";

export function PlacementProofSection() {
  const stats = [
    { label: "Placement Rate", value: "94%", icon: Briefcase },
    { label: "Avg. Salary Hike", value: "120%", icon: TrendingUp },
    { label: "Alumni Network", value: "50k+", icon: GraduationCap },
    { label: "Hiring Companies", value: "800+", icon: Building2 },
  ];

  // Actual generated abstract tech logos
  const logos = [
    "/logo-1.png",
    "/logo-2.png",
    "/logo-3.png",
    "/logo-4.png",
    "/logo-5.png",
    // Repeat to have enough base elements before doubling
    "/logo-1.png",
    "/logo-2.png",
    "/logo-3.png",
  ];

  return (
    <section
      id="placements"
      className="py-24 border-y border-border/50 bg-secondary/10"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Animated Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-background border border-border/50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Infinite Scrolling Company Logos */}
      <div className="w-full overflow-hidden bg-background py-10 border-y border-border/50 flex flex-col items-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          Our Graduates Power These Teams
        </p>

        <div className="relative w-full flex overflow-x-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex gap-16 md:gap-24 items-center whitespace-nowrap min-w-max px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Map twice to create seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                <div className="relative h-12 w-32 flex justify-center items-center">
                  {/* Using dark:invert to make the black logos white in dark mode, and mix-blend-multiply to remove white background in light mode */}
                  <Image
                    src={logo}
                    alt={`Partner Company`}
                    fill
                    className="object-contain dark:invert mix-blend-multiply dark:mix-blend-normal"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
