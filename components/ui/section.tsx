import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/** Shared section heading: eyebrow + title + optional lede, scroll-revealed. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 text-lg text-muted-foreground">{lede}</p>
      )}
    </Reveal>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-20 sm:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}
