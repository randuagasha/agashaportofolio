"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-40 w-full">
      <nav className="container flex h-20 items-center justify-between">
        <a
          href="#"
          className="display-text text-lg tracking-[-0.04em]"
          aria-label="Randu home"
        >
          Agasha.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[11px] font-medium uppercase tracking-[0.16em] text-white/55 transition-colors duration-300 hover:text-white"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] md:flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
          Available
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`absolute top-20 left-0 w-full border-y border-white/10 bg-[#050505]/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="container flex flex-col py-6">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavigate}
              className="flex items-center justify-between border-b border-white/10 py-5 text-sm uppercase tracking-[0.12em]"
            >
              <span>{item.label}</span>

              <span className="font-mono text-[10px] text-white/30">
                0{index + 1}
              </span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
