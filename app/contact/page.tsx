import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Dalgaon Digital Corner by phone, WhatsApp, email, or in person. We're here to help with design, websites, and digital services.",
  path: "/contact",
});

const contactDetails = [
  { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.contact.whatsapp, href: siteConfig.contact.whatsappHref },
  { icon: Mail, label: "Email", value: siteConfig.contact.email, href: siteConfig.contact.emailHref },
  { icon: MapPin, label: "Address", value: siteConfig.contact.address },
  { icon: Clock, label: "Business Hours", value: siteConfig.contact.hours },
];

export default function ContactPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
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
              { name: "Contact", href: "/contact" },
            ]}
          />
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's talk about your project"
            description="Reach out however's easiest for you — phone, WhatsApp, email, or the form below — and we'll get back to you shortly."
            className="mt-6"
          />
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <ul className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <li
                    key={label}
                    className="flex items-start gap-3 rounded-xl border border-brand-100 bg-white p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium text-brand-900 hover:text-brand-600"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-brand-900">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl bg-brand-800 p-5 text-white">
                <p className="text-sm font-semibold">Prefer WhatsApp?</p>
                <p className="mt-1 text-sm text-brand-200">
                  Message us directly for a quick reply.
                </p>
                <Button
                  href={siteConfig.contact.whatsappHref}
                  external
                  size="md"
                  className="mt-4"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
