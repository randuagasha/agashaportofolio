"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import type { Achievement } from "@/lib/achievements";

interface AchievementModalProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export function AchievementModal({
  achievement,
  onClose,
}: AchievementModalProps) {
  return (
    <AnimatePresence>
      {achievement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90svh] w-full max-w-5xl overflow-y-auto border border-white/10 bg-[#0A0A0A]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close achievement"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-white/10 bg-black/60 text-white/60 backdrop-blur-sm transition-colors hover:border-[var(--accent)] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[280px] bg-[#111] lg:min-h-[620px]">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              <div className="flex flex-col justify-between p-6 md:p-10">
                <div>
                  <div className="mb-8 flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
                      Achievement Record
                    </span>

                    <span className="font-mono text-[9px] text-white/25">
                      {achievement.year}
                    </span>
                  </div>

                  <h3 className="display-text text-3xl font-medium leading-[0.95] tracking-[-0.04em] text-white md:text-5xl">
                    {achievement.title}
                  </h3>

                  <div className="mt-8 space-y-5">
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                        Issued by
                      </span>

                      <p className="mt-2 text-sm text-white/60">
                        {achievement.issuer}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                        Category
                      </span>

                      <p className="mt-2 text-sm text-white/60">
                        {achievement.category}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                        Record
                      </span>

                      <p className="mt-2 text-sm leading-7 text-white/40">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                  <span className="h-1.5 w-1.5 bg-[var(--accent)]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                    Verified portfolio record
                  </span>

                  <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-white/20" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}