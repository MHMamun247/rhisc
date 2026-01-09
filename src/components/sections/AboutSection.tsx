import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import { useCursorStore } from "@/stores/cursorStore";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To be the most trusted supplier for government projects, delivering quality products and exceptional service across chemicals, electronics, and IT solutions.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To revolutionize government procurement by setting new standards in reliability, innovation, and partnership excellence.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, Excellence, Innovation, and Commitment. These principles guide every decision we make and every relationship we build.",
  },
];

const AboutSection = () => {
  const { setHovering, setHoverScale } = useCursorStore();

  const handleMouseEnter = () => {
    setHovering(true);
    setHoverScale(1.3);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setHoverScale(1);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-20">
          <ScrollReveal animation="fadeUp">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              About Us
            </span>
          </ScrollReveal>
          <TextReveal
            className="heading-section text-foreground mb-6"
            type="words"
            staggerAmount={0.04}
            delay={0.2}
          >
            Excellence in Government Supply
          </TextReveal>
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <p className="body-large max-w-3xl mx-auto">
              RH International Resource Centre has been a trusted partner for government
              agencies, providing comprehensive solutions in chemicals, electronic components,
              parts, and IT software for over a decade.
            </p>
          </ScrollReveal>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ScrollReveal
              key={value.title}
              animation="fadeUp"
              delay={0.2 + index * 0.15}
            >
              <motion.div
                className="glass-card h-full group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <value.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Decorative element */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};

export default AboutSection;
