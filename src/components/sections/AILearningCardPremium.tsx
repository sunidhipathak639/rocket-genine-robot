"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IdeaMotion } from "@carbon/icons-motion";
import { Clock, BookOpen, ChevronRight } from "lucide-react";
import React from "react";

interface AILearningCardPremiumProps {
  title?: string;
  description?: string;
  duration?: string;
  modules?: number;
  tags?: string[];
  icon?: React.ElementType;
}

export function AILearningCardPremium({
  title = "AI Foundations Bootcamp",
  description = "Master the core principles of artificial intelligence, from neural networks to advanced machine learning architectures. Designed for the next generation of engineers.",
  duration = "8 Weeks",
  modules = 12,
  tags = ["Beginner", "Most Popular"],
  icon: Icon = IdeaMotion,
}: AILearningCardPremiumProps) {
  return (
    <div className="relative group p-[1px] rounded-[24px] overflow-hidden">
      {/* Neon Glow Border */}
      <div className="absolute -inset-[2px] bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      {/* Glassmorphism Card Container */}
      <Card className="relative h-full bg-[#0B0F1A]/80 backdrop-blur-xl border-white/10 rounded-[23px] overflow-hidden shadow-2xl flex flex-col">
        {/* Subtle inner glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        <CardHeader className="pb-4 space-y-6">
          {/* Tags Section */}
          <div className="flex gap-2">
            {tags.map((tag, idx) => (
              <div key={idx} className="relative group/tag">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-[2px] opacity-50 transition duration-300" />
                <Badge className="relative bg-[#0B0F1A]/90 text-white border-white/5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase">
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {tag}
                  </span>
                </Badge>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-4">
            {/* Glowing Icon Box */}
            <div className="relative shrink-0">
              <div className="absolute -inset-3 bg-blue-500/20 blur-2xl rounded-full" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/40">
                <div className="w-full h-full rounded-[15px] bg-[#0B0F1A]/80 backdrop-blur-md flex items-center justify-center overflow-hidden">
                  <Icon
                    size={28}
                    isAnimating={true}
                    className="text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                  />
                </div>
              </div>
            </div>

            <CardTitle className="text-2xl font-black text-white leading-tight tracking-tight pt-1">
              {title}
            </CardTitle>
          </div>

          <CardDescription className="text-sm leading-relaxed text-blue-100/60 font-medium">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-auto space-y-6 pb-8">
          {/* Info Row */}
          <div className="flex items-center gap-4 text-xs font-semibold text-white/70 p-4 bg-white/[0.03] rounded-2xl border border-white/5 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <Clock className="w-4 h-4 text-purple-400" />
              </div>
              <span>{duration}</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <BookOpen className="w-4 h-4 text-blue-400" />
              </div>
              <span>{modules} Modules</span>
            </div>
          </div>

          {/* Large Glowing Button */}
          <div className="relative pt-2 group/btn">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-xl blur-md opacity-40 group-hover/btn:opacity-100 transition duration-500" />
            <Button className="relative w-full h-14 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:scale-[1.02] active:scale-[0.98] text-white border-none rounded-xl text-md font-bold shadow-2xl flex justify-between px-6 transition-all duration-300 overflow-hidden">
              <span className="z-10 tracking-wide uppercase">
                Explore Course
              </span>
              <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm">
                <ChevronRight className="w-5 h-5" />
              </div>

              {/* Animated glass shine */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-20deg] -translate-x-full group-hover/btn:animate-shine" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
