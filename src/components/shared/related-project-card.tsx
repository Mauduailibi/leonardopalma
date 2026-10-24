import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { getProject } from "@/content/projects"
import type { RelatedCardVariant } from "@/content/services"
import type { ProjectSlug } from "@/lib/assets"

type RelatedProjectCardProps = {
  slug: ProjectSlug
  kicker?: string
  variant: RelatedCardVariant
}

export function RelatedProjectCard({
  slug,
  kicker,
  variant,
}: RelatedProjectCardProps) {
  const project = getProject(slug)
  const compact = variant === "compact"
  const landscape = variant === "landscape"

  return (
    <Link
      to={`/projetos/${slug}`}
      data-cursor="Ver projeto"
      className={cn(
        "on-photo group relative block overflow-hidden border border-stroke transition-[border-color] duration-[var(--dur-micro)] ease-[var(--ease-soft)] hover:border-stroke-hi",
        compact ? "rounded-md" : "rounded-lg",
        landscape ? "aspect-[16/11]" : "aspect-4/5",
      )}
    >
      <ImagePlaceholder
        src={landscape ? project.assets.hero : project.assets.card}
        alt={project.title}
        overlay="card"
        className="absolute inset-0 size-full rounded-none border-0"
        imgClassName="origin-center transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
      />

      {kicker ? (
        <span
          className={cn(
            "absolute top-5 z-10 type-mono text-text-dim transition-colors duration-[var(--dur-micro)] group-hover:text-text",
            landscape ? "left-6" : "left-[22px]",
          )}
        >
          {kicker}
        </span>
      ) : null}

      <h3
        className={cn(
          "absolute z-10 m-0 max-w-[84%] font-display font-light tracking-[-0.01em] text-pretty text-text",
          compact
            ? "bottom-[18px] left-[18px] max-w-[86%] text-xl leading-[1.2]"
            : "bottom-[22px] text-[26px] leading-[1.2]",
          !compact && (landscape ? "left-6" : "left-[22px]"),
        )}
      >
        {project.title}
      </h3>
    </Link>
  )
}
