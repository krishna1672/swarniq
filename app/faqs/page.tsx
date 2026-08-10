import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = {
  title: "FAQs — Svarniq Jewels",
  description: "Answers to common questions about materials, care, shipping, and returns.",
};

const faqs = [
  {
    q: "What material is Svarniq jewellery made of?",
    a: "18K real gold PVD plating over premium 304 stainless steel — hypoallergenic, skin-friendly, and tarnish-resistant.",
  },
  {
    q: "Will it tarnish or fade?",
    a: "Our PVD plating is designed for long-lasting colour and shine. Avoid perfumes and harsh chemicals, and store pieces dry to keep them looking their best.",
  },
  {
    q: "How long does shipping take?",
    a: "Orders are dispatched within 24–48 hours and typically delivered in 3–7 business days. Shipping is free on all orders above ₹699.",
  },
  {
    q: "Can I return or exchange an item?",
    a: "Yes — unused items in original packaging can be returned or exchanged within 7 days of delivery. See our Returns & Exchanges page for details.",
  },
  {
    q: "Is the jewellery suitable for sensitive skin?",
    a: "Absolutely. All pieces are hypoallergenic and nickel-safe, made for comfortable everyday wear.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Frequently Asked Questions"
        breadcrumb={[{ label: "FAQs" }]}
      />
      <Prose>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </Prose>
    </>
  );
}
