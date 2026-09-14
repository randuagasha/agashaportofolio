"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/projects";
import { ProjectCard } from "./projectCard";
import { ProjectModal } from "./projectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="technical-grid-subtle absolute inset-0 opacity-30" />

        <div className="absolute right-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[var(--accent)]/[0.025] blur-3xl" />

        <div className="absolute left-0 right-0 top-1/3 h-px bg-white/[0.03]" />
        <div className="absolute left-0 right-0 top-2/3 h-px bg-white/[0.03]" />
      </div>

      <div className="container relative">
        <div className="mb-20 flex flex-col justify-between gap-8 md:mb-28 md:flex-row md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
                04 / The Garage
              </span>

              <span className="h-px w-12 bg-[var(--accent)]/40" />
            </div>

            <h2 className="font-[var(--font-space-grotesk)] text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.8] tracking-[-0.07em] text-white">
              Built
              <br />
              <span className="text-white/20">to move.</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="font-mono text-[9px] uppercase leading-5 tracking-[0.15em] text-white/30">
              Selected projects across frontend development, UI/UX design,
              fullstack systems, and digital products.
            </p>
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={
                index % 2 === 1 ? "md:ml-auto md:w-[76%]" : "md:w-[82%]"
              }
            >
              <ProjectCard
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              Project Archive
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              {String(projects.length).padStart(2, "0")} Machines
            </span>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
