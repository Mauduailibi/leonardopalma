import { useEffect, useRef } from "react"

/** Gerado a partir da foto do projeto: [tipo, início ‰ do span, duração ms, x0, y0, x1, y1, …] */
export type CroquiData = { w: number; h: number; s: number[][] }

type Stroke = {
  kind: number
  start: number
  duration: number
  pts: number[]
  cum: number[]
  total: number
  drawn: number
}

/* Pressão do lápis por tipo: estrutura · detalhe · repasse · hachura */
const PENCIL = [
  { width: 1.5, alpha: 0.85 },
  { width: 0.95, alpha: 0.6 },
  { width: 0.85, alpha: 0.4 },
  { width: 0.75, alpha: 0.32 },
]

function easeInOutSine(p: number) {
  return -(Math.cos(Math.PI * p) - 1) / 2
}

/* Grafite: cor fria com alfa irregular, para o traço ganhar o grão do papel */
function graphite(ctx: CanvasRenderingContext2D) {
  const tile = document.createElement("canvas")
  tile.width = tile.height = 64
  const tileCtx = tile.getContext("2d")
  if (!tileCtx) return "#2e2e32"
  const image = tileCtx.createImageData(64, 64)
  for (let i = 0; i < image.data.length; i += 4) {
    image.data[i] = 44
    image.data[i + 1] = 44
    image.data[i + 2] = 48
    image.data[i + 3] = 150 + Math.random() * 105
  }
  tileCtx.putImageData(image, 0, 0)
  return ctx.createPattern(tile, "repeat") ?? "#2e2e32"
}

function pointAt(stroke: Stroke, length: number, segment: number) {
  const { pts, cum } = stroke
  const span = cum[segment + 1] - cum[segment] || 1
  const k = (length - cum[segment]) / span
  return [
    pts[segment * 2] + (pts[segment * 2 + 2] - pts[segment * 2]) * k,
    pts[segment * 2 + 1] + (pts[segment * 2 + 3] - pts[segment * 2 + 1]) * k,
  ]
}

/* Desenha só o trecho novo do traço — o que já está no papel não é redesenhado */
function drawPortion(ctx: CanvasRenderingContext2D, stroke: Stroke, from: number, to: number) {
  const { cum } = stroke
  let segment = 0
  while (segment < cum.length - 2 && cum[segment + 1] < from) segment++

  ctx.beginPath()
  const [sx, sy] = pointAt(stroke, from, segment)
  ctx.moveTo(sx, sy)
  while (segment < cum.length - 2 && cum[segment + 1] < to) {
    segment++
    ctx.lineTo(stroke.pts[segment * 2], stroke.pts[segment * 2 + 1])
  }
  const [ex, ey] = pointAt(stroke, to, segment)
  ctx.lineTo(ex, ey)
  ctx.stroke()
}

type CroquiCanvasProps = {
  data: CroquiData
  play: boolean
  /** Janela, em segundos, em que os traços começam */
  span: number
}

export function CroquiCanvas({ data, play, span }: CroquiCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext("2d")
    if (!play || !canvas || !ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const { width, height } = canvas.getBoundingClientRect()
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)

    /* Mesmo enquadramento do object-cover da foto */
    const scale = Math.max(canvas.width / data.w, canvas.height / data.h)
    const offsetX = (canvas.width - data.w * scale) / 2
    const offsetY = (canvas.height - data.h * scale) / 2

    const strokes: Stroke[] = data.s.map(([kind, start, duration, ...coords]) => {
      const pts = coords.map((value, i) => value * scale + (i % 2 === 0 ? offsetX : offsetY))
      const cum = [0]
      for (let i = 2; i < pts.length; i += 2) {
        cum.push(cum[cum.length - 1] + Math.hypot(pts[i] - pts[i - 2], pts[i + 1] - pts[i - 1]))
      }
      return {
        kind,
        start: (start / 1000) * span,
        duration: duration / 1000,
        pts,
        cum,
        total: cum[cum.length - 1],
        drawn: 0,
      }
    })

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.strokeStyle = graphite(ctx)

    let frame = 0
    const startedAt = performance.now()
    const tick = (now: number) => {
      const elapsed = (now - startedAt) / 1000
      let pending = false
      for (const stroke of strokes) {
        if (stroke.drawn >= stroke.total) continue
        pending = true
        const progress = (elapsed - stroke.start) / stroke.duration
        if (progress <= 0) continue
        const target = stroke.total * easeInOutSine(Math.min(progress, 1))
        if (target <= stroke.drawn) continue
        const pencil = PENCIL[stroke.kind] ?? PENCIL[1]
        ctx.lineWidth = pencil.width * dpr
        ctx.globalAlpha = pencil.alpha
        drawPortion(ctx, stroke, stroke.drawn, target)
        stroke.drawn = progress >= 1 ? stroke.total : target
      }
      if (pending) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [data, play, span])

  return <canvas ref={ref} className="block size-full" />
}
