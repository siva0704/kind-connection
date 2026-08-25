import wallpaper from "@/assets/about-wallpaper.jpg";
import { SectionHeading } from "./primitives";

const pillars = [
  {
    n: "01",
    title: "In-house build",
    body: "No sub-contracted structure. Our own site engineers pour every slab we sell.",
  },
  {
    n: "02",
    title: "Material honesty",
    body: "What is specified in the sample home is what is installed. No silent substitutions.",
  },
  {
    n: "03",
    title: "Dated handover",
    body: "A contractual handover month, published progress photographs, penalty clause included.",
  },
  {
    n: "04",
    title: "Aftercare",
    body: "Five-year structural cover and a resident desk that answers within the same day.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <img
        src={wallpaper}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="pattern-diagonal absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About us"
              title="A builder measured in"
              accent="decades, not launches"
              lede="Arya Developers began in 1999 with a nine-unit walk-up in Himayatnagar. Twenty-seven years on, the practice is still owner-run, still refuses to outsource its structure work, and still hands over on the month it promised."
            />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We work across three lines — our own residential developments, bespoke
              construction on land you already own, and a resale and rental desk for homes
              inside the Arya portfolio. Every one of them runs on the same site team and
              the same specification book.
            </p>
          </div>

          <div className="grid gap-px bg-border/60 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.n} className="bg-background/80 p-7 backdrop-blur-sm">
                <span className="font-display text-2xl text-primary/70">{p.n}</span>
                <h3 className="mt-4 text-xl text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
