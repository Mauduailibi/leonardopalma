type ProjectConceptProps = {
  concept: string
}

export function ProjectConcept({ concept }: ProjectConceptProps) {
  return (
    <section className="flex justify-center px-margin pt-section">
      <p className="m-0 max-w-[22ch] text-center font-script text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.35] text-pretty text-text">
        “{concept}”
      </p>
    </section>
  )
}
