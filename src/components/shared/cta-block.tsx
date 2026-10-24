import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cta, siteConfig } from "@/content/site"
import { homeCta } from "@/content/home"

type CtaBlockProps = {
  showLacuna?: boolean
}

export function CtaBlock({ showLacuna = false }: CtaBlockProps) {
  return (
    <section className="flex flex-col items-start gap-12 px-margin pt-section">
      <h2 className="m-0 max-w-[20ch] type-hero text-text max-lg:text-[52px] max-lg:leading-[0.96]">
        {homeCta.title}
      </h2>
      <div className="flex items-center gap-9 max-lg:w-full max-lg:flex-col max-lg:items-stretch max-lg:gap-3">
        <Button asChild className="max-lg:h-[52px]">
          <Link to="/contato">{cta.startProject}</Link>
        </Button>
        <Button asChild variant="secondary" className="max-lg:h-[52px]">
          <a href="/assets/brand/portfolio.pdf">{cta.downloadPortfolio}</a>
        </Button>
        {showLacuna && siteConfig.showLacunas ? (
          <span className="type-mono text-text-mute max-lg:pt-2">{homeCta.lacuna}</span>
        ) : null}
      </div>
    </section>
  )
}
