import { Container } from "@/components/ui/Container";
import { trustBar } from "@/data/valueProps";

/** Thin band of trust points under the hero, split by vertical hairlines. */
export function TrustBar() {
  return (
    <div className="border-y border-line bg-cream-50">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-0 gap-y-3 py-4 sm:justify-between">
          {trustBar.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-4 px-4 text-center sm:px-6"
            >
              <span className="font-serif text-base text-ink sm:text-lg">{item}</span>
              {i < trustBar.length - 1 && (
                <span className="hidden h-6 w-px bg-line sm:block" aria-hidden />
              )}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
