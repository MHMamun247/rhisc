import Navigation from "@/components/Navigation";
import AquaticBackground from "@/components/AquaticBackground";
import ParticleCursor from "@/components/ParticleCursor";
import FooterSection from "@/components/sections/FooterSection";
import ServicesSection from "@/components/sections/ServicesSection";

const Services = () => (
  <div className="relative min-h-screen">
    <AquaticBackground />
    <ParticleCursor />
    <Navigation />
    <main className="pt-32">
      <ServicesSection />
    </main>
    <FooterSection />
  </div>
);

export default Services;
