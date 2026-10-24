import { SplitTone } from "@/components/shared/split-tone"
import { servicesPage } from "@/content/services"

export function ServicesHeader() {
  return (
    <section className="grid grid-cols-1 items-end gap-8 px-margin pt-32 lg:grid-cols-[1fr_380px] lg:gap-[120px] lg:pt-[220px]">
      <SplitTone
        as="h1"
        size="hero"
        lit={servicesPage.titleLit}
        dim={servicesPage.titleDim}
        className="max-lg:text-[52px] max-lg:leading-[0.96]"
      />
      <p className="m-0 type-body-lg text-text-dim max-lg:type-body lg:pb-3">
        {servicesPage.support}
      </p>
    </section>
  )
}
