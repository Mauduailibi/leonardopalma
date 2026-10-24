import { cn } from "@/lib/utils"
import { Input, Textarea } from "@/components/ui/input"
import type { ComponentProps } from "react"

type UnderlineFieldProps = {
  label: string
  className?: string
  multiline?: boolean
} & (
  | (ComponentProps<"input"> & { multiline?: false })
  | (ComponentProps<"textarea"> & { multiline: true })
)

export function UnderlineField({
  label,
  className,
  multiline = false,
  id,
  ...props
}: UnderlineFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/[^a-z0-9]+/g, "-")

  return (
    <label className={cn("flex flex-col gap-3", className)}>
      <span className="type-mono text-text-mute">{label}</span>
      {multiline ? (
        <Textarea id={fieldId} {...(props as ComponentProps<"textarea">)} />
      ) : (
        <Input id={fieldId} {...(props as ComponentProps<"input">)} />
      )}
    </label>
  )
}
