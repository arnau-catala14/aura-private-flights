import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import FleetSection from "@/components/FleetSection";
import ConciergeSection from "@/components/ConciergeSection";
import DestinationsSection from "@/components/DestinationsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ExperienceSection />
      <FleetSection />
      <ConciergeSection />
      <DestinationsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
