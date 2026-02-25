"use client";

import { motion, AnimatePresence } from "framer-motion";
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
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "AI Engineer @ TechCorp",
    quote:
      "The practical projects at Robot Genie completely transformed my approach to building NLP models.",
    videoUrl: "/video/highlight-first.mp4",
    image: "/t-sarah.png",
    isYoutube: false,
  },
  {
    name: "David Chen",
    role: "Data Scientist @ FinTech Innovate",
    quote:
      "I bridged the gap between academic theory and production-ready deployments within 12 weeks.",
    videoUrl: "/video/hightlight-sec.mp4",
    image: "/t-david.png",
    isYoutube: false,
  },
  {
    name: "Priya Sharma",
    role: "Head of AI @ HealthStart",
    quote:
      "The 1-on-1 mentorship was invaluable. I landed my dream role thanks to my mentor's guidance.",
    videoUrl: "/video/hightlight-sec.mp4",
    image: "/t-priya.png",
    isYoutube: false,
  },
  {
    name: "James Wilson",
    role: "Machine Learning Lead",
    quote:
      "Robot Genie's curriculum is the only one I trust to train my engineering team on Generative AI.",
    videoUrl: "/video/hightlight-third.mp4",
    image: "/t-james.png",
    isYoutube: false,
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager (AI)",
    quote:
      "Understanding the technical constraints of AI has made me a much stronger product leader.",
    videoUrl: "https://www.youtube.com/embed/vT1JzLTH4G4",
    image: "/t-elena.png",
    isYoutube: true,
  },
  {
    name: "Marcus Thorne",
    role: "Full Stack AI Developer",
    quote:
      "Building full-stack AI apps used to be a challenge. Now it's my superpower.",
    videoUrl: "/video/hightlight-fourth.mp4",
    image: "/t-sarah.png",
    isYoutube: false,
  },
];

function VideoCard({ item }: { item: (typeof testimonials)[0] }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const youtubeId = item.isYoutube
    ? item.videoUrl.split("/").pop()?.split("?")[0]
    : null;

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovering || isMobile) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovering, isMobile]);

  return (
    <Dialog>
      <Card
        className="group relative rounded-[2rem] border-white/5 overflow-hidden bg-[#050505] transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] h-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <CardContent className="p-0 h-full flex flex-col">
          <DialogTrigger asChild>
            <div className="relative aspect-video bg-black flex items-center justify-center cursor-pointer overflow-hidden">
              <AnimatePresence mode="wait">
                {!isHovering && !isMobile && (
                  <motion.div
                    key="thumb"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 z-20"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                  </motion.div>
                )}
              </AnimatePresence>

              {!item.isYoutube ? (
                <video
                  ref={videoRef}
                  src={item.videoUrl}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
              ) : (
                <div className="absolute inset-0 z-10 overflow-hidden">
                  {isHovering || isMobile ? (
                    <iframe
                      src={`${item.videoUrl}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&playsinline=1&rel=0`}
                      className="absolute -inset-[10%] w-[120%] h-[120%] pointer-events-none z-10 opacity-60"
                      allow="autoplay"
                    />
                  ) : (
                    <>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover opacity-50 contrast-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-red-600 px-3 py-1 rounded text-[10px] font-black tracking-widest text-white italic">
                          YOUTUBE PREVIEW
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <motion.div
                  animate={{
                    scale: isHovering ? 1.2 : 1,
                    opacity: isHovering || isMobile ? 0 : 1,
                  }}
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl text-white flex items-center justify-center border border-white/20 shadow-2xl"
                >
                  <Play className="w-6 h-6 ml-1 fill-white" />
                </motion.div>
              </div>

              <div className="absolute top-4 left-4 z-30">
                <div className="bg-black/60 backdrop-blur-xl px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <span className="text-[9px] text-white/90 font-black uppercase tracking-[0.2em]">
                    Alumni Story
                  </span>
                </div>
              </div>
            </div>
          </DialogTrigger>

          <div className="p-8 pb-10 flex flex-col flex-1 relative bg-gradient-to-b from-transparent to-white/[0.02]">
            <div className="absolute top-4 right-8 text-6xl text-white/5 font-serif pointer-events-none">
              &quot;
            </div>
            <p className="text-white/60 text-base leading-relaxed mb-10 italic relative z-10 line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
              {item.quote}
            </p>
            <div className="mt-auto flex items-center gap-4">
              <div className="relative w-11 h-11 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-wide">
                  {item.name}
                </p>
                <p className="text-[11px] text-primary/80 font-black uppercase tracking-widest">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <DialogContent className="max-w-[95vw] lg:max-w-5xl p-0 overflow-hidden bg-black border-white/10 aspect-video rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)]">
        <DialogTitle className="sr-only">
          Alumni Success Story: {item.name}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Video testimonial from {item.name}, {item.role}
        </DialogDescription>
        {item.isYoutube ? (
          <iframe
            src={`${item.videoUrl}?autoplay=1&mute=0&rel=0&modestbranding=1&showinfo=0`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={item.videoUrl}
            autoPlay
            controls
            className="w-full h-full object-contain"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

export function TestimonialsCarousel() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section className="py-32 bg-transparent relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white drop-shadow-md">
              The Path to <span className="text-primary italic">Success</span>
            </h2>
            <p className="text-lg text-muted-foreground/80 font-light max-w-xl">
              Real world results from our graduates who are now leading AI
              initiatives at the world&apos;s most innovative tech companies.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <VideoCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center md:justify-end gap-4 mt-12 relative z-20">
              <CarouselPrevious className="static translate-y-0 translate-x-0 h-14 w-14 bg-white/5 hover:bg-primary/20 hover:text-white border border-white/10 rounded-2xl transition-all" />
              <CarouselNext className="static translate-y-0 translate-x-0 h-14 w-14 bg-white/5 hover:bg-primary/20 hover:text-white border border-white/10 rounded-2xl transition-all" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
