"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function HeroCar() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
  });

  const carX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const carY = useTransform(smoothY, [-1, 1], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      mouseX.set((x - 0.5) * 2);
      mouseY.set((y - 0.5) * 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      <motion.div
        style={{
          x: carX,
          y: carY,
        }}
        initial={{
          opacity: 0,
          scale: 1.08,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          opacity: {
            duration: 1.4,
            delay: 0.4,
          },
          scale: {
            duration: 2,
            delay: 0.2,
            ease: "easeOut",
          },
        }}
        className="absolute right-[-42%] top-[28%] w-[125%] max-w-[900px] md:right-[-10%] md:top-[16%] md:w-[72%] md:max-w-[1100px]"
      >
        <div className="absolute inset-0 translate-x-[-3%] translate-y-[8%] scale-90 bg-[radial-gradient(ellipse_at_center,rgba(255,77,0,0.22),transparent_55%)] blur-3xl" />

        <Image
          src="/images/hero/hero-car.webp"
          alt=""
          width={1536}
          height={1024}
          priority
          className="relative h-auto w-full object-contain opacity-80 mix-blend-screen"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,transparent_25%,transparent_75%,#050505_100%)]" />
      </motion.div>

      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        animate={{
          scaleX: 1,
          opacity: 1,
        }}
        transition={{
          delay: 1.4,
          duration: 1.2,
          ease: "easeOut",
        }}
        className="absolute right-[8%] top-[62%] hidden h-px w-[38%] origin-right bg-gradient-to-l from-[var(--accent)]/50 via-[var(--accent)]/10 to-transparent md:block"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          delay: 1.8,
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 5,
        }}
        className="absolute right-[15%] top-[42%] hidden h-[18%] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent blur-[1px] md:block"
      />
    </div>
  );
}
