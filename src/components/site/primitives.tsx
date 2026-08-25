import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  value,
  size = 14,
  className,
}: {
  value: number;
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-[3px]", className)} aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          width={size}
          height={size}
          strokeWidth={1.25}
          className={
            i <= Math.round(value)
              ? "fill-primary text-primary"
              : "text-muted-foreground/50"
          }
        />
      ))}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "flex items-center gap-4",
          align === "center" && "justify-center",
        )}
      >
        <span className="rule-gold h-px w-10 shrink-0" />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
        <span className="text-platinum-foil">{title}</span>{" "}
        {accent ? <em className="text-gold-foil not-italic italic">{accent}</em> : null}
      </h2>
      {lede ? (
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {lede}
        </p>
      ) : null}
    </div>
  );
}

export function GoldFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative border border-border/70 bg-card/60 backdrop-blur-sm",
        "before:pointer-events-none before:absolute before:-top-px before:left-6 before:h-px before:w-16 before:bg-primary",
        className,
      )}
    >
      {children}
    </div>
  );
}
