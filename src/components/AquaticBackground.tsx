import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Blob {
  id: number;
  x: string;
  y: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const generateBlobs = (): Blob[] => {
  const colors = [
    "from-primary/20 to-accent/10",
    "from-glow-cyan/15 to-primary/5",
    "from-glow-bio/10 to-glow-teal/5",
    "from-accent/15 to-glow-cyan/10",
  ];

  return Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: `${15 + Math.random() * 70}%`,
    y: `${10 + Math.random() * 80}%`,
    size: 300 + Math.random() * 400,
    color: colors[i % colors.length],
    duration: 20 + Math.random() * 15,
    delay: i * 2,
  }));
};

const AquaticBackground = () => {
  const [blobs] = useState<Blob[]>(generateBlobs);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep ocean gradient base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, 
            hsl(225 60% 8%) 0%, 
            hsl(220 65% 5%) 50%, 
            hsl(230 55% 3%) 100%)`
        }}
      />

      {/* Morphing gradient blobs */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute rounded-full bg-gradient-to-br ${blob.color} blur-3xl opacity-60`}
          style={{
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.9, 1.1, 0.8],
            opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 30, -20, 0],
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "50% 60% 30% 60% / 30% 60% 70% 40%",
              "60% 40% 60% 30% / 70% 30% 50% 60%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: blob.delay,
          }}
        />
      ))}

      {/* Undulating wave layers */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[40%] opacity-30"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,200 C360,100 720,300 1080,200 C1260,150 1440,250 1440,200 L1440,400 L0,400 Z"
          fill="url(#waveGradient1)"
          initial={{ d: "M0,200 C360,100 720,300 1080,200 C1260,150 1440,250 1440,200 L1440,400 L0,400 Z" }}
          animate={{
            d: [
              "M0,200 C360,100 720,300 1080,200 C1260,150 1440,250 1440,200 L1440,400 L0,400 Z",
              "M0,250 C360,150 720,350 1080,250 C1260,200 1440,300 1440,250 L1440,400 L0,400 Z",
              "M0,180 C360,80 720,280 1080,180 C1260,130 1440,230 1440,180 L1440,400 L0,400 Z",
              "M0,200 C360,100 720,300 1080,200 C1260,150 1440,250 1440,200 L1440,400 L0,400 Z",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,280 C480,180 960,380 1440,280 L1440,400 L0,400 Z"
          fill="url(#waveGradient2)"
          animate={{
            d: [
              "M0,280 C480,180 960,380 1440,280 L1440,400 L0,400 Z",
              "M0,320 C480,220 960,420 1440,320 L1440,400 L0,400 Z",
              "M0,260 C480,160 960,360 1440,260 L1440,400 L0,400 Z",
              "M0,280 C480,180 960,380 1440,280 L1440,400 L0,400 Z",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(180 85% 50% / 0.2)" />
            <stop offset="100%" stopColor="hsl(220 65% 5% / 0)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(175 100% 55% / 0.15)" />
            <stop offset="100%" stopColor="hsl(220 65% 5% / 0)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-glow-bio/50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Ambient glow overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 100%, hsl(180 90% 50% / 0.1), transparent)`
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, hsl(220 65% 3% / 0.4) 100%)`
        }}
      />
    </div>
  );
};

export default AquaticBackground;
