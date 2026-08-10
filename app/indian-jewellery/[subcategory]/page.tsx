import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionView } from "@/components/sections/CollectionView";
import { getBySubcategory, subcategoryMeta, worldMeta } from "@/data/catalog";

type Params = { params: { subcategory: string } };

export function generateStaticParams() {
  return Object.entries(subcategoryMeta)
    .filter(([, m]) => m.world === "indian")
    .map(([subcategory]) => ({ subcategory }));
}

export function generateMetadata({ params }: Params): Metadata {
  const meta = subcategoryMeta[params.subcategory];
  return meta
    ? { title: `${meta.title} — Svarniq Jewels`, description: meta.description }
    : { title: "Not found — Svarniq Jewels" };
}

export default function IndianSubcategoryPage({ params }: Params) {
  const meta = subcategoryMeta[params.subcategory];
  if (!meta || meta.world !== "indian") notFound();

  return (
    <CollectionView
      title={meta.title}
      description={meta.description}
      products={getBySubcategory(params.subcategory)}
      breadcrumb={[
        { label: worldMeta.indian.title, href: "/indian-jewellery" },
        { label: meta.title },
      ]}
    />
  );
}
