import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { TrustBar } from "@/components/sections/TrustBar";
import { TwoWorlds } from "@/components/sections/TwoWorlds";
import { CategoryCarousel } from "@/components/sections/CategoryCarousel";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { BestsellersCarousel } from "@/components/sections/BestsellersCarousel";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhySvarniq } from "@/components/sections/WhySvarniq";
import { indianCategories, westernCategories } from "@/data/categories";
import { featuresIndian, featuresWestern } from "@/data/features";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <TrustBar />
      <TwoWorlds />

      <CategoryCarousel
        eyebrow="Indian Jewellery"
        title="Indian Jewellery"
        categories={indianCategories}
        variant="portrait"
      />
      <FeatureStrip features={featuresIndian} />

      <CategoryCarousel
        eyebrow="Western Jewellery"
        title="Western Jewellery"
        categories={westernCategories}
        variant="landscape"
      />
      <FeatureStrip features={featuresWestern} />

      <BestsellersCarousel />
      <Testimonials />
      <WhySvarniq />
    </>
  );
}
