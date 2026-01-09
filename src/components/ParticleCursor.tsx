import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { useCursorStore } from "@/stores/cursorStore";

interface Droplet {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const ParticleCursor = () => {
  const { isHovering, hoverScale } = useCursorStore();
  const [droplets, setDroplets] = useState<Droplet[]>([]);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const dropletId = useRef(0);
  const rippleId = useRef(0);
  const lastPosition = useRef({ x: 0, y: 0 });
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const addDroplet = useCallback((x: number, y: number) => {
    const newDroplet: Droplet = {
      id: dropletId.current++,
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      size: 4 + Math.random() * 8,
      opacity: 0.6 + Math.random() * 0.4,
    };
    
    setDroplets((prev) => [...prev.slice(-15), newDroplet]);
    
    setTimeout(() => {
      setDroplets((prev) => prev.filter((d) => d.id !== newDroplet.id));
    }, 1000);
  }, []);

  const addRipple = useCallback((x: number, y: number) => {
    const newRipple = {
      id: rippleId.current++,
      x,
      y,
    };
    
    setRipples((prev) => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 800);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Calculate distance moved
      const dx = e.clientX - lastPosition.current.x;
      const dy = e.clientY - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Add droplets based on movement speed
      if (distance > 15) {
        addDroplet(e.clientX, e.clientY);
        lastPosition.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleClick = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY);
      // Add burst of droplets on click
      for (let i = 0; i < 5; i++) {
        setTimeout(() => addDroplet(e.clientX, e.clientY), i * 50);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [cursorX, cursorY, addDroplet, addRipple]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 50,
            height: 50,
            x: -25,
            y: -25,
            background: `radial-gradient(circle, 
              hsl(175 100% 65% / 0.3) 0%, 
              hsl(180 90% 50% / 0.1) 50%, 
              transparent 70%)`,
            boxShadow: `0 0 30px hsl(175 100% 65% / 0.3)`,
          }}
          animate={{
            scale: isHovering ? hoverScale * 1.5 : 1,
            opacity: isHovering ? 0.8 : 0.5,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        
        {/* Inner bright core */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 12,
            height: 12,
            x: -6,
            y: -6,
            background: `radial-gradient(circle, 
              hsl(175 100% 80%) 0%, 
              hsl(180 90% 60%) 50%, 
              hsl(185 85% 45% / 0) 100%)`,
            boxShadow: `
              0 0 15px hsl(175 100% 65%),
              0 0 30px hsl(180 90% 50% / 0.5)
            `,
          }}
          animate={{
            scale: isHovering ? hoverScale : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Trailing droplets */}
      {droplets.map((droplet) => (
        <motion.div
          key={droplet.id}
          className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
          style={{
            x: droplet.x - droplet.size / 2,
            y: droplet.y - droplet.size / 2,
            width: droplet.size,
            height: droplet.size,
            background: `radial-gradient(circle, 
              hsl(175 100% 70% / ${droplet.opacity}) 0%, 
              hsl(180 90% 50% / ${droplet.opacity * 0.5}) 50%, 
              transparent 100%)`,
            boxShadow: `0 0 ${droplet.size}px hsl(175 100% 65% / 0.4)`,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
            y: droplet.y + 30 - droplet.size / 2,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}

      {/* Click ripples */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed pointer-events-none z-[9997] rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
            x: -10,
            y: -10,
            background: `radial-gradient(circle, 
              hsl(175 100% 65% / 0.6) 0%, 
              hsl(180 90% 50% / 0.3) 30%, 
              transparent 70%)`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 8, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      ))}
    </>
  );
};

export default ParticleCursor;
