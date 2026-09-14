"use client";

import { motion } from "motion/react";

const telemetry = [
  {
    label: "SYSTEM",
    value: "ONLINE",
  },
  {
    label: "MODE",
    value: "CREATIVE",
  },
  {
    label: "STATUS",
    value: "AVAILABLE",
  },
];

export function HeroTelemetry() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      <div className="absolute bottom-10 left-10">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
            Live telemetry
          </span>
        </div>

        <div className="flex gap-6">
          {telemetry.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
                {item.label}
              </p>

              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/60">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2">
        <div className="flex flex-col items-end gap-2">
          <span className="font-mono text-[8px] tracking-[0.2em] text-white/20">
            LAT
          </span>

          <span className="font-mono text-[10px] tracking-[0.15em] text-white/40">
            -06.4025
          </span>

          <span className="mt-2 font-mono text-[8px] tracking-[0.2em] text-white/20">
            LON
          </span>

          <span className="font-mono text-[10px] tracking-[0.15em] text-white/40">
            106.7942
          </span>
        </div>
      </div>

      <div className="absolute left-1/2 top-28 -translate-x-1/2">
        <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">
          06°24′09″S / 106°47′39″E
        </p>
      </div>
    </div>
  );
}