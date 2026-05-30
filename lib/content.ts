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

export type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  annual: number; // per month, billed annually
  features: string[];
  cta: string;
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Off-Peak",
    tagline: "Play when the court's quiet.",
    monthly: 29,
    annual: 24,
    features: [
      "Court access 7am–4pm weekdays",
      "Online booking up to 3 days ahead",
      "Free racket & ball loan",
      "Member app & matchmaking",
    ],
    cta: "Start playing",
  },
  {
    name: "Member",
    tagline: "Everything, any time.",
    monthly: 59,
    annual: 49,
    features: [
      "Unlimited court access, all hours",
      "Booking up to 14 days ahead",
      "2 guest passes / month",
      "10% off coaching & pro shop",
      "Priority league entry",
    ],
    cta: "Become a member",
    popular: true,
  },
  {
    name: "Pro",
    tagline: "For the seriously committed.",
    monthly: 99,
    annual: 85,
    features: [
      "All Member benefits",
      "4 hrs private coaching / month",
      "Video analysis sessions",
      "Free guest passes",
      "Tournament fee waivers",
    ],
    cta: "Go Pro",
  },
];

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
