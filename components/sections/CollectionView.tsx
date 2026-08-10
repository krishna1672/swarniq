import type { Product } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { ProductCard } from "@/components/ui/ProductCard";

type Props = {
  title: string;
  description?: string;
  products: Product[];
  breadcrumb: Crumb[];
};

/** Product listing page (PLP) — shared by every collection/category route. */
export function CollectionView({ title, description, products, breadcrumb }: Props) {
  return (
    <div className="py-10 lg:py-14">
      <Container>
        <Breadcrumb items={breadcrumb} />

        <header className="mt-6 max-w-2xl">
          <h1 className="text-display-lg font-medium text-ink">{title}</h1>
          {description && <p className="mt-3 text-ink-muted">{description}</p>}
          <p className="mt-4 text-xs uppercase tracking-eyebrow text-ink-soft">
            {products.length} {products.length === 1 ? "product" : "products"}
          </p>
        </header>

        {products.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-ink-muted">No products here yet — check back soon.</p>
        )}
      </Container>
    </div>
  );
}
