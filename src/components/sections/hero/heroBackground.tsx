"use client";

import { motion } from "motion/react";
import { HeroCar } from "./heroCar";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(255,77,0,0.12),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.035),transparent_25%)]" />

      <HeroCar />

      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 1.4, ease: "easeOut" }}
        className="absolute bottom-[18%] left-[-5%] h-px w-[55%] rotate-[-12deg] bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent blur-[1px]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1.5 }}
        className="absolute bottom-[22%] left-[5%] h-px w-[35%] rotate-[-12deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#050505_88%)]" />

      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
