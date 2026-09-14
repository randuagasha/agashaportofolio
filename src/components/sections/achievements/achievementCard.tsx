"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Achievement } from "@/lib/achievements";
interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  onOpen: (achievement: Achievement) => void;
}

export function AchievementCard({
  achievement,
  index,
  onOpen,
}: AchievementCardProps) {
  return (
    <article
      className="group relative w-[82vw] shrink-0 md:w-[540px] lg:w-[620px]"
      onClick={() => onOpen(achievement)}
    >
      <button
        type="button"
        className="block w-full cursor-pointer text-left"
        aria-label={`View ${achievement.title}`}
      >
        <div className="relative aspect-[1.42/1] overflow-hidden border border-white/10 bg-[#0b0b0b]">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            sizes="(max-width: 768px) 82vw, 620px"
            className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.035] group-hover:grayscale-0"
          />

          <div className="absolute inset-0 z-20 border border-transparent transition duration-500 group-hover:border-[var(--accent)]/60" />

          <div className="absolute left-4 top-4 z-30 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            <span className="text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>Record</span>
          </div>

          <div className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center border border-white/15 bg-black/30 text-white/50 backdrop-blur-sm transition duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black">
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-30 p-5 md:p-7">
            <div className="mb-3 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
              <span>{achievement.category}</span>
              <span className="h-px w-8 bg-white/20" />
              <span>{achievement.date}</span>
            </div>

            <h3 className="max-w-lg font-[var(--font-space-grotesk)] text-xl font-medium tracking-tight text-white md:text-2xl">
              {achievement.title}
            </h3>

            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
              {achievement.issuer}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
            Achievement / {String(index + 1).padStart(2, "0")}
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30 transition-colors group-hover:text-[var(--accent)]">
            View certificate
          </span>
        </div>
      </button>
    </article>
  );
}