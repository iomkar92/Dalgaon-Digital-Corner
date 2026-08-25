import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-brand-600/80">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className="h-3.5 w-3.5 text-brand-300"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span aria-current="page" className="font-medium text-brand-900">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-brand-900 hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
