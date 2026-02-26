"use client";

import { useState, useCallback } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { PlacementProofSection } from "@/components/sections/PlacementProofSection";
import { AwardsGallery } from "@/components/sections/AwardsGallery";
import { TrainingEnvSection } from "@/components/sections/TrainingEnvSection";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConversionStrip } from "@/components/sections/ConversionStrip";
import { SectionsSkeleton } from "@/components/sections/SectionsSkeleton";

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);

  const handleHeroReady = useCallback(() => {
    setHeroReady(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection onHeroReady={handleHeroReady} />
      <div className="relative z-[5] min-h-[50vh] bg-background">
        {/* Skeleton for sections area: visible until hero is ready, then smooth fade out */}
        <SectionsSkeleton
          className={
            heroReady
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-none"
          }
        />
        {/* Real sections: fade in smoothly after hero ready (cached on 2nd visit) */}
        <div
          className={`relative z-10 transition-opacity duration-700 ease-out ${
            heroReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <WhyChooseUsSection />
          <CoursesSection />
          <TestimonialsCarousel />
          <PlacementProofSection />
          <AwardsGallery />
          <TrainingEnvSection />
          <LeadCaptureForm />
          <FAQSection />
          <ConversionStrip />
        </div>
      </div>
    </div>
  );
}
