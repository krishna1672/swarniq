"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { products, productHref, subcategoryMeta } from "@/data/catalog";
import { Media } from "@/components/ui/Media";
import { Price } from "@/components/ui/Price";
import { Icon } from "@/components/ui/Icon";

const POPULAR = Object.entries(subcategoryMeta).map(([slug, m]) => ({
  label: m.title,
  href: `/${m.world}-jewellery/${slug}`,
}));

/** Full-screen search overlay. Filters the catalog client-side. */
export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input + lock scroll + Esc-to-close while open.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter((p) =>
        [p.name, p.subcategoryLabel, p.description, p.world]
          .join(" ")
          .toLowerCase()
          .includes(q),
      )
      .slice(0, 8);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Search">
      <button
        aria-label="Close search"
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 top-0 max-h-[85vh] overflow-y-auto bg-ivory shadow-card">
        <div className="mx-auto w-full max-w-container px-4 py-5 sm:px-6 lg:px-10">
          {/* Search field */}
          <div className="flex items-center gap-3 border-b border-line pb-4">
            <Icon name="search" size={22} className="text-ink-soft" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for necklaces, earrings, gold sets…"
              className="w-full bg-transparent text-lg text-ink placeholder:text-ink-soft focus:outline-none"
            />
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-ink-soft transition-colors hover:text-ink"
            >
              <Icon name="chevron-down" size={22} />
            </button>
          </div>

          {/* Body */}
          <div className="py-6">
            {query.trim() === "" ? (
              <div>
                <p className="eyebrow">Popular Categories</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {POPULAR.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={onClose}
                      className="rounded-pill border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-gold hover:text-gold"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <p className="text-ink-muted">
                No matches for “{query}”. Try a different term.
              </p>
            ) : (
              <div>
                <p className="eyebrow">
                  {results.length} {results.length === 1 ? "result" : "results"}
                </p>
                <ul className="mt-4 divide-y divide-line">
                  {results.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={productHref(p)}
                        onClick={onClose}
                        className="group flex items-center gap-4 py-3"
                      >
                        <Media
                          src={p.image}
                          alt={p.imageAlt}
                          tint="bg-cream-100"
                          rounded="rounded-lg"
                          className="h-14 w-14 shrink-0"
                          sizes="56px"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-serif text-base text-ink transition-colors group-hover:text-gold">
                            {p.name}
                          </p>
                          <p className="text-xs text-ink-soft">{p.subcategoryLabel}</p>
                        </div>
                        <Price amount={p.price} className="text-lg" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
