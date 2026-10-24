import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CarouselProgress } from "@/components/shared/carousel-progress"
import { GlassCard } from "@/components/shared/glass-card"
import { IconButton } from "@/components/shared/icon-button"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { MetaChip } from "@/components/shared/meta-chip"
import { cta, siteConfig } from "@/content/site"
import { homeHero } from "@/content/home"
import { getFeaturedProjects } from "@/content/projects"
import { useAutoplayIndex } from "@/hooks/use-autoplay-index"
import { useMediaQuery } from "@/hooks/use-media-query"

export function HomeHero() {
  const isWide = useMediaQuery("(min-width: 1280px)")
  const featured = getFeaturedProjects().slice(0, 4)
  const [paused, setPaused] = useState(false)
  const { index, progress, next, prev } = useAutoplayIndex(featured.length, 6000, paused)
  const current = featured[index]

  return (
    <section className="px-margin pt-6">
      <div className="relative h-[940px] overflow-hidden rounded-xl border border-stroke max-lg:h-[660px] max-lg:rounded-lg">
        <ImagePlaceholder
          src={homeHero.image.src}
          alt="Residência ao entardecer com luz quente interna"
          caption={homeHero.image.caption}
          halo
          overlay="hero"
          fetchPriority="high"
          className="absolute inset-0 size-full"
          captionClassName="top-1/2 left-14 -translate-y-1/2 max-lg:left-5 max-lg:right-5 max-lg:top-auto max-lg:bottom-40 max-lg:translate-y-0"
        />

        <div className="absolute bottom-16 left-14 z-10 flex w-[760px] max-w-[calc(100%-2rem)] flex-col gap-14 max-lg:bottom-6 max-lg:left-5 max-lg:right-5 max-lg:w-auto max-lg:gap-6">
          <h1 className="type-hero text-text max-lg:text-[52px] max-lg:leading-[0.96]">
            {isWide ? homeHero.title : homeHero.titleMobile}
          </h1>
          <div className="flex items-center gap-9 max-lg:flex-col max-lg:items-stretch max-lg:gap-6">
            <Button asChild className="max-lg:h-[52px]">
              <Link to="/contato">{cta.startProject}</Link>
            </Button>
            <p className="m-0 max-w-[42ch] type-body text-text-dim max-lg:max-w-none">
              {isWide ? homeHero.support : homeHero.supportMobile}
            </p>
          </div>
        </div>

        {isWide ? (
          <div
            className="absolute right-10 bottom-16 z-10 flex w-[396px] flex-col gap-4"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {siteConfig.showNumbers ? (
              <div className="flex gap-4">
                {homeHero.stats.map((stat) => (
                  <GlassCard
                    key={stat.label}
                    className="flex flex-1 flex-col gap-3 p-6"
                  >
                    <span className="font-display text-[60px] leading-[0.9] font-extralight text-text">
                      {stat.value}
                    </span>
                    <span className="type-small text-text-dim">{stat.label}</span>
                    {stat.lacuna && siteConfig.showLacunas ? (
                      <MetaChip className="self-start border-stroke-hi px-2.5 py-[5px]">
                        {stat.lacuna}
                      </MetaChip>
                    ) : null}
                  </GlassCard>
                ))}
              </div>
            ) : null}

            {current ? (
              <GlassCard className="flex flex-col gap-[18px] p-5">
                <div className="flex gap-4">
                  <ImagePlaceholder
                    src={current.assets.card}
                    alt={current.title}
                    className="h-[120px] w-24 shrink-0 rounded-md border border-stroke"
                  />
                  <div className="flex min-w-0 flex-col gap-2">
                    <span className="type-mono text-text-dim">Projeto em destaque</span>
                    <h3 className="m-0 font-display text-2xl leading-[1.2] font-light tracking-[-0.01em] text-text">
                      {current.title}
                    </h3>
                    <p className="m-0 type-small text-text-dim">{current.concept}.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <CarouselProgress
                    count={featured.length}
                    index={index}
                    progress={progress}
                    className="max-w-[132px] flex-1"
                  />
                  <div className="flex gap-2">
                    <IconButton label="Projeto anterior" onClick={prev}>
                      ←
                    </IconButton>
                    <IconButton label="Próximo projeto" onClick={next}>
                      →
                    </IconButton>
                  </div>
                </div>
              </GlassCard>
            ) : null}
          </div>
        ) : null}
      </div>

      {!isWide ? (
        <div className="flex flex-col gap-3.5 pt-8">
          <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none]">
            {homeHero.stats.map((stat) => (
              <GlassCard
                key={stat.label}
                className="flex w-[200px] shrink-0 flex-col gap-2.5 rounded-[20px] p-5"
              >
                <span className="font-display text-[48px] leading-[0.9] font-extralight text-text">
                  {stat.value}
                </span>
                <span className="type-small text-text-dim">{stat.label}</span>
              </GlassCard>
            ))}
            {current ? (
              <GlassCard className="flex w-[200px] shrink-0 flex-col gap-2.5 rounded-[20px] p-5">
                <span className="type-mono text-text-dim">Destaque</span>
                <span className="font-display text-xl leading-[1.2] font-light text-text">
                  {current.title}
                </span>
                <span className="type-small text-text-dim">{current.concept}.</span>
              </GlassCard>
            ) : null}
          </div>
          <CarouselProgress count={3} index={index % 3} progress={progress} />
        </div>
      ) : null}
    </section>
  )
}
