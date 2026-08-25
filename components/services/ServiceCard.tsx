import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col justify-between rounded-xl border border-brand-100 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
    >
      <div>
        <h4 className="text-sm font-semibold text-brand-900">
          {service.title}
        </h4>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-brand-700/70">
          {service.description}
        </p>
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 transition-transform group-hover:translate-x-0.5">
        Learn more
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
