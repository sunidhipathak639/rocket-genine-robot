import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robot Genie | Enterprise AI Education",
  description:
    "Master artificial intelligence with Robot Genie. Transform your career with industry-leading courses and hands-on training.",
};

import { AIParticlesBackground } from "@/components/ui/AIParticlesBackground";
import { MouseTrail } from "@/components/ui/MouseTrail";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-transparent text-foreground selection:bg-primary/30 selection:text-primary flex flex-col relative`}
      >
        <MouseTrail />
        <AIParticlesBackground />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
