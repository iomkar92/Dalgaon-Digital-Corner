import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";

const points = [
  {
    title: "Creative and modern solutions",
    description:
      "Designs and websites that look current, not recycled from an old template.",
  },
  {
    title: "Simple and transparent process",
    description:
      "You'll always know what's happening next and what it costs, with no confusing jargon.",
  },
  {
    title: "Customer-focused service",
    description:
      "We listen first. The work is built around what you actually need, not a fixed package.",
  },
  {
    title: "Reliable digital assistance",
    description:
      "From a single form to a full website, we follow through until the job is done.",
  },
  {
    title: "Solutions for individuals and businesses",
    description:
      "Whether it's a personal document or a business website, we scale the help to fit.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <SectionHeading
            eyebrow="Why Dalgaon Digital Corner"
            title="A digital partner that actually listens"
            description="We built Dalgaon Digital Corner around one idea: local customers deserve the same quality of design and digital work as any big-city agency, without the runaround."
          />
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point.title}
                className="flex gap-3 rounded-xl border border-brand-100 bg-white p-5"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-brand-900">
                    {point.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-700/75">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
