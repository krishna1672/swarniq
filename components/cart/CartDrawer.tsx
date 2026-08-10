"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { bestsellers } from "@/data/catalog";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** Slide-in cart drawer. */
export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQty, addItem, subtotal, count } =
    useCart();

  // Recommend bestsellers not already in the cart.
  const suggestions = bestsellers
    .filter((b) => !items.some((i) => i.id === b.id))
    .slice(0, 2);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivory shadow-card transition-transform duration-300 ease-smooth",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-lg font-semibold text-ink">
            Your Cart {count > 0 && <span className="text-ink-soft">({count})</span>}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink-soft transition-colors hover:text-ink"
          >
            <Icon name="chevron-right" size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="text-ink-soft">
              <Icon name="cart" size={40} />
            </span>
            <p className="text-ink-muted">Your cart is empty.</p>
            <Link
              href="/collections"
              onClick={closeCart}
              className="inline-flex h-11 items-center rounded-cta bg-gold px-6 text-xs font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-gold-dark"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 py-4">
                  <Link href={`/products/${item.slug}`} onClick={closeCart}>
                    <Media
                      src={item.image}
                      alt={item.imageAlt}
                      tint="bg-cream-100"
                      rounded="rounded-lg"
                      className="h-20 w-20 shrink-0"
                      sizes="80px"
                    />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <Link
                          href={`/products/${item.slug}`}
                          onClick={closeCart}
                          className="block truncate font-serif text-sm font-medium text-ink hover:text-gold"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-ink-soft">{item.subcategoryLabel}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="shrink-0 text-ink-soft transition-colors hover:text-gold"
                      >
                        <Icon name="chevron-down" size={16} className="rotate-45" />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-2">
                      {/* Qty stepper */}
                      <div className="flex items-center rounded-pill border border-line">
                        <button
                          onClick={() => setQty(item.id, item.qty - 1)}
                          aria-label="Decrease quantity"
                          className="grid h-8 w-8 place-items-center text-ink-muted hover:text-gold"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm text-ink">{item.qty}</span>
                        <button
                          onClick={() => setQty(item.id, item.qty + 1)}
                          aria-label="Increase quantity"
                          className="grid h-8 w-8 place-items-center text-ink-muted hover:text-gold"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-serif text-sm font-semibold text-ink">
                        {inr.format(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Upsell */}
            {suggestions.length > 0 && (
              <div className="border-t border-line px-6 py-4">
                <p className="eyebrow">You might also like</p>
                <ul className="mt-3 space-y-3">
                  {suggestions.map((p) => (
                    <li key={p.id} className="flex items-center gap-3">
                      <Link href={`/products/${p.slug}`} onClick={closeCart}>
                        <Media
                          src={p.image}
                          alt={p.imageAlt}
                          tint="bg-cream-100"
                          rounded="rounded-lg"
                          className="h-12 w-12 shrink-0"
                          sizes="48px"
                        />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-serif text-sm text-ink">{p.name}</p>
                        <p className="text-xs text-ink-soft">{inr.format(p.price)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => addItem(p)}
                        aria-label={`Add ${p.name} to cart`}
                        className="grid h-8 w-8 place-items-center rounded-full border border-line text-ink transition-colors hover:border-gold hover:text-gold"
                      >
                        +
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer */}
            <div className="border-t border-line px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-ink-muted">Subtotal</span>
                <span className="font-serif text-xl font-semibold text-ink">
                  {inr.format(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-ink-soft">
                Shipping &amp; taxes calculated at checkout.
              </p>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="mt-4 flex h-14 w-full items-center justify-center rounded-cta bg-gold text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-gold-dark"
              >
                Checkout
              </Link>
              <button
                onClick={closeCart}
                className="mt-3 w-full text-center text-xs uppercase tracking-eyebrow text-ink-soft transition-colors hover:text-gold"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
