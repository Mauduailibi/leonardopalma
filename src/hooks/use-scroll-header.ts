import { useEffect, useState } from "react"

type ScrollHeaderState = {
  hidden: boolean
  scrolled: boolean
}

export function useScrollHeader(threshold = 80) {
  const [state, setState] = useState<ScrollHeaderState>({
    hidden: false,
    scrolled: false,
  })

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY
      setState({
        scrolled: y > threshold,
        hidden: goingDown && y > threshold + 40,
      })
      lastY = y
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return state
}
