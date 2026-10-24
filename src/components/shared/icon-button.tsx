import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type IconButtonProps = {
  to?: string
  href?: string
  label: string
  inverted?: boolean
  decorative?: boolean
  dataCursor?: string
  className?: string
  onClick?: () => void
  children: ReactNode
}

export function IconButton({
  to,
  href,
  label,
  inverted = false,
  decorative = false,
  dataCursor,
  className,
  onClick,
  children,
}: IconButtonProps) {
  const classes = cn(
    "group relative isolate flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-sm border text-[16px] transition-[background-color,border-color,color] duration-[var(--dur-micro)] ease-[var(--ease-soft)]",
    inverted
      ? "border-invert-stroke text-invert-text group-hover:border-invert-text group-hover:bg-invert-text group-hover:text-invert"
      : "border-stroke text-text hover:border-invert hover:bg-invert hover:text-invert-text",
    className,
  )

  const inner = (
    <span className="relative flex size-full items-center justify-center">
      <span className="transition-transform duration-[var(--dur-micro)] ease-[var(--ease-soft)] group-hover:-translate-y-full group-hover:translate-x-[2px] group-hover:opacity-0">
        {children}
      </span>
      <span className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition-transform duration-[var(--dur-micro)] ease-[var(--ease-soft)] group-hover:translate-y-0 group-hover:opacity-100">
        {children}
      </span>
      {decorative ? null : <span className="sr-only">{label}</span>}
    </span>
  )

  if (decorative) {
    return (
      <span aria-hidden="true" className={classes}>
        {inner}
      </span>
    )
  }

  if (to) {
    return (
      <Link to={to} aria-label={label} data-cursor={dataCursor} className={classes}>
        {inner}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} aria-label={label} data-cursor={dataCursor} className={classes}>
        {inner}
      </a>
    )
  }

  return (
    <button
      type="button"
      aria-label={label}
      data-cursor={dataCursor}
      onClick={onClick}
      className={classes}
    >
      {inner}
    </button>
  )
}
