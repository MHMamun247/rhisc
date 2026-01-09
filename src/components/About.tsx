import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Handshake } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="section-title mb-6">
            About <span className="text-gradient">Us</span>
          </h2>
          <p className="mb-16 text-lg leading-relaxed text-muted-foreground md:text-xl">
            RH International Resource Centre is a premier government contractor specializing in 
            the supply of industrial chemicals, electronic components, and cutting-edge IT solutions. 
            With a commitment to excellence and reliability, we serve as a trusted partner for 
            government agencies and enterprises seeking quality resources.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To provide unparalleled sourcing and supply solutions that empower government projects with quality, efficiency, and innovation.",
              delay: 0.2,
            },
            {
              icon: Lightbulb,
              title: "Our Vision",
              description:
                "To become the leading resource centre for government contractors across South Asia, setting new standards in supply chain excellence.",
              delay: 0.4,
            },
            {
              icon: Handshake,
              title: "Our Values",
              description:
                "Integrity, reliability, and customer-first approach define every partnership we build and every project we undertake.",
              delay: 0.6,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: item.delay }}
              className="glass-card group p-8 text-center transition-all hover:scale-105"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <item.icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
