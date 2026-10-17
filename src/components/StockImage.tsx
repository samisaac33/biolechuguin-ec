"use client";

import Image from "next/image";
import { useState } from "react";
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
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className} ${
        failed ? "bg-gradient-to-br from-slate-200 to-slate-400" : ""
      }`}
    >
      {failed ? (
        <p className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm font-medium text-slate-700">
          {photo.alt}
        </p>
      ) : (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClassName}
          onError={() => setFailed(true)}
        />
      )}
      {overlay && !failed ? (
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent"
          aria-hidden
        />
      ) : null}
    </div>
  );
}
