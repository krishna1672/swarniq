import Link from "next/link";
import { Icon } from "./Icon";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-ink-soft">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1">
              {c.href && !last ? (
                <Link href={c.href} className="transition-colors hover:text-gold">
                  {c.label}
                </Link>
              ) : (
                <span className={last ? "text-ink" : undefined}>{c.label}</span>
              )}
              {!last && <Icon name="chevron-right" size={12} className="text-ink-soft" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
