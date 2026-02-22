"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Trophy, Target, Globe } from "lucide-react";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: BrainCircuit,
      title: "Industry-Vetted Curriculum",
      description:
        "Syllabus designed by AI researchers from top tech companies to guarantee relevance.",
    },
    {
      icon: Trophy,
      title: "Project-Based Learning",
      description:
        "Build a portfolio of real-world AI applications, from LLMs to computer vision.",
    },
    {
      icon: Target,
      title: "1-on-1 Mentorship",
      description:
        "Get personalized guidance from senior AI engineers to accelerate your learning.",
    },
    {
      icon: Globe,
      title: "Global Hiring Network",
      description:
        "Exclusive access to hiring partners actively seeking specialized AI talent.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Why Choose Robot Genie?
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just teach theory. We build practitioners ready to tackle
            enterprise-scale AI challenges from day one.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                  <Icon className="w-8 h-8 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
