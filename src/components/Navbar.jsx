import { useEffect, useRef } from "react";
import gsap from "gsap";
import { searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (diff > 4) {
        // Scrolling DOWN → hide navbar (slide up)
        gsap.to(headerRef.current, {
          y: "-100%",
          duration: 0.4,
          ease: "power2.out",
        });
      } else if (diff < -4) {
        // Scrolling UP → show navbar (slide back down)
        gsap.to(headerRef.current, {
          y: "0%",
          duration: 0.4,
          ease: "power2.out",
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full py-5 sm:px-10 px-5 flex justify-between items-center"
    >
      <nav className="flex w-full screen-max-width">
        <span className="text-white font-semibold text-lg tracking-tight">
          Rocket Genine
        </span>

        <div className="flex flex-1 justify-end max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 sm:hidden">
          <img src={searchImg} alt="search" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
