import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ListChecks, Users, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ } from "@/components/services/FAQ";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import {
  getCategory,
  getRelatedServices,
  getServiceBySlug,
  services,
} from "@/data/services";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const category = getCategory(service.category)!;
  const related = getRelatedServices(service);

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: category.title, path: `/services#${category.slug}` },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceJsonLd(service),
            faqJsonLd(service.faq),
            breadcrumbJsonLd(breadcrumbItems),
          ]),
        }}
      />

      <section className="border-b border-brand-100/70 bg-brand-50/50 py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={breadcrumbItems.map((b) => ({ name: b.name, href: b.path }))}
          />
          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-brand-100">
            {category.emoji} {category.title}
          </span>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-700/80 sm:text-lg">
            {service.longDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              Browse All Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-brand-900">
                <ListChecks className="h-5 w-5 text-brand-500" aria-hidden="true" />
                What We Offer
              </h2>
              <ul className="mt-4 space-y-3">
                {service.whatWeOffer.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-brand-700/85 sm:text-base">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-xl font-semibold text-brand-900">
                Benefits
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.benefits.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-brand-100 bg-white p-4 text-sm text-brand-700/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
              <h2 className="flex items-center gap-2 text-base font-semibold text-brand-900">
                <Users className="h-4 w-4 text-brand-500" aria-hidden="true" />
                Suitable For
              </h2>
              <ul className="mt-4 space-y-2.5">
                {service.suitableFor.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-brand-700/85"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <ProcessSteps />

      <section className="py-14 sm:py-16" aria-labelledby="faq-heading">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            id="faq-heading"
            title="Frequently asked questions"
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQ items={service.faq} />
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-brand-100/70 py-14 sm:py-16">
          <Container>
            <SectionHeading
              eyebrow="Keep Exploring"
              title="Related services"
              className="mx-auto"
              align="center"
            />
            <div className="mt-10">
              <ServiceGrid services={related} />
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title={`Ready to get started with ${service.title.toLowerCase()}?`}
      />
    </>
  );
}
