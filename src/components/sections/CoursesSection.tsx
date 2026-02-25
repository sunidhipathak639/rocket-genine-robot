"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  IdeaMotion,
  SettingsMotion,
  MagicWandMotion,
  DashboardMotion,
  ImageSearchMotion,
  LaunchMotion,
  ArrowRightMotion,
} from "@carbon/icons-motion";
import { Clock, BookOpen } from "lucide-react";
import React, { useRef, useState } from "react";
import { useSound } from "@/hooks/useSound";

function TiltCard({
  children,
  className = "",
  onMouseEnter,
}: {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Max rotation = 15 degrees
    const rY = (mouseX / width - 0.5) * 30;
    const rX = (mouseY / height - 0.5) * -30;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div style={{ perspective: 1000 }} className={`h-full w-full ${className}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={onMouseEnter}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.5 }}
        className="h-full w-full relative group transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function CoursesSection() {
  const { playSound } = useSound();

  const courses = [
    {
      title: "AI Foundations Bootcamp",
      description:
        "Master the basics of machine learning, neural networks, and Python. Perfect for beginners entering the AI space.",
      duration: "8 Weeks",
      level: "Beginner",
      modules: 12,
      tag: "Most Popular",
      icon: IdeaMotion,
    },
    {
      title: "Machine Learning Engineering",
      description:
        "Learn to build, train, and deploy production-grade ML models. Hands-on experience with TensorFlow and PyTorch.",
      duration: "16 Weeks",
      level: "Intermediate",
      modules: 24,
      icon: SettingsMotion,
    },
    {
      title: "Generative AI Mastery",
      description:
        "Dive deep into LLMs, diffusion models, and prompt engineering. Build applications powered by the latest AI tech.",
      duration: "12 Weeks",
      level: "Advanced",
      modules: 18,
      tag: "Trending",
      icon: MagicWandMotion,
    },
    {
      title: "Data Science AI Specialization",
      description:
        "Master statistical analysis, data wrangling, and predictive modeling using advanced AI techniques.",
      duration: "14 Weeks",
      level: "Intermediate",
      modules: 20,
      icon: DashboardMotion,
    },
    {
      title: "NLP & Computer Vision",
      description:
        "Focus purely on unstructured data. Learn how machines understand human text and interpret visual images.",
      duration: "12 Weeks",
      level: "Advanced",
      modules: 16,
      icon: ImageSearchMotion,
    },
    {
      title: "AI Product Management",
      description:
        "Learn the business side of AI. Go from initial concept to launch of scalable enterprise AI products.",
      duration: "6 Weeks",
      level: "All Levels",
      modules: 8,
      icon: LaunchMotion,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="courses" className="py-24 bg-transparent relative z-10 pt-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white drop-shadow-md">
            Master the Curriculum of Tomorrow
          </h2>
          <p className="text-lg text-muted-foreground/80 font-light">
            Our intensive courses are designed with leading AI researchers and
            hiring managers to make you enterprise-ready.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 perspective-[2000px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <TiltCard
                className="h-full"
                onMouseEnter={() => playSound("hover")}
              >
                {/* Glow effect that follows mouse/tilt could be added, but for now a static/hover glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-sm opacity-100 transition-opacity duration-500" />

                <Card
                  className="h-full flex flex-col relative overflow-hidden bg-[#0a0a0b]/90 backdrop-blur-2xl border border-white/10 group-hover:border-white/20 shadow-2xl transition-all duration-500 rounded-2xl"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {/* Subtle top light effect */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center mb-6">
                      <Badge
                        variant="outline"
                        className="bg-white/5 border-white/10 text-white/70 font-medium px-4 py-1 rounded-full text-xs"
                      >
                        {course.level}
                      </Badge>
                      {course.tag && (
                        <div className="relative group/tag">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-[4px] opacity-70 group-hover/tag:opacity-100 transition duration-300" />
                          <Badge className="relative bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white border-none px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                            {course.tag}
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="flex items-start gap-5 mb-4">
                      <div className="relative shrink-0">
                        {/* Icon Background Glow */}
                        <div className="absolute -inset-2 bg-blue-500/30 blur-xl rounded-full" />
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-600 p-[1px] shadow-lg shadow-blue-500/20">
                          <div className="w-full h-full rounded-[15px] bg-gradient-to-br from-blue-100/10 to-purple-100/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
                            {/* Inner brightness overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50" />
                            <course.icon
                              size={32}
                              isAnimating={true}
                              className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10"
                            />
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold text-white leading-tight pt-1">
                        {course.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed text-white/50 font-light">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto pb-4">
                    <div className="flex items-center gap-6 text-sm text-white/60 p-4 bg-white/[0.03] rounded-2xl border border-white/5 backdrop-blur-md">
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="h-4 w-px bg-white/10" />
                      <div className="flex items-center gap-2.5">
                        <BookOpen className="w-4 h-4 text-purple-400" />
                        <span className="font-medium">
                          {course.modules} Modules
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-2 pb-8 px-6">
                    <div className="relative w-full group/btn">
                      {/* Button Glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-60 group-hover/btn:opacity-100 transition duration-300" />
                      <Button
                        onClick={() => playSound("pop")}
                        className="relative w-full h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none rounded-xl text-lg font-bold shadow-xl flex justify-between px-6 transition-all duration-300"
                      >
                        <span>Explore Course</span>
                        <ArrowRightMotion
                          size={24}
                          isAnimating={true}
                          className="transition-transform group-hover/btn:translate-x-1"
                        />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
