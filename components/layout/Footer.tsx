import Link from "next/link";
import { MapPin, Mail, Phone, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { footerServiceLinks, navLinks, siteConfig } from "@/data/site";

/** Lucide dropped brand glyphs, so these are small inline social icons. */
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.55c0-.93.26-1.56 1.59-1.56h1.7V3.14C15.98 3.1 15.03 3 13.92 3 11.6 3 10 4.42 10 7.14v2.46H7.25v3.2H10V21h3.5Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-100 bg-brand-900 text-brand-100">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-400 text-brand-900">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-semibold text-white">
                Dalgaon Digital Corner
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dalgaon Digital Corner on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-700 text-brand-200 transition-colors hover:border-accent-400 hover:text-accent-300"
              >
                <FacebookIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dalgaon Digital Corner on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-700 text-brand-200 transition-colors hover:border-accent-400 hover:text-accent-300"
              >
                <InstagramIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-300">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-300">
              Services
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-300">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-brand-200">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                <a href={siteConfig.contact.phoneHref} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                <a href={siteConfig.contact.emailHref} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand-800 pt-6 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
