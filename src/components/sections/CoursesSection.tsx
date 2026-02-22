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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="courses" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Master the Curriculum of Tomorrow
          </h2>
          <p className="text-lg text-muted-foreground">
            Our intensive courses are designed with leading AI researchers and
            hiring managers to make you enterprise-ready.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300 relative overflow-hidden bg-background/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant={
                        course.level === "Advanced"
                          ? "destructive"
                          : course.level === "Beginner"
                            ? "secondary"
                            : "default"
                      }
                    >
                      {course.level}
                    </Badge>
                    {course.tag && (
                      <Badge
                        variant="outline"
                        className="border-primary text-primary bg-primary/10"
                      >
                        {course.tag}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="pt-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" />
                      {course.modules} Modules
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-4 border-t border-border/50">
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    Explore Course{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
