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
        Last updated: 11 September 2026
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-brand-700/85 sm:text-base">
        <p>
          These Terms &amp; Conditions ("Terms") govern your use of this
          website and any service you book with {siteConfig.name} ("we",
          "us", "our"), located at {siteConfig.contact.address}. By using
          this website or engaging us for a service, you agree to these
          Terms. If you do not agree, please do not use our website or
          services.
        </p>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            1. Our Services
          </h2>
          <p className="mt-2">
            We provide design, website design &amp; development, online and
            digital services (such as form filling and applications), and
            mobile-related services to individuals and businesses in and
            around Dalgaon. Exact deliverables, pricing, and timelines for
            each project are confirmed with you directly — in person, by
            phone, or by WhatsApp/email — before work begins.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            2. Quotes, Pricing &amp; Payment
          </h2>
          <p className="mt-2">
            Prices are quoted per project based on the work involved and are
            subject to change until confirmed. For most projects, we require
            an advance payment before starting work, with the balance due on
            completion or delivery, unless otherwise agreed in writing (this
            includes a WhatsApp or SMS confirmation). Payments made are for
            work carried out and are generally non-refundable once work has
            started, except as described under "Cancellations &amp; Refunds"
            below.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            3. Revisions &amp; Scope of Work
          </h2>
          <p className="mt-2">
            A reasonable number of revisions are included as agreed for each
            service at the time of quoting. Requests that go beyond the
            originally agreed scope — such as a new design direction, extra
            pages, or additional features — may be treated as a new or
            additional request and charged separately.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            4. Turnaround Time
          </h2>
          <p className="mt-2">
            Estimated delivery timelines are shared with you when a project
            is confirmed. Timelines depend on the complexity of the work and
            on receiving the information, content, or documents we need from
            you promptly. Delays in providing these may extend the delivery
            date.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            5. Your Responsibilities
          </h2>
          <p className="mt-2">
            For online and digital services (such as form filling and
            applications), you are responsible for the accuracy of the
            personal details, documents, and information you provide. We are
            not responsible for delays, rejections, or errors caused by
            incorrect, incomplete, or outdated information supplied by you,
            or by delays on the part of the relevant government department,
            portal, or third-party service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            6. Intellectual Property
          </h2>
          <p className="mt-2">
            Once a project is paid for in full, final design and website
            files are made available to you for your own use. We may
            showcase completed work (such as designs or website screenshots)
            in our portfolio, on social media, or on this website, unless you
            request otherwise in writing. Any third-party tools, fonts,
            stock images, or platforms used remain subject to their own
            licence terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            7. Cancellations &amp; Refunds
          </h2>
          <p className="mt-2">
            You may request to cancel a project before work has started for
            a full refund of any advance paid. If work has already begun,
            any refund will account for the time and work already
            completed, at our discretion. Amounts paid to third parties
            (such as government portals, domain or hosting providers) on
            your behalf are non-refundable.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            8. Limitation of Liability
          </h2>
          <p className="mt-2">
            We take reasonable care in delivering our services, but we do
            not guarantee specific outcomes from third-party platforms,
            government portals, or services outside our control (for
            example, application approval timelines or website search
            rankings). To the extent permitted by law, we are not liable for
            any indirect or consequential loss arising from the use of our
            services or this website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            9. Changes to These Terms
          </h2>
          <p className="mt-2">
            We may update these Terms from time to time to reflect changes
            in our services or for legal reasons. The updated version will
            be posted on this page with a revised "last updated" date.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            10. Governing Law
          </h2>
          <p className="mt-2">
            These Terms are governed by the laws of India, and any disputes
            will be subject to the jurisdiction of the courts having
            authority over Kalimpong district, West Bengal.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            11. Contact Us
          </h2>
          <p className="mt-2">
            For questions about these Terms, contact us at{" "}
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
