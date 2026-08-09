import { cn } from "@/lib/cn";

type RatingProps = {
  value: number; // 0-5
  className?: string;
};

export function Rating({ value, className }: RatingProps) {
  return (
    <div
      className={cn("flex gap-0.5 text-gold", className)}
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill={i < value ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path d="M12 3l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18l-5.9 3 1.2-6.5L2.5 9.9 9 9l3-6z" />
        </svg>
      ))}
    </div>
  );
}
