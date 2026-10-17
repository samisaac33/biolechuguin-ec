import Image from "next/image";
import type { StockPhoto } from "@/content/media";

type StockImageProps = {
  photo: StockPhoto;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  overlay?: boolean;
};

export function StockImage({
  photo,
  priority = false,
  className = "",
  imageClassName = "object-cover",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  overlay = false,
}: StockImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageClassName}
      />
      {overlay ? (
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent"
          aria-hidden
        />
      ) : null}
    </div>
  );
}
