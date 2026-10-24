import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type MetaChipProps = {
  children: ReactNode
  active?: boolean
  className?: string
  as?: "span" | "button"
  onClick?: () => void
}

export function MetaChip({
  children,
  active = false,
  className,
  as = "span",
  onClick,
}: MetaChipProps) {
  const classes = cn(
    "inline-flex items-center rounded-sm border px-3.5 py-2 type-mono transition-[border-color,background-color,color] duration-[var(--dur-micro)] ease-[var(--ease-soft)]",
    active
      ? "border-invert bg-invert text-invert-text"
      : "border-stroke text-text-dim",
    as === "button" &&
      !active &&
      "hover:border-stroke-hi hover:bg-text/4 hover:text-text",
    className,
  )

  if (as === "button") {
    return (
      <button type="button" onClick={onClick} aria-pressed={active} className={classes}>
        {children}
      </button>
    )
  }

  return <span className={classes}>{children}</span>
}
