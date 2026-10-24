import { useCallback, useEffect, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function useAutoplayIndex(length: number, duration = 6000, paused = false) {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + length) % length)
      setProgress(0)
    },
    [length],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused || reduced || length <= 1) return

    let frame = 0
    let start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min(elapsed / duration, 1)
      setProgress(p)
      if (p >= 1) {
        start = now
        setIndex((current) => (current + 1) % length)
        setProgress(0)
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [duration, length, paused, reduced])

  return { index, progress: reduced ? 1 : progress, next, prev, goTo }
}
