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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <div className="relative z-10 bg-background">
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
  );
}
