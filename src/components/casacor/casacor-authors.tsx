import { padIndex } from "@/lib/utils"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { SectionIndex } from "@/components/shared/section-index"
import { casacorPage } from "@/content/casacor"
import { siteConfig } from "@/content/site"

export function CasacorAuthors() {
  const { authors } = casacorPage

  return (
    <section className="px-margin pt-section">
      <div className="grid grid-cols-1 items-center gap-12 border-t border-stroke pt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <ImagePlaceholder
          src={authors.photo.src}
          alt={authors.photo.alt}
          caption={authors.photo.caption}
          grayscale
          className="h-[640px] rounded-lg border border-stroke max-lg:h-[420px]"
          captionClassName="left-7 bottom-6 max-w-[76%] leading-[1.6]"
        />

        <div className="flex flex-col gap-10">
          <SectionIndex index={authors.index} label={authors.label} />
          <h2 className="m-0 max-w-[22ch] type-display text-text">
            {authors.title}
          </h2>
          <div className="flex flex-col border-t border-stroke-hi">
            {authors.names.map((name, i) => {
              const last = i === authors.names.length - 1
              return (
                <div
                  key={name}
                  className={
                    last
                      ? "grid grid-cols-[auto_1fr] items-baseline gap-7 py-5"
                      : "grid grid-cols-[auto_1fr] items-baseline gap-7 border-b border-rule py-5"
                  }
                >
                  <span
                    className={
                      i === 0
                        ? "type-mono tracking-[0.14em] text-corten"
                        : "type-mono tracking-[0.14em] text-text-mute"
                    }
                  >
                    {padIndex(i + 1)}
                  </span>
                  <span className="font-display text-[26px] tracking-[-0.01em] font-light text-text">
                    {name}
                  </span>
                </div>
              )
            })}
          </div>
          {siteConfig.showLacunas ? (
            <span className="type-mono text-text-mute">{authors.credit}</span>
          ) : null}
        </div>
      </div>
    </section>
  )
}
