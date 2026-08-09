import Image from "next/image";
import { cn } from "@/lib/cn";

type MediaProps = {
  src: string;
  alt: string;
  tint?: string; // bg shown behind/while the image loads
  className?: string;
  rounded?: string;
  priority?: boolean; // set for above-the-fold (hero) images
  sizes?: string; // responsive hint for next/image
  position?: string; // object-position, e.g. "right center"
};

/**
 * Image frame backed by next/image (fill + object-cover). The wrapper owns the
 * box (height/aspect/rounding via className); the image covers it. A tint sits
 * behind so the frame never flashes empty while loading.
 */
export function Media({
  src,
  alt,
  tint = "bg-cream-200",
  className,
  rounded,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  position = "center",
}: MediaProps) {
  return (
    <div className={cn("relative overflow-hidden", tint, rounded, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
