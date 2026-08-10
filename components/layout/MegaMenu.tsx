import Link from "next/link";
import type { MegaMenu as MegaMenuType } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const cardCols: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

/** Contents of a nav hover panel: optional link columns + image cards + CTA. */
export function MegaMenu({
  menu,
  onNavigate,
}: {
  menu: MegaMenuType;
  onNavigate?: () => void;
}) {
  const hasColumns = !!menu.columns?.length;
  const cardCount = menu.cards?.length ?? 0;

  return (
    <Container className="py-8">
      <div className="flex gap-12">
        {/* Link columns */}
        {hasColumns && (
          <div className="flex gap-12">
            {menu.columns!.map((col) => (
              <div key={col.title}>
                <p className="eyebrow">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        onClick={onNavigate}
                        className="text-sm text-ink-muted transition-colors hover:text-gold"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Image cards */}
        {cardCount > 0 && (
          <div
            className={cn(
              "grid gap-5",
              hasColumns ? "w-[380px]" : "flex-1",
              hasColumns ? "grid-cols-2" : cardCols[Math.min(cardCount, 4)],
            )}
          >
            {menu.cards!.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                onClick={onNavigate}
                className="group"
              >
                <Media
                  src={card.image}
                  alt={card.title}
                  tint="bg-cream-100"
                  rounded="rounded-card"
                  className="aspect-[4/3]"
                  sizes="220px"
                />
                <p className="mt-3 font-serif text-base font-medium text-ink transition-colors group-hover:text-gold">
                  {card.title}
                </p>
                {card.subtitle && (
                  <p className="mt-0.5 text-xs text-ink-muted">{card.subtitle}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      {menu.cta && (
        <Link
          href={menu.cta.href}
          onClick={onNavigate}
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-eyebrow text-gold transition-colors hover:text-gold-dark"
        >
          {menu.cta.label}
          <Icon name="arrow-right" size={14} />
        </Link>
      )}
    </Container>
  );
}
