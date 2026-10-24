import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { SplitTone } from "@/components/shared/split-tone"
import { cta } from "@/content/site"
import { homeManifesto } from "@/content/home"

export function HomeManifesto() {
  return (
    <section className="grid grid-cols-1 items-end gap-[120px] px-margin pt-section lg:grid-cols-[1fr_380px]">
      <SplitTone lit={homeManifesto.lit} dim={homeManifesto.dim} />
      <div className="flex flex-col gap-8 pb-2.5">
        <p className="m-0 type-body-lg text-text-dim max-lg:hidden">
          {homeManifesto.support}
        </p>
        <Button asChild variant="secondary" className="self-start max-lg:h-[52px] max-lg:self-stretch">
          <Link to="/escritorio">{cta.viewOffice}</Link>
        </Button>
      </div>
    </section>
  )
}
