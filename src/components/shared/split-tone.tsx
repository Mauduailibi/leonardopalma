import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

type SplitToneProps = {
  lit: string
  dim: string
  as?: "h1" | "h2" | "h3" | "p"
  className?: string
  animate?: boolean
  size?: "display" | "hero"
}

export function SplitTone({
  lit,
  dim,
  as: Comp = "h2",
  className,
  animate = true,
  size = "display",
}: SplitToneProps) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const [litActive, setLitActive] = useState(!animate || reduced)

  useEffect(() => {
    if (!animate || reduced) {
      setLitActive(true)
      return
    }
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        setLitActive(entry.intersectionRatio > 0.35)
      },
      { threshold: [0, 0.35, 0.7, 1] },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [animate, reduced])

  return (
    <Comp
      ref={ref as never}
      className={cn(size === "hero" ? "type-hero" : "type-display", className)}
    >
      <span
        className={cn(
          "transition-colors duration-[var(--dur-base)] ease-[var(--ease-out-expo)]",
          litActive ? "text-text" : "text-text-mute",
        )}
      >
        {lit}
      </span>{" "}
      <span className="text-text-mute">{dim}</span>
    </Comp>
  )
}
