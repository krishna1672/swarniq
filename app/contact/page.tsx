import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Svarniq Jewels",
  description: "Questions about an order or a product? We're here to help.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Contact Us"
        description="Questions about an order or a product? We usually reply within 24 hours."
        breadcrumb={[{ label: "Contact Us" }]}
      />
      <Container className="grid gap-10 py-12 lg:grid-cols-2 lg:py-16">
        <ContactForm />
        <div className="text-sm text-ink-muted">
          <h2 className="font-serif text-lg font-semibold text-ink">Reach us directly</h2>
          <p className="mt-3">
            Email:{" "}
            <a href="mailto:care@svarniq.example" className="text-gold underline underline-offset-2">
              care@svarniq.example
            </a>
          </p>
          <p className="mt-1">Support hours: Mon–Sat, 10am–7pm IST</p>
          <p className="mt-4">
            For order help, please keep your order ID handy — you can also{" "}
            <a href="/track" className="text-gold underline underline-offset-2">
              track your order
            </a>{" "}
            any time.
          </p>
        </div>
      </Container>
    </>
  );
}
