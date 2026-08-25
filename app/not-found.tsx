import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl font-semibold text-brand-200">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-brand-900 sm:text-3xl">
        We couldn&rsquo;t find that page.
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-700/75 sm:text-base">
        The page you&rsquo;re looking for may have moved or no longer exists. Try
        heading back home or browsing our services.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to Home</Button>
        <Button href="/services" variant="ghost">
          Browse Services
        </Button>
      </div>
    </Container>
  );
}
