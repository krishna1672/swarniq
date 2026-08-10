import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = {
  title: "Terms & Conditions — Svarniq Jewels",
  description: "The terms that govern use of the Svarniq Jewels store.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" breadcrumb={[{ label: "Terms & Conditions" }]} />
      <Prose>
        <p>
          This is placeholder terms copy for the scaffold. Replace it with your
          reviewed legal text before launch.
        </p>
        <h2>Use of the site</h2>
        <p>
          By using this store you agree to provide accurate information and to use
          the site for lawful purposes only.
        </p>
        <h2>Orders & pricing</h2>
        <p>
          All prices are listed in Indian Rupees and are inclusive of applicable
          taxes unless stated otherwise. We reserve the right to cancel orders in the
          event of pricing errors or stock issues.
        </p>
        <h2>Intellectual property</h2>
        <p>
          All content, imagery, and branding on this site belong to Svarniq Jewels
          and may not be reused without permission.
        </p>
      </Prose>
    </>
  );
}
