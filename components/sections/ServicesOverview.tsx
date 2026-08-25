import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCategoryCard } from "@/components/services/ServiceCategoryCard";
import { categories } from "@/data/services";

export function ServicesOverview() {
  return (
    <section id="services-overview" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Four ways we help you get things done"
          description="From a first logo to a fully working website, and everything digital in between."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <ServiceCategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
