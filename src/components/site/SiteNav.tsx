import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Completed", href: "/#completed" },
  { label: "Ongoing", href: "/#ongoing" },
  { label: "Custom Build", href: "/#custom" },
  { label: "Sell & Rent", href: "/#market" },
  { label: "About", href: "/#about" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center border border-primary/50 font-display text-lg text-primary">
            A
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-none tracking-[0.2em] text-platinum-foil">
              ARYA
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.45em] text-muted-foreground">
              Developers
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" className="hidden rounded-none px-5 text-xs uppercase tracking-[0.2em] sm:inline-flex">
            <a href="/#contact">Enquire</a>
          </Button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-foreground lg:hidden"
          >
            {open ? <Menu className="hidden" /> : null}
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border/50 bg-background px-5 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/40 py-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block py-3 text-xs uppercase tracking-[0.25em] text-primary"
          >
            Enquire
          </a>
        </nav>
      ) : null}
    </header>
  );
}
