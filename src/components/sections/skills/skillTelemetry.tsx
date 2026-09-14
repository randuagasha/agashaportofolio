"use client";

import { motion } from "motion/react";
import { Activity, Cpu, Gauge, Zap } from "lucide-react";
import { skills } from "@/lib/skills";

const telemetry = [
  {
    label: "UI / UX",
    value: "90",
    icon: Activity,
  },
  {
    label: "FRONTEND",
    value: "85",
    icon: Cpu,
  },
  {
    label: "ENGINEERING",
    value: "72",
    icon: Gauge,
  },
  {
    label: "MOBILE",
    value: "40",
    icon: Zap,
  },
];

export function SkillTelemetry() {
  return (
    <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {telemetry.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="bg-[#050505] p-5"
          >
            <div className="mb-8 flex items-center justify-between">
              <Icon className="h-4 w-4 text-[var(--accent)]" />

              <span className="font-mono text-[9px] text-white/25">
                SYS.0{index + 1}
              </span>
            </div>

            <p className="font-mono text-[10px] tracking-widest text-white/40">
              {item.label}
            </p>

            <div className="mt-2 flex items-end gap-1">
              <span className="font-mono text-3xl text-white">
                {item.value}
              </span>

              <span className="mb-1 font-mono text-xs text-white/30">
                %
              </span>
            </div>

            <div className="mt-4 h-px bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-[var(--accent)]"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}