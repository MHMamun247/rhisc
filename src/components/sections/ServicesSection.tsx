import { motion } from "framer-motion";
import { FlaskConical, Cpu, Code, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import { useCursorStore } from "@/stores/cursorStore";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FlaskConical,
    title: "Chemical Supply",
    description:
      "Premium industrial and laboratory chemicals for government facilities. Complete documentation, safety compliance, and reliable supply chain.",
    features: ["Industrial Chemicals", "Lab Reagents", "Safety Equipment", "Compliance Support"],
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
    icon: Cpu,
    title: "Electronics & Parts",
    description:
      "High-quality electronic components and spare parts for mission-critical systems. Authentic sourcing with full traceability.",
    features: ["Components", "Spare Parts", "Testing Equipment", "Quality Assurance"],
    gradient: "from-teal-500/20 to-emerald-500/10",
  },
  {
    icon: Code,
    title: "Software & IT",
    description:
      "Enterprise software solutions and IT infrastructure for government operations. Secure, scalable, and fully supported.",
    features: ["Custom Software", "IT Infrastructure", "Security Solutions", "Support & Training"],
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
];

const ServicesSection = () => {
  const { setHovering, setHoverScale } = useCursorStore();

  const handleMouseEnter = () => {
    setHovering(true);
    setHoverScale(1.5);
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
              What We Do
            </span>
          </ScrollReveal>
          <TextReveal
            className="heading-section text-foreground mb-6"
            type="words"
            staggerAmount={0.04}
            delay={0.2}
          >
            Our Core Services
          </TextReveal>
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <p className="body-large max-w-3xl mx-auto">
              Comprehensive supply solutions tailored for government projects,
              backed by expertise and unwavering commitment to quality.
            </p>
          </ScrollReveal>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              animation="fadeUp"
              delay={0.2 + index * 0.15}
            >
              <motion.div
                className="glass-card h-full group relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal animation="fadeUp" delay={0.8}>
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="btn-primary inline-flex items-center gap-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              View All Services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
