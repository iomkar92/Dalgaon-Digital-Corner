import type { LucideIcon } from "lucide-react";

export type ServiceCategorySlug = "design" | "websites" | "online" | "mobile";

export type ServiceCategory = {
  slug: ServiceCategorySlug;
  title: string;
  shortTitle: string;
  emoji: string;
  icon: LucideIcon;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Shape of a single service. This is intentionally flat and serializable so
 * `data/services.ts` can later be swapped for a CMS/API response without any
 * changes to the components that consume it (see components/services/*).
 */
export type Service = {
  slug: string;
  title: string;
  category: ServiceCategorySlug;
  /** One-line description used on cards / listings */
  description: string;
  /** Longer intro used on the service detail page */
  longDescription: string;
  whatWeOffer: string[];
  benefits: string[];
  suitableFor: string[];
  process: { title: string; description: string }[];
  faq: FaqItem[];
  featured?: boolean;
};
