import { Container } from "./Container";

/**
 * Simple typographic wrapper for content/legal pages. Styles the raw heading
 * and paragraph tags its children render, so pages can be written as plain JSX.
 */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <Container className="py-12 lg:py-16">
      <div
        className="
          max-w-prose
          [&_h2]:mt-10 [&_h2]:text-display-md [&_h2]:font-medium [&_h2]:text-ink
          [&_h3]:mt-8 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink
          [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-ink-muted
          [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-ink-muted [&_li]:mt-2
          [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2
        "
      >
        {children}
      </div>
    </Container>
  );
}
