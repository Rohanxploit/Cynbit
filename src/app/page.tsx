import HeroSection from "@/components/HeroSection";
import ArchitectureStudio from "@/components/ArchitectureStudio";
import AiScanner from "@/components/AiScanner";
import ServicesShowcase from "@/components/ServicesShowcase";
import BitElevatePreview from "@/components/BitElevatePreview";
import TechnicalReportSection from "@/components/TechnicalReportSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ArchitectureStudio />
      <AiScanner />
      <ServicesShowcase />
      <BitElevatePreview />
      <TechnicalReportSection />
    </>
  );
}
