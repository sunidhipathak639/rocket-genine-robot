"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export function ConversionStrip() {
  return (
    <section className="py-16 bg-foreground text-background relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Your Future in AI Starts Today.
          </h2>
          <p className="text-background/80 text-lg">
            Admissions for the upcoming residential and online cohorts are
            closing soon. Don't miss out on securing your spot.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
          <Button
            size="lg"
            className="rounded-full h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 border-none"
          >
            Apply Now <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-14 px-8 text-base bg-transparent border-background/20 text-background hover:bg-background/10 hover:text-background"
          >
            <MessageCircle className="mr-2 w-5 h-5 text-green-400" /> WhatsApp
            Expert
          </Button>
        </div>
      </div>
    </section>
  );
}
