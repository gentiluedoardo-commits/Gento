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

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Do I need to be a member to play?",
    a: "Not at all. Anyone can book a court as a pay-as-you-go guest. Membership just unlocks better rates, priority booking and perks.",
  },
  {
    q: "I've never played padel — can I still come?",
    a: "Absolutely. Padel is the easiest racket sport to pick up. Book a beginner clinic or a 'first hit' session and our coaches will have you rallying in your first hour.",
  },
  {
    q: "Can I rent equipment?",
    a: "Yes. Rackets and balls are free to borrow for members and a few euros for guests. The pro shop also stocks the latest gear if you catch the bug.",
  },
  {
    q: "How far ahead can I book?",
    a: "Guests can book up to 3 days ahead, Members 14 days, and Pro members get priority slots. Everything is handled in the member app in a few taps.",
  },
  {
    q: "Are the courts indoor or outdoor?",
    a: "Both. Four climate-controlled indoor courts for any weather, and four panoramic outdoor courts for when Florence turns on the sunshine.",
  },
  {
    q: "Where are you located?",
    a: "A short ride from the city centre with free parking on site. Full directions and public-transport options are on the contact page.",
  },
];

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
