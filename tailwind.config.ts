import type { Config } from "tailwindcss";

/**
 * Svarniq design tokens.
 *
 * The Figma file defines NO variables/tokens, so this config IS the source of
 * truth for the design system. Colours were sampled from the comps; font
 * families are the licensed-free stand-ins agreed during scaffolding
 * (swap the CSS variables in app/fonts.ts to change them everywhere).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    // ---- Responsive breakpoints -------------------------------------------
    // Design is desktop-first at 1920px. Content band is ~1766px, so the
    // container maxes out at 1520px (see `container` + Container.tsx) and the
    // layout steps DOWN through these breakpoints. Mobile is the implicit base.
    screens: {
      sm: "640px", // large phone / small tablet — cards go 2-up
      md: "768px", // tablet — nav still collapsed, carousels swipe
      lg: "1024px", // small laptop — full nav appears, multi-col grids
      xl: "1280px", // desktop — near-final spacing
      "2xl": "1536px", // large desktop — container caps, gutters grow
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // 16px  — phones
        sm: "1.5rem", // 24px
        lg: "2.5rem", // 40px
        xl: "4rem", // 64px  — matches the ~77px Figma gutter at scale
      },
      screens: {
        "2xl": "1520px",
      },
    },
    extend: {
      colors: {
        // Warm neutrals / backgrounds
        cream: {
          DEFAULT: "#F5EDE0",
          50: "#FBF7F0",
          100: "#F5EDE0",
          200: "#EFE3D2",
          300: "#E7D6BF",
        },
        ivory: "#FFFDF9",
        // Brand gold — CTAs, script accent, links (exact design value #af6200)
        gold: {
          DEFAULT: "#AF6200",
          light: "#C9832A",
          dark: "#8A4D00",
        },
        // Hero display heading — warm brown (exact design value)
        cocoa: "#583100",
        // Announcement bar
        chartreuse: "#D5E24A",
        // Text
        ink: {
          DEFAULT: "#2B2118", // headings — warm near-black
          muted: "#6B6156", // body / captions
          soft: "#948B80", // meta (city, "save 10%")
        },
        // Category / testimonial card tints
        tint: {
          peach: "#F6E4D2",
          rose: "#F6E5E4",
          lilac: "#EDE6F2",
          sand: "#F1E7D8",
          mint: "#E7F0E4",
        },
        line: "#E6DCCB", // hairline dividers / borders
      },
      fontFamily: {
        // Bound to next/font CSS variables in app/fonts.ts
        serif: ["var(--font-display)", "Playfair Display", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-body)", "Archivo", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid display sizes for headings (clamp: min, preferred vw, max)
        "display-xl": ["clamp(2.75rem, 5vw, 4.5rem)", { lineHeight: "1.05" }],
        "display-lg": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.15" }],
        script: ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      letterSpacing: {
        eyebrow: "0.18em", // uppercase nav / eyebrows
        wide: "0.08em",
      },
      maxWidth: {
        container: "1520px",
        prose: "36rem",
      },
      borderRadius: {
        pill: "9999px",
        card: "1.25rem", // 20px — category/product cards
        cta: "0.5rem",
      },
      boxShadow: {
        card: "0 12px 30px -18px rgba(43, 33, 24, 0.25)",
        soft: "0 8px 24px -16px rgba(43, 33, 24, 0.20)",
      },
      backgroundImage: {
        "why-gradient":
          "linear-gradient(90deg, #F7E9A0 0%, #F5E1C4 45%, #F3D9E4 100%)",
        "hero-fade":
          "linear-gradient(90deg, rgba(245,237,224,0.95) 0%, rgba(245,237,224,0.4) 45%, rgba(245,237,224,0) 70%)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
