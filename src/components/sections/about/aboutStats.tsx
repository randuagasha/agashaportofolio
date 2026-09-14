"use client";

import { motion } from "motion/react";

const stats = [
  {
    value: "UI/UX",
    label: "Primary Discipline",
  },
  {
    value: "FRONTEND",
    label: "Development Focus",
  },
  {
    value: "2026",
    label: "Current Season",
  },
];

export function AboutStats() {
  return (
    <div className="grid grid-cols-1 border-y border-white/10 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
          className="border-b border-white/10 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:last:border-r-0"
        >
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
            {stat.label}
          </p>

          <p className="display-text mt-2 text-sm tracking-[-0.02em] text-white/80">
            {stat.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
