import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { properties } from "@/data/properties";
import { SectionHeading } from "./primitives";

export function OngoingProjects() {
  const ongoing = properties.filter((p) => p.status === "ongoing");

  return (
    <section id="ongoing" className="relative border-t border-border/60 bg-card/30">
      <div className="pattern-diagonal absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-10 lg:py-36">
        <SectionHeading
          room="Room II"
          eyebrow="Ongoing projects"
          title="Under construction,"
          accent="tracked in the open"
          lede="Live sites with published slab progress. Book a hard-hat visit any Saturday."
        />

        <div className="mt-16 grid gap-px border border-border/60 bg-border/60 md:grid-cols-3">
          {ongoing.map((p) => (
            <Link
              key={p.id}
              to="/property/$id"
              params={{ id: p.id }}
              className="group flex flex-col bg-background transition-colors hover:bg-card"
            >
              <div className="relative h-52 overflow-hidden sm:h-56">
                <img
                  src={p.cover}
                  alt={p.name}
                  loading="lazy"
                  data-lightbox
                  className="h-full w-full cursor-zoom-in object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 border border-primary/60 bg-background/80 px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-primary backdrop-blur">
                  {p.progress}% complete
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl text-foreground">{p.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {p.location}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.tagline}
                </p>

                <div className="mt-6">
                  <div className="h-px w-full bg-border">
                    <div
                      className="rule-gold h-px"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                  <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <span className="truncate text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      {p.handover}
                    </span>
                    <span className="shrink-0 font-display text-lg text-gold-foil">
                      {p.price}
                    </span>
                  </div>
                </div>

                <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary">
                  Project detail <ArrowUpRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
