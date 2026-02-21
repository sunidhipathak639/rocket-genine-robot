import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 2,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: 0.4,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen h-full bg-zinc common-padding overflow-hidden"
    >
      <div className="screen-max-width">
        <div className="mb-12 md:flex items-end justify-between w-full">
          <h1 id="title" className="section-heading !text-white">
            Our top courses
          </h1>
          <div className="flex flex-wrap gap-5 items-end">
            <p className="link">
              Watch success stories{" "}
              <img src={watchImg} alt="play icon" className="ml-2" />
            </p>
            <p className="link">
              Book a demo class{" "}
              <img src={rightImg} alt="right icon" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
