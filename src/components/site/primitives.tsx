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

/**
 * Museum "plate": an uncropped image resting on a mat inside a fixed-height
 * frame, so rows stay horizontally consistent without ever cropping a photo.
 */
export function PlateImage({
  src,
  alt,
  caption,
  className,
  heightClass = "h-44 sm:h-56",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  heightClass?: string;
}) {
  return (
    <figure
      className={cn(
        "group relative overflow-hidden border border-border/60 bg-card/40 transition-colors hover:border-primary/50",
        className,
      )}
    >
      <div className={cn("grid place-items-center p-2 sm:p-3", heightClass)}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          data-lightbox
          className="max-h-full max-w-full cursor-zoom-in object-contain transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      {caption ? (
        <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 bg-background/80 px-3 py-1.5 text-[9px] uppercase tracking-[0.3em] text-muted-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          {caption}
        </figcaption>
      ) : null}
    </figure>
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
