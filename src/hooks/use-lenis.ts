import { useEffect } from "react"
import Lenis from "lenis"

export function useLenis() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
    })

    return () => {
      lenis.destroy()
    }
  }, [])
}
