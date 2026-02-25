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
      <div className="relative group/card h-full">
        {/* Card Glow Wrap */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-[2.1rem] blur opacity-0 group-hover/card:opacity-30 transition duration-500" />

        <Card
          className="relative rounded-[2rem] border-white/10 overflow-hidden bg-white/[0.02] backdrop-blur-xl transition-all duration-500 shadow-2xl -translate-y-1 md:translate-y-0 md:shadow-none md:group-hover/card:bg-white/5 md:group-hover/card:border-white/20 md:group-hover/card:-translate-y-2 h-full flex flex-col"
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
                      <div className="absolute inset-0 bg-[#030712]/40 group-hover:bg-transparent transition-all duration-500" />
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
                        className="absolute -inset-[10%] w-[120%] h-[120%] pointer-events-none z-10 opacity-80"
                        allow="autoplay"
                      />
                    ) : (
                      <>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover opacity-60 contrast-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="bg-red-600 px-3 py-1 rounded text-[10px] font-black tracking-widest text-white italic shadow-lg">
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
                      scale: isHovering || isMobile ? 1.2 : 1,
                      opacity: isHovering || isMobile ? 0 : 1,
                    }}
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl text-white flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    <Play className="w-6 h-6 ml-1 fill-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                  </motion.div>
                </div>

                <div className="absolute top-4 left-4 z-30">
                  <div className="bg-white/5 backdrop-blur-2xl px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2 shadow-lg">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <span className="text-[9px] text-white font-black uppercase tracking-[0.2em] drop-shadow-md">
                      Alumni Story
                    </span>
                  </div>
                </div>
              </div>
            </DialogTrigger>

            <div className="p-8 flex flex-col flex-1 relative bg-gradient-to-b from-transparent to-white/[0.02]">
              <div className="absolute top-6 right-8 text-6xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 bg-clip-text text-transparent font-serif pointer-events-none select-none">
                &quot;
              </div>
              <p className="text-blue-100/60 text-base font-medium leading-relaxed mb-10 italic relative z-10 line-clamp-3 group-hover/card:text-white transition-colors duration-300">
                {item.quote}
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-white/10 ring-2 ring-white/5 p-0.5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-[14px]"
                  />
                </div>
                <div>
                  <p className="text-sm font-black text-white tracking-wide">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-cyan-400 font-black uppercase tracking-[0.2em] mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <DialogContent className="max-w-[95vw] lg:max-w-5xl p-0 overflow-hidden bg-[#030712] border-white/10 aspect-video rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)]">
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
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden bg-[#030712]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCBMIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black tracking-widest uppercase"
            >
              Success Stories
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              The Path to{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent italic">
                Success
              </span>
            </h2>
            <p className="text-lg text-blue-100/40 font-medium max-w-xl">
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

            <div className="flex justify-center md:justify-end gap-4 mt-16 relative z-20">
              <CarouselPrevious className="static translate-y-0 translate-x-0 h-14 w-14 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-[20px] transition-all shadow-xl backdrop-blur-xl group/prev" />
              <CarouselNext className="static translate-y-0 translate-x-0 h-14 w-14 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-[20px] transition-all shadow-xl backdrop-blur-xl group/next" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
