"use client";

import { achievements } from "@/lib/achievements";
import { AchievementTrack } from "./achievementTrack";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden border-t border-white/10 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/[0.025] blur-3xl" />

        <div className="technical-grid-subtle absolute inset-0 opacity-30" />

        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/[0.035]" />
      </div>

      <div className="relative">
        <div className="container">
          <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  03 / Race Record
                </span>

                <span className="h-px w-12 bg-[var(--accent)]/40" />
              </div>

              <h2 className="max-w-4xl font-[var(--font-space-grotesk)] text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.06em] text-white">
                Proof of
                <br />
                <span className="text-white/20">Progress.</span>
              </h2>
            </div>

            <div className="max-w-xs">
              <p className="font-mono text-[9px] uppercase leading-5 tracking-[0.15em] text-white/30">
                A collection of certifications, milestones, and achievements
                collected throughout the current development season.
              </p>
            </div>
          </div>
        </div>

        <AchievementTrack achievements={achievements} />

        <div className="container mt-12">
          <div className="flex items-center justify-between border-t border-white/10 pt-5">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              Performance Archive
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              {String(achievements.length).padStart(2, "0")} Records
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}