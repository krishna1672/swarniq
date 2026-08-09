"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

/**
 * Site header. Full horizontal nav from `lg`; below that it collapses to a
 * hamburger + slide-down drawer (mobile behavior is authored here since the
 * Figma file has no mobile comp).
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        {/* Mobile: menu toggle */}
        <button
          type="button"
          className="lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "chevron-down" : "arrow-right"} size={24} className="text-ink" />
        </button>

        {/* Logo */}
        <Logo width={180} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-eyebrow text-ink transition-colors hover:text-gold"
              >
                {item.label}
                {item.children && item.children.length > 0 && (
                  <Icon name="chevron-down" size={14} />
                )}
              </Link>
              {item.children && item.children.length > 0 && (
                <div className="invisible absolute left-0 top-full z-50 min-w-56 translate-y-1 rounded-card border border-line bg-ivory p-2 opacity-0 shadow-card transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-cream-100 hover:text-ink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Utility icons */}
        <div className="flex items-center gap-4 text-ink">
          <button aria-label="Search" className="hover:text-gold">
            <Icon name="search" size={20} />
          </button>
          <button aria-label="Account" className="hidden hover:text-gold sm:block">
            <Icon name="user" size={20} />
          </button>
          <button aria-label="Wishlist" className="hover:text-gold">
            <Icon name="wishlist" size={20} />
          </button>
          <button aria-label="Cart" className="hover:text-gold">
            <Icon name="cart" size={20} />
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-line transition-[max-height] duration-300 ease-smooth lg:hidden",
          open ? "max-h-[80vh]" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {mainNav.map((item) => (
            <div key={item.label} className="border-b border-line/60 py-2">
              <Link
                href={item.href}
                className="font-sans text-sm font-semibold uppercase tracking-wide text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && item.children.length > 0 && (
                <div className="mt-2 flex flex-col gap-1 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="text-sm text-ink-muted"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Container>
      </div>
    </header>
  );
}
