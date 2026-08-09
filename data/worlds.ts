import type { WorldCard } from "@/lib/types";

/** "Two Worlds, Your Style" split cards. */
export const worlds: WorldCard[] = [
  {
    id: "indian",
    eyebrow: "Indian Jewellery",
    title: "Timeless Tradition. Made Modern",
    ctaLabel: "Explore Indian Jewellery",
    ctaHref: "/indian-jewellery",
    image: "/images/worlds/indian.png",
    imageAlt: "Traditional Indian jewellery set",
    tint: "bg-tint-sand",
  },
  {
    id: "western",
    eyebrow: "Western Jewellery",
    title: "Everyday Elegance. Effortless You.",
    ctaLabel: "Explore Western Jewellery",
    ctaHref: "/western-jewellery",
    image: "/images/worlds/western.png",
    imageAlt: "Modern western jewellery",
    tint: "bg-tint-lilac",
  },
];
