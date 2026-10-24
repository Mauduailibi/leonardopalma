import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import type { getProject } from "@/content/projects"

type Neighbor = ReturnType<typeof getProject>

type ProjectNavProps = {
  prev: Neighbor
  next: Neighbor
}

function NeighborLink({
  project,
  direction,
}: {
  project: Neighbor
  direction: "prev" | "next"
}) {
  const isNext = direction === "next"

  return (
    <Link
      to={`/projetos/${project.slug}`}
      data-cursor="Ver projeto"
      className={cn(
        "group flex items-center gap-7 transition-transform duration-[var(--dur-fast)] ease-[var(--ease-out-expo)]",
        isNext ? "justify-end text-right hover:translate-x-2" : "hover:-translate-x-2",
      )}
    >
      {!isNext ? <Thumb project={project} /> : null}
      <div
        className={cn(
          "flex min-w-0 flex-col gap-3",
          isNext && "items-end",
        )}
      >
        <span className="type-mono text-text-mute">
          {isNext ? "Próximo projeto →" : "← Projeto anterior"}
        </span>
        <h3 className="m-0 type-h2 text-text max-lg:text-[28px]">{project.title}</h3>
        <span className="type-mono text-text-dim">{project.kicker}</span>
      </div>
      {isNext ? <Thumb project={project} /> : null}
    </Link>
  )
}

function Thumb({ project }: { project: Neighbor }) {
  return (
    <ImagePlaceholder
      src={project.assets.card}
      alt=""
      className="h-[164px] w-[132px] shrink-0 rounded-md border border-stroke max-lg:hidden"
    />
  )
}

export function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <section className="px-margin pt-section">
      <div className="grid items-center gap-16 border-t border-stroke pt-16 max-lg:grid-cols-1 max-lg:gap-10 lg:grid-cols-[1fr_1px_1fr]">
        <NeighborLink project={prev} direction="prev" />
        <div className="hidden h-[164px] bg-stroke lg:block" />
        <NeighborLink project={next} direction="next" />
      </div>
    </section>
  )
}
