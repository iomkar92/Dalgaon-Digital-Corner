"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu whenever the route changes. Adjusting state
  // during render (rather than in an effect) avoids an extra render pass.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/80 bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md"
            aria-label={`${siteConfig.name} — Home`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-800 text-accent-300">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-base font-semibold leading-tight text-brand-900 sm:text-lg">
              Dalgaon
              <span className="block text-xs font-medium tracking-wide text-brand-500 sm:text-sm">
                Digital Corner
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-900",
                    isActive ? "text-brand-900" : "text-brand-600"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact" size="md">
              Get Started
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-800 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-brand-100/80 bg-background transition-[max-height,opacity] duration-300 ease-in-out md:hidden",
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <Container>
          <nav
            className="flex flex-col gap-1 py-4"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-brand-800 hover:bg-brand-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/contact" size="md" className="w-full">
                Get Started
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
