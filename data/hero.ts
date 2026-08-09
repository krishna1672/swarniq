import type { HeroSlide } from "@/lib/types";

/** Hero carousel — the 3 alternate banner frames from Figma + the primary. */
export const heroSlides: HeroSlide[] = [
  {
    id: "elegance",
    headline: "Elegance That Never Goes Out of Style.",
    script: "Grace in Every Detail",
    features: [
      "Premium Zircon Sparkle",
      "18K Real Gold PVD Plated",
      "Hypoallergenic & Skin Friendly",
      "Everyday Luxury",
    ],
    image: "/images/hero/elegance.png",
    imageAlt: "Model wearing a layered gold necklace",
    ctaLabel: "Shop Now",
    ctaHref: "/collections",
  },
  {
    id: "ocean",
    headline: "Carry the Beauty of the Ocean, Wherever You Go",
    script: "Simplicity, Elevated.",
    features: [
      "18K Real Gold PVD Plated",
      "Premium 304 Stainless Steel",
      "Ocean-Inspired Design",
      "Made for Everyday Wear",
    ],
    image: "/images/hero/ocean.png",
    imageAlt: "Ocean-inspired gold jewellery",
    ctaLabel: "Shop Now",
    ctaHref: "/collections",
  },
  {
    id: "effortless",
    headline: "Effortless Elegance in Every Line.",
    script: "Simplicity, Elevated.",
    features: [
      "Premium 304 Stainless Steel",
      "18K Real Gold Ion Plated",
      "Lightweight & Comfortable",
      "Modern Minimalist Design",
    ],
    image: "/images/hero/effortless.png",
    imageAlt: "Minimalist gold jewellery",
    ctaLabel: "Shop Now",
    ctaHref: "/collections",
  },
];
