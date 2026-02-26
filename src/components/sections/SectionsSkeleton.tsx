"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function SectionsSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 flex flex-col gap-16 py-24 px-4 sm:px-6 md:px-12 transition-opacity duration-500 bg-background",
        className
      )}
      aria-hidden
    >
      <div className="container mx-auto space-y-24 max-w-6xl">
        {/* Block 1 */}
        <div className="space-y-6">
          <Skeleton className="h-10 w-64 rounded-lg bg-primary/10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-48 rounded-xl bg-primary/10" />
            ))}
          </div>
        </div>
        {/* Block 2 */}
        <div className="space-y-6">
          <Skeleton className="h-10 w-56 rounded-lg bg-primary/10" />
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-40 w-72 shrink-0 rounded-xl bg-primary/10" />
            ))}
          </div>
        </div>
        {/* Block 3 */}
        <div className="space-y-6">
          <Skeleton className="h-10 w-48 rounded-lg bg-primary/10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-32 rounded-lg bg-primary/10" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
