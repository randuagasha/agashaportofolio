"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  X,
} from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] overflow-y-auto bg-black/85 p-4 backdrop-blur-md md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.97,
            }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="relative mx-auto mt-4 w-full max-w-6xl overflow-hidden border border-white/10 bg-[#090909] md:mt-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-white/10 bg-black/60 text-white/60 backdrop-blur-md transition-colors hover:border-[var(--accent)] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[16/9] bg-[#111] md:aspect-[16/7]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/20" />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
                    Project / {String(project.id).padStart(2, "0")}
                  </span>

                  <span className="h-px w-8 bg-white/20" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
                    {project.type}
                  </span>
                </div>

                <h2 className="display-text text-4xl font-medium leading-none tracking-[-0.06em] text-white md:text-7xl">
                  {project.title}
                </h2>
              </div>
            </div>

            <div className="grid gap-12 p-6 md:p-10 lg:grid-cols-[1fr_0.6fr]">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Project Overview
                </span>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
                  {project.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-white/[0.08] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-white/40"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/[0.08] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="space-y-5">
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                      Category
                    </span>

                    <p className="mt-2 text-sm text-white/50">
                      {project.category}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                      Year
                    </span>

                    <p className="mt-2 text-sm text-white/50">
                      {project.year}
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3 border border-[var(--accent)] bg-[var(--accent)] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-black transition-colors hover:bg-transparent hover:text-[var(--accent)]"
                    >
                      Live Demo

                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}

                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3 border border-white/10 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-white/60 transition-colors hover:border-white/30 hover:text-white"
                    >
                      GitHub

                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}

                  {project.design && project.design !== "#" && (
                    <a
                      href={project.design}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3 border border-white/10 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-white/60 transition-colors hover:border-white/30 hover:text-white"
                    >
                      Design

                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}