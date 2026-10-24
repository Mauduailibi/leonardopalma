import { cn } from "@/lib/utils"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { SectionIndex } from "@/components/shared/section-index"
import { casacorPage } from "@/content/casacor"

export function CasacorGallery() {
  const { gallery } = casacorPage

  return (
    <section className="flex flex-col gap-12 px-margin pt-section">
      <SectionIndex index={gallery.index} label={gallery.label} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
        {gallery.items.map((item) => (
          <ImagePlaceholder
            key={item.caption}
            src={item.src}
            alt={item.alt}
            caption={item.caption}
            halo={item.halo}
            grayscale={item.grayscale}
            className={cn(
              "border border-stroke max-lg:h-[320px] max-lg:col-span-1",
              item.height,
              item.radius,
              item.span === 4 && "lg:col-span-4",
              item.span === 3 && "lg:col-span-3",
              item.span === 2 && "lg:col-span-2",
              item.offset && "lg:mt-14",
            )}
            captionClassName="left-7 bottom-6 max-w-[80%] leading-[1.6]"
          />
        ))}
      </div>
    </section>
  )
}
