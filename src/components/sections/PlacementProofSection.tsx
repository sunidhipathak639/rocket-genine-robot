"use client";

import { motion, useInView, animate } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  Building2,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useSound } from "@/hooks/useSound";

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function PlacementProofSection() {
  const { playSound } = useSound();
  const stats = [
    { label: "Placement Rate", value: 94, suffix: "%", icon: Briefcase },
    { label: "Avg. Salary Hike", value: 120, suffix: "%", icon: TrendingUp },
    { label: "Alumni Network", value: 50, suffix: "k+", icon: GraduationCap },
    { label: "Hiring Companies", value: 800, suffix: "+", icon: Building2 },
  ];

  // Actual generated abstract tech logos
  const logos = [
    "/logo-1.png",
    "/logo-2.png",
    "/logo-3.png",
    "/logo-4.png",
    "/logo-5.png",
    "/logo-1.png",
    "/logo-2.png",
    "/logo-3.png",
  ];

  const floatingOffers = [
    {
      company: "Microsoft",
      role: "AI Engineer",
      ctc: "45 LPA",
      top: "10%",
      left: "5%",
      delay: 0.2,
    },
    {
      company: "Google",
      role: "ML Researcher",
      ctc: "72 LPA",
      top: "55%",
      right: "5%",
      delay: 0.5,
    },
    {
      company: "Amazon",
      role: "Data Scientist",
      ctc: "38 LPA",
      bottom: "20%",
      left: "12%",
      delay: 0.8,
    },
    {
      company: "OpenAI",
      role: "Core Engineer",
      ctc: "84 LPA",
      top: "25%",
      right: "15%",
      delay: 1.1,
    },
  ];

  return (
    <section
      id="placements"
      className="relative py-32 border-y border-border/10 bg-transparent overflow-hidden"
    >
      {/* India Placement Map Accent (Abstracted using radial fog and floating pins) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow" />

        {/* Subtle dot matrix background to feel like a global/tech map */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Floating Offer Letter Popups (Cinematic effect in background) */}
        {floatingOffers.map((offer, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{
              duration: 0.8,
              delay: offer.delay,
              type: "spring",
              bounce: 0.4,
            }}
            className="absolute hidden lg:block z-0"
            style={{
              top: offer.top,
              left: offer.left,
              right: offer.right,
              bottom: offer.bottom,
            }}
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
                x: [0, 6, 0],
              }}
              transition={{
                y: {
                  duration: 3.5 + idx * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                x: {
                  duration: 4.5 + idx * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="flex flex-col gap-0.5 p-2 px-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-left w-auto whitespace-nowrap"
            >
              <div className="flex items-center gap-1 text-green-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                <CheckCircle2 className="w-3 h-3" /> Offered
              </div>
              <div className="text-white text-sm font-semibold leading-tight">
                {offer.company}
              </div>
              <div className="text-muted-foreground text-[10px] leading-tight">
                {offer.role}
              </div>
              <div className="text-primary text-xs font-bold mt-0.5 leading-tight">
                {offer.ctc}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container relative mx-auto px-6 md:px-12 z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white drop-shadow-md">
            Careers That Define The Industry
          </h2>
          <p className="text-lg text-muted-foreground/80 font-light">
            Our alumni are building the next generation of AI products at the
            world&apos;s leading technology companies.
          </p>
        </div>

        {/* Animated Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-24 text-center relative z-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                }}
                onMouseEnter={() => playSound("hover")}
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:border-primary/50 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden transform-gpu hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]"
              >
                {/* Holographic sweep effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out z-0" />

                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 inner-shadow group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 relative z-10 border border-white/5 group-hover:border-primary/30">
                  <Icon className="w-7 h-7 text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 text-white drop-shadow-md relative z-10 group-hover:text-primary transition-colors duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-1 relative z-10 group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Infinite Scrolling Company Logos */}
      <div className="w-full overflow-hidden bg-black/40 backdrop-blur-md py-12 border-y border-white/5 flex flex-col items-center relative z-20">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" /> Hiring Partners Across
          India & Global Hubs
        </p>

        <div className="relative w-full flex overflow-x-hidden">
          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#030712] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#030712] to-transparent z-10" />

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
                className="flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <div className="relative h-14 w-36 flex justify-center items-center">
                  {/* Using invert to make the black logos white */}
                  <Image
                    src={logo}
                    alt={`Partner Company`}
                    fill
                    className="object-contain invert mix-blend-screen brightness-200"
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
