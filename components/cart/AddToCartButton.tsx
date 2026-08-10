"use client";

import type { Product } from "@/lib/types";
import { useCart } from "./CartProvider";
import { Icon } from "@/components/ui/Icon";

/** PDP add-to-cart action, wired to the cart context. */
export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <button
      type="button"
      onClick={() => addItem(product)}
      className="inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-cta bg-gold px-7 text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-gold-dark"
    >
      <Icon name="cart" size={18} />
      Add to Cart
    </button>
  );
}
