import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import { useCursorStore } from "@/stores/cursorStore";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const { setHovering, setHoverScale } = useCursorStore();

  const handleMouseEnter = () => {
    setHovering(true);
    setHoverScale(1.3);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setHoverScale(1);
  };

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Work", path: "/work" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    "Chemical Supply",
    "Electronics & Parts",
    "Software & IT",
    "Consulting",
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Main footer content */}
      <div className="section-padding pb-12">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand column */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <div className="lg:col-span-1">
                <Link to="/" className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className="font-display font-bold text-primary-foreground text-xl">R</span>
                  </motion.div>
                  <div>
                    <span className="font-display font-bold text-lg text-foreground block">
                      RH International
                    </span>
                    <span className="text-xs text-muted-foreground">Resource Centre</span>
                  </div>
                </Link>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Source & Supply Excellence for Government Projects. Your trusted partner
                  in chemicals, electronics, and IT solutions.
                </p>
              </div>
            </ScrollReveal>

            {/* Quick Links */}
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Services */}
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-6">Services</h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service}>
                      <Link
                        to="/services"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal animation="fadeUp" delay={0.4}>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-6">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      Mirer Bazer, Pubail, Gazipur 1710, Bangladesh
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a
                      href="tel:+880123456789"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      +880 123 456 789
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a
                      href="mailto:info@rhinternational.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      info@rhinternational.com
                    </a>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30 py-6">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} RH International Resource Centre. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="hover:text-primary transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-primary transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
