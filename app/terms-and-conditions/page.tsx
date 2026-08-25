import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${siteConfig.name}'s website and services.`,
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-14 sm:py-16">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Terms & Conditions", href: "/terms-and-conditions" },
        ]}
      />
      <h1 className="mt-6 text-3xl font-semibold text-brand-900">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-brand-600">
        [This is placeholder content. Replace with your finalised terms
        before launch.]
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-brand-700/85 sm:text-base">
        <p>
          By using this website or engaging {siteConfig.name} for a service,
          you agree to the terms outlined here. Project scope, pricing, and
          delivery timelines are confirmed with you directly before work
          begins.
        </p>
        <p>
          Revisions are handled as agreed for each service. Any work beyond
          the agreed scope may be treated as an additional request.
        </p>
        <p>
          For questions about these terms, contact us at{" "}
          {siteConfig.contact.email}.
        </p>
      </div>
    </Container>
  );
}
