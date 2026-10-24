import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CarouselProgress } from "@/components/shared/carousel-progress"
import { IconButton } from "@/components/shared/icon-button"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { MetaChip } from "@/components/shared/meta-chip"
import { cta } from "@/content/site"
import { homeFeatured } from "@/content/home"
import { useAutoplayIndex } from "@/hooks/use-autoplay-index"
import { padIndex } from "@/lib/utils"

export function HomeFeatured() {
  const projects = homeFeatured.projects
  const [paused, setPaused] = useState(false)
  const { index, progress, next, prev } = useAutoplayIndex(projects.length, 6000, paused)
  const project = projects[index]

  if (!project) return null

  return (
    <section
      className="flex flex-col gap-14 px-margin pt-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex items-baseline justify-between gap-8 border-b border-rule pb-6">
        <h2 className="m-0 type-h2 text-text">{homeFeatured.title}</h2>
        <Link to="/projetos" className="text-underline-hover text-body text-text max-lg:hidden">
          {cta.viewAllProjects}
        </Link>
      </div>

      <div className="grid items-center gap-20 max-lg:grid-cols-1 max-lg:gap-8 lg:grid-cols-[1fr_1.15fr]">
        <div className="flex flex-col gap-9 max-lg:gap-6">
          <span className="font-display text-[88px] leading-[0.9] font-extralight text-text-mute max-lg:text-[60px]">
            {padIndex(index + 1)}
          </span>
          <h3 className="m-0 type-display text-text max-lg:text-[44px]">
            {project.title}
          </h3>
          <div className="hidden gap-14 type-mono lg:flex">
            <div className="flex flex-col gap-2">
              <span className="text-text-mute">Ano</span>
              <span className="text-text">{project.year}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-text-mute">Local</span>
              <span className="text-text">{project.location}</span>
            </div>
          </div>
          <p className="m-0 max-w-[52ch] type-body-lg text-text-dim max-lg:type-body">
            {project.excerpt}
          </p>
          <div className="flex gap-2.5">
            {project.categoryLabels.map((label) => (
              <MetaChip key={label}>{label}</MetaChip>
            ))}
          </div>
          <div className="flex items-center gap-8 max-lg:hidden">
            <Button asChild>
              <Link to={`/projetos/${project.slug}`}>{cta.viewProject}</Link>
            </Button>
            {project.coordinates ? (
              <span className="type-mono text-text-mute">
                Coordenadas&nbsp;&nbsp;{project.coordinates}
              </span>
            ) : null}
          </div>
        </div>

        <Link
          to={`/projetos/${project.slug}`}
          data-cursor="Ver projeto"
          className="block"
        >
          <ImagePlaceholder
            src={project.assets.hero}
            alt={project.title}
            caption={project.imageCaptions.hero}
            halo
            className="h-[660px] rounded-lg border border-stroke max-lg:aspect-4/5 max-lg:h-auto max-lg:rounded-[20px]"
            captionClassName="left-8 bottom-7"
          />
        </Link>
      </div>

      <div className="flex items-center justify-between gap-10 border-t border-rule pt-7">
        <CarouselProgress
          count={projects.length}
          index={index}
          progress={progress}
          className="max-w-[420px] flex-1 max-lg:hidden"
        />
        <div className="flex items-center gap-6 max-lg:w-full max-lg:justify-between">
          <span className="type-mono text-text-dim">
            {padIndex(index + 1)}/{padIndex(projects.length)}
          </span>
          <div className="flex gap-2">
            <IconButton label="Projeto anterior" onClick={prev} dataCursor="Arrastar">
              ←
            </IconButton>
            <IconButton label="Próximo projeto" onClick={next} dataCursor="Arrastar">
              →
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  )
}
