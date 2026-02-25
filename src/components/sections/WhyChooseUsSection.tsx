"use client";

import { motion } from "framer-motion";
import {
  IdeaMotion,
  LayersMotion,
  ChatMotion,
  GlobeMotion,
} from "@carbon/icons-motion";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: IdeaMotion,
      title: "Industry-Vetted Curriculum",
      description:
        "Syllabus designed by AI researchers from top tech companies to guarantee relevance.",
    },
    {
      icon: LayersMotion,
      title: "Project-Based Learning",
      description:
        "Build a portfolio of real-world AI applications, from LLMs to computer vision.",
    },
    {
      icon: ChatMotion,
      title: "1-on-1 Mentorship",
      description:
        "Get personalized guidance from senior AI engineers to accelerate your learning.",
    },
    {
      icon: GlobeMotion,
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
    <section
      id="why-choose-us"
      className="py-24 relative overflow-hidden bg-[#030712]"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCBMIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase"
          >
            Capabilities
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Robot Genie?
            </span>
          </h2>
          <p className="text-lg text-blue-100/40 font-medium">
            We don&apos;t just teach theory. We build practitioners ready to
            tackle enterprise-scale AI challenges from day one.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                className="relative group h-full"
              >
                {/* Glassmorphism Card */}
                <div className="h-full p-8 rounded-[32px] bg-white/[0.05] md:bg-white/[0.02] backdrop-blur-xl border border-white/20 md:border-white/10 overflow-hidden transition-all duration-500 flex flex-col items-center text-center -translate-y-2 md:translate-y-0 group-hover:bg-white/[0.05] group-hover:border-white/20 group-hover:-translate-y-2 shadow-2xl md:shadow-none">
                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-24 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent blur-3xl opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="relative shrink-0 mb-8 z-10"
                  >
                    {/* Neon Glow - Permanent */}
                    <div className="absolute -inset-4 bg-blue-500/40 blur-2xl rounded-full opacity-100" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 p-[1px] shadow-[0_0_30px_rgba(59,130,246,0.6)] md:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                      <div className="w-full h-full rounded-[15px] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl flex items-center justify-center overflow-hidden">
                        {/* Dynamic inner shine */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60" />
                        <Icon
                          size={40}
                          isAnimating={true}
                          className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)] relative z-10 brightness-200 contrast-125"
                        />
                      </div>
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-black mb-4 text-white tracking-tight relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100/40 leading-relaxed font-medium relative z-10 text-sm">
                    {feature.description}
                  </p>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
