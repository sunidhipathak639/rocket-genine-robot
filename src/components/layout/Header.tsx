"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Courses", href: "#courses" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Placements", href: "#placements" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-2xl border-b border-white/10 py-4 shadow-2xl"
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 p-[1.5px] shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500">
            <div className="w-full h-full rounded-[10px] bg-[#030712] flex items-center justify-center overflow-hidden p-1.5">
              <img
                src="/rocket-genie-log.png"
                alt="Robot Genie Logo"
                className="w-full h-full object-contain brightness-125 group-hover:brightness-150 transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <span className="font-black text-2xl tracking-tighter text-white uppercase italic drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:tracking-normal">
            Robot{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Genie
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-[0.2em] text-blue-100/40 hover:text-white transition-all duration-300 relative group/link"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover/link:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <Button className="hidden md:inline-flex rounded-xl px-8 h-12 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:scale-105 active:scale-95 transition-all text-sm font-black uppercase tracking-widest border-0 shadow-lg shadow-blue-500/20">
            Apply Now
          </Button>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b shadow-lg md:hidden"
          >
            <nav className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-black uppercase tracking-widest text-white/50 hover:text-cyan-400 transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-6 w-full h-14 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-sm font-black uppercase tracking-widest border-0">
                Apply Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
