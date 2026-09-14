"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Achievement } from "@/lib/achievements";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  onClick: () => void;
}

export function AchievementCard({
  achievement,
  index,
  onClick,
}: AchievementCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
      }}
      className="group relative w-full text-left"
    >
      <div className="relative overflow-hidden border border-white/[0.08] bg-[#0B0B0B] transition-colors duration-500 group-hover:border-[var(--accent)]/40">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 767px) 90vw, (max-width: 1024px) 45vw, 30vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

          <div className="absolute left-4 top-4 font-mono text-[9px] tracking-[0.2em] text-white/50">
            RECORD / {String(index + 1).padStart(2, "0")}
          </div>

          <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border border-white/20 bg-black/30 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-3.5 w-3.5 text-white" />
          </div>

          <div className="absolute bottom-4 left-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--accent)]">
              {achievement.category}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
              {achievement.issuer}
            </span>

            <span className="font-mono text-[9px] text-white/30">
              {achievement.year}
            </span>
          </div>

          <h3 className="display-text text-lg font-medium tracking-[-0.03em] text-white">
            {achievement.title}
          </h3>

          <div className="mt-5 h-px w-full bg-white/[0.06]">
            <div className="h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-1/3" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}