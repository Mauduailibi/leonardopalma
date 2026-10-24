import { useEffect } from "react"
import { Navigate, useParams } from "react-router-dom"
import { CtaBlock } from "@/components/shared/cta-block"
import { ProjectBody } from "@/components/project/project-body"
import { ProjectConcept } from "@/components/project/project-concept"
import { ProjectGallery } from "@/components/project/project-gallery"
import { ProjectHero } from "@/components/project/project-hero"
import { ProjectNav } from "@/components/project/project-nav"
import { findProject, getAdjacentProjects } from "@/content/projects"
import { siteConfig } from "@/content/site"

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? findProject(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!project) return
    document.title = `${project.title} | ${siteConfig.name}`
    return () => {
      document.title =
        "Leonardo Palma — Arquitetura, Interiores e Paisagismo | Balneário Camboriú"
    }
  }, [project])

  if (!project) {
    return <Navigate to="/projetos" replace />
  }

  const { prev, next, index } = getAdjacentProjects(project.slug)

  return (
    <>
      <ProjectHero key={project.slug} project={project} index={index} />
      <ProjectConcept concept={project.concept} />
      <ProjectBody project={project} />
      <ProjectGallery project={project} />
      <ProjectNav prev={prev} next={next} />
      <CtaBlock />
    </>
  )
}
