"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";
import type { Achievement } from "@/lib/achievements";

interface AchievementModalProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export function AchievementModal({
  achievement,
  onClose,
}: AchievementModalProps) {
  useEffect(() => {
    if (!achievement) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92svh] w-full max-w-7xl flex-col overflow-hidden border border-white/10 bg-[#080808] lg:flex-row"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close certificate"
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center border border-white/10 bg-black/70 text-white/60 backdrop-blur transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
        >
          <X size={17} strokeWidth={1.5} />
        </button>

        <div className="relative min-h-[45vh] flex-1 bg-[#111] lg:min-h-0">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-contain p-5 md:p-10"
          />

          <div className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
            <Maximize2 size={11} />
            Certificate Preview
          </div>
        </div>

        <aside className="w-full border-t border-white/10 p-6 md:p-8 lg:w-[320px] lg:border-l lg:border-t-0">
          <div className="flex h-full flex-col">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
                Record / {String(achievement.id).padStart(2, "0")}
              </span>

              <h2 className="mt-5 font-[var(--font-space-grotesk)] text-2xl font-medium tracking-tight text-white">
                {achievement.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/40">
                {achievement.description}
              </p>
            </div>

            <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Issuer
                </span>
                <p className="mt-1 text-sm text-white/70">
                  {achievement.issuer}
                </p>
              </div>

              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Date
                </span>
                <p className="mt-1 font-mono text-sm text-white/70">
                  {achievement.date}
                </p>
              </div>

              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Classification
                </span>
                <p className="mt-1 text-sm text-white/70">
                  {achievement.category}
                </p>
              </div>
            </div>

            <div className="mt-auto hidden border-t border-white/10 pt-6 lg:block">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] leading-5 text-white/25">
                ESC TO CLOSE
                <br />
                CLICK OUTSIDE TO RETURN
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}