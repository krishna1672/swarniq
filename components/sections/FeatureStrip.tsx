import type { FeatureItem as FeatureItemType } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { FeatureItem } from "@/components/ui/FeatureItem";

/** 4-up feature row (used twice: under Indian + Western carousels). */
export function FeatureStrip({ features }: { features: FeatureItemType[] }) {
  return (
    <section className="py-6">
      <Container>
        <div className="grid grid-cols-1 gap-8 rounded-card border border-line bg-cream-50 px-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.id}
              className={
                i < features.length - 1
                  ? "lg:border-r lg:border-line lg:pr-6"
                  : undefined
              }
            >
              <FeatureItem feature={f} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
