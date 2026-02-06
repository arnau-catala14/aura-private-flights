import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import FleetSection from "@/components/FleetSection";
import CulinarySection from "@/components/CulinarySection";
import ConciergeSection from "@/components/ConciergeSection";
import MembershipSection from "@/components/MembershipSection";
import DestinationsSection from "@/components/DestinationsSection";
import FooterSection from "@/components/FooterSection";
import NoiseOverlay from "@/components/NoiseOverlay";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <NoiseOverlay />
      <HeroSection />
      <ExperienceSection />
      <FleetSection />
      <CulinarySection />
      <ConciergeSection />
      <MembershipSection />
      <DestinationsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
