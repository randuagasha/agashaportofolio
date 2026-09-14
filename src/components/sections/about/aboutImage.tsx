"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function AboutImage() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#0D0D0D]">
        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/pf.jpg"
            alt="Randu"
            fill
            className="object-cover grayscale"
            sizes="(max-width: 1024px) 90vw, 45vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%)] bg-[length:100%_8px] opacity-20" />

        <div className="absolute left-5 top-5">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
            Driver / 001
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
              Active Profile
            </div>

            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
              Software Engineering
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/30">
              Online
            </span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "34%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute -bottom-3 left-6 h-px bg-[var(--accent)]"
      />

      <div className="absolute -right-3 top-8 hidden h-24 w-px bg-white/10 md:block" />

      <div className="absolute -right-10 top-6 hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 [writing-mode:vertical-rl] md:block">
        Visual / Technical / Digital
      </div>
    </div>
  );
}