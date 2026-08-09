import { cn } from "@/lib/cn";
import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/**
 * Centered content band. Maps the Figma ~1766px content area onto a
 * max-w-container (1520px) with responsive gutters from tailwind's container
 * padding scale.
 */
export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-container px-4 sm:px-6 lg:px-10 xl:px-16",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
