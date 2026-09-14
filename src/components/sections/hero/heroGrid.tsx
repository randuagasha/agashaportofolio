"use client";

import { motion } from "motion/react";

export function HeroGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.3,
      }}
      className="pointer-events-none absolute inset-0"
    >
      <div className="technical-grid absolute inset-0 opacity-70" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#050505_85%)]" />

      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 hidden h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.025] md:block"
      />
    </motion.div>
  );
}