import { motion } from "framer-motion";
import { Atom, Cpu, Code, FlaskConical, CircuitBoard, Binary } from "lucide-react";

const elements = [
  { Icon: Atom, x: "10%", y: "20%", size: 40, delay: 0 },
  { Icon: Cpu, x: "85%", y: "15%", size: 48, delay: 0.5 },
  { Icon: Code, x: "75%", y: "70%", size: 36, delay: 1 },
  { Icon: FlaskConical, x: "15%", y: "75%", size: 44, delay: 1.5 },
  { Icon: CircuitBoard, x: "50%", y: "85%", size: 32, delay: 2 },
  { Icon: Binary, x: "90%", y: "50%", size: 28, delay: 2.5 },
  { Icon: Atom, x: "5%", y: "50%", size: 24, delay: 3 },
  { Icon: Cpu, x: "60%", y: "10%", size: 36, delay: 0.8 },
];

const FloatingElements = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="floating-element text-primary/30 dark:text-primary/20"
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.3,
            scale: 1,
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: element.delay },
            scale: { duration: 0.6, delay: element.delay },
            y: {
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            },
            rotate: {
              duration: 6 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            },
          }}
        >
          <element.Icon size={element.size} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Abstract gradient orbs */}
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        style={{ left: "20%", top: "30%" }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        style={{ right: "15%", bottom: "20%" }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default FloatingElements;
