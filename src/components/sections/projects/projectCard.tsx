"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({
  project,
  index,
  onOpen,
}: ProjectCardProps) {
  return (
    <article
      className="group relative w-full cursor-pointer"
      onClick={() => onOpen(project)}
    >
      <div className="relative overflow-hidden border border-white/10 bg-[#090909]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 65vw"
            className="object-cover object-center grayscale transition duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]" />

          <div className="absolute left-5 top-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 md:left-7 md:top-7">
            <span className="text-[var(--accent)]">
              {String(project.id).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>{project.type}</span>
          </div>

          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/15 bg-black/30 text-white/60 backdrop-blur-sm transition duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black md:right-7 md:top-7">
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </div>

          <div className="absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-7">
            <div className="mb-3 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
              <span>{project.year}</span>
              <span className="h-px w-8 bg-white/20" />
              <span>{project.role}</span>
            </div>

            <h3 className="font-[var(--font-space-grotesk)] text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.9] tracking-[-0.05em] text-white">
              {project.shortTitle}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-white/10">
          <div className="border-r border-white/10 p-4 md:p-5">
            <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
              Stack
            </span>

            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/55"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-end justify-between p-4 md:p-5">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
              Open project
            </span>

            <span className="font-mono text-[9px] text-[var(--accent)]">
              ↗
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}