import { ModalProvider } from "@/components/ModalContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import ProblemSection from "@/components/ProblemSection";
import WhySkitraceSection from "@/components/WhySkitraceSection";
import SearchProofSection from "@/components/SearchProofSection";
import EvidencePreviewSection from "@/components/EvidencePreviewSection";
import DarkStakeholdersSection from "@/components/DarkStakeholdersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonSection from "@/components/ComparisonSection";
import AIProofSection from "@/components/AIProofSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";

export default function Home() {
  return (
    <ModalProvider>
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <ProblemSection />
        <WhySkitraceSection />
        <SearchProofSection />
        <EvidencePreviewSection />
        <DarkStakeholdersSection />
        <TestimonialsSection />
        <ComparisonSection />
        <AIProofSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <Modals />
    </ModalProvider>
  );
}
