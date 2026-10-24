import { useState } from "react"
import { cn, padIndex } from "@/lib/utils"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { useSignature } from "@/hooks/use-signature"
import type { getProject } from "@/content/projects"

type ProjectHeroProps = {
  project: ReturnType<typeof getProject>
  index: number
}

export function ProjectHero({ project, index }: ProjectHeroProps) {
  const [croquiReady, setCroquiReady] = useState(false)
  const { ref } = useSignature(project.slug, croquiReady)

  return (
    <section className="px-margin pt-6">
      <div
        ref={ref}
        data-signature
        data-cursor="Ver a obra"
        className="sig on-photo relative h-[860px] overflow-hidden rounded-xl border border-stroke max-lg:h-[640px] max-lg:rounded-lg"
      >
        <ImagePlaceholder
          src={project.assets.hero}
          alt={project.title}
          caption={`imagem hero · ${project.imageCaptions.hero}`}
          halo
          fetchPriority="high"
          className="absolute inset-0 size-full"
          imgClassName="sig__final"
          captionClassName="top-1/2 left-14 z-10 -translate-y-1/2 max-lg:left-5 max-lg:right-5 max-lg:top-auto max-lg:bottom-44 max-lg:translate-y-0"
        />

        <img
          src={project.assets.croqui}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onLoad={() => setCroquiReady(true)}
          onError={(event) => {
            event.currentTarget.remove()
            setCroquiReady(false)
          }}
          className={cn(
            "sig__sketch pointer-events-none absolute inset-0 size-full object-cover",
            !croquiReady && "hidden",
          )}
        />

        <div className="sig__front" aria-hidden="true" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.20) 46%, rgba(0,0,0,0.50) 100%)",
          }}
        />

        <div className="absolute bottom-14 left-14 z-10 flex flex-col gap-6 max-lg:bottom-6 max-lg:left-5 max-lg:right-5">
          <div className="flex items-center gap-6 type-mono">
            <span className="text-text">{padIndex(index)}</span>
            <span className="h-px w-14 bg-stroke-hi" />
            <span className="text-text-dim">{project.kicker}</span>
          </div>
          <h1
            className={cn(
              "m-0 max-w-[16ch] font-display text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.94] font-extralight tracking-[-0.035em] text-pretty text-text",
              "max-lg:text-[52px] max-lg:leading-[0.96]",
            )}
          >
            {project.title}
          </h1>
        </div>
      </div>
    </section>
  )
}
