"use client";

import { motion, useInView, animate } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  Building2,
  MapPin,
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
  const successStories = [
    {
      name: "Arjun Sharma",
      role: "AI Engineer",
      company: "Google",
      package: "45 LPA",
      hike: "150%",
      tag: "Lead Role",
      image: "/alumni-1.png",
    },
    {
      name: "Priya Patel",
      role: "ML Researcher",
      company: "Microsoft",
      package: "38 LPA",
      hike: "120%",
      tag: "Research",
      image: "/alumni-2.png",
    },
    {
      name: "Rahul Verma",
      role: "Data Scientist",
      company: "Amazon",
      package: "42 LPA",
      hike: "180%",
      tag: "Big Data",
      image: "/t-james.png",
    },
    {
      name: "Sneha Reddy",
      role: "NLP Architect",
      company: "OpenAI",
      package: "52 LPA",
      hike: "210%",
      tag: "Gen AI",
      image: "/t-elena.png",
    },
    {
      name: "Vikram Singh",
      role: "CV Expert",
      company: "Tesla",
      package: "48 LPA",
      hike: "140%",
      tag: "Autopilot",
      image: "/t-david.png",
    },
    {
      name: "Ananya Das",
      role: "AI Product Lead",
      company: "Adobe",
      package: "35 LPA",
      hike: "115%",
      tag: "Product",
      image: "/t-priya.png",
    },
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [successStories.length]);

  const currentStory = successStories[currentIndex];

  return (
    <section
      id="placements"
      className="relative py-32 border-y border-border/10 bg-transparent overflow-hidden"
    >
      {/* ... (previous code for map and floating offers remains same) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-30" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
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
              className="flex flex-col gap-0.5 p-3 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.1)] text-left w-auto whitespace-nowrap overflow-hidden group/offer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-transparent opacity-0 group-hover/offer:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-1.5 text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-1 relative z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Offered
              </div>
              <div className="text-white text-sm font-black leading-tight relative z-10">
                {offer.company}
              </div>
              <div className="text-blue-100/40 text-[10px] font-bold leading-tight relative z-10">
                {offer.role}
              </div>
              <div className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-xs font-black mt-1 leading-tight relative z-10">
                {offer.ctc}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container relative mx-auto px-6 md:px-12 z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 relative space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase"
          >
            Placement Records
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Careers That Define The{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Industry
            </span>
          </h2>
          <p className="text-lg text-blue-100/40 font-medium">
            Our alumni are building the next generation of AI products at the
            world&apos;s leading technology companies.
          </p>
        </div>

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
                className="relative group h-full flex flex-col items-center justify-center"
              >
                {/* Glassmorphism Card */}
                <div className="relative w-full h-full p-8 rounded-[32px] bg-white/[0.05] md:bg-white/[0.02] backdrop-blur-xl border border-white/20 md:border-white/10 overflow-hidden transition-all duration-500 flex flex-col items-center text-center -translate-y-2 md:translate-y-0 group-hover:bg-white/[0.05] group-hover:border-white/20 group-hover:-translate-y-2 shadow-2xl md:shadow-none">
                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-24 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent blur-3xl opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                    className="relative shrink-0 mb-6 z-10"
                  >
                    {/* Neon Glow - Permanent */}
                    <div className="absolute -inset-4 bg-blue-500/40 blur-2xl rounded-full opacity-100" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 p-[1px] shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                      <div className="w-full h-full rounded-[15px] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl flex items-center justify-center overflow-hidden">
                        {/* Dynamic inner shine */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60" />
                        <Icon className="w-8 h-8 text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)] relative z-10 brightness-200 contrast-125" />
                      </div>
                    </div>
                  </motion.div>

                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-md relative z-10">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-xs font-black text-blue-100/60 uppercase tracking-widest mt-1 relative z-10 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="w-full relative bg-black/40 backdrop-blur-md py-16 border-y border-white/5 flex flex-col items-center z-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left min-h-[300px] flex flex-col justify-center">
              <p className="text-sm font-black text-cyan-400 uppercase tracking-widest mb-4 flex justify-center lg:justify-start items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" /> Global Success
                Feed
              </p>

              <div className="relative overflow-hidden">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg shadow-purple-500/20">
                      {currentStory.tag}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight tracking-tighter">
                    {currentStory.name}
                  </h3>
                  <p className="text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-black mb-4">
                    {currentStory.role} @ {currentStory.company}
                  </p>
                  <p className="text-lg text-blue-100/40 mb-8 max-w-xl font-medium">
                    Successfully transitioned into top-tier tech after our
                    intensive AI training program.
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-white">
                        {currentStory.package}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Salary Package
                      </span>
                    </div>
                    <div className="w-px h-12 bg-white/10 hidden sm:block" />
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-white">
                        {currentStory.hike}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Salary Hike
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex-1 relative w-full group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full"
                >
                  <Image
                    src="/alumni-success.png"
                    alt="Alumni Success Wall"
                    fill
                    className="object-cover opacity-60"
                  />
                  {/* Digital Grid Overlay */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="relative w-28 h-28 mx-auto mb-6">
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full blur-lg opacity-80 animate-pulse" />
                        <div className="relative w-full h-full rounded-full border-2 border-white/30 overflow-hidden shadow-2xl">
                          <Image
                            src={currentStory.image}
                            alt={currentStory.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-xl">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        <span className="text-[10px] text-white font-black uppercase tracking-widest">
                          Verified Success
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
