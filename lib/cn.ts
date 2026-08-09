/**
 * Tiny className joiner. Keeps the scaffold dependency-free; swap for
 * `clsx` + `tailwind-merge` if class conflicts start to bite.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
