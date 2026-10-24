import { MetaChip } from "@/components/shared/meta-chip"
import {
  projectFilters,
  type ProjectFilterId,
} from "@/content/projects"

type ProjectsFiltersProps = {
  active: ProjectFilterId
  count: number
  onChange: (id: ProjectFilterId) => void
}

export function ProjectsFilters({ active, count, onChange }: ProjectsFiltersProps) {
  const label = `${count} ${count === 1 ? "projeto" : "projetos"}`

  return (
    <section className="px-margin pt-20 max-lg:pt-10">
      <div className="flex flex-wrap items-center gap-2.5 border-b border-rule pb-8 max-lg:flex-col max-lg:items-stretch max-lg:gap-3 max-lg:border-0 max-lg:pb-0">
        <nav aria-label="Filtrar projetos" className="flex gap-2.5 max-lg:-mx-margin max-lg:overflow-x-auto max-lg:px-margin max-lg:pb-2 [scrollbar-width:none]">
          {projectFilters.map((filter) => (
            <MetaChip
              key={filter.id}
              as="button"
              active={active === filter.id}
              onClick={() => onChange(filter.id)}
              className="max-lg:h-11 max-lg:shrink-0 max-lg:px-4"
            >
              {filter.label}
            </MetaChip>
          ))}
        </nav>
        <span className="type-mono ml-auto self-center text-text-mute max-lg:ml-0 max-lg:self-start">
          {label}
        </span>
      </div>
    </section>
  )
}
