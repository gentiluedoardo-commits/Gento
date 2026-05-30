"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal, staggerContainer, staggerItem } from "@/components/motion/reveal";
import { EmojiRating } from "@/components/ui/emoji-rating";
import { TESTIMONIALS, PARTNERS, type Testimonial } from "@/lib/content";

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.li
      variants={staggerItem}
      className="flex flex-col rounded-3xl border border-border bg-white p-7 shadow-soft"
    >
      <Stars />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-600 font-semibold text-white">
          {t.initials}
        </span>
        <div>
          <div className="font-semibold text-ink">{t.name}</div>
          <div className="text-sm text-muted-foreground">{t.role}</div>
        </div>
      </div>
    </motion.li>
  );
}

export function SocialProof() {
  return (
    <Section id="community" className="bg-muted/40">
      {/* Partner / brand strip */}
      <Reveal className="mb-16">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by players &amp; the brands they love
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="font-display text-xl font-bold tracking-tight text-muted-foreground/70 grayscale transition hover:text-foreground hover:grayscale-0"
            >
              {p}
            </span>
          ))}
        </div>
      </Reveal>

      <SectionHeading
        eyebrow="Loved by the community"
        title="Players keep coming back"
        lede="Don't take our word for it — here's how the club rates us."
      />

      {/* Satisfaction band — powered by the emoji-rating skill */}
      <Reveal className="mt-8 flex flex-col items-center gap-2" delay={0.05}>
        <EmojiRating value={5} disabled size={44} />
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-ink">4.9 / 5</span> from 600+ member reviews
        </p>
      </Reveal>

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </motion.ul>
    </Section>
  );
}
