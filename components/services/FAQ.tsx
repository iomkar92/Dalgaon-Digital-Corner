import { Plus } from "lucide-react";
import type { FaqItem } from "@/types/services";

export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-brand-100 rounded-2xl border border-brand-100 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-brand-900 marker:content-none">
            <span>{item.question}</span>
            <Plus
              className="h-4 w-4 shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-brand-700/80">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
