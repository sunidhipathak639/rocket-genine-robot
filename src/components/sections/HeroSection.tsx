"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  PlayCircle,
  Star,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useSound } from "@/hooks/useSound";
import { useHeroCache } from "@/hooks/useHeroCache";
import { HeroSkeletonMobile, HeroSkeletonDesktop } from "@/components/sections/HeroSkeleton";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

// Dynamically import Spline with no SSR to reduce initial bundle size
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <RobotLoading />,
});

function RobotLoading() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <div className="relative">
        <div className="w-32 h-32 rounded-full border-t-2 border-blue-500 animate-spin" />
        <Loader2 className="w-12 h-12 text-blue-500 absolute inset-0 m-auto animate-pulse" />
      </div>
    </div>
  );
}

interface HeroSectionProps {
  onHeroReady?: () => void;
}

export function HeroSection({ onHeroReady }: HeroSectionProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { playSound } = useSound();
  const { isReturnVisit, markHeroLoaded } = useHeroCache();
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [mobileReadyForSpline, setMobileReadyForSpline] = useState(false);
  const [preloadImageLoaded, setPreloadImageLoaded] = useState(false);
  const [returnVisitSkeletonDismissed, setReturnVisitSkeletonDismissed] = useState(false);
  const showHeroSkeleton = !(isSplineLoaded || preloadImageLoaded || returnVisitSkeletonDismissed);

  // Use MotionValues for smooth mouse tracking without re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsMounted(true);
      setIsMobile(window.innerWidth < 768);
    });
    // Fallback: ensure hero mounts even if RAF is delayed (e.g. slow phones, background tab)
    const fallback = setTimeout(() => setIsMounted(true), 300);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", checkMobile);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(fallback);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // On mobile: show preload first, then load Spline. Return visit = load Spline immediately (cached).
  useEffect(() => {
    if (!isMobile || !isMounted) return;
    const delay = isReturnVisit ? 0 : 150;
    const id = setTimeout(() => setMobileReadyForSpline(true), delay);
    return () => clearTimeout(id);
  }, [isMobile, isMounted, isReturnVisit]);

  // On return visit, dismiss skeleton after brief moment so cached content can show
  useEffect(() => {
    if (!isReturnVisit) return;
    const id = setTimeout(() => {
      setReturnVisitSkeletonDismissed(true);
      onHeroReady?.();
    }, 80);
    return () => clearTimeout(id);
  }, [isReturnVisit, onHeroReady]);

  // When preload image shows (mobile), allow sections to start fading in after a short delay
  useEffect(() => {
    if (!preloadImageLoaded || isSplineLoaded) return;
    const id = setTimeout(() => onHeroReady?.(), 400);
    return () => clearTimeout(id);
  }, [preloadImageLoaded, isSplineLoaded, onHeroReady]);

  useGSAP(
    () => {
      if (isMounted) {
        gsap.to("#hero-title", { opacity: 1, y: 0, delay: 0.5, duration: 1 });
        gsap.to("#hero-sub", { opacity: 1, y: 0, delay: 0.8, duration: 1 });
        gsap.to("#hero-btn", { opacity: 1, y: 0, delay: 1.1, duration: 1 });
      }
    },
    { dependencies: [isMounted], scope: containerRef },
  );

  useEffect(() => {
    if (isMobile) return; // Disable complex tracking on mobile to save CPU

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  // Placeholder must reserve full viewport height so hero doesn't collapse; fallbacks for older mobile browsers
  if (!isMounted)
    return (
      <div
        className="min-h-[100dvh] min-h-[100svh] min-h-screen w-full flex-shrink-0 bg-black"
        style={{ minHeight: "100vh" }}
        aria-hidden
      />
    );

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
    markHeroLoaded();
    onHeroReady?.();
  };

  // Desktop: single Spline scene (only rendered when !isMobile)
  const DesktopSplineScene = (
    <Spline
      scene="https://prod.spline.design/9aPp2nOUkM3wqAUO/scene.splinecode"
      onLoad={handleSplineLoad}
    />
  );

  if (isMobile) {
    return (
      <section
        ref={containerRef}
        className="sticky top-0 left-0 right-0 w-full h-[100dvh] h-[100svh] min-h-[100vh] bg-black z-20 overflow-hidden"
        style={{ touchAction: "pan-y", height: "100dvh", minHeight: "100vh" }}
      >
        {/* Skeleton: first load and return visit (fades out when content ready) */}
        <HeroSkeletonMobile
          className={
            showHeroSkeleton
              ? "opacity-100 pointer-events-none"
              : "opacity-0 pointer-events-none"
          }
        />
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-end px-6 pb-[25svh] text-center">
          <h1
            id="hero-title"
            className="text-white font-body text-4xl opacity-0 translate-y-8 max-w-3xl leading-tight font-bold tracking-tight"
          >
            Welcome to the Future of Intelligent Automation
          </h1>

          <p
            id="hero-sub"
            className="text-gray-400 text-sm mt-4 opacity-0 translate-y-8 font-light"
          >
            Digital Marketing &nbsp;|&nbsp; Data Science &nbsp;|&nbsp; Finance
            &nbsp;|&nbsp; HR &nbsp;|&nbsp; AI
          </p>

          <a
            id="hero-btn"
            href="#highlights"
            className="mt-8 opacity-0 translate-y-8 pointer-events-auto h-14 px-8 inline-flex items-center justify-center rounded-full bg-white text-black text-lg font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 transition-transform"
          >
            Book Free Counselling
          </a>
        </div>

        {/* Mobile: preload image first, then smooth crossfade to Spline (desktop part not rendered here = faster) */}
        <div className="absolute inset-0 z-0 pointer-events-none sm:pointer-events-auto">
          {/* Preload image — shows immediately, fades out when Spline is ready */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              isSplineLoaded ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden={isSplineLoaded}
          >
            <Image
              src="/preload.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
              onLoad={() => setPreloadImageLoaded(true)}
            />
          </div>
          {/* Spline — only mounts after first paint so preload image shows first */}
          {mobileReadyForSpline && (
            <div
              className={`absolute inset-0 h-full w-full transition-opacity duration-700 ease-out ${
                isSplineLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <Spline
                scene="https://prod.spline.design/9aPp2nOUkM3wqAUO/scene.splinecode"
                onLoad={handleSplineLoad}
              />
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="sticky top-0 min-h-[100vh] flex flex-col items-center overflow-x-hidden border-b border-border/10 bg-transparent pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 z-0"
    >
      <HeroSkeletonDesktop
        className={
          showHeroSkeleton
            ? "opacity-100 pointer-events-none"
            : "opacity-0 pointer-events-none"
        }
      />
      <div className="container relative mx-auto px-4 sm:px-6 md:px-12 z-10 w-full flex flex-col justify-center pt-8 mt-8 lg:pt-0 lg:mt-0 pb-8 sm:pb-16 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-full md:max-w-2xl mx-auto lg:mx-0 px-4 relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-secondary/50 backdrop-blur-md text-sm font-medium mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-foreground/90 glow-text">
                Accepting Applications: Winter Cohort
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.1] mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-block">
                Master AI.
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_30px_rgba(99,102,241,0.4)] animate-pulse-slow inline-block whitespace-normal break-words">
                Shape the Future.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl font-light">
              Join the world&apos;s most elite AI engineering program. Built by
              industry leaders. Designed for ambitious professionals ready to
              build real-world products.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full mt-6">
              <Button
                size="lg"
                onMouseEnter={() => playSound("hover")}
                onClick={() => playSound("click")}
                className="w-full sm:w-auto rounded-full h-14 px-8 text-lg font-semibold bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Book Free Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onMouseEnter={() => playSound("hover")}
                onClick={() => playSound("click")}
                className="w-full sm:w-auto rounded-full h-14 px-8 text-lg font-semibold bg-secondary/20 border-border/50 backdrop-blur-md hover:bg-secondary/40 transition-all text-white"
              >
                <PlayCircle className="mr-2 w-5 h-5" /> Watch Intro
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10 pt-8 border-t border-border/20 w-full">
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="text-2xl md:text-3xl font-black text-white">
                  84 LPA
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-green-400" /> Highest
                  Salary
                </div>
              </div>
              <div className="w-px h-12 bg-border/20 hidden md:block" />
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="text-2xl md:text-3xl font-black text-white">
                  5000+
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" /> Students Trained
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-auto w-full aspect-square xl:h-[650px] xl:w-[650px] flex items-center justify-center z-10 mt-8">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow" />

            <motion.div
              style={{ x: springX, y: springY }}
              className="relative w-full h-full pointer-events-auto"
            >
              {!isSplineLoaded && <RobotLoading />}
              <div
                className={
                  isSplineLoaded
                    ? "opacity-100 transition-opacity duration-1000 h-full w-full"
                    : "opacity-0 h-full w-full"
                }
              >
                {DesktopSplineScene}
              </div>

              <motion.div
                className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[1px] z-50 pointer-events-none"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 bg-black/60 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl flex items-center gap-4 cursor-pointer z-50 w-64 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/20">
                <Image
                  src="/testimonial-1.png"
                  alt="Student"
                  fill
                  sizes="48px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <PlayCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-green-400 font-semibold mb-0.5">
                  Placed at Google
                </span>
                <span className="text-sm text-white font-medium line-clamp-2 leading-tight">
                  &quot;Robot Genie transformed my career path.&quot;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
