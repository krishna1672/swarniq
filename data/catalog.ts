import type { CollectionMeta, JewelleryWorld, Product } from "@/lib/types";

/**
 * Product catalog.
 *
 * The Figma file only mocks a handful of products, so this is a representative
 * catalog built to populate the listing/detail pages — reusing the exported
 * Figma photography across items in the same category. Swap in a real
 * commerce backend later; the page components only depend on these helpers.
 */
export const products: Product[] = [
  // ---- Indian · Gold Combo Sets ----
  {
    id: "royal-elephant",
    slug: "royal-elephant-necklace-set",
    name: "Royal Elephant Necklace Set",
    description: "Necklace + Earrings",
    world: "indian",
    subcategory: "gold-combo-sets",
    subcategoryLabel: "Gold Combo Sets",
    price: 699,
    originalPrice: 799,
    savingLabel: "Save 10%",
    image: "/images/products/royal-elephant.png",
    imageAlt: "Royal Elephant Necklace Set",
    details: [
      "18K real gold PVD plated",
      "Premium zircon sparkle",
      "Hypoallergenic & skin friendly",
      "Necklace + matching earrings",
    ],
    longDescription:
      "A regal statement set inspired by traditional temple motifs, finished in long-lasting 18K gold plating with hand-set zircon detailing. Lightweight enough for all-day festive wear.",
    bestseller: true,
  },
  {
    id: "kundan-gold-combo",
    slug: "kundan-gold-combo-set",
    name: "Kundan Gold Combo Set",
    description: "Necklace + Earrings + Maang Tikka",
    world: "indian",
    subcategory: "gold-combo-sets",
    subcategoryLabel: "Gold Combo Sets",
    price: 899,
    originalPrice: 999,
    savingLabel: "Save 10%",
    image: "/images/categories/gold-combo.png",
    imageAlt: "Kundan Gold Combo Set",
    details: [
      "18K real gold PVD plated",
      "Uncut kundan stones",
      "Bridal-ready three-piece set",
      "Tarnish-resistant finish",
    ],
    longDescription:
      "A complete bridal-ready combo with a matching maang tikka, crafted with uncut kundan stones and a warm gold finish for that heirloom look.",
    bestseller: true,
  },
  {
    id: "temple-bridal-set",
    slug: "temple-gold-bridal-set",
    name: "Temple Gold Bridal Set",
    description: "Necklace + Earrings",
    world: "indian",
    subcategory: "gold-combo-sets",
    subcategoryLabel: "Gold Combo Sets",
    price: 949,
    image: "/images/worlds/indian.png",
    imageAlt: "Temple Gold Bridal Set",
    details: [
      "18K real gold PVD plated",
      "Temple goddess motif",
      "Statement bridal piece",
      "Secure adjustable clasp",
    ],
    longDescription:
      "An ornate temple-jewellery set featuring a goddess pendant and intricate beaded drops — a timeless centrepiece for weddings and festivals.",
    isNew: true,
  },

  // ---- Indian · Silver Oxidized Sets ----
  {
    id: "oxidised-lotus",
    slug: "oxidised-lotus-jewellery-set",
    name: "Oxidised Lotus Jewellery Set",
    description: "Necklace + Earrings + Maang Tikka",
    world: "indian",
    subcategory: "silver-oxidized-sets",
    subcategoryLabel: "Silver Oxidized Sets",
    price: 599,
    originalPrice: 665,
    savingLabel: "Save 10%",
    image: "/images/products/oxidised-lotus.png",
    imageAlt: "Oxidised Lotus Jewellery Set",
    details: [
      "Oxidised silver finish",
      "Lotus-inspired motif",
      "Three-piece festive set",
      "Lightweight & comfortable",
    ],
    longDescription:
      "Classic oxidised silver with a lotus motif — a versatile ethnic set that pairs beautifully with both sarees and indo-western outfits.",
    bestseller: true,
  },
  {
    id: "silver-choker",
    slug: "silver-oxidized-choker-set",
    name: "Silver Oxidized Choker Set",
    description: "Choker + Earrings",
    world: "indian",
    subcategory: "silver-oxidized-sets",
    subcategoryLabel: "Silver Oxidized Sets",
    price: 649,
    image: "/images/categories/silver-oxidized.png",
    imageAlt: "Silver Oxidized Choker Set",
    details: [
      "Oxidised silver finish",
      "Statement choker length",
      "Ghungroo bead drops",
      "Adjustable back tie",
    ],
    longDescription:
      "A bold oxidised choker with delicate ghungroo drops — the perfect finishing touch for navratri and festive looks.",
    isNew: true,
  },

  // ---- Indian · Kashmiri Earrings ----
  {
    id: "kashmiri-jhumka",
    slug: "kashmiri-jhumka-earrings",
    name: "Kashmiri Jhumka Earrings",
    description: "Earrings",
    world: "indian",
    subcategory: "kashmiri-earrings",
    subcategoryLabel: "Kashmiri Earrings",
    price: 349,
    image: "/images/categories/kashmiri-earrings.png",
    imageAlt: "Kashmiri Jhumka Earrings",
    details: [
      "Handcrafted detailing",
      "Turquoise stone accents",
      "Lightweight jhumka drop",
      "Secure push-back",
    ],
    longDescription:
      "Handcrafted Kashmiri jhumkas with turquoise accents and fine beadwork, inspired by the region's rich craft heritage.",
    bestseller: true,
  },
  {
    id: "meenakari-earrings",
    slug: "meenakari-kashmiri-earrings",
    name: "Meenakari Kashmiri Earrings",
    description: "Earrings",
    world: "indian",
    subcategory: "kashmiri-earrings",
    subcategoryLabel: "Kashmiri Earrings",
    price: 399,
    image: "/images/worlds/indian.png",
    imageAlt: "Meenakari Kashmiri Earrings",
    details: [
      "Hand-painted meenakari enamel",
      "Long statement drop",
      "Colourful festive palette",
      "Skin-friendly finish",
    ],
    longDescription:
      "Vibrant hand-painted meenakari earrings with a long statement drop — a colourful pop for ethnic celebrations.",
  },

  // ---- Indian · Oxidized Earrings ----
  {
    id: "oxidised-ruby-jhumki",
    slug: "oxidised-ruby-jhumki",
    name: "Oxidised Ruby Jhumki",
    description: "Earrings",
    world: "indian",
    subcategory: "oxidized-earrings",
    subcategoryLabel: "Oxidized Earrings",
    price: 199,
    originalPrice: 220,
    savingLabel: "Save 10%",
    image: "/images/products/oxidised-ruby-jhumki.png",
    imageAlt: "Oxidised Ruby Jhumki",
    details: [
      "Oxidised silver finish",
      "Ruby-red stone centre",
      "Classic jhumki silhouette",
      "Everyday lightweight wear",
    ],
    longDescription:
      "A dependable everyday jhumki in oxidised silver with a ruby-red centre stone — understated ethnic charm at a friendly price.",
    bestseller: true,
  },
  {
    id: "oxidised-peacock",
    slug: "oxidised-peacock-earrings",
    name: "Oxidised Peacock Earrings",
    description: "Earrings",
    world: "indian",
    subcategory: "oxidized-earrings",
    subcategoryLabel: "Oxidized Earrings",
    price: 249,
    image: "/images/categories/oxidized-earrings.png",
    imageAlt: "Oxidised Peacock Earrings",
    details: [
      "Oxidised silver finish",
      "Peacock motif",
      "Pearl drop accents",
      "Secure push-back",
    ],
    longDescription:
      "Intricate peacock-motif earrings with tiny pearl drops — rooted in tradition, made for modern ethnic wardrobes.",
    isNew: true,
  },

  // ---- Western · Necklaces ----
  {
    id: "drape-lariat",
    slug: "drape-lariat-necklace",
    name: "Drape Lariat Necklace",
    description: "Necklace",
    world: "western",
    subcategory: "necklaces",
    subcategoryLabel: "Necklaces",
    price: 599,
    originalPrice: 665,
    savingLabel: "Save 10%",
    image: "/images/products/drape-lariat.png",
    imageAlt: "Drape Lariat Necklace",
    details: [
      "18K real gold PVD plated",
      "Adjustable drape length",
      "Premium 304 stainless steel",
      "Everyday-to-evening piece",
    ],
    longDescription:
      "A fluid lariat that drapes elegantly for a modern neckline — layer it or wear it solo, day to night.",
    bestseller: true,
  },
  {
    id: "ocean-charm",
    slug: "ocean-charm-necklace",
    name: "Ocean Charm Necklace",
    description: "Necklace",
    world: "western",
    subcategory: "necklaces",
    subcategoryLabel: "Necklaces",
    price: 549,
    image: "/images/categories/necklaces.png",
    imageAlt: "Ocean Charm Necklace",
    details: [
      "18K real gold PVD plated",
      "Shell & starfish charms",
      "Layered chain design",
      "Water-resistant finish",
    ],
    longDescription:
      "A breezy layered necklace with ocean-inspired shell and starfish charms — effortless everyday elegance.",
    isNew: true,
  },

  // ---- Western · Earrings ----
  {
    id: "shell-studs",
    slug: "shell-stud-earrings",
    name: "Shell Stud Earrings",
    description: "Earrings",
    world: "western",
    subcategory: "earrings",
    subcategoryLabel: "Earrings",
    price: 299,
    image: "/images/categories/western-earrings.png",
    imageAlt: "Shell Stud Earrings",
    details: [
      "18K real gold ion plated",
      "Fluted shell design",
      "Lightweight studs",
      "Hypoallergenic posts",
    ],
    longDescription:
      "Minimal fluted-shell studs that finish any look with a subtle golden shine — light enough to forget you're wearing them.",
    bestseller: true,
  },
  {
    id: "pearl-drops",
    slug: "pearl-drop-earrings",
    name: "Pearl Drop Earrings",
    description: "Earrings",
    world: "western",
    subcategory: "earrings",
    subcategoryLabel: "Earrings",
    price: 349,
    image: "/images/worlds/western.png",
    imageAlt: "Pearl Drop Earrings",
    details: [
      "18K real gold ion plated",
      "Freshwater-style pearl drop",
      "Modern minimalist design",
      "Secure lever back",
    ],
    longDescription:
      "Timeless pearl drops with a modern minimalist bar — the quiet statement that works from desk to dinner.",
  },

  // ---- Western · Bracelets ----
  {
    id: "halo-crystal-bracelet",
    slug: "halo-crystal-bracelet",
    name: "Halo Crystal Bracelet",
    description: "Bracelet",
    world: "western",
    subcategory: "bracelets",
    subcategoryLabel: "Bracelets",
    price: 399,
    originalPrice: 445,
    savingLabel: "Save 10%",
    image: "/images/products/halo-crystal-bracelet.png",
    imageAlt: "Halo Crystal Bracelet",
    details: [
      "18K real gold PVD plated",
      "Halo-set crystals",
      "Adjustable chain fit",
      "Tarnish-resistant finish",
    ],
    longDescription:
      "A delicate halo-set crystal bracelet with an adjustable fit — subtle sparkle that layers beautifully.",
    bestseller: true,
  },
  {
    id: "floral-charm-bracelet",
    slug: "floral-charm-bracelet",
    name: "Floral Charm Bracelet",
    description: "Bracelet",
    world: "western",
    subcategory: "bracelets",
    subcategoryLabel: "Bracelets",
    price: 449,
    image: "/images/categories/bracelets.png",
    imageAlt: "Floral Charm Bracelet",
    details: [
      "18K real gold PVD plated",
      "Floral charm links",
      "Premium 304 stainless steel",
      "Lobster-clasp closure",
    ],
    longDescription:
      "A dainty floral-charm bracelet in warm gold — a sweet finishing touch, on its own or stacked.",
    isNew: true,
  },
];

// ---------------------------------------------------------------------------
// Metadata for listing pages
// ---------------------------------------------------------------------------

export const worldMeta: Record<JewelleryWorld, CollectionMeta> = {
  indian: {
    title: "Indian Jewellery",
    description: "Timeless tradition, made modern — combos, oxidised silver, and handcrafted earrings.",
  },
  western: {
    title: "Western Jewellery",
    description: "Everyday elegance, effortless you — necklaces, earrings, and bracelets for modern souls.",
  },
};

export const subcategoryMeta: Record<
  string,
  CollectionMeta & { world: JewelleryWorld }
> = {
  "gold-combo-sets": {
    world: "indian",
    title: "Gold Combo Sets",
    description: "Bridal elegance, timeless together.",
  },
  "silver-oxidized-sets": {
    world: "indian",
    title: "Silver Oxidized Sets",
    description: "Classic oxidised silver combos.",
  },
  "kashmiri-earrings": {
    world: "indian",
    title: "Kashmiri Earrings",
    description: "Handcrafted beauty, inspired by heritage.",
  },
  "oxidized-earrings": {
    world: "indian",
    title: "Oxidized Earrings",
    description: "Unique designs, rooted in tradition.",
  },
  necklaces: {
    world: "western",
    title: "Necklaces",
    description: "Effortless chains for every mood.",
  },
  earrings: {
    world: "western",
    title: "Earrings",
    description: "From studs to hoops, we've got your vibe.",
  },
  bracelets: {
    world: "western",
    title: "Bracelets",
    description: "Subtle shine, statement style.",
  },
};

// ---------------------------------------------------------------------------
// Query helpers
// ---------------------------------------------------------------------------

export const productHref = (p: Product) => `/products/${p.slug}`;

export const getAllProducts = () => products;
export const getByWorld = (world: JewelleryWorld) =>
  products.filter((p) => p.world === world);
export const getBySubcategory = (sub: string) =>
  products.filter((p) => p.subcategory === sub);
export const getBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
export const bestsellers = products.filter((p) => p.bestseller);
export const newIn = products.filter((p) => p.isNew);
export const relatedTo = (p: Product, limit = 4) =>
  products
    .filter((q) => q.subcategory === p.subcategory && q.id !== p.id)
    .concat(products.filter((q) => q.world === p.world && q.subcategory !== p.subcategory))
    .slice(0, limit);

export const subcategorySlugs = Object.keys(subcategoryMeta);
