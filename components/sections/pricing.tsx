"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { staggerContainer, staggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { PLANS, type Plan } from "@/lib/content";
import { cn } from "@/lib/utils";

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-brand-600"
      aria-hidden
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BillingToggle({
  annual,
  setAnnual,
}: {
  annual: boolean;
  setAnnual: (v: boolean) => void;
}) {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <span className={cn("text-sm font-medium", !annual ? "text-ink" : "text-muted-foreground")}>
        Monthly
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={annual}
        aria-label="Toggle annual billing"
        onClick={() => setAnnual(!annual)}
        className="relative h-7 w-12 rounded-full bg-brand-600/90 p-1 transition-colors"
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={cn(
            "block h-5 w-5 rounded-full bg-white shadow",
            annual ? "ml-5" : "ml-0",
          )}
        />
      </button>
      <span className={cn("text-sm font-medium", annual ? "text-ink" : "text-muted-foreground")}>
        Annual
        <span className="ml-2 rounded-full bg-accent/30 px-2 py-0.5 text-xs font-semibold text-brand-700">
          Save ~17%
        </span>
      </span>
    </div>
  );
}

function PriceTag({ plan, annual }: { plan: Plan; annual: boolean }) {
  const price = annual ? plan.annual : plan.monthly;
  return (
    <div className="mt-5 flex items-end gap-1">
      <span className="text-sm font-medium text-muted-foreground">€</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={price}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="font-display text-5xl font-extrabold leading-none text-ink"
        >
          {price}
        </motion.span>
      </AnimatePresence>
      <span className="mb-1 text-sm text-muted-foreground">/ month</span>
    </div>
  );
}

function PlanCard({ plan, annual }: { plan: Plan; annual: boolean }) {
  return (
    <motion.li
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative flex flex-col rounded-3xl border bg-white p-8",
        plan.popular
          ? "border-brand-600 shadow-lift ring-2 ring-brand-600/20 lg:scale-[1.03]"
          : "border-border shadow-soft",
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lift">
          Most popular
        </span>
      )}

      <h3 className="font-display text-lg font-bold text-ink">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

      <PriceTag plan={plan} annual={annual} />
      {annual && (
        <p className="mt-1 text-xs text-muted-foreground">Billed annually</p>
      )}

      <Button
        href="#"
        variant={plan.popular ? "primary" : "secondary"}
        size="md"
        className="mt-6 w-full"
      >
        {plan.cta}
      </Button>

      <ul className="mt-7 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-foreground">
            <Check />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.li>
  );
}

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Membership"
        title="Simple pricing, no long contracts"
        lede="Cancel anytime. All plans include the member app and matchmaking."
      />

      <div className="flex justify-center">
        <BillingToggle annual={annual} setAnnual={setAnnual} />
      </div>

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid items-stretch gap-6 lg:grid-cols-3"
      >
        {PLANS.map((plan) => (
          <PlanCard key={plan.name} plan={plan} annual={annual} />
        ))}
      </motion.ul>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Corporate &amp; family plans available —{" "}
        <a href="#" className="font-medium text-brand-700 underline-offset-4 hover:underline">
          get in touch
        </a>
        .
      </p>
    </Section>
  );
}
