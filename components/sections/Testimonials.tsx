import { Container } from "@/components/ui/Container";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

/** "Loved by 20,000+ Happy Customers" — 5 review cards. */
export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-2 text-display-lg font-medium">
            Loved by 20,000+ Happy Customers
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
