import type { Metadata } from "next";
import { CollectionView } from "@/components/sections/CollectionView";
import { getByWorld, worldMeta } from "@/data/catalog";

const meta = worldMeta.western;

export const metadata: Metadata = {
  title: `${meta.title} — Svarniq Jewels`,
  description: meta.description,
};

export default function WesternJewelleryPage() {
  return (
    <CollectionView
      title={meta.title}
      description={meta.description}
      products={getByWorld("western")}
      breadcrumb={[{ label: meta.title }]}
    />
  );
}
