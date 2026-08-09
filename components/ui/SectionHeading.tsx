import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  className?: string;
  align?: "center" | "left";
};

/**
 * Section title block: small uppercase eyebrow above a serif display title.
 * Used by "Two Worlds", "Indian/Western Jewellery", "Our Bestsellers", etc.
 */
export function SectionHeading({
  eyebrow,
  title,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-display-lg font-medium">{title}</h2>
    </div>
  );
}
