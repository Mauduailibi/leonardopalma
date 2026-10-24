import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

type SignaturePhase = 0 | 1 | 2 | "done"

function animateValue(
  from: number,
  to: number,
  duration: number,
  delay: number,
  onTick: (value: number) => void,
) {
  return new Promise<void>((resolve) => {
    const start = performance.now() + delay
    const tick = (now: number) => {
      const progress = Math.min(Math.max((now - start) / duration, 0), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      onTick(from + (to - from) * eased)
      if (progress < 1) requestAnimationFrame(tick)
      else resolve()
    }
    requestAnimationFrame(tick)
  })
}

function sessionKey(slug: string) {
  return `sig:${slug}`
}

export function useSignature(slug: string, canPlay: boolean) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<SignaturePhase>("done")

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const skip =
      reduced ||
      !canPlay ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      sessionStorage.getItem(sessionKey(slug)) === "1"

    if (skip) {
      setPhase("done")
      el.classList.add("is-done")
      el.dataset.phase = "done"
      return
    }

    setPhase(0)
    el.classList.remove("is-done")
    el.dataset.phase = "0"
    el.style.setProperty("--draw", "0%")
    el.style.setProperty("--reveal", "0%")
    el.style.setProperty("--front-opacity", "0")
    el.style.setProperty("--sketch-opacity", "1")

    let cancelled = false
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return
        observer.disconnect()
        void play()
      },
      { threshold: 0.35 },
    )

    observer.observe(el)

    async function play() {
      if (!el || cancelled) return
      const mobile = window.matchMedia("(max-width: 1023px)").matches
      const factor = mobile ? 2000 / 2800 : 1

      setPhase(1)
      el.dataset.phase = "1"
      await animateValue(0, 100, 800 * factor, 200 * factor, (value) => {
        el.style.setProperty("--draw", `${value}%`)
      })
      if (cancelled) return

      setPhase(2)
      el.dataset.phase = "2"
      el.style.setProperty("--front-opacity", "1")
      await animateValue(0, 108, 1400 * factor, 0, (value) => {
        el.style.setProperty("--reveal", `${value}%`)
      })
      if (cancelled) return

      el.style.setProperty("--front-opacity", "0")
      el.style.setProperty("--sketch-opacity", "0")
      el.classList.add("is-done")
      el.dataset.phase = "done"
      setPhase("done")
      sessionStorage.setItem(sessionKey(slug), "1")
    }

    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [slug, canPlay, reduced])

  return { ref, phase }
}
