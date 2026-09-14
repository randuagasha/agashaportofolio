"use client";

import { motion } from "motion/react";
import type { Skill } from "@/lib/skills";

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
      }}
      className="group border-b border-white/[0.07] py-5"
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="font-mono text-[8px] text-white/20">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="truncate text-sm text-white/65 transition-colors group-hover:text-white">
            {skill.name}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/20">
            {skill.status}
          </span>

          <span className="font-mono text-xs text-white/60">
            {skill.level}%
          </span>
        </div>
      </div>

      <div className="relative h-[2px] w-full overflow-hidden bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.15 + index * 0.05,
            ease: "easeOut",
          }}
          className="absolute inset-y-0 left-0 bg-[var(--accent)]"
        />

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.min(skill.level + 8, 100)}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.25 + index * 0.05,
            ease: "easeOut",
          }}
          className="absolute inset-y-0 left-0 bg-white/20 blur-[2px]"
        />
      </div>
    </motion.div>
  );
}