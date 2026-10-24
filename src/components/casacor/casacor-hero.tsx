import { MetaChip } from "@/components/shared/meta-chip"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { casacorPage } from "@/content/casacor"
import { siteConfig } from "@/content/site"

export function CasacorHero() {
  return (
    <section className="px-margin pt-6">
      <div className="on-photo relative h-[900px] overflow-hidden rounded-xl border border-stroke max-lg:h-[640px] max-lg:rounded-lg">
        <ImagePlaceholder
          src={casacorPage.hero.src}
          alt={casacorPage.hero.alt}
          caption={casacorPage.hero.caption}
          halo
          overlay="hero"
          fetchPriority="high"
          className="absolute inset-0 size-full"
          captionClassName="top-1/2 left-14 -translate-y-1/2 max-lg:left-5 max-lg:right-5 max-lg:top-auto max-lg:bottom-44 max-lg:translate-y-0"
        />

        <div className="absolute bottom-14 left-14 z-10 flex flex-col gap-7 max-lg:bottom-6 max-lg:left-5 max-lg:right-5">
          <div className="flex flex-wrap items-center gap-5">
            <MetaChip className="border-stroke-hi px-4 py-2.5 tracking-[0.28em] text-text">
              {casacorPage.kicker}
            </MetaChip>
            <span className="h-px w-10 bg-corten max-lg:hidden" />
            {siteConfig.showLacunas ? (
              <span className="type-mono text-text-dim">{casacorPage.edition}</span>
            ) : (
              <span className="type-mono text-text-dim">Santa Catarina</span>
            )}
          </div>
          <h1 className="m-0 max-w-[16ch] font-display text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.94] font-extralight tracking-[-0.035em] text-pretty text-text">
            {casacorPage.title}
          </h1>
          <span className="font-script text-[48px] leading-[1.35] text-text max-lg:text-[32px]">
            {casacorPage.concept}
          </span>
        </div>
      </div>
    </section>
  )
}
