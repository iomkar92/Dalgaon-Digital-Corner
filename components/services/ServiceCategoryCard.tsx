import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceCategory } from "@/types/services";
import { getServicesByCategory } from "@/data/services";

export function ServiceCategoryCard({ category }: { category: ServiceCategory }) {
  const count = getServicesByCategory(category.slug).length;
  const Icon = category.icon;

  return (
    <Link
      href={`/services#${category.slug}`}
      className="group flex flex-col rounded-2xl border border-brand-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800 text-accent-300">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span aria-hidden="true" className="text-2xl">
          {category.emoji}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-brand-900">
        {category.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-700/75">
        {category.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-brand-100 pt-4">
        <span className="text-xs font-medium uppercase tracking-wide text-brand-500">
          {count} services
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition-transform group-hover:translate-x-0.5">
          View Services
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
