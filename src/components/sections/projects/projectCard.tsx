"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
  onClick: () => void;
}

export function ProjectCard({
  project,
  index,
  featured = false,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      className={`group relative w-full text-left ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative overflow-hidden border border-white/[0.08] bg-[#0A0A0A] transition-colors duration-500 group-hover:border-[var(--accent)]/40">
        <div
          className={`relative overflow-hidden bg-[#111] ${
            featured
              ? "aspect-[16/8] md:aspect-[16/7]"
              : "aspect-[16/10]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 90vw"
                : "(max-width: 768px) 100vw, 45vw"
            }
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49.9%,rgba(255,255,255,0.04)_50%,transparent_50.1%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute left-5 top-5 flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-[0.2em] text-white/50">
              PROJECT / {String(project.id).padStart(2, "0")}
            </span>

            <span className="h-px w-6 bg-white/20" />

            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--accent)]">
              {project.type}
            </span>
          </div>

          <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-white/10 bg-black/30 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4 text-white" />
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-end justify-between gap-5">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
                  {project.category}
                </span>

                <h3
                  className={`display-text mt-2 font-medium leading-none tracking-[-0.05em] text-white ${
                    featured
                      ? "text-4xl md:text-6xl lg:text-7xl"
                      : "text-3xl md:text-4xl"
                  }`}
                >
                  {project.title}
                </h3>
              </div>

              <span className="font-mono text-[9px] text-white/30">
                {project.year}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <p className="max-w-2xl text-xs leading-6 text-white/35">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="border border-white/[0.08] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/30"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-700 group-hover:w-full" />
      </div>
    </motion.button>
  );
}