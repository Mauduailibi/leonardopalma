import { cn } from "@/lib/utils"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { NumberedList } from "@/components/shared/numbered-list"
import { RelatedProjectCard } from "@/components/shared/related-project-card"
import type { ServiceDiscipline } from "@/content/services"

type ServiceDisciplineSectionProps = {
  discipline: ServiceDiscipline
  first?: boolean
}

export function ServiceDisciplineSection({
  discipline,
  first = false,
}: ServiceDisciplineSectionProps) {
  const imageFirst = discipline.align === "start"
  const relatedCount = discipline.related.length

  return (
    <section
      id={discipline.id}
      className={cn(
        "flex scroll-mt-32 flex-col gap-16 px-margin",
        first
          ? "pt-section"
          : "mt-section border-t border-stroke pt-40",
      )}
    >
      <div
        className={cn(
          "flex items-baseline gap-8",
          discipline.align === "end" && "justify-end",
        )}
      >
        {discipline.align === "start" ? (
          <>
            <span className="font-display text-[88px] leading-[0.9] font-extralight text-text-mute max-lg:text-[60px]">
              {discipline.index}
            </span>
            <h2 className="m-0 type-display text-text max-lg:text-[44px]">
              {discipline.title}
            </h2>
          </>
        ) : (
          <>
            <h2 className="m-0 type-display text-text max-lg:text-[44px]">
              {discipline.title}
            </h2>
            <span className="font-display text-[88px] leading-[0.9] font-extralight text-text-mute max-lg:text-[60px]">
              {discipline.index}
            </span>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 gap-10 border-t border-rule pt-9 lg:grid-cols-2 lg:gap-20">
        {discipline.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="m-0 max-w-[58ch] type-body-lg text-text-dim"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div
        className={cn(
          "grid items-start gap-14 max-lg:grid-cols-1",
          imageFirst ? "lg:grid-cols-[1.25fr_1fr]" : "lg:grid-cols-[1fr_1.25fr]",
        )}
      >
        {imageFirst ? (
          <>
            <DisciplineImage discipline={discipline} />
            <NumberedList title="O que está incluso" items={discipline.inclusos} />
          </>
        ) : (
          <>
            <NumberedList title="O que está incluso" items={discipline.inclusos} />
            <DisciplineImage discipline={discipline} />
          </>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <span className="type-mono text-text-mute">
          Projetos relacionados · {relatedCount}
        </span>
        <div
          className={cn(
            "grid gap-6 max-lg:grid-cols-1 max-lg:gap-4",
            relatedCount === 4 && "lg:grid-cols-2 xl:grid-cols-4",
            relatedCount === 6 && "lg:grid-cols-3 xl:grid-cols-6 lg:gap-5",
            relatedCount === 3 && "lg:grid-cols-3",
          )}
        >
          {discipline.related.map((item) => (
            <RelatedProjectCard
              key={item.slug}
              slug={item.slug}
              kicker={item.kicker}
              variant={discipline.relatedVariant}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function DisciplineImage({ discipline }: { discipline: ServiceDiscipline }) {
  return (
    <ImagePlaceholder
      src={discipline.image.src}
      alt={discipline.image.alt}
      caption={discipline.image.caption}
      halo
      overlay="card"
      className="h-[660px] rounded-xl border border-stroke max-lg:h-[420px]"
      captionClassName="left-8 bottom-7 max-w-[70%] leading-[1.6]"
    />
  )
}
