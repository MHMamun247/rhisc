import Navigation from "@/components/Navigation";
import AquaticBackground from "@/components/AquaticBackground";
import ParticleCursor from "@/components/ParticleCursor";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";

const About = () => (
  <div className="relative min-h-screen">
    <AquaticBackground />
    <ParticleCursor />
    <Navigation />
    <main className="pt-32 section-padding">
      <div className="container-wide">
        <ScrollReveal animation="fadeUp">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block text-center">Our Story</span>
        </ScrollReveal>
        <TextReveal className="heading-hero text-center text-foreground mb-8" type="words" staggerAmount={0.05}>About RH International</TextReveal>
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <p className="body-large text-center max-w-3xl mx-auto mb-16">
            For over 15 years, we've been the trusted partner for government agencies seeking excellence in supply chain solutions.
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal animation="slideRight"><div className="glass-card"><h3 className="text-2xl font-display font-bold mb-4 text-foreground">Our History</h3><p className="text-muted-foreground">Founded with a vision to revolutionize government procurement, RH International has grown to become a leading supplier across multiple sectors.</p></div></ScrollReveal>
          <ScrollReveal animation="slideLeft"><div className="glass-card"><h3 className="text-2xl font-display font-bold mb-4 text-foreground">Our Expertise</h3><p className="text-muted-foreground">Specializing in chemicals, electronics, and IT solutions, we bring unmatched expertise and reliability to every project.</p></div></ScrollReveal>
        </div>
      </div>
    </main>
    <FooterSection />
  </div>
);

export default About;
