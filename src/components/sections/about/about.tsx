"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { AboutImage } from "./aboutImage";
import { AboutStats } from "./aboutStats";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 py-24 md:py-36"
    >
      <div className="container">
        <div className="mb-16 flex items-end justify-between md:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--accent)]">
                02 / About
              </span>

              <span className="h-px w-10 bg-[var(--accent)]/40" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="display-text mt-5 text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.85]"
            >
              Driver
              <br />
              Profile
            </motion.h2>
          </div>

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-white/20 md:block">
            Identity / 001
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <AboutImage />

          <div className="flex flex-col justify-between">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]"
              >
                Software Engineering Student
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="display-text mt-5 max-w-3xl text-[clamp(2rem,4vw,4rem)] uppercase leading-[0.95]"
              >
                Designing interfaces.
                <br />
                Building experiences.
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                }}
                className="mt-8 max-w-2xl space-y-5 text-sm leading-7 text-white/40 md:text-base"
              >
                <p>
                  I&apos;m Keola Randu Agasha, a Software Engineering student
                  focused on UI/UX design and frontend development.
                </p>

                <p>
                  I enjoy turning ideas into interfaces that feel intentional,
                  interactive, and visually distinctive. My current focus is
                  building modern web experiences with React, Next.js, and
                  TypeScript while continuously improving my design and
                  engineering skills.
                </p>
              </motion.div>
            </div>

            <div className="mt-12">
              <AboutStats />

              <motion.a
                href="#projects"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                className="group mt-8 flex w-fit items-center gap-3"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 group-hover:text-white">
                  View selected work
                </span>

                <ArrowUpRight className="h-4 w-4 text-[var(--accent)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-40 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/[0.025] md:block" />
    </section>
  );
}
