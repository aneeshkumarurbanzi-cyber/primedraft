import ServicesHero from "@/components/ServicesHero";
import MechanicalServices from "@/components/MechanicalServices";
import ElectricalServices from "@/components/ElectricalServices";
import PlumbingBIMSection from "@/components/PlumbingBIMSection";
import VisualizationSection from "@/components/VisualizationSection";
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
        <MechanicalServices />
        <ElectricalServices />
        <PlumbingBIMSection />
        <VisualizationSection />
    </>
  );
}   