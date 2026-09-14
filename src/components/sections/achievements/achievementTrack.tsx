"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AchievementCard } from "./achievementCard";
import { AchievementModal } from "./achievementModal";
import type { Achievement } from "@/lib/achievements";

interface AchievementTrackProps {
  achievements: Achievement[];
}

export function AchievementTrack({
  achievements,
}: AchievementTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  const scrollToCard = (direction: "next" | "prev") => {
    const container = trackRef.current;

    if (!container) return;

    const card = container.querySelector<HTMLElement>(
      `[data-card-index="${activeIndex}"]`,
    );

    const nextIndex =
      direction === "next"
        ? Math.min(activeIndex + 1, achievements.length - 1)
        : Math.max(activeIndex - 1, 0);

    const nextCard = container.querySelector<HTMLElement>(
      `[data-card-index="${nextIndex}"]`,
    );

    if (!nextCard) return;

    nextCard.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveIndex(nextIndex);
  };

  const handleScroll = () => {
    const container = trackRef.current;

    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-card-index]"),
    );

    const center = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  return (
    <>
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-6 pt-2 md:gap-8 md:pb-10"
        >
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              data-card-index={index}
              className="snap-center first:ml-[8vw] last:mr-[8vw] md:first:ml-[calc((100vw-1440px)/2+24px)] md:last:mr-[calc((100vw-1440px)/2+24px)]"
            >
              <AchievementCard
                achievement={achievement}
                index={index}
                onOpen={setSelectedAchievement}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 hidden items-center justify-between md:flex">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToCard("prev")}
              disabled={activeIndex === 0}
              aria-label="Previous certificate"
              className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/50 transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black disabled:pointer-events-none disabled:opacity-20"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => scrollToCard("next")}
              disabled={activeIndex === achievements.length - 1}
              aria-label="Next certificate"
              className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/50 transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black disabled:pointer-events-none disabled:opacity-20"
            >
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              Lap
            </span>

            <div className="h-px w-24 bg-white/10">
              <div
                className="h-full bg-[var(--accent)] transition-all duration-500"
                style={{
                  width: `${((activeIndex + 1) / achievements.length) * 100}%`,
                }}
              />
            </div>

            <span className="font-mono text-[10px] text-white/60">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(achievements.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between md:hidden">
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
            Swipe to explore
          </span>

          <span className="font-mono text-[9px] text-white/40">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(achievements.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <AchievementModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </>
  );
}