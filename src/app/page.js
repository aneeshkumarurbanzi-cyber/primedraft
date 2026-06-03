import HeroSection from "@/components/HeroSection";
import CoreServices from "@/components/CoreServices";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <CoreServices />
      <WhyChooseSection />
      <Footer />
    </>
  );
}