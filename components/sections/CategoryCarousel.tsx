"use client";

import { useRef } from "react";
import type { Category } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { CategoryCard, type CategoryVariant } from "@/components/ui/CategoryCard";
import { Icon } from "@/components/ui/Icon";

type Props = {
  eyebrow: string;
  title: string;
  categories: Category[];
  variant?: CategoryVariant; // portrait (Indian) | landscape (Western)
};

// Static column classes so Tailwind keeps them (no dynamic interpolation).
const lgCols: Record<CategoryVariant, string> = {
  portrait: "lg:grid-cols-4",
  landscape: "lg:grid-cols-3",
};

/**
 * Reused for both Indian (4 portrait cards) and Western (3 landscape cards)
 * sections. Responsive: 1-up mobile scroll-snap -> 2-up sm -> full row on lg,
 * with arrow controls that scroll the track.
 */
export function CategoryCarousel({
  eyebrow,
  title,
  categories,
  variant = "portrait",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="py-14 lg:py-20">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-1 flex-col items-center text-center">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-2 text-display-lg font-medium">{title}</h2>
          </div>
        </div>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            className={`snap-x-track grid auto-cols-[80%] grid-flow-col gap-6 overflow-x-auto pb-2 sm:auto-cols-[45%] lg:grid-flow-row lg:auto-cols-auto ${lgCols[variant]} lg:overflow-visible`}
          >
            {categories.map((c) => (
              <div key={c.id} className="snap-item">
                <CategoryCard category={c} variant={variant} />
              </div>
            ))}
          </div>

          {/* Arrows: only meaningful while the track scrolls (below lg) */}
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="absolute -left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-pill bg-ivory text-ink shadow-card lg:hidden"
          >
            <Icon name="chevron-left" size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="absolute -right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-pill bg-ivory text-ink shadow-card lg:hidden"
          >
            <Icon name="chevron-right" size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}
