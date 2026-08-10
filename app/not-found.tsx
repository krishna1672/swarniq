import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center lg:py-32">
      <span className="eyebrow">404</span>
      <h1 className="mt-3 text-display-lg font-medium text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
        you back to something beautiful.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Back to Home</Button>
        <Button href="/collections" variant="outline">
          Shop Collections
        </Button>
      </div>
    </Container>
  );
}
