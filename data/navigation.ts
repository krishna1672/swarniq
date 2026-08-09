import type { NavItem } from "@/lib/types";

export const mainNav: NavItem[] = [
  { label: "Collections", href: "/collections", children: [] },
  {
    label: "Indian Jewellery",
    href: "/indian-jewellery",
    children: [
      { label: "Gold Combo Sets", href: "/indian-jewellery/gold-combo-sets" },
      { label: "Silver Oxidized Sets", href: "/indian-jewellery/silver-oxidized-sets" },
      { label: "Kashmiri Earrings", href: "/indian-jewellery/kashmiri-earrings" },
      { label: "Oxidized Earrings", href: "/indian-jewellery/oxidized-earrings" },
    ],
  },
  {
    label: "Western Jewellery",
    href: "/western-jewellery",
    children: [
      { label: "Necklaces", href: "/western-jewellery/necklaces" },
      { label: "Earrings", href: "/western-jewellery/earrings" },
      { label: "Bracelets", href: "/western-jewellery/bracelets" },
    ],
  },
  { label: "Bestsellers", href: "/bestsellers" },
  { label: "About Us", href: "/about" },
];

export const announcement =
  "FREE SHIPPING ON ALL ORDERS ABOVE ₹699";
