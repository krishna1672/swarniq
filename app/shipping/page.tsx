import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = {
  title: "Shipping & Delivery — Svarniq Jewels",
  description: "Shipping timelines, charges, and delivery information.",
};

export default function ShippingPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Shipping & Delivery"
        description="Fast, tracked delivery across India."
        breadcrumb={[{ label: "Shipping & Delivery" }]}
      />
      <Prose>
        <h2>Delivery timelines</h2>
        <p>
          Orders are processed within 24–48 hours and typically delivered in 3–7
          business days, depending on your location. You&apos;ll receive a tracking
          link by email and SMS once your order ships.
        </p>
        <h2>Shipping charges</h2>
        <p>
          Shipping is <strong>free on all orders above ₹699</strong>. A flat fee of
          ₹49 applies to orders below that.
        </p>
        <h2>Order tracking</h2>
        <p>
          Track your parcel any time from the <a href="/track">Track Order</a> page
          using your order ID.
        </p>
      </Prose>
    </>
  );
}
