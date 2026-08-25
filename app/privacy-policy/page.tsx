import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}, explaining how customer information is collected and used.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Container className="max-w-3xl py-14 sm:py-16">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />
      <h1 className="mt-6 text-3xl font-semibold text-brand-900">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-brand-600">
        [This is placeholder content. Replace with your finalised privacy
        policy before launch.]
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-brand-700/85 sm:text-base">
        <p>
          {siteConfig.name} collects only the information you choose to share
          with us, such as your name, phone number, email, and project
          details, when you contact us through this website or in person.
        </p>
        <p>
          This information is used solely to respond to your enquiry and
          deliver the services you request. We do not sell or share your
          information with third parties for marketing purposes.
        </p>
        <p>
          If you have questions about how your information is handled, reach
          out to us at {siteConfig.contact.email}.
        </p>
      </div>
    </Container>
  );
}
