"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

/** UI-only contact form — wire to an email/ticketing backend later. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="max-w-md rounded-card bg-cream-100 p-6">
        <p className="font-serif text-lg text-ink">Thanks for reaching out!</p>
        <p className="mt-2 text-sm text-ink-muted">
          This is a demo form, so nothing was sent — but this is where we&apos;d
          confirm we&apos;ve received your message.
        </p>
      </div>
    );
  }

  return (
    <form
      className="max-w-md"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {[
        { id: "name", label: "Name", type: "text", placeholder: "Your name" },
        { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
      ].map((f) => (
        <div key={f.id} className="mb-4">
          <label htmlFor={f.id} className="text-sm font-semibold text-ink">
            {f.label}
          </label>
          <input
            id={f.id}
            type={f.type}
            required
            placeholder={f.placeholder}
            className="mt-2 w-full rounded-cta border border-line bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-gold focus:outline-none"
          />
        </div>
      ))}
      <label htmlFor="message" className="text-sm font-semibold text-ink">
        Message
      </label>
      <textarea
        id="message"
        required
        rows={4}
        placeholder="How can we help?"
        className="mt-2 w-full rounded-cta border border-line bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        className="mt-6 inline-flex h-12 items-center gap-2 rounded-cta bg-gold px-6 text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-gold-dark"
      >
        Send Message
        <Icon name="arrow-right" size={16} />
      </button>
    </form>
  );
}
