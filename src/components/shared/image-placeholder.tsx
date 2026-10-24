import { useState } from "react"
import { cn } from "@/lib/utils"

type ImagePlaceholderProps = {
  src?: string
  alt?: string
  caption?: string
  className?: string
  imgClassName?: string
  captionClassName?: string
  halo?: boolean
  overlay?: "hero" | "bottom" | "card" | "none"
  fetchPriority?: "high" | "low" | "auto"
  loading?: "eager" | "lazy"
  grayscale?: boolean
}

export function ImagePlaceholder({
  src,
  alt = "",
  caption,
  className,
  imgClassName,
  captionClassName,
  halo = false,
  overlay = "none",
  fetchPriority,
  loading,
  grayscale = false,
}: ImagePlaceholderProps) {
  const [status, setStatus] = useState<"pending" | "loaded" | "error">("pending")
  const loaded = status === "loaded"

  return (
    <div
      className={cn(
        "placeholder-stripes relative overflow-hidden",
        grayscale && "grayscale",
        className,
      )}
    >
      {halo ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 74% 62%, color-mix(in srgb, var(--ember) 14%, transparent), transparent 70%)",
          }}
        />
      ) : null}

      {src ? (
        <img
          src={src}
          alt={alt}
          fetchPriority={fetchPriority}
          loading={loading}
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-[var(--dur-slow)] ease-[var(--ease-out-expo)]",
            loaded ? "opacity-100" : "opacity-0",
            imgClassName,
          )}
        />
      ) : null}

      {overlay === "hero" ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.25) 42%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      ) : null}

      {overlay === "bottom" ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.15) 55%)",
          }}
        />
      ) : null}

      {overlay === "card" ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0) 55%)",
          }}
        />
      ) : null}

      {caption && !loaded ? (
        <span
          className={cn(
            "pointer-events-none absolute type-mono text-text-mute",
            captionClassName ?? "bottom-7 left-8 max-w-[70%] leading-[1.6]",
          )}
        >
          {caption}
        </span>
      ) : null}
    </div>
  )
}
