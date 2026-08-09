import type { Category } from "@/lib/types";
import { Media } from "./Media";
import { Button } from "./Button";

export type CategoryVariant = "portrait" | "landscape";

/**
 * Category tile for the Indian (portrait) and Western (landscape) carousels.
 * The photo defines the card height via its aspect ratio; title/subtitle overlay
 * the clear upper area and the CTA sits bottom-left (matching the comp).
 */
export function CategoryCard({
  category,
  variant = "portrait",
}: {
  category: Category;
  variant?: CategoryVariant;
}) {
  // Aspect ratios taken from the Figma card sizes (Indian 418×558, Western 569×352).
  const aspect = variant === "portrait" ? "aspect-[418/558]" : "aspect-[569/352]";

  return (
    <article className="group relative overflow-hidden rounded-card shadow-card">
      <Media
        src={category.image}
        alt={category.imageAlt}
        tint={category.tint}
        className={`${aspect} w-full`}
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 25vw"
      />
      <div className="absolute inset-x-0 top-0 p-6">
        <h3 className="text-display-md font-medium text-ink">{category.title}</h3>
        <p className="mt-1 max-w-[85%] text-sm text-ink-muted">{category.subtitle}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <Button href={category.ctaHref} size="sm" className="self-start">
          {category.ctaLabel}
        </Button>
      </div>
    </article>
  );
}
