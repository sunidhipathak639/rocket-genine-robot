import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo,
  );
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);
  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      delay: 2,
      duration: 1,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      duration: 1,
      y: -50,
    });
  }, []);
  return (
    <section className="w-full nav-height relative bg-black">
      <div className="w-full flex-center flex-col h-5/6 relative">
        <p id="hero-title" className="hero-title relative z-10">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12 relative z-10">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/9aPp2nOUkM3wqAUO/scene.splinecode" />
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 relative z-10"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
