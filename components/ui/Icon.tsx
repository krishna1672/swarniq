import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * Icons.
 *
 * Brand glyphs were exported from Figma to /public/icons/*.svg and are rendered
 * as CSS masks tinted with `currentColor`, so each usage controls the colour
 * (gold feature bullets, ink nav icons, gold hover) from a single monochrome
 * source. Generic UI arrows/chevrons stay as inline vectors — they aren't brand
 * assets and these draw crisply at any size.
 */

// Exported brand icons living in /public/icons (tinted via mask).
const MASK_ICONS = [
  "gem",
  "shield",
  "star",
  "globe",
  "leaf",
  "sparkle",
  "spark",
  "heart",
  "heart-outline",
  "necklace",
  "gem-sparkle",
  "gift",
  "search",
  "user",
  "wishlist",
  "cart",
  "instagram",
  "facebook",
  "youtube",
] as const;

// Inline UI vectors (not brand assets).
const INLINE_ICONS = {
  "arrow-right": "M4 12h16M14 6l6 6-6 6",
  "chevron-down": "M6 9l6 6 6-6",
  "chevron-left": "M15 6l-6 6 6 6",
  "chevron-right": "M9 6l6 6-6 6",
} as const;

export type IconName = (typeof MASK_ICONS)[number] | keyof typeof INLINE_ICONS;

const maskSet = new Set<string>(MASK_ICONS);

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
};

export function Icon({ name, size = 20, className, style }: IconProps) {
  // Brand icon → mask tinted with currentColor.
  if (maskSet.has(name)) {
    const url = `/icons/${name}.svg`;
    return (
      <span
        aria-hidden="true"
        className={cn("inline-block shrink-0", className)}
        style={{
          width: size,
          height: size,
          backgroundColor: "currentColor",
          maskImage: `url(${url})`,
          WebkitMaskImage: `url(${url})`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          ...style,
        }}
      />
    );
  }

  // Inline UI vector.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      style={style}
    >
      <path d={INLINE_ICONS[name as keyof typeof INLINE_ICONS]} />
    </svg>
  );
}
