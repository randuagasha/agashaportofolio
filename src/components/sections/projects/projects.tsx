"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Layers } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { ProjectCard } from "./projectCard";
import { ProjectModal } from "./projectModal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#080808] py-24 md:py-32 lg:py-40"
    >
      <div className="technical-grid-subtle absolute inset-0 opacity-15" />

      <div className="container relative">
        <div className="mb-16 flex items-center justify-between border-b border-white/[0.08] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              Engineering Workbench
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            04 / 06
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <Layers className="h-4 w-4 text-[var(--accent)]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Selected Work
                </span>
              </div>

              <h2 className="display-text text-[clamp(3rem,8vw,8rem)] font-medium leading-[0.82] tracking-[-0.07em] text-white">
                Work
                <br />
                <span className="text-white/30">under</span>
                <br />
                construction.
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex max-w-xs items-center gap-4 lg:pb-2"
          >
            <ArrowDown className="h-4 w-4 shrink-0 text-[var(--accent)]" />

            <p className="font-mono text-[9px] uppercase leading-5 tracking-[0.14em] text-white/25">
              Explore the machines
              <br />
              behind the interface.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured={index === 0}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
            {projects.length} projects archived
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
            Design × Development
          </span>
        </div>
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}