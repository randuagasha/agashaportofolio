"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { HeroBackground } from "./heroBackground";
import { HeroGrid } from "./heroGrid";
import { HeroOrb } from "./heroOrb";
import { HeroRacingLine } from "./heroRacingLine";
import { HeroTelemetry } from "./heroTelemetry";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.9],
    [1, 1, 0],
  );

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const racingOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.8],
    [1, 0.6, 0],
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <motion.div
        style={{
          scale: backgroundScale,
          y: backgroundY,
        }}
        className="absolute inset-0"
      >
        <HeroBackground />
      </motion.div>

      <motion.div
        style={{ opacity: racingOpacity }}
        className="absolute inset-0"
      >
        <HeroRacingLine />
      </motion.div>

      <HeroGrid />
      <HeroOrb />
      <HeroTelemetry />

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="container relative z-10 py-32"
      >
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-[var(--accent)]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            Portfolio / 2026
          </span>
        </div>

        <div className="max-w-[1100px]">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 1,
              ease: "easeOut",
            }}
            className="display-text text-[clamp(3.5rem,9.5vw,10rem)] font-medium leading-[0.8] tracking-[-0.07em] text-white"
          >
            Software
            <br />
            <span className="ml-[8vw] text-white/35">Engineering</span>
            <br />
            <span>
              Student<span className="text-[var(--accent)]">.</span>
            </span>
          </motion.h1>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.8,
            }}
            className="max-w-md text-sm leading-7 text-white/40"
          >
            UI/UX designer and developer focused on creating bold digital
            experiences through design, code, and interaction.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            href="#about"
            className="group inline-flex w-fit items-center gap-3 border border-white/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Explore portfolio
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ArrowDown className="h-3.5 w-3.5 animate-bounce text-white/30" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              Scroll to explore
            </span>
          </div>

          <span className="font-mono text-[9px] text-white/20">01 / 06</span>
        </div>
      </div>
    </section>
  );
}
