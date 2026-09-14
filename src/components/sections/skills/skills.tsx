"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Activity, Gauge, Zap } from "lucide-react";
import { skills } from "@/lib/skills";
import { SkillBar } from "./skillBar";
import { SkillTelemetry } from "./skillTelemetry";

const categories = [
  "All",
  "Frontend",
  "Design",
  "Backend",
  "Mobile",
] as const;

type Category = (typeof categories)[number];

export function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skills;
    }

    return skills.filter(
      (skill) => skill.category === activeCategory,
    );
  }, [activeCategory]);

  const average =
    Math.round(
      skills.reduce((sum, skill) => sum + skill.level, 0) /
        skills.length,
    );

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] py-24 md:py-32 lg:py-40"
    >
      <div className="technical-grid-subtle absolute inset-0 opacity-15" />

      <div className="container relative">
        <div className="mb-16 flex items-center justify-between border-b border-white/[0.08] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              System Telemetry
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            05 / 06
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <Gauge className="h-4 w-4 text-[var(--accent)]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Driver Performance
                </span>
              </div>

              <h2 className="display-text text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.07em] text-white">
                Skills
                <br />
                <span className="text-white/30">under</span>
                <br />
                load.
              </h2>

              <p className="mt-10 max-w-md text-sm leading-7 text-white/35">
                A snapshot of the technologies, tools, and disciplines
                currently powering my work. Some are race-ready.
                Others are still being pushed to their limits.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 gap-px border border-white/[0.07] bg-white/[0.07]">
              <div className="bg-[#050505] p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Activity className="h-3.5 w-3.5 text-[var(--accent)]" />

                  <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">
                    System
                  </span>
                </div>

                <div className="display-text text-3xl text-white">
                  {average}%
                </div>

                <div className="mt-2 font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">
                  Average Level
                </div>
              </div>

              <div className="bg-[#050505] p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-[var(--accent)]" />

                  <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">
                    Stack
                  </span>
                </div>

                <div className="display-text text-3xl text-white">
                  {skills.length}
                </div>

                <div className="mt-2 font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">
                  Active Skills
                </div>
              </div>
            </div>
          </div>

          <div>
            <SkillTelemetry />
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 flex flex-col gap-5 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              Technical Stack
            </span>

            <div className="no-scrollbar flex max-w-full gap-2 overflow-x-auto pb-1">
              {categories.map((category) => {
                const active = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 border px-3 py-2 font-mono text-[8px] uppercase tracking-[0.15em] transition-colors ${
                      active
                        ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                        : "border-white/[0.08] text-white/30 hover:border-white/20 hover:text-white/60"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            layout
            className="grid gap-x-12 lg:grid-cols-2"
          >
            {filteredSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
            System status / operational
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--accent)]">
            Continuous learning enabled
          </span>
        </div>
      </div>
    </section>
  );
}