import { cn } from "@/lib/utils"

type CarouselProgressProps = {
  count: number
  index: number
  progress: number
  className?: string
}

export function CarouselProgress({
  count,
  index,
  progress,
  className,
}: CarouselProgressProps) {
  return (
    <div className={cn("flex gap-1.5", className)} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const fill =
          i < index ? 100 : i === index ? Math.min(100, progress * 100) : 0
        return (
          <span
            key={i}
            className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-stroke"
          >
            <span
              className="absolute inset-y-0 left-0 bg-corten"
              style={{ width: `${fill}%` }}
            />
          </span>
        )
      })}
    </div>
  )
}
