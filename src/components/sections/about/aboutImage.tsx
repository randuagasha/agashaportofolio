"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#0c0c0c]">
        <Image
          src="/images/pf.jpg"
          alt="Keola Randu Agasha"
          fill
          priority={false}
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="absolute left-5 top-5">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">
            Driver Profile
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
              Driver No.
            </p>

            <p className="display-text mt-1 text-4xl">12</p>
          </div>

          <div className="text-right">
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
              Status
            </p>

            <div className="mt-1 flex items-center justify-end gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/60">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-3 -right-3 hidden h-20 w-20 border-b border-r border-[var(--accent)] md:block" />

      <div className="absolute -left-3 -top-3 hidden h-20 w-20 border-l border-t border-white/20 md:block" />
    </motion.div>
  );
}
