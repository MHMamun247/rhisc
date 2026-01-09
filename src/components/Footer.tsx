import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contact" className="relative border-t border-border/50 py-16" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-display text-2xl font-bold">
              <span className="text-gradient">RH International</span>
              <br />
              Resource Centre
            </h3>
            <p className="mb-6 max-w-md text-muted-foreground">
              Your trusted partner for government contracting needs. Delivering excellence 
              in chemical supply, electronics, and IT solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="interactive flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors hover:bg-primary/20"
              >
                <Globe className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Leadership", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="interactive text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Mirer Bazer, Pubail,
                  <br />
                  Gazipur 1710
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">+880 XXXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">info@rh-international.com</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 border-t border-border/50 pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RH International Resource Centre. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
