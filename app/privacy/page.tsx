import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = {
  title: "Privacy Policy — Svarniq Jewels",
  description: "How Svarniq Jewels collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" breadcrumb={[{ label: "Privacy Policy" }]} />
      <Prose>
        <p>
          This is placeholder policy copy for the scaffold. Replace it with your
          reviewed legal text before launch.
        </p>
        <h2>Information we collect</h2>
        <p>
          We collect the details you provide at checkout and account sign-up — such
          as your name, contact information, and shipping address — along with basic
          usage analytics that help us improve the store.
        </p>
        <h2>How we use it</h2>
        <p>
          Your information is used to process orders, provide support, and (with your
          consent) send updates and offers. We never sell your personal data.
        </p>
        <h2>Your choices</h2>
        <p>
          You can request access to, correction of, or deletion of your data at any
          time by contacting us.
        </p>
      </Prose>
    </>
  );
}
