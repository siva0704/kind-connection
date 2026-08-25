import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "./primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const interests = ["Buy a home", "Rent a home", "Build on my site", "Sell my Arya home"];

export function ContactFooter() {
  return (
    <>
      <section id="contact" className="relative border-t border-border/60">
        <div className="pattern-diagonal absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Enquire"
                title="Start a conversation with"
                accent="the Arya desk"
                lede="Tell us what you're looking for. A principal — not a call centre — responds within one working day."
              />

              <dl className="mt-12 grid gap-px border border-border/60 bg-border/60">
                {[
                  { icon: Phone, label: "Sales desk", value: "+91 90000 41999" },
                  { icon: Mail, label: "Email", value: "desk@aryadevelopers.in" },
                  {
                    icon: MapPin,
                    label: "Studio",
                    value: "Road No. 12, Banjara Hills, Hyderabad 500034",
                  },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 bg-background p-5"
                  >
                    <c.icon size={16} className="shrink-0 text-primary" />
                    <div className="min-w-0">
                      <dt className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                        {c.label}
                      </dt>
                      <dd className="mt-1 text-sm text-foreground">{c.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="border border-border/60 bg-card/60 p-7 backdrop-blur-sm sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    Name
                  </Label>
                  <Input className="rounded-none border-border bg-background" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    Phone
                  </Label>
                  <Input className="rounded-none border-border bg-background" placeholder="+91" />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    Email
                  </Label>
                  <Input className="rounded-none border-border bg-background" placeholder="you@email.com" />
                </div>
              </div>

              <div className="mt-7">
                <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  I'm interested in
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <button
                      key={i}
                      type="button"
                      className="border border-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7 grid gap-2">
                <Label className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  rows={4}
                  className="rounded-none border-border bg-background"
                  placeholder="Location, budget, timeline…"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-8 w-full rounded-none text-xs uppercase tracking-[0.28em]"
              >
                Send enquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-border/60 bg-card/40">
        <div className="pattern-lattice absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <p className="font-display text-3xl tracking-[0.25em] text-platinum-foil">ARYA</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Developers · Hyderabad
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              <a href="#completed" className="hover:text-primary">Completed</a>
              <a href="#ongoing" className="hover:text-primary">Ongoing</a>
              <a href="#custom" className="hover:text-primary">Custom build</a>
              <a href="#market" className="hover:text-primary">Sell &amp; rent</a>
            </nav>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>© 2026 Arya Developers</span>
            <span>RERA registered · TS RERA A02400000914</span>
          </div>
        </div>
      </footer>
    </>
  );
}
