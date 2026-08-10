import type { Metadata } from "next";
import { CollectionView } from "@/components/sections/CollectionView";
import { getAllProducts } from "@/data/catalog";

export const metadata: Metadata = {
  title: "All Collections — Svarniq Jewels",
  description: "Explore the full Svarniq range — Indian and Western jewellery for every occasion.",
};

export default function CollectionsPage() {
  return (
    <CollectionView
      title="All Collections"
      description="Explore the full Svarniq range — Indian and Western jewellery for every occasion."
      products={getAllProducts()}
      breadcrumb={[{ label: "Collections" }]}
    />
  );
}
