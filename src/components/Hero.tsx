import { motion } from "framer-motion";
import { ArrowDown, Shield, Award, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Content */}
      <div className="container relative z-10 px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/20 px-5 py-2 backdrop-blur-sm"
          >
            <Shield className="h-4 w-4 text-cyan-300" />
            <span className="text-sm font-medium text-cyan-100">Trusted Government Contractor</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl"
          >
            <span className="text-white drop-shadow-lg">RH International</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">Resource Centre</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-10 text-xl text-white/80 drop-shadow-md md:text-2xl"
          >
            Source & Supply Excellence for Government Projects
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-cyan-300" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">100+</p>
                <p className="text-sm text-white/70">Projects</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-teal-300" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">3</p>
                <p className="text-sm text-white/70">Industries</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-cyan-300" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-sm text-white/70">Years</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#about" className="btn-primary interactive inline-flex items-center gap-2">
              Learn More
              <ArrowDown className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white/60"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
