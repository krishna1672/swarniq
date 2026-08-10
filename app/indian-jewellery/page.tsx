import type { Metadata } from "next";
import { CollectionView } from "@/components/sections/CollectionView";
import { getByWorld, worldMeta } from "@/data/catalog";

const meta = worldMeta.indian;

export const metadata: Metadata = {
  title: `${meta.title} — Svarniq Jewels`,
  description: meta.description,
};

export default function IndianJewelleryPage() {
  return (
    <CollectionView
      title={meta.title}
      description={meta.description}
      products={getByWorld("indian")}
      breadcrumb={[{ label: meta.title }]}
    />
  );
}
