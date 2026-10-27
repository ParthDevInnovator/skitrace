import { ModalProvider } from "@/components/ModalContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EvidencePreviewSection from "@/components/EvidencePreviewSection";
import PersonaRolesSection from "@/components/PersonaRolesSection";
import TrustSection from "@/components/TrustSection";
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
        <ProblemSection />
        <HowItWorksSection />
        <EvidencePreviewSection />
        <PersonaRolesSection />
        <TrustSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <Modals />
    </ModalProvider>
  );
}
