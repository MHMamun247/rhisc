import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Cpu, Code } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: FlaskConical,
    title: "Chemical Supply",
    description:
      "Industrial-grade chemicals for government and enterprise projects with strict quality compliance.",
    features: [
      "Laboratory Reagents",
      "Industrial Solvents",
      "Safety Equipment",
      "Quality Certifications",
    ],
  },
  {
    icon: Cpu,
    title: "Electronics & Parts",
    description:
      "Premium electronic components and spare parts for critical infrastructure and operations.",
    features: [
      "Circuit Components",
      "Sensors & Modules",
      "Power Systems",
      "Technical Support",
    ],
  },
  {
    icon: Code,
    title: "Software & IT",
    description:
      "Enterprise software solutions and IT infrastructure services tailored for government needs.",
    features: [
      "Custom Software",
      "Cloud Solutions",
      "Cybersecurity",
      "IT Consultancy",
    ],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 md:py-32" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive solutions across three core industries, delivering excellence 
            in every supply and service we provide.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={0.2 * (index + 1)}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
