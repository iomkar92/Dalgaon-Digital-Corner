import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustHighlights } from "@/components/sections/TrustHighlights";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustHighlights />
      <ServicesOverview />
      <FeaturedServices />
      <WhyChooseUs />
      <ProcessSteps />
      <CTASection />
    </>
  );
}
