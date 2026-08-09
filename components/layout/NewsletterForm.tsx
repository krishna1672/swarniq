"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

/** Footer email capture. Wire `onSubmit` to your ESP/commerce backend later. */
export function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="flex items-center overflow-hidden rounded-cta border border-line bg-ivory"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: POST to newsletter endpoint
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="px-4 py-3 text-gold transition-colors hover:text-gold-dark"
      >
        <Icon name="arrow-right" size={18} />
      </button>
    </form>
  );
}
