import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { valueProps } from "@/data/valueProps";

/** "Why Svarniq Jewels?" — gradient band with 5 value props. */
export function WhySvarniq() {
  return (
    <section className="bg-why-gradient py-14 lg:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:items-center">
          <h2 className="text-display-lg font-medium text-ink">
            Why <span className="font-script text-gold">Svarniq Jewels?</span>
          </h2>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {valueProps.map((v) => (
              <div key={v.id} className="flex flex-col gap-2">
                <span className="text-ink">
                  <Icon name={v.icon as IconName} size={28} />
                </span>
                <h3 className="font-sans text-sm font-bold uppercase tracking-wide text-ink">
                  {v.title}
                </h3>
                <p className="text-xs leading-relaxed text-ink-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
