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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Recognized for Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Our curriculum and training methodologies are certified by global
            standards and recognized by leading tech institutions.
          </p>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {records.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4 }}
                  className={`relative w-full rounded-2xl overflow-hidden cursor-pointer group border border-border/50 ${item.bg} aspect-[4/3] flex flex-col items-center justify-center p-6 text-center shadow-sm`}
                >
                  <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] z-20">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-all shadow-xl">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover z-0 transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Text Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10 flex flex-col justify-end h-1/2">
                    <h3 className="font-semibold text-white drop-shadow-md text-left">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl border-none bg-transparent shadow-none">
                <DialogTitle className="sr-only">{item.title}</DialogTitle>
                {/* High-res Lightbox View */}
                <div className="relative w-full aspect-square md:aspect-video rounded-xl overflow-hidden border border-border/50 flex flex-col items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
