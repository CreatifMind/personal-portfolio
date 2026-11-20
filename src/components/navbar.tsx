"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <a
          href="#"
          onClick={() => setMobileMenuOpen(false)}
          className="relative flex h-6 items-center overflow-hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {scrolledPastHero ? (
              <motion.span
                key="name"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="text-base font-semibold tracking-tight text-foreground"
              >
                Chris Wong<span className="text-emerald-600 dark:text-emerald-400">.</span>
              </motion.span>
            ) : (
              <motion.span
                key="portfolio"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
              >
                Portfolio <span className="text-emerald-600 dark:text-emerald-400">/</span> 2026
              </motion.span>
            )}
          </AnimatePresence>
        </a>

        <div className="flex items-center gap-3 md:gap-7">
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ModeToggle />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden rounded-full w-9 h-9 border border-border"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4">
          <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
