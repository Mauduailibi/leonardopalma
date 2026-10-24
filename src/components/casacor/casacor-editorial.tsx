import { cn } from "@/lib/utils"
import { SectionIndex } from "@/components/shared/section-index"
import { casacorPage } from "@/content/casacor"
import { siteConfig } from "@/content/site"

export function CasacorEditorial() {
  const { editorial } = casacorPage

  return (
    <section className="flex flex-col gap-14 px-margin pt-section">
      <SectionIndex
        index={editorial.index}
        label={editorial.label}
        accentFill
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
        {editorial.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 28)} className="m-0 max-w-[58ch] type-body-lg text-text-dim">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 border-t border-rule pt-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {editorial.stats.map((stat) => {
          if (stat.lacuna && !siteConfig.showLacunas) return null
          return (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col gap-2.5 border-l pl-5 type-mono",
                stat.accent ? "border-corten" : "border-stroke",
              )}
            >
              <span className="text-text-mute">{stat.label}</span>
              <span className={stat.lacuna ? "text-text-dim" : "text-text"}>
                {stat.value}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
