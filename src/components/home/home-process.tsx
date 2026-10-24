import { cn } from "@/lib/utils"
import { GlassCard } from "@/components/shared/glass-card"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { MetaChip } from "@/components/shared/meta-chip"
import { siteConfig } from "@/content/site"
import { homeProcess } from "@/content/home"

export function HomeProcess() {
  return (
    <section className="flex flex-col gap-12 px-margin pt-section">
      <div className="flex items-baseline justify-between gap-8 max-lg:flex-col">
        <h2 className="m-0 type-h2 text-text">{homeProcess.title}</h2>
        {siteConfig.showLacunas ? (
          <MetaChip className="border-stroke-hi">{homeProcess.lacuna}</MetaChip>
        ) : null}
      </div>

      <div className="relative h-[820px] overflow-hidden rounded-xl border border-stroke max-lg:h-auto max-lg:min-h-[560px]">
        <ImagePlaceholder
          src={homeProcess.image.src}
          alt="Residência com piscina iluminada"
          caption={homeProcess.image.caption}
          halo
          className="absolute inset-0 size-full max-lg:min-h-[560px]"
          captionClassName="top-8 left-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.10) 60%)",
          }}
        />

        <div className="absolute right-12 bottom-14 left-12 grid grid-cols-4 items-end gap-5 max-lg:relative max-lg:inset-auto max-lg:mt-[280px] max-lg:flex max-lg:gap-3 max-lg:overflow-x-auto max-lg:p-5">
          {homeProcess.steps.map((step) => (
            <GlassCard
              key={step.index}
              className={cn(
                "flex flex-col gap-4 p-7 max-lg:w-[240px] max-lg:shrink-0 max-lg:translate-y-0",
                step.index === "01" && "lg:-translate-y-9",
                step.index === "02" && "lg:-translate-y-2",
                step.index === "03" && "lg:-translate-y-6",
              )}
            >
              <span className="font-display text-[56px] leading-[0.9] font-extralight text-text-mute">
                {step.index}
              </span>
              <h3 className="m-0 font-display text-[22px] leading-[1.25] font-light tracking-[-0.01em] text-text">
                {step.title}
              </h3>
              <p className="m-0 type-small text-text-dim">{step.body}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
