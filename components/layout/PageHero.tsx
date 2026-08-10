import { Container } from "@/components/ui/Container";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";

/** Header band for content pages (About, help, legal). */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb: Crumb[];
}) {
  return (
    <div className="border-b border-line bg-cream-50 py-12 lg:py-16">
      <Container>
        <Breadcrumb items={breadcrumb} />
        <div className="mt-6 max-w-2xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-2 text-display-lg font-medium text-ink">{title}</h1>
          {description && <p className="mt-3 text-ink-muted">{description}</p>}
        </div>
      </Container>
    </div>
  );
}
