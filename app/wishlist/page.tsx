import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WishlistView } from "@/components/sections/WishlistView";

export const metadata: Metadata = {
  title: "Wishlist — Svarniq Jewels",
  description: "Your saved Svarniq pieces.",
};

export default function WishlistPage() {
  return (
    <>
      <PageHero
        eyebrow="Saved for later"
        title="Your Wishlist"
        breadcrumb={[{ label: "Wishlist" }]}
      />
      <WishlistView />
    </>
  );
}
