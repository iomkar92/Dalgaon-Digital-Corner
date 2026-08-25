import type { Metadata } from "next";
import { Target, Users2, HeartHandshake, Compass } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Dalgaon Digital Corner — a local digital services and creative solutions business helping individuals and businesses in Dalgaon.",
  path: "/about",
});

const highlights = [
  {
    icon: Compass,
    title: "Our Mission",
    description:
      "To make quality design and digital services accessible to everyone in Dalgaon — from a first-time shop owner to an established local business.",
  },
  {
    icon: Target,
    title: "What We Do",
    description:
      "We handle design, websites, online applications, and mobile assistance, so you can focus on running your work instead of figuring out the technical side.",
  },
  {
    icon: Users2,
    title: "Who We Serve",
    description:
      "Individuals, students, shop owners, and small businesses across Dalgaon who need reliable digital help without going to a big city.",
  },
  {
    icon: HeartHandshake,
    title: "Why Customers Choose Us",
    description:
      "We take the time to understand what you actually need, explain things in plain language, and follow through until the job is complete.",
  },
];

export default function AboutPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
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
              { name: "About", href: "/about" },
            ]}
          />
          <SectionHeading
            eyebrow="About Us"
            title={`About ${siteConfig.name}`}
            description="A local digital services and creative solutions business, built to give individuals and small businesses in Dalgaon a real digital presence."
            className="mt-6"
          />
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-brand-100 bg-white p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-brand-900">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-700/80 sm:text-base">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-brand-100/70 bg-brand-50/60 py-14 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="text-xl font-semibold text-brand-900 sm:text-2xl">
            How we work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-700/80">
            Dalgaon Digital Corner covers four areas — design, websites,
            online &amp; digital services, and mobile assistance — so most of
            what you need is available in one place. We keep the process
            simple: you tell us what you&rsquo;re after, we put together the work,
            you review it, and we refine it until it&rsquo;s right.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-700/80">
            We&rsquo;re upfront about pricing and timelines from the start, and
            we&rsquo;re easy to reach afterwards if you have questions or need
            something adjusted.
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
