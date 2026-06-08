import HeroSection from "@/components/HeroSection";
import CoreServices from "@/components/CoreServices";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <CoreServices />
      <WhyChooseSection />
      <FAQSection />
      <Footer />
    </>
  );
}