import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

/** Brand wordmark (exported from Figma). Links home. */
export function Logo({ className, width = 190 }: { className?: string; width?: number }) {
  return (
    <Link href="/" aria-label="Svarniq Jewels — home" className={cn("inline-block", className)}>
      <Image
        src="/images/brand/logo.svg"
        alt="Svarniq Jewels"
        width={width}
        height={Math.round((width * 73) / 249.417)}
        priority
        unoptimized
      />
    </Link>
  );
}
