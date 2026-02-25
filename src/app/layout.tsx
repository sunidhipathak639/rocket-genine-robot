import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const fontHeading = Orbitron({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robot Genie | Enterprise AI Education",
  description:
    "Master artificial intelligence with Robot Genie. Transform your career with industry-leading courses and hands-on training.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Robot Genie | Enterprise AI Education",
    description:
      "Master artificial intelligence with Robot Genie. Transform your career with industry-leading courses and hands-on training.",
    url: "https://robotgenie.ai",
    siteName: "Robot Genie",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Robot Genie AI Education",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robot Genie | Enterprise AI Education",
    description:
      "Master artificial intelligence with Robot Genie. Transform your career with industry-leading courses and hands-on training.",
    images: ["/og-image.jpg"],
  },
};

import { AIParticlesBackground } from "@/components/ui/AIParticlesBackground";
import { MouseTrail } from "@/components/ui/MouseTrail";
import { AIChatbot } from "@/components/ui/AIChatbot";
import { AIVoiceInitializer } from "@/components/ui/AIVoiceInitializer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${fontHeading.variable} ${fontBody.variable} font-body antialiased min-h-screen bg-transparent text-foreground selection:bg-primary/30 selection:text-primary flex flex-col relative`}
      >
        <AIVoiceInitializer />
        <MouseTrail />
        <AIParticlesBackground />
        <AIChatbot />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
