"use client";

import { useState } from "react";
import { heroSlides } from "@/data/hero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/**
 * Hero carousel. On desktop: text overlays the full-bleed model image with a
 * left fade. On mobile: image stacks above the copy. Slide state is local;
 * swap the manual controls for autoplay/embla later if desired.
 */
export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];
  const go = (dir: number) =>
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative bg-cream">
      {/* Background image (desktop overlay / mobile stacked) */}
      <div className="relative">
        <Media
          src={slide.image}
          alt={slide.imageAlt}
          tint="bg-cream-200"
          priority={index === 0}
          sizes="100vw"
          position="right center"
          className="h-64 w-full sm:h-80 lg:absolute lg:inset-0 lg:h-full"
        />
        <div className="pointer-events-none absolute inset-0 hidden bg-hero-fade lg:block" />

        <Container className="relative grid items-center gap-8 py-10 lg:min-h-[560px] lg:py-20">
          <div className="max-w-xl">
            <h1 className="text-display-xl font-medium text-cocoa">{slide.headline}</h1>
            <p className="mt-3 font-script text-script text-gold">{slide.script}</p>

            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {slide.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-ink-muted">
                  <Icon name="sparkle" size={16} className="text-gold" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href={slide.ctaHref} size="lg">
                {slide.ctaLabel}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3 lg:bottom-6">
        <button
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="grid h-9 w-9 place-items-center rounded-pill bg-ivory/80 text-ink shadow-soft hover:bg-ivory"
        >
          <Icon name="chevron-left" size={18} />
        </button>
        <div className="flex gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-pill transition-all",
                i === index ? "w-6 bg-gold" : "w-2 bg-ink-soft/40",
              )}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="grid h-9 w-9 place-items-center rounded-pill bg-ivory/80 text-ink shadow-soft hover:bg-ivory"
        >
          <Icon name="chevron-right" size={18} />
        </button>
      </div>
    </section>
  );
}
