import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, y: 0, delay: 0.5, duration: 1 });
    gsap.to("#hero-sub", { opacity: 1, y: 0, delay: 0.9, duration: 1 });
    gsap.to("#hero-btn", { opacity: 1, y: 0, delay: 1.3, duration: 1 });
  }, []);

  return (
    <section className="fixed top-0 left-0 w-full h-screen bg-black z-0">
      {/* Text overlay — pointer-events-none so Spline gets mouse events */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center px-5 text-center">
        <h1
          id="hero-title"
          className="text-white font-semibold text-3xl md:text-5xl lg:text-6xl opacity-0 translate-y-8 max-w-3xl leading-tight"
        >
          India&apos;s Advanced AI Career Institute
        </h1>

        <p
          id="hero-sub"
          className="text-gray-400 text-base md:text-lg mt-4 opacity-0 translate-y-8"
        >
          Digital Marketing &nbsp;|&nbsp; Data Science &nbsp;|&nbsp; Finance
          &nbsp;|&nbsp; HR &nbsp;|&nbsp; AI
        </p>

        {/* Re-enable pointer events only for the button */}
        <a
          id="hero-btn"
          href="#highlights"
          className="btn mt-6 opacity-0 translate-y-8 pointer-events-auto"
        >
          Book Free Counselling
        </a>
      </div>

      {/* Spline 3D scene — receives all mouse events for robot head tracking */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Spline scene="https://prod.spline.design/9aPp2nOUkM3wqAUO/scene.splinecode" />
      </div>
    </section>
  );
};

export default Hero;
