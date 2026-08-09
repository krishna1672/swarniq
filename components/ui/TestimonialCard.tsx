import type { Testimonial } from "@/lib/types";
import { Rating } from "./Rating";
import { Media } from "./Media";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-card bg-tint-peach/60 p-6">
      <Rating value={testimonial.rating} />
      <p className="flex-1 text-sm leading-relaxed text-ink-muted">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-3">
        <Media
          src={testimonial.avatar}
          alt={testimonial.name}
          tint="bg-cream-300"
          rounded="rounded-pill"
          className="h-11 w-11 shrink-0"
        />
        <div>
          <p className="font-serif text-base font-semibold text-ink">
            {testimonial.name}
          </p>
          <p className="text-xs text-ink-soft">{testimonial.location}</p>
        </div>
      </div>
    </article>
  );
}
