"use client";

import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

import { HeroGrid } from "./heroGrid";
import { HeroOrb } from "./heroOrb";
import { HeroTelemetry } from "./heroTelemetry";

const titleWords = ["Software", "Engineering", "Student"];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <HeroGrid />
      <HeroOrb />
      <HeroTelemetry />

      <div className="container relative z-20">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--accent)]">
              Portfolio / 2026
            </span>

            <span className="h-px w-10 bg-[var(--accent)]/40" />

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
              01 / 05
            </span>
          </motion.div>

          <h1 className="display-text relative uppercase">
            {titleWords.map((word, index) => (
              <span
                key={word}
                className="block overflow-hidden"
              >
                <motion.span
                  initial={{
                    y: "110%",
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.65 + index * 0.12,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className={`block text-[clamp(3.5rem,10vw,10rem)] leading-[0.82] ${
                    index === 1 ? "text-white" : "text-white/90"
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-sm leading-7 text-white/40 md:text-base">
              UI/UX designer and developer focused on creating bold digital
              experiences through design, code, and interaction.
            </p>

            <a
              href="#about"
              className="group flex w-fit items-center gap-4"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 group-hover:text-white">
                Explore portfolio
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]">
                <ArrowDownRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.8,
        }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
            Scroll
          </span>

          <motion.div
            animate={{
              scaleY: [0, 1, 0],
              transformOrigin: ["top", "top", "bottom"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-12 w-px bg-gradient-to-b from-[var(--accent)] to-transparent"
          />
        </div>
      </motion.div>

      <div className="absolute bottom-8 right-8 z-20 hidden md:block">
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
          Scroll to explore ↓
        </span>
      </div>
    </section>
  );
}