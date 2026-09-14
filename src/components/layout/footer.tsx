"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ChevronUp } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/randuagasha",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/randuagasha13/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/randuagasha/",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#030303]">
      <div className="technical-grid-subtle absolute inset-0 opacity-30" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-linear-to-r from-transparent via-[var(--accent)]/50 to-transparent" />

      <div className="container relative z-10">
        <div className="border-b border-white/6 py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--accent)]" />

                <span className="mono-text text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Race Control / System Online
                </span>
              </div>

              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.25 }}
                className="group inline-block"
              >
                <span className="display-text block text-[clamp(4rem,11vw,10rem)] font-medium leading-[0.75] tracking-[-0.08em] text-white">
                  Agasha<span className="text-[var(--accent)]">.</span>
                </span>
              </motion.a>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/30">
                Software engineering student building interfaces where design,
                technology, and motion meet.
              </p>
            </div>

            <a
              href="#hero"
              className="group flex w-fit items-center gap-4 border border-white/8 px-5 py-4 transition-colors hover:border-[var(--accent)]"
            >
              <span className="mono-text text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors group-hover:text-white">
                Back to grid
              </span>

              <ChevronUp className="h-4 w-4 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[var(--accent)]" />
            </a>
          </div>
        </div>

        <div className="grid gap-12 border-b border-white/6 py-12 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:gap-24">
          <div>
            <span className="mono-text text-[9px] uppercase tracking-[0.2em] text-white/20">
              Navigation
            </span>

            <nav className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:max-w-md">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-white/35 transition-colors hover:text-white"
                >
                  <span className="h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-3" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <span className="mono-text text-[9px] uppercase tracking-[0.2em] text-white/20">
              Social
            </span>

            <div className="mt-6 flex flex-col gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-sm text-white/35 transition-colors hover:text-white"
                >
                  {social.label}

                  <ArrowUpRight className="h-3 w-3 text-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="mono-text text-[9px] uppercase tracking-[0.2em] text-white/20">
              System
            </span>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="mono-text text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Available for work
                </span>
              </div>

              <span className="mono-text block text-[9px] uppercase tracking-[0.15em] text-white/15">
                Build / Next.js
              </span>

              <span className="mono-text block text-[9px] uppercase tracking-[0.15em] text-white/15">
                Engine / TypeScript
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="mono-text text-[8px] uppercase tracking-[0.18em] text-white/15">
              © {currentYear} randuagasha
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/10 sm:block" />

            <span className="mono-text text-[8px] uppercase tracking-[0.18em] text-white/15">
              All systems operational
            </span>
          </div>

          <span className="mono-text text-[8px] uppercase tracking-[0.18em] text-white/10">
            Designed & Engineered in Indonesia
          </span>
        </div>
      </div>
    </footer>
  );
}