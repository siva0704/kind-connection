import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Check } from "lucide-react";

import { getProperty } from "@/data/properties";
import { SiteNav } from "@/components/site/SiteNav";
import { ContactFooter } from "@/components/site/ContactFooter";
import { GoldFrame, StarRating } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/property/$id")({
  loader: ({ params }) => {
    const property = getProperty(params.id);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Property unavailable — Arya Developers" }, { name: "robots", content: "noindex" }],
      };
    }
    const { property } = loaderData;
    const title = `${property.name} — Arya Developers`;
    return {
      meta: [
        { title },
        { name: "description", content: property.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: property.tagline },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/property/${property.id}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/property/${property.id}` }],
    };
  },
  component: PropertyDetail,
});


function PropertyDetail() {
  const { property: p } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <img
            src={p.cover}
            alt={`${p.name} — ${p.location}`}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="pattern-lattice absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={13} /> All projects
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="border border-primary/50 px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-primary">
                {p.status === "ongoing" ? `${p.progress}% complete` : "Delivered"}
              </span>
              <span className="border border-border px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                For {p.listing}
              </span>
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] tracking-tight sm:text-6xl">
              <span className="text-platinum-foil">{p.name}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">{p.tagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <MapPin size={14} className="text-primary" /> {p.location}
              </span>
              <span className="inline-flex items-center gap-3 text-xs text-muted-foreground">
                <StarRating value={p.rating} />
                {p.rating} · {p.reviewCount} reviews
              </span>
            </div>

            <div className="mt-10 flex flex-wrap items-end gap-8">
              <div>
                <p className="font-display text-4xl text-gold-foil">{p.price}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  {p.priceNote}
                </p>
              </div>
              <Button size="lg">Request site visit</Button>
            </div>
          </div>
        </section>

        {/* Pattern gallery */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <p className="eyebrow">Gallery</p>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
            {p.gallery.slice(0, 5).map((src, i) => (
              <PlateImage
                key={`${src}-${i}`}
                src={src}
                alt={`${p.name} view ${i + 1}`}
                caption={`Plate 0${i + 1}`}
                heightClass="h-40 sm:h-48"
              />
            ))}
          </div>
        </section>

        {/* Overview + specs */}
        <section className="border-y border-border/60 bg-card/30">
          <div className="pattern-diagonal absolute inset-0 opacity-0" />
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1.4fr_1fr] lg:px-10">
            <div>
              <h2 className="text-3xl tracking-tight text-platinum-foil">Overview</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {p.description}
              </p>
              <ul className="mt-8 space-y-3">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check size={15} className="mt-1 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Amenities
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-px border border-border/60 bg-border/60 sm:grid-cols-3">
                {p.amenities.map((a) => (
                  <span
                    key={a}
                    className="bg-background px-4 py-4 text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <GoldFrame className="h-fit p-7">
              <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Specification
              </h3>
              <dl className="mt-6 divide-y divide-border/60">
                <div className="flex items-center justify-between py-3 text-sm">
                  <dt className="text-muted-foreground">Configuration</dt>
                  <dd className="text-foreground">{p.configuration}</dd>
                </div>
                <div className="flex items-center justify-between py-3 text-sm">
                  <dt className="text-muted-foreground">Area</dt>
                  <dd className="text-foreground">{p.area}</dd>
                </div>
                <div className="flex items-center justify-between py-3 text-sm">
                  <dt className="text-muted-foreground">Handover</dt>
                  <dd className="text-foreground">{p.handover}</dd>
                </div>
                {p.specs.map((s) => (
                  <div key={s.label} className="flex items-center justify-between py-3 text-sm">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd className="text-right text-foreground">{s.value}</dd>
                  </div>
                ))}
              </dl>

              {p.status === "ongoing" ? (
                <div className="mt-7">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    <span>Construction</span>
                    <span className="text-primary">{p.progress}%</span>
                  </div>
                  <div className="mt-3 h-px w-full bg-border">
                    <div className="rule-gold h-px" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>
              ) : null}

              <Button className="mt-8 w-full" variant="outline">
                Download brochure
              </Button>
            </GoldFrame>
          </div>
        </section>

        {/* Reviews */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Owner reviews</p>
              <h2 className="mt-4 text-3xl tracking-tight text-platinum-foil">
                What residents say
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl text-gold-foil">{p.rating}</span>
              <div>
                <StarRating value={p.rating} />
                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  {p.reviewCount} verified reviews
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-px border border-border/60 bg-border/60 md:grid-cols-3">
            {p.reviews.map((r) => (
              <article key={r.name} className="bg-background p-7">
                <StarRating value={r.rating} />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{r.note}"</p>
                <p className="mt-6 text-xs uppercase tracking-[0.22em] text-foreground">{r.name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  {r.date}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <ContactFooter />
    </div>
  );
}
