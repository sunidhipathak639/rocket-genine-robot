"use client";

import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import Image from "next/image";

export function AwardsGallery() {
  // Placeholder images. Using diverse aspect ratios to simulate masonry.
  const records = [
    {
      title: "Best AI EdTech Startup 2025",
      bg: "bg-secondary",
      image: "/award-1.png",
    },
    {
      title: "ISO 9001:2015 Certified",
      bg: "bg-primary/5",
      image: "/award-2.png",
    },
    {
      title: "Top 10 Data Science Bootcamps",
      bg: "bg-primary/10",
      image: "/award-3.png",
    },
    {
      title: "Excellence in E-Learning",
      bg: "bg-secondary",
      image: "/award-4.png",
    },
    {
      title: "Featured on TechCrunch",
      bg: "bg-primary/5",
      image: "/award-5.png",
    },
    {
      title: "Global Innovator Award",
      bg: "bg-secondary/50",
      image: "/award-6.png",
    },
  ];

  return (
    <section
      id="awards"
      className="py-24 relative overflow-hidden bg-[#030712]"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCBMIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black tracking-widest uppercase"
          >
            Accreditations
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Recognized for{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-blue-100/40 font-medium font-medium">
            Our curriculum and training methodologies are certified by global
            standards and recognized by leading tech institutions.
          </p>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {records.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative group">
                  {/* Floating Glow behind card */}
                  <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative h-full aspect-[4/3] rounded-[32px] bg-white/[0.02] backdrop-blur-xl border border-white/20 md:border-white/10 overflow-hidden cursor-pointer flex flex-col items-center justify-center p-6 text-center shadow-2xl md:shadow-none transition-all duration-500 -translate-y-2 md:translate-y-0 group-hover:bg-white/[0.05] group-hover:border-white/20 group-hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[4px] z-20">
                      <div className="bg-white/10 text-white p-4 rounded-full translate-y-4 group-hover:translate-y-0 transition-all shadow-2xl border border-white/20 backdrop-blur-2xl">
                        <ZoomIn className="w-8 h-8" />
                      </div>
                    </div>

                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-3/4 h-3/4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain z-0 transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        />
                      </div>
                    </div>

                    {/* Text Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent z-10 flex flex-col justify-end h-1/2">
                      <h3 className="text-xl font-black text-white drop-shadow-md text-left tracking-tight">
                        {item.title}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mt-4 rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
                    </div>
                  </motion.div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl border-white/10 bg-[#030712]/95 backdrop-blur-2xl shadow-2xl rounded-3xl overflow-hidden p-0">
                <DialogTitle className="sr-only">{item.title}</DialogTitle>
                <div className="relative w-full h-[60vh] flex flex-col items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCBMIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/10 blur-[100px] rounded-full" />
                  <div className="relative w-[90%] h-[90%]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                    />
                  </div>
                </div>
                <div className="p-8 bg-white/5 border-t border-white/10">
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-blue-100/40 font-medium mt-2">
                    Certified Excellence in AI & Data Science Education
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
