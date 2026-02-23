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
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
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
  const courses = [
    {
      title: "AI Foundations Bootcamp",
      description:
        "Master the basics of machine learning, neural networks, and Python. Perfect for beginners entering the AI space.",
      duration: "8 Weeks",
      level: "Beginner",
      modules: 12,
      tag: "Most Popular",
    },
    {
      title: "Machine Learning Engineering",
      description:
        "Learn to build, train, and deploy production-grade ML models. Hands-on experience with TensorFlow and PyTorch.",
      duration: "16 Weeks",
      level: "Intermediate",
      modules: 24,
    },
    {
      title: "Generative AI Mastery",
      description:
        "Dive deep into LLMs, diffusion models, and prompt engineering. Build applications powered by the latest AI tech.",
      duration: "12 Weeks",
      level: "Advanced",
      modules: 18,
      tag: "Trending",
    },
    {
      title: "Data Science AI Specialization",
      description:
        "Master statistical analysis, data wrangling, and predictive modeling using advanced AI techniques.",
      duration: "14 Weeks",
      level: "Intermediate",
      modules: 20,
    },
    {
      title: "NLP & Computer Vision",
      description:
        "Focus purely on unstructured data. Learn how machines understand human text and interpret visual images.",
      duration: "12 Weeks",
      level: "Advanced",
      modules: 16,
    },
    {
      title: "AI Product Management",
      description:
        "Learn the business side of AI. Go from initial concept to launch of scalable enterprise AI products.",
      duration: "6 Weeks",
      level: "All Levels",
      modules: 8,
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
              <TiltCard className="h-full">
                {/* Neon Glow Behind Card */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                <Card
                  className="h-full flex flex-col relative overflow-hidden bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 group-hover:border-white/20 shadow-2xl transition-colors duration-500 rounded-xl"
                  style={{ transform: "translateZ(30px)" }} // Pop card content out
                >
                  {/* Animated Gradient Accent Line Top */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] w-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-[50%] h-full bg-gradient-to-r from-transparent via-primary to-transparent absolute -left-[50%] animate-[scan_2s_ease-in-out_infinite]" />
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge
                        variant={
                          course.level === "Advanced"
                            ? "destructive"
                            : course.level === "Beginner"
                              ? "secondary"
                              : "default"
                        }
                        className="bg-white/5 hover:bg-white/10 border-white/10 shadow-sm text-white"
                      >
                        {course.level}
                      </Badge>
                      {course.tag && (
                        <Badge
                          variant="outline"
                          className="border-primary/50 text-primary shadow-[0_0_10px_rgba(59,130,246,0.3)] bg-primary/10"
                        >
                          {course.tag}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors text-white">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="pt-3 text-base leading-relaxed text-muted-foreground/80">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground/80 mt-2 p-4 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm shadow-inner group-hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-purple-400" />
                        <span className="font-medium">
                          {course.modules} Modules
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 pb-6 px-6">
                    <Button
                      variant="ghost"
                      className="w-full justify-between bg-white/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 rounded-lg h-12 text-base border border-transparent group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    >
                      <span className="font-semibold text-foreground group-hover:text-primary-foreground">
                        Explore Course
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-foreground group-hover:text-primary-foreground" />
                    </Button>
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
