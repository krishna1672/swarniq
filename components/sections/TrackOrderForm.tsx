"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

/** UI-only order tracker — wire to the fulfilment API later. */
export function TrackOrderForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="max-w-md"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor="order-id" className="text-sm font-semibold text-ink">
        Order ID
      </label>
      <input
        id="order-id"
        required
        placeholder="e.g. SVQ-10428"
        className="mt-2 w-full rounded-cta border border-line bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-gold focus:outline-none"
      />
      <label htmlFor="order-email" className="mt-4 block text-sm font-semibold text-ink">
        Email
      </label>
      <input
        id="order-email"
        type="email"
        required
        placeholder="you@example.com"
        className="mt-2 w-full rounded-cta border border-line bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        className="mt-6 inline-flex h-12 items-center gap-2 rounded-cta bg-gold px-6 text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-gold-dark"
      >
        Track Order
        <Icon name="arrow-right" size={16} />
      </button>

      {submitted && (
        <p className="mt-4 rounded-cta bg-cream-100 px-4 py-3 text-sm text-ink-muted">
          Tracking isn&apos;t connected in this demo yet — this is where your order
          status would appear.
        </p>
      )}
    </form>
  );
}
