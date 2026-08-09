import { announcement } from "@/data/navigation";
import { Icon } from "@/components/ui/Icon";

export function AnnouncementBar() {
  return (
    <div className="flex items-center justify-center gap-2 bg-chartreuse px-4 py-2 text-center">
      <Icon name="spark" size={16} className="text-ink" />
      <p className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-ink">
        {announcement}
      </p>
    </div>
  );
}
