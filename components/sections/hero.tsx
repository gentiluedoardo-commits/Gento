"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HERO_STATS, SITE } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      {/* court grid + glow backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-court-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease }}
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-400/30 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Now open in {SITE.city} · 8 courts
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl"
          >
            Padel, the way
            <br className="hidden sm:block" />{" "}
            <span className="relative whitespace-nowrap text-brand-600">
              Florence
              <svg
                className="absolute -bottom-2 left-0 w-full text-accent"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
              >
                <motion.path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease }}
                />
              </svg>
            </span>{" "}
            plays it.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Panoramic indoor &amp; outdoor courts, expert coaching and a club that
            never sleeps. Book in seconds, play in minutes.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href={SITE.bookHref} size="lg" className="w-full sm:w-auto">
              Book a court
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <Button href="#features" variant="secondary" size="lg" className="w-full sm:w-auto">
              Take a tour
            </Button>
          </motion.div>

          {/* stats */}
          <motion.dl
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36, ease }}
            className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </Container>
    </section>
  );
}
