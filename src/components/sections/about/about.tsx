"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { AboutImage } from "./aboutImage";
import { AboutStats } from "./aboutStats";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const headingY = useTransform(scrollYProgress, [0, 1], [50, -40]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#080808] py-24 md:py-32 lg:py-40"
    >
      <div className="technical-grid-subtle absolute inset-0 opacity-30" />

      <div className="container relative">
        <div className="mb-16 flex items-center justify-between border-b border-white/[0.08] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              Driver Profile
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            02 / 06
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <motion.div style={{ y: imageY }} className="relative">
            <AboutImage />
          </motion.div>

          <div>
            <motion.div style={{ y: headingY }}>
              <span className="mb-5 block font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
                Software / Design / Engineering
              </span>

              <h2 className="display-text max-w-3xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.84] tracking-[-0.065em] text-white">
                Building
                <br />
                <span className="text-white/30">digital</span>
                <br />
                machines.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mt-12 max-w-xl space-y-6 text-sm leading-7 text-white/40"
            >
              <p>
                Im Randu, a Software Engineering student focused on UI/UX
                design and frontend development. I enjoy turning ideas into
                interfaces that feel intentional, responsive, and alive.
              </p>

              <p>
                My approach combines visual design with engineering. I care
                about the details users notice and the technical decisions they
                dont.
              </p>

              <p>
                Currently exploring deeper frontend architecture, backend
                development, and interaction design while building projects that
                challenge my limits.
              </p>
            </motion.div>

            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group mt-10 inline-flex items-center gap-3 border border-white/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              View selected work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>

        <AboutStats />
      </div>
    </section>
  );
}
