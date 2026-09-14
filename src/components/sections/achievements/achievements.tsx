"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Trophy } from "lucide-react";
import { achievements, type Achievement } from "@/lib/achievements";
import { AchievementCard } from "./achievementCard";
import { AchievementModal } from "./achievementModal";
import { AchievementTrack } from "./achievementTrack";

export function Achievements() {
  const [selected, setSelected] = useState<Achievement | null>(null);

  return (
    <section
      id="achievements"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] py-24 md:py-32 lg:py-40"
    >
      <div className="technical-grid-subtle absolute inset-0 opacity-20" />

      <div className="container relative">
        <div className="mb-16 flex items-center justify-between border-b border-white/[0.08] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              Championship Record
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            03 / 06
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <Trophy className="h-4 w-4 text-[var(--accent)]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Performance History
                </span>
              </div>

              <h2 className="display-text text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.84] tracking-[-0.065em] text-white">
                Built.
                <br />
                <span className="text-white/30">Learned.</span>
                <br />
                Proven.
              </h2>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="max-w-lg justify-self-end text-sm leading-7 text-white/35"
          >
            A collection of certifications, competitions, and milestones
            collected throughout my journey in software engineering,
            UI/UX design, and digital product development.
          </motion.p>
        </div>

        <div className="mt-20">
          <AchievementTrack
            count={achievements.length}
            activeIndex={achievements.length - 1}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
                onClick={() => setSelected(achievement)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/[0.08] pt-5">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
            {achievements.length} records archived
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
            2025 — 2026
          </span>
        </div>
      </div>

      <AchievementModal
        achievement={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}