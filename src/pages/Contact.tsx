import Navigation from "@/components/Navigation";
import AquaticBackground from "@/components/AquaticBackground";
import ParticleCursor from "@/components/ParticleCursor";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import { motion } from "framer-motion";
import { useCursorStore } from "@/stores/cursorStore";
import { useState } from "react";

const Contact = () => {
  const { setHovering, setHoverScale } = useCursorStore();
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen">
      <AquaticBackground />
      <ParticleCursor />
      <Navigation />
      <main className="pt-32 section-padding">
        <div className="container-narrow">
          <ScrollReveal animation="fadeUp"><span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block text-center">Get in Touch</span></ScrollReveal>
          <TextReveal className="heading-hero text-center text-foreground mb-8" type="words" staggerAmount={0.05}>Contact Us</TextReveal>
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <p className="body-large text-center max-w-2xl mx-auto mb-12">Ready to start your next project? We'd love to hear from you.</p>
          </ScrollReveal>
          <ScrollReveal animation="scaleIn" delay={0.6}>
            <motion.form className="glass-card max-w-xl mx-auto" style={{ boxShadow: focused ? "0 0 60px hsl(180 90% 50% / 0.2)" : undefined }}>
              {["Name", "Email", "Message"].map((field) => (
                <div key={field} className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">{field}</label>
                  {field === "Message" ? (
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground" onFocus={() => setFocused(field)} onBlur={() => setFocused(null)} />
                  ) : (
                    <input type={field === "Email" ? "email" : "text"} className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground" onFocus={() => setFocused(field)} onBlur={() => setFocused(null)} />
                  )}
                </div>
              ))}
              <motion.button type="submit" className="btn-primary w-full" whileHover={{ scale: 1.02 }} onMouseEnter={() => { setHovering(true); setHoverScale(1.5); }} onMouseLeave={() => { setHovering(false); setHoverScale(1); }}>Send Message</motion.button>
            </motion.form>
          </ScrollReveal>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Contact;
