import Link from "next/link";
import type { Product } from "@/lib/types";
import { Media } from "./Media";
import { Price } from "./Price";

/** Bestsellers product card: image, name, description, price + saving. */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col">
      <Link href={product.href} className="group flex flex-1 flex-col">
        <Media
          src={product.image}
          alt={product.imageAlt}
          tint="bg-cream-100"
          rounded="rounded-card"
          className="aspect-[331/283]"
          sizes="(max-width: 640px) 70vw, (max-width: 1280px) 40vw, 20vw"
        />
        <div className="flex flex-1 flex-col gap-1 pt-4">
          <h3 className="font-serif text-lg font-medium text-ink transition-colors group-hover:text-gold">
            {product.name}
          </h3>
          <p className="text-sm text-ink-muted">{product.description}</p>
          <div className="mt-auto flex items-baseline gap-2 pt-2">
            <Price amount={product.price} />
            {product.savingLabel && (
              <span className="text-xs text-ink-soft">({product.savingLabel})</span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
