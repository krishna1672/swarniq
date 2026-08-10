"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const FREE_SHIPPING_THRESHOLD = 699;
const SHIPPING_FEE = 49;

const fieldClass =
  "mt-1.5 w-full rounded-cta border border-line bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-gold focus:outline-none";

export function CheckoutView() {
  const { items, subtotal, clear } = useCart();
  const [order, setOrder] = useState<{ id: string; total: number } | null>(null);

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  // --- Confirmation ---
  if (order) {
    return (
      <Container className="flex flex-col items-center py-20 text-center lg:py-28">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/10 text-gold">
          <Icon name="gift" size={32} />
        </span>
        <h1 className="mt-6 text-display-lg font-medium text-ink">Order confirmed</h1>
        <p className="mt-3 max-w-md text-ink-muted">
          Thank you! Your order{" "}
          <span className="font-semibold text-ink">{order.id}</span> has been placed.
          A confirmation would be emailed to you in a real store.
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          Total paid: {inr.format(order.total)}
        </p>
        <Link
          href="/collections"
          className="mt-8 inline-flex h-12 items-center rounded-cta bg-gold px-7 text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-gold-dark"
        >
          Continue Shopping
        </Link>
      </Container>
    );
  }

  // --- Empty ---
  if (items.length === 0) {
    return (
      <Container className="flex flex-col items-center py-20 text-center lg:py-28">
        <span className="text-ink-soft">
          <Icon name="cart" size={44} />
        </span>
        <h1 className="mt-4 text-display-md font-medium text-ink">Your cart is empty</h1>
        <p className="mt-2 max-w-md text-ink-muted">
          Add a few pieces before heading to checkout.
        </p>
        <Link
          href="/collections"
          className="mt-6 inline-flex h-11 items-center rounded-cta bg-gold px-6 text-xs font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-gold-dark"
        >
          Explore Collections
        </Link>
      </Container>
    );
  }

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo only: generate a reference, clear the cart, show confirmation.
    const id = "SVQ-" + Math.floor(10000 + Math.random() * 89999);
    setOrder({ id, total });
    clear();
  };

  return (
    <Container className="py-12 lg:py-16">
      <form onSubmit={placeOrder} className="grid gap-12 lg:grid-cols-[1fr_400px]">
        {/* Details */}
        <div>
          <h2 className="text-display-md font-medium text-ink">Contact & Shipping</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-2 text-sm font-semibold text-ink">
              Full name
              <input required placeholder="Your name" className={fieldClass} />
            </label>
            <label className="block text-sm font-semibold text-ink">
              Email
              <input type="email" required placeholder="you@example.com" className={fieldClass} />
            </label>
            <label className="block text-sm font-semibold text-ink">
              Phone
              <input type="tel" required placeholder="10-digit mobile" className={fieldClass} />
            </label>
            <label className="block sm:col-span-2 text-sm font-semibold text-ink">
              Address
              <input required placeholder="House no, street, area" className={fieldClass} />
            </label>
            <label className="block text-sm font-semibold text-ink">
              City
              <input required placeholder="City" className={fieldClass} />
            </label>
            <label className="block text-sm font-semibold text-ink">
              PIN code
              <input required placeholder="6-digit PIN" className={fieldClass} />
            </label>
          </div>

          <h2 className="mt-10 text-display-md font-medium text-ink">Payment</h2>
          <div className="mt-4 rounded-card border border-line bg-cream-50 p-5 text-sm text-ink-muted">
            <p className="font-semibold text-ink">Demo checkout</p>
            <p className="mt-1">
              This is a scaffold store — no real payment is processed and nothing
              ships. Placing the order just clears your cart and shows a
              confirmation.
            </p>
          </div>
        </div>

        {/* Order summary */}
        <aside className="lg:sticky lg:top-28 h-fit rounded-card border border-line bg-cream-50 p-6">
          <h2 className="font-serif text-lg font-semibold text-ink">Order Summary</h2>
          <ul className="mt-4 divide-y divide-line">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-3 py-3">
                <Media
                  src={item.image}
                  alt={item.imageAlt}
                  tint="bg-cream-100"
                  rounded="rounded-lg"
                  className="h-14 w-14 shrink-0"
                  sizes="56px"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-serif text-sm text-ink">{item.name}</p>
                  <p className="text-xs text-ink-soft">Qty {item.qty}</p>
                </div>
                <span className="text-sm font-semibold text-ink">
                  {inr.format(item.price * item.qty)}
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink-muted">Subtotal</dt>
              <dd className="text-ink">{inr.format(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-muted">Shipping</dt>
              <dd className="text-ink">{shipping === 0 ? "Free" : inr.format(shipping)}</dd>
            </div>
            <div className="flex justify-between border-t border-line pt-3 text-base">
              <dt className="font-semibold text-ink">Total</dt>
              <dd className="font-serif text-lg font-semibold text-ink">
                {inr.format(total)}
              </dd>
            </div>
          </dl>

          <button
            type="submit"
            className="mt-6 flex h-14 w-full items-center justify-center rounded-cta bg-gold text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-gold-dark"
          >
            Place Order
          </button>
        </aside>
      </form>
    </Container>
  );
}
