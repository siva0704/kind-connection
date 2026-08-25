import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { properties, type Property } from "@/data/properties";
import { SectionHeading, StarRating, PlateImage } from "./primitives";
import { Button } from "@/components/ui/button";

/**
 * Uncropped masonry gallery — each photo keeps its own frame ratio.
 */
function PatternGallery({ property }: { property: Property }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      {property.gallery.slice(0, 4).map((src, i) => (
        <PlateImage
          key={src + i}
          src={src}
          alt={`${property.name} — view ${i + 1}`}
          caption={`Plate 0${i + 1}`}
          heightClass="h-40 sm:h-52"
        />
      ))}
    </div>
  );
}

function RateBox({ property }: { property: Property }) {
  const [given, setGiven] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="mt-6 border border-border/60 bg-card/50 p-5">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Owner rating
          </p>
          <div className="mt-2 flex items-center gap-3">
            <span className="font-display text-3xl text-gold-foil">
              {property.rating.toFixed(1)}
            </span>
            <StarRating value={property.rating} />
            <span className="truncate text-xs text-muted-foreground">
              {property.reviewCount} reviews
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 border-t border-border/50 pt-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {given ? "Thank you — rating recorded" : "Rate this property"}
        </p>
        <div className="mt-3 flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              type="button"
              aria-label={`Rate ${i} star${i > 1 ? "s" : ""}`}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setGiven(i)}
              className="transition-transform hover:scale-110"
            >
              <StarRating value={(hover ?? given ?? 0) >= i ? 5 : 0} size={18} className="[&>*:not(:first-child)]:hidden" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CompletedProjects() {
  const completed = properties.filter((p) => p.status === "completed");

  return (
    <section id="completed" className="relative border-t border-border/60">
      <div className="pattern-lattice absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-10 lg:py-36">
        <SectionHeading
          eyebrow="Completed projects"
          title="Delivered, occupied and"
          accent="rated by residents"
          lede="Every completed address is published with its full gallery and the ratings its owners have left. Walk the pattern, then open the property for the full detail sheet."
        />

        <div className="mt-20 space-y-24">
          {completed.map((p, idx) => {
            const flip = idx % 2 === 1;
            return (
              <article
                key={p.id}
                className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-14"
              >
                <div className={flip ? "lg:order-2" : ""}>
                  <PatternGallery property={p} />
                </div>

                <div className={`flex flex-col justify-center ${flip ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="rule-gold h-px w-8" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {p.handover}
                    </span>
                  </div>
                  <h3 className="mt-4 text-4xl leading-tight text-platinum-foil">{p.name}</h3>
                  <p className="mt-3 font-display text-xl italic text-primary/85">
                    {p.tagline}
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <MapPin size={13} className="shrink-0 text-primary" />
                    <span className="truncate">{p.location}</span>
                  </p>

                  <dl className="mt-7 grid grid-cols-2 gap-px border border-border/60 bg-border/60">
                    <div className="bg-background p-4">
                      <dt className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                        Configuration
                      </dt>
                      <dd className="mt-2 text-sm text-foreground">{p.configuration}</dd>
                    </div>
                    <div className="bg-background p-4">
                      <dt className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                        Carpet range
                      </dt>
                      <dd className="mt-2 text-sm text-foreground">{p.area}</dd>
                    </div>
                  </dl>

                  <RateBox property={p} />

                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 w-fit rounded-none border-primary/40 bg-transparent px-6 text-xs uppercase tracking-[0.25em] text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Link to="/property/$id" params={{ id: p.id }}>
                      Full property view <ArrowUpRight size={14} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
