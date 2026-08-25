import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Reach out by phone, WhatsApp, or in person. We ask a few quick questions to understand your requirement.",
  },
  {
    number: "02",
    title: "We Plan & Create",
    description:
      "We put together a plan or first draft based on exactly what you've told us.",
  },
  {
    number: "03",
    title: "Review & Refine",
    description:
      "You review the work and share feedback. We refine it until it's right.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Once you're happy, we hand over the final files or complete the task — ready to use.",
  },
];

export function ProcessSteps({
  withContainer = true,
}: {
  withContainer?: boolean;
}) {
  const content = (
    <>
      <SectionHeading
        id="process-heading"
        eyebrow="How It Works"
        title="A simple, four-step process"
        description="No confusing steps, no long waits — just a clear path from idea to finished work."
        align="center"
        className="mx-auto"
      />
      <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.number}
            className="relative rounded-2xl border border-brand-100 bg-white p-6"
          >
            <span className="font-display text-3xl font-semibold text-brand-200">
              {step.number}
            </span>
            <h3 className="mt-3 text-base font-semibold text-brand-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-700/75">
              {step.description}
            </p>
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute right-[-14px] top-9 hidden h-px w-6 bg-brand-200 lg:block"
              />
            )}
          </li>
        ))}
      </ol>
    </>
  );

  if (!withContainer) return content;

  return (
    <section className="bg-brand-50/60 py-16 sm:py-20" aria-labelledby="process-heading">
      <Container>{content}</Container>
    </section>
  );
}
