import { ArrowRight, MessageCircle, Palette, Globe, Laptop, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

const cards = [
  { icon: Palette, label: "Design", rotate: "-rotate-3", offset: "" },
  { icon: Globe, label: "Websites", rotate: "rotate-2", offset: "sm:mt-8" },
  { icon: Laptop, label: "Online Services", rotate: "rotate-3", offset: "" },
  { icon: Smartphone, label: "Mobile", rotate: "-rotate-2", offset: "sm:mt-8" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-100/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,var(--brand-100)_0%,transparent_45%),radial-gradient(circle_at_85%_0%,var(--accent-100)_0%,transparent_40%)]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm ring-1 ring-brand-100">
              Local digital services, done right
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">
              Your Digital Partner for{" "}
              <span className="text-brand-500">Design, Websites</span> &amp;
              More.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-700/85">
              We help individuals and businesses build a strong digital
              presence through creative design, modern websites, and
              reliable digital services.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/services" size="lg">
                Explore Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Contact Us
              </Button>
            </div>
          </div>

          <div
            className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:gap-5 animate-fade-in"
            aria-hidden="true"
          >
            {cards.map(({ icon: Icon, label, rotate, offset }) => (
              <div
                key={label}
                className={`${offset} ${rotate} rounded-2xl border border-brand-100 bg-white p-5 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:rotate-0`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-semibold text-brand-900">
                  {label}
                </p>
                <p className="mt-1 text-xs text-brand-600/70">
                  Crafted with care
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
