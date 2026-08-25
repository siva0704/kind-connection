import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BedDouble, Ruler } from "lucide-react";
import { properties, type Listing } from "@/data/properties";
import { SectionHeading, StarRating } from "./primitives";

const tabs: { key: Listing | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "sale", label: "For sale" },
  { key: "rent", label: "For rent" },
  { key: "sold", label: "Sold out" },
];

export function MarketDesk() {
  const [tab, setTab] = useState<Listing | "all">("all");
  const list = properties.filter((p) => tab === "all" || p.listing === tab);

  return (
    <section id="market" className="relative border-t border-border/60 bg-card/30">
      <div className="pattern-lattice absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionHeading
            room="Room IV"
            eyebrow="Sell & rent desk"
            title="Buy, resell or lease"
            accent="within the portfolio"
            lede="Arya-built homes listed by us and by their owners. Each listing opens into a full property sheet with specification, amenities and resident reviews."
          />
          <div className="flex flex-wrap gap-px border border-border/60 bg-border/60">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-5 py-3 text-[10px] uppercase tracking-[0.28em] transition-colors ${
                  tab === t.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-px border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Link
              key={p.id}
              to="/property/$id"
              params={{ id: p.id }}
              className="group flex flex-col bg-background p-4 transition-colors hover:bg-card"
            >
              <div className="relative grid h-48 place-items-center overflow-hidden border border-border/50 bg-card/40 p-3 sm:h-52">
                <img
                  src={p.cover}
                  alt={p.name}
                  loading="lazy"
                  data-lightbox
                  className="h-full w-full cursor-zoom-in object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 top-3 border border-primary/50 bg-background/85 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-primary backdrop-blur">
                  {p.listing === "sale" ? "For sale" : p.listing === "rent" ? "For rent" : "Sold"}
                </span>
              </div>

              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 pt-5">
                <div className="min-w-0">
                  <h3 className="truncate text-xl text-foreground">{p.name}</h3>
                  <p className="mt-1 truncate text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {p.location}
                  </p>
                </div>
                <StarRating value={p.rating} className="shrink-0 pt-1" />
              </div>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <BedDouble size={13} className="text-primary" /> {p.configuration}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Ruler size={13} className="text-primary" /> {p.area}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 border-t border-border/60 pt-4">
                <div className="min-w-0">
                  <p className="font-display text-2xl text-gold-foil">{p.price}</p>
                  <p className="truncate text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {p.priceNote}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
