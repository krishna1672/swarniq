import type { FeatureItem as FeatureItemType } from "@/lib/types";
import { Icon, type IconName } from "./Icon";

/** One icon + title + subtitle unit in the feature strips. */
export function FeatureItem({ feature }: { feature: FeatureItemType }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-gold">
        <Icon name={feature.icon as IconName} size={24} />
      </span>
      <div>
        <p className="font-sans text-xs font-bold uppercase tracking-wide text-ink">
          {feature.title}
        </p>
        <p className="mt-1 text-xs text-ink-muted">{feature.subtitle}</p>
      </div>
    </div>
  );
}
