import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { MetaChip } from "@/components/shared/meta-chip"
import { cta, siteConfig } from "@/content/site"
import { homeCasacor } from "@/content/home"

export function HomeCasacor() {
  return (
    <section className="mt-section bg-carbon px-margin py-40 max-lg:py-24">
      <div className="grid items-center gap-20 max-lg:grid-cols-1 max-lg:gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="flex items-center gap-4">
            <MetaChip className="px-4 py-2.5 tracking-[0.28em] text-text">
              {homeCasacor.kicker}
            </MetaChip>
            {siteConfig.showLacunas ? (
              <span className="type-mono text-text-mute">{homeCasacor.lacuna}</span>
            ) : null}
          </div>
          <h2 className="m-0 type-display text-text">{homeCasacor.title}</h2>
          {homeCasacor.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="m-0 max-w-[56ch] type-body-lg text-text-dim">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col gap-3 border-t border-rule pt-6">
            <span className="type-mono text-text-mute">{homeCasacor.authorsLabel}</span>
            <span className="type-body text-text">{homeCasacor.authors}</span>
          </div>
          <Button asChild variant="secondary" className="self-start">
            <Link to={homeCasacor.href}>{cta.viewCasacor}</Link>
          </Button>
        </div>

        <ImagePlaceholder
          src={homeCasacor.image.src}
          alt="Salão da exposição Harmonia do Caos"
          caption={homeCasacor.image.caption}
          className="h-[780px] rounded-lg border border-stroke max-lg:aspect-4/5 max-lg:h-auto"
        />
      </div>
    </section>
  )
}
