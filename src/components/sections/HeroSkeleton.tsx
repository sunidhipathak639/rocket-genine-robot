"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function HeroSkeletonMobile({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-[5] flex flex-col items-center justify-end bg-black px-6 pb-[25svh] transition-opacity duration-500",
        className
      )}
      aria-hidden
    >
      {/* Robot area skeleton - center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Skeleton className="h-[45%] w-[70%] max-w-[280px] rounded-3xl bg-white/10" />
      </div>
      {/* Text skeletons at bottom */}
      <div className="w-full max-w-3xl space-y-4 text-center">
        <Skeleton className="mx-auto h-10 w-full max-w-sm rounded-lg bg-white/10" />
        <Skeleton className="mx-auto h-4 w-[85%] max-w-xs rounded bg-white/10" />
        <Skeleton className="mx-auto mt-6 h-14 w-56 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

export function HeroSkeletonDesktop({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-[5] flex items-center justify-center transition-opacity duration-500",
        className
      )}
      aria-hidden
    >
      <div className="container relative mx-auto flex flex-col justify-center px-4 sm:px-6 md:px-12 pt-8 mt-8 lg:pt-0 lg:mt-0 pb-8 sm:pb-16 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left column - text skeletons */}
          <div className="flex flex-col items-center lg:items-start w-full max-w-2xl mx-auto lg:mx-0 px-4 space-y-6">
            <Skeleton className="h-8 w-64 rounded-full bg-primary/15" />
            <div className="space-y-4 w-full">
              <Skeleton className="h-14 w-full max-w-md rounded-lg bg-white/10" />
              <Skeleton className="h-14 w-full max-w-sm rounded-lg bg-white/10" />
            </div>
            <Skeleton className="h-6 w-full max-w-xl rounded bg-white/10" />
            <Skeleton className="h-6 w-full max-w-lg rounded bg-white/10" />
            <div className="flex gap-4">
              <Skeleton className="h-14 w-40 rounded-full bg-white/20" />
              <Skeleton className="h-14 w-36 rounded-full bg-primary/15" />
            </div>
            <div className="flex gap-8 pt-8 border-t border-border/20 w-full">
              <Skeleton className="h-10 w-24 rounded bg-white/10" />
              <Skeleton className="h-10 w-20 rounded bg-white/10" />
            </div>
          </div>
          {/* Right column - robot area skeleton */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:ml-auto flex items-center justify-center">
            <Skeleton className="aspect-square w-full max-w-[400px] rounded-3xl bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
