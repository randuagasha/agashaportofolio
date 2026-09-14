"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-h-[94svh] w-full max-w-6xl overflow-y-auto border border-white/10 bg-[#080808]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project"
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center border border-white/10 bg-black/70 text-white/60 backdrop-blur transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
        >
          <X size={17} strokeWidth={1.5} />
        </button>

        <div className="relative aspect-[16/9] overflow-hidden bg-[#111]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-16 md:bottom-10 md:left-10">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
              Project / {String(project.id).padStart(2, "0")}
            </span>

            <h2 className="mt-3 font-[var(--font-space-grotesk)] text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.85] tracking-[-0.06em] text-white">
              {project.shortTitle}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_320px]">
          <div className="p-6 md:p-10">
            <div className="max-w-2xl">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                Overview
              </span>

              <p className="mt-5 text-base leading-7 text-white/55 md:text-lg md:leading-8">
                {project.description}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="border border-white/10 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.15em] text-white/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="border-t border-white/10 p-6 md:border-l md:border-t-0 md:p-10">
            <div className="space-y-6">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Project Type
                </span>
                <p className="mt-2 text-sm text-white/70">
                  {project.type}
                </p>
              </div>

              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Role
                </span>
                <p className="mt-2 text-sm text-white/70">
                  {project.role}
                </p>
              </div>

              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Year
                </span>
                <p className="mt-2 font-mono text-sm text-white/70">
                  {project.year}
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-[var(--accent)] bg-[var(--accent)] px-4 py-3 text-xs font-medium text-black transition hover:bg-transparent hover:text-[var(--accent)]"
                >
                  <span>
                    {project.figmaUrl ? "View Prototype" : "Live Demo"}
                  </span>
                  <ArrowUpRight size={15} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-white/10 px-4 py-3 text-xs text-white/60 transition hover:border-white/30 hover:text-white"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={15} />
                </a>
              )}

              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-white/10 px-4 py-3 text-xs text-white/60 transition hover:border-white/30 hover:text-white"
                >
                  <span>Figma Design</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}