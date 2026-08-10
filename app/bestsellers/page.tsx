import type { Metadata } from "next";
import { CollectionView } from "@/components/sections/CollectionView";
import { bestsellers } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Bestsellers — Svarniq Jewels",
  description: "Our most-loved pieces, chosen by 20,000+ happy customers.",
};

export default function BestsellersPage() {
  return (
    <CollectionView
      title="Our Bestsellers"
      description="Loved by 20,000+ happy customers — the pieces our community keeps coming back to."
      products={bestsellers}
      breadcrumb={[{ label: "Bestsellers" }]}
    />
  );
}
