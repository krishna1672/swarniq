import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Prose } from "@/components/ui/Prose";
import { WhySvarniq } from "@/components/sections/WhySvarniq";

export const metadata: Metadata = {
  title: "About Us — Svarniq Jewels",
  description: "Where elegance meets everyday — the story behind Svarniq Jewels.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Where Elegance Meets Everyday"
        description="Svarniq Jewels was founded to make premium, tarnish-resistant jewellery that feels as good as it looks — for every woman, every day."
        breadcrumb={[{ label: "About Us" }]}
      />
      <Prose>
        <p>
          Svarniq began with a simple idea: fine-looking jewellery shouldn&apos;t be
          reserved for special occasions. We blend traditional Indian craftsmanship
          with modern western silhouettes, so there&apos;s something for every outfit
          and every mood.
        </p>

        <h2>Crafted to last</h2>
        <p>
          Every piece is made with 18K real gold PVD plating over premium 304
          stainless steel — hypoallergenic, skin-friendly, and tarnish-resistant.
          The result is everyday luxury that keeps its shine.
        </p>

        <h2>Made by women, for women</h2>
        <p>
          We&apos;re a women-led brand designing for real, confident women. One
          percent of our profits supports education and brighter futures for girls —
          because beautiful things should do good, too.
        </p>
      </Prose>
      <WhySvarniq />
    </>
  );
}
