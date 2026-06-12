import AboutHeroSection from "@/components/AboutHeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ExpertiseServices from "@/components/ExpertiseServices";
import ContactSection from "@/components/ContactSection";
export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <ServicesSection />
        <AboutSection />
        <MissionSection />
        <ExpertiseServices />
        <ContactSection />
    </>
  );
}