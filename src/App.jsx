import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black">
      {/* Fixed Navbar floats above everything */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero is sticky — pins at top while content scrolls over it.
          Works flawlessly on iOS/Android without fixed-position bugs. */}
      <Hero />

      {/* Content sections stack directly after the hero — no spacer needed.
          z-10 + bg-black ensures they slide over the pinned hero. */}
      <div className="relative z-10 bg-black">
        <Highlights />
        <Model />
        <Features />
        <HowItWorks />
        <Footer />
      </div>
    </main>
  );
};

export default Sentry.withProfiler(App);
