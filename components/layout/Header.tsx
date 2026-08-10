"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { mainNav, megaMenus } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { MegaMenu } from "./MegaMenu";
import { SearchOverlay } from "./SearchOverlay";
import { useCart } from "@/components/cart/CartProvider";
import { cn } from "@/lib/cn";

/**
 * Site header. From `lg`, hovering Collections / Indian / Western opens a
 * full-width mega-menu panel (category thumbnails + links). Below `lg` it
 * collapses to a hamburger + slide-down drawer.
 */
export function Header() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [active, setActive] = useState<string | null>(null); // desktop mega menu
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, openCart } = useCart();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(megaMenus[label] ? label : null);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActive(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const activeMenu = active ? megaMenus[active] : null;

  return (
    <header
      className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur"
      onMouseLeave={scheduleClose}
    >
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
          {mainNav.map((item) => {
            const hasMenu = !!megaMenus[item.label];
            return (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => openMenu(item.label)}
                className={cn(
                  "flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-eyebrow transition-colors hover:text-gold",
                  active === item.label ? "text-gold" : "text-ink",
                )}
              >
                {item.label}
                {hasMenu && (
                  <Icon
                    name="chevron-down"
                    size={14}
                    className={cn(
                      "transition-transform duration-200",
                      active === item.label && "rotate-180",
                    )}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Utility icons */}
        <div className="flex items-center gap-4 text-ink" onMouseEnter={() => setActive(null)}>
          <button
            aria-label="Search"
            className="hover:text-gold"
            onClick={() => setSearchOpen(true)}
          >
            <Icon name="search" size={20} />
          </button>
          <button aria-label="Account" className="hidden hover:text-gold sm:block">
            <Icon name="user" size={20} />
          </button>
          <button aria-label="Wishlist" className="hover:text-gold">
            <Icon name="wishlist" size={20} />
          </button>
          <button
            aria-label={`Cart${count > 0 ? ` (${count})` : ""}`}
            onClick={openCart}
            className="relative hover:text-gold"
          >
            <Icon name="cart" size={20} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[10px] font-semibold leading-none text-ivory">
                {count}
              </span>
            )}
          </button>
        </div>
      </Container>

      {/* Desktop mega-menu panel */}
      {activeMenu && (
        <div
          className="absolute inset-x-0 top-full hidden border-t border-line bg-ivory shadow-card lg:block"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <MegaMenu menu={activeMenu} onNavigate={() => setActive(null)} />
        </div>
      )}

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

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
