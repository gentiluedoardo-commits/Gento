import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { NAV_LINKS, SITE } from "@/lib/content";

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.2c3.2 0 3.6 0 4.8.07 3.3.15 4.8 1.7 4.95 4.95.06 1.2.07 1.6.07 4.78s0 3.6-.07 4.78c-.15 3.25-1.66 4.8-4.95 4.95-1.2.06-1.6.07-4.8.07s-3.6 0-4.78-.07c-3.3-.15-4.8-1.7-4.95-4.95C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.78C2.42 3.97 3.93 2.42 7.22 2.27 8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 100 9.8 4.9 4.9 0 000-9.8zm0 8.08a3.18 3.18 0 110-6.36 3.18 3.18 0 010 6.36zm5.1-8.27a1.15 1.15 0 100 2.3 1.15 1.15 0 000-2.3z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z",
  },
  {
    label: "X",
    href: "#",
    path: "M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7l4.9 6.4L18.9 2zm-2.4 18h1.9L7.6 4H5.5l11 16z",
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      {/* Final CTA band */}
      <Container>
        <Reveal className="relative -mt-px overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 px-6 py-14 text-center shadow-lift sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-court-grid opacity-40" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Your first match is waiting
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/80">
              Grab a court, bring three friends, and find out why all of Florence
              is playing padel.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={SITE.bookHref} size="lg" className="w-full bg-white text-brand-700 hover:bg-brand-50 sm:w-auto">
                Book a court
              </Button>
              <Button
                href="#features"
                size="lg"
                variant="ghost"
                className="w-full text-white hover:bg-white/10 sm:w-auto"
              >
                Take a tour
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Footer body */}
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 9c5 2 11 2 16 0M4 15c5-2 11-2 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Real<span className="text-brand-400">Padel</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Florence&rsquo;s home of padel. Eight panoramic courts, world-class
              coaching, and a community that never stops playing.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-600"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-white">Visit us</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>Via del Padel 1, {SITE.city}</li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li>Open daily · 7am – midnight</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
