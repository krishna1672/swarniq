/** Shared domain types for the Svarniq homepage. */

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type HeroSlide = {
  id: string;
  headline: string; // serif line(s)
  script: string; // gold script accent line
  features: string[]; // 4 bullet points
  image: string; // /public path
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

export type WorldCard = {
  id: string;
  eyebrow: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  tint: string; // tailwind bg-* class
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  tint: string; // tailwind bg-* class
};

export type FeatureItem = {
  id: string;
  icon: string; // icon key -> resolved in FeatureItem
  title: string;
  subtitle: string;
};

export type Product = {
  id: string;
  name: string;
  description: string; // "Necklace + Earrings"
  price: number; // in ₹
  savingLabel?: string; // "Save 10%"
  image: string;
  imageAlt: string;
  href: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  rating: number; // 1-5
  name: string;
  location: string;
  avatar: string;
};

export type ValueProp = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};
