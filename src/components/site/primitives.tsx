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
  room,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lede?: string;
  align?: "left" | "center";
  room?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "flex items-center gap-4",
          align === "center" && "justify-center",
        )}
      >
        {room ? (
          <span className="border border-border/70 px-2 py-1 text-[9px] uppercase tracking-[0.3em] text-primary">
            {room}
          </span>
        ) : null}
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
      <div className={cn("block p-2 sm:p-3", heightClass)}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          data-lightbox
          className="h-full w-full cursor-zoom-in object-contain transition-transform duration-700 group-hover:scale-[1.03]"
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

/**
 * Mosaic gallery — variable-size tiles, images fill their tile with object-cover.
 * No borders, no background boxes — just clean images in a mosaic grid.
 *
 * variant="full"          (default) — 3-col grid, 5 images
 *   [0] col-span-2 row-span-2  featured
 *   [1] col-span-1 row-span-2  tall
 *   [2] col-span-2 row-span-1  wide
 *   [3] col-span-1 row-span-1  small
 *   [4] col-span-1 row-span-1  small
 *
 * variant="compact"       — 2-col grid, 4 images (fits inside a side-column layout)
 *   [0] col-span-1 row-span-2  tall featured
 *   [1] col-span-1 row-span-1  small top-right
 *   [2] col-span-1 row-span-1  small mid-right
 *   [3] col-span-2 row-span-1  wide bottom
 *
 * variant="wide-tall-wide" — 2-col grid, 4 images
 *   [0] col-span-2 row-span-1  wide top (horizontal)
 *   [1] col-span-1 row-span-2  tall left (vertical)
 *   [2] col-span-1 row-span-2  tall right (vertical)
 *   [3] col-span-2 row-span-1  wide bottom (horizontal)
 */

const FULL_TILE_CLASSES = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
] as const;

const COMPACT_TILE_CLASSES = [
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
] as const;

// wide top → tall-left | tall-right → wide bottom
const WIDE_TALL_WIDE_TILE_CLASSES = [
  "col-span-2 row-span-1",  // [0] wide top
  "col-span-1 row-span-2",  // [1] tall left
  "col-span-1 row-span-2",  // [2] tall right
  "col-span-2 row-span-1",  // [3] wide bottom
] as const;

function MosaicTile({
  src,
  alt,
  tileClass,
  index,
}: {
  src: string;
  alt: string;
  tileClass: string;
  index: number;
}) {
  return (
    <figure className={cn("group relative overflow-hidden", tileClass)}>
      {/* object-cover fills the fixed tile cleanly — click opens full image in lightbox */}
      <img
        src={src}
        alt={alt}
        loading={index === 0 ? "eager" : "lazy"}
        data-lightbox
        className="h-full w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <span className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/10" />
      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 bg-background/70 px-2 py-1 text-[8px] uppercase tracking-[0.25em] text-muted-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
        {String(index + 1).padStart(2, "0")}
      </figcaption>
    </figure>
  );
}

export function MosaicGallery({
  images,
  altPrefix = "View",
  variant = "full",
  className,
}: {
  images: string[];
  altPrefix?: string;
  /** "full" = 3-col 5-image mosaic; "compact" = 2-col 4-image mosaic for side columns; "wide-tall-wide" = horizontal/vertical/horizontal 4-image layout */
  variant?: "full" | "compact" | "wide-tall-wide";
  className?: string;
}) {
  // wide-tall-wide: wide top → tall-left | tall-right → wide bottom
  if (variant === "wide-tall-wide") {
    const tiles = images.slice(0, 4);
    return (
      <div
        className={cn(
          "grid grid-cols-2 gap-1",
          // 4 rows: top-wide(1) + two-talls(2) + bottom-wide(1) = 4 row units
          "[grid-template-rows:90px_90px_90px_90px]",
          "sm:[grid-template-rows:100px_100px_100px_100px]",
          className,
        )}
      >
        {tiles.map((src, i) => (
          <MosaicTile
            key={src + i}
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            tileClass={WIDE_TALL_WIDE_TILE_CLASSES[i]}
            index={i}
          />
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    // compact: 2-col, row base 80px → row-span-2 = 160px, row-span-1 = 80px
    const tiles = images.slice(0, 4);
    return (
      <div
        className={cn(
          "grid grid-cols-2 gap-1",
          "[grid-template-rows:repeat(3,80px)]",
          "sm:[grid-template-rows:repeat(3,90px)]",
          className,
        )}
      >
        {tiles.map((src, i) => (
          <MosaicTile
            key={src + i}
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            tileClass={COMPACT_TILE_CLASSES[i]}
            index={i}
          />
        ))}
      </div>
    );
  }

  // full: 3-col, row base 100px → row-span-2 = 200px, row-span-1 = 100px
  const tiles = images.slice(0, 5);
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-1",
        "[grid-template-rows:repeat(3,100px)]",
        "sm:[grid-template-rows:repeat(3,110px)]",
        "lg:[grid-template-rows:repeat(3,120px)]",
        className,
      )}
    >
      {tiles.map((src, i) => (
        <MosaicTile
          key={src + i}
          src={src}
          alt={`${altPrefix} ${i + 1}`}
          tileClass={FULL_TILE_CLASSES[i % FULL_TILE_CLASSES.length]}
          index={i}
        />
      ))}
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
