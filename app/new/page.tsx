import type { Metadata } from "next";
import { CollectionView } from "@/components/sections/CollectionView";
import { newIn } from "@/data/catalog";

export const metadata: Metadata = {
  title: "New In — Svarniq Jewels",
  description: "The latest additions to the Svarniq collection.",
};

export default function NewInPage() {
  return (
    <CollectionView
      title="New In"
      description="Fresh arrivals — the latest additions to the Svarniq collection."
      products={newIn}
      breadcrumb={[{ label: "New In" }]}
    />
  );
}
