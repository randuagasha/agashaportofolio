"use client";

import { motion } from "motion/react";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(255,77,0,0.12),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.035),transparent_25%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-y-0 right-[-12%] w-[75%] md:right-[-5%] md:w-[65%]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.055),transparent_55%)]" />

        <div className="absolute right-[15%] top-[28%] h-[35%] w-[55%] rounded-[50%] border border-white/[0.035] blur-[1px]" />

        <div className="absolute right-[18%] top-[32%] h-[28%] w-[48%] rounded-[50%] border border-[var(--accent)]/[0.08] blur-[2px]" />
      </motion.div>

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