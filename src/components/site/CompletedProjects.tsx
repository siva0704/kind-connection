import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { properties, type Property } from "@/data/properties";
import { SectionHeading, StarRating } from "./primitives";
import { Button } from "@/components/ui/button";

/**
 * Mosaic layout matching the screenshot exactly:
 *   ┌──────────┬──────────┐
 *   │          │  img 2   │  landscape top-right
 *   │  img 1   ├──────────┤
 *   │  (tall)  │  img 3   │  landscape bottom-right
 *   └──────────┴──────────┘
 *
 * 2-col grid, 2 equal rows. Left image spans both rows (tall/portrait).
 * Right column has 2 stacked landscape images.
 */
function PatternGallery({ property }: { property: Property }) {
  const [img1, img2, img3] = property.gallery.slice(0, 3);
  return (
    <div
      className="grid grid-cols-2 gap-1 sm:gap-1.5"
      style={{ gridTemplateRows: "1fr 1fr" }}
    >
      {/* Left: tall image spanning both rows */}
      <figure
        className="group relative row-span-2 overflow-hidden"
        style={{ minHeight: 0 }}
      >
        <img
          src={img1}
          alt={`${property.name} view 1`}
          loading="eager"
          data-lightbox
          className="h-full w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/10" />
      </figure>

      {/* Top-right: landscape */}
      <figure className="group relative aspect-[4/3] overflow-hidden">
        <img
          src={img2}
          alt={`${property.name} view 2`}
          loading="lazy"
          data-lightbox
          className="h-full w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/10" />
      </figure>

      {/* Bottom-right: landscape */}
      <figure className="group relative aspect-[4/3] overflow-hidden">
        <img
          src={img3}
          alt={`${property.name} view 3`}
          loading="lazy"
          data-lightbox
          className="h-full w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/10" />
      </figure>
    </div>
  );
}

function RateBox({ property }: { property: Property }) {
  const [given, setGiven] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!given) return;
    setSubmitted(true);
  }

  return (
    <div className="mt-6 border border-border/60 bg-card/50 p-5">
      {/* Aggregate rating */}
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

      {/* User review form */}
      <div className="mt-5 border-t border-border/50 pt-4">
        {submitted ? (
          <p className="text-xs text-primary">
            Thank you — your review has been recorded.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Rate this property
              </p>
              <div className="mt-2 flex items-center gap-2">
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
                    <StarRating
                      value={(hover ?? given ?? 0) >= i ? 5 : 0}
                      size={18}
                      className="[&>*:not(:first-child)]:hidden"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor={`review-${property.id}`}
                className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
              >
                Write a review
              </label>
              <textarea
                id={`review-${property.id}`}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="Share your experience…"
                className="mt-2 w-full resize-none border border-border/60 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/60 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={!given}
              className="text-[10px] uppercase tracking-[0.3em] text-primary transition-opacity disabled:opacity-40 hover:opacity-70"
            >
              Submit review →
            </button>
          </form>
        )}
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
          room="Room I"
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
