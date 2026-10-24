import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import type { getIndexProjects } from "@/content/projects"

type IndexProject = ReturnType<typeof getIndexProjects>[number]

type ProjectCardProps = {
  project: IndexProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  const wide = project.layout === "wide"

  return (
    <Link
      to={`/projetos/${project.slug}`}
      data-cursor="Ver projeto"
      className={cn(
        "on-photo group relative block overflow-hidden rounded-lg border border-stroke transition-[border-color] duration-[var(--dur-micro)] ease-[var(--ease-soft)] hover:border-stroke-hi",
        wide
          ? "aspect-video max-lg:aspect-[16/10]"
          : "aspect-4/5",
      )}
    >
      <ImagePlaceholder
        src={wide ? project.assets.hero : project.assets.card}
        alt={project.title}
        halo={wide}
        overlay="card"
        className="absolute inset-0 size-full rounded-none border-0"
        imgClassName="origin-center transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
      />

      <span
        className={cn(
          "absolute top-6 left-7 z-10 type-mono transition-colors duration-[var(--dur-micro)] max-lg:top-4 max-lg:left-[18px]",
          "text-text-dim group-hover:text-text",
        )}
      >
        {project.kicker}
      </span>

      <div className="absolute right-7 bottom-[26px] left-7 z-10 flex flex-col gap-2.5 max-lg:right-[18px] max-lg:bottom-[18px] max-lg:left-[18px]">
        <span
          className={cn(
            "font-script text-[42px] leading-[1.35] text-text max-lg:text-[28px]",
            "max-w-[18ch] origin-left opacity-0 transition-opacity duration-[var(--dur-base)] ease-[var(--ease-out-expo)] group-hover:opacity-100 max-lg:hidden",
          )}
        >
          “{project.concept}”
        </span>
        <h2
          className={cn(
            "m-0 max-w-[80%] font-display font-light tracking-[-0.02em] text-pretty text-text",
            wide
              ? "text-[44px] leading-[1.1] max-lg:text-[28px]"
              : "text-[40px] leading-[1.1] max-lg:max-w-[86%] max-lg:text-[28px]",
          )}
        >
          {project.title}
        </h2>
      </div>
    </Link>
  )
}
