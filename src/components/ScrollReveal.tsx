import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";
  delay?: number;
  duration?: number;
  stagger?: number;
}

const ScrollReveal = ({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 1,
  stagger = 0,
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animations = {
      fadeUp: { from: { y: 60, opacity: 0 }, to: { y: 0, opacity: 1 } },
      fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
      slideLeft: { from: { x: 100, opacity: 0 }, to: { x: 0, opacity: 1 } },
      slideRight: { from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1 } },
      scaleIn: { from: { scale: 0.8, opacity: 0 }, to: { scale: 1, opacity: 1 } },
    };

    const { from, to } = animations[animation];

    gsap.fromTo(
      element,
      from,
      {
        ...to,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        stagger,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animation, delay, duration, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
