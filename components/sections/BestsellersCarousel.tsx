"use client";

import { useRef } from "react";
import { bestsellers } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { Icon } from "@/components/ui/Icon";

/** "Our Bestsellers" — 5 product cards, scroll-snap below xl. */
export function BestsellersCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="py-14 lg:py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">Our Bestsellers</span>
          <h2 className="mt-2 text-display-lg font-medium">Loved &amp; Best Selling</h2>
        </div>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            className="snap-x-track grid auto-cols-[70%] grid-flow-col gap-6 overflow-x-auto pb-2 sm:auto-cols-[40%] lg:auto-cols-[22%] xl:grid-flow-row xl:auto-cols-auto xl:grid-cols-5 xl:overflow-visible"
          >
            {bestsellers.map((p) => (
              <div key={p.id} className="snap-item">
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="absolute -left-3 top-1/3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-pill bg-ivory text-ink shadow-card xl:hidden"
          >
            <Icon name="chevron-left" size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="absolute -right-3 top-1/3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-pill bg-ivory text-ink shadow-card xl:hidden"
          >
            <Icon name="chevron-right" size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}
