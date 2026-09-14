"use client";

import { motion } from "motion/react";

const stats = [
  {
    value: "17",
    label: "Years old",
    detail: "CURRENT AGE",
  },
  {
    value: "03+",
    label: "Years learning",
    detail: "EXPERIENCE",
  },
  {
    value: "09",
    label: "Certificates",
    detail: "ACHIEVEMENTS",
  },
  {
    value: "10+",
    label: "Projects",
    detail: "BUILT / DESIGNED",
  },
];

export function AboutStats() {
  return (
    <div className="mt-24 border-y border-white/[0.08]">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.detail}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
            }}
            className="group relative border-white/[0.08] p-6 first:border-l-0 md:border-l md:p-8"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-[8px] tracking-[0.2em] text-white/20">
                0{index + 1}
              </span>

              <span className="h-1 w-1 bg-white/20 transition-colors group-hover:bg-[var(--accent)]" />
            </div>

            <div className="display-text text-4xl font-medium tracking-[-0.05em] text-white md:text-5xl">
              {stat.value}
            </div>

            <div className="mt-2 text-xs text-white/40">
              {stat.label}
            </div>

            <div className="mt-5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
              {stat.detail}
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}