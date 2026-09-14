"use client";

import { motion } from "motion/react";

export function HeroRacingLine() {
  const path =
    "M -100 720 C 250 610, 350 780, 620 640 C 900 495, 1040 580, 1190 420 C 1320 285, 1450 330, 1700 150";

  return (
    <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="absolute inset-0 hidden h-full w-full md:block"
      >
        <motion.path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[var(--accent)]"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: 1,
            opacity: 0.45,
          }}
          transition={{
            pathLength: {
              duration: 2.5,
              delay: 0.8,
              ease: "easeInOut",
            },
            opacity: {
              duration: 1,
              delay: 0.8,
            },
          }}
        />

        <motion.path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-[var(--accent)]"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: 1,
            opacity: 0.08,
          }}
          transition={{
            pathLength: {
              duration: 2.5,
              delay: 0.8,
              ease: "easeInOut",
            },
            opacity: {
              duration: 1,
              delay: 0.8,
            },
          }}
        />
      </svg>

      <motion.div
        initial={{
          opacity: 0,
          x: "-20vw",
        }}
        animate={{
          opacity: [0, 0.8, 0],
          x: ["-20vw", "120vw"],
        }}
        transition={{
          delay: 2.8,
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "linear",
        }}
        className="absolute left-0 top-[78%] hidden h-px w-20 bg-[var(--accent)] blur-[1px] md:block"
      />
    </div>
  );
}
