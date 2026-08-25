import custom from "@/assets/custom-build.jpg";
import { SectionHeading } from "./primitives";
import { Button } from "@/components/ui/button";

const steps = [
  { n: "I", title: "Site study", body: "Soil, setbacks, sun path and vaastu read on your plot." },
  { n: "II", title: "Design", body: "Three concept options, then one developed to working drawings." },
  { n: "III", title: "Fixed quote", body: "Line-item BOQ with brand-level specification, locked." },
  { n: "IV", title: "Build", body: "Our own crew, weekly photo log, month-dated handover." },
];

export function CustomBuild() {
  return (
    <section id="custom" className="relative border-t border-border/60">
      <div className="pattern-dots absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
          <div className="grid grid-cols-6 grid-rows-6 gap-3">
            <div className="col-span-4 row-span-6 overflow-hidden border border-border/60">
              <img
                src={custom}
                alt="Architectural drawings and a timber house model on a dark desk"
                loading="lazy"
                width={1200}
                height={1000}
                data-lightbox
                className="h-full w-full cursor-zoom-in object-cover"
              />
            </div>
            <div className="pattern-lattice col-span-2 row-span-2 border border-border/60" />
            <div className="col-span-2 row-span-2 grid place-items-center border border-primary/40 bg-card/60 p-4 text-center">
              <div>
                <p className="font-display text-3xl text-gold-foil">120+</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  Homes built on client land
                </p>
              </div>
            </div>
            <div className="pattern-diagonal col-span-2 row-span-2 border border-border/60" />
          </div>

          <div>
            <SectionHeading
              room="Room III"
              eyebrow="Customised construction"
              title="Your land, your plan,"
              accent="our site team"
              lede="Own a plot? We design and build the house on it end to end — anywhere across Telangana and coastal Andhra. One contract, one crew, one dated handover."
            />

            <ol className="mt-10 grid gap-px border border-border/60 bg-border/60 sm:grid-cols-2">
              {steps.map((s) => (
                <li key={s.n} className="bg-background p-6">
                  <span className="font-display text-xl tracking-[0.2em] text-primary/70">
                    {s.n}
                  </span>
                  <h3 className="mt-3 text-lg text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>

            <Button
              asChild
              size="lg"
              className="mt-10 rounded-none px-8 text-xs uppercase tracking-[0.25em]"
            >
              <a href="#contact">Get a build estimate</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
