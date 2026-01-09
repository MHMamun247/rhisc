import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import { useCursorStore } from "@/stores/cursorStore";

const leaders = [
  {
    name: "Abu Bakkar Islam",
    role: "Founder & Managing Director",
    description:
      "Visionary leader with over 20 years of experience in government supply chain management. Abu Bakkar founded RH International with a mission to transform procurement excellence.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "MD ABU SAMA (KIAS)",
    role: "Co-Founder & CEO",
    description:
      "Strategic mastermind driving operational excellence and client relationships. KIAS brings deep expertise in electronics and IT solutions for government sectors.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
];

const LeadershipSection = () => {
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
              Leadership
            </span>
          </ScrollReveal>
          <TextReveal
            className="heading-section text-foreground mb-6"
            type="words"
            staggerAmount={0.04}
            delay={0.2}
          >
            Meet Our Leaders
          </TextReveal>
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <p className="body-large max-w-3xl mx-auto">
              The visionaries behind RH International Resource Centre,
              committed to excellence and innovation in government supply.
            </p>
          </ScrollReveal>
        </div>

        {/* Leaders grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <ScrollReveal
              key={leader.name}
              animation="fadeUp"
              delay={0.2 + index * 0.2}
            >
              <motion.div
                className="glass-card text-center group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Avatar */}
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all" />
                </motion.div>

                {/* Info */}
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {leader.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {leader.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {leader.description}
                </p>

                {/* Social links */}
                <div className="flex items-center justify-center gap-3">
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
