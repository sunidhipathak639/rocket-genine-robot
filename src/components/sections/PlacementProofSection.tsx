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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
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
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border-primary/50 shadow-[0_20px_40px_rgba(59,130,246,0.2)] md:bg-[#0a0a0a]/80 md:border-white/5 md:shadow-[0_4px_30px_rgba(0,0,0,0.5)] md:hover:border-primary/50 md:hover:bg-white/5 transition-all duration-500 group relative overflow-hidden transform-gpu -translate-y-2 md:translate-y-0 md:hover:-translate-y-2 md:hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out z-0" />
                <div className="w-14 h-14 rounded-2xl bg-primary/20 md:bg-white/5 flex items-center justify-center mb-6 inner-shadow scale-110 md:scale-100 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 relative z-10 border border-primary/30 md:border-white/5 group-hover:border-primary/30">
                  <Icon className="w-7 h-7 text-white md:text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 text-primary md:text-white drop-shadow-md relative z-10 group-hover:text-primary transition-colors duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-sm font-semibold text-foreground md:text-muted-foreground uppercase tracking-widest mt-1 relative z-10 group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </p>
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
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex justify-center lg:justify-start items-center gap-2">
                <MapPin className="w-4 h-4" /> Global Success Feed
              </p>

              <div className="relative overflow-hidden">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="mb-2">
                    <span className="bg-primary/20 text-primary text-[10px] font-bold uppercase px-2 py-1 rounded">
                      {currentStory.tag}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                    {currentStory.name}
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-4">
                    {currentStory.role} @ {currentStory.company}
                  </p>
                  <p className="text-lg text-muted-foreground/80 mb-8 max-w-xl">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
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
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-60 animate-pulse" />
                        <div className="relative w-full h-full rounded-full border-2 border-white/30 overflow-hidden shadow-2xl">
                          <Image
                            src={currentStory.image}
                            alt={currentStory.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md px-4 py-2 rounded-full border border-primary/20">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-primary font-bold uppercase tracking-wider">
                          Verified Success
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
