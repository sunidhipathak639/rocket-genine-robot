import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const animRef = useRef(null); // ref to the current GSAP progress anim

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  const totalVideos = hightlightsSlides.length;

  // ─── Slider + scroll trigger to start first play ────────────────────────────
  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({ ...pre, startPlay: true, isPlaying: true }));
      },
    });
  }, [isEnd, videoId]);

  // ─── Kill all dot tweens and hard-reset to circles ──────────────────────────
  const resetAllDots = () => {
    hightlightsSlides.forEach((_, idx) => {
      if (videoDivRef.current[idx]) gsap.killTweensOf(videoDivRef.current[idx]);
      if (videoSpanRef.current[idx])
        gsap.killTweensOf(videoSpanRef.current[idx]);
      if (videoDivRef.current[idx])
        gsap.set(videoDivRef.current[idx], { width: "12px" });
      if (videoSpanRef.current[idx])
        gsap.set(videoSpanRef.current[idx], {
          width: "0%",
          backgroundColor: "#afafaf",
        });
    });
  };

  // ─── Progress-bar animation for the active video ────────────────────────────
  useEffect(() => {
    // Kill previous progress ticker / animation
    if (animRef.current) {
      gsap.ticker.remove(animRef.current.ticker);
      animRef.current.anim.kill();
    }

    resetAllDots(videoId);

    const span = videoSpanRef.current;
    if (!span[videoId]) return;

    const dotWidth =
      window.innerWidth < 760
        ? "10vw"
        : window.innerWidth < 1200
          ? "10vw"
          : "4vw";

    const anim = gsap.to(span[videoId], {
      onUpdate: () => {
        const progress = Math.ceil(anim.progress() * 100);
        // Use gsap.set (instant) — avoids spawning a new tween every frame
        gsap.set(videoDivRef.current[videoId], { width: dotWidth });
        gsap.set(span[videoId], {
          width: `${progress}%`,
          backgroundColor: "white",
        });
      },
      onComplete: () => {
        gsap.set(videoDivRef.current[videoId], { width: "12px" });
        gsap.set(span[videoId], { backgroundColor: "#afafaf" });
      },
    });

    anim.restart();

    const ticker = () => {
      const vid = videoRef.current[videoId];
      if (vid) {
        anim.progress(
          vid.currentTime / hightlightsSlides[videoId].videoDuration,
        );
      }
    };

    animRef.current = { anim, ticker };

    if (isPlaying) {
      gsap.ticker.add(ticker);
    } else {
      gsap.ticker.remove(ticker);
    }

    return () => {
      gsap.ticker.remove(ticker);
    };
  }, [videoId, startPlay]);

  // ─── Play / pause the actual video element ──────────────────────────────────
  useEffect(() => {
    const vid = videoRef.current[videoId];
    if (!vid) return;

    if (isPlaying) {
      vid.play().catch(() => {});
      if (animRef.current) gsap.ticker.add(animRef.current.ticker);
    } else {
      vid.pause();
      if (animRef.current) gsap.ticker.remove(animRef.current.ticker);
    }
  }, [isPlaying, videoId, startPlay, loadedData]);

  // ─── Action dispatcher ──────────────────────────────────────────────────────
  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case "video-last":
        // Auto-loop: reset back to the first video
        if (videoRef.current[videoId]) videoRef.current[videoId].pause();
        if (videoRef.current[0]) videoRef.current[0].currentTime = 0;
        setVideo({
          isEnd: false,
          startPlay: true,
          videoId: 0,
          isLastVideo: false,
          isPlaying: true,
        });
        break;

      case "video-reset":
        setVideo({
          isEnd: false,
          startPlay: true,
          videoId: 0,
          isLastVideo: false,
          isPlaying: true,
        });
        break;

      case "next":
        if (videoId < totalVideos - 1) {
          setVideo((pre) => ({
            ...pre,
            videoId: pre.videoId + 1,
            isEnd: false,
            isLastVideo: false,
            isPlaying: true,
            startPlay: true,
          }));
        } else {
          setVideo((pre) => ({ ...pre, isLastVideo: true }));
        }
        break;

      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: false }));
        break;

      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: true }));
        break;

      case "video-jump":
        // pause current video
        if (videoRef.current[videoId]) videoRef.current[videoId].pause();
        // seek target video to beginning
        if (videoRef.current[i]) videoRef.current[i].currentTime = 0;
        setVideo((pre) => ({
          ...pre,
          videoId: i,
          isEnd: false,
          isLastVideo: false,
          isPlaying: true,
          startPlay: true,
        }));
        break;

      default:
        break;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e]);

  return (
    <>
      {/* ── Video slider ──────────────────────────────────────── */}
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline
                  className={`w-full h-full object-cover pointer-events-none ${
                    list.id === 2 && "translate-x-44"
                  }`}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== totalVideos - 1
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideo((pre) => ({ ...pre, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, j) => (
                  <p key={j} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Controls ──────────────────────────────────────────── */}
      <div className="relative flex-center mt-10 gap-4">
        {/* Dot indicators — always rendered from hightlightsSlides */}
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {hightlightsSlides.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer transition-transform hover:scale-125"
              ref={(el) => (videoDivRef.current[i] = el)}
              onClick={() => handleProcess("video-jump", i)}
              title={`Go to slide ${i + 1}`}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
