import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "Abu Bakkar Islam",
    role: "Founder & Managing Director",
    description:
      "Visionary leader with over 15 years of experience in government contracting and supply chain management.",
    initials: "ABI",
  },
  {
    name: "MD ABU SAMA (KIAS)",
    role: "Co-Founder & CEO",
    description:
      "Strategic mastermind driving innovation and operational excellence across all business verticals.",
    initials: "MAS",
  },
];

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="relative py-24 md:py-32" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-6">
            Our <span className="text-gradient">Leadership</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Meet the visionaries behind RH International Resource Centre, driving 
            excellence and innovation in government contracting.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
              className="glass-card interactive group overflow-hidden p-8 text-center transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Avatar placeholder with initials */}
              <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-accent">
                  <span className="text-3xl font-bold text-primary-foreground">
                    {leader.initials}
                  </span>
                </div>
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
              </div>

              {/* Name */}
              <h3 className="mb-1 text-2xl font-semibold text-foreground">{leader.name}</h3>

              {/* Role */}
              <p className="mb-4 text-sm font-medium text-primary">{leader.role}</p>

              {/* Description */}
              <p className="mb-6 text-muted-foreground">{leader.description}</p>

              {/* Social links */}
              <div className="flex justify-center gap-4">
                <button className="interactive flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors hover:bg-primary/20">
                  <Linkedin className="h-5 w-5 text-primary" />
                </button>
                <button className="interactive flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors hover:bg-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
