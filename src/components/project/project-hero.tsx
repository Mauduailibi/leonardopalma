import { useEffect, useState } from "react"
import { cn, padIndex } from "@/lib/utils"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { CroquiCanvas, type CroquiData } from "@/components/project/croqui-canvas"
import { signatureSpan, useSignature } from "@/hooks/use-signature"
import type { getProject } from "@/content/projects"

type ProjectHeroProps = {
  project: ReturnType<typeof getProject>
  index: number
}

export function ProjectHero({ project, index }: ProjectHeroProps) {
  const [croqui, setCroqui] = useState<CroquiData | null>(null)
  const [croquiFailed, setCroquiFailed] = useState(false)
  const { ref, phase } = useSignature(Boolean(project.croqui) && !croquiFailed, croqui !== null)

  useEffect(() => {
    if (!project.croqui) return
    let alive = true
    fetch(project.assets.croqui)
      .then((response) => (response.ok ? response.json() : Promise.reject(response)))
      .then((data: CroquiData) => alive && setCroqui(data))
      .catch(() => alive && setCroquiFailed(true))
    return () => {
      alive = false
    }
  }, [project.croqui, project.assets.croqui])

  return (
    <section className="px-margin pt-6">
      <div
        ref={ref}
        data-signature
        data-phase={phase}
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

        <div
          aria-hidden="true"
          className="sig__shade pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.20) 46%, rgba(0,0,0,0.50) 100%)",
          }}
        />

        {project.croqui && !croquiFailed ? (
          <>
            <div className="sig__paper" aria-hidden="true" />
            {croqui ? (
              <div className="sig__croqui" aria-hidden="true">
                <CroquiCanvas
                  data={croqui}
                  play={phase === "drawing" || phase === "reveal"}
                  span={signatureSpan()}
                />
              </div>
            ) : null}
          </>
        ) : null}

        <div className="sig__ui absolute bottom-14 left-14 z-10 flex flex-col gap-6 max-lg:bottom-6 max-lg:left-5 max-lg:right-5">
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
