import type { MegaMenu, NavItem } from "@/lib/types";
import { indianCategories, westernCategories } from "./categories";

export const mainNav: NavItem[] = [
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "All Products", href: "/collections" },
      { label: "Bestsellers", href: "/bestsellers" },
      { label: "New In", href: "/new" },
    ],
  },
  {
    label: "Indian Jewellery",
    href: "/indian-jewellery",
    children: indianCategories.map((c) => ({ label: c.title, href: c.ctaHref })),
  },
  {
    label: "Western Jewellery",
    href: "/western-jewellery",
    children: westernCategories.map((c) => ({ label: c.title, href: c.ctaHref })),
  },
  { label: "Bestsellers", href: "/bestsellers" },
  { label: "About Us", href: "/about" },
];

/**
 * Desktop hover panels keyed by nav label. Items without an entry (Bestsellers,
 * About Us) render as plain links; mobile uses `children` above instead.
 */
export const megaMenus: Record<string, MegaMenu> = {
  Collections: {
    columns: [
      {
        title: "Shop",
        links: [
          { label: "All Products", href: "/collections" },
          { label: "Bestsellers", href: "/bestsellers" },
          { label: "New In", href: "/new" },
        ],
      },
      {
        title: "Indian Jewellery",
        links: indianCategories.map((c) => ({ label: c.title, href: c.ctaHref })),
      },
      {
        title: "Western Jewellery",
        links: westernCategories.map((c) => ({ label: c.title, href: c.ctaHref })),
      },
    ],
    cards: [
      {
        title: "Indian Jewellery",
        subtitle: "Timeless tradition, made modern",
        image: "/images/worlds/indian.png",
        href: "/indian-jewellery",
      },
      {
        title: "Western Jewellery",
        subtitle: "Everyday elegance, effortless you",
        image: "/images/worlds/western.png",
        href: "/western-jewellery",
      },
    ],
  },
  "Indian Jewellery": {
    cards: indianCategories.map((c) => ({
      title: c.title,
      subtitle: c.subtitle,
      image: c.image,
      href: c.ctaHref,
    })),
    cta: { label: "Shop all Indian Jewellery", href: "/indian-jewellery" },
  },
  "Western Jewellery": {
    cards: westernCategories.map((c) => ({
      title: c.title,
      subtitle: c.subtitle,
      image: c.image,
      href: c.ctaHref,
    })),
    cta: { label: "Shop all Western Jewellery", href: "/western-jewellery" },
  },
};

export const announcement = "FREE SHIPPING ON ALL ORDERS ABOVE ₹699";
