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
        Last updated: 11 September 2026
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-brand-700/85 sm:text-base">
        <p>
          {siteConfig.name} ("we", "us", "our") respects your privacy. This
          Privacy Policy explains what information we collect, how we use
          it, and the choices you have, when you visit this website or use
          our services.
        </p>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            1. Information We Collect
          </h2>
          <p className="mt-2">
            We collect only the information you choose to share with us,
            such as your name, phone number, email address, WhatsApp number,
            and project or enquiry details, when you contact us through the
            website contact form, phone, WhatsApp, email, or in person. For
            online and digital services (such as form filling or
            applications), we may also collect the personal details or
            documents needed to complete that specific service, only for as
            long as needed to carry it out.
          </p>
          <p className="mt-2">
            This website does not use cookies or tracking tools to collect
            personal information about visitors beyond standard, anonymised
            hosting logs used to keep the site running securely.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            2. How We Use Your Information
          </h2>
          <p className="mt-2">
            We use the information you provide to respond to your enquiry,
            prepare quotes, deliver the design, website, or digital service
            you have requested, and to contact you about your project (for
            example, by phone, WhatsApp, or email). We do not use your
            information for unrelated marketing without your consent.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            3. Sharing of Information
          </h2>
          <p className="mt-2">
            We do not sell your personal information. We only share it where
            necessary to complete the service you have requested — for
            example, submitting details to a government portal or online
            application on your behalf, or with a hosting/domain provider
            when setting up a website — and only to the extent required for
            that task.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            4. Data Storage &amp; Security
          </h2>
          <p className="mt-2">
            We take reasonable steps to keep the information you share with
            us secure, including limiting access to it and storing physical
            documents responsibly. Documents used for online/digital
            services are retained only for as long as needed to complete
            that service, and are disposed of or deleted afterwards unless
            you ask us to keep them for future use.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            5. Your Choices
          </h2>
          <p className="mt-2">
            You can ask us at any time what information we hold about you,
            request that we correct it, or ask us to delete it, subject to
            any work already completed or legal requirements to retain
            records. You can also opt out of any future contact from us for
            non-service-related communication.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            6. Children's Privacy
          </h2>
          <p className="mt-2">
            Our services are intended for individuals who are able to enter
            into service agreements on their own behalf, or with the
            involvement of a parent/guardian for minors seeking application
            or form-filling assistance. We do not knowingly collect personal
            information from children without appropriate parental or
            guardian involvement.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            7. Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time to reflect
            changes in our services or for legal reasons. The updated
            version will be posted on this page with a revised "last
            updated" date.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            8. Contact Us
          </h2>
          <p className="mt-2">
            If you have questions about how your information is handled, or
            want to request access to, correction of, or deletion of your
            data, reach out to us at{" "}
            <a
              href={siteConfig.contact.emailHref}
              className="font-medium text-brand-900 underline underline-offset-2"
            >
              {siteConfig.contact.email}
            </a>{" "}
            or call/WhatsApp us at{" "}
            <a
              href={siteConfig.contact.phoneHref}
              className="font-medium text-brand-900 underline underline-offset-2"
            >
              {siteConfig.contact.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}
