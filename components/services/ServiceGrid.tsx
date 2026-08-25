import type { Service } from "@/types/services";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <li key={service.slug}>
          <ServiceCard service={service} />
        </li>
      ))}
    </ul>
  );
}
