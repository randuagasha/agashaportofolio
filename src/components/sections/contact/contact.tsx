"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Mail,
  Send,
} from "lucide-react";

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
    href: "https://www.instagram.com/randuagasha",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/6 bg-[#050505] py-24 md:py-32 lg:py-40"
    >
      <div className="technical-grid-subtle absolute inset-0 opacity-40" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/6 blur-[140px]" />

      <div className="container relative z-10">
        <div className="mb-14 flex items-center justify-between md:mb-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />
            <span className="mono-text text-[10px] uppercase tracking-[0.25em] text-white/35">
              06 / 06 — Communication
            </span>
          </div>

          <span className="hidden mono-text text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">
            Radio Control / Online
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mono-text mb-6 text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
                Pit Wall / Open Channel
              </p>

              <h2 className="display-text max-w-3xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.82] tracking-[-0.07em] text-white">
                Let&apos;s
                <br />
                <span className="text-white/30">talk.</span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/40 md:text-base">
                Have a project, idea, or opportunity in mind? Send a message
                through the channel and let&apos;s build something worth
                putting on the grid.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-10"
            >
              <a
                href="mailto:randukeola@gmail.com"
                className="group inline-flex items-center gap-3 border-b border-white/15 pb-3 text-sm text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Mail className="h-4 w-4" />
                <span>randukeola@gmail.com</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </motion.div>

            <div className="mt-14">
              <span className="mono-text text-[9px] uppercase tracking-[0.2em] text-white/20">
                Social channels
              </span>

              <div className="mt-5 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 border border-white/8 px-4 py-3 mono-text text-[9px] uppercase tracking-[0.15em] text-white/45 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {social.label}
                    <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-white/10 via-transparent to-[var(--accent)]/20" />

            <div className="relative border border-white/8 bg-[#080808]/90 p-5 sm:p-7 md:p-9">
              <div className="mb-8 flex items-center justify-between border-b border-white/6 pb-5">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
                  <span className="mono-text text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Transmission Console
                  </span>
                </div>

                <span className="mono-text text-[9px] text-white/20">
                  CH.01
                </span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[430px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="h-12 w-12 text-[var(--accent)]" />

                  <span className="mono-text mt-7 text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
                    Transmission Received
                  </span>

                  <h3 className="display-text mt-4 text-3xl tracking-[-0.04em] text-white">
                    Message locked in.
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/35">
                    Thanks for reaching out. I&apos;ll get back to you as soon
                    as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 border border-white/10 px-5 py-3 mono-text text-[9px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid gap-7 sm:grid-cols-2">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="mono-text mb-3 block text-[9px] uppercase tracking-[0.2em] text-white/25"
                      >
                        01 / Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/15 transition-colors focus:border-[var(--accent)]"
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="email"
                        className="mono-text mb-3 block text-[9px] uppercase tracking-[0.2em] text-white/25"
                      >
                        02 / Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/15 transition-colors focus:border-[var(--accent)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mono-text mb-3 block text-[9px] uppercase tracking-[0.2em] text-white/25"
                    >
                      03 / Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Project inquiry"
                      className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/15 transition-colors focus:border-[var(--accent)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mono-text mb-3 block text-[9px] uppercase tracking-[0.2em] text-white/25"
                    >
                      04 / Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full resize-none border-b border-white/10 bg-transparent py-3 text-sm leading-7 text-white outline-none placeholder:text-white/15 transition-colors focus:border-[var(--accent)]"
                    />
                  </div>

                  <div className="flex flex-col gap-5 border-t border-white/6 pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="mono-text text-[8px] uppercase tracking-[0.15em] text-white/25">
                        Channel operational
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 bg-[var(--accent)] px-6 py-4 mono-text text-[9px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-white sm:w-auto"
                    >
                      Transmit message
                      <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 border-t border-white/6 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="mono-text text-[8px] uppercase tracking-[0.2em] text-white/15">
              Communication / Secure channel
            </span>

            <span className="mono-text text-[8px] uppercase tracking-[0.2em] text-white/15">
              Response protocol / 24—48h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}