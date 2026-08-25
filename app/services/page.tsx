import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CTASection } from "@/components/sections/CTASection";
import { categories, getServicesByCategory } from "@/data/services";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Our Services",
  description:
    "Explore all digital services from Dalgaon Digital Corner — design, websites, online & digital services, and mobile assistance, all in one place.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="border-b border-brand-100/70 bg-brand-50/50 py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
            ]}
          />
          <SectionHeading
            eyebrow="Our Services"
            title="Everything we offer, organised by category"
            description={`Browse all of ${siteConfig.name}'s services below. Tap any service to see what's included, or reach out if you're not sure what you need.`}
            className="mt-6"
          />
        </Container>
      </section>

      {categories.map((category) => {
        const categoryServices = getServicesByCategory(category.slug);
        return (
          <section
            key={category.slug}
            id={category.slug}
            aria-labelledby={`${category.slug}-heading`}
            className="scroll-mt-24 border-b border-brand-100/70 py-14 sm:py-16"
          >
            <Container>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-800 text-accent-300">
                  <category.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2
                    id={`${category.slug}-heading`}
                    className="text-xl font-semibold text-brand-900 sm:text-2xl"
                  >
                    {category.emoji} {category.title}
                  </h2>
                  <p className="text-sm text-brand-600/80">
                    {categoryServices.length} services
                  </p>
                </div>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-700/75 sm:text-base">
                {category.description}
              </p>
              <div className="mt-8">
                <ServiceGrid services={categoryServices} />
              </div>
            </Container>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
