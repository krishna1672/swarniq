import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { TrackOrderForm } from "@/components/sections/TrackOrderForm";

export const metadata: Metadata = {
  title: "Track Order — Svarniq Jewels",
  description: "Check the status of your Svarniq order.",
};

export default function TrackPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Track Your Order"
        description="Enter your order ID and email to see the latest status."
        breadcrumb={[{ label: "Track Order" }]}
      />
      <Container className="py-12 lg:py-16">
        <TrackOrderForm />
      </Container>
    </>
  );
}
