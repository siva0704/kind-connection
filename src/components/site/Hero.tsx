import hero from "@/assets/hero-tower.jpg";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "27", label: "Years building" },
  { value: "41", label: "Projects delivered" },
  { value: "3.6M", label: "Sq.ft handed over" },
  { value: "4.8", label: "Owner rating" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
        <img
          src={hero}
          alt="A modern luxury 3 BHK independent home with landscaped garden and private parking at golden hour"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
        />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
      />
      <div className="pattern-lattice absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl grid-rows-[1fr_auto] px-5 lg:px-10">
        <div className="flex max-w-3xl flex-col justify-center py-16">
          <div className="flex items-center gap-4">
            <span className="rule-gold h-px w-14" />
            <p className="eyebrow">Hyderabad · Since 1999</p>
          </div>
          <h1 className="mt-7 font-display text-5xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="text-platinum-foil">Homes cast in</span>
            <br />
            <em className="text-gold-foil italic">platinum &amp; gold</em>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Arya Developers designs, builds and hands over residences that hold their
            value and their finish. Completed towers, live construction, bespoke homes on
            your own site — and a curated resale and rental desk.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-none px-8 text-xs uppercase tracking-[0.25em]">
              <a href="#completed">View the portfolio</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-primary/40 bg-transparent px-8 text-xs uppercase tracking-[0.25em] text-primary hover:bg-primary/10 hover:text-primary"
            >
              <a href="#custom">Build on my site</a>
            </Button>
          </div>
        </div>

        <dl className="grid grid-cols-2 border-t border-border/60 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-2 py-7 sm:px-6 ${i > 0 ? "lg:border-l lg:border-border/60" : ""} ${i % 2 === 1 ? "border-l border-border/60 lg:border-l" : ""}`}
            >
              <dt className="font-display text-3xl text-gold-foil sm:text-4xl">{s.value}</dt>
              <dd className="mt-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
