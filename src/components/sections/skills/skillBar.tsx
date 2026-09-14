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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group border-b border-white/10 py-5"
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-white/30">
            0{index + 1}
          </span>

          <span className="text-sm font-medium text-white">
            {skill.name}
          </span>
        </div>

        <span className="font-mono text-xs text-white/50">
          {skill.level}%
        </span>
      </div>

      <div className="h-[2px] w-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15 + index * 0.05,
            duration: 0.9,
            ease: "easeOut",
          }}
          className="h-full bg-[var(--accent)]"
        />
      </div>

      <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-widest text-white/25">
        <span>{skill.category}</span>
        <span>{skill.status}</span>
      </div>
    </motion.div>
  );
}