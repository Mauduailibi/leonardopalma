import { cn } from "@/lib/utils"
import { siteConfig } from "@/content/site"

type NumberedListItem = {
  index: string
  label: string
  lacuna?: boolean
}

type NumberedListProps = {
  title?: string
  items: NumberedListItem[]
  className?: string
}

export function NumberedList({ title, items, className }: NumberedListProps) {
  const visible = items.filter((item) => !item.lacuna || siteConfig.showLacunas)

  return (
    <div className={cn("flex flex-col border-t border-stroke-hi", className)}>
      {title ? (
        <span className="type-mono pt-5 pb-2 text-text-mute">{title}</span>
      ) : null}
      {visible.map((item, i) => {
        const last = i === visible.length - 1
        return (
          <div
            key={item.index}
            className={cn(
              "group relative grid grid-cols-[auto_1fr] items-baseline gap-6 py-[18px] transition-transform duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:translate-x-3",
              !last && "border-b border-rule",
            )}
          >
            <span className="font-display text-[32px] leading-none font-extralight text-text-mute transition-colors duration-[var(--dur-fast)] group-hover:text-text">
              {item.index}
            </span>
            <span
              className={cn(
                "type-body",
                item.lacuna ? "text-text-dim" : "text-text",
              )}
            >
              {item.label}
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-corten transition-transform duration-[var(--dur-fast)] ease-[var(--ease-soft)] group-hover:scale-x-100"
            />
          </div>
        )
      })}
    </div>
  )
}
