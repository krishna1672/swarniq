import type { Product } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Media } from "@/components/ui/Media";
import { Price } from "@/components/ui/Price";
import { Icon } from "@/components/ui/Icon";
import { ProductCard } from "@/components/ui/ProductCard";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { WishlistButton } from "@/components/wishlist/WishlistButton";
import { worldMeta } from "@/data/catalog";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** Product detail page (PDP). Cart/wishlist are UI-only for now. */
export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const world = worldMeta[product.world];

  return (
    <div className="py-10 lg:py-14">
      <Container>
        <Breadcrumb
          items={[
            { label: world.title, href: `/${product.world}-jewellery` },
            {
              label: product.subcategoryLabel,
              href: `/${product.world}-jewellery/${product.subcategory}`,
            },
            { label: product.name },
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Gallery */}
          <Media
            src={product.image}
            alt={product.imageAlt}
            tint="bg-cream-100"
            rounded="rounded-card"
            className="aspect-square"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />

          {/* Info */}
          <div className="flex flex-col">
            <span className="eyebrow">{product.subcategoryLabel}</span>
            <h1 className="mt-2 text-display-md font-medium text-ink">{product.name}</h1>
            <p className="mt-1 text-ink-muted">{product.description}</p>

            <div className="mt-5 flex items-center gap-3">
              <Price amount={product.price} />
              {product.originalPrice && (
                <span className="text-lg text-ink-soft line-through">
                  {inr.format(product.originalPrice)}
                </span>
              )}
              {product.savingLabel && (
                <span className="rounded-pill bg-gold/10 px-2 py-1 text-xs font-semibold text-gold">
                  {product.savingLabel}
                </span>
              )}
            </div>

            <p className="mt-6 max-w-prose leading-relaxed text-ink-muted">
              {product.longDescription}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AddToCartButton product={product} />
              <WishlistButton product={product} variant="pdp" />
            </div>

            {/* Details */}
            <ul className="mt-8 grid grid-cols-1 gap-3 border-t border-line pt-6 sm:grid-cols-2">
              {product.details.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm text-ink-muted">
                  <Icon name="sparkle" size={16} className="text-gold" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-display-md font-medium text-ink">You may also like</h2>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
