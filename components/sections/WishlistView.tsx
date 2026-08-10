"use client";

import Link from "next/link";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import { products } from "@/data/catalog";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { Icon } from "@/components/ui/Icon";

export function WishlistView() {
  const { ids } = useWishlist();
  const saved = products.filter((p) => ids.has(p.id));

  return (
    <Container className="py-12 lg:py-16">
      {saved.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <span className="text-ink-soft">
            <Icon name="wishlist" size={44} />
          </span>
          <h1 className="text-display-md font-medium text-ink">
            Your wishlist is empty
          </h1>
          <p className="max-w-md text-ink-muted">
            Tap the heart on any piece to save it here for later.
          </p>
          <Link
            href="/collections"
            className="mt-2 inline-flex h-11 items-center rounded-cta bg-gold px-6 text-xs font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-gold-dark"
          >
            Explore Collections
          </Link>
        </div>
      ) : (
        <>
          <p className="mb-8 text-xs uppercase tracking-eyebrow text-ink-soft">
            {saved.length} saved {saved.length === 1 ? "item" : "items"}
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {saved.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}
    </Container>
  );
}
