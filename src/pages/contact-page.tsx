import { useEffect } from "react"
import { SplitTone } from "@/components/shared/split-tone"
import { BriefingForm } from "@/components/contact/briefing-form"
import { ContactAside } from "@/components/contact/contact-aside"
import { ContactMap } from "@/components/contact/contact-map"
import { contactPage } from "@/content/contact"

export function ContactPage() {
  useEffect(() => {
    document.title = "Contato — Leonardo Palma Arquitetura"
    return () => {
      document.title =
        "Leonardo Palma — Arquitetura, Interiores e Paisagismo | Balneário Camboriú"
    }
  }, [])

  return (
    <>
      <section className="px-margin pt-32 lg:pt-[220px]">
        <SplitTone
          as="h1"
          size="hero"
          lit={contactPage.titleLit}
          dim={contactPage.titleDim}
          className="max-w-[26ch] font-display text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.94] font-extralight tracking-[-0.035em] max-lg:text-[52px] max-lg:leading-[0.96]"
        />
      </section>

      <section className="grid grid-cols-1 items-start gap-16 px-margin pt-40 lg:grid-cols-[1fr_380px] lg:gap-[120px]">
        <BriefingForm />
        <ContactAside />
      </section>

      <ContactMap />
    </>
  )
}
