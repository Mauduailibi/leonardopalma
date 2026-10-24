import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { CtaBlock } from "@/components/shared/cta-block"
import { ProjectsFilters } from "@/components/projects/projects-filters"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectsHeader } from "@/components/projects/projects-header"
import {
  getIndexProjects,
  isProjectFilterId,
  type ProjectFilterId,
} from "@/content/projects"
import { useIsDesktop } from "@/hooks/use-media-query"

export function ProjectsPage() {
  const [params, setParams] = useSearchParams()
  const raw = params.get("categoria")
  const filter: ProjectFilterId = isProjectFilterId(raw) ? raw : "todos"
  const isDesktop = useIsDesktop()
  const [expanded, setExpanded] = useState(false)

  const all = useMemo(() => getIndexProjects(), [])
  const filtered = useMemo(() => {
    if (filter === "todos") return all
    return all.filter((project) => project.categories.includes(filter))
  }, [all, filter])

  useEffect(() => {
    document.title = "Projetos — Leonardo Palma Arquitetura"
    return () => {
      document.title =
        "Leonardo Palma — Arquitetura, Interiores e Paisagismo | Balneário Camboriú"
    }
  }, [])

  useEffect(() => {
    setExpanded(false)
  }, [filter])

  const onFilterChange = (id: ProjectFilterId) => {
    const next = new URLSearchParams(params)
    if (id === "todos") next.delete("categoria")
    else next.set("categoria", id)
    setParams(next, { replace: true })
  }

  return (
    <>
      <ProjectsHeader />
      <ProjectsFilters
        active={filter}
        count={filtered.length}
        onChange={onFilterChange}
      />
      <ProjectsGrid
        projects={filtered}
        collapsed={!isDesktop && !expanded}
        onExpand={() => setExpanded(true)}
      />
      <CtaBlock />
    </>
  )
}
