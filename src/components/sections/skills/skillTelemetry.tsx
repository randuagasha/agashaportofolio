"use client";

import { motion } from "motion/react";

const telemetry = [
  {
    label: "CREATIVE",
    value: 92,
  },
  {
    label: "FRONTEND",
    value: 87,
  },
  {
    label: "UI / UX",
    value: 90,
  },
  {
    label: "BACKEND",
    value: 48,
  },
];

export function SkillTelemetry() {
  return (
    <div className="relative overflow-hidden border border-white/[0.08] bg-[#0B0B0B] p-6 md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,77,0,0.1),transparent_45%)]" />

      <div className="relative">
        <div className="mb-10 flex items-center justify-between border-b border-white/[0.08] pb-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
            Performance Telemetry
          </span>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse bg-[var(--accent)]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
              Live
            </span>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[390px]">
          <div className="absolute inset-[12%] rounded-full border border-white/[0.08]" />

          <div className="absolute inset-[25%] rounded-full border border-white/[0.08]" />

          <div className="absolute inset-[38%] rounded-full border border-white/[0.08]" />

          <div className="absolute left-1/2 top-[5%] h-[90%] w-px -translate-x-1/2 bg-white/[0.06]" />

          <div className="absolute left-[5%] top-1/2 h-px w-[90%] -translate-y-1/2 bg-white/[0.06]" />

          <motion.div
            initial={{ rotate: -35, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-[18%]"
          >
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full overflow-visible"
            >
              <polygon
                points="50,5 93,37 76,88 24,88 7,37"
                fill="rgba(255,77,0,0.08)"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-[var(--accent)]"
              />
            </svg>
          </motion.div>

          <div className="absolute left-1/2 top-[1%] -translate-x-1/2 font-mono text-[7px] tracking-[0.15em] text-white/20">
            CREATIVE
          </div>

          <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-mono text-[7px] tracking-[0.15em] text-white/20">
            FRONTEND
          </div>

          <div className="absolute bottom-[1%] left-1/2 -translate-x-1/2 font-mono text-[7px] tracking-[0.15em] text-white/20">
            BACKEND
          </div>

          <div className="absolute left-[-2%] top-1/2 -translate-y-1/2 font-mono text-[7px] tracking-[0.15em] text-white/20">
            UI / UX
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[#0B0B0B]"
          >
            <div className="text-center">
              <div className="display-text text-xl text-white">
                85
              </div>

              <div className="font-mono text-[6px] uppercase tracking-[0.15em] text-white/25">
                Overall
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px border border-white/[0.06] bg-white/[0.06]">
          {telemetry.map((item) => (
            <div
              key={item.label}
              className="bg-[#0B0B0B] p-4"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[7px] tracking-[0.15em] text-white/25">
                  {item.label}
                </span>

                <span className="font-mono text-[9px] text-white/50">
                  {item.value}
                </span>
              </div>

              <div className="h-px bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full bg-[var(--accent)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}