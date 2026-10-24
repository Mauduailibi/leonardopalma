import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { GlassCard } from "@/components/shared/glass-card"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { homeDefines } from "@/content/home"
import { useIsDesktop } from "@/hooks/use-media-query"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function HomeDefines() {
  const isDesktop = useIsDesktop()
  const reduced = useReducedMotion()
  const pinRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!isDesktop || reduced) return
    const el = pinRef.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const passed = Math.min(Math.max(-rect.top, 0), total)
      const progress = total > 0 ? passed / total : 0
      const next = Math.min(
        homeDefines.principles.length - 1,
        Math.floor(progress * homeDefines.principles.length),
      )
      setActive(next)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isDesktop, reduced])

  const principle = homeDefines.principles[active] ?? homeDefines.principles[0]

  if (!isDesktop) {
    return (
      <section className="flex flex-col gap-12 px-margin pt-section">
        <h2 className="m-0 type-h2 text-text">{homeDefines.title}</h2>
        <div className="flex flex-col gap-6">
          {homeDefines.principles.map((item) => (
            <div key={item.index} className="relative overflow-hidden rounded-xl border border-stroke">
              <ImagePlaceholder
                src={homeDefines.image.src}
                alt={item.title}
                className="h-[420px]"
                overlay="bottom"
                halo
              />
              <GlassCard className="absolute inset-x-5 bottom-5 flex flex-col gap-4 p-6">
                <span className="type-mono text-text-dim">
                  {item.index} · {item.label}
                </span>
                <h3 className="m-0 font-display text-[28px] leading-[1.2] font-light tracking-[-0.01em] text-text">
                  {item.title}
                </h3>
                <p className="m-0 type-body text-text-dim">{item.body}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="px-margin pt-section">
      <div ref={pinRef} className="relative h-[240vh]">
        <div className="sticky top-[12vh] flex flex-col gap-12">
          <h2 className="m-0 type-h2 text-text">{homeDefines.title}</h2>
          <div className="relative h-[700px] overflow-hidden rounded-xl border border-stroke">
            <ImagePlaceholder
              src={homeDefines.image.src}
              alt="Fachada com brises de Aço Corten"
              caption={homeDefines.image.caption}
              overlay="bottom"
              halo
              className="absolute inset-0 size-full"
              captionClassName="top-8 right-10"
            />

            <div className="absolute top-12 left-12 flex w-[210px] flex-col type-mono">
              {homeDefines.principles.map((item, i) => (
                <button
                  key={item.index}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex justify-between gap-4 border-b py-4 text-left transition-colors duration-[var(--dur-fast)]",
                    i === active
                      ? "border-stroke-hi text-text"
                      : "border-rule text-text-mute",
                  )}
                >
                  <span>{item.index}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {principle ? (
              <GlassCard className="absolute bottom-12 left-12 flex w-[620px] flex-col gap-[18px] p-8">
                <span className="type-mono text-text-dim">
                  {principle.index} · {principle.label}
                </span>
                <h3 className="m-0 font-display text-[32px] leading-[1.2] font-light tracking-[-0.01em] text-text">
                  {principle.title}
                </h3>
                <p className="m-0 max-w-[56ch] type-body text-text-dim">
                  {principle.body}
                </p>
              </GlassCard>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
