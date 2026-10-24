import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"
import { ProjectCard } from "@/components/shared/project-card"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import type { getIndexProjects } from "@/content/projects"

type IndexProject = ReturnType<typeof getIndexProjects>[number]

type ProjectsGridProps = {
  projects: IndexProject[]
  collapsed: boolean
  onExpand: () => void
}

export function ProjectsGrid({ projects, collapsed, onExpand }: ProjectsGridProps) {
  const reduced = useReducedMotion()
  const visible = collapsed ? projects.slice(0, 5) : projects
  const hasMore = collapsed && projects.length > 5

  return (
    <section className="px-margin pt-14 max-lg:pt-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-lg:gap-4">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{
                duration: 0.64,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(project.layout === "wide" && "lg:col-span-2")}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore ? (
        <Button
          variant="secondary"
          className="mt-4 hidden h-[52px] w-full max-lg:inline-flex"
          onClick={onExpand}
        >
          Carregar mais
        </Button>
      ) : null}
    </section>
  )
}
