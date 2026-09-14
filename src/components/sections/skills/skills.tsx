"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { skills } from "@/lib/skills";
import { SkillBar } from "./skillBar";
import { SkillTelemetry } from "./skillTelemetry";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 py-24 md:py-32"
    >
      <div className="technical-grid absolute inset-0 opacity-30" />

      <div className="container relative">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="font-mono text-xs text-[var(--accent)]">
                05 / Technical Telemetry
              </span>

              <span className="h-px w-10 bg-[var(--accent)]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="display-text max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-white md:text-7xl"
            >
              Built for
              <br />
              <span className="text-white/30">performance.</span>
            </motion.h2>
          </div>

          <div className="max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-wider text-white/30">
            Technical profile / Current season
            <br />
            Monitoring active disciplines,
            <br />
            development stack & capabilities.
          </div>
        </div>

        <SkillTelemetry />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-[10px] text-white/30">
                  ENGINE DIAGNOSTICS
                </span>

                <h3 className="mt-2 text-lg font-medium text-white">
                  Skill Load
                </h3>
              </div>

              <span className="font-mono text-[9px] text-[var(--accent)]">
                LIVE
              </span>
            </div>

            <div className="space-y-1">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden border border-white/10 bg-[#080808]">
            <div className="absolute inset-0 technical-grid-subtle opacity-40" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-72 w-72 rounded-full border border-dashed border-white/10"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-52 w-52 rounded-full border border-dashed border-[var(--accent)]/30"
            />

            <div className="relative text-center">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
                System Performance
              </span>

              <div className="my-4 font-mono text-7xl font-medium tracking-[-0.08em] text-white">
                85
                <span className="text-2xl text-white/30">%</span>
              </div>

              <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-[var(--accent)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
                System Active
              </span>
            </div>

            <div className="absolute left-5 top-5 font-mono text-[9px] text-white/20">
              CORE / 01
            </div>

            <div className="absolute bottom-5 right-5 font-mono text-[9px] text-white/20">
              LOAD / 085
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/25">
            Constantly learning / constantly improving
          </span>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:text-[var(--accent)]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}