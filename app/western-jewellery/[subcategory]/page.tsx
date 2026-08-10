import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionView } from "@/components/sections/CollectionView";
import { getBySubcategory, subcategoryMeta, worldMeta } from "@/data/catalog";

type Params = { params: { subcategory: string } };

export function generateStaticParams() {
  return Object.entries(subcategoryMeta)
    .filter(([, m]) => m.world === "western")
    .map(([subcategory]) => ({ subcategory }));
}

export function generateMetadata({ params }: Params): Metadata {
  const meta = subcategoryMeta[params.subcategory];
  return meta
    ? { title: `${meta.title} — Svarniq Jewels`, description: meta.description }
    : { title: "Not found — Svarniq Jewels" };
}

export default function WesternSubcategoryPage({ params }: Params) {
  const meta = subcategoryMeta[params.subcategory];
  if (!meta || meta.world !== "western") notFound();

  return (
    <CollectionView
      title={meta.title}
      description={meta.description}
      products={getBySubcategory(params.subcategory)}
      breadcrumb={[
        { label: worldMeta.western.title, href: "/western-jewellery" },
        { label: meta.title },
      ]}
    />
  );
}
