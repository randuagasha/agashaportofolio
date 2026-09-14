"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + Math.floor(Math.random() * 8) + 3, 100);

        if (next >= 100) {
          window.clearInterval(interval);

          window.setTimeout(() => {
            setComplete(true);
          }, 400);
        }

        return next;
      });
    }, 70);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={
        complete ? { opacity: 0, pointerEvents: "none" } : { opacity: 1 }
      }
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex min-h-screen items-end bg-[#050505] p-6 md:p-10"
    >
      <div className="w-full">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/35">
              Portfolio System
            </p>

            <p className="display-text mt-2 text-2xl uppercase md:text-4xl">
              Randu
            </p>
          </div>

          <span className="font-mono text-xs text-white/40">
            {String(progress).padStart(3, "0")}%
          </span>
        </div>

        <div className="h-px w-full overflow-hidden bg-white/10">
          <motion.div
            className="h-full bg-[var(--accent)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 flex justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
          <span>Initializing interface</span>
          <span>2026</span>
        </div>
      </div>
    </motion.div>
  );
}
