import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay: number;
  isInView: boolean;
}

const ServiceCard = ({ icon: Icon, title, description, features, delay, isInView }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass-card interactive group h-full overflow-hidden p-8 transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Icon container */}
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-transform group-hover:scale-110">
        <Icon className="h-7 w-7 text-primary" />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-semibold text-foreground">{title}</h3>

      {/* Description */}
      <p className="mb-6 text-muted-foreground">{description}</p>

      {/* Features list */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover glow effect */}
      <div className="absolute -bottom-2 -right-2 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
};

export default ServiceCard;
