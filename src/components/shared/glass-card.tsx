import { cn } from "@/lib/utils"
import type { CSSProperties, ReactNode } from "react"

type GlassCardProps = {
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export function GlassCard({ className, style, children }: GlassCardProps) {
  return (
    <div className={cn("glass", className)} style={style}>
      {children}
    </div>
  )
}
