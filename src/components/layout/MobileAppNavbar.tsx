"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

export function MobileAppNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      {/* Premium Glass Background */}
      <div className="absolute inset-0 bg-[#0B0F1A]/60 backdrop-blur-xl border-b border-white/10" />

      <div className="relative flex items-center justify-between max-w-lg mx-auto w-full">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute -inset-2 bg-purple-500/20 blur-lg rounded-full animate-pulse" />
            <div className="relative bg-[#030712] p-1.5 rounded-xl shadow-lg border border-white/20 overflow-hidden">
              <Image
                src="/rocket-genie-log.png"
                alt="Robot Genie Logo"
                width={22}
                height={22}
                priority
                className="object-contain brightness-125"
              />
            </div>
          </div>
          <span className="font-black text-xl tracking-tighter text-white uppercase drop-shadow-sm">
            Robot <span className="text-cyan-400">Genie</span>
          </span>
        </Link>

        {/* Menu Icon */}
        <button className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors active:scale-95">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
