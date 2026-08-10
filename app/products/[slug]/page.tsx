import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { getBySlug, products, relatedTo } from "@/data/catalog";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const product = getBySlug(params.slug);
  return product
    ? { title: `${product.name} — Svarniq Jewels`, description: product.longDescription }
    : { title: "Product not found — Svarniq Jewels" };
}

export default function ProductPage({ params }: Params) {
  const product = getBySlug(params.slug);
  if (!product) notFound();

  return <ProductDetail product={product} related={relatedTo(product)} />;
}
