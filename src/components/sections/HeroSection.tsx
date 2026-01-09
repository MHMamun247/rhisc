import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useCursorStore } from "@/stores/cursorStore";
import TextReveal from "@/components/TextReveal";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { setHovering, setHoverScale } = useCursorStore();

  const handleMouseEnter = () => {
    setHovering(true);
    setHoverScale(2);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setHoverScale(1);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content container */}
      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <motion.div
              className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Government Contractor & Supplier
              </span>
            </motion.div>
          </ScrollReveal>

          {/* Main heading */}
          <div className="mb-8">
            <TextReveal
              className="heading-hero text-foreground mb-4"
              type="words"
              staggerAmount={0.05}
              delay={0.4}
            >
              RH International
            </TextReveal>
            <TextReveal
              className="heading-hero text-gradient"
              type="words"
              staggerAmount={0.05}
              delay={0.6}
            >
              Resource Centre
            </TextReveal>
          </div>

          {/* Tagline */}
          <ScrollReveal animation="fadeUp" delay={0.8}>
            <p className="body-large max-w-2xl mx-auto mb-12 text-foreground/80">
              Source & Supply Excellence for Government Projects. We specialize in
              Chemicals, Electronics, and IT Software solutions.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal animation="fadeUp" delay={1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="btn-primary"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="btn-glass"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal animation="fadeUp" delay={1.2}>
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => { setHovering(true); setHoverScale(1.3); }}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="glass p-3 rounded-full">
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
