import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function CustomCursor() {
  const isTouch = useMediaQuery("(pointer: coarse)")
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    if (isTouch || reduced) return

    document.documentElement.classList.add("has-custom-cursor")
    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY })
      const target = (event.target as HTMLElement | null)?.closest("[data-cursor]")
      setLabel(target?.getAttribute("data-cursor") ?? null)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      document.documentElement.classList.remove("has-custom-cursor")
      window.removeEventListener("mousemove", onMove)
    }
  }, [isTouch, reduced])

  if (isTouch || reduced) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden lg:block"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <div
        className={cn(
          "flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-invert text-[11px] font-medium tracking-[0.14em] text-invert-text uppercase transition-[width,height] duration-[var(--dur-fast)] ease-[var(--ease-out-expo)]",
          label ? "h-16 w-16" : "h-2 w-2",
        )}
      >
        {label ? <span className="px-2 text-center leading-tight">{label}</span> : null}
      </div>
    </div>
  )
}
