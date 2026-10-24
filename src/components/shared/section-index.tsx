type SectionIndexProps = {
  index: string
  label: string
  accentFill?: boolean
}

export function SectionIndex({ index, label, accentFill = false }: SectionIndexProps) {
  return (
    <div className="flex items-center gap-6">
      <span className="type-mono text-corten">{index}</span>
      <span
        className="h-px flex-1"
        style={
          accentFill
            ? {
                background:
                  "linear-gradient(to right, var(--corten) 0 9%, var(--stroke) 9%)",
              }
            : { background: "var(--stroke)" }
        }
      />
      <span className="type-mono text-text-mute">{label}</span>
    </div>
  )
}
