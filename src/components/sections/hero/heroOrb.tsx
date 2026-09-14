"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export function HeroOrb() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
      }}
      className="pointer-events-none fixed z-10 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.07] blur-[100px] md:block"
    />
  );
}