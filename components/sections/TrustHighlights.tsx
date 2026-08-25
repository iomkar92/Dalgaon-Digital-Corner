import { Sparkles, Zap, IndianRupee, MapPinned } from "lucide-react";
import { Container } from "@/components/layout/Container";

const highlights = [
  {
    icon: Sparkles,
    title: "Creative & Professional",
    description: "Thoughtful design work, not templates copied and pasted.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Clear timelines and updates so you always know where things stand.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Solutions",
    description: "Fair pricing discussed upfront, with no hidden surprises.",
  },
  {
    icon: MapPinned,
    title: "Local Digital Support",
    description: "Based in Dalgaon, easy to reach in person, by call, or on WhatsApp.",
  },
];

export function TrustHighlights() {
  return (
    <section aria-label="Why people trust us" className="py-14 sm:py-16">
      <Container>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-brand-900">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-700/75">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
