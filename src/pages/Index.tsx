import Navigation from "@/components/Navigation";
import AquaticBackground from "@/components/AquaticBackground";
import ParticleCursor from "@/components/ParticleCursor";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AquaticBackground />
      <ParticleCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LeadershipSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
