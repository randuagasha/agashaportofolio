"use client";

import { motion } from "motion/react";

interface AchievementTrackProps {
  count: number;
  activeIndex: number;
}

export function AchievementTrack({
  count,
  activeIndex,
}: AchievementTrackProps) {
  return (
    <div className="relative mb-12 hidden md:block">
      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/[0.08]" />

      <motion.div
        className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-[var(--accent)]"
        animate={{
          width: `${((activeIndex + 1) / count) * 100}%`,
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative flex justify-between">
        {Array.from({ length: count }).map((_, index) => {
          const active = index <= activeIndex;

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
            >
              <motion.div
                animate={{
                  scale: active ? 1 : 0.75,
                  backgroundColor: active
                    ? "var(--accent)"
                    : "rgba(255,255,255,0.12)",
                }}
                className="h-2 w-2"
              />

              <span
                className={`font-mono text-[8px] tracking-[0.15em] ${
                  active ? "text-white/50" : "text-white/15"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}