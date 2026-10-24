import { useEffect } from "react"
import { CtaBlock } from "@/components/shared/cta-block"
import { CasacorAuthors } from "@/components/casacor/casacor-authors"
import { CasacorEditorial } from "@/components/casacor/casacor-editorial"
import { CasacorGallery } from "@/components/casacor/casacor-gallery"
import { CasacorHero } from "@/components/casacor/casacor-hero"

export function CasacorPage() {
  useEffect(() => {
    document.title = "Harmonia do Caos — CASACOR | Leonardo Palma"
    return () => {
      document.title =
        "Leonardo Palma — Arquitetura, Interiores e Paisagismo | Balneário Camboriú"
    }
  }, [])

  return (
    <>
      <CasacorHero />
      <CasacorEditorial />
      <CasacorAuthors />
      <CasacorGallery />
      <CtaBlock />
    </>
  )
}
