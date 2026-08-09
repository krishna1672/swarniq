import { Playfair_Display, Great_Vibes, Archivo } from "next/font/google";

/**
 * Font decisions (licensed-free stand-ins for the Figma design).
 *
 * - Display serif  -> Playfair Display    : closest free match to the design's
 *   commercial "Askha" — high-contrast fashion serif for all headings.
 * - Script accent  -> Great Vibes        : free stand-in for the design's
 *   commercial "Palmaton"; gold one-liners ("Grace in Every Detail").
 * - Body / UI      -> Archivo            : EXACT match to the Figma design
 *   (Archivo Medium for uppercase nav/eyebrows, Regular for body). Free (OFL).
 *
 * The design's display serif (Askha) and script (Palmaton) are commercial
 * fonts; the two below are free stand-ins pending a licensing decision.
 *
 * To swap a family later, change the import here only — the rest of the app
 * references the CSS variables (--font-display / --font-script / --font-body)
 * through tailwind.config.ts, so nothing else needs to change.
 */

export const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const script = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const body = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const fontVariables = `${display.variable} ${script.variable} ${body.variable}`;
