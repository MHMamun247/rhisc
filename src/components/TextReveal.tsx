import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  type?: "chars" | "words" | "lines";
  staggerAmount?: number;
  delay?: number;
}

const TextReveal = ({
  children,
  className = "",
  type = "words",
  staggerAmount = 0.03,
  delay = 0,
}: TextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const text = children;
    let elements: string[] = [];

    if (type === "chars") {
      elements = text.split("");
    } else if (type === "words") {
      elements = text.split(" ");
    } else {
      elements = text.split("\n");
    }

    // Create spans for each element
    container.innerHTML = elements
      .map((el, i) => {
        const content = type === "chars" ? el : el;
        const space = type === "chars" ? "" : " ";
        return `<span class="inline-block overflow-hidden"><span class="reveal-text inline-block" style="opacity: 0; transform: translateY(100%)">${content}${space}</span></span>`;
      })
      .join("");

    const spans = container.querySelectorAll(".reveal-text");

    gsap.to(spans, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: staggerAmount,
      ease: "power3.out",
      delay,
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [children, type, staggerAmount, delay]);

  return <div ref={containerRef} className={className}>{children}</div>;
};

export default TextReveal;
