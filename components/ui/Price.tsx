import { cn } from "@/lib/cn";

type PriceProps = {
  amount: number;
  className?: string;
};

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function Price({ amount, className }: PriceProps) {
  return (
    <span className={cn("font-serif text-2xl font-semibold text-ink", className)}>
      {inr.format(amount)}
    </span>
  );
}
