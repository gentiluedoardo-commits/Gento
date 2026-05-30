"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { staggerContainer, staggerItem } from "@/components/motion/reveal";
import { FEATURES, type Feature } from "@/lib/content";

function FeatureIcon({ name }: { name: Feature["icon"] }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: 2,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "court":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="M12 4v16M3 12h18" />
        </svg>
      );
    case "coach":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="7" r="3" />
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
        </svg>
      );
    case "community":
      return (
        <svg {...common} aria-hidden>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5M21 20a6 6 0 0 0-4-5.6" />
        </svg>
      );
  }
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.li
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col rounded-3xl border border-border bg-white p-7 shadow-soft transition-shadow hover:shadow-lift"
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-brand-50/0 to-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white shadow-lift transition-transform duration-300 group-hover:scale-105">
          <FeatureIcon name={feature.icon} />
        </span>

        <h3 className="mt-5 font-display text-xl font-bold text-ink">
          {feature.title}
        </h3>
        <p className="mt-2 flex-1 text-muted-foreground">{feature.description}</p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {feature.highlight}
        </span>
      </div>
    </motion.li>
  );
}

export function Features() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="Why Real Padel"
        title="Everything you need to play your best"
        lede="A club built around the game — and the people who love it."
      />

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </motion.ul>
    </Section>
  );
}
