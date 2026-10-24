import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

function Input({ className, type = "text", ...props }: ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full border-0 border-b border-stroke bg-transparent pb-3 type-body-lg text-text caret-corten outline-none placeholder:text-text-mute transition-[border-color] duration-[var(--dur-micro)] ease-[var(--ease-soft)] hover:border-stroke-hi focus:border-corten focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  )
}

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full resize-none border-0 border-b border-stroke bg-transparent pb-18 type-body-lg text-text caret-corten outline-none placeholder:text-text-mute transition-[border-color] duration-[var(--dur-micro)] ease-[var(--ease-soft)] hover:border-stroke-hi focus:border-corten focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  )
}

export { Input, Textarea }
