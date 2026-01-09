import Navigation from "@/components/Navigation";
import AquaticBackground from "@/components/AquaticBackground";
import ParticleCursor from "@/components/ParticleCursor";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import { motion } from "framer-motion";
import { useCursorStore } from "@/stores/cursorStore";

const projects = [
  { title: "Chemical Supply Contract", category: "Chemicals", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop" },
  { title: "Electronics Infrastructure", category: "Electronics", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" },
  { title: "Government IT Systems", category: "Software", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" },
  { title: "Lab Equipment Supply", category: "Chemicals", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop" },
];

const Work = () => {
  const { setHovering, setHoverScale } = useCursorStore();
  return (
    <div className="relative min-h-screen">
      <AquaticBackground />
      <ParticleCursor />
      <Navigation />
      <main className="pt-32 section-padding">
        <div className="container-wide">
          <ScrollReveal animation="fadeUp"><span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block text-center">Portfolio</span></ScrollReveal>
          <TextReveal className="heading-hero text-center text-foreground mb-16" type="words" staggerAmount={0.05}>Our Work</TextReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 0.1}>
                <motion.div className="glass-card overflow-hidden group" whileHover={{ y: -8 }} onMouseEnter={() => { setHovering(true); setHoverScale(1.5); }} onMouseLeave={() => { setHovering(false); setHoverScale(1); }}>
                  <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                    <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} />
                  </div>
                  <span className="text-primary text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-2">{project.title}</h3>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Work;
