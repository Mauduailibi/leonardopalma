import { MetaChip } from "@/components/shared/meta-chip"
import { siteConfig } from "@/content/site"
import { getProjectSheet, isLacuna, type getProject } from "@/content/projects"

type ProjectBodyProps = {
  project: ReturnType<typeof getProject>
}

export function ProjectBody({ project }: ProjectBodyProps) {
  const sheet = getProjectSheet(project.slug)
  const tags = project.tags ?? project.categoryLabels
  const highlights =
    project.highlights?.filter((item) => siteConfig.showLacunas || !isLacuna(item)) ?? []

  return (
    <section className="grid items-start gap-[120px] px-margin pt-section max-lg:grid-cols-1 max-lg:gap-12 lg:grid-cols-[1fr_380px]">
      <div className="flex max-w-[60ch] flex-col gap-8">
        {(project.description.length ? project.description : [project.excerpt]).map(
          (paragraph) => (
            <p key={paragraph.slice(0, 40)} className="m-0 type-body-lg text-text-dim">
              {paragraph}
            </p>
          ),
        )}
      </div>

      <aside className="flex flex-col gap-8">
        {sheet.length ? (
          <dl className="flex flex-col border-t border-stroke-hi type-mono">
            {sheet.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[112px_1fr] gap-4 border-b border-rule py-4 last:border-b-0"
              >
                <dt className="m-0 text-text-mute">{row.label}</dt>
                <dd className={isLacuna(row.value) ? "m-0 text-text-dim" : "m-0 leading-[1.6] text-text"}>
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        {tags.length ? (
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <MetaChip key={tag}>{tag}</MetaChip>
            ))}
          </div>
        ) : null}

        {highlights.length ? (
          <div className="flex flex-col gap-3.5 border-t border-rule pt-6">
            <span className="type-mono text-text-mute">Destaques do projeto</span>
            {highlights.map((item) => (
              <span key={item} className="text-[15px] leading-[1.55] text-text-dim">
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </aside>
    </section>
  )
}
