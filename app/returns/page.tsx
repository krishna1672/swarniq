import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = {
  title: "Returns & Exchanges — Svarniq Jewels",
  description: "Our 7-day return and exchange policy.",
};

export default function ReturnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Returns & Exchanges"
        description="Not quite right? We've made it easy."
        breadcrumb={[{ label: "Returns & Exchanges" }]}
      />
      <Prose>
        <h2>7-day returns</h2>
        <p>
          Unused items in their original packaging can be returned or exchanged
          within 7 days of delivery. To start a return, contact us with your order
          ID via the <a href="/contact">Contact Us</a> page.
        </p>
        <h2>Refunds</h2>
        <p>
          Once your return is received and inspected, refunds are issued to the
          original payment method within 5–7 business days.
        </p>
        <h2>Exchanges</h2>
        <p>
          Prefer a different piece or size? We&apos;ll help you swap it for something
          you love, subject to availability.
        </p>
      </Prose>
    </>
  );
}
