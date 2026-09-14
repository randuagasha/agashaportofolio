"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Mail,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/randuagasha",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/randuagasha13//",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/randuagasha",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 py-24 md:py-32"
    >
      <div className="technical-grid absolute inset-0 opacity-20" />

      <div className="container relative">
        <div className="mb-16 flex items-center gap-3">
          <span className="font-mono text-xs text-[var(--accent)]">
            06 / Pit Wall
          </span>

          <span className="h-px w-10 bg-[var(--accent)]" />

          <span className="font-mono text-[9px] uppercase tracking-widest text-white/20">
            Communication Channel
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-text max-w-xl text-6xl font-medium leading-[0.88] tracking-[-0.06em] text-white md:text-8xl"
            >
              Let&apos;s
              <br />
              <span className="text-white/30">make it</span>
              <br />
              move.
            </motion.h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
              Have a project, collaboration, or idea worth building? Send a
              transmission and let&apos;s turn it into something real.
            </p>

            <div className="mt-10 border-y border-white/10 py-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                  Current Status
                </span>

                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
                  Available
                </span>
              </div>
            </div>

            <a
              href="mailto:your@email.com"
              className="group mt-8 inline-flex items-center gap-3 text-sm text-white transition-colors hover:text-[var(--accent)]"
            >
              <Mail className="h-4 w-4" />
              <span>randukeola@email.com</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <div className="mt-10 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 border border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-white/50 transition-colors hover:border-[var(--accent)] hover:text-white"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border border-white/10 bg-[#080808]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                Transmission Form
              </span>

              <span className="font-mono text-[9px] text-white/20">
                SECURE CHANNEL
              </span>
            </div>

            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center px-6 text-center">
                <CheckCircle2 className="h-10 w-10 text-[var(--accent)]" />

                <span className="mt-6 font-mono text-xs uppercase tracking-widest text-white">
                  Transmission Received
                </span>

                <p className="mt-3 max-w-xs text-sm leading-6 text-white/35">
                  Your message has been queued successfully.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-mono text-[10px] uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 md:p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    label="01 / Name"
                    name="name"
                    placeholder="Your name"
                    required
                  />

                  <Field
                    label="02 / Email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="mt-6">
                  <Field
                    label="03 / Subject"
                    name="subject"
                    placeholder="Project inquiry"
                    required
                  />
                </div>

                <div className="mt-6">
                  <label className="block">
                    <span className="mb-3 block font-mono text-[9px] uppercase tracking-widest text-white/30">
                      04 / Message
                    </span>

                    <textarea
                      name="message"
                      required
                      rows={7}
                      placeholder="Tell me about your project..."
                      className="w-full resize-none border border-white/10 bg-transparent px-4 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[var(--accent)]"
                    />
                  </label>
                </div>

                <div className="mt-8 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                  <span className="max-w-xs font-mono text-[9px] uppercase leading-relaxed tracking-widest text-white/20">
                    By sending this form you initiate a direct communication
                    channel.
                  </span>

                  <button
                    type="submit"
                    className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[var(--accent)] px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-black transition-transform hover:-translate-y-1"
                  >
                    Send Transmission
                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-3 block font-mono text-[9px] uppercase tracking-widest text-white/30">
        {label}
      </span>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border border-white/10 bg-transparent px-4 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[var(--accent)]"
      />
    </label>
  );
}
