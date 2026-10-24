import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-[transform,background-color,border-color,color] duration-[var(--dur-micro)] ease-[var(--ease-soft)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-pill bg-invert px-7 py-3.5 text-body font-medium text-invert-text hover:scale-[1.03]",
        secondary:
          "rounded-pill border border-stroke bg-transparent px-7 py-3.5 text-body text-text hover:border-stroke-hi hover:bg-text/4",
        ghost:
          "rounded-pill px-7 py-3.5 text-body text-text hover:bg-text/4",
        icon:
          "size-11 rounded-sm border border-stroke text-text hover:border-invert hover:bg-invert hover:text-invert-text",
        "icon-invert":
          "size-11 rounded-sm border border-invert-stroke text-invert-text hover:border-invert-text hover:bg-invert-text hover:text-invert",
        link: "rounded-none border-b border-stroke-hi pb-[3px] text-body text-text hover:border-corten",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    magnetic?: boolean
  }

function Button({
  className,
  variant = "primary",
  asChild = false,
  magnetic,
  onMouseMove,
  onMouseLeave,
  style,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  const isMagnetic = magnetic ?? variant === "primary"
  const [offset, setOffset] = React.useState({ x: 0, y: 0 })

  const handleMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    onMouseMove?.(event)
    if (!isMagnetic) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    setOffset({
      x: Math.max(-6, Math.min(6, x * 0.18)),
      y: Math.max(-6, Math.min(6, y * 0.18)),
    })
  }

  const handleLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    onMouseLeave?.(event)
    if (!isMagnetic) return
    setOffset({ x: 0, y: 0 })
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant }), className)}
      style={{
        ...style,
        transform: isMagnetic
          ? `translate(${offset.x}px, ${offset.y}px)`
          : style?.transform,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    />
  )
}

export { Button, buttonVariants }
