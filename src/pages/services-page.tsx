import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { CtaBlock } from "@/components/shared/cta-block"
import { ServiceDisciplineSection } from "@/components/services/service-discipline"
import { ServicesHeader } from "@/components/services/services-header"
import { serviceDisciplines } from "@/content/services"

export function ServicesPage() {
  const location = useLocation()

  useEffect(() => {
    document.title = "Serviços — Leonardo Palma Arquitetura"
    return () => {
      document.title =
        "Leonardo Palma — Arquitetura, Interiores e Paisagismo | Balneário Camboriú"
    }
  }, [])

  useEffect(() => {
    const id = location.hash.replace("#", "")
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }, [location.hash])

  return (
    <>
      <ServicesHeader />
      {serviceDisciplines.map((discipline, index) => (
        <ServiceDisciplineSection
          key={discipline.id}
          discipline={discipline}
          first={index === 0}
        />
      ))}
      <CtaBlock />
    </>
  )
}
