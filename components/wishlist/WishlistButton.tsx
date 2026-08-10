"use client";

import type { Product } from "@/lib/types";
import { useWishlist } from "./WishlistProvider";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/**
 * Heart toggle. `card` = compact circular overlay for product cards;
 * `pdp` = full outline button matching the PDP actions.
 */
export function WishlistButton({
  product,
  variant = "card",
}: {
  product: Product;
  variant?: "card" | "pdp";
}) {
  const { has, toggle } = useWishlist();
  const active = has(product.id);
  const label = active ? "Remove from wishlist" : "Add to wishlist";

  if (variant === "pdp") {
    return (
      <button
        type="button"
        aria-label={label}
        aria-pressed={active}
        onClick={() => toggle(product)}
        className={cn(
          "inline-flex h-14 items-center justify-center gap-2 rounded-cta border px-7 text-sm font-semibold uppercase tracking-wide transition-colors",
          active
            ? "border-gold bg-gold/10 text-gold"
            : "border-line text-ink hover:border-gold hover:text-gold",
        )}
      >
        <Icon name={active ? "heart" : "wishlist"} size={18} />
        <span className="sm:hidden">Wishlist</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={(e) => {
        e.preventDefault(); // don't trigger the card's parent link
        toggle(product);
      }}
      className={cn(
        "absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-ivory/90 shadow-soft backdrop-blur transition-colors hover:text-gold",
        active ? "text-gold" : "text-ink",
      )}
    >
      <Icon name={active ? "heart" : "wishlist"} size={18} />
    </button>
  );
}
