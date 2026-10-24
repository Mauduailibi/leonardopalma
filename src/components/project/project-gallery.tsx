import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { getProjectGallery, type getProject } from "@/content/projects"

type ProjectGalleryProps = {
  project: ReturnType<typeof getProject>
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const items = getProjectGallery(project.slug)
  const pair = items.slice(0, 2)
  const wide = items[2]
  const grid = items.slice(3, 7)

  return (
    <>
      <section className="grid grid-cols-1 items-start gap-6 px-margin pt-section lg:grid-cols-2">
        {pair.map((item, index) => (
          <ImagePlaceholder
            key={item.src}
            src={item.src}
            alt={item.alt}
            caption={item.caption}
            halo={index === 0}
            loading="lazy"
            className={
              index === 0
                ? "h-[760px] rounded-lg border border-stroke max-lg:h-[420px]"
                : "h-[660px] rounded-lg border border-stroke max-lg:h-[420px] lg:mt-16"
            }
            captionClassName="left-7 bottom-6 max-w-[76%] leading-[1.6]"
          />
        ))}
      </section>

      {wide ? (
        <section className="flex flex-col gap-5 px-margin pt-section">
          <ImagePlaceholder
            src={wide.src}
            alt={wide.alt}
            caption={wide.caption}
            halo
            loading="lazy"
            className="h-[720px] rounded-xl border border-stroke max-lg:h-[420px] max-lg:rounded-lg"
            captionClassName="left-8 bottom-7 max-w-[70%] leading-[1.6]"
          />
        </section>
      ) : null}

      <section className="grid grid-cols-1 gap-6 px-margin pt-section lg:grid-cols-2">
        {grid.map((item) => (
          <ImagePlaceholder
            key={item.src}
            src={item.src}
            alt={item.alt}
            caption={item.caption}
            loading="lazy"
            className="h-[620px] rounded-lg border border-stroke max-lg:h-[360px]"
            captionClassName="left-7 bottom-6 max-w-[76%] leading-[1.6]"
          />
        ))}
      </section>
    </>
  )
}
