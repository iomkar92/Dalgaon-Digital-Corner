import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { getFeaturedServices } from "@/data/services";
import { Button } from "@/components/ui/Button";

export function FeaturedServices() {
  const featured = getFeaturedServices();

  return (
    <section className="bg-brand-50/60 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Popular Picks"
            title="Services people ask for most"
            description="A quick look at what customers in Dalgaon request the most."
            className="max-w-xl"
          />
          <Button href="/services" variant="ghost">
            View All Services
          </Button>
        </div>
        <div className="mt-10">
          <ServiceGrid services={featured} />
        </div>
      </Container>
    </section>
  );
}
