import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

type Shot = { src: string; alt: string };

/**
 * Global image lightbox. Any <img data-lightbox> anywhere in the app opens
 * full-size on click, without navigating (even inside a <Link> card).
 */
export function ImageLightbox() {
  const [shot, setShot] = useState<Shot | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const img = target?.closest?.("img[data-lightbox]") as HTMLImageElement | null;
      if (!img) return;
      e.preventDefault();
      e.stopPropagation();
      setShot({ src: img.currentSrc || img.src, alt: img.alt });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  const close = useCallback(() => setShot(null), []);

  useEffect(() => {
    if (!shot) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [shot, close]);

  if (!shot) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={shot.alt || "Image preview"}
      onClick={close}
      className="fixed inset-0 z-[100] grid place-items-center bg-background/95 p-4 backdrop-blur-sm animate-in fade-in"
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close image"
        className="absolute right-5 top-5 border border-border/70 bg-card/70 p-2 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
      >
        <X size={18} />
      </button>
      <figure className="max-h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={shot.src}
          alt={shot.alt}
          className="max-h-[85vh] w-auto max-w-full border border-border/60 object-contain"
        />
        {shot.alt ? (
          <figcaption className="mt-3 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {shot.alt}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}
