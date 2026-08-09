import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
};

/**
 * Pill CTA used ~10x across the page (hero, world cards, category/product
 * cards, footer). Gold solid is the primary; outline is the quieter variant.
 */
export function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  withArrow = true,
  className,
}: ButtonProps) {
  const sizes = {
    sm: "h-9 px-4 text-[11px]",
    md: "h-11 px-5 text-xs",
    lg: "h-14 px-7 text-sm",
  };

  const variants = {
    solid: "bg-gold text-ivory hover:bg-gold-dark",
    outline: "border border-gold text-gold hover:bg-gold hover:text-ivory",
  };

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-cta font-sans font-semibold uppercase tracking-wide transition-colors duration-300 ease-smooth",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      {withArrow && (
        <Icon
          name="arrow-right"
          size={16}
          className="transition-transform duration-300 ease-smooth group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
