import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function CTASection({
  title = "Have a project in mind? Let's make it happen.",
  description = "Tell us what you need — a logo, a website, or help with something online — and we'll take it from there.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-800 px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,167,31,0.18)_0%,transparent_45%),radial-gradient(circle_at_80%_100%,rgba(255,255,255,0.08)_0%,transparent_40%)]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-brand-200">
              {description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href="/contact"
                variant="ghost"
                size="lg"
                className="border-brand-600 text-white hover:border-accent-300 hover:bg-white/5 hover:text-accent-200"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
