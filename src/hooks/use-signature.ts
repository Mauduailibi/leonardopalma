import { useEffect, useRef, useState } from "react"

export type SignaturePhase = "paper" | "drawing" | "reveal" | "done"

/* Janela em que os traços começam; a obra começa a surgir antes do último
   traço (REVEAL_AT do span), para o desenho nunca parar e esperar */
const DRAW_SPAN_DESKTOP = 2.6
const DRAW_SPAN_MOBILE = 1.9
const REVEAL_AT = 0.85
const REVEAL_MS = 3000
const PAPER_MS = 600

/** Janela (s) em que os traços do croqui começam */
export function signatureSpan() {
  return window.matchMedia("(max-width: 1023px)").matches ? DRAW_SPAN_MOBILE : DRAW_SPAN_DESKTOP
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Efeito assinatura: papel em branco → croqui a lápis → a foto surge por baixo
 * dos traços como uma aguada e ganha cor, enquanto o lápis se dissolve.
 * As transições da revelação ficam no CSS ([data-phase="reveal"]).
 */
export function useSignature(enabled: boolean, ready: boolean) {
  const ref = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<SignaturePhase>(() =>
    enabled && !prefersReducedMotion() ? "paper" : "done",
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!enabled || prefersReducedMotion()) {
      setPhase("done")
      return
    }
    if (!ready) return

    let cancelled = false
    const timers: number[] = []
    const wait = (ms: number) =>
      new Promise<void>((resolve) => timers.push(window.setTimeout(resolve, ms)))

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        void play()
      },
      { threshold: 0.35 },
    )
    observer.observe(el)

    async function play() {
      if (!el) return
      const span = signatureSpan()

      /* Um instante de papel em branco antes do primeiro traço */
      await wait(PAPER_MS)
      if (cancelled) return

      setPhase("drawing")
      await wait(span * REVEAL_AT * 1000)
      if (cancelled) return

      setPhase("reveal")
      await wait(REVEAL_MS)
      if (cancelled) return

      setPhase("done")
    }

    return () => {
      cancelled = true
      observer.disconnect()
      timers.forEach(window.clearTimeout)
    }
  }, [enabled, ready])

  /* Avisa o header que há papel claro atrás dele (a assinatura branca sumiria).
     Na revelação ele já volta ao branco, junto com a foto. */
  useEffect(() => {
    const root = document.documentElement
    if (phase === "paper" || phase === "drawing") root.dataset.sig = phase
    else delete root.dataset.sig
    return () => {
      delete root.dataset.sig
    }
  }, [phase])

  return { ref, phase }
}
