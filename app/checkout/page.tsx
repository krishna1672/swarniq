import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CheckoutView } from "@/components/sections/CheckoutView";

export const metadata: Metadata = {
  title: "Checkout — Svarniq Jewels",
  description: "Complete your Svarniq order.",
};

export default function CheckoutPage() {
  return (
    <>
      <PageHero title="Checkout" breadcrumb={[{ label: "Checkout" }]} />
      <CheckoutView />
    </>
  );
}
