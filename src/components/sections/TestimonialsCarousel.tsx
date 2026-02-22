"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";

export function TestimonialsCarousel() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "AI Engineer @ TechCorp",
      quote:
        "The practical projects at Robot Genie completely transformed my approach to building NLP models.",
      videoUrl: "#", // Placeholder
      image: "/t-sarah.png",
    },
    {
      name: "David Chen",
      role: "Data Scientist @ FinTech Innovate",
      quote:
        "I bridged the gap between academic theory and production-ready deployments within 12 weeks.",
      videoUrl: "#",
      image: "/t-david.png",
    },
    {
      name: "Priya Sharma",
      role: "Head of AI @ HealthStart",
      quote:
        "The 1-on-1 mentorship was invaluable. I landed my dream role thanks to my mentor's guidance.",
      videoUrl: "#",
      image: "/t-priya.png",
    },
    {
      name: "James Wilson",
      role: "Machine Learning Lead",
      quote:
        "Robot Genie's curriculum is the only one I trust to train my engineering team on Generative AI.",
      videoUrl: "#",
      image: "/t-james.png",
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager (AI)",
      quote:
        "Understanding the technical constraints of AI has made me a much stronger product leader.",
      videoUrl: "#",
      image: "/t-elena.png",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Don't Just Take Our Word For It
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear directly from the alumni who transformed their careers and
              are now shaping the future of AI at top tech companies.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="rounded-3xl border-border/50 overflow-hidden bg-secondary/20 shadow-none hover:shadow-lg transition-all">
                      <CardContent className="p-0">
                        {/* Video Thumbnail Placeholder */}
                        <div className="relative aspect-video bg-secondary flex items-center justify-center group cursor-pointer overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10" />
                          <div className="w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center z-20 group-hover:scale-110 transition-transform shadow-lg">
                            <Play className="w-5 h-5 ml-1" />
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-muted-foreground italic mb-6">
                            "{item.quote}"
                          </p>
                          <div>
                            <p className="font-semibold text-foreground text-sm">
                              {item.name}
                            </p>
                            <p className="text-muted-foreground text-xs">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center md:justify-end gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0 translate-x-0 bg-secondary hover:bg-primary hover:text-primary-foreground border-none" />
              <CarouselNext className="static translate-y-0 translate-x-0 bg-secondary hover:bg-primary hover:text-primary-foreground border-none" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
