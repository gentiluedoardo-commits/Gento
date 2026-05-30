export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Community", href: "#community" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const SITE = {
  name: "Real Padel",
  city: "Florence",
  phone: "+39 055 000 0000",
  bookHref: "#pricing",
};

export const HERO_STATS = [
  { value: "8", label: "Panoramic courts" },
  { value: "12k+", label: "Matches played" },
  { value: "4.9", label: "Average rating" },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Best courts in Tuscany, hands down. The glass is spotless and booking takes ten seconds. I'm here four times a week.",
    name: "Giulia Ferri",
    role: "Member since 2023",
    initials: "GF",
  },
  {
    quote:
      "Went from never holding a racket to playing in the Sunday league in three months. The coaches are unreal.",
    name: "Marco Bianchi",
    role: "Beginner clinic graduate",
    initials: "MB",
  },
  {
    quote:
      "The americano nights are the highlight of my week. Walked in knowing nobody, now I've got a whole crew.",
    name: "Sofia Russo",
    role: "League player",
    initials: "SR",
  },
];

export const PARTNERS = ["WPT", "Adidas", "Bullpadel", "Head", "Nox"] as const;

export type Feature = {
  icon: "court" | "coach" | "community";
  title: string;
  description: string;
  highlight: string;
};

export const FEATURES: Feature[] = [
  {
    icon: "court",
    title: "Panoramic courts",
    description:
      "Eight WPT-spec courts — indoor climate-controlled and outdoor under the Tuscan sky. Pro glass, pro turf, pro lighting.",
    highlight: "Open 7am – midnight",
  },
  {
    icon: "coach",
    title: "Coaching for everyone",
    description:
      "From your first rally to tournament prep. Certified coaches, video analysis and clinics for every level.",
    highlight: "Certified pros",
  },
  {
    icon: "community",
    title: "A real community",
    description:
      "Leagues, social mixers, americano nights and an app that finds you a match at your level in seconds.",
    highlight: "Matchmaking app",
  },
];
