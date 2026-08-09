import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { worlds } from "@/data/worlds";

/** "Two Worlds, Your Style" — Indian vs Western split cards. */
export function TwoWorlds() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">Shop Your Style</span>
          <h2 className="mt-2 text-display-lg font-medium">Two Worlds, Your Style</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {worlds.map((world) => (
            <article
              key={world.id}
              className="relative overflow-hidden rounded-card shadow-card"
            >
              <Media
                src={world.image}
                alt={world.imageAlt}
                tint={world.tint}
                className="min-h-[360px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                position="center"
              />
              <div className="absolute inset-y-0 left-0 flex max-w-sm flex-col justify-start gap-4 p-8">
                <span className="eyebrow">{world.eyebrow}</span>
                <h3 className="text-display-md font-medium text-ink">{world.title}</h3>
                <Button href={world.ctaHref} className="self-start">
                  {world.ctaLabel}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
